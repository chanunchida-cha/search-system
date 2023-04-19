import { type } from "os";

export type HistoryDataResults = {
    // prefix: string;
    firstName: string;
    lastName: string;
    positionID: string;

    university: string;
    
    addressHome: string;
    addressWork: string;
    email: string;
    phoneNumber: string;
    // researchFile: File | null;
  };

  export type HistoryDegree = {
    degree: Degree[];
  }

  type Degree = {
    degreeType : string;
    degreeProgram : string;
    degreeUniversity : string;
  };

  export type HistoryProgramResult = {
    programList : Program[]
  }

  export type Program = {
    programName : string;
  }

  // export type Program = {
  //   programName : string;
  // };

  export type HistoryPexperience = {
    experience: Experience[];
  }

  type Experience = {
    experienceType : string;
    experienceStart : string;
    experienceEnd : string;
    experienceUniversity : string;
    experienceRemark : string;
  };

  export type HistoryExplore = {
    explore: Explore[];
  }

  type Explore = {
    exploreName : string;
    exploreYear : string;
    exploreDetail : string;
  };