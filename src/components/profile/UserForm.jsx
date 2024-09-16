import React from "react";

export default function UserForm() {
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
            <div className="flex gap-5 p-4">
              <div className="flex w-full flex-col">
                <label>Username</label>
                <input
                  type="text"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Email address</label>
                <input
                  type="email"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
                />
              </div>
            </div>
            <div className="flex gap-5 p-4">
              <div className="flex w-full flex-col">
                <label>First name</label>
                <input
                  type="text"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
                />
              </div>
              <div className="flex w-full flex-col">
                <label>Last name</label>
                <input
                  type="text"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
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
            <div className="flex flex-col p-4">
              <label>Address</label>
              <input
                type="text"
                className="p-3 rounded-md outline-none border-0 text-gray-800"
              />
            </div>
            <div className="flex gap-5 p-4">
              <div className="flex flex-col">
                <label>City</label>
                <input
                  type="text"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label>Country</label>
                <input
                  type="text"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label>Postal code</label>
                <input
                  type="number"
                  className="p-3 rounded-md outline-none border-0 text-gray-800"
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
            <div className="flex flex-col p-4">
              <label>About me</label>
              <textarea
                type="number"
                className="p-3 rounded-md outline-none border-0 text-gray-800"
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
