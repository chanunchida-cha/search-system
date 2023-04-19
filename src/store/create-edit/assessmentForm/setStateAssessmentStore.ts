import { makeAutoObservable } from "mobx";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResearchPropasals } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ProgressReports } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { Reports } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResearchArticles } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetStateAssessmentStore {
  assessmentResults: AssessmentResults = {
    from: "",
    to: "",
    researchFile: null,
  };

  researchPropasals: ResearchPropasals = {
    project_year: "",
    project_title: "",
    project_point: 0,
    project_estimate: true,
    project_recommend: true,
    period: true,
    researchFile: null,
  };

  progressReports: ProgressReports = {
    progress_year: "",
    progress_title: "",
    progress_estimate: true,
    progress_recommend: true,
    period: true,
    researchFile: null,
  };

  reports: Reports = {
    report_year: "",
    report_title: "",
    report_estimate: true,
    report_recommend: true,
    period: true,
    researchFile: null,
  };

  researchArticles: ResearchArticles = {
    article_year: "",
    article_title: "",
    article_estimate: true,
    article_recommend: true,
    period: true,
    researchFile: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (assessmentResults: AssessmentResults) => {
    this.assessmentResults = assessmentResults;
  };

  setResearchPropasals = (researchPropasals: ResearchPropasals) => {
    this.researchPropasals = researchPropasals;
    console.log(this.researchPropasals);
  };

  setProgressReports = (progressReports: ProgressReports) => {
    this.progressReports = progressReports;
  };

  setReports = (reports: Reports) => {
    this.reports = reports;
  };

  setResearchArticles = (researchArticles: ResearchArticles) => {
    this.researchArticles = researchArticles;
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
