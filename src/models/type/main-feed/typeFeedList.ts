import { ContentResponse } from "./typeContent";

export type FeedListResponse = {
  data:{
    
      content: ContentResponse[];
      totalPage: string;
      totalObject: string;
      currentPage: string;
      isLast: string;
    
  }
}
