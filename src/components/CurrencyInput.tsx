import React from "react";
import { Input, FormGroup } from "reactstrap";

type CurrencyInputProps = {
    defaultText: string,
    setText: (text: string) => void,
};


/*
    Render an input for setting a "from" currency value
    Modifies Converter state inputValue
*/
export default function CurrencyInput(props: CurrencyInputProps) {
    const checkFormat = (val: string) => {
        const re = /^(\d+\.?\d{0,2})?$/;
        if (val.match(re)) {
            props.setText(val);
        }
    }

    return (
        <div className="d-flex">
            <Input
                value={props.defaultText}
                onChange={(e) => checkFormat(e.target.value)}
            />
        </div>

    );
}