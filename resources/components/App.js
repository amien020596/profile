import React from 'react';
import ReactDOM from "react-dom/client";

import Welcome from './Welcome'

const App = () => {
    return (
        <Welcome />
    );
};


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);