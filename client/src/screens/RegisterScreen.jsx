import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/userApiSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/login");
        toast("Register successfully");
      } catch (error) {
        console.log(error);
      }
    }
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
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>Register</h2>
        <form
          action=""
          onSubmit={submitHandler}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",

            height: "40vh",
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          />
          <input
            type="Pasword"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: "10px", borderRadius: "20px" }}
          />
          {isLoading && <Loader />}
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "20px",
              border: "none",
              marginTop: "20px",
            }}
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
