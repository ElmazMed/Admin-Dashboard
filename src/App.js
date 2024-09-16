import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}
