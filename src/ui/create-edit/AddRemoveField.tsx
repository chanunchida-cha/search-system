import React, { useState } from "react";

const AddRemoveField = () => {
  const [listData, setData] = useState([
    {
      name: "",
    },
  ]);

  const handleAdd = () => {
    setData([...listData, { name: "" }]);
  };

  const handleRemove = (index: number) => {
    const list = [...listData];
    list.splice(index, 1);
    setData(list);
  };

  return (
    <div className="list-data">
      {listData.map((data, index) => (
        <div className="grid grid-cols-5 gap-4 mt-3" key={index}>
          <input
            name="name"
            type="text"
            className="01 col-span-3 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
          {listData.length - 1 === index && (
            <button
              className="col-span-1 rounded-md border border-gray-300 text-gray-900  placeholder:text-gray-400"
              onClick={handleAdd}
            >
              +
            </button>
          )}
          {listData.length > 1 && (
            <button
              className="col-span-1 rounded-md border border-gray-300 text-gray-900  placeholder:text-gray-400"
              type="button"
              onClick={() => handleRemove(index)}
            >
              -
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddRemoveField;
