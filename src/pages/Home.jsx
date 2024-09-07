import React from "react";
import { Link } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <main className="flex">
        <nav className="bg-white shadow-md h-screen  w-72  flex flex-col justify-between">
          <div className="p-8">
            <div className="logo mb-20">
              <h1 className="text-3xl text-center text-sky-500 font-bold uppercase">
                Admin.
              </h1>
            </div>
            <ul className="flex flex-col gap-12">
              <Link className="flex items-center gap-4 text-sky-500">
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
        </nav>
        <Cards />
      </main>
    </>
  );
}
