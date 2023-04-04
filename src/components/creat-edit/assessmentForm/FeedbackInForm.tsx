import React from "react";

type Props = {};

const FeedbackInForm = (props: Props) => {
  return (
    // <div className="mt-3 flex gap-2">
    //     <div className="w-18 flex-initial">
    //       <label className="items-center justify-center font-medium leading-6 text-gray-900">
    //         ปีงบประมาณ
    //       </label>
    //     </div>
    //     <div className="... w-20 flex-initial">
    //       <input
    //         // onChange={(event) => {
    //         //   setAffiliation(event.target.value);
    //         // }}
    //         type="text"
    //         name="price"
    //         id="price"
    //         className=" w-full px-2 items-center rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
    //       />
    //     </div>
    //     <div className="w-18 flex-initial">
    //       <label className="items-center justify-center font-medium leading-6 text-gray-900">
    //         ถึง
    //       </label>
    //     </div>
    //     <div className="... w-22 flex-initial">
    //     <label className="items-center justify-center font-medium leading-6 text-gray-900">
    //     <input type="checkbox" />
    //          My Value
    //     </label>
    //     </div>
    //   </div>

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
          <label className="items-center justify-center font-medium text-gray-900">
            ข้อเสนอแนะ ( แบบประเมิน )
          </label>
        </div>
        <div className=" col-span-1">
          <label className="items-center justify-center font-medium text-gray-900">
            <input type="checkbox" />
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <label className="items-center justify-center font-medium text-gray-900">
            <input className=" ml-2" type="checkbox" />
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
          <label className="items-center justify-center font-medium text-gray-900">
            <input type="checkbox" />
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <label className="items-center justify-center font-medium text-gray-900">
            <input className=" ml-2" type="checkbox" />
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
            <input type="checkbox" />
            ตามกำหนด
          </label>
        </div>
        <div className=" col-span-2">
          <label className="items-center justify-center font-medium text-gray-900">
            <input className=" ml-2" type="checkbox" />
            เกินกำหนด
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInForm;
