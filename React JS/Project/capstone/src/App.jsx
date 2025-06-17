import { useState } from "react";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  </div>;
}
export default App;