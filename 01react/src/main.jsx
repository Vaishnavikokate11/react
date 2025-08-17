import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
  <div>
    <h1>My custom app</h1>
  </div>
  )
  
}

const anotherElemet = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "vaishnavi"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit  google',
  anotherElemet
)

ReactDOM.createRoot(document.getElementById("root")).render(
  
    
    //<MyApp/>
   // anotherElemet
   reactElement
 // <App />
);

