import * as React from 'react';
import * as ReactDOM from 'react-dom';
type Props = {
    name: string;
    onChange: (str: string) => void;
    placeholder: string;
    value: string;
};

function Input({ onChange, name, placeholder, value = "" }: Props) {
    return (
        <>
        <input
            onChange={event => onChange(event.target.value)}
            name={name}
            placeholder={placeholder}
            value={value}
        />
        <button
            onClick={event => { console.log(value); } }
            >Add</button>
        </>
    );
}

export default Input;
