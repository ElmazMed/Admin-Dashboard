import React, { useContext } from "react";
import userImg from "../../assets/pexels-justin-shaifer-501272-1222271.jpg";
import { UserContext } from "../UserContext";
export default function UserInfo() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="user-card bg-white rounded-md shadow-md p-6 flex items-center flex-col gap-4">
        <div className="profile-img -mt-16 ">
          <img src={userImg} alt="user" className="rounded-full h-24 w-24" />
        </div>
        <div className="flex gap-8 mt-10 mb-7">
          <div className="flex flex-col items-center">
            <h4 className="font-medium text-slate-600 text-xl">22</h4>
            <span className="text-center opacity-60 font-medium">Friends</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-medium text-slate-600 text-xl">10</h4>
            <span className="text-center opacity-60 font-medium">Photos</span>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-medium text-slate-600 text-xl">84</h4>
            <span className="text-center opacity-60 font-medium">Comments</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center text-slate-600 font-medium mb-2">
            {`${user.firstName} ${user.lastName}`}
          </h2>
          <span className="text-center opacity-70 text-sm">
            {`${user.city}, ${user.country}`}
          </span>
          <h3 className="mt-7 text-slate-600 text-center">{`${user.statu}`}</h3>
        </div>
        <hr className="w-full border-t-1 border-gray-200 my-4" />
        <p className="text-center opacity-60 leading-7 font-light">
          {`${user.bio}`}
        </p>
      </div>
    </>
  );
}
