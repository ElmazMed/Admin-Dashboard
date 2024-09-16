import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import user from "../assets/pexels-justin-shaifer-501272-1222271.jpg";

export default function ProfileIcon() {
  const [visible, setVisible] = useState("none");
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
  return (
    <>
      <div className="z-30">
        <button
          type="button"
          onClick={handleUserBtn}
          className="flex items-center gap-3"
        >
          <div className="icon">
            <img src={user} alt="user" className="rounded-full w-8 h-8 " />
          </div>
          <span className="text-white sm:block hidden">Mohamed Elmazgour</span>
        </button>
        <div
          ref={menuRef}
          className="menu bg-white p-3 rounded-md absolute shadow-md sm:top-10 top-20 w-52 right-0 transition-all"
          style={{ display: visible }}
        >
          <span className="text-xs text-slate-700 ">Welcome!</span>
          <hr />
          <ul className="flex flex-col gap-3 mt-4">
            <button className="text-gray-700 hover:bg-gray-100 rounded-sm text-start p-2 transition-all">
              <li>Dark theme</li>
            </button>

            <button className=" text-gray-700 hover:bg-gray-100 rounded-sm text-start p-2 transition-all">
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
