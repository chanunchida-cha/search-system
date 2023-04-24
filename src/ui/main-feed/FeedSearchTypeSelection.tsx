import React from "react";

type Props = {
  searchType: string[];
};

function FeedSearchTypeSelection({ searchType }: Props) {
  return (
    <>
      {/* TypeSelection */}
      <div className="relative mr-3 inline-block w-2/5 md:w-1/6 lg:w-1/5 ">
        <select className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 text-xs leading-tight text-black shadow hover:border-gray-500 focus:outline-none md:text-base lg:text-lg">
          {searchType.map((item) =>
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
    </>
  );
}

export default FeedSearchTypeSelection;
