import React from "react";

type Props = {};

const HeaderAssessment = (props: Props) => {
  return (
    <div className="mt-3 grid grid-cols-12 gap-2">
      <div className="col-span-4">
        <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
          งบประมาณรายได้ / งบประมาณแผ่นดิน
        </label>
      </div>
      <div className="col-span-2">
        <input
          // onChange={(event) => {
          //   setAffiliation(event.target.value);
          // }}
          type="text"
          name="price"
          id="price"
          className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
        />
      </div>
      <div className="col-span-1">
        <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
          เรื่อง
        </label>
      </div>
      <div className="col-span-5">
        <input
          // onChange={(event) => {
          //   setAffiliation(event.target.value);
          // }}
          type="text"
          name="price"
          id="price"
          className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
        />
      </div>
    </div>
  );
};

export default HeaderAssessment;
