import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo.name);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#5fe6ed",
          padding: "10px",
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
              <p>Welcome {userInfo.name}</p>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
