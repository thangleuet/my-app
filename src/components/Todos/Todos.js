import React, { useState , useEffect } from 'react'
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import axios from 'axios'

import { v4 as uuidv4 } from 'uuid';

function Todos() {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: "Việc 1",
            complete: false,
        },
        {
            id: 2,
            title: "Việc 2",
            complete: false,
        },
        {
            id: 3,
            title: "Việc 3",
            complete: false,
        },

    ]);
useEffect(
    () => {
        const getTodo = async () =>{
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                setTodos(res.data)
            }
           
            catch (error) {
                setTodos(error.massage)
            }
        }
        getTodo()
    },[]
)
    const setTicked = (id) => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) todo.complete = !todo.complete;
            return todo;
        });

        setTodos(newTodo);
    }

    const deleteTodo = (id) => {
        const newTodo = todos.filter(todo => {
            return todo.id !== id;
        })
        setTodos(newTodo);
    }
    const AddTodos = title => {
        const newTodo = [...todos, 
            {   id: Math.random(), 
                title: title, 
                complete:false
            }]
        setTodos (newTodo);
    }
    return (
        <>
            <AddTodo  onAddTodos = {AddTodos} />
            {todos.map(todo =>
                <TodoItems
                    key = {todo.id}
                    todo = {todo}
                    onTick = {setTicked}
                    onDelete = {deleteTodo}
                   
                />
            )
            }
        </>
    );
}
export default Todos;