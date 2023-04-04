import React, { ReactElement } from "react";
import FeedbackInForm from "~/components/creat-edit/assessmentForm/FeedbackInForm";
import UploadFileInForm from "~/components/creat-edit/assessmentForm/UploadFileInForm";
import HeaderAssessment from "./HeaderAssessment";
import AssessmentResult from "./AssessmentResult";
import ResearchPropasal from "./ResearchPropasal";
import ProgressReport from "./ProgressReport";
import Report from "./Report";
import ResearchArticle from "./ResearchArticle";

interface Props {}

function AssessmentForm({}: Props): ReactElement {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        <p className="text-2xl font-extrabold underline decoration-blue-600">
          ข้อมูลผลการประเมิน
        </p>
      </label>
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
  );
}

export default AssessmentForm;
