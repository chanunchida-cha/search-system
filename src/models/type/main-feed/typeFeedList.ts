import { ContentResponse } from "./typeContent";

export type FeedListResponse = {
  content: ContentResponse;
  totalPage: string;
  totalObject: string;
  currentPage: string;
  isLast: string;
};
