import { Fragment, useState } from "react";
import DialogEditpass from "~/utils/dialog_editpass";


type Props = {};

function EditPassword({ }: Props) {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // ส่วนการประมวลผลข้อมูลหลังจากกดปุ่ม submit
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-11/12 md:w-1/2 lg:w-1/3">
                <form className="bg-gray-100 shadow-md rounded-lg px-8 pt-20 pb-20 pl-20 pr-20" onSubmit={handleSubmit}>
                    <div className="mb-2 pl-10 pr-10">
                        <label className="block text-gray-700 font-bold mb-2">
                            ชื่อผู้ใช้งาน
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2 pl-10 pr-10">
                        <label className="block text-gray-700 font-bold mb-2">
                            รหัสผ่านเก่า
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4 pl-10 pr-10">
                        <label className="block text-gray-700 font-bold mb-2">
                            รหัสผ่านใหม่
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between ml-10 mr-10">
                        <DialogEditpass isOpen={dialogOpen} onClose={handleDialogClose} buttonText={"บันทึก"} />
                        <button
                            type="submit"
                            className="bg-red-600 rounded-full hover:bg-gray-500 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
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
