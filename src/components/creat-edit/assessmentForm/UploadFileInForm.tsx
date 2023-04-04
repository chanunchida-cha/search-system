import React from "react";

type Props = {};

const UploadFileInForm = (props: Props) => {
  return (

    <div className="grid grid-cols-12">
    <div className="col-span-2">
      <div>
            <input
            //   onChange={(event) => {
            //     setAffiliation(event.target.value);
            //   }}
              type="file"
            />
          </div>
    </div>
    <div className="col-span-1">
      <button
        className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
        // onClick={handleRemove}
      >
        -
      </button>
    </div>
  </div>

    
  );
};

export default UploadFileInForm;
