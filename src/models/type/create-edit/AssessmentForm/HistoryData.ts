import { number, string } from "zod";

export type HistoryDataResults = {
  first_name: string;
  last_name: string;
  position_name: string;
  university: string;
  address_home: string;
  address_work: string;
  email: string;
  phone_number: string;
};

export type Degree = {
  degree_type: string;
  degree_program: string;
  degree_university: string;
};

export type Program = {
  program_name: string;
};

export type Experience = {
  experience_type: string;
  experience_start: string;
  experience_end: string;
  experience_university: string;
  experience_remark: string;
};

export type ExpResearch = {
  experience_type: string;
  experience_start: string;
  experience_end: string;
  experience_university: string;
  experience_remark: string;
};

export type Explore = {
  explore_name: string;
  explore_year: string;
  explore_detail: string;
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

export type Positions = {
  position_id: number;
  position_name: string;
};

export type BodyProfile = {
  first_name: string;
  last_name: string;
  position_name: string;
  degree: Degree[];
  program: Program[];
  university: string;
  experience: Experience[];
  explore: Explore[];
  address_home: string;
  address_work: string;
  email: string;
  phone_number: string;
};
