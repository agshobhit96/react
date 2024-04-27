import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

/*
** Header
    - Logo
    - Nav Items
** Body
    - Search
    - Cards-container
** Footer
    - Social Links
    - Contact Us
*/


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
            {/* <FooterComponent /> */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);