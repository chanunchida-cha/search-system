/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

type Props = {};

function loginMain({}: Props) {

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="flex items-center justify-center bg-gray-100 p-64">
      <div className="rounded-lg bg-white p-2 shadow lg:w-[28rem] lg:h-[26rem]">
        <div className="mt-2 text-center p-4">
          <p className="text-2xl font-bold text-blue-800">System Name</p>
        </div>

        <form className="ml-5 mr-5 mt-5">
          <div className="mb-6">
            <label
              form="email"
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
                setUserName(event.target.value)
                console.log(event.target.value)
              }}
              required
            ></input>
          </div>
          <div className="mb-6 pb-8">
            <label
              form="password"
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
                setUserPassword(event.target.value)
                console.log(event.target.value)
              }}
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
