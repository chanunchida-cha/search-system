import React, { ReactElement, useState } from "react";
import SubjectExpertField from "~/components/creat-edit/assessmentForm/SubjectExpertField";
import ExpforResearch from "~/components/creat-edit/assessmentForm/ExpForResearch";
import ExpForWork from "~/components/creat-edit/assessmentForm/ExpForWork";
import LevelsField from "~/components/creat-edit/assessmentForm/LevelsField";
import ResearchResult from "~/components/creat-edit/assessmentForm/ResearchResult";
import SelectPrefix from "~/ui/create-edit/SelectPrefix";
import SelectRanks from "~/ui/create-edit/SelectRanks";
import UploadFileInForm from "../assessmentForm/UploadFileInForm";

interface Props {}

function HistoryForm({}: Props): ReactElement {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Affiliation, setAffiliation] = useState("");

  const onClick = () => {
    console.log("test");
  };

  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-10 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white ">
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl font-bold text-black ">
                ประวัติผู้ทรงคุณวุฒิ
              </h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>
            <div className="mt-10 flex flex-row">
              <div className="basis-3/12">
                <button className="flex h-72 w-72 items-center justify-center rounded-full bg-gray-300">
                  <svg
                    width={"50"}
                    height={"50"}
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mt-12 ml-12 flex basis-9/12 items-center">
                <div className=" grid grid-cols-3">
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
                          name="firstName"
                          id="firstName"
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
                          name="lastName"
                          id="lastName"
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
                        ที่อยู่สามารถติดต่อได้ พร้อมเบอร์ติดต่อ และ E-mail
                        address :
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
                      <div className="col-span-3">
                        <label
                          htmlFor="price"
                          className="items-center justify-center font-medium leading-6 text-gray-900"
                        >
                          แบบประวัติ :
                        </label>
                      </div>
                      <div className="col-span-9">
                        <UploadFileInForm />
                        {/* <button
                className="w-full rounded-md border border-gray-300 p-1.5 text-gray-900  placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                upload file
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="w-full rounded-md border border-red-500 bg-red-500 p-1.5  text-white placeholder:text-gray-400"
                // onClick={handleRemove}
              >
                -
              </button> */}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-12 gap-2">
                      <div className="col-span-3">
                        <label
                          htmlFor="price"
                          className="items-center justify-center font-medium leading-6 text-gray-900"
                        >
                          แบบคำสั่งแต่งตั้งผู้ทรงคุณวุฒิ :
                        </label>
                      </div>
                      <div className="col-span-9">
                        <UploadFileInForm />
                        {/* <button
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
              </button> */}
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-12 gap-2">
                      <div className="col-span-3">
                        <label
                          htmlFor="price"
                          className="items-center justify-center font-medium leading-6 text-gray-900"
                        >
                          แบบสำเนาบัญชี :
                        </label>
                      </div>
                      <div className="col-span-9">
                        <UploadFileInForm />
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
                      <div className="col-span-9">
                        <UploadFileInForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryForm;
