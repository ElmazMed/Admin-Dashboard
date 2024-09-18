import React, { useContext } from "react";
import { TbLogout2 } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import userImg from "../assets/pexels-justin-shaifer-501272-1222271.jpg";

export default function ProfileIcon() {
  const [visible, setVisible] = useState("none");
  const [theme, setTheme] = useState("light");
  const menuRef = useRef(null);
  const handleUserBtn = (e) => {
    e.stopPropagation();
    setVisible(visible === "none" ? "block" : "none");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible("none");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="z-30">
        <button
          type="button"
          onClick={handleUserBtn}
          className="flex items-center gap-3"
        >
          <div className="icon">
            <img src={userImg} alt="user" className="rounded-full w-8 h-8 " />
          </div>
          <span className="text-white sm:block hidden">{`Mohamed Elmazgour`}</span>
        </button>
        <div
          ref={menuRef}
          className="menu dark:bg-blue-950 bg-white p-3 rounded-md absolute shadow-md sm:top-10 top-20 w-52 right-0 transition-all"
          style={{ display: visible }}
        >
          <span className="text-xs text-slate-700 ">Welcome!</span>
          <hr />
          <ul className="flex flex-col gap-3 mt-4">
            <button
              onClick={toggleTheme}
              className="dark:text-white text-gray-700 hover:bg-gray-100 rounded-sm text-start p-2 transition-all"
            >
              <li className="flex items-center gap-1">
                {theme === "light" ? (
                  <>
                    <BsFillMoonStarsFill /> Dark theme
                  </>
                ) : (
                  <>
                    <FaRegSun /> Light theme
                  </>
                )}
              </li>
            </button>

            <button className="text-gray-700 hover:bg-gray-100 rounded-sm text-start p-2 transition-all">
              <li className="flex items-center gap-1">
                <TbLogout2 /> Log out
              </li>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
