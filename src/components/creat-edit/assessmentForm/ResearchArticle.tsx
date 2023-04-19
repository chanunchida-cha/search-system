import React from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import HeaderAssessment from "./HeaderAssessment";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";

type Props = {};

function ResearchArticle({}: Props) {
  return (
    <BoxLayout title={" บทความวิจัย/บทความวิชาการ"}>
      <div>
        <HeaderAssessment />
        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบผลประเมินที่สแกน :
            </label>
          </div>
          <div className="col-span-8">
            <UploadFileInForm />
          </div>
        </div>
        <FeedbackInForm />
      </div>
    </BoxLayout>
  );
}

export default ResearchArticle;
