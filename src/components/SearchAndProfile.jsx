import { useEffect, useRef, useState } from "react";
import user from "../assets/pexels-justin-shaifer-501272-1222271.jpg";
import { IoSearch } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

export default function SearchAndProfile() {
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
      <div className="flex gap-5 justify-end relative">
        <div className="search flex items-center gap-2 rounded-3xl border-2 border-gray-200  w-fit p-2">
          <IoSearch className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white placeholder-slate-100 w-64"
          />
        </div>
        <button
          type="button"
          onClick={handleUserBtn}
          className="flex items-center gap-3"
        >
          <div className="icon">
            <img src={user} alt="user" className="rounded-full w-8 h-8 " />
          </div>
          <span className="text-white">Mohamed Elmazgour</span>
        </button>
        <div
          ref={menuRef}
          className="menu bg-white p-3 rounded-md absolute shadow-md top-10 w-52 right-0 transition-all"
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
