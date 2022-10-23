import axios from 'axios';

/*
    Make a request, return a promise for a converted currency value
*/
export default async function getCurrencyVaule(currFrom: string, currTo: string, value: string) {
    try {
        const { data, status } = await axios.get(
            `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/pair/${currFrom}/${currTo}/${value}`,
            {
                headers: {
                    Accept: "application/json",
                },
            },
        )

        return data["conversion_result"];

    } catch(error) {
        console.log(error);
    }
}