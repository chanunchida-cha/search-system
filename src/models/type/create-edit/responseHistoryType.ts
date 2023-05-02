export type ResponseHistory = {

    profile_id: number;
    first_name: string;
    last_name: string;
    profile_status:boolean
    position_id: number;
    position_name: string;
    degree: Degree[];
    program: Program[];
    university: string;
    experience: Experience[];
    explore: Explore[];
    address_home:string;
    address_work:string;
    email:string;
    phone_number:string;
  
};

export type Degree = {
  degree_id: number;
  degree_type: string;
  degree_program: string;
  degree_university: string;
};
export type Program = {
  program_id: number;
  program_name: string;
};

export type Experience = {
  experience_id: number;
  experience_type: string;
  experience_start: string;
  experience_end: string;
  experience_university: string;
  experience_remark: string;
};

export type Explore = {
  explore_id: number;
  explore_name: string;
  explore_year: string;
  explore_detail: string;
};
