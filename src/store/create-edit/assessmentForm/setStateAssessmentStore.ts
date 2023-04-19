import { ChangeEvent } from "react";
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
    researchPropasalsFile: null,
  };

  progressReports: ProgressReports = {
    progress_year: "",
    progress_title: "",
    progress_estimate: true,
    progress_recommend: true,
    period: true,
    progressReportsFile: null,
  };

  reports: Reports = {
    report_year: "",
    report_title: "",
    report_estimate: true,
    report_recommend: true,
    period: true,
    reports: null,
  };

  researchArticles: ResearchArticles = {
    article_year: "",
    article_title: "",
    article_estimate: true,
    article_recommend: true,
    period: true,
    researchArticles: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newAssessmentResult = {
        ...this.assessmentResults,
        [name]: files[0],
      };
      this.assessmentResults = newAssessmentResult;
    } else {
      const newAssessmentResult = {
        ...this.assessmentResults,
        [name]: value,
      };
      this.assessmentResults = newAssessmentResult;
    }
  };
  removeFileAssessmentResults = () => {
    this.assessmentResults.researchFile = null;
  };

  setResearchPropasals = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        console.log("Invalid file type");
        return;
      }

      const newResearchPropasals = {
        ...this.researchPropasals,
        [name]: files[0],
      };
      this.researchPropasals = newResearchPropasals;
    } else {
      const newValue = type === "checkbox" ? event.target.checked : value;
      const newResearchPropasals = {
        ...this.researchPropasals,
        [name]: newValue,
      };
      this.researchPropasals = newResearchPropasals;
    }
  };
  removeFileResearchPropasals = () => {
    this.researchPropasals.researchPropasalsFile = null;
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
