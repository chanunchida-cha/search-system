import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import HeaderAssessment from "./HeaderAssessment";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { observer } from "mobx-react-lite";
import { setStateFile } from "~/store/create-edit/setStateFile";

const ProgressReport = observer(() => {
  const { progressReports, setProgressReports } = setStateAssessmentStore;

  const {
    progressReportFile,
    setProgressReportFile,
    removeFileProgressReport,
  } = setStateFile;

  return (
    <BoxLayout title={"รายงานความก้าวหน้างานวิจัย"}>
      <div>
        <HeaderAssessment
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setProgressReports(event);
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
            <UploadFileInForm
              name="progressReport_file"
              state={progressReportFile.progressReport_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setProgressReportFile(event)
              }
              onClickButton={removeFileProgressReport}
            />
          </div>
        </div>
        <FeedbackInForm
          name_period={"progress_period"}
          name_estimate={"progress_estimate"}
          name_recommend={"progress_recommend"}
          period={progressReports.progress_period}
          estimate={progressReports.progress_estimate}
          recommend={progressReports.progress_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setProgressReports(event)
          }
        />
      </div>
    </BoxLayout>
  );
});

export default ProgressReport;
