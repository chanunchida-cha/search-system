import { ChangeEvent } from "react";
import { makeAutoObservable } from "mobx";
import {
  AssessmentResults,
} from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResearchPropasals } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ProgressReports } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { Reports } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResearchArticles } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetStateAssessmentStore {
  assessmentResults: AssessmentResults = {
    assessment_start: "",
    assessment_end: "",
  };

  researchPropasals: ResearchPropasals = {
    project_year: "",
    project_title: "",
    project_point: 0,
    project_estimate: "true",
    project_recommend: "true",
    project_period: "true",
  };

  progressReports: ProgressReports = {
    progress_year: "",
    progress_title: "",
    progress_estimate: "true",
    progress_recommend: "true",
    progress_period: "true",
  };

  reports: Reports = {
    report_year: "",
    report_title: "",
    report_estimate: "true",
    report_recommend: "true",
    report_period: "true",
  };

  researchArticles: ResearchArticles = {
    article_year: "",
    article_title: "",
    article_estimate: "true",
    article_recommend: "true",
    article_period: "true",
  };

  constructor() {
    makeAutoObservable(this);
  }

  validationAssessment = Object.keys(this.assessmentResults).length !== 0

  validationResearchPropasals = Object.keys(this.researchPropasals).length !== 0
  
  validationProgressReports = Object.keys(this.progressReports).length !== 0

  validationReports= Object.keys(this.reports).length !== 0

  validationResearchArticles = Object.keys(this.researchArticles).length !== 0

  setAssessmentResult = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newAssessmentResult = {
      ...this.assessmentResults,
      [name]: value,
    };
    this.assessmentResults = newAssessmentResult;
  };

  setResearchPropasals = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = event.target;

    const newResearchPropasals = {
      ...this.researchPropasals,
      [name]: value,
    };
    this.researchPropasals = newResearchPropasals;
  };

  setProgressReports = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = event.target;

    const newProgressReports = {
      ...this.progressReports,
      [name]: value,
    };
    this.progressReports = newProgressReports;
  };

  setReports = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = event.target;

    const newReports = {
      ...this.reports,
      [name]: value,
    };
    this.reports = newReports;
  };

  setResearchArticles = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = event.target;

    const newResearchArticles = {
      ...this.researchArticles,
      [name]: value,
    };
    this.researchArticles = newResearchArticles;
  };
}

export const setStateAssessmentStore = new SetStateAssessmentStore();

// <ResearchPropasal />
// {/* รายงานความก้าวหน้างานวิจัย */}
// <ProgressReport />
// {/* รายงานวิจัย */}
// <Report />
// {/* บทความวิจัย/บทความวิชาการ */}
// <ResearchArticle />
