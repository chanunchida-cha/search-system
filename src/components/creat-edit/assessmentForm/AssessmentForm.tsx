import React, { ReactElement } from "react";
import FeedbackInForm from "~/components/creat-edit/assessmentForm/FeedbackInForm";
import UploadFileInForm from "~/components/creat-edit/assessmentForm/UploadFileInForm";
import HeaderAssessment from "./HeaderAssessment";

interface Props {}

function AssessmentForm({}: Props): ReactElement {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        <p className="text-2xl font-extrabold underline decoration-blue-600">
          ข้อมูลผลการประเมิน
        </p>
      </label>

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            ผลการประเมิน
          </label>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="w-18 flex-initial">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            ปีงบประมาณ
          </label>
        </div>
        <div className="... w-20 flex-initial">
          <input
            // onChange={(event) => {
            //   setAffiliation(event.target.value);
            // }}
            type="text"
            name="price"
            id="price"
            className=" w-full items-center rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
        </div>
        <div className="w-18 flex-initial">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            ถึง
          </label>
        </div>
        <div className="... w-20 flex-initial">
          <input
            // onChange={(event) => {
            //   setAffiliation(event.target.value);
            // }}
            type="text"
            name="price"
            id="price"
            className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
        </div>
      </div>

      {/* <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            ปีงบประมาณ
          </label>
        </div>
        <div className=" col-span-1">
          <input
            // onChange={(event) => {
            //   setAffiliation(event.target.value);
            // }}
            type="text"
            name="price"
            id="price"
            className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
        </div>
        <div className="col-span-1">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            ถึง
          </label>
        </div>
        <div className=" col-span-1">
          <input
            // onChange={(event) => {
            //   setAffiliation(event.target.value);
            // }}
            type="text"
            name="price"
            id="price"
            className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
        </div>
      </div> */}

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            แบบงานวิจัย :
          </label>
        </div>
        <div className="col-span-8">
          <UploadFileInForm />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            ข้อเสนอโครงการวิจัย
          </label>
        </div>
      </div>
      <HeaderAssessment />

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
            คะแนน
          </label>
        </div>
        <div className="col-span-1">
          <input
            // onChange={(event) => {
            //   setAffiliation(event.target.value);
            // }}
            type="text"
            name="price"
            id="price"
            className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
          />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            แนบผลประเมินที่สแกน :
          </label>
        </div>
        <div className="col-span-8">
          <UploadFileInForm />
        </div>
      </div>
      <FeedbackInForm />

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            รายงานความก้าวหน้างานวิจัย
          </label>
        </div>
      </div>
      <HeaderAssessment />
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            แนบผลประเมินที่สแกน :
          </label>
        </div>
        <div className="col-span-8">
          <UploadFileInForm />
        </div>
      </div>
      <FeedbackInForm />

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            รายงานการวิจัย
          </label>
        </div>
      </div>
      <HeaderAssessment />
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            แนบผลประเมินที่สแกน :
          </label>
        </div>
        <div className="col-span-8">
          <UploadFileInForm />
        </div>
      </div>
      <FeedbackInForm />

      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <label className="items-center justify-center font-extrabold leading-6 text-gray-900">
            บทความวิจัย/บทความวิชาการ
          </label>
        </div>
      </div>
      <HeaderAssessment />
      <div className="mt-3 grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <label className="items-center justify-center font-medium leading-6 text-gray-900">
            แนบผลประเมินที่สแกน :
          </label>
        </div>
        <div className="col-span-8">
          <UploadFileInForm />
        </div>
      </div>
      <FeedbackInForm />
    </div>
  );
}

export default AssessmentForm;
