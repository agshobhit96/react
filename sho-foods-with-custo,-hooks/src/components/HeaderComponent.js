import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const user = useContext(UserContext);
    const [btnName, setBtnName] = useState("Sign In");

    // Subscribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart - ({cartItems.length})</Link> </li>
                    <button className="loginBtn" onClick={() => {
                        btnName === "Sign In" ? setBtnName("Sign Out") : setBtnName("Sign In");
                    }}>{btnName}</button>

                    <li>{user.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;