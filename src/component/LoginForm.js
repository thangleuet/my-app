import React from "react";
export default function LoginForm(){
    return(
    <div>
        <form>
            <div>
                <label for="name">Username</label>
                <input id="username" type="text"></input>   
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <button id="submit">Submit</button>
            </div>
        </form>
    </div>
    )
}