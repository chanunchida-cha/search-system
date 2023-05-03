/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, FormEvent } from "react";
import AddUserExpertField from "./AddUserExpertField";
import { observer } from "mobx-react-lite";
import { registerStore } from "~/store/register/RegisterStore";


const AddUserAccount = observer(() => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  async function userSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void handleClick();
  }

  const handleClick = async () => {
    if (userName != "") {
      console.log("input value is NOT empty");
      await registerStore.getRegister(userName);
      setShow(true);
    } else {
      console.log("input value is empty");
      setShow(false);
    }
  };

  return (
    <div className="flex h-screen flex-col rounded-3xl border  border-gray-200 bg-white p-2 shadow-xl">
      <div className="mt-10 ml-10 text-start">
        <h1 className="text-xl font-extrabold text-black">
          สร้างบัญชีผู้ใช้งาน
        </h1>
      </div>
      <div className="mt-3 ml-20">
        <label className="items-center justify-center font-medium leading-6 text-gray-900">
          ชื่อผู้ใช้งาน
        </label>
        <span className="text-red-500 text-xl" aria-hidden="true">
             {'*'}
            </span>
      </div>
      <form onSubmit={userSubmit}>
      <div className="mt-3 ml-20 grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <input
            type="text"
            id="user"
            className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            onChange={(event) => {
              setUserName(event.target.value);
              console.log("input value =", event.target.value);
            }}
            required
          />
        </div>
        <div className="col-span-4 ml-5">
          <button
            className="w-full rounded-3xl bg-blue-700 px-6 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:w-auto"
          >
            สร้างบัญชี
          </button>
        </div>
      </div>
      </form>
      {show && (
        <div className="flex h-screen flex-col items-center bg-white p-8">
          <div className="rounded-xl border border-gray-100 bg-gray-100 p-2 shadow-xl lg:w-96">
            <h1 className=" text-center text-base font-bold text-green-400">
              สร้างบัญชีผู้ใช้งาน สำเร็จ!
            </h1>

            <div>
              <AddUserExpertField title="ลำดับบัญชี" name={String(registerStore.register.user_id)} />
            </div>
            <div>
              <AddUserExpertField title="ชื่อผู้ใช้งาน" name={registerStore.register.username} />
            </div>
            <div>
              <AddUserExpertField title="รหัสผ่าน" name={registerStore.register.password} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
export default AddUserAccount;
