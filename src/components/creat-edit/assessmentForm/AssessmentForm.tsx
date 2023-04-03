import React, { ReactElement } from "react";
import FeedbackInForm from "~/ui/create-edit/FeedbackInForm";
import UploadFileInForm from "~/ui/create-edit/UploadFileInForm";

interface Props {}

function AssessmentForm({}: Props): ReactElement {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        <p className="text-2xl font-extrabold underline decoration-blue-600">ข้อมูลผลการประเมิน</p>
      </label>
        <div>Upload<UploadFileInForm/></div>

    </div>
  );
}

export default AssessmentForm;
