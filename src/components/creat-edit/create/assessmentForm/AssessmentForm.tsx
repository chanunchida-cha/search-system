import React, { ReactElement } from "react";
import FeedbackInForm from "~/components/creat-edit/create/assessmentForm/FeedbackInForm";
import UploadFileInForm from "~/components/creat-edit/create/assessmentForm/UploadFileInForm";
import HeaderAssessment from "./HeaderAssessment";
import AssessmentResult from "./AssessmentResult";
import ResearchPropasal from "./ResearchPropasal";
import ProgressReport from "./ProgressReport";
import Report from "./Report";
import ResearchArticle from "./ResearchArticle";

interface Props {}

function AssessmentForm({}: Props): ReactElement {
  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-10 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white ">
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl font-bold text-black ">
                ข้อมูลผลการประเมิน
              </h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>
            <div className="mt-3 flex w-full items-center">
              <div className="flex w-full flex-col">
                {/* ผลการประเมิน */}
                <AssessmentResult />
                {/* ข้อเสนอโครงการวิจัย */}
                <ResearchPropasal />
                {/* รายงานความก้าวหน้างานวิจัย */}
                <ProgressReport />
                {/* รายงานวิจัย */}
                <Report />
                {/* บทความวิจัย/บทความวิชาการ */}
                <ResearchArticle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentForm;
