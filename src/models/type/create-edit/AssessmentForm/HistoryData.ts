export type HistoryDataResults = {
  firstName: string;
  lastName: string;
  positionName: string;
  university: string;
  addressHome: string;
  addressWork: string;
  email: string;
  phoneNumber: string;
 
};

export type Degree = {
  degreeType: string;

  degreeProgram: string;
  degreeUniversity: string;
};

export type Program = {
  programName: string;
};

export type Experience = {
  experienceType: string;
  experienceStart: string;
  experienceEnd: string;
  experienceUniversity: string;
  experienceRemark: string;
};

export type ExpResearch = {
  experienceType: string;
  experienceStart: string;
  experienceEnd: string;
  experienceUniversity: string;
  experienceRemark: string;
};

export type Explore = {
  exploreName: string;
  exploreYear: string;
  exploreDetail: string;
};

export type Profile = {
  profile: File | null;
  directory_file: string;
};

export type HistoryFile = {
  history_file: File | null;
  directory_file: string;
};

export type OrderFile = {
  order_file: File | null;
  directory_file: string;
};
export type AccountFile = {
  account_file: File | null;
  directory_file: string;
};
export type IdCardFile = {
  idCard_file: File | null;
  directory_file: string;
};
