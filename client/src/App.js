import logo from './logo.svg';
import './App.css';
import Input from './components/input.tsx';
import {TodoList, Todo} from './components/todolist.tsx';
import { useState } from 'react';
//@ts-check
function App() {
    let [txtName, setNameInput] = useState('');
    const onChange = (val) => {
        setNameInput(val);
    }
    let Props = [{ Id: 1, Name: "Work as team", Status: true }, { Id: 2, Name: "Task", Status: false }];
  return (
      <div className="App">
          <header className="App-header"></header>
          <Input name="name" placeholder="Input Component" onChange={onChange} value={txtName} />
          <TodoList name="todo" items={Props} />
    </div>
  );
}

export default App;
