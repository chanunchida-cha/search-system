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
    first_name: "",
    last_name: "",
    position_name: "",
    university: "",
    address_home: "",
    address_work: "",
    email: "",
    phone_number: "",
  };

  listData: Degree[] = [
    {
      degree_type: levels[0]?.key!,
      degree_program: "",
      degree_university: "",
    },
  ];

  listProgram: Program[] = [
    {
      program_name: "",
    },
  ];

  listExperience: Experience[] = [
    {
      experience_type: "work",
      experience_start: "",
      experience_end: "",
      experience_university: "",
      experience_remark: "",
    },
  ];

  listExpReserach: ExpResearch[] = [
    {
      experience_type: "research",
      experience_start: "",
      experience_end: "",
      experience_university: "",
      experience_remark: "",
    },
  ];

  listExplore: Explore[] = [
    {
      explore_detail: "",
      explore_name: "",
      explore_year: "",
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

  setAssessmentResult = (historyDataResults: HistoryDataResults) => {
    this.historyDataResults = historyDataResults;
    console.log(this.historyDataResults);
  };

  validationHistory = () => {
    if (
      (this.historyDataResults.first_name &&
        this.historyDataResults.last_name &&
        this.historyDataResults.position_name &&
        this.historyDataResults.university &&
        this.historyDataResults.address_home &&
        this.historyDataResults.address_work &&
        this.historyDataResults.email &&
        this.historyDataResults.phone_number) !== "" &&
      this.listData.every(
        (item) =>
          item.degree_type && item.degree_program && item.degree_university
      ) &&
      this.listProgram.every((item) => item.program_name) &&
      this.listExplore.every(
        (item) => item.explore_detail && item.explore_name && item.explore_year
      ) &&
      this.listExpReserach.every(
        (item) =>
          item.experience_type &&
          item.experience_start &&
          item.experience_end &&
          item.experience_university &&
          item.experience_remark
      ) &&
      this.listExperience.every(
        (item) =>
          item.experience_type &&
          item.experience_start &&
          item.experience_end &&
          item.experience_university &&
          item.experience_remark
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  addListExplore = () => {
    this.listExplore = [
      ...this.listExplore,
      {
        explore_detail: "",
        explore_name: "",
        explore_year: "",
      },
    ];
  };

  addListData = () => {
    this.listData = [
      ...this.listData,
      {
        degree_type: levels[0]?.key!,

        degree_program: "",
        degree_university: "",
      },
    ];
  };

  addListProgram = () => {
    this.listProgram = [...this.listProgram, { program_name: "" }];
  };

  addListExperience = () => {
    this.listExperience = [
      ...this.listExperience,
      {
        experience_type: "",
        experience_start: "",
        experience_end: "",
        experience_university: "",
        experience_remark: "",
      },
    ];
  };

  addListExpResearch = () => {
    this.listExpReserach = [
      ...this.listExpReserach,
      {
        experience_type: "",
        experience_start: "",
        experience_end: "",
        experience_university: "",
        experience_remark: "",
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
    this.historyDataResults.position_name = ranks;
  };

  onChangeLavel = (index: number, selectedLevel: string) => {
    const newInputFields = this.listData.map((inputField, id) => {
      if (index === id) {
        return {
          ...inputField,
          degree_type: selectedLevel,
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
      const result = rawResult.data;

      this.positions = result;
      this.historyDataResults.position_name = this.positions[0]?.position_name!;
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
