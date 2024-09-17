import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function UserForm() {
  const user = useContext(UserContext);
  return (
    <>
      <div>
        <div className="bg-white p-6 rounded-t-md shadow-md">
          <h3>My account</h3>
        </div>
        <div
          style={{ backgroundColor: "#f7fafc" }}
          className="rounded-b-md p-6"
        >
          <form className="relative">
            <h4
              className="uppercase my-5 font-medium"
              style={{ color: "#8898aa" }}
            >
              User information
            </h4>
            <div className="flex sm:flex-row flex-col gap-5 sm:p-4">
              <div className="flex w-full flex-col">
                <label>Username</label>
                <input
                  value={user.userName}
                  type="text"
                  className="p-3 rounded-md outline-none border-0 "
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Email address</label>
                <input
                  value={user.email}
                  type="email"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-5 sm:p-4">
              <div className="flex  w-full flex-col">
                <label>First name</label>
                <input
                  value={user.firstName}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Last name</label>
                <input
                  value={user.lastName}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
            </div>
            <hr />
            <h4
              className="uppercase my-5 font-medium"
              style={{ color: "#8898aa" }}
            >
              Contact information
            </h4>
            <div className="flex flex-col sm:p-4">
              <label>Address</label>
              <input
                value={user.address}
                type="text"
                className="p-3 rounded-md outline-none border-0"
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 sm:p-4">
              <div className="flex flex-col">
                <label>City</label>
                <input
                  value={user.city}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex flex-col">
                <label>Country</label>
                <input
                  value={user.country}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex flex-col">
                <label>Postal code</label>
                <input
                  value={user.postalCode}
                  type="number"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
            </div>
            <hr />
            <h4
              className="uppercase my-5 font-medium"
              style={{ color: "#8898aa" }}
            >
              About me
            </h4>
            <div className="flex flex-col sm:p-4">
              <label>About me</label>
              <textarea
                value={user.bio}
                type="number"
                className="p-3 rounded-md outline-none border-0"
              />
            </div>
            <button className="text-white bg-blue-400 shadow-md px-4 py-2 rounded-md">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
