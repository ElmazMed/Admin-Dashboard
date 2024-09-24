import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import ProfileIcon from "../components/ProfileIcon";

export default function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(
    window.innerWidth < 975 ? false : true
  );
  return (
    <>
      <div className=" mobile-menu dark:bg-blue-950 bg-white w-full p-6 flex justify-between lg:hidden items-center">
        <button
          className="text-3xl text-gray-400"
          type="button"
          onClick={() => setIsMenuVisible(true)}
        >
          <RxHamburgerMenu />
        </button>
        <div className="logo">
          <h1 className="text-3xl text-center text-sky-500 font-bold uppercase">
            Admin.
          </h1>
        </div>
        <ProfileIcon />
      </div>

      <nav
        className={
          isMenuVisible
            ? "sm:overflow-y-auto lg:w-2/12 w-11/12 lg:mr-8 absolute lg:top-0 top-6 left-0 right-0 mx-auto lg:mx-0 lg:relative z-30"
            : "hidden"
        }
      >
        <div className="lg:fixed flex flex-col lg:w-2/12 w-full justify-between dark:bg-blue-950 bg-white shadow-md lg:h-screen">
          <div className="lg:p-8 p-4">
            <div className="logo lg:mb-20 flex justify-between lg:block mb-7">
              <h1 className="text-3xl lg:text-center text-sky-500 font-bold uppercase">
                Admin.
              </h1>
              <button
                className="text-3xl lg:hidden text-gray-400"
                type="button"
                onClick={() => setIsMenuVisible(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="mobile-search lg:hidden flex justify-between items-center bg-white border-2 border-gray-300 rounded-lg w-full p-2 mb-8">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none"
              />
              <IoSearch className="text-2xl text-gray-400" />
            </div>
            <ul className="flex flex-col gap-12">
              <Link
                to="/dashboard"
                className="flex items-center gap-4 text-sky-500"
              >
                <CgScreen />
                <li className="text-gray-500 dark:text-white hover:text-black transition-all">
                  Dashboard
                </li>
              </Link>
              <Link
                to="/user-profile"
                className="flex items-center gap-4 text-amber-400"
              >
                <FaUser />

                <li className="text-gray-500 dark:text-white hover:text-black transition-all">
                  User Profile
                </li>
              </Link>
              <Link
                to="/tables"
                className="flex items-center gap-4 text-red-600"
              >
                <FaListUl />

                <li className="text-gray-500 dark:text-white hover:text-black transition-all">
                  Tables
                </li>
              </Link>

              <Link
                to="/support"
                className="flex items-center gap-4 text-indigo-600"
              >
                <MdOutlineContactSupport />

                <li className="text-gray-500 dark:text-white hover:text-black transition-all">
                  Support
                </li>
              </Link>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-blue-800 p-5">
            <Link className="flex items-center gap-4 dark:text-white text-violet-700">
              <IoIosRocket />

              <li className="list-none font-light dark:text-white text-black">
                Upgrade to PRO
              </li>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
