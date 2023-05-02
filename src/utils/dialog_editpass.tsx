import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios  from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import React from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    buttonText: string;
    disabled: boolean;
    user_id: number;
    old_password: string;
    new_password: string;
};


const DialogEditpass: React.FC<Props> = ({ buttonText, disabled, user_id, old_password, new_password }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const route = useRouter();

    function openModal() {
        setIsOpen(true);
        setIsDisabled(true); // กำหนดให้ปุ่ม disabled เมื่อเปิดโมดัล
    }

    function closeModal() {
        setIsOpen(false);
        setIsDisabled(false); // กำหนดให้ปุ่ม enabled เมื่อปิดโมดัล
    }
    const userToPatch = {
        user_id: user_id,
        old_password: old_password,
        new_password: new_password,
    };

    const handleClick = async () => {
        
        try {
            console.log("updatePatch", userToPatch);
          
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/changePassword`, userToPatch);
          
            if (response && response.data && response.status === 200) {
              openModal();
              console.log("อิหยังวะ", response.data);
            } 
          } catch (error: any) {
            console.log("abcsssss", error);
          
            if (error.response && error.response.status === 400) {
              console.log("Show Error", error.response.data.errorMessage);
            }
          
            Swal.fire({
              icon: "error",
              title: error.response.data.errorMessage,
            });
            // throw error;
          }
    };

    return (
        <>
            <button

                onClick={handleClick}
                className={`bg-blue-700 rounded-full hover:bg-green-500 text-white font-bold py-2 px-4 w-full lg:w-36 lg:ml-2  focus:outline-none focus:shadow-outline ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isDisabled || disabled}
            >
                {buttonText}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="absolute inset-0 flex items-center justify-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="bg-white shadow-xl rounded-2xl pt-10 pl-10 pr-10 pb-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#14ce00"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mx-auto my-6"
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-gray-900 text-center px-4 pt-5 pl-20 pr-20 pb-5"
                                    >
                                        บันทึกข้อมูลสำเร็จ
                                    </Dialog.Title>

                                    <div className="mt-4 flex justify-center mx-auto pb-1">
                                        <button
                                            type="button"
                                            className="w-36 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-full hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            // onClick={closeModal}
                                            onClick={(closeModal) => { route.push('/user') }}
                                        >
                                            ตกลง
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    );
};

export default DialogEditpass;
