import React, { useEffect, useState } from "react";
import { sidebarAdmin, sidebarUser } from "~/models/const/Sidebar/sidebar";
import Link from "next/link";
import Cookie from "cookie-universal";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

type Props = {
  children: React.ReactNode;
};

const SideBar = ({ children }: Props) => {
  const route = useRouter();
  const cookies = Cookie();
  const getrole = cookies.get("role") as string;
  const getUsername = cookies.get("username") as string;
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setRole(getrole);
  }, [getrole]);
  useEffect(() => {
    setUsername(getUsername);
  }, [getUsername]);

  const logout = () => {
    Swal.fire({
      title: "คุณแน่ใจว่าต้องการที่จะออกจากระบบ?",
      text: "โปรดตรวจสอบก่อนการยืนยัน",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#828282",
      cancelButtonColor: "#0265ff",
      confirmButtonText: "ยกเลิก",
      cancelButtonText: "ยืนยัน",
      backdrop: false,
    })
      .then(async (result) => {
        if (result.isDismissed) {
          cookies.removeAll();
          await route.push("/login");
          await Swal.fire({
            icon: "success",
            title: "คุณออกจากระบบสำเร็จ",
            confirmButtonColor: "#0265ff",
            confirmButtonText: "ตกลง",
            backdrop: false,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="flex h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      {/* Header */}
      <div className="fixed z-10 flex h-14  w-full items-center  text-lg font-semibold ">
        <div className="flex h-14 w-14 items-center justify-start gap-x-4 border-none bg-white pt-4 pl-3 md:w-64 md:justify-center">
          <span className="hidden text-[#0265ff] md:block">
            ระบบสืบค้นข้อมูลงานวิจัย
          </span>
        </div>
        <div className="fixed-top flex h-14 w-full items-center justify-end bg-white pr-10 text-base">
          {username.split("@")[0]}
        </div>
      </div>
      <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-white text-black transition-all duration-300 hover:w-64 dark:bg-gray-900 md:w-64">
        <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden bg-white">
          <ul className="flex flex-col space-y-1 py-4">
            {(role === "ADMIN" ? sidebarAdmin : sidebarUser).map(
              (header, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      header.type === "head"
                        ? "disabled:true hidden sm:flex sm:text-gray-600 "
                        : "text-black"
                    }  `}
                  >
                    <Link
                      href={header.path}
                      className={`text-white-600 text-white-800 relative flex h-11 flex-row items-center  border-l-4 border-transparent pr-6 ${
                        header.type !== "head"
                          ? "hover:border-[#0066FF] hover:bg-blue-200"
                          : ""
                      } focus:outline-none`}
                    >
                      <span className="ml-4 inline-flex items-center justify-center">
                        {header.icon}
                      </span>
                      <span
                        className={`${
                          header.type === "head"
                            ? "mb-2 text-base font-semibold"
                            : "ml-2 truncate text-sm tracking-wide"
                        }`}
                      >
                        {header.title}
                      </span>
                    </Link>
                  </li>
                );
              }
            )}
            <li
              onClick={() => {
                logout();
              }}
              className={
                "text-white-600 text-white-800 relative flex h-11 cursor-pointer flex-row items-center  border-l-4 border-transparent pr-6 text-black hover:border-[#0066FF] hover:bg-blue-200"
              }
            >
              <span className="ml-4 inline-flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  ></path>
                </svg>
              </span>
              <span className={"ml-2 truncate text-sm tracking-wide"}>
                ออกจากระบบ
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* ./Sidebar */}
      <div className="ml-14 mt-12 h-screen  bg-[#F1F4F8] md:ml-64 ">
        <div className="px-10 py-4 pt-10 ">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;
