import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import {
  AssessmentResultsFile,
  ProgressReportsFile,
  ReportFile,
  ResearchArticlesFile,
  ResearchPropasalsFile,
} from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetStateFile {
  assessmentFile: AssessmentResultsFile = {
    assessmentResults_file: null,
    directory_file: "assessment",
  };
  researchPropasalsFile: ResearchPropasalsFile = {
    researchPropasals_file: null,
    directory_file: "project ",
  };
  progressReportFile: ProgressReportsFile = {
    progressReport_file: null,
    directory_file: "progress",
  };
  reportFile: ReportFile = {
    reports_file: null,
    directory_file: "report",
  };

  researchArticlesFile: ResearchArticlesFile = {
    researchArticles_file: null,
    directory_file: "article",
  };

  constructor() {
    makeAutoObservable(this);
  }
  setAssessmentFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newAssessmentFile = {
        ...this.assessmentFile,
        [name]: files[0],
      };
      this.assessmentFile = newAssessmentFile;
    }
  };
  removeFileAssessmentResults = () => {
    this.assessmentFile.assessmentResults_file = null;
  };
  //----------------------------------------------------------------------

  setResearchPropasalsFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newResearchPropasalsFile = {
        ...this.researchPropasalsFile,
        [name]: files[0],
      };
      this.researchPropasalsFile = newResearchPropasalsFile;
    }
  };

  removeFileResearchPropasals = () => {
    this.researchPropasalsFile.researchPropasals_file = null;
  };

  //----------------------------------------------------------
  setProgressReportFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newProgressReportFile = {
        ...this.progressReportFile,
        [name]: files[0],
      };
      this.progressReportFile = newProgressReportFile;
    }
  };

  removeFileProgressReport = () => {
    this.progressReportFile.progressReport_file = null;
  };

  //-----------------------------------------------------
  setReportFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newReportFile = {
        ...this.reportFile,
        [name]: files[0],
      };
      this.reportFile = newReportFile;
    }
  };
  removeFileReport = () => {
    this.reportFile.reports_file = null;
  };
  //-----------------------------------------------------
  setResearchArticlesFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = event.target;

    if (type === "file" && files && files[0]) {
      const fileType = files[0].type;
      if (
        fileType !== "image/png" &&
        fileType !== "image/jpeg" &&
        fileType !== "application/pdf"
      ) {
        return alert("Invalid file type");
      }

      const newResearchArticlesFile = {
        ...this.researchArticlesFile,
        [name]: files[0],
      };
      this.researchArticlesFile = newResearchArticlesFile;
    }
  };
  removeFileResearchArticles = () => {
    this.researchArticlesFile.researchArticles_file = null;
  };
}

export const setStateFile = new SetStateFile();
