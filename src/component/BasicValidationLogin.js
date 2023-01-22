import React, { useState } from "react";

export default function BasicValidationLogin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(password);
    alert("success");
  };

  const userHandler = (e) => {
    let user = e.target.value;
    if (user.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  };

  const passwordHandler = (e) => {
    let password = e.target.value;
    if (password.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Basic Validation Login</h1>
      </div>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => userHandler(e)}
        />
        <br />
        <span>{userErr ? "Name length invalid" : ""}</span>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => passwordHandler(e)}
        />
        <br />
        <span>{passwordErr ? "Password length invalid" : ""}<br/></span>
        <button type="submit"> Log in</button>
      </form>
    </div>
  );
}
