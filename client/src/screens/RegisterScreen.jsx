import { React, useState } from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Register</h1>
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <form action="" onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="Pasword"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
          <p>
            Already have an account ? <Link to={"/login"}>Login Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
