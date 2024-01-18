import * as React from 'react';
import * as ReactDOM from 'react-dom';
type Props = {
    name: string;
    onChange: (str: string) => void;
    placeholder: string;
    value: string;
};

let addTodo = (name: string)=>{
    fetch("http://localhost:5107/WeatherForecast/Todo", {
        method: "POST",
        body: JSON.stringify({id:1,title:name,status:true}),
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

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
                onClick={event => { addTodo(value); } }
            >Add</button>
        </>
    );
}

export default Input;
