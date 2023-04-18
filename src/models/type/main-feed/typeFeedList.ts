import { ContentResponse } from "./typeContent";

export type FeedListResponse = {
  content: ContentResponse[];
  total_page: string;
  total_object: string;
  current_page: string;
  is_last: string;
};
