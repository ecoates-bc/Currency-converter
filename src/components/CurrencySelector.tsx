import React from "react";
import { Input, Row, Col } from "reactstrap";
import { Currency } from "../utils/getCountries";


type CurrencySelectorProps = {
    currencies: Currency[],
    setFrom: (text: string) => void,
    setTo: (text: string) => void,
};


/*
    Render selection inputs for the "from" currency and "to" currency
    Modifies Converter state fromCurr and toCurr
*/
export default function CurrencySelector(props: CurrencySelectorProps) {
    return (
        <Row>
            <Col className="col-1">
                <p>From:</p>
            </Col>
            <Col>
                <Input
                    type="select"
                    onChange={(e) => props.setFrom(e.target.value)}
                >
                    {
                        props.currencies.map((currency) => (
                            <option 
                                key={currency.code} 
                                value={currency.code}
                            >
                                {currency.name} {currency.flag} 
                            </option>
                        ))
                    }
                </Input>
            </Col>
            <Col className="col-1">
                <p>To:</p>
            </Col>
            <Col>
                <Input
                    type="select"
                    onChange={(e) => props.setTo(e.target.value)}
                >
                    {
                        props.currencies.map((currency) => (
                            <option 
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.name} {currency.flag}
                            </option>
                        ))
                    }
                </Input>
            </Col>
        </Row>
    );
}