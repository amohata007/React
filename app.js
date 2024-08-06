// Hello world in React
// const heading = React.createElement("h1",{},"Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("myText"));
// root.render(heading);

//Nested Rendering
const parent = React.createElement("div",{id: "parent"}, 
React.createElement("div",{id: "child"},
[React.createElement("h1",{},"Hi I'm H1 Tag."),
React.createElement("h2",{},"Hi I'm H2 Tag.")]));

const root = ReactDOM.createRoot(document.getElementById("myText"));
root.render(parent);