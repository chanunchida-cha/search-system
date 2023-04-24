import { Fragment, useState } from "react";


type Props = {};

function EditPassword({ }: Props) {

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-11/12 md:w-1/2 lg:w-1/3">
                <form className="bg-gray-100 shadow-md rounded-lg px-8 pt-6 pb-4">
                    <div className="mb-2">
                        <label className="block text-gray-700 font-bold mb-2">
                            ชื่อผู้ใช้งาน
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 font-bold mb-2">
                            รหัสผ่านเก่า
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            รหัสผ่านใหม่
                        </label>
                        <input
                            className="shadow rounded-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">

                        <button
                            className="bg-blue-700 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            บันทึก
                        </button>
                        <button
                            className="bg-red-600 rounded-full hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
