import React from 'react';
import ReactDOM from "react-dom/client";

// import Welcome from './Welcome'
import Home from '../pages/Home'

const App = () => {
    return (
        <Home />
    );
};


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);