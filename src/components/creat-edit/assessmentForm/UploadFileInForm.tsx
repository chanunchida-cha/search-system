import React, { ChangeEvent, useState } from "react";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import index from "~/pages";
import RemoveButton from "~/ui/create-edit/RemoveButton";

type Props = {
  state?: AssessmentResults;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadFileInForm({ state, onChange }: Props) {
  const [listData, setData] = useState([
    {
      name: "",
    },
  ]);

  const handleRemove = (index: number) => {
    const list = [...listData];
    list.splice(index, 1);
    setData(list);
  };
  
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-8">
        <div>
          <input
            id="researchFile"
            name="researchFile"
            type="file"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="col-span-4">
        <RemoveButton onClickRemove={() => handleRemove(0)} />
        {/* <button
          className="w-full rounded-md border border-red-500 bg-red-500 p-1.5  text-white placeholder:text-gray-400"
          // onClick={handleRemove}
        >
          -
        </button> */}
      </div>
    </div>
  );
}
