import React from "react";
import ReactDOM from "react-dom/client";

const parent = <h1>Hello World from JSX..!!</h1>;
const root = ReactDOM.createRoot(document.getElementById("myText"));
root.render(parent);

//Functional Component
//Multiple ways to include other components(Composite Components).
const data = 1000;
const HeadingComponent = () => {
  return (
    <div>
      <HeadingComponent2 />
      <HeadingComponent2></HeadingComponent2>
      {HeadingComponent2()}
      {data}
      <h1>This is Functional Component.</h1>
    </div>
  );
};
const funcRoot = ReactDOM.createRoot(document.getElementById("myText2"));
funcRoot.render(<HeadingComponent />);

//Component Composite
const HeadingComponent2 = () => {
  return (
    <div>
      <h2>I'm Component Composite.</h2>
    </div>
  );
};
