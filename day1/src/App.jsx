import react from "react";
import ReactDOM from "react-dom/client";

const element=<h1 style={{color:"red"}}>hello world</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
   
root.render(element);