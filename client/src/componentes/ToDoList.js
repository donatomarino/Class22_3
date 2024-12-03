import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const addList = () => {
        setList([...list, task])
    }

    const deleteTask = () => {
        setList(list.slice(0, -1))
    }

    return (
        <>
            <Input
                type='text'
                onChange={handleTask}
            />
            <br></br>
            <Button value='Añadir' onClick={addList} />
            <Button value='Borrar' onClick={deleteTask} />
            <div className="list">
                <ul>
                    {list.map((e, index) => (
                        <li key={index}>{e}
                            <Button value='Borrar' onClick={() =>
                                setList(list.filter((_, i) => i != index))
                            } />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ToDoList;