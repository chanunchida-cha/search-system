import React from "react";
import { observer } from "mobx-react-lite";
import { sidebar } from "~/models/const/Sidebar/sidebar";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const SideBar = observer(({ children }: Props) => {
  return (
    <div className="flex h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased dark:bg-gray-700 dark:text-white">
      {/* Header */}
      <div className="fixed z-10 flex h-14  w-full items-center  text-lg font-semibold ">
        <div className="flex h-14 w-14 items-center justify-start gap-x-4 border-none bg-white pt-4 pl-3 md:w-64 md:justify-center">
          <span className="hidden md:block text-[#0265ff]">ระบบสืบค้นข้อมูลงานวิจัย</span>
        </div>
        <div className="fixed-top flex h-14 w-full items-center justify-end bg-white pr-10 text-base">
          yok park
        </div>
      </div>
      <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-white text-black transition-all duration-300 hover:w-64 dark:bg-gray-900 md:w-64">
        <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden bg-white">
          <ul className="flex flex-col space-y-1 py-4">
            {sidebar.map((header) => {
              return (
                <li className={`${header.type === "head" ? "text-black ":"text-black"}  `}>
                  <Link href={header.path} className={`text-white-600 text-white-800 relative flex h-11 flex-row items-center  border-l-4 border-transparent pr-6 ${header.type !== "head" ?"hover:border-[#0066FF] hover:bg-blue-200":null}  focus:outline-none`}>
                    <span className="ml-4 inline-flex items-center justify-center">
                      {header.icon}
                    </span>
                    <span className={`${header.type === "head"?"text-base font-semibold mb-2":"ml-2 truncate text-sm tracking-wide"}`}>
                      {header.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* ./Sidebar */}
      <div className="ml-14 mt-12 h-screen  bg-[#F1F4F8] md:ml-64 ">
        <div className="px-20 py-6 pt-10 ">{children}</div>
      </div>
    </div>
  );
});

export default SideBar;
