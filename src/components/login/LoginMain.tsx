/* eslint-disable react-hooks/rules-of-hooks */

import { observer } from "mobx-react-lite";
import React, { useState, useEffect, FormEvent } from "react";
import { loginStore } from "~/store/login/LoginStore";


type Props = {};

const loginMain = observer(({ }: Props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  async function loginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loginStore.getLogin(userName,userPassword)
  }

  // useEffect(() => {
  //   const loginSubmit = async () => {
  //     await loginStore.getLogin("test8229@gmail.com",bcrypt.hash("123456", 10))
  //   };
  //   loginSubmit();
  // }, []);
  

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white p-8">
      <div className="rounded-3xl border border-gray-300 bg-white p-2 shadow-xl lg:w-96">
        <div className="mt-2 text-center">
          <p className="text-xl font-extrabold text-blue-600 mt-5">ระบบสืบค้นข้อมูลวิจัย</p>
        </div>

        <form onSubmit={loginSubmit} className="mx-2 md:mx-10 mt-5">
      
          <div className="mb-4">
            <label
              form="email"
              className="mb-2 block text-sm font-bold text-blue-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="test@gmail.com"
              onChange={(event) => {
                setUserName(event.target.value);
                console.log(event.target.value);
              }}
              value={userName}
              required
            />
          </div>
          <div className="mb-6">
            <label
              form="password"
              className="mb-2 block text-sm font-medium text-blue-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Enter password"
              onChange={(event) => {
                setUserPassword(event.target.value);
                console.log(event.target.value);
              }}
              value={userPassword}
              required
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              maxLength={6}
              minLength={6}
            />
          </div>

          <div className="flex justify-center mb-10">
            <button
              type="submit"
              className="w-full md:w-auto rounded-3xl bg-blue-700 px-8 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

  );
  
});

export default loginMain;