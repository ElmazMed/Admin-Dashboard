import React from "react";
import { Link } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import Cards from "../components/Cards";
import Dashboard from "./Dashboard";
import user from "../assets/pexels-justin-shaifer-501272-1222271.jpg";

export default function Home() {
  return (
    <>
      <main className="sm:flex">
        <div className=" mobile-menu bg-white w-full p-6 flex justify-between sm:hidden items-center">
          <button className="text-3xl text-gray-400" type="button">
            <RxHamburgerMenu />
          </button>
          <div className="logo">
            <h1 className="text-3xl text-center text-sky-500 font-bold uppercase">
              Admin.
            </h1>
          </div>
          <button type="button">
            <div className="icon">
              <img src={user} alt="user" className="rounded-full w-8 h-8 " />
            </div>
          </button>
        </div>

        <nav className="sm:overflow-y-auto sm:w-2/12 w-11/12 sm:mr-10 absolute sm:top-0 top-6 left-0 right-0 mx-auto sm:relative">
          <div className="sm:fixed flex flex-col sm:w-2/12 w-full justify-between bg-white shadow-md sm:h-screen">
            <div className="sm:p-8 p-4">
              <div className="logo sm:mb-20 flex justify-between sm:block mb-7">
                <h1 className="text-3xl sm:text-center text-sky-500 font-bold uppercase">
                  Admin.
                </h1>
                <button
                  className="text-3xl sm:hidden text-gray-400"
                  type="button"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="mobile-search sm:hidden flex justify-between items-center bg-white border-2 border-gray-300 rounded-sm w-full p-2 mb-8">
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
                  <li className="text-gray-500 hover:text-black transition-all">
                    Dashboard
                  </li>
                </Link>
                <Link className="flex items-center gap-4 text-amber-400">
                  <FaUser />

                  <li className="text-gray-500 hover:text-black transition-all">
                    User Profile
                  </li>
                </Link>
                <Link className="flex items-center gap-4 text-red-600">
                  <FaListUl />

                  <li className="text-gray-500 hover:text-black transition-all">
                    Tables
                  </li>
                </Link>

                <Link className="flex items-center gap-4 text-indigo-600">
                  <MdOutlineContactSupport />

                  <li className="text-gray-500 hover:text-black transition-all">
                    Support
                  </li>
                </Link>
              </ul>
            </div>
            <div className="bg-gray-50 p-5">
              <Link className="flex items-center gap-4 text-violet-700">
                <IoIosRocket />

                <li className="list-none font-light text-black">
                  Upgrade to PRO
                </li>
              </Link>
            </div>
          </div>
        </nav>

        <div className="w-full ">
          <Cards />
          <Dashboard />
        </div>
      </main>
    </>
  );
}
