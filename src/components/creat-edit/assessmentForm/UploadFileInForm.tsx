import React, { ChangeEvent } from "react";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

type Props = {
  state: AssessmentResults;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const UploadFileInForm = ({ state, onChange }: Props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <div>
          <input
            id="researchFile"
            name="researchFile"
            type="file"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="col-span-1">
        <button
          className="w-full rounded-md border border-red-500 bg-red-500 p-1.5  text-white placeholder:text-gray-400"
          // onClick={handleRemove}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UploadFileInForm;
