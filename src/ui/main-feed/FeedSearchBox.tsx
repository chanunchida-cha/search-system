import React from 'react'

type Props = {}

function FeedSearchBox({}: Props) {
  return (
    <>
      {/* SearchBar */}
      <div className="relative w-2/3 md:w-2/5 lg:w-2/5">
        <input
          className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-3 pl-10 text-sm leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-[#0265ff] focus:outline-none focus:ring-[#0265ff] md:text-base lg:text-lg"
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
    </>
  );
}

export default FeedSearchBox