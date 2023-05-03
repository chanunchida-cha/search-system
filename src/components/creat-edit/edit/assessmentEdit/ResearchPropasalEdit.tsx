import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import { observer } from "mobx-react-lite";
import UploadFileEdit from "../UploadFileEdit";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";
import HeaderAssessmentEdit from "./HeaderAssessmentEdit";
import FeedbackInFormEdit from "./FeedbackInFormEdit";

type Props = {
  feedAssesment: AssessmentDetailResponse;
};

const ResearchPropasalEdit = observer(({ feedAssesment }: Props) => {
  const {
    researchPropasalsFile,
    setResearchPropasalsFileOnChange,
    setOldFile,
  } = setFileEdit;
  const {researchPropasals,setResearchPropasalsOnchange}=setAssessmentEdit

  return (
    <BoxLayout title={"ข้อเสนอโครงการวิจัย"}>
      <div>
        <HeaderAssessmentEdit
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setResearchPropasalsOnchange(event)
          }
          year={researchPropasals.project_year}
          title={researchPropasals.project_title}
          name_year={"project_year"}
          name_title={"project_title"}
        />

        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-1">
            <label className="mr-2 w-full items-center justify-center font-medium text-gray-900">
              คะแนน
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="col-span-1">
            <input
              value={researchPropasals.project_point}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setResearchPropasalsOnchange(event)
              }
              type="text"
              name="project_point"
              id="project_point"
              className=" w-full rounded-md border border-gray-300 px-2 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <label className="items-center justify-center font-medium leading-6 text-gray-900">
              แนบผลประเมินที่สแกน :
            </label>
            <span className="text-xl text-red-500" aria-hidden="true">
              *
            </span>
          </div>
          <div className="col-span-8">
            <UploadFileEdit
              name="researchPropasals_file"
              state={researchPropasalsFile.researchPropasals_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setResearchPropasalsFileOnChange(event);
                setOldFile(
                  feedAssesment.Project.file_action,
                  feedAssesment.Project.project_id
                );
              }}
              // onClickButton={removeFileResearchPropasals}
            />
          </div>
        </div>
        <FeedbackInFormEdit
          name_period={"project_period"}
          name_estimate={"project_estimate"}
          name_recommend={"project_recommend"}
          period={researchPropasals.project_period}
          estimate={researchPropasals.project_estimate}
          recommend={researchPropasals.project_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setResearchPropasalsOnchange(event)
          }
        />
      </div>
    </BoxLayout>
  );
});
export default ResearchPropasalEdit;
