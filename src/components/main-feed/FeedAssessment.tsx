import React from "react";
import Image from "next/image";
import FeedAssessmentCheckbox from "./FeedAssessmentCheckbox";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

function FeedAssessment({}: Props) {
  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-10 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white">
          {/* CONTENT */}
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl font-bold text-black ">
                ข้อมูลผลการประเมิน
              </h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>

            {/* BOX 1 */}
            <div className="mt-6 flex w-full items-center">
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className="font-bold text-black">ผลการประเมิน</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">ปีงบประมาณ</p>
                    <input
                      type="text"
                      name="assessmentSinceBudget"
                      id="assessmentSinceBudget"
                      className="pointer-events-none ml-3 block w-1/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                      placeholder="2562"
                    ></input>
                    <p className="ml-3  text-black">ถึง</p>
                    <input
                      type="text"
                      name="assessmentYearBudget"
                      id="assessmentYearBudget"
                      className="pointer-events-none ml-3 block w-1/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                      placeholder="ปัจจุบัน"
                    ></input>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">เอกสารงานวิจัย : </p>
                    <input
                      type="text"
                      name="assessmentResearchDocument"
                      id="assessmentResearchDocument"
                      className="pointer-events-none ml-3 block w-1/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                      placeholder="งานวิจัย.pdf"
                    ></input>
                  </div>
                </div>
                <FeedAssessmentCheckbox
                  title={"ข้อเสนอโครงการวิจัย"}
                  point={true}
                />
                <FeedAssessmentCheckbox
                  title={"รายงานความก้าวหน้าวิจัย"}
                  point={false}
                />
                <FeedAssessmentCheckbox title={"รายงานวิจัย"} point={false} />
                <FeedAssessmentCheckbox
                  title={"บทความวิจัย/บทความวิชาการ"}
                  point={false}
                />
              </div>
            </div>
            {/* END OF BOX 1 */}
          </div>
          {/* END OF CONTENT */}
        </div>
      </div>
    </>
  );
}

export default FeedAssessment;
