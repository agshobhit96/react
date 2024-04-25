import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", {id: "heading"}, "Hello World"
//     );

// console.log(heading);

// const jsxHeading = <h1 id="heading">Hello World from JSX</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


const elem = "I am here.";

// Functional Component 
const Title = () => {
    return <h1 id="heading">{elem}Hello World from JSX</h1>;
};

// Component composition
const HeadingComponent = () => (
    <div className="container">
        {Title()}
        <Title />
        <h2>Sub Heading</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);