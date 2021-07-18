import React, { useState } from 'react'

const AddTodo = ({onAddTodos}) =>{
    const handlSubmit=(event)=>{
        event.preventDefault();
        if (title !=='') {
            onAddTodos(title)
            setTitle('');
        }
    }
const [title , setTitle] = useState();
const handleTitle = event => {
    setTitle(event.target.value);

}
    return(
        <form onSubmit={handlSubmit}>
            <input type='text' 
                name="title" 
                placeholder="Thêm việc"
               value={title}
                onChange={handleTitle} />
            <input type="submit" value="Thêm" />
        </form>
    );
}
export default AddTodo;
//demo abc