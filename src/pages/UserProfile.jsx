import React from "react";
import Nav from "../components/Nav";

import background from "../assets/pexels-mikael-blomkvist-6476587.jpg";
import Search from "../components/Search";
import UserForm from "../components/profile/UserForm";
import UserInfo from "../components/profile/UserInfo";

export default function UserProfile() {
  return (
    <>
      <main className="sm:flex">
        <Nav />

        <div className="w-full">
          <div
            className="h-custom-h bg-cover bg-center sm:p-8 p-4 -z-10 relative"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="z-30 relative">
              <Search />
              <div className="sm:w-2/4 mt-32">
                <h2 className="text-white text-3xl font-medium">
                  Hello Mohamed
                </h2>
                <p className="text-white my-8 font-light opacity-90">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </div>
            </div>
            <div className="overlay bg-blue-950 absolute h-full w-full bg-opacity-80 top-0 left-0 z-0"></div>
          </div>
          <div className="flex sm:flex-row flex-col-reverse sm:p-8 p-4 gap-5 -mt-32">
            <div className="sm:w-8/12">
              <UserForm />
            </div>
            <div className="sm:w-1/3">
              <UserInfo />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
