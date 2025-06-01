import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import store from "./store.jsx";
import App2 from "./ProductManagement/App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<App2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
