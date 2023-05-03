/* eslint-disable @typescript-eslint/no-inferrable-types */
import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import {
  AccountFile,
  HistoryFile,
  IdCardFile,
  OrderFile,
  Profile,
} from "~/models/type/create-edit/AssessmentForm/HistoryData";
import {
  AssessmentResultsFile,
  ProgressReportsFile,
  ReportFile,
  ResearchArticlesFile,
  ResearchPropasalsFile,
} from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetFileEdit {
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
  preview: string = "";
  fileChange: boolean = false;

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

  oldFile: { directory_file: string; directory_id: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setFileChange = (change: boolean) => {
    this.fileChange = change;
  };
  setProfile = (image: File | string) => {
    this.profile.profile = image;
  };
  setProfileOnChange = (image: File) => {
    this.profile.profile = image;
  };
  setPreview = (objectUrl: string) => {
    this.preview = objectUrl;
  };

  setOldFile = (directory_file: string, directory_id: number) => {
    const fileExists = this.oldFile.some(
      (file) => file.directory_file === directory_file
    );
    if (!fileExists) {
      this.oldFile.push({
        directory_file,
        directory_id,
      });
    }
  };

  //-----------------------------------------------------------
  setAssessmentFile=(file:File| string)=>{
    this.assessmentFile.assessmentResults_file = file

  }
  setAssessmentFileOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  setResearchPropasalsFile=(file:File|string)=>{
    this.researchPropasalsFile.researchPropasals_file = file
  }
  setResearchPropasalsFileOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  setProgressFile=(file:File|string)=>{
    this.progressReportFile.progressReport_file = file
  }
  setProgressReportFileOnchamge = (event: ChangeEvent<HTMLInputElement>) => {
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
  setReportFile=(file:File|string)=>{
    this.reportFile.reports_file = file
  }
  setReportFileOnchange = (event: ChangeEvent<HTMLInputElement>) => {
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
  setResearchArticlesFile=(file:File|string)=>{
    this.researchArticlesFile.researchArticles_file = file
  }
  setResearchArticlesFileOnchange = (event: ChangeEvent<HTMLInputElement>) => {
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

  setHistoryFile = (file: File | string) => {
    this.historyFile.history_file = file;
  };

  setHistoryFileOnChang = (event: ChangeEvent<HTMLInputElement>) => {
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
  setOrderFile = (file: File | string) => {
    this.orderFile.order_file = file;
  };

  setOrderFileOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  setAccountFile = (file: File | string) => {
    this.accountFile.account_file = file;
  };

  setAccountFileOnChang = (event: ChangeEvent<HTMLInputElement>) => {
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

  setIdCardFile=(file:File|string)=>{
    this.idCardFile.idCard_file = file
  }

  setIdCardFileOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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

export const setFileEdit = new SetFileEdit();
