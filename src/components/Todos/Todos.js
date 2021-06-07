import React, { Fragment, useState } from 'react'
import TodoItems from './TodoItems';

const Todos = () => {
    const todolist = [
        {
            id: 1,
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

    ]
    const [todoState, setTodoState] = useState(todolist);
    const tickBox = id => {
        const newTodo = todoState.map(todo => {
            if (todo.id === id) todo.complete = !todo.complete;
            return todo;
        })

        setTodoState(newTodo);
    }
    const deleteTodo = id => {
        const newTodo = todoState.filter(todo => {
            return todo.id !== id;
        })
        setTodoState(newTodo);
    }
    return (
        <Fragment>
            {todoState.map(todo => {
                return <TodoItems key={todo.id} deleteTodoFunc={deleteTodo} todoProps={todo} onTickBox={tickBox} />
            }
            )
            }
        </Fragment>

    );
}
export default Todos;