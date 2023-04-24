import React from "react";

type Props = {
    title : string;
    name : string;
};

const AddUserExpertField = ({title,name}: Props) => {
  return (
    <div className=" mx-5 my-5 grid-row-2 grid gap-2">
      <label className=" text-sm leading-6 text-gray-900">
      {title}
      </label>
      <input
        type="text"
        id="user"
        disabled={true}
        className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        placeholder={name}
      />
    </div>
  );
};

export default AddUserExpertField;
