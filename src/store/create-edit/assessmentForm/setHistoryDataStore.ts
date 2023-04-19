import { ChangeEvent } from 'react';
import { makeAutoObservable } from "mobx";
import {
  HistoryDataResults,
  HistoryDegree,
  HistoryExplore,
  HistoryPexperience,
  HistoryProgramResult,
  Program,
} from "~/models/type/create-edit/AssessmentForm/HistoryData";

class SetHistoryDataStore {
  historyDataResults: HistoryDataResults = {
    firstName: "",
    lastName: "",
    positionID: "",

    university: "",

    addressHome: "",
    addressWork: "",
    email: "",
    phoneNumber: "",
  };

  historyDegree: HistoryDegree = {
    degree: [],
  };

  historyProgramResult: HistoryProgramResult = {
    programList :[],
  };

  historyPexperience: HistoryPexperience = {
    experience: [],
  };

  historyExplore: HistoryExplore = {
    explore: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (historyDataResults: HistoryDataResults) => {
    this.historyDataResults = historyDataResults;
    console.log(this.historyDataResults);
  };

  setHistoryDegree = (historyDegree: HistoryDegree) => {
    this.historyDegree = historyDegree;
    console.log(this.historyDegree);
  };

  // setHistoryProgram = (historyProgram: HistoryProgramResult) => {
  //   this.historyProgram = historyProgram;
  //   console.log(this.historyProgram);
  // };

  setHistoryProgramResult = (historyProgramResult: HistoryProgramResult) => {
    this.historyProgramResult = historyProgramResult;
    console.log(this.historyProgramResult);
  };

  
}

export const setHistoryDataStore = new SetHistoryDataStore();
