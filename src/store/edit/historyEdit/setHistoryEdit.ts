/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChangeEvent } from "react";
import { makeAutoObservable } from "mobx";
import { HistoryType } from "~/models/type/create-edit/Edit/history/historyType";
import {
  Degree,
  ExpResearch,
  Experience,
  Explore,
  Program,
} from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { levels } from "~/models/const/degreeLevels";

class SetHistoryEdit {
  history: HistoryType = {
    first_name: "",
    last_name: "",
    university: "",
    position_name: "",
    address_home: "",
    address_work: "",
    email: "",
    phone_number: "",
  };

  listLevel: Degree[] = [
    {
      degree_type: levels[0]?.key!,
      degree_program: "",
      degree_university: "",
    },
  ];
  selectLevel: { key: string; i18n: string } = levels[0]!;
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

  constructor() {
    makeAutoObservable(this);
  }

  setHistory = (history: HistoryType) => {
    this.history = history;
  };
  onChangeHistory = (event: ChangeEvent<HTMLInputElement>) => {
    const newhistory = {
      ...this.history,
      [event.target.name]: event.target.value,
    };
    this.setHistory(newhistory);
  };
  setSelectedRank = (ranks: string) => {
    this.history.position_name = ranks;
  };
  //------------------------------------------
  setListLevel = (level: Degree[]) => {
    this.listLevel = level;
  };
  addListLevel = () => {
    this.listLevel = [
      ...this.listLevel,
      {
        degree_type: levels[0]?.key!,

        degree_program: "",
        degree_university: "",
      },
    ];
  };
  setSelectedLevel = (index: number, level: { key: string; i18n: string }) => {
    this.listLevel.map((inputField, id) => {
      if (index === id) {
        return (this.selectLevel = level);
      }
    });
  };

  removeListLevel = (index: number) => {
    const newListLevel = [...this.listLevel];
    newListLevel.splice(index, 1);
    this.listLevel = newListLevel;
  };
  onChangeLavel = (index: number, selectedLevel: string) => {
    const newInputFields = this.listLevel.map((inputField, id) => {
      if (index === id) {
        return {
          ...inputField,
          degree_type: selectedLevel,
        };
      }
      return inputField;
    });
    this.listLevel = newInputFields;
  };

  onChangeInputDegree = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...this.listLevel];
    const fieldToUpdate = event.target.name;
    newInputFields[index]![
      fieldToUpdate as keyof (typeof newInputFields)[number]
    ] = event.target.value;
    this.listLevel = newInputFields;
  };
  //-----------------------------------
  setListProgram = (program: Program[]) => {
    this.listProgram = program;
  };
  addListProgram = () => {
    this.listProgram = [...this.listProgram, { program_name: "" }];
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

  removeListProgram = (index: number) => {
    const newListData = [...this.listProgram];
    newListData.splice(index, 1);
    this.listProgram = newListData;
  };
  //---------------------------
  setListExperience = (experience: Experience[]) => {
    this.listExperience = experience;
  };
  addListExperience = () => {
    this.listExperience = [
      ...this.listExperience,
      {
        experience_type: "work",
        experience_start: "",
        experience_end: "",
        experience_university: "",
        experience_remark: "",
      },
    ];
  };
  removeListExperience = (index: number) => {
    const newListData = [...this.listExperience];
    newListData.splice(index, 1);
    this.listExperience = newListData;
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

  //------------------------
  setListExperienceResearch = (experience: Experience[]) => {
    this.listExpReserach = experience;
  };
  addListExpResearch = () => {
    this.listExpReserach = [
      ...this.listExpReserach,
      {
        experience_type: "research",
        experience_start: "",
        experience_end: "",
        experience_university: "",
        experience_remark: "",
      },
    ];
  };
  removeListExpResearch = (index: number) => {
    const newListData = [...this.listExpReserach];
    newListData.splice(index, 1);
    this.listExpReserach = newListData;
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
  //------------------------------
  setListExplore = (explore: Explore[]) => {
    this.listExplore = explore;
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

  removeExplore = (index: number) => {
    const newListData = [...this.listExplore];
    newListData.splice(index, 1);
    this.listExplore = newListData;
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
}
export const setHistoryEdit = new SetHistoryEdit();
