/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  AccountFile,
  HistoryFile,
  IdCardFile,
  OrderFile,
} from "./../../models/type/create-edit/AssessmentForm/HistoryData";
import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import { Profile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
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
    directory_file: "project",
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
  preview:string = "";

  profile: Profile = {
    profile: null,
    directory_file: "profile",
  };
  historyFile: HistoryFile = {
    history_file: null,
    directory_file: "history",
  };

  orderFile: OrderFile = {
    order_file: null,
    directory_file: "order",
  };
  accountFile: AccountFile = {
    account_file: null,
    directory_file: "account",
  };
  idCardFile: IdCardFile = {
    idCard_file: null,
    directory_file: "idcard",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setProfile = (image: File) => {
    this.profile.profile = image;
  };
  setPreview = (objectUrl: string) => {
    this.preview = objectUrl;
  };

  validationFile = () => {
    if (this.assessmentFile.assessmentResults_file !== null &&
      this.researchPropasalsFile.researchPropasals_file !== null &&
      this.progressReportFile.progressReport_file !== null &&
      this.reportFile.reports_file !== null &&
      this.researchArticlesFile.researchArticles_file !== null &&
      this.profile.profile !== null &&
      this.historyFile.history_file !== null &&
      this.orderFile.order_file !== null &&
      this.accountFile.account_file !== null &&
      this.idCardFile.idCard_file !== null ) {
      return true;
    }else{
      return false;
    }
  };

  //-----------------------------------------------------------
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

  //------------------------------------------------------------

  setHistoryFile = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newHistoryFile = {
        ...this.historyFile,
        [name]: files[0],
      };
      this.historyFile = newHistoryFile;
    }
  };
  removeFileHistory = () => {
    this.historyFile.history_file = null;
  };
  //------------------------------------------------------------

  setOrderFile = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newOrderFile = {
        ...this.orderFile,
        [name]: files[0],
      };
      this.orderFile = newOrderFile;
    }
  };
  removeFileOrder = () => {
    this.orderFile.order_file = null;
  };
  //------------------------------------------------------------

  setAccountFile = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newAccountFile = {
        ...this.accountFile,
        [name]: files[0],
      };
      this.accountFile = newAccountFile;
    }
  };
  removeFileAccount = () => {
    this.accountFile.account_file = null;
  };
  //------------------------------------------------------------

  setIdCardFile = (event: ChangeEvent<HTMLInputElement>) => {
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

      const newIdCardFile = {
        ...this.idCardFile,
        [name]: files[0],
      };
      this.idCardFile = newIdCardFile;
    }
  };
  removeFileIdCard = () => {
    this.idCardFile.idCard_file = null;
  };
}

export const setStateFile = new SetStateFile();
