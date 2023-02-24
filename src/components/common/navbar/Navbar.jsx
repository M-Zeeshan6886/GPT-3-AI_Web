import React, { useState } from "react";
import "./Navbar.scss";
import { Logo } from "../../../assets";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
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
      {/* //Responsive NavBar */}
      <div className="responsive-topbar">
        <div className="responsive-topbar-content">
          <img src={Logo} alt="GPTLOGO" />
          <div className="responsive-topbar-content-icon">
            <button>
              {sidebar ? (
                <IoMdClose className="cross-icons" onClick={showSidebar} />
              ) : (
                <IoIosMenu className="cross-icons" onClick={showSidebar} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive-container */}
      {sidebar && (
        <div className="responsive-container">
          <div className="responsive-container-content">
            <div className="responsive-container-content-pg">
              <button>Home</button>
              <button>What is GTP?</button>
              <button>Open AI</button>
              <button>Case Studies</button>
              <button>Library</button>
            </div>
            <div className="responsive-container-content-pg-btns">
              <button>Sign in</button>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
