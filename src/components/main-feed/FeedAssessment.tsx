import React from "react";
import Image from "next/image";

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
              <h1 className="text-xl text-black ">ประวัติผู้ทรงคุณวุฒิ</h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>

            {/* BOX 1 */}
            <div className="mt-6 flex w-full items-center">
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className=" text-black">ผลการประเมิน</p>
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
                <div className="mt-3 flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className=" text-black">ข้อเสนอโครงการวิจัย</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className=" text-black">
                        งบประมาณรายได้ / งบประมาณแผ่นดิน
                      </p>
                      <input
                        type="text"
                        name="assessmentSinceYearBudget"
                        id="assessmentSinceYearBudget"
                        className="pointer-events-none ml-3 block w-1/5 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                        placeholder="2562"
                      ></input>
                      <p className="ml-3  text-black">เรื่อง</p>
                      <input
                        type="text"
                        name="assessmentNameTitle"
                        id="assessmentNameTitle"
                        className="pointer-events-none ml-3 block w-2/5 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                        placeholder="ชื่อเรื่อง"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">คะแนน</p>
                    <input
                      type="text"
                      name="assessmentPoint"
                      id="assessmentPoint"
                      className="pointer-events-none ml-3 block w-2/12 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                      placeholder="9"
                    ></input>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">เอกสารผลการประเมิน : </p>
                    <input
                      type="text"
                      name="assessmentResult"
                      id="assessmentResult"
                      className="pointer-events-none ml-3 block w-3/12 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                      placeholder="ผลการประเมิน.pdf"
                    ></input>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className=" text-black">ข้อเสนอแนะในการปรับปรุง : </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="basis-2/4">
                    <div className="flex w-full items-center">
                      <p className="ml-12 text-black">
                        ข้อเสนอแนะ ( แบบประเมิน )
                      </p>
                    </div>
                  </div>
                  <div className="basis-2/4">
                    <div className="flex w-full items-center">
                      <input
                        type="checkbox"
                        name="checkboxHave"
                        id="checkboxHave"
                        checked
                      ></input>
                      <p className="ml-2 text-black">มี</p>
                      <input
                        type="checkbox"
                        name="checkboxNotHave"
                        id="checkboxNotHave"
                        className="ml-10"
                      ></input>
                      <p className="ml-2 text-black">ไม่มี</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="basis-2/4">
                    <div className="flex w-full items-center">
                      <p className="ml-12 text-black">
                        ข้อเสนอแนะ ( ข้อเสนอโครงการ )
                      </p>
                    </div>
                  </div>
                  <div className="basis-2/4">
                    <div className="flex w-full items-center">
                      <input
                        type="checkbox"
                        name="checkboxHave"
                        id="checkboxHave"
                        checked
                      ></input>
                      <p className="ml-2 text-black">มี</p>
                      <input
                        type="checkbox"
                        name="checkboxNotHave"
                        id="checkboxNotHave"
                        className="ml-10"
                      ></input>
                      <p className="ml-2 text-black">ไม่มี</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className=" text-black">
                        ระยะเวลาในการประเมิน (กำหนด 15 วัน)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <input
                        type="checkbox"
                        name="checkboxHave"
                        id="checkboxHave"
                        className="ml-12"
                        checked
                      ></input>
                      <p className="ml-2 text-black">ภายในกำหนด</p>
                      <input
                        type="checkbox"
                        name="checkboxNotHave"
                        id="checkboxNotHave"
                        className="ml-20"
                      ></input>
                      <p className="ml-2 text-black">เกินกำหนด</p>
                    </div>
                  </div>
                </div>
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
