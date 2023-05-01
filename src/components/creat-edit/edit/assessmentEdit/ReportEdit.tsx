import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";

import { observer } from "mobx-react-lite";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setStateFile } from "~/store/create-edit/setStateFile";
import FeedbackInForm from "../../create/assessmentForm/FeedbackInForm";
import UploadFileEdit from "../UploadFileEdit";
import HeaderAssessment from "../../create/assessmentForm/HeaderAssessment";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";

type Props = {
  feedAssesment: AssessmentDetailResponse;
};

const ReportEdit = observer(({ feedAssesment }: Props) => {
  const { reportFile, setReportFile, setOldFile } = setFileEdit;

  return (
    <BoxLayout title={"รายงานการวิจัย"}>
      <div>
        <HeaderAssessment
          // onChange={(event: ChangeEvent<HTMLInputElement>) => {
          //   setReports(event);
          // }}
          // year={reports.report_year}
          // title={reports.report_title}
          name_year={"report_year"}
          name_title={"report_title"}
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
              name="reports_file"
              state={
                reportFile.reports_file !== null
                  ? reportFile.reports_file
                  : feedAssesment.Report.file_name
              }
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setReportFile(event);
                setOldFile(
                  feedAssesment.Report.file_action,
                  feedAssesment.Report.report_id
                );
              }}
              // onClickButton={removeFileReport}
            />
          </div>
        </div>
        <FeedbackInForm
          name_period={"report_period"}
          name_estimate={"report_estimate"}
          name_recommend={"report_recommend"}
          // period={reports.report_period}
          // estimate={reports.report_estimate}
          // recommend={reports.report_recommend}
          // onChange={(event: ChangeEvent<HTMLInputElement>) => setReports(event)}
        />
      </div>
    </BoxLayout>
  );
});

export default ReportEdit;
