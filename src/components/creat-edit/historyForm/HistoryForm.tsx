import React, { ReactElement, useState } from "react";
import SubjectExpertField from "~/components/creat-edit/assessmentForm/SubjectExpertField";
import ExpforResearch from "~/components/creat-edit/assessmentForm/ExpForResearch";
import ExpForWork from "~/components/creat-edit/assessmentForm/ExpForWork";
import LevelsField from "~/components/creat-edit/assessmentForm/LevelsField";
import ResearchResult from "~/components/creat-edit/assessmentForm/ResearchResult";
import SelectPrefix from "~/ui/create-edit/SelectPrefix";
import SelectRanks from "~/ui/create-edit/SelectRanks";

interface Props {}

function HistoryForm({}: Props): ReactElement {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Affiliation, setAffiliation] = useState("");

  const onClick = ()=>{
    console.log("test");
    
  }

  return (
    <div>
      <div>ประวัติผู้ทรงคุณวุฒิ</div>

      <div className="grid grid-cols-4">
        <div className="col-span-1">
          {/* <PreviewImage /> */}
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <label
                htmlFor="price"
                className="font-medium leading-6 text-gray-900"
              >
                ชื่อ :
              </label>
            </div>
            <div className="col-span-2">
              <SelectPrefix />
            </div>

            <div className="col-span-3">
              <input
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="w-fit font-medium leading-6 text-gray-900"
              >
                นามสกุล :
              </label>
            </div>
            <div className="col-span-3">
              <input
                onChange={(event) => {
                  setlastName(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                ตำแหน่งทางวิชาการ :
              </label>{" "}
            </div>
            <div className="col-span-4">
              <SelectRanks />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              วุฒิการศึกษา :
            </label>
            <div className="mt-3">
              <LevelsField />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              สาขาวิชาที่เชี่ยวชาญ :
            </label>
          </div>

          <div>
            <SubjectExpertField />
          </div>

          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              สังกัดมหาวิทยาลัย :
            </label>
          </div>
          <div>
            <input
              onChange={(event) => {
                setAffiliation(event.target.value);
              }}
              type="text"
              name="price"
              id="price"
              className="w-3/4 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              ประสบการณ์ทำงาน :
            </label>
          </div>
          <div>
            <ExpForWork title={"aaa"} onClick={onClick} />
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              ประสบการณ์ด้านการวิจัย :
            </label>
          </div>
          <div>
            <ExpforResearch />
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              ผลงานวิจัยที่ตีพิมพ์ :
            </label>
          </div>
          <div>
            <ResearchResult />
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              ที่อยู่สามารถติดต่อได้ พร้อมเบอร์ติดต่อ และ E-mail address :
            </label>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className=" col-span-4">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                ที่อยู่ที่สามารถติดต่อได้ (ที่บ้าน) :
              </label>
            </div>
            <div className=" col-span-1">
              <input
                onChange={(event) => {
                  setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className=" col-span-4">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                ที่อยู่ที่สามารถติดต่อได้ (ที่ทำงาน) :
              </label>
            </div>
            <div className=" col-span-1">
              <input
                onChange={(event) => {
                  setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className=" col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                เบอร์ติดต่อ :
              </label>
            </div>
            <div className=" col-span-1">
              <input
                onChange={(event) => {
                  setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className=" col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                อีเมลล์ :
              </label>
            </div>
            <div className=" col-span-1">
              <input
                onChange={(event) => {
                  setAffiliation(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="items-center justify-center font-medium leading-6 text-gray-900"
            >
              อื่นๆ :
            </label>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                แบบประวัติ :
              </label>
            </div>
            <div className="col-span-3">
              <button
                className="w-full rounded-md border border-gray-300 p-1.5 text-gray-900  placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                upload file
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                // onClick={handleRemove}
              >
                -
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-4">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                แบบคำสั่งแต่งตั้งผู้ทรงคุณวุฒิ :
              </label>
            </div>
            <div className="col-span-3">
              <button
                className="w-full rounded-md border border-gray-300 p-1.5 text-gray-900  placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                upload file
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                // onClick={handleRemove}
              >
                -
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                แบบสำเนาบัญชี :
              </label>
            </div>
            <div className="col-span-3">
              <button
                className="w-full rounded-md border border-gray-300 p-1.5 text-gray-900  placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                upload file
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                // onClick={handleRemove}
              >
                -
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                แบบสำเนาบัตรประชาชน :
              </label>
            </div>
            <div className="col-span-3">
              <button
                className="w-full rounded-md border border-gray-300 p-1.5 text-gray-900  placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                upload file
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                // onClick={handleRemove}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryForm;