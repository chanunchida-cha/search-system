/* eslint-disable react-hooks/rules-of-hooks */
import { observer } from "mobx-react-lite";
import React, { useState, FormEvent, RefAttributes } from "react";
import { loginStore } from "~/store/login/LoginStore";
import { useRouter } from "next/router";
import { Turnstile, TurnstileProps } from '@marsidev/react-turnstile';

type Props = {};

const LoginMain = observer(({ }: Props) => {
  const route = useRouter();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [successCaptcha, setSuccessCaptcha] = useState(false);
  const [disabled, setDisabled] = useState(true)
  console.log("Check CaptCha : ",successCaptcha);
  



  async function loginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loginStore.getLogin(userName, userPassword);
    route.push("/");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="rounded-3xl border border-gray-300 bg-white p-2 shadow-xl lg:w-96">
        <div className="mt-2 text-center">
          <p className="mt-5 text-2xl font-extrabold text-blue-600">
            ระบบสืบค้นข้อมูลวิจัย
          </p>
        </div>
        <form
          onSubmit={(e) => {
            loginSubmit(e);
          }}
          className="mx-2 mt-5 md:mx-10"
        >
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
              maxLength={8}
              minLength={4}
            />
            {/* <Turnstile siteKey='0x4AAAAAAAEZshiFaQQR1I5D' className="pt-3" /> */}
            <Turnstile
              siteKey="0x4AAAAAAAEZshiFaQQR1I5D"
              className="pt-3"
              onChange={ () => setSuccessCaptcha(true) }
            />


          </div>
          <div className="mb-10 flex justify-center">
            <button
              type="submit"
              disabled={successCaptcha || disabled}
              className={`bg-blue-700 rounded-full hover:bg-green-500 text-white font-bold py-2 px-4 w-full lg:w-36 lg:ml-2  focus:outline-none focus:shadow-outline 
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default LoginMain;
