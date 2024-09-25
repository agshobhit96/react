import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("Sign In");
    return (
        <div id="header" className="flex w-full justify-between items-center">
            <div className="flex items-center justify-center">
                <img className="w-36 h-24" src={LOGO_URL} alt="logo" />
            </div>
            <div>
                <ul className="flex-row items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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