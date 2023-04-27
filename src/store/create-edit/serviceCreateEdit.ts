import axios from "axios";
import { makeAutoObservable } from "mobx";
import { BodyProfile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { BodyAssessment } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { BodyUpload } from "~/models/type/create-edit/AssessmentForm/typeUploadFile";
import { ResponseAssessment } from "~/models/type/create-edit/reposnseAssessmentType";
import { ResponseHistory } from "~/models/type/create-edit/responseHistoryType";
import { ResponseUploadFile } from "~/models/type/create-edit/responseUploadType";
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

class ServiceCreate {
  responeseHistory: ResponseHistory = {
    profile_id: 0,
    first_name: "",
    last_name: "",
    profile_status: true,
    position_id: 0,
    position_name: "",
    degree: [],
    program: [],
    university: "",
    experience: [],
    explore: [],
    address_home: "",
    address_work: "",
    email: "",
    phone_number: "",
  };

  // responseAssessment: ResponseAssessment = {
  //   profile_id: 0,
  //   assessment_id: 0,
  //   assessment_start: "",
  //   assessment_end: "",
  //   assessment_file_name: "",
  //   assessment_file_action: "",
  //   project: [],
  //   progress: [],
  //   report: [],
  //   article: [],
  // };
  responseUploadFile: ResponseUploadFile = {
    data: [
      {
        file_name: "",
        file_type: "",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
  async createDataResearcher(body: BodyProfile) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/profile`, body);

      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
  }
  async createDataAssessment(body: BodyAssessment) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/assessment`, body);
      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
  }

  // for uploadfile have to change body is formdata ? maybe ?
  async uploadFile(body: FormData) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/upload`, body);
      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
  }
}

export const serviceCreateEdit = new ServiceCreate();
