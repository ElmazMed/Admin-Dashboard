import React from "react";
import user from "../../assets/pexels-justin-shaifer-501272-1222271.jpg";
export default function UserInfo() {
  return (
    <>
      <div className="user-card bg-white rounded-md shadow-md p-6 flex items-center flex-col gap-4">
        <div className="profile-img -mt-16 ">
          <img src={user} alt="user" className="rounded-full h-24 w-24" />
        </div>
        <div className="flex">
          <div>
            <h4>22</h4>
            <span>Friends</span>
          </div>
          <div>
            <h4>10</h4>
            <span>Photos</span>
          </div>
          <div>
            <h4>84</h4>
            <span>Comments</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Mohamed Elmazgour</h2>
          <span>Casablanca, Morocco</span>
          <h3>Full stack - Web Developer</h3>
        </div>
        <hr />
        <p className="text-center opacity-70">
          I thrive on turning ideas into digital magic, blending tech savvy with
          a touch of artistry. I welcome challenges and thrive on
          problem-solving.
        </p>
      </div>
    </>
  );
}
