/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/jsx-key */
import React, { ReactElement, useState } from "react";
import HistoryForm from "./historyForm/HistoryForm";
import AssessmentForm from "./assessmentForm/AssessmentForm";
import { observer } from "mobx-react-lite";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setStateFile } from "~/store/create-edit/setStateFile";

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

const FromCreateEdit = observer(({}: Props) => {
  const {
    validationAssessment,
    validationReports,
    validationProgressReports,
    validationResearchArticles,
    validationResearchPropasals,
  } = setStateAssessmentStore;

  const {
    validationDegree,
    validationExpReserach,
    validationExperience,
    validationExplore,
    validationHistoryData,
    validationProgram,
  } = setHistoryDataStore;

  const [type, settype] = useState("history");
  return (
    <>
      <div className="mx-auto h-screen bg-gray-100 ">
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
        <div className="pb-8">
          {type === "history" ? <HistoryForm /> : <AssessmentForm />}
          <div className="ml-10 mr-10 grid grid-cols-12">
            {/* {listData.length - 1 === index && ( */}
            <div className="col-span-2">
              <button
                className="w-full rounded-md border border-gray-500 bg-gray-500 p-1.5  text-white placeholder:text-gray-400"
                onClick={() => {
                  if (type === "Assessment") {
                    settype("history");
                  } else {
                    // settype(type);
                  }
                }}
              >
                ย้อนกลับ
              </button>
            </div>
            <div className="col-span-8"></div>
            {/* )} */}
            {/* {listData.length > 1 && ( */}
            <div className="col-span-2">
              <button
                className="w-full rounded-md border border-blue-500 bg-blue-500 p-1.5 text-white placeholder:text-gray-400 disabled:border-none disabled:bg-blue-300"
                // onClick={() => onClickRemove()}
                hidden={type === "history"}
                type="submit"
                disabled={
                  !(
                    validationAssessment &&
                    validationDegree &&
                    validationExpReserach &&
                    validationExperience &&
                    validationExplore &&
                    validationHistoryData &&
                    validationProgram &&
                    validationProgressReports &&
                    validationReports &&
                    validationResearchArticles &&
                    validationResearchPropasals
                  )
                }
              >
                บันทึก
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
});

export default FromCreateEdit;
