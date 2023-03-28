/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

type Props = {};

function loginMain({}: Props) {

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="flex items-center justify-center bg-blue-300 p-8">
      <div className="rounded-lg bg-white p-2 shadow lg:w-96">
        <div className="mt-2 text-center">
          <p className="text-2xl font-bold text-black">Login</p>
        </div>

        <form className="ml-5 mr-5 mt-5">
          <div className="mb-6">
            <label
              form="email"
              className="mb-2 block text-sm font-bold text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="test@gmail.com"
              onChange={(event) => {
                setUserName(event.target.value)
                console.log(event.target.value)
              }}
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              form="password"
              className="mb-2 block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Enter password"
              onChange={(event) => {
                setUserPassword(event.target.value)
                console.log(event.target.value)
              }}
              required
            ></input>
          </div>
          <div className="mb-6 flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                required
              ></input>
            </div>
            <label
              form="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default loginMain;
