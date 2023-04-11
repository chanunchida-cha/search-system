import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { FeedListResponse } from "~/models/type/main-feed/typeFeedList";
import { ContentResponse } from "~/models/type/main-feed/typeContent";

class FeedStore {
  content: ContentResponse = {
    researcher_id: "",
    university: "",
    explore_year: "",
    project_title: "",
  };

  feedList: FeedListResponse = {
    content: this.content,
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
      const response = await axios.post(
          `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
          {
            page: page,
            limit: limit,
          }
        );
        this.feedList = response.data;
      console.log(this.feedList);
      
      
      // if (searchType === "") {
      //   const response = await axios.post(
      //     `${process.env.REACT_APP_API}/lists`,
      //     {
      //       page: page,
      //       limit: limit,
      //     }
      //   );
      //   this.feedList = response.data;
      //   console.log("NOT HAVE KEY INPUT VALUE");
      //   console.log(this.feedList);
      // } else {
      //   const response = await axios.post(
      //     `${process.env.REACT_APP_API}/lists`,
      //     {
      //       searchType: "",
      //       page: page,
      //       limit: limit,
      //     }
      //   );
      //   this.feedList = response.data;
      //   console.log(this.feedList);
      // }

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