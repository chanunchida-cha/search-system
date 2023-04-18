import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { FeedListResponse } from "~/models/type/main-feed/typeFeedList";
import { ContentResponse } from "~/models/type/main-feed/typeContent";

class FeedStore {
  feedList: FeedListResponse = {
      content: [],
      total_page: "",
      total_object: "",
      current_page: "",
      is_last: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getFeedList(searchType: string, page: number, limit: number) {
    try {
      // const response = await axios.get(`http://localhost:3000/api/feedApi`);
      if (searchType == "") {
        const response = await axios.post(
            `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
            {
              page: page,
              limit: limit,
            }
        );
        const result = response.data;
        this.feedList = result.data
      } else if (searchType == "researcher_name") {
        const response = await axios.post(
            `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
            {
              researcher_name: searchType,
              page: page,
              limit: limit,
            }
        );
        const result = response.data;
        this.feedList = result.data
      } else if (searchType == "university") {
        const response = await axios.post(
            `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
            {
              university: searchType,
              page: page,
              limit: limit,
            }
        );
        const result = response.data;
        this.feedList = result.data
      } else if (searchType == "explore_year") {
        const response = await axios.post(
            `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
            {
              explore_year: searchType,
              page: page,
              limit: limit,
            }
        );
        const result = response.data;
        this.feedList = result.data
      } else if (searchType == "project_title") {
        const response = await axios.post(
            `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
            {
              project_title: searchType,
              page: page,
              limit: limit,
            }
        );
        const result = response.data;
        this.feedList = result.data
      } 
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
