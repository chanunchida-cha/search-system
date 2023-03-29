/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

type Props = {};

function loginMain({}: Props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-2 shadow lg:h-[26rem] lg:w-[28rem]">
        <div className="mt-2 p-4 text-center">
          <p className="text-2xl font-bold text-blue-800">System Name</p>
        </div>

        <form className="ml-5 mr-5 mt-5">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-blue-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="plengSlowtoad@bluebik.vulcan.com"
              onChange={(event) => {
                setUserName(event.target.value);
                console.log(event.target.value);
              }}
              value={userName}
              required
            ></input>
          </div>
          <div className="mb-6 pb-8">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-blue-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="•••••••••••"
              onChange={(event) => {
                setUserPassword(event.target.value);
                console.log(event.target.value);
              }}
              value={userPassword}
              required
            ></input>
          </div>
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-5 items-center">
              <button
                type="submit"
                className="mb-4  rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginMain;
