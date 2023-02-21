import React from "react";
import "./Navbar.scss";
import { Logo } from "../../../assets";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-container-content">
          <div className="nav-container-content-left">
            <img src={Logo} alt="GPTLOGO" />
          </div>
          <div className="nav-container-content-middle">
            <button>Home</button>
            <button>What is GTP?</button>
            <button>Open AI</button>
            <button>Case Studies</button>
            <button>Library</button>
          </div>
          <div className="nav-container-content-right">
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
