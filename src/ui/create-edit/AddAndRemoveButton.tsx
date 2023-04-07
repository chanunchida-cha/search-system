import { useState } from "react";

type Props = {
    onClickAdd: ()=> void
    onClickRemove: () => void
    hidden:boolean
  };

export default function AddAndRemoveButton({onClickAdd,onClickRemove,hidden}: Props) {
//   const [listData, setData] = useState([
//     {
//       name: "",
//     },
//   ]);

//   const handleAdd = () => {
//     setData([...listData, { name: "" }]);
//   };

//   const handleRemove = (index: number) => {
//     const list = [...listData];
//     list.splice(index, 1);
//     setData(list);
//   };

  return (
    <div className="grid grid-cols-12 gap-2">
      {/* {listData.length - 1 === index && ( */}
      <div className="col-span-6">
        <button
          className="w-full rounded-md border border-blue-700 bg-blue-700 p-1.5  text-white placeholder:text-gray-400"
          onClick={onClickAdd}
        >
          +
        </button>
      </div>
      {/* )} */}
      {/* {listData.length > 1 && ( */}
      <div className="col-span-6">
        <button
          className="w-full rounded-md border border-red-500 bg-red-500 p-1.5 text-white placeholder:text-gray-400"
          onClick={() => onClickRemove()}
          hidden={hidden}
        >
          -
        </button>
      </div>
      {/* )} */}
    </div>
  );
}
