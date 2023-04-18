import { ChangeEvent } from 'react';
import { makeAutoObservable } from "mobx";
import { levels } from "~/models/const/degreeLevels";
import {
  Degree,
  HistoryDataResults,
} from "~/models/type/create-edit/AssessmentForm/HistoryData";

class SetHistoryDataStore {
  historyDataResults: HistoryDataResults = {
    firstName: "",
    lastName: "",
    positionID: "",
    Program: [],
    university: "",
    experience: [],
    explore: [],
    addressHome: "",
    addressWork: "",
    email: "",
    phoneNumber: "",
  };

  listData: Degree[] = [
    {
      degreeType: levels[0]!,
      degreeProgram: "",
      degreeUniversity: "",
    },
  ];

  selectLevel:string = levels[0]!

  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (historyDataResults: HistoryDataResults) => {
    this.historyDataResults = historyDataResults;
    console.log(this.historyDataResults);
  };

  addListData = () => {
    this.listData = [
      ...this.listData,
      { degreeType: levels[0]!, degreeProgram: "", degreeUniversity: "" },
    ];
  };

  removeListData = (index: number) => {
    const newListData = [...this.listData];
    newListData.splice(index, 1);
    this.listData = newListData;
  };
  
  setSelectedLevel=(level:string)=>{
    this.selectLevel = level

  }

  onChangeLavel = (index: number, selectedLevel: string) => {
    const newInputFields = this.listData.map((inputField, id) => {
      if (index === id) {
        return {
          ...inputField,
          degreeType: selectedLevel,
        };
      }
      return inputField;
    });
    this.listData = newInputFields;
  };
  onChangeInputDegree = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listData]; 
    const fieldToUpdate = event.target.name; 
    newInputFields[index]![fieldToUpdate as keyof typeof newInputFields[number]] = event.target.value; 
    this.listData=newInputFields
  }
}

export const setHistoryDataStore = new SetHistoryDataStore();
