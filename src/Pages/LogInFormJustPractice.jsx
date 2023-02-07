import React, { useState } from "react";

const LogInFormJustPractice = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("e", e);
  };

  return (
    <div>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log("email", e);
            }}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log("password", e);
            }}
          />

          <button type="submit" disabled={!validateForm()}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInFormJustPractice;
