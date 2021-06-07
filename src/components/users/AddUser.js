import React, { useState, useRef } from 'react'
import Card from './Card'
import classes from './AddUser.module.css'
import Button from './Button'
import ErrorModal from './ErrorModal'
function AddUser(props){
    const nameInputRef=useRef();
    const ageInputRef=useRef();

    const [error,setError]=useState("");
    const handlSubmit=(event)=>{
        event.preventDefault();
       const enterName=nameInputRef.current.value;
       const enterAge=ageInputRef.current.value;
       nameInputRef.current.value="";
       ageInputRef.current.value="";
    
    if(enterName.trim().length===0 || enterAge.trim().length===0){
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age"
        })
        return;
    }
    if(enterAge<1){
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age >0"
        })
         return;
    }
        props.onAddUser(enterName,enterAge);
    }
    const errorHandl=props=>{
        return setError(null);
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandl}></ErrorModal>}
        <Card className={classes.input}>
           <form onSubmit={handlSubmit}>
            <label htmlFor="user">User Name </label>
            <input 
                id="user" 
                type="text" 
                ref={nameInputRef}
            />
            <label htmlFor="age">Age (Year) </label>
            <input 
                id="age" 
                type="number" 
                ref={ageInputRef}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
        </div>
    );
}
export default AddUser;