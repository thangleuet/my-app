import React, { useState , useEffect } from 'react'
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import axios from 'axios'

//import { v4 as uuidv4 } from 'uuid';

function Todos() {
    const [todos, setTodos] = useState([]);
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
    const setTicked = async (id) => {

    
        const newTodo = todos.map(todo => {
            if (todo.id === id) todo.complete = !todo.complete;
            return todo;
        });

        setTodos(newTodo);
    }

    const deleteTodo = async (id) => {
       try {
         await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        
       } catch (error) {
           console.log(error.massage)
       }
       const newTodos = todos.filter(todo =>{
        return todo.id !==id;
    })
    setTodos(newTodos)
    }
    const AddTodos = async (title) => {
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                title: title,
                complete : false
            })
            const newTodos = [...todos, res.data]
            setTodos (newTodos);
        } catch (error) {
            console.log(error.massage)
        }

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