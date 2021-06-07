import React, {useState} from 'react'
function InputName(){
    const [name, setName]=useState("abc")
    const [password,setPassword]=useState("abc")
    const handleName=(props)=>{
        setName(props.target.value);
        
    }
    const handlePassword=(props)=>{
        setPassword(props.target.value);
    }
    return(
        <div>
            <form>
                <div className="name">
                    <label>User Name:</label>
                    <input type="text" name="name" value={name} onChange={handleName}></input>
                </div>
                <div className="pass">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePassword}></input>
                </div>
                <div className="submit">
                    <button>Add</button>
                </div>
            </form>
            <h2>user: {name}</h2>
            <h2>pass: {password}</h2>
        </div>
    );
}
export default InputName;