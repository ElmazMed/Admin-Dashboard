import { IoSearch } from "react-icons/io5";
import ProfileIcon from "./ProfileIcon";

export default function Search() {
  return (
    <>
      <div className="sm:flex hidden gap-5 justify-end items-center relative">
        <div className="search flex items-center gap-2 rounded-3xl border-2 border-gray-200  w-fit p-2">
          <IoSearch className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white placeholder-slate-100 w-64"
          />
        </div>
        <ProfileIcon />
      </div>
    </>
  );
}
