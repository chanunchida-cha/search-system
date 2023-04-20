import { ContentManateResponse } from "./typeContent";

export type ManageResponse = {
  content: ContentManateResponse[];
  total_page: string;
  total_object: string;
  current_page: string;
  is_last: string;
};
