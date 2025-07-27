import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const ProtectedRoute = ({ element }) => {
    const isRegistered = localStorage.getItem("registerData");
    return isRegistered ? element : <Navigate to="/" replace />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/genre" element={<ProtectedRoute element={<GenrePage />} />} />
        <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/movies" element={<ProtectedRoute element={<MoviesPage />} />} />
      </Routes>
    </div>
  );
}

export default App;