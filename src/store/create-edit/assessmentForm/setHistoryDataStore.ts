import { makeAutoObservable } from "mobx";
import { HistoryDataResults } from "~/models/type/create-edit/AssessmentForm/HistoryData";

class SetHistoryDataStore {
    historyDataResults: HistoryDataResults = {
    firstName: "",
    lastName: "",
    positionID: "",
    degree: [],
    Program: [],
    university: "",
    experience: [],
    explore: [],
    addressHome: "",
    addressWork: "",
    email: "",
    phoneNumber: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (historyDataResults: HistoryDataResults) => {
    this.historyDataResults = historyDataResults;
    console.log(this.historyDataResults);
    
  };
}

export const setHistoryDataStore = new SetHistoryDataStore();