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
    <>
      <div className="mx-auto h-screen bg-gray-100">
        <div className=" ml-16 mt-3 grid h-16 grid-cols-4">
          {typeTab.map((data) => {
            return type === data.type ? (
              <div
                className={`flex w-full items-center justify-center rounded-t-lg bg-[#668ff6] px-2 text-white shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            ) : (
              <div
                className={`mt-4 flex h-12 w-full items-center justify-center rounded-t-lg bg-[#d9e3f8] px-2 text-black shadow-lg`}
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
    </>
  );
}

export default FromCreateEdit;
