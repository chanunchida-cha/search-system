import React, { ChangeEvent, useState } from "react";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import index from "~/pages";
import RemoveButton from "~/ui/create-edit/RemoveButton";

type Props = {
  state: File;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadFileInForm({ state, onChange }: Props) {
  console.log("file",state);
  


  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2 bg-slate-100 rounded-lg flex justify-center items-center">
        <label htmlFor="researchFile">Choose File</label>

        <input
          id="researchFile"
          name="researchFile"
          type="file"
          onChange={onChange}
          className="w-full"
          style={{ display: "none" }}
        />
      </div>
      <div className={`${state ? "col-span-6 ":"col-span-2"}  flex justify-center items-center `}>
        {
          state ? state.name :"No file chosen "
        }
      </div>
      <div className="col-span-1">
        <RemoveButton onClickRemove={()=>{}} />
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
