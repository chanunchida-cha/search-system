import React from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";
import HeaderAssessment from "./HeaderAssessment";

type Props = {};

function ResearchPropasal({}: Props) {
  return (
    <BoxLayout title={"ข้อเสนอโครงการวิจัย"}>
      <div>
        <HeaderAssessment />

        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-1">
            <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
              คะแนน
            </label>
          </div>
          <div className="col-span-1">
            <input
              // onChange={(event) => {
              //   setAffiliation(event.target.value);
              // }}
              type="text"
              name="price"
              id="price"
              className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบผลประเมินที่สแกน :
            </label>
          </div>
          <div className="col-span-8">
            <UploadFileInForm />
          </div>
        </div>
        <FeedbackInForm />
      </div>
    </BoxLayout>
  );
}

export default ResearchPropasal;
