import React, { ChangeEvent, useState } from "react";
import UploadFileInForm from "./UploadFileInForm";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { observer } from "mobx-react-lite";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

type Props = {};

const AssessmentResult = observer(({}: Props) => {
  const {
    assessmentResults,
    setAssessmentResult,
    removeFileAssessmentResults,
  } = setStateAssessmentStore;

  console.log("assessmentResults", assessmentResults);

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
              // value={data.from}
              value={assessmentResults.from}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentResult(event)
              }
              type="text"
              name="from"
              id="from"
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
              // value={data.to}
              value={assessmentResults.to}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentResult(event)
              }
              type="text"
              name="to"
              id="to"
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
            <UploadFileInForm
              name="researchFile"
              state={assessmentResults.researchFile!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentResult(event)
              }
              onClickButton={removeFileAssessmentResults}
            />
          </div>
        </div>
      </>
    </BoxLayout>
  );
});

export default AssessmentResult;
