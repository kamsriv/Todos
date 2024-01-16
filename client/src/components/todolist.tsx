import * as React from "react";
import * as ReactDOM from "react-dom";

type Props = {
    Id: number;
    Name: string;
    Status: boolean;
}

type Items = { name:string, items:Props[]};

export function TodoList({ name, items }: Items) {
    return items.map((a, idx) => {
        return <ul key={idx} id={name}>{Todo(a)}</ul>;
    });
}

export function Todo({ Id, Name, Status }: Props) {
    let [cbxVal, onCheckChange] = React.useState(Status); //Always use the first variable to assign the value for an element not the state.
    const onChanged = () => {
        onCheckChange(!cbxVal);
    }
    
    return (
        <li key={Id} style={{display:'flex'}}>
            <span><input type="checkbox" key={Id} checked={cbxVal} onChange={onChanged} /></span>
            <span className={cbxVal ? "item-completed" : "item-active"}>{Name}</span>
        </li>
    );
}