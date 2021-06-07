import React,{useState} from 'react'
function randomName(){
    const randName=["Thang","A","B","C"]
    const index=Math.floor(Math.random()*4)
    return randName[index];
}
function UserName(){
    const [name, setName]= useState("Thang")
    function handleName(){
        const newName=randomName();
        setName(newName);
        console.log(name);
    }
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={handleName}>Click here</button>
        </div>
    );
}
export default UserName;