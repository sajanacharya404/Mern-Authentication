import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import "./styles/Header.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#5fe6ed",
          padding: "10px",
          height: "10vh",
        }}
      >
        <div>
          <Link
            to={"/"}
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "Black",
              fontSize: "20px",
            }}
          >
            MernAuth
          </Link>
        </div>
        <div>
          {userInfo ? (
            <>
              <div className="dropdown">
                <button className="dropbtn">welcome {userInfo.name}</button>
                <div className="dropdown-content">
                  <div onClick={logoutHandler} style={{ cursor: "pointer" }}>
                    Logout
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <Link to={"/profile"}>Profile</Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "Black",
                  fontSize: "20px",
                  marginRight: "10px",
                }}
              >
                Login
              </Link>
              <Link
                to={"/register"}
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "Black",
                  fontSize: "20px",
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
