import * as React from "react";
import * as ReactDOM from "react-dom";

type Props = {
    id: number;
    title: string;
    status: boolean;
}

type Items = { name:string, items:Props[]};

export function TodoList({ name, items }: Items) {
    return <ul>{items.map(a => Todo(a))}</ul>;
}

export function Todo({ id, title, status }: Props) {
    let [cbxVal, onCheckChange] = React.useState(status); //Always use the first variable to assign the value for an element not the state.
    const onChanged = () => {
        onCheckChange(!cbxVal);
    }
    
    return (
        <li style={{ display: 'flex', justifyContent: "start" }} key={id}>
            <span><input type="checkbox" key={id} checked={cbxVal} onChange={onChanged} /></span>
            <span className={cbxVal ? "item-completed" : "item-active"}>{title}</span>
        </li>
    );
}