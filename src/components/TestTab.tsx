import React, { ReactElement, useState } from "react";
import AssessmentForm from "./creat-edit/create/assessmentForm/AssessmentForm";
import HistoryForm from "./creat-edit/create/historyForm/HistoryForm";

interface Props {}

const typeTab = [
  {
    type: "history",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    type: "Assessment",
    i18n: "ข้อมูลผลการประเมิน",
  },
];

function TestTab({}: Props): ReactElement {
  const [type, settype] = useState("");
  return (
    <div>
      <div className=" grid grid-cols-10 gap-4">
        {typeTab.map((data) => {
          return (
            <div
              className="flex justify-center bg-blue-400"
              onClick={() => {
                settype(data.type);
              }}
            >
              {data.i18n}
            </div>
          );
        })}
      </div>
      <div>{type === "history" ? <HistoryForm /> : <AssessmentForm />}</div>
    </div>
  );
}

export default TestTab;
