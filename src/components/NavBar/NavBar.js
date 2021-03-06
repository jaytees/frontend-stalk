import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./../../LoginForm";
import LogOut from "./../../LogOut";

import "./NavBar.css";

function NavBar(props) {
  const [loginFormDisplayed, setLoginFormDisplayed] = useState(false);

  const displayLogin = () => {
    !loginFormDisplayed
      ? setLoginFormDisplayed(true)
      : setLoginFormDisplayed(false);
  };

  return (
    <div id="nav-div">
      <nav id="navbar">
        <p>{props.navMessage}</p>

        {props.tokenHeaderValue ? (
          <>
            <Link to={"/profile/"}>
              <p>Profile</p>
            </Link>
            <Link to={`/mygarden/${localStorage.getItem("userId")}`}>
              <p>Your Garden</p>
            </Link>
            <Link to={`/plantcalendar/${localStorage.getItem("userId")}`}>
              <p>Calendar</p>
            </Link>
            <LogOut logOutMessage={props.messageCreator} />
          </>
        ) : (
          <div id="nav-login-operations">
            <p id="login-trigger" href="#" onClick={displayLogin}>
              Log In
            </p>

            {loginFormDisplayed && (
              <div id="login-content">
                <LoginForm
                  loginMessage={props.messageCreator}
                  loginDisplay={displayLogin}
                />
              </div>
            )}

            <Link to="/signup" id="signup-link">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
