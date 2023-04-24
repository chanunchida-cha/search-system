import React, { ChangeEvent } from "react";
import BoxLayout from "~/layouts/create-edit/assessmentForm/BoxLayout";
import HeaderAssessment from "./HeaderAssessment";
import UploadFileInForm from "./UploadFileInForm";
import FeedbackInForm from "./FeedbackInForm";
import { observer } from "mobx-react-lite";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setStateFile } from "~/store/create-edit/setStateFile";

type Props = {};

const ResearchArticle = observer(({}: Props) => {
  const { researchArticles, setResearchArticles } = setStateAssessmentStore;
  const {
    researchArticlesFile,
    setResearchArticlesFile,
    removeFileResearchArticles,
  } = setStateFile;
  return (
    <BoxLayout title={" บทความวิจัย/บทความวิชาการ"}>
      <div>
        <HeaderAssessment
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setResearchArticles(event);
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
          </div>
          <div className="col-span-8">
            <UploadFileInForm
              name="researchArticles_file"
              state={researchArticlesFile.researchArticles_file!}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setResearchArticlesFile(event)
              }
              onClickButton={removeFileResearchArticles}
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
            setResearchArticles(event)
          }
        />
      </div>
    </BoxLayout>
  );
});

export default ResearchArticle;
