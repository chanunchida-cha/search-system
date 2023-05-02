import React, { ChangeEvent, useState } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";

import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { observer } from "mobx-react-lite";
import { setStateFile } from "~/store/create-edit/setStateFile";
import HeaderAssessment from "../../create/assessmentForm/HeaderAssessment";
import UploadFileEdit from "../UploadFileEdit";
import FeedbackInForm from "../../create/assessmentForm/FeedbackInForm";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import HeaderAssessmentEdit from "./HeaderAssessmentEdit";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";
import FeedbackInFormEdit from "./FeedbackInFormEdit";

type Props = {
  feedAssesment: AssessmentDetailResponse;
};
const ProgressEdit = observer(({ feedAssesment }: Props) => {
  const { progressReportFile, setProgressReportFileOnchamge, setOldFile } =
    setFileEdit;

    const {progressReports,setProgressReportsOnchange} =setAssessmentEdit

  return (
    <BoxLayout title={"รายงานความก้าวหน้างานวิจัย"}>
      <div>
        <HeaderAssessmentEdit
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setProgressReportsOnchange(event);
          }}
          year={progressReports.progress_year}
          title={progressReports.progress_title}
          name_year={"progress_year"}
          name_title={"progress_title"}
        />
        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบผลประเมินที่สแกน :
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="col-span-8">
            <UploadFileEdit
              name="progressReport_file"
              state={progressReportFile.progressReport_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setProgressReportFileOnchamge(event);
                setOldFile(
                  feedAssesment.Progress.file_action,
                  feedAssesment.Progress.progress_id
                );
              }}
              // onClickButton={removeFileProgressReport}
            />
          </div>
        </div>
        <FeedbackInFormEdit
          name_period={"progress_period"}
          name_estimate={"progress_estimate"}
          name_recommend={"progress_recommend"}
          period={progressReports.progress_period}
          estimate={progressReports.progress_estimate}
          recommend={progressReports.progress_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setProgressReportsOnchange(event)
          }
        />
      </div>
    </BoxLayout>
  );
});

export default ProgressEdit;
