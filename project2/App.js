import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", null, "Hello World from React!"),
        React.createElement("h2", null, "It's good to see you...!")]
    )
);




const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);