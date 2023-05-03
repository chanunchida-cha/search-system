import React, { ChangeEvent, useEffect, useState } from "react";
import { previewImage } from "~/utils/PreviewImage";
import { observer } from "mobx-react-lite";
import { feedStore } from "~/store/main-feed/FeedStore";
import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";
import UploadFileEdit from "../UploadFileEdit";
import { showImage } from "~/utils/aws-sdk/showImage";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { setPathImage } from "~/utils/aws-sdk/setPathFile";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";
import SelectRankEdit from "~/ui/create-edit/SelectRankEdit";
import LevelsFieldEdit from "./LevelsFieldEdit";
import SubjectExpertFieldEdit from "./SubjectExpertFieldEdit";
import ExpForWorkEdit from "./ExForWorkEdit";
import ExpforResearchEdit from "./ExForResearchEdit";
import ResearchResultEdit from "./ResearchResultEdit";

type Props = { feedDetail: FeedDetailResponse };
const HistoryEditForm = observer(({ feedDetail }: Props) => {
  const image = setPathImage(feedDetail);
  const [s3url, setS3url] = useState<string>();
  useEffect(() => {
    const loadImage = async () => {
      try {
        await showImage("image", image, "", setS3url);
      } catch (err) {
        throw err;
      }
    };
    void loadImage();
  }, [image]);

  const {
    profile,
    preview,
    fileChange,
    setProfileOnChange,
    setPreview,
    setOldFile,
    setFileChange,
    historyFile,
    setHistoryFileOnChang,
    orderFile,
    setOrderFileOnChange,
    accountFile,
    setAccountFileOnChang,
    idCardFile,
    setIdCardFileOnChange,
  } = setFileEdit;

  const { history, onChangeHistory } = setHistoryEdit;

  console.log(accountFile);

  return (
    <>
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
                {s3url ? (
                  fileChange ? (
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
                          required
                          onChange={(e) => {
                            let file: File | undefined;
                            if (profile.profile instanceof File) {
                              file = profile.profile;
                            }
                            previewImage(
                              e,
                              setPreview,
                              setProfileOnChange,
                              file!
                            );
                            setFileChange(true);
                            setOldFile(
                              "profile",
                              Number(feedStore.feedDetail.profile_id)
                            );
                          }}
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="h-full w-full rounded-full">
                      <label
                        htmlFor="file-upload"
                        className="text-text-upload relative  cursor-pointer rounded-md  text-sm text-black"
                      >
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={s3url}
                        />
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => {
                            let file: File | undefined;
                            if (profile.profile instanceof File) {
                              file = profile.profile;
                            }
                            previewImage(
                              e,
                              setPreview,
                              setProfileOnChange,
                              file!
                            );
                            setFileChange(true);
                            setOldFile(
                              "profile",
                              Number(feedStore.feedDetail.profile_id)
                            );
                          }}
                          required
                        />
                      </label>
                    </div>
                  )
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
                          onChange={(e) => {
                            let file: File | undefined;
                            if (profile.profile instanceof File) {
                              file = profile.profile;
                            }
                            previewImage(
                              e,
                              setPreview,
                              setProfileOnChange,
                              file!
                            );
                            setFileChange(true);
                            setOldFile(
                              "profile",
                              Number(feedStore.feedDetail.profile_id)
                            );
                          }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
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
                    value={history.first_name}
                    onChange={onChangeHistory}
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
                    value={history.last_name}
                    onChange={onChangeHistory}
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
                  <SelectRankEdit />
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
                  <LevelsFieldEdit />
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
                <SubjectExpertFieldEdit />
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
                  value={history.university}
                  onChange={onChangeHistory}
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
                <ExpForWorkEdit />
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
                <ExpforResearchEdit />
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
                <ResearchResultEdit />
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
                    value={history.address_home}
                    onChange={onChangeHistory}
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
                    value={history.address_work}
                    onChange={onChangeHistory}
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
                    value={history.phone_number}
                    onChange={onChangeHistory}
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
                    value={history.email}
                    onChange={onChangeHistory}
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
              {feedDetail?.attach
                ?.filter((file) => file.file_action !== "profile")
                .map((file, index) => {
                  return (
                    <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
                      <div className="col-span-4">
                        <label
                          htmlFor="price"
                          className="items-center justify-center font-medium leading-6 text-gray-900"
                        >
                          {file.file_action === "history"
                            ? "แนบประวัติ :"
                            : file.file_action === "order"
                            ? "แนบคำสั่งแต่งตั้งผู้ทรงคุณวุฒิ :"
                            : file.file_action === "account"
                            ? "แนบสำเนาบัญชี :"
                            : "แนบสำเนาบัตรประชาชน :"}
                        </label>
                        <span
                          className="text-xl text-red-500"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </div>
                      <div className="col-span-8">
                        <UploadFileEdit
                          name={`${file.file_action}_file`}
                          state={
                            file.file_action === "history"
                              ? historyFile.history_file!
                              : file.file_action === "order"
                              ? orderFile.order_file!
                              : file.file_action === "account"
                              ? accountFile.account_file!
                              : idCardFile.idCard_file!
                          }
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            if (file.file_action === "history") {
                              setHistoryFileOnChang(event);
                              setOldFile(
                                file.file_action,
                                Number(feedDetail.profile_id)
                              );
                            } else if (file.file_action === "order") {
                              setOrderFileOnChange(event);
                              setOldFile(
                                file.file_action,
                                Number(feedDetail.profile_id)
                              );
                            } else if (file.file_action === "account") {
                              setAccountFileOnChang(event);
                              setOldFile(
                                file.file_action,
                                Number(feedDetail.profile_id)
                              );
                            } else {
                              setIdCardFileOnChange(event);
                              setOldFile(
                                file.file_action,
                                Number(feedDetail.profile_id)
                              );
                            }
                          }}
                          // onClickButton={removeFileHistory}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HistoryEditForm;
