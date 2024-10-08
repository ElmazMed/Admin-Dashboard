import React from "react";
import Nav from "../components/Nav";

import background from "../assets/pexels-mikael-blomkvist-6476587.jpg";
import Search from "../components/Search";
import UserForm from "../components/profile/UserForm";
import UserInfo from "../components/profile/UserInfo";

export default function UserProfile() {
  return (
    <>
      <main className="lg:flex">
        <Nav />

        <div className="w-full">
          <div
            className="h-custom-h bg-cover bg-center sm:p-8 p-4 z-10 relative"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="relative">
              <Search />
            </div>
            <div className="z-30 relative">
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
            <div className="overlay bg-blue-950 absolute h-full w-full bg-opacity-80 top-0 left-0 -z-10"></div>
          </div>
          <div className="flex sm:flex-row flex-col-reverse lg:p-8 p-4 gap-5 z-30 relative ">
            <div className="lg:w-8/12 md:w-7/12">
              <UserForm />
            </div>
            <div className="lg:w-1/3 md:w-5/12">
              <UserInfo />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
