import React, { useState } from "react";
function userTable() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = () => {
      alert("User: " + username + "\nPassword: " + password);
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User name: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit" id="submit">
              Add
            </button>
          </div>
        </form>
        <div>User: {username}</div>
        <div>Password: {password}</div>
      </>
    );
  }
  
  export default userTable;
  