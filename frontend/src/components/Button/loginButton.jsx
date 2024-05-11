import React from "react";
import { NavLink } from "react-router-dom";
import LoginSignInPage from "../../pages/Admin/LoginSignInPage";

function LoginButton() {
  return (
    <div>
      <NavLink
        to="/loginSignInPage"
        className={({ isActive }) =>
          `cta  ${isActive ? "text-violet-500" : "text-green-500"}`
        }
      >
        Login Btn
      </NavLink>
      <LoginSignInPage />
    </div>
  );
}

export default LoginButton;
