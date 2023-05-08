import React, { ChangeEvent} from "react";
type Props = {
  period?: string;
  estimate?: string;
  recommend?: string;
  name_period?: string;
  name_estimate?: string;
  name_recommend?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FeedbackInForm = ({
  period,
  estimate,
  recommend,
  name_estimate,
  name_period,
  name_recommend,
  onChange,
}: Props) => {
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
          <input
            type="radio"
            id={name_estimate}
            name={name_estimate}
            value={"true"}
            checked={estimate === "true"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_estimate}
            className="items-center justify-center pl-2 font-medium text-gray-900"
          >
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <input
            type="radio"
            name={name_estimate}
            id={name_estimate}
            value={"false"}
            checked={estimate === "false"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_estimate}
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
          <input
            type="radio"
            name={name_recommend}
            value={"true"}
            checked={recommend === "true"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_recommend}
            className="items-center justify-center  pl-2 font-medium text-gray-900"
          >
            มี
          </label>
        </div>
        <div className=" col-span-1">
          <input
            type="radio"
            name={name_recommend}
            value={"false"}
            checked={recommend === "false"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_recommend}
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
          <input
            type="radio"
            name={name_period}
            value={"true"}
            checked={period === "true"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_period}
            className="items-center justify-center  pl-2 font-medium text-gray-900"
          >
            ตามกำหนด
          </label>
        </div>
        <div className=" col-span-2">
          <input
            type="radio"
            name={name_period}
            value={"false"}
            checked={period === "false"}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
          />
          <label
            htmlFor={name_period}
            className="items-center justify-center  pl-2 font-medium text-gray-900"
          >
            เลยกำหนด
          </label>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInForm;
