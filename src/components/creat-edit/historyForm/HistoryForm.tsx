import React, { ChangeEvent, ReactElement, useState } from "react";
import SubjectExpertField from "~/components/creat-edit/historyForm/SubjectExpertField";
import ExpforResearch from "~/components/creat-edit/historyForm/ExpForResearch";
import ExpForWork from "~/components/creat-edit/historyForm/ExpForWork";
import LevelsField from "~/components/creat-edit/historyForm/LevelsField";
import ResearchResult from "~/components/creat-edit/historyForm/ResearchResult";
import SelectPrefix from "~/ui/create-edit/SelectPrefix";
import SelectRanks from "~/ui/create-edit/SelectRanks";
import UploadFileInForm from "../assessmentForm/UploadFileInForm";
import { previewImage } from "~/utils/PreviewImage";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { observer } from "mobx-react-lite";
import { setStateFile } from "~/store/create-edit/setStateFile";

interface Props {}

const HistoryForm = observer(({}: Props) => {
  const {
    profile,
    preview,
    setProfile,
    setPreview,
    historyFile,
    setHistoryFile,
    removeFileHistory,
    orderFile,
    setOrderFile,
    removeFileOrder,
    accountFile,
    setAccountFile,
    removeFileAccount,
    idCardFile,
    setIdCardFile,
    removeFileIdCard,
  } = setStateFile;

  const { historyDataResults, setAssessmentResult } = setHistoryDataStore;
  const handleHistoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newhistoryDataResults = {
      ...historyDataResults,
      [event.target.name]: event.target.value,
    };
    setAssessmentResult(newhistoryDataResults);
  };
  console.log(historyDataResults);

  return (
    <>
      {/* <div className="mx-auto h-full bg-gray-100 px-10 pb-10"> */}
      <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white ">
        <div className="w-full p-10">
          <div className="flex w-52">
            <h1 className="text-xl font-bold text-black ">
              ประวัติผู้ทรงคุณวุฒิ
            </h1>
          </div>
          <div className="flex h-0.5 w-52 justify-start bg-[#0265ff]"></div>
          <div className="mt-2 sm:grid sm:grid-cols-4">
            <div className="col-span-1 items-center">
              <div
                className="flex flex-col items-center justify-center rounded-full bg-gray-300 sm:h-44
                sm:w-44"
              >
                {profile.profile ? (
                  <div className="h-full w-full rounded-full">
                    <label
                      htmlFor="file-upload"
                      className="text-text-upload relative  cursor-pointer rounded-md  text-sm text-black"
                    >
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={preview}
                      />
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={async (e) => {
                          previewImage(
                            e,
                            setPreview,
                            setProfile,
                            profile.profile!
                          );
                        }}
                        required
                      />
                    </label>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-center">
                      <svg
                        width={"50"}
                        height={"50"}
                        fill="none"
                        color="black"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex justify-center">
                      <label
                        htmlFor="file-upload"
                        className="text-text-upload relative  cursor-pointer rounded-md px-2  py-1  text-sm text-black"
                      >
                        <span>Upload Image</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={async (e) => {
                            previewImage(
                              e,
                              setPreview,
                              setProfile,
                              profile.profile!
                            );
                          }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
              {/* </div> */}
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-1">
                  <label
                    htmlFor="first_name"
                    className="font-medium leading-6 text-gray-900"
                  >
                    ชื่อ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-4">
                  <input
                    value={historyDataResults.first_name}
                    onChange={handleHistoryChange}
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="last_name"
                    className="w-fit font-medium leading-6 text-gray-900"
                  >
                    นามสกุล :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-4">
                  <input
                    value={historyDataResults.last_name}
                    onChange={handleHistoryChange}
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
                  />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-2">
                <div className="col-span-4">
                  <label className="items-center justify-center font-medium leading-6 text-gray-900">
                    ตำแหน่งทางวิชาการ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-6">
                  <SelectRanks />
                </div>
              </div>
              <div className="mt-3">
                <label className="ml-2 items-center justify-center font-medium leading-6 text-gray-900">
                  วุฒิการศึกษา :
                </label>
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
                <div className="mt-3">
                  <LevelsField />
                </div>
              </div>
              <div className="mt-3">
                <label className="ml-2 items-center justify-center font-medium leading-6 text-gray-900">
                  สาขาวิชาที่เชี่ยวชาญ :
                </label>
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
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
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
              </div>
              <div>
                <input
                  // onChange={(event) => {
                  //   setAffiliation(event.target.value);
                  // }}
                  value={historyDataResults.university}
                  onChange={handleHistoryChange}
                  type="text"
                  name="university"
                  id="university"
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
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
              </div>
              <div>
                <ExpForWork />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="price"
                  className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
                >
                  ประสบการณ์ด้านการวิจัย :
                </label>
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
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
                <span className="text-xl text-red-500" aria-hidden="true">
                  *
                </span>
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
                    htmlFor="address_home"
                    className="items-center justify-center font-medium leading-6 text-gray-900"
                  >
                    ที่อยู่ที่สามารถติดต่อได้ (ที่บ้าน) :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className=" col-span-1">
                  <input
                    value={historyDataResults.address_home}
                    onChange={handleHistoryChange}
                    type="text"
                    name="address_home"
                    id="address_home"
                    className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
                  />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-2">
                <div className=" col-span-4">
                  <label
                    htmlFor="address_work"
                    className="items-center justify-center font-medium leading-6 text-gray-900"
                  >
                    ที่อยู่ที่สามารถติดต่อได้ (ที่ทำงาน) :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className=" col-span-1">
                  <input
                    value={historyDataResults.address_work}
                    onChange={handleHistoryChange}
                    type="text"
                    name="address_work"
                    id="address_work"
                    className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
                  />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-2">
                <div className=" col-span-2">
                  <label
                    htmlFor="phone_number"
                    className="items-center justify-center font-medium leading-6 text-gray-900"
                  >
                    เบอร์ติดต่อ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className=" col-span-1">
                  <input
                    value={historyDataResults.phone_number}
                    onChange={handleHistoryChange}
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
                  />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-2">
                <div className=" col-span-2">
                  <label
                    htmlFor="email"
                    className="items-center justify-center font-medium leading-6 text-gray-900"
                  >
                    อีเมลล์ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className=" col-span-1">
                  <input
                    value={historyDataResults.email}
                    onChange={handleHistoryChange}
                    type="text"
                    name="email"
                    id="email"
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
                    แนบประวัติ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-9">
                  <UploadFileInForm
                    name="history_file"
                    state={historyFile.history_file!}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setHistoryFile(event)
                    }
                    onClickButton={removeFileHistory}
                  />
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
                    แนบคำสั่งแต่งตั้งผู้ทรงคุณวุฒิ :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-9">
                  <UploadFileInForm
                    name="order_file"
                    state={orderFile.order_file!}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setOrderFile(event)
                    }
                    onClickButton={removeFileOrder}
                  />
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
                    แนบสำเนาบัญชี :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-9">
                  <UploadFileInForm
                    name="account_file"
                    state={accountFile.account_file!}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setAccountFile(event)
                    }
                    onClickButton={removeFileAccount}
                  />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-12 gap-2">
                <div className="col-span-3">
                  <label
                    htmlFor="price"
                    className="items-center justify-center font-medium leading-6 text-gray-900"
                  >
                    แนบสำเนาบัตรประชาชน :
                  </label>
                  <span className="text-xl text-red-500" aria-hidden="true">
                    *
                  </span>
                </div>
                <div className="col-span-9">
                  <UploadFileInForm
                    name="idCard_file"
                    state={idCardFile.idCard_file!}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setIdCardFile(event)
                    }
                    onClickButton={removeFileIdCard}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
});

export default HistoryForm;
