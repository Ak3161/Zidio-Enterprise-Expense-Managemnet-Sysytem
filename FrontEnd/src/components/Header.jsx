import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.png"; // Replace with actual logo path

const Header = () => {
    const [active, setActive] = useState("home");
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setActive(path);
        navigate(`/${path}`);
    };

    return (
        <div className="header-box">
            <div className="nav-left">
                <img src={logo} alt="Company Logo" className="logo" />
                <span className="company-name">Expensify Pro</span>
            </div>

            <div className="nav-right">
                <button
                    className={active === "home" ? "active" : ""}
                    onClick={() => handleNavigation("")}
                >
                    Home
                </button>
                <button
                    className={active === "about" ? "active" : ""}
                    onClick={() => handleNavigation("about")}
                >
                    About
                </button>
                <button
                    className={active === "login" ? "active" : ""}
                    onClick={() => handleNavigation("auth/login")}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Header;
