import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import HeaderAssessment from "./HeaderAssessment";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";
import { observer } from "mobx-react-lite";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";

type Props = {};

const Report = observer(({}: Props) => {
  const { reports, setReports, removeFileReport } = setStateAssessmentStore;
  return (
    <BoxLayout title={"รายงานการวิจัย"}>
      <div>
        <HeaderAssessment
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setReports(event);
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
          </div>
          <div className="col-span-8">
            <UploadFileInForm
              name="reportsFile"
              state={reports.reportsFile!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setReports(event)
              }
              onClickButton={removeFileReport}
            />
          </div>
        </div>
        <FeedbackInForm
          name_period={"report_period"}
          name_estimate={"report_estimate"}
          name_recommend={"report_recommend"}
          period={reports.report_period}
          estimate={reports.report_estimate}
          recommend={reports.report_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setReports(event)}
        />
      </div>
    </BoxLayout>
  );
});

export default Report;
