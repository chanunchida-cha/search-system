import React, { ChangeEvent } from "react";
import { ResearchPropasals } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  state: ResearchPropasals;
};

const HeaderAssessment = ({ onChange, state }: Props) => {
  return (
    <div className="mt-3 grid grid-cols-12 gap-2">
      <div className="col-span-4">
        <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
          งบประมาณรายได้ / งบประมาณแผ่นดิน
        </label>
      </div>
      <div className="col-span-2">
        <input
          type="text"
          name={state.project_year}
          id={state.project_year}
          className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        />
      </div>
      <div className="col-span-1">
        <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
          เรื่อง
        </label>
      </div>
      <div className="col-span-5">
        <input
          type="text"
          name={state.project_title}
          id={state.project_title}
          className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        />
      </div>
    </div>
  );
};

export default HeaderAssessment;
