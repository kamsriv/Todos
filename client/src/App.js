import logo from './logo.svg';
import './App.css';
import Input from './components/input.tsx';
import {TodoList, Todo} from './components/todolist.tsx';
import { useEffect, useState } from 'react';
//@ts-check
function App() {
    let [txtName, setNameInput] = useState('');
    let [props, setProps] = useState([]);
    const onChange = (val) => {
        setNameInput(val);
    }

    const fetchData = () => {
        fetch("http://localhost:5107/WeatherForecast/Todos")
            .then(resp => { if (resp.ok) return resp.json(); else { throw new Error("exception occurred"); } })
            .then(data => { setProps(data); })
            .catch(err => console.log(err));
    }
    useEffect(() => { fetchData(); },[props]);
  return (
      <div className="App">
          <header className="App-header"></header>
          <Input name="name" placeholder="Input Component" onChange={onChange} value={txtName} />
          <TodoList name="todo" items={props} />
    </div>
  );
}

export default App;
