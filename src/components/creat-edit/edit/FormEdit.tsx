import React, { ReactElement, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setStateFile } from "~/store/create-edit/setStateFile";
import HistoryEditForm from "./historyEdit/HistoryEditForm";
import AsessmentEditForm from "./assessmentEdit/AsessmentEditForm";
import { useRouter } from "next/router";
import { feedStore } from "~/store/main-feed/FeedStore";
import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";

type Props = {
  onSubmitEdit?: () => void;
};

const typeTab = [
  {
    type: "history",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    type: "Assessment",
    i18n: "ข้อมูลผลการประเมิน",
  },
];

const FormEdit = observer(({ onSubmitEdit }: Props) => {
  const { validationFile } = setStateFile;
  const {
    validationAssessment,
    validationReports,
    validationProgressReports,
    validationResearchArticles,
    validationResearchPropasals,
  } = setStateAssessmentStore;

  const {
    validationDegree,
    validationExpReserach,
    validationExperience,
    validationExplore,
    validationHistoryData,
    validationProgram,
  } = setHistoryDataStore;

  console.log(validationDegree);
  const {
    setProfile,
    setHistoryFile,
    setOrderFile,
    setAccountFile,
    setIdCardFile,
    setAssessmentFile,
    setResearchPropasalsFile,
    setProgressFile,
    setReportFile,
    setResearchArticlesFile,
  } = setFileEdit;

  const {
    setHistory,
    setListLevel,
    setListProgram,
    setListExperience,
    setListExperienceResearch,
    setListExplore,
  } = setHistoryEdit;

  const { setAssessment, setResearchPropasals, setProgressReports,setReports,setResearchArticles } =
    setAssessmentEdit;

  const [type, settype] = useState("history");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getDetail = async () => {
      const history: FeedDetailResponse = await feedStore.getFeedDetail(
        Number(id)
      );
      setHistory({
        first_name: history.first_name,
        last_name: history.last_name,
        university: history.university,
        position_name: history.position.position_name,
        address_home: history.address_home,
        address_work: history.address_work,
        email: history.email,
        phone_number: history.phone_number,
      });
      setListLevel(
        history.degree.map((degree) => {
          return {
            degree_type: degree.degree_type,
            degree_program: degree.degree_program,
            degree_university: degree.degree_university,
          };
        })
      );
      setListProgram(
        history.program.map((program) => {
          return {
            program_name: program.program_name,
          };
        })
      );
      const filteredExperience = history.experience.filter(
        (experience) => experience.experience_type === "work"
      );

      setListExperience(
        filteredExperience.map((experience) => {
          return {
            experience_type: experience.experience_type,
            experience_start: experience.experience_start,
            experience_end: experience.experience_end,
            experience_university: experience.experience_university,
            experience_remark: experience.experience_remark,
          };
        })
      );
      const filteredExperienceResearch = history.experience.filter(
        (experience) => experience.experience_type === "research"
      );
      setListExperienceResearch(
        filteredExperienceResearch.map((experience) => {
          return {
            experience_type: experience.experience_type,
            experience_start: experience.experience_start,
            experience_end: experience.experience_end,
            experience_university: experience.experience_university,
            experience_remark: experience.experience_remark,
          };
        })
      );

      setListExplore(
        history.explore.map((explore) => {
          return {
            explore_detail: explore.explore_detail,
            explore_name: explore.explore_name,
            explore_year: explore.explore_year,
          };
        })
      );

      history.attach.map((file) => {
        if (file.file_action === "profile") {
          setProfile(file.file_name);
        } else if (file.file_action === "history") {
          setHistoryFile(file.file_name);
        } else if (file.file_action === "order") {
          setOrderFile(file.file_name);
        } else if (file.file_action === "account") {
          setAccountFile(file.file_name);
        } else {
          setIdCardFile(file.file_name);
        }
      });
    };

    getDetail();
  }, [id]);
  useEffect(() => {
    const getAssessmentDetail = async () => {
      const assessment: AssessmentDetailResponse =
        await feedStore.getAssessmentDetail(Number(id));
      setAssessmentFile(assessment.assessment_file_name);
      setResearchPropasalsFile(assessment.Project.file_name);
      setProgressFile(assessment.Progress.file_name);
      setReportFile(assessment.Report.file_name);
      setResearchArticlesFile(assessment.Article.file_name);
      setAssessment({
        assessment_start: assessment.assessment_start,
        assessment_end: assessment.assessment_end,
      });
      setResearchPropasals({
        project_year: assessment.Project.project_year,
        project_title: assessment.Project.project_title,
        project_point: assessment.Project.project_point,
        project_estimate: String(assessment.Project.project_estimate),
        project_period: String(assessment.Project.period),
        project_recommend: String(assessment.Project.project_recommend),
      });
      setProgressReports({
        progress_year: assessment.Progress.progress_year,
        progress_title: assessment.Progress.progress_title,
        progress_estimate: String(assessment.Progress.progress_estimate),
        progress_recommend: String(assessment.Progress.progress_recommend),
        progress_period: String(assessment.Progress.period),
      });
      setReports({
        report_year:assessment.Report.report_year,
        report_title:assessment.Report.report_title,
        report_estimate:String(assessment.Report.report_estimate),
        report_recommend:String(assessment.Report.report_recommend),
        report_period:String(assessment.Report.period)
      })
      setResearchArticles({
        article_year: assessment.Article.article_year,
        article_title:assessment.Article.article_title,
        article_estimate: String(assessment.Article.article_estimate),
        article_recommend:String(assessment.Article.article_recommend),
        article_period:String(assessment.Article.period),
      })
    };
    getAssessmentDetail();
  }, [id]);
  return (
    <>
      <div className="mx-auto h-screen bg-gray-100 ">
        <div className=" ml-16 mt-3 grid h-16 grid-cols-4">
          {typeTab.map((data) => {
            return type === data.type ? (
              <div
                className={`flex w-full items-center justify-center rounded-t-lg bg-[#668ff6] px-2 text-white shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            ) : (
              <div
                className={`mt-4 flex h-12 w-full items-center justify-center rounded-t-lg bg-[#d9e3f8] px-2 text-black shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            );
          })}
        </div>
        <div className="pb-8">
          {type === "history" ? (
            <HistoryEditForm feedDetail={feedStore.feedDetail} />
          ) : (
            <AsessmentEditForm feedAssesment={feedStore.assessmentDetail} />
          )}
          <div className="ml-10 mr-10 grid grid-cols-12">
            {/* {listData.length - 1 === index && ( */}
            <div className="col-span-2">
              <button
                className="w-full rounded-md border border-gray-500 bg-gray-500 p-1.5  text-white placeholder:text-gray-400"
                onClick={() => {
                  if (type === "Assessment") {
                    settype("history");
                  } else {
                    // settype(type);
                  }
                }}
              >
                ย้อนกลับ
              </button>
            </div>
            <div className="col-span-8"></div>

            <div className="col-span-2">
              <button
                className="w-full rounded-md border border-blue-500 bg-blue-500 p-1.5 text-white placeholder:text-gray-400 disabled:border-none disabled:bg-blue-300"
                onClick={() => onSubmitEdit!()}
                hidden={type === "history"}
                type="submit"
                // disabled={
                //   !(
                //     validationAssessment &&
                //     validationDegree &&
                //     validationExpReserach &&
                //     validationExperience &&
                //     validationExplore &&
                //     validationHistoryData &&
                //     validationProgram &&
                //     validationProgressReports &&
                //     validationReports &&
                //     validationResearchArticles &&
                //     validationResearchPropasals &&
                //     validationFile
                //   )
                // }
              >
                บันทึก
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
});

export default FormEdit;
