import { ChangeEvent } from "react";
import { makeAutoObservable } from "mobx";
import {
  AssessmentResults,
  ProgressReports,
  ResearchArticles,
  ResearchPropasals,
} from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { Reports } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetAssessmentEdit {
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
  setAssessment = (assessment: AssessmentResults) => {
    this.assessmentResults = assessment;
  };
  setAssessmentResultOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newAssessmentResult = {
      ...this.assessmentResults,
      [name]: value,
    };
    this.assessmentResults = newAssessmentResult;
  };

  //-----------------
  setResearchPropasals = (propasal: ResearchPropasals) => {
    this.researchPropasals = propasal;
  };
  setResearchPropasalsOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    const newResearchPropasals = {
      ...this.researchPropasals,
      [name]: value,
    };
    this.researchPropasals = newResearchPropasals;
  };
  //-------------------------------
  setProgressReports = (progress: ProgressReports) => {
    this.progressReports = progress;
  };
  setProgressReportsOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    const newProgressReports = {
      ...this.progressReports,
      [name]: value,
    };
    this.progressReports = newProgressReports;
  };

  //---------------------------
  setReports = (report: Reports) => {
    this.reports = report;
  };
  setReportsOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    const newReports = {
      ...this.reports,
      [name]: value,
    };
    this.reports = newReports;
  };
  //-----------------------------------
  setResearchArticles = (article: ResearchArticles) => {
    this.researchArticles = article;
  };
  setResearchArticlesOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    const newResearchArticles = {
      ...this.researchArticles,
      [name]: value,
    };
    this.researchArticles = newResearchArticles;
  };
}
export const setAssessmentEdit = new SetAssessmentEdit();
