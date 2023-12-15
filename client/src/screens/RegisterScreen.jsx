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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          width: "100%",
        }}
      >
        <h1>Register</h1>
        <form
          action=""
          onSubmit={submitHandler}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",

            height: "40vh",
          }}
        >
          <input
            type="email"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          <input
            type="Pasword"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          <input
            type="email"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          <button
            type="submit"
            style={{ padding: "10px", borderRadius: "20px", border: "none" }}
          >
            Submit
          </button>
          <p>
            Already have an account ? <Link to={"/login"}>Login Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
