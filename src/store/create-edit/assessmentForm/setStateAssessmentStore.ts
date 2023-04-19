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
    project_estimate: "true",
    project_recommend: "true",
    project_period: "true",
    researchPropasalsFile: null,
  };

  progressReports: ProgressReports = {
    progress_year: "",
    progress_title: "",
    progress_estimate: "true",
    progress_recommend: "true",
    progress_period: "true",
    progressReportsFile: null,
  };

  reports: Reports = {
    report_year: "",
    report_title: "",
    report_estimate: "true",
    report_recommend: "true",
    report_period: "true",
    reportsFile: null,
  };

  researchArticles: ResearchArticles = {
    article_year: "",
    article_title: "",
    article_estimate: "true",
    article_recommend: "true",
    article_period: "true",
    researchArticlesFile: null,
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
      const newResearchPropasals = {
        ...this.researchPropasals,
        [name]: value,
      };
      this.researchPropasals = newResearchPropasals;
    }
  };
  removeFileResearchPropasals = () => {
    this.researchPropasals.researchPropasalsFile = null;
  };

  setProgressReports = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newProgressReports = {
        ...this.progressReports,
        [name]: files[0],
      };
      this.progressReports = newProgressReports;
    } else {
      const newProgressReports = {
        ...this.progressReports,
        [name]: value,
      };
      this.progressReports = newProgressReports;
    }
  };
  removeFileProgressReport = () => {
    this.progressReports.progressReportsFile = null;
  };

  setReports = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newReports = {
        ...this.reports,
        [name]: files[0],
      };
      this.reports = newReports;
    } else {
      const newReports = {
        ...this.reports,
        [name]: value,
      };
      this.reports = newReports;
    }
  };
  removeFileReport = () => {
    this.reports.reportsFile = null;
  };

  setResearchArticles = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newResearchArticles = {
        ...this.researchArticles,
        [name]: files[0],
      };
      this.researchArticles = newResearchArticles;
    } else {
      const newResearchArticles = {
        ...this.researchArticles,
        [name]: value,
      };
      this.researchArticles = newResearchArticles;
    }
  };
  removeFileResearchArticles = () => {
    this.researchArticles.researchArticlesFile = null;
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
