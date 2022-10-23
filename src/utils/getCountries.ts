import axios from 'axios';

export type Currency = {
    code: string,
    flag: string,
    name: string,
};

/*
    Return true if the Currency object c exists in l
    (reject if c's currency code exists in l)
*/
function isCurInList(c: Currency, l: Currency[]) {
    for (let currency of l) {
        if (currency.code === c.code) {
            return true;
        }
    }
    return false;
}

/*
    Make a request, return a promise for a list of currencies
*/
export default async function getCountries() {
    try {
        const { data, status } = await axios.get(
            "https://restcountries.com/v3.1/all?fields=currencies,flag",
            {
                headers: {
                    Accept: "application/json",
                },
            },

        )

        let codes: Array<Currency> = [];
        for (let country of data) {
            for (let currency of Object.keys(country["currencies"])) {
                const currObj = {
                    flag: country["flag"],
                    code: currency,
                    name: country["currencies"][currency]["name"],
                };
                if (!isCurInList(currObj, codes)) {
                    codes.push(currObj);
                }
            }
        }
        return codes;

    } catch (error) {
        console.log(error);
        return [];
    }
}