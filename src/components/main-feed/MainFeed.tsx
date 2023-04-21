import React, { useState } from "react";
import MainFeedSearchBar from "./MainFeedSearchBar";
import MainFeedTable from "./MainFeedTable";

type Props = {};

function MainFeed({}: Props) {
  const token = sessionStorage.getItem("token");
  console.log("test token", token)
  return (
    <>
      <div className="align-center h-screen bg-gray-100 p-5">
        {/* Heading and AddUserData */}
        <div className="mb-2 grid h-12 grid-cols-1 md:grid md:grid-cols-2">
          <div className="flex items-center justify-start">
            <h1 className="sm:text-2 text-black md:text-xl lg:text-2xl">
              ข้อมูลรายชื่อผู้วิจัย
            </h1>
          </div>
          <div className="flex items-center justify-start md:justify-end ">
            <div className="mt-2  w-auto md:w-full lg:w-4/5 xl:w-3/5">
              <button className="flex w-full items-center justify-center rounded-lg bg-[#0265ff] p-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
                <p className=" ml-1 text-xs text-white md:text-xs lg:text-lg ">
                  เพิ่มข้อมูลผู้ทรงคุณวุฒิ
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* END OF Heading and AddUserData */}

        <MainFeedSearchBar />
        <MainFeedTable />
      </div>
    </>
  );
}

export default MainFeed;
