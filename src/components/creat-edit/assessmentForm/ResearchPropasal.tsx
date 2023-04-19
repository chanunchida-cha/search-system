import React, { ChangeEvent, useState } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";
import HeaderAssessment from "./HeaderAssessment";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { observer } from "mobx-react-lite";

type Props = {};

const ResearchPropasal = observer(({}: Props) => {
  const {
    researchPropasals,
    setResearchPropasals,
    removeFileResearchPropasals,
  } = setStateAssessmentStore;

  console.log(researchPropasals);
  

  return (
    <BoxLayout title={"ข้อเสนอโครงการวิจัย"}>
      <div>
        <HeaderAssessment
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setResearchPropasals(event)
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
          </div>
          <div className="col-span-1">
            <input
              value={researchPropasals.project_point}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setResearchPropasals(event)
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
          </div>
          <div className="col-span-8">
            <UploadFileInForm
              name="researchPropasalsFile"
              state={researchPropasals.researchPropasalsFile!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setResearchPropasals(event)
              }
              onClickButton={removeFileResearchPropasals}
            />
          </div>
        </div>
        <FeedbackInForm
          name_period={"project_period"}
          name_estimate={"project_estimate"}
          name_recommend={"project_recommend"}
          period={researchPropasals.project_period}
          estimate={researchPropasals.project_estimate}
          recommend={researchPropasals.project_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setResearchPropasals(event)
          }
        />
      </div>
    </BoxLayout>
  );
});
export default ResearchPropasal;
