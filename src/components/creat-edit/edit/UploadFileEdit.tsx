import React, { ChangeEvent, useState } from "react";
import { object } from "zod";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import index from "~/pages";
import RemoveButton from "~/ui/create-edit/RemoveButton";

type Props = {
  name?:string
  state?: File|string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickButton?: () => void;
};

export default function UploadFileEdit({
  name,
  state,
  onChange,
  onClickButton,
}: Props) {

 
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-3 flex items-center justify-center rounded-lg bg-slate-100">
        <label htmlFor={name}>Choose File</label>

        <input
          id={name}
          name={name}
          type="file"
          onChange={onChange}
          className="w-full"
          style={{ display: "none" }}
        />
      </div>
      <div
        className={`${
          state ? "col-span-6 " : "col-span-2"
        }  flex items-center justify-center `}
      >
        {typeof state === "string" ? state :state?.name }
      </div>
      <div className="col-span-1">
        <RemoveButton onClickRemove={onClickButton!} />
      </div>
    </div>
  );
}
