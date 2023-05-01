import React, { ReactElement } from "react";
import AssessmentResultEdit from "./AssessmentResultEdit";
import ResearchPropasalEdit from "./ResearchPropasalEdit";
import ProgressEdit from "./ProgressEdit";
import ReportEdit from "./ReportEdit";
import ResearchArticleEdit from "./ResearchArticleEdit";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";

type Props = {
  feedAssesment:AssessmentDetailResponse
}

function AssessmentForm({feedAssesment}: Props): ReactElement {
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
                <AssessmentResultEdit feedAssesment={feedAssesment} />
                {/* ข้อเสนอโครงการวิจัย */}
                <ResearchPropasalEdit feedAssesment={feedAssesment}/>
                {/* รายงานความก้าวหน้างานวิจัย */}
                <ProgressEdit  feedAssesment={feedAssesment}/>
                {/* รายงานวิจัย */}
                <ReportEdit feedAssesment={feedAssesment}/>
                {/* บทความวิจัย/บทความวิชาการ */}
                <ResearchArticleEdit feedAssesment={feedAssesment}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentForm;
