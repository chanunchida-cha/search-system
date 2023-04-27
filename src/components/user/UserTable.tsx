import { type } from "os";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { manage_heading } from "~/models/const/user-manage/manage_heading";
import ManageEditButton from "~/ui/user-manage/ManageEditButton";
import { UserManageResponse } from "~/models/type/user/typeUser";
import { ContentUserManageResponse } from "~/models/type/user/typeContent";
import { userStore } from "~/store/user/UserStore";

type Props = {
  userManageList: UserManageResponse;

};

function UserTable({ userManageList }: Props) {
  const updatePageCurrent = async (page: number) => {
    await userStore.getUserManage("", page, 10);
  };
  return (
    <>
      {/* TABLE CONTENT */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="border-solid-500 w-full table-auto border-collapse border">
          <thead className="border-b-2 border-gray-200 bg-[#0265ff] ">
            <tr className="">
              {manage_heading.map((item) => (
                <th
                  key={item}
                  className={`text-xs text-white md:text-sm ${
                    item === "ลำดับ"
                      ? "p-3 text-center font-semibold tracking-wide"
                      : "p-3 text-center font-semibold tracking-wide"
                  } ${item === "ชื่อบัญชี" ? "" : "w-28"}`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {userManageList.content.map((item, index) => (
              <tr className="bg-white">
                <td className="p-3 text-center text-sm text-gray-700">
                    {index + 1 + Number(userManageList.current_page) * 10}
                  </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <Link
                    href={"/" + item.user_id}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    {item.username}
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                {item.role}
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="flex justify-center">
                    <ManageEditButton userData={item}  />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATE CONTENT*/}
      <div className="flex items-center justify-between rounded-b-lg border-t border-gray-200 bg-white px-4 py-2 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
          <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(Number(userManageList.current_page) + 1) * 10 - 9}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {(Number(userManageList.current_page) + 1) * 10}
              </span>{" "}
              of{" "}
              <span className="font-medium">
                {Number(userManageList.total_object) * Number(userManageList.total_page)}
              </span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {Array.from({ length: Number(userManageList.total_page) }, (_, index) =>
                Number(userManageList.current_page) === index ? (
                  <a
                    href="#"
                    aria-current="page"
                    onClick={() => updatePageCurrent(index)}
                    className="relative z-10 inline-flex items-center bg-[#0265ff] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {index + 1}
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={() => updatePageCurrent(index)}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {index + 1}
                  </a>
                )
              )}
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTable;
