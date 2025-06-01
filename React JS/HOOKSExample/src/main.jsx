import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./App3.jsx";
import ourContext from "./StateManagement/contextHelper.jsx";
import App4 from "./StateManagement/App4.jsx";

createRoot(document.getElementById("root")).render(
  <ourContext.Provider value={0}>
    <App />
    <hr />
    <App2 />
    <hr />
    <App3 />s
    <hr />
    <App4 />
  </ourContext.Provider>
);
