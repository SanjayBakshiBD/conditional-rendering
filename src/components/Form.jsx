import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && 
      <input type="password" placeholder="Confirm Password" />}
      
      
      {props.isRegistered ?
      <button type="submit">Login</button>:
      <button type="submit">Register</button> 
      }
    </form>
  );
}

export default Form;
