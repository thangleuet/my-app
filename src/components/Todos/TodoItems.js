import React from 'react';
import './TodoItems.css'
const TodoItems=(props)=>{
    const todo=props.todoProps;
    const TickBox=props.onTickBox;
    const deleteTodo= props.deleteTodoFunc;
    return(
        <div className="item" style={{textDecoration:todo.complete?'line-through' : 'none'}}>
            <input 
                type="checkbox" 
                onChange={TickBox.bind(this,todo.id)} 
                checked={todo.complete}/>
            {todo.title}
            <button className="buttonDelete" onClick={deleteTodo.bind(this,todo.id)}>Delete</button>
        </div>
    );
}
export default TodoItems;