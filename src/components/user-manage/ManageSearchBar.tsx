import { type } from 'os'
import React from 'react'
import { useRouter } from 'next/router'
import { manage_heading } from '~/models/const/user-manage/manage_heading';

type Props = {};

function ManageSearchBar({}: Props) {
  const route = useRouter();
    return (
        <>
          {/* SearchBar and TypeSelection */}
          <div className="mb-3 mt-5 grid h-12 md:mt-0" onClick={() => {
            route.push("/create")
          }}>
            <div className="flex items-center justify-end">
              {/* SearchBar */}
              <div className="relative w-2/3 md:w-2/5 lg:w-2/5">
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-3 pl-10 text-sm leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-[#0265ff] focus:outline-none focus:ring-[#0265ff] md:text-base lg:text-lg"
                  id="username"
                  type="text"
                  placeholder="ค้นหาขื่อบัญชี"
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
              <div className="relative ml-3 inline-block w-2/5 md:w-1/6 lg:w-1/5 ">
                <select className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 text-xs leading-tight text-black shadow hover:border-gray-500 focus:outline-none md:text-base lg:text-lg">
                  {manage_heading.map((item) =>
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
        </>
      );
}

export default ManageSearchBar