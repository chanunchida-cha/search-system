import React, { ReactElement, useState } from "react";
import HistoryForm from "./historyForm/HistoryForm";
import AssessmentForm from "./assessmentForm/AssessmentForm";

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

function FromCreateEdit({}: Props): ReactElement {
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
      <div>{type === "history" ? <HistoryForm/> : <AssessmentForm/>}</div>
    </div>
  );
}

export default FromCreateEdit;
