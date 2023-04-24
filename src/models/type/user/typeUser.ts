import { ContentUserManageResponse } from "./typeContent";

export type UserManageResponse = {
  content: ContentUserManageResponse[];
  total_page: number;
  total_object: number;
  current_page: number;
  is_last: boolean;
};
