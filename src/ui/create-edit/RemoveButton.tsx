import { useState } from "react";

type Props = {
    onClickRemove: () => void;
};

function RemoveButton({onClickRemove}: Props) {
//   const [listData, setData] = useState([
//     {
//       name: "",
//     },
//   ]);

//   const handleRemove = (index: number) => {
//     const list = [...listData];
//     list.splice(index, 1);
//     setData(list);
//   };

  return (
    <div className="grid grid-cols-12 gap-2">
      <button
        className="w-full rounded-md border border-red-500 bg-red-500 p-1.5 text-white placeholder:text-gray-400"
        onClick={() => onClickRemove()}
        //   hidden={hidden}
      >
        -
      </button>
    </div>
  );
}

export default RemoveButton;
