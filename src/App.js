import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { ThemeContext } from "./components/ThemeContext";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Support from "./pages/Support";
import Tables from "./pages/Tables";

export default function App() {
  const [theme, setTheme] = useState("light");

  const [user, setUser] = useState({
    userName: "Med",
    email: "elmazgour.mohamed@gmail.com",
    firstName: "Mohamed",
    lastName: "Elmazgour",
    address: "Casablanca, Morocco",
    city: "Casablanca",
    country: "Morocco",
    postalCode: "00000",
    statu: "Full-Stack - Web Developer",
    bio: "I thrive on turning ideas into digital magic, blending tech savvy with a touch of artistry. I welcome challenges and thrive on problem-solving.",
  });
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/support" element={<Support />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
