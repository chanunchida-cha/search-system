import { useRouter } from "next/router";
import { useState } from "react";
import DialogEditpass from "~/utils/dialog_editpass";


type Props = {};

function EditPassword({ }: Props) {
  const route = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(true)
  console.log(password);


  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  const handleChangePassword = async (e: any) => {
    setPassword(e.target.value)
    if (e.target.value.length >= 4) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white rounded-lg">
      <div className="w-11/12 md:w-1/2 lg:w-1/3">
        <form className="bg-gray-100 shadow-md rounded-lg px-8 pt-20 pb-20 lg:pl-20 lg:pr-20" onSubmit={handleSubmit}>
          <div className="mb-4 lg:mb-2">
            <label className="block text-gray-700 font-bold mb-2">ชื่อผู้ใช้งาน</label>
            <input className="pointer-events-none shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" placeholder="Suchart Thongyod" />
          </div>
          <div className="mb-4 lg:mb-2">
            <label className="block text-gray-700 font-bold mb-2">รหัสผ่านเก่า</label>
            <input className="pointer-events-none shadow rounded-lg appearance-none border text-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="123456" />
          </div>
          <div className="mb-6 lg:mb-4">
            <label className="block text-gray-700 font-bold mb-2">รหัสผ่านใหม่ <span className="text-red-500">*</span></label>
            <input className="shadow rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={password} maxLength={8} onChange={handleChangePassword} required />
          </div>
          <div className="flex items-center justify-between">
            <DialogEditpass disabled={disabled} isOpen={dialogOpen} onClose={handleDialogClose} buttonText={"บันทึก"} />
            <button onClick={() => { route.push('/user') }} type="submit" className="bg-red-500 rounded-full hover:bg-gray-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" >ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPassword;
