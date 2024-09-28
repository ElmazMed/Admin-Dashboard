import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function UserForm() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div>
        <div className="bg-white dark:bg-blue-900 p-6 rounded-t-md shadow-md">
          <h3 className="dark:text-white">My account</h3>
        </div>
        <div className="rounded-b-md p-6 dark:bg-blue-950 user-form-container">
          <form className="relative">
            <h4
              className="uppercase my-5 font-medium"
              style={{ color: "#8898aa" }}
            >
              User information
            </h4>
            <div className="flex lg:flex-row flex-col gap-5 sm:p-4">
              <div className="flex w-full flex-col">
                <label>Username</label>
                <input
                  value={user.userName}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  className="p-3 rounded-md outline-none border-0 "
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Email address</label>
                <input
                  value={user.email}
                  onChange={(e) => setUser(e.target.value)}
                  type="email"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 sm:p-4">
              <div className="flex  w-full flex-col">
                <label>First name</label>
                <input
                  value={user.firstName}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Last name</label>
                <input
                  value={user.lastName}
                  onChange={(e) => setUser(e.target.value)}
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
                onChange={(e) => setUser(e.target.value)}
                type="text"
                className="p-3 rounded-md outline-none border-0"
              />
            </div>
            <div className="flex lg:flex-row flex-col gap-5 sm:p-4">
              <div className="flex flex-col">
                <label>City</label>
                <input
                  value={user.city}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex flex-col">
                <label>Country</label>
                <input
                  value={user.country}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  className="p-3 rounded-md outline-none border-0"
                />
              </div>
              <div className="flex flex-col">
                <label>Postal code</label>
                <input
                  value={user.postalCode}
                  onChange={(e) => setUser(e.target.value)}
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
                onChange={(e) => setUser(e.target.value)}
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
