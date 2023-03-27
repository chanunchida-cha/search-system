import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

function MainFeed() {
  return (
    <>
      <div className="h-screen bg-orange-100 p-5">
        <h1 className="mb-5 text-4xl">ประวัติผู้ทรงคุณวุฒิ</h1>

        {/* TABLE CONTENT */}
        <div className="overflow-auto rounded-lg shadow">
          <table className="border-solid-500 w-full table-auto border-collapse border">
            <thead className="border-b-2 border-yellow-200 bg-yellow-500 ">
              <tr>
                <th className="w-20 p-3 text-left text-sm font-semibold tracking-wide">
                  ชื่อ-สกุล
                </th>
                <th className="p-3 text-center text-sm font-semibold tracking-wide">
                  ผลงานวิจัยที่ตีพิมพ์
                </th>
                <th className="p-3 text-center text-sm font-semibold tracking-wide">
                  ประเภทของงานวิจัย
                </th>
                <th className="w-24 p-3 text-center text-sm font-semibold tracking-wide">
                  วุฒิการศึกษา
                </th>
                <th className="w-32 p-3 text-center text-sm font-semibold tracking-wide">
                  สังกัดมหาวิทยาลัย
                </th>
                <th className="w-32 p-3 text-center text-sm font-semibold tracking-wide">
                  ปีการศึกษา
                </th>
                <th className="w-32 p-3 text-center text-sm font-semibold tracking-wide">
                  จัดการเอกสาร
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="bg-white">
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Suchart Thongyod
                  </a>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Innovation for youth development with “Palang Boron”, Bang Nam
                  Chuet Subdistrict, Lang Suan District, Chumphon Province
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <span className="rounded-lg bg-purple-200 bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider text-purple-800">
                    Analytical
                  </span>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Master of Business Administration
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Chiang Mai University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2023
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <button className="rounded bg-indigo-600 py-2 px-4 font-bold text-white hover:bg-yellow-700">
                    ดูเอกสาร
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Suchart Pengchai
                  </a>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Legal Measures to Protect the Rights of Those Arrested in Drug
                  Crimes
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <span className="rounded-lg bg-yellow-200 bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800">
                    Experimental
                  </span>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Master of Laws Law
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Mahidol University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <button className="rounded bg-indigo-600 py-2 px-4 font-bold text-white hover:bg-yellow-700">
                    ดูเอกสาร
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Siriwan Duangthongkul
                  </a>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Sustainable Self-Reliant Community Management of Ban Bangsan
                  Community, Phanom Subdistrict, Phanom District, Surat Thani
                  Province
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <span className="rounded-lg bg-green-200 bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider text-green-800">
                    Historical
                  </span>
                </td>
                <td className="p-3 text-center text-sm text-gray-700">
                  Master of Education Curriculum and teaching fields
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  Khon Kaen University
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  2022
                </td>
                <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                  <button className="rounded bg-indigo-600 py-2 px-4 font-bold text-white hover:bg-yellow-700">
                    ดูเอกสาร
                  </button>
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
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
