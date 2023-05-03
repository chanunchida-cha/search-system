import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";

import { observer } from "mobx-react-lite";
import UploadFileEdit from "../UploadFileEdit";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import FeedbackInFormEdit from "./FeedbackInFormEdit";
import HeaderAssessmentEdit from "./HeaderAssessmentEdit";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";

type Props = {
  feedAssesment: AssessmentDetailResponse;
};

const ReportEdit = observer(({ feedAssesment }: Props) => {
  const { reportFile, setReportFileOnchange, setOldFile } = setFileEdit;
  const {reports,setReportsOnchange}=setAssessmentEdit

  return (
    <BoxLayout title={"รายงานการวิจัย"}>
      <div>
        <HeaderAssessmentEdit
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setReportsOnchange(event);
          }}
          year={reports.report_year}
          title={reports.report_title}
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
              state={reportFile.reports_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setReportFileOnchange(event);
                setOldFile(
                  feedAssesment.Report.file_action,
                  feedAssesment.Report.report_id
                );
              }}
              // onClickButton={removeFileReport}
            />
          </div>
        </div>
        <FeedbackInFormEdit
          name_period={"report_period"}
          name_estimate={"report_estimate"}
          name_recommend={"report_recommend"}
          period={reports.report_period}
          estimate={reports.report_estimate}
          recommend={reports.report_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setReportsOnchange(event)}
        />
      </div>
    </BoxLayout>
  );
});

export default ReportEdit;
