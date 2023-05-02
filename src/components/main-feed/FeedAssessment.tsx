import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import FeedAssessmentCheckbox from "./FeedAssessmentCheckbox";
import FeedOneBoxButton from "~/ui/main-feed/FeedOneBoxButton";
import Link from "next/link";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { showImage } from "~/utils/aws-sdk/showImage";
import { useRouter } from "next/router";
import UploadFileInForm from "../creat-edit/create/assessmentForm/UploadFileInForm";

type Props = {
  assessmentDetail: AssessmentDetailResponse;
  imagePath: string;
};

function FeedAssessment({ assessmentDetail, imagePath }: Props) {
  const router = useRouter();
  const edit = router.pathname.startsWith("/edit");
  useEffect(() => {
    console.log("Check", assessmentDetail.assessment_end);
  }, []);
  const [s3url, setS3url] = useState<string>();
  useEffect(() => {}, [imagePath]);
  const loadImage = async () => {
    await showImage("pdf", imagePath!, String(imagePath), setS3url);
  };
  const setFilePathAssessmentCheckBox = (typeCheck: string) => {
    let pathFile = "";
    let pathAction = "";
    let pathName = "";
    if (typeCheck === "Project") {
      pathAction = assessmentDetail.Project.file_action;
      pathName = assessmentDetail.Project.file_name;
    } else if (typeCheck === "Progress") {
      pathAction = assessmentDetail.Progress.file_action;
      pathName = assessmentDetail.Progress.file_name;
    } else if (typeCheck === "Report") {
      pathAction = assessmentDetail.Report.file_action;
      pathName = assessmentDetail.Report.file_name;
    } else if (typeCheck === "Article") {
      pathAction = assessmentDetail.Article.file_action;
      pathName = assessmentDetail.Article.file_name;
    }
    pathFile = pathAction + "/" + pathName;
    return pathFile;
  };
  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-5 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white">
          {/* CONTENT */}
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl font-bold text-black ">
                ข้อมูลผลการประเมิน
              </h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>

            {/* BOX 1 */}
            <div className="mt-6 flex w-full items-center">
              <div className="flex w-full flex-col">
                <div className="flex w-full flex-row">
                  <div className="w-full">
                    <div className="flex w-full items-center">
                      <p className="font-bold text-black">ผลการประเมิน</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">ปีงบประมาณ</p>
                    {edit && (
                      <span className="text-xl text-red-500" aria-hidden="true">
                        *
                      </span>
                    )}
                    <input
                      type="text"
                      name="assessmentSinceBudget"
                      id="assessmentSinceBudget"
                      value={assessmentDetail.assessment_start}
                      className={`${
                        edit ? "bg-white text-black" : "pointer-events-none"
                      } ml-3 block w-1/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
                      placeholder="2562"
                    ></input>
                    <p className="ml-3  text-black">ถึง</p>
                    {edit && (
                      <span className="text-xl text-red-500" aria-hidden="true">
                        *
                      </span>
                    )}
                    <input
                      name="assessmentYearBudget"
                      id="assessmentYearBudget"
                      value={assessmentDetail.assessment_end}
                      className={`${
                        edit ? "bg-white text-black" : "pointer-events-none"
                      } ml-3 block w-1/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
                      placeholder="ปัจจุบัน"
                    ></input>
                  </div>
                </div>
                <div className="mt-3 flex w-full flex-row">
                  <div className="flex w-full items-center">
                    <p className=" text-black">เอกสารงานวิจัย : </p>

                    {edit && (
                      <span className="text-xl text-red-500" aria-hidden="true">
                        *
                      </span>
                    )}
                    {edit ? (
                      <UploadFileInForm
                        name="assessmentResults_file"
                        state={assessmentDetail.assessment_file_name}
                        // onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        //   setAssessmentFile(event)
                        // }
                        // onClickButton={removeFileAssessmentResults}
                      />
                    ) : (
                      <Link
                        href={`${s3url}`}
                        className="w-3/4"
                        onClick={() => loadImage()}
                      >
                        <input
                          type="text"
                          name="assessmentResearchDocument"
                          id="assessmentResearchDocument"
                          value={assessmentDetail.assessment_file_name}
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 underline underline-offset-4 "
                          placeholder="งานวิจัย.pdf"
                        ></input>
                      </Link>
                    )}
                  </div>
                </div>
                <FeedAssessmentCheckbox
                  title={"ข้อเสนอโครงการวิจัย"}
                  point={true}
                  startYear={assessmentDetail.Project.project_year}
                  contentTitle={assessmentDetail.Project.project_title}
                  projectPoint={assessmentDetail.Project.project_point}
                  fileTitle={assessmentDetail.Project.file_name}
                  checkEstimate={assessmentDetail.Project.project_estimate}
                  checkRecommend={assessmentDetail.Project.project_recommend}
                  checkPeriod={assessmentDetail.Project.period}
                  imagePath={setFilePathAssessmentCheckBox("Project")}
                />
                <FeedAssessmentCheckbox
                  title={"รายงานความก้าวหน้าวิจัย"}
                  point={false}
                  startYear={assessmentDetail.Progress.progress_year}
                  contentTitle={assessmentDetail.Progress.progress_title}
                  fileTitle={assessmentDetail.Progress.file_name}
                  checkEstimate={assessmentDetail.Progress.progress_estimate}
                  checkRecommend={assessmentDetail.Progress.progress_recommend}
                  checkPeriod={assessmentDetail.Progress.period}
                  imagePath={setFilePathAssessmentCheckBox("Progress")}
                />
                <FeedAssessmentCheckbox
                  title={"รายงานวิจัย"}
                  point={false}
                  startYear={assessmentDetail.Report.report_year}
                  contentTitle={assessmentDetail.Report.report_title}
                  fileTitle={assessmentDetail.Report.file_name}
                  checkEstimate={assessmentDetail.Report.report_estimate}
                  checkRecommend={assessmentDetail.Report.report_recommend}
                  checkPeriod={assessmentDetail.Report.period}
                  imagePath={setFilePathAssessmentCheckBox("Report")}
                />
                <FeedAssessmentCheckbox
                  title={"บทความวิจัย/บทความวิชาการ"}
                  point={false}
                  startYear={assessmentDetail.Article.article_year}
                  contentTitle={assessmentDetail.Article.article_title}
                  fileTitle={assessmentDetail.Article.file_name}
                  checkEstimate={assessmentDetail.Article.article_estimate}
                  checkRecommend={assessmentDetail.Article.article_recommend}
                  checkPeriod={assessmentDetail.Article.period}
                  imagePath={setFilePathAssessmentCheckBox("Article")}
                />
              </div>
            </div>
            {/* END OF BOX 1 */}
          </div>
          {/* END OF CONTENT */}
        </div>
        <div className="mt-6 flex flex-row">
          <FeedOneBoxButton
            btnColor={"[#668ff6]"}
            hoverColor={"[#668ff6]"}
            title={"ย้อนกลับ"}
            link={"/"}
          />
        </div>
      </div>
    </>
  );
}

export default FeedAssessment;
