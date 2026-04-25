import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/dashboard/home";
import Income from "./pages/dashboard/Income";
import Expense from "./pages/dashboard/Expense";


function App() {
  return (
    <Router>
      <Routes>
        {/* Define page paths here */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<income />} />
        <Route path="/expense" element={<expense />} />

        {/* This sends users to login by default if they type a random URL */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

const Root = () => {
const isAuthenticated = !!localStorage.getItem("token");
return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />);
}