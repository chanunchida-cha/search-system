import { ContentResponse } from "./typeContent";

export type FeedListResponse = {
  content: ContentResponse[];
  total_page: number;
  total_object: number;
  current_page: number;
  is_last: boolean;
};
