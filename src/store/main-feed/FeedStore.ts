import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { FeedListResponse } from "~/models/type/main-feed/typeFeedList";
import { ContentResponse } from "~/models/type/main-feed/typeContent";

class FeedStore {
  feedList: FeedListResponse = {
   
      content: [],
      totalPage: "",
      totalObject: "",
      currentPage: "",
      isLast: "",
    
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getFeedList(searchType: string, page: string, limit: string) {
    try {
      // const response = await axios.get(`http://localhost:3000/api/feedApi`);
      const response = await axios.post(
        `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
        {
          page: 1,
          limit: 10,
        }
      );
      const result = response.data;
      this.feedList = result.data
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "CANNOT SERVICE 404 ERROR",
        text: err.errorMessage,
      });

      console.log(err);
      throw err;
    }
  }
}
export const feedStore = new FeedStore();
