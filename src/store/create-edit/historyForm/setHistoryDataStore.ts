import { ChangeEvent } from "react";
import { makeAutoObservable } from "mobx";
import { levels } from "~/models/const/degreeLevels";
import {
  Degree,
  Experience,
  Explore,
  ExpResearch,
  HistoryDataResults,
  Positions,
  Profile,
  Program,
} from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { ranks } from "~/models/const/createEdit/rankLevels";
import axios from "axios";
import Swal from "sweetalert2";

class SetHistoryDataStore {

  historyDataResults: HistoryDataResults = {
    firstName: "",
    lastName: "",
    positionName: "",
    university: "",
    addressHome: "",
    addressWork: "",
    email: "",
    phoneNumber: "",
  };

  listData: Degree[] = [
    {
      degreeType: levels[0]?.key!,
      degreeProgram: "",
      degreeUniversity: "",
    },
  ];

  listProgram: Program[] = [
    {
      programName: "",
    },
  ];

  listExperience: Experience[] = [
    {
      experienceType: "work",
      experienceStart: "",
      experienceEnd: "",
      experienceUniversity: "",
      experienceRemark: "",
    },
  ];

  listExpReserach: ExpResearch[] = [
    {
      experienceType: "research",
      experienceStart: "",
      experienceEnd: "",
      experienceUniversity: "",
      experienceRemark: "",
    },
  ];

  listExplore: Explore[] = [
    {
      exploreDetail: "",
      exploreName: "",
      exploreYear: "",
    },
  ];

  positions: Positions[] = [
    {
      position_id: 0,
      position_name: "",
    },
  ];

  selectLevel: { key: string; i18n: string } = levels[0]!;

  // selectRanks: { position_id: number; position_name: string } = positions[0]!;


  constructor() {
    makeAutoObservable(this);
  }

  // setPositionNameEng = (positionName : string) =>{
  //   this.historyDataResults.positionName = positionName
  // }

  validationHistoryData = Object.keys(this.historyDataResults).length !== 0;

  validationExplore = this.listExplore.every(
    (item) => item.exploreDetail && item.exploreName && item.exploreYear
  );

  validationExpReserach = this.listExpReserach.every(
    (item) =>
      item.experienceType &&
      item.experienceStart &&
      item.experienceEnd &&
      item.experienceUniversity &&
      item.experienceRemark
  );

  validationExperience = this.listExperience.every(
    (item) =>
      item.experienceType &&
      item.experienceStart &&
      item.experienceEnd &&
      item.experienceUniversity &&
      item.experienceRemark
  );

  validationProgram = this.listProgram.every((item) => item.programName);

  validationDegree = this.listData.every(
    (item) => item.degreeType && item.degreeProgram && item.degreeUniversity
  );

  setAssessmentResult = (historyDataResults: HistoryDataResults) => {
    this.historyDataResults = historyDataResults;
    console.log(this.historyDataResults);
  };

  addListExplore = () => {
    this.listExplore = [
      ...this.listExplore,
      {
        exploreDetail: "",
        exploreName: "",
        exploreYear: "",
      },
    ];
  };

  addListData = () => {
    this.listData = [
      ...this.listData,
      {
        degreeType: levels[0]?.key!,

        degreeProgram: "",
        degreeUniversity: "",
      },
    ];
  };

  addListProgram = () => {
    this.listProgram = [...this.listProgram, { programName: "" }];
  };

  addListExperience = () => {
    this.listExperience = [
      ...this.listExperience,
      {
        experienceType: "",
        experienceStart: "",
        experienceEnd: "",
        experienceUniversity: "",
        experienceRemark: "",
      },
    ];
  };

  addListExpResearch = () => {
    this.listExpReserach = [
      ...this.listExpReserach,
      {
        experienceType: "",
        experienceStart: "",
        experienceEnd: "",
        experienceUniversity: "",
        experienceRemark: "",
      },
    ];
  };

  removeListData = (index: number) => {
    const newListData = [...this.listData];
    newListData.splice(index, 1);
    this.listData = newListData;
  };

  removeListProgram = (index: number) => {
    const newListData = [...this.listProgram];
    newListData.splice(index, 1);
    this.listProgram = newListData;
  };

  removeListExperience = (index: number) => {
    const newListData = [...this.listExperience];
    newListData.splice(index, 1);
    this.listExperience = newListData;
  };

  removeListExpResearch = (index: number) => {
    const newListData = [...this.listExpReserach];
    newListData.splice(index, 1);
    this.listExpReserach = newListData;
  };

  removeExplore = (index: number) => {
    const newListData = [...this.listExplore];
    newListData.splice(index, 1);
    this.listExplore = newListData;
  };

  setSelectedLevel = (level: { key: string; i18n: string }) => {
    this.selectLevel = level;
  };

  setSelectedRank = (ranks: string) => {
    this.historyDataResults.positionName = ranks;
  };

  onChangeLavel = (index: number, selectedLevel: string) => {
    const newInputFields = this.listData.map((inputField, id) => {
      if (index === id) {
        return {
          ...inputField,
          degreeTypeTH: selectedLevel,
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
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listData = newInputFields;
  };

  onChangeInputProgram = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listProgram];
    const fieldToUpdate = event.target.name;
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listProgram = newInputFields;
  };

  onChangeInputExperience = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listExperience];
    const fieldToUpdate = event.target.name;
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listExperience = newInputFields;
  };

  onChangeInputExpResearch = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listExpReserach];
    const fieldToUpdate = event.target.name;
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listExpReserach = newInputFields;
  };

  onChangeInputExplore = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listExplore];
    const fieldToUpdate = event.target.name;
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listExplore = newInputFields;
  };

  async getPositions() {
    try {
      const response = await axios.get(
        `https://sit-api.uap.universityapp.net/research/researcher/positions`
      );
      const rawResult = response.data;
      const result: Positions = rawResult.data;

      this.positions = result;
      this.historyDataResults.positionName = this.positions[0]?.position_name
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "CANNOT SERVICE 404 ERROR",
        text: err.errorMessage,
      });

      console.log(err);
      throw err;
    }
  }
}

export const setHistoryDataStore = new SetHistoryDataStore();
