import React, { ReactElement } from "react";

interface Props {}

function AssessmentForm({}: Props): ReactElement {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        ข้อมูล tab2
      </label>
    </div>
  );
}

export default AssessmentForm;
