import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Sign In");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={() => {
                        btnName === "Sign In" ? setBtnName("Sign Out") : setBtnName("Sign In");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;