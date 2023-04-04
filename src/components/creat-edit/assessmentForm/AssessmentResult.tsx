import React from "react";
import UploadFileInForm from "./UploadFileInForm";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";

type Props = {};

function AssessmentResult({}: Props) {
  return (
    <BoxLayout title=" ผลการประเมิน">
      <>
        <div className="mt-3 flex gap-2">
          <div className="w-18 flex-initial">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              ปีงบประมาณ
            </label>
          </div>
          <div className="... w-20 flex-initial">
            <input
              type="text"
              name="yearbefor"
              id="yearyearbefor"
              className=" w-full items-center rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="w-18 flex-initial">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              ถึง
            </label>
          </div>
          <div className="... w-20 flex-initial">
            <input
              type="text"
              name="yearafter"
              id="yearafter"
              className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบงานวิจัย :
            </label>
          </div>
          <div className="col-span-8">
            <UploadFileInForm />
          </div>
        </div>
      </>
    </BoxLayout>
  );
}

export default AssessmentResult;
