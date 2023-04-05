import React, { useState } from "react";
import AddAndRemoveButton from "../../../ui/create-edit/AddAndRemoveButton";

const SubjectExpertField = () => {
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    const listOnchange = [...listData];
    listOnchange[index][name] = value;
    setData(listOnchange);
  };

  return (
    <div className="list-data">
      {listData.map((data, index) => (
        <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
          <div className="col-span-4">
            <input
              name="name"
              type="text"
              id="name"
              value={data.name}
              onChange={(event) => handleChange(event, index)}
              required
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <AddAndRemoveButton
            onClickAdd={handleAdd}
            onClickRemove={() => handleRemove(index)}
          />
          {/* {listData.length - 1 === index && (
            <div className="col-span-1">
              <button 
                className="w-full rounded-md border border-blue-700 p-1.5 text-gray-900  placeholder:text-gray-400 bg-blue-700"
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
                type="button"
                onClick={() => handleRemove(index)}
              >
                -
              </button>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default SubjectExpertField;
