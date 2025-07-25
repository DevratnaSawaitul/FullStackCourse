import { useState } from "react";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import GenrePage from "./pages/GenrePage/GenrePage";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
    </Routes>
    <Routes>
      <Route path="/genre" element={<GenrePage />} />
    </Routes>
  </div>;
}
export default App;