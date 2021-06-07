import React from 'react';
import './TodoItems.css'
const TodoItems = ({ todo, onTick, onDelete }) => {

    return (
        <div className="item" style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                onChange={() => console.log("GAY")}
                checked={todo.complete} />
            {todo.title}
            <button className="buttonDelete" onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}
export default TodoItems;