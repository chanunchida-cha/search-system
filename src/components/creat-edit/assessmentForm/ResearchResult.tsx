import React, { useState } from "react";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";

type Props = {};

export default function ResearchResult() {
  const [listData, setData] = useState([
    {
      name: "",
    },
  ]);

  console.log(listData);

  const handleAdd = () => {
    setData([...listData, { name: "" }]);
  };

  const handleRemove = (index: number) => {
    const list = [...listData];
    list.splice(index, 1);
    setData(list);
  };

  return (
    <div>
      {listData.map((data, index) => (
        <div
          className="mt-3 rounded-md border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400"
          key={index}
        >
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                ชื่อผู้จัดทำ :
              </label>
            </div>
            <div className="col-span-4">
              <input
                onChange={(event) => {
                  //   setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
              >
                ปีที่ตีพิมพ์ :
              </label>
            </div>
            <div className="col-span-2">
              <input
                onChange={(event) => {
                  //   setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              รายละเอียด :
            </label>
          </div>
          <div className="mt-3">
            <input
              onChange={(event) => {
                //   setAffiliation(event.target.value);
              }}
              type="text"
              name="price"
              id="price"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <AddAndRemoveButton
              onClickAdd={handleAdd}
              onClickRemove={() => handleRemove(index)}
            />
            {/* {listData.length - 1 === index && (
              <div className="col-span-1">
                <button
                  className="w-full rounded-md border border-blue-700 p-1.5 text-white  placeholder:text-gray-400 bg-blue-700"
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>
            )}
            {listData.length > 1 && (
              <div className="col-span-1">
                <button
                  className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                  onClick={handleRemove}
                >
                  -
                </button>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}
