import React from "react";

type Props = {};

const FeedbackInForm = (props: Props) => {
  return (
    <div className="grid grid-cols-1">
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-medium text-gray-900">
            ข้อเสนอแนะในการปรับปรุง
          </label>
        </div>
      </div>
      <div className="mt-3 ml-10 grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <label className="items-center justify-center font-medium text-gray-900 ">
            ข้อเสนอแนะ ( แบบประเมิน )
          </label>
        </div>
        <div className=" col-span-1">
          <input type="radio" name="feedback_assessment" value="true" />
          <label
            htmlFor="feedback_assessment"
            className="items-center justify-center pl-2 font-medium text-gray-900"
          >
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <input type="radio" name="feedback_assessment" value="false"/>
          <label
            htmlFor="feedback_assessment"
            className="items-center justify-center pl-2 font-medium text-gray-900"
          >
            ไม่มี
          </label>
        </div>
      </div>
      <div className="mt-3 ml-10 grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <label className="items-center justify-center font-medium text-gray-900">
            ข้อเสนอแนะ ( ข้อเสนอโครงการ )
          </label>
        </div>
        <div className=" col-span-1">
          <input  type="radio" name="feedback_project" value="true" />
          <label
            htmlFor="feedback_project"
            className="items-center justify-center  pl-2 font-medium text-gray-900"
          >
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <input  type="radio" name="feedback_project" value="false" />
          <label
            htmlFor="feedback_project"
            className="items-center justify-center  pl-2 font-medium text-gray-900"
          >
            ไม่มี
          </label>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-medium text-gray-900">
            ระยะเวลาในการประเมิน (กำหนด 15 วัน)
          </label>
        </div>
      </div>

      <div className="mt-3 ml-10 grid grid-cols-12 gap-2">
        <div className=" col-span-2">
          <label className="items-center justify-center font-medium text-gray-900">
            <input type="radio" name="time_assessment" />
            ตามกำหนด
          </label>
        </div>
        <div className=" col-span-2">
          <label className="items-center justify-center font-medium text-gray-900">
            <input className=" ml-2" type="radio" name="time_assessment" />
            เกินกำหนด
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInForm;
