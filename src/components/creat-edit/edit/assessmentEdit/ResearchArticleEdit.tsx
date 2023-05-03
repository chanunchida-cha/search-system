import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";

import { observer } from "mobx-react-lite";
import FeedbackInForm from "../../create/assessmentForm/FeedbackInForm";
import UploadFileEdit from "../UploadFileEdit";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";
import HeaderAssessmentEdit from "./HeaderAssessmentEdit";

type Props = {
  feedAssesment: AssessmentDetailResponse;
};

const ResearchArticleEdit = observer(({ feedAssesment }: Props) => {
  const { researchArticlesFile, setResearchArticlesFileOnchange, setOldFile } =
    setFileEdit;

    const {researchArticles,setResearchArticlesOnchange} =setAssessmentEdit

  return (
    <BoxLayout title={" บทความวิจัย/บทความวิชาการ"}>
      <div>
        <HeaderAssessmentEdit
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setResearchArticlesOnchange(event);
          }}
          year={researchArticles.article_year}
          title={researchArticles.article_title}
          name_year={"article_year"}
          name_title={"article_title"}
        />
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
              name="researchArticles_file"
              state={
               researchArticlesFile.researchArticles_file!
              }
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setResearchArticlesFileOnchange(event);
                setOldFile(
                  feedAssesment.Article.file_action,
                  feedAssesment.Article.article_id
                );
              }}
              // onClickButton={removeFileResearchArticles}
            />
          </div>
        </div>
        <FeedbackInForm
          name_period={"article_period"}
          name_estimate={"article_estimate"}
          name_recommend={"article_recommend"}
          period={researchArticles.article_period}
          estimate={researchArticles.article_estimate}
          recommend={researchArticles.article_recommend}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setResearchArticlesOnchange(event)
          }
        />
      </div>
    </BoxLayout>
  );
});

export default ResearchArticleEdit;
