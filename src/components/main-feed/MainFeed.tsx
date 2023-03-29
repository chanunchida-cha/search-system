import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { main_feed_heading } from "~/models/const/main-feed/main_feed_heading";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

function MainFeed({}: Props) {
  return (
    <>
      <div className="align-center h-screen bg-gray-100 p-5">
        {/* Heading and AddUserData */}
        <div className="mb-2 grid h-12 grid-cols-2">
          <div className="flex items-center justify-start">
            <h1 className="text-2xl">ข้อมูลรายชื่อผู้วิจัย</h1>
          </div>
          <div className="flex items-center justify-end">
            <div className="mt-2 w-2/5">
              <button className="flex w-full items-center justify-center rounded-lg bg-[#0265ff] p-1">
                <Image
                  src="/assets/images/icon-add.png"
                  width={24}
                  height={24}
                  alt="add"
                  className="mt-2"
                />
                <p className="ml-1  text-xl text-white">
                  เพิ่มข้อมูลผู้ทรงคุณวุฒิ
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* END OF Heading and AddUserData */}

        {/* SearchBar and TypeSelection */}
        <div className="mb-3 grid h-12">
          <div className="flex items-center justify-end">
            {/* SearchBar */}
            <div className="relative w-2/5">
              <input
                className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-3 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-[#0265ff] focus:outline-none focus:ring-[#0265ff]"
                id="username"
                type="text"
                placeholder="ค้นหาข้อมูลรายชื่อผู้วิจัย"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-6 w-6 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            {/* END OF SearchBar */}

            {/* TypeSelection */}
            <div className="relative ml-3 inline-block w-1/6">
              <select className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
                {main_feed_heading.map((item) =>
                  item === "ลำดับ" || item === "จัดการาข้อมูล" ? null : (
                    <option
                      key={item}
                      className="p-3 text-center text-sm font-semibold tracking-wide"
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* END OF TypeSelection */}
          </div>
        </div>
        {/* END OF SearchBar and TypeSelection */}

        {/* TABLE CONTENT */}
        <div className="overflow-auto rounded-lg shadow">
          <table className="border-solid-500 w-full table-auto border-collapse border">
            <thead className="border-b-2 border-gray-200 bg-[#0265ff] ">
              <tr className="">
                {main_feed_heading.map((item) => (
                  <th
                    key={item}
                    className={`text-white ${
                      item === "ลำดับ"
                        ? "p-3 text-center text-sm font-semibold tracking-wide"
                        : "p-3 text-center text-sm font-semibold tracking-wide"
                    } ${item === "ชื่อโครงการวิจัย" ? "" : "w-32"}`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="bg-white">
                <td className="p-3 text-center text-sm text-gray-700">1</td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Innovation for youth development with “Palang Boron”, Bang Nam
                  Chuet Subdistrict, Lang Suan District, Chumphon Province
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Suchart Thongyod"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Suchart Thongyod
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Chiang Mai University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2023
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-center text-sm text-gray-700">2</td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Legal Measures to Protect the Rights of Those Arrested in Drug
                  Crimes
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Janejira Saetiao"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Janejira Saetiao
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Mahidol University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-center text-sm text-gray-700">3</td>

                <td className="p-3 text-center text-sm text-gray-700">
                  Sustainable Self-Reliant Community Management of Ban Bangsan
                  Community, Phanom Subdistrict, Phanom District, Surat Thani
                  Province
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Onuma Ruangwet"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Onuma Ruangwet
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Khon Kaen University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-center text-sm text-gray-700">4</td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Innovation for youth development with “Palang Boron”, Bang Nam
                  Chuet Subdistrict, Lang Suan District, Chumphon Province
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Suchart Thongyod"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Suchart Thongyod
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Chiang Mai University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2023
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-center text-sm text-gray-700">5</td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Legal Measures to Protect the Rights of Those Arrested in Drug
                  Crimes
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Janejira Saetiao"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Janejira Saetiao
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Mahidol University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-center text-sm text-gray-700">6</td>

                <td className="p-3 text-center text-sm text-gray-700">
                  Sustainable Self-Reliant Community Management of Ban Bangsan
                  Community, Phanom Subdistrict, Phanom District, Surat Thani
                  Province
                </td>
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <Link
                    href={"/" + "Onuma Ruangwet"}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Onuma Ruangwet
                  </Link>
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Khon Kaen University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded bg-[#f1d386] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-update.png"
                        width={24}
                        height={24}
                        alt="update"
                      />
                    </button>
                    <button className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700">
                      <Image
                        src="/assets/images/icon-delete.png"
                        width={24}
                        height={24}
                        alt="delete"
                      />
                    </button>
                  </div>
                </td>
              </tr>
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
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
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
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-[#0265ff] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
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
      </div>
    </>
  );
}

export default MainFeed;
