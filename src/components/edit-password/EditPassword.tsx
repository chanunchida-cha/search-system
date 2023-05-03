/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect, FormEvent } from "react";
import DialogEditpass from "~/utils/dialog_editpass";

function EditPassword() {
  const route = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [oldpassword, setoldPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  console.log("oldpass", oldpassword);
  console.log("newpass", newpassword);

  useEffect(() => {
    console.log("go to na id", route.query.user_id);
    console.log("go to na name", route.query.username);
    console.log("go to na role", route.query.role);
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setoldPassword(e.target.value);
    if (e.target.value.length >= 4) {
      setDisabled(true);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewPassword(e.target.value);
    if (e.target.value.length >= 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center rounded-lg bg-white">
      <div className="w-full pt-10 pl-5 pr-5 md:w-1/2 lg:h-full lg:w-3/4 lg:pt-10 xl:w-1/2">
        /
        <form
          className="w-full rounded-lg bg-gray-100 px-8 pt-20 pb-20 shadow-md lg:pl-20 lg:pr-20 "
          onSubmit={handleSubmit}
        >
          <div className="mb-4 mr-4 ml-4">
            <label className="mb-2 block font-bold text-gray-700">
              ชื่อผู้ใช้งาน
            </label>
            <input
              className="focus:shadow-outline pointer-events-none w-full appearance-none rounded-lg border py-2 px-3 leading-tight text-gray-400 shadow focus:outline-none"
              value={String(route.query.username) || "ไม่มีชื่อ"}
              autoComplete="off"
            />
          </div>
          <div className="mb-4 mr-4 ml-4">
            <label className="mb-2 block font-bold text-gray-700">
              รหัสผ่านเก่า <span className="text-red-500">*</span>
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-lg border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              value={oldpassword}
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              minLength={4}
              maxLength={8}
              onChange={handleOldPassword}
              type="password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="mb-6 mr-4 ml-4">
            <label className="mb-2 block font-bold text-gray-700">
              รหัสผ่านใหม่ <span className="text-red-500">*</span>
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-lg border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              value={newpassword}
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              minLength={4}
              maxLength={8}
              onChange={handleChangePassword}
              type="password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="mr-4 ml-4 flex flex-col items-center justify-between pt-8 lg:flex-row">
            <DialogEditpass
              disabled={disabled}
              isOpen={dialogOpen}
              onClose={handleDialogClose}
              buttonText={"บันทึก"}
              user_id={Number(route.query.user_id)}
              old_password={oldpassword}
              new_password={newpassword}
            />
            <button
              onClick={() => route.push("/user") }
              type="submit"
              className="focus:shadow-outline mt-2 w-full rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-gray-500 focus:outline-none lg:ml-2 lg:mt-0 lg:w-36"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPassword;
