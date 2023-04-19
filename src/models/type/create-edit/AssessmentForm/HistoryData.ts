export type HistoryDataResults = {
  // prefix: string;
  firstName: string;
  lastName: string;
  positionID: string;
  Program: Program[];
  university: string;
  experience: Experience[];
  explore: Explore[];
  addressHome: string;
  addressWork: string;
  email: string;
  phoneNumber: string;
  // researchFile: File | null;
};

export  type Degree = {
  degreeType : string;
  degreeProgram : string;
  degreeUniversity : string;
};

type Program = {
  programName : string;
};

type Experience = {
  experienceType : string;
  experienceStart : string;
  experienceEnd : string;
  experienceUniversity : string;
  experienceRemark : string;
};

type Explore = {
  exploreName : string;
  exploreYear : string;
  exploreDetail : string;
};