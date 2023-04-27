import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import DialogEditpass from "~/utils/dialog_editpass";

type Props = {};

function EditPassword({ }: Props) {
  const route = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [oldpassword, setoldPassword] = useState("")
  const [newpassword, setnewPassword] = useState("")
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    console.log("go to na id", route.query.user_id)
    console.log("go to na name", route.query.username)
    console.log("go to na role", route.query.role)
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  const handleOldPassword = async (e: any) => {
    setoldPassword(e.target.value)
    if (e.target.value.length >= 4) {
      // setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleChangePassword = async (e: any) => {
    setnewPassword(e.target.value)
    if (e.target.value.length >= 4) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white rounded-lg">
      <div className="w-full md:w-1/2 lg:w-3/4 xl:w-1/2 lg:h-full pt-10 pl-5 pr-5 lg:pt-10">/
        <form className="bg-gray-100 shadow-md rounded-lg px-8 pt-20 pb-20 lg:pl-20 lg:pr-20 w-full ">
          <div className="mb-4 mr-4 ml-4">
            <label className="block text-gray-700 font-bold mb-2">ชื่อผู้ใช้งาน</label>
            <input
              className="pointer-events-none shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={String(route.query.username) || "ไม่มีชื่อ"}
            />
          </div>
          <div className="mb-4 mr-4 ml-4">
            <label className="block text-gray-700 font-bold mb-2">รหัสผ่านเก่า <span className="text-red-500">*</span></label>
            <input
              className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={oldpassword}
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              minLength={4}
              maxLength={8}
              onChange={handleOldPassword}
              required
            />
          </div>
          <div className="mb-6 mr-4 ml-4">
            <label className="block text-gray-700 font-bold mb-2">รหัสผ่านใหม่ <span className="text-red-500">*</span></label>
            <input
              className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newpassword}
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              minLength={4}
              maxLength={8}
              onChange={handleChangePassword}
              required
            />
          </div>
          <div className="flex flex-col items-center justify-between pt-8 mr-4 ml-4 lg:flex-row">
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
              onClick={() => {
                route.push("/user");
              }}
              type="submit"
              className="bg-red-500 rounded-full hover:bg-gray-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full lg:w-36 lg:ml-2 mt-2 lg:mt-0"
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
