import React, { ChangeEvent, useState } from "react";
import UploadFileInForm from "./UploadFileInForm";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { observer } from "mobx-react-lite";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { setStateFile } from "~/store/create-edit/setStateFile";

type Props = {};

const AssessmentResult = observer(({}: Props) => {
  const { assessmentResults, setAssessmentResult } = setStateAssessmentStore;

  const { assessmentFile, setAssessmentFile, removeFileAssessmentResults } =
    setStateFile;

  console.log("assessmentFile", assessmentFile);
  console.log("assessmentResult", assessmentResults);

  return (
    <BoxLayout title=" ผลการประเมิน">
      <>
        <div className="mt-3 flex gap-2">
          <div className="w-18 flex-initial">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              ปีงบประมาณ
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="... w-20 flex-initial">
            <input
              value={assessmentResults.assessment_start}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentResult(event)
              }
              type="text"
              name="assessment_start"
              id="assessment_start"
              className=" w-full  items-center rounded-md border border-gray-300 px-2 py-1.5 text-gray-900  placeholder:text-gray-400  required:border-red-500 "
            />
          </div>
          <div className="w-18 flex-initial">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              ถึง
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="... w-20 flex-initial">
            <input
              // value={data.to}
              value={assessmentResults.assessment_end}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentResult(event)
              }
              type="text"
              name="assessment_end"
              id="assessment_end"
              className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบงานวิจัย :
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="col-span-8">
            <UploadFileInForm
              name="assessmentResults_file"
              state={assessmentFile.assessmentResults_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAssessmentFile(event)
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
