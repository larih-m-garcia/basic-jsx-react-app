//First file that gets executed when the app runs

// 1) Import React and ReactDOM libs
import React from "react";
import ReactDOM from 'react-dom/client'; //to show the component in the browser
import App from "./App";

// 2) Get a reference to the div with ID root (which is in public/index.html)
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);