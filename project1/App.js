/*
<div id="parent">
    <div id="child">
        <h1>Hello World from React!</h1>
        <h2>It's good to see you!</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", null, "Hello World from React!"),
        React.createElement("h2", null, "It's good to see you!")]
    )
);



// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React!"
//     );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);