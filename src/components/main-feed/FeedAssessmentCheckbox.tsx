import React from "react";

type Props = {
  title: string;
  point: boolean;
};

function FeedAssessmentCheckbox({ title, point }: Props) {
  return (
    <>
      <div className="mt-3 flex w-full flex-row">
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className="font-bold text-black">{title}</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row">
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className=" text-black">งบประมาณรายได้ / งบประมาณแผ่นดิน</p>
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
      <div
        className={`mt-3 flex w-full flex-row ${
          point === false ? "hidden" : ""
        }`}
      >
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
            <p className="ml-12 text-black">ข้อเสนอแนะ ( แบบประเมิน )</p>
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
            <p className="ml-12 text-black">ข้อเสนอแนะ ( ข้อเสนอโครงการ )</p>
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
            <p className=" text-black">ระยะเวลาในการประเมิน (กำหนด 15 วัน)</p>
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
    </>
  );
}

export default FeedAssessmentCheckbox;
