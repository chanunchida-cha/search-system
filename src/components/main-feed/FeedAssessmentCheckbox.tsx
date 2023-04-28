import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArticleResponse } from "~/models/type/main-feed/typeArticle";
import { ProgressResponse } from "~/models/type/main-feed/typeProgress";
import { ProjectResponse } from "~/models/type/main-feed/typeProject";
import { ReportResponse } from "~/models/type/main-feed/typeReport";
import { showImage } from "~/utils/aws-sdk/showImage";

type Props = {
  title: string;
  point: boolean;
  startYear: string;
  contentTitle: string;
  projectPoint?: number;
  fileTitle: string;
  checkEstimate: boolean;
  checkRecommend: boolean;
  checkPeriod: boolean;
  imagePath: string;
};

function FeedAssessmentCheckbox({
  title,
  point,
  startYear,
  contentTitle,
  projectPoint,
  fileTitle,
  checkEstimate,
  checkRecommend,
  checkPeriod,
  imagePath,
}: Props) {
  const [s3url, setS3url] = useState<string>();
  useEffect(() => {}, [imagePath]);
  const loadImage = async () => {
    await showImage("pdf", imagePath!, String(imagePath), setS3url);
  };
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
              value={startYear}
              className="pointer-events-none ml-3 block w-1/5 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder="2562"
            ></input>
            <p className="ml-3  text-black">เรื่อง</p>
            <input
              type="text"
              name="assessmentNameTitle"
              id="assessmentNameTitle"
              value={contentTitle}
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
            value={projectPoint}
            className="pointer-events-none ml-3 block w-2/12 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
            placeholder="9"
          ></input>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row">
        <div className="flex w-full items-center">
          <p className=" text-black">เอกสารผลการประเมิน : </p>
          <Link href={`${s3url}`} className="w-4/5" onClick={() => loadImage()}>
            <input
              type="text"
              name="assessmentResult"
              id="assessmentResult"
              value={fileTitle}
              className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 underline underline-offset-4 "
              placeholder="ผลการประเมิน.pdf"
            ></input>
          </Link>
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
            {checkEstimate ? (
              <>
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
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  name="checkboxHave"
                  id="checkboxHave"
                ></input>
                <p className="ml-2 text-black">มี</p>
                <input
                  type="checkbox"
                  name="checkboxNotHave"
                  id="checkboxNotHave"
                  checked
                  className="ml-10"
                ></input>
                <p className="ml-2 text-black">ไม่มี</p>
              </>
            )}
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
            {checkRecommend ? (
              <>
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
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  name="checkboxHave"
                  id="checkboxHave"
                ></input>
                <p className="ml-2 text-black">มี</p>
                <input
                  type="checkbox"
                  name="checkboxNotHave"
                  id="checkboxNotHave"
                  checked
                  className="ml-10"
                ></input>
                <p className="ml-2 text-black">ไม่มี</p>
              </>
            )}
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
            {checkPeriod ? (
              <>
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
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  name="checkboxHave"
                  id="checkboxHave"
                  className="ml-12"
                ></input>
                <p className="ml-2 text-black">ภายในกำหนด</p>
                <input
                  type="checkbox"
                  name="checkboxNotHave"
                  id="checkboxNotHave"
                  className="ml-20"
                  checked
                ></input>
                <p className="ml-2 text-black">เกินกำหนด</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedAssessmentCheckbox;
