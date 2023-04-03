/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-key */
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
  const [type, settype] = useState("history");
  return (
    <div>
      <div className=" relative grid h-10 grid-cols-5 px-5">
        {typeTab.map((data) => {
          return type === data.type ? (
            <div
              className="flex justify-center rounded-tl-lg rounded-tr-lg bg-blue-600 font-extrabold text-white shadow-sm"
              onClick={() => {
                settype(data.type);
              }}
            >
              {data.i18n}
            </div>
          ) : (
            <div
              className="flex justify-center rounded-tl-lg rounded-tr-lg bg-gray-200 text-black shadow-sm"
              onClick={() => {
                settype(data.type);
              }}
            >
              {data.i18n}
            </div>
          );
        })}
      </div>
      <div className="rounded-3xl bg-white p-5 shadow-lg">
        {" "}
        {type === "history" ? <HistoryForm /> : <AssessmentForm />}
      </div>
    </div>
  );
}

export default FromCreateEdit;
