import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Row, Col, Button } from 'reactstrap';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput';
import getCurrencyValue from '../utils/getCurrencyValue';
import { Currency } from '../utils/getCountries';


type ConverterProps = {
    currencies: Array<Currency>;
};


/*
    A panel for converting one currency to another.
    Internal state: input value, output value, input currency, output currency
*/
export default function Converter(props: ConverterProps) {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [fromCurr, setFromCurr] = useState("BGN");
    const [toCurr, setToCurr] = useState("BGN");

    const convertValue = (val: string) => {
        setOutputValue("...");
        getCurrencyValue(fromCurr, toCurr, val)
            .then((res) => {
                setOutputValue(res);
            })
            .catch((err) => {
                console.log(err);
                setOutputValue("...");
            });
    };

    const setToCurrAndValue = (code: string) => {
        setToCurr(code);
        setOutputValue("");
    }

    return (
        <div>
            <CurrencySelector 
                currencies={props.currencies}
                setFrom={setFromCurr}
                setTo={setToCurrAndValue}
            />
            <Row className='mt-3'>
                <Col className='col-2'>
                    Amount ({fromCurr}):
                </Col>
                <Col>
                    <CurrencyInput 
                        defaultText={inputValue}
                        setText={setInputValue}
                    />
                </Col>
                <Col className='col-2'>
                    Amount ({toCurr}):
                </Col>
                <Col>
                    <Input 
                        disabled
                        value={outputValue}
                    />
                </Col>
            </Row>
            <Button
                className='btn-success mt-5'
                onClick={() => convertValue(inputValue)}
            >
                Convert
            </Button>
        </div>
    );
}