import { AttachResponse } from "./typeAttach";
import { DegreeResponse } from "./typeDegree";
import { ExperienceResponse } from "./typeExperience";
import { ExploreResponse } from "./typeExplore";
import { PositionResponse } from "./typePosition";
import { ProgramResponse } from "./typeProgram";

export type FeedDetailResponse = {
  profile_id: string;
  first_name: string;
  last_name: string;
  university: string;
  address_home: string;
  address_work: string;
  email: string;
  phone_number: string;
  degree: DegreeResponse[];
  position: PositionResponse;
  program: ProgramResponse[];
  experience: ExperienceResponse[];
  attach: AttachResponse[];
  explore: ExploreResponse[];
};
