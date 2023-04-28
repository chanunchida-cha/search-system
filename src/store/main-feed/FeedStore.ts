import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { FeedListResponse } from "~/models/type/main-feed/typeFeedList";
import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";
import { AssessmentDetailResponse } from "~/models/type/main-feed/typeAssessmenDetail";

class FeedStore {
  feedList: FeedListResponse = {
    content: [],
    total_page: 0,
    total_object: 0,
    current_page: 0,
    is_last: true,
  };
  feedDetail: FeedDetailResponse = {
    profile_id: "",
    first_name: "",
    last_name: "",
    university: "",
    address_home: "",
    address_work: "",
    email: "",
    phone_number: "",
    degree: [],
    program: [],
    experience: [],
    attach: [],
    explore: [],
    position: {
      position_id: 0,
      position_name: ""
    }
  };

  assessmentDetail: AssessmentDetailResponse = {
    assessment_id: 0,
    assessment_start: "",
    assessment_end: "",
    assessment_file_name: "",
    assessment_file_id: 0,
    Project: {
      project_id: 0,
      project_year: "",
      project_title: "",
      project_point: 0,
      project_estimate: false,
      project_recommend: false,
      file_name: "",
      file_id: 0,
      period: false,
    },
    Progress: {
      progress_id: 0,
      progress_year: "",
      progress_title: "",
      progress_estimate: false,
      progress_recommend: false,
      file_name: "",
      file_id: 0,
      period: false,
    },
    Report: {
      report_id: 0,
      report_year: "",
      report_title: "",
      report_estimate: false,
      report_recommend: false,
      file_name: "",
      file_id: 0,
      period: false,
    },
    Article: {
      article_id: 0,
      article_year: "",
      article_title: "",
      article_estimate: false,
      article_recommend: false,
      file_name: "",
      file_id: 0,
      period: false,
    },
  };

  deleteUpdateStatus = "404"

  constructor() {
    makeAutoObservable(this);
  }

  async getFeedList(
    searchType: string,
    page: number,
    limit: number,
    searchText: string
  ) {
    try {
      // const response = await axios.get(`http://localhost:3000/api/feedApi`);
      if (searchType == "") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/lists`,
          {
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.feedList = result.data;
      } else if (searchType == "researcher_name") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/lists`,
          {
            researcher_name: searchText,
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.feedList = result.data;
      } else if (searchType == "university") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/lists`,
          {
            university: searchText,
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.feedList = result.data;
      } else if (searchType == "explore_year") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/lists`,
          {
            explore_year: searchText,
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.feedList = result.data;
      } else if (searchType == "project_title") {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/lists`,
          {
            project_title: searchText,
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.feedList = result.data;
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

  async getFeedDetail(researcher_id: number) {
    console.log("USER ID VALUE :", researcher_id);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/profile_detail/${researcher_id}`
      );
      const result = response.data;
      this.feedDetail = result.data;
      console.log("feed detail store", this.feedDetail);
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

  async getAssessmentDetail(researcher_id: number) {
    console.log("USER ID VALUE :", researcher_id);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/assessment_detail/${researcher_id}`
      );
      const result = response.data;
      this.assessmentDetail = result.data;
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

  async deleteFeedDetailById(profile_id: number) {
    let resultState = ""
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/profile/${profile_id}`,
      );
      Swal.fire(
        "ลบข้อมูลการจองเรียบร้อยแล้ว!",
        response.data.message,
        "success"
      );
      const result = response.data;
      resultState = result.status
      this.deleteUpdateStatus = resultState
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "404",
      });
    }
    console.log("DELETE STATUS:", resultState);
    
  }

  setUpdateDeleteState(state: string) {
    this.deleteUpdateStatus = state;
    console.log("DELETE NOW STATE:", this.deleteUpdateStatus);
  }
}
export const feedStore = new FeedStore();
