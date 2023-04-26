import axios from "axios";
import { makeAutoObservable } from "mobx";
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

class ServiceCreate {
  responeseHistory = [];
  constructor() {
    makeAutoObservable(this);
  }
  async createDataResearcher(body: any) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/profile`, body);
      return res.data;
    } catch (err) {
      console.log({ err });
    }
  }
  async createDataAssessment(body: any) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/assessment`, body);
      return res.data;
    } catch (err) {
      console.log({ err });
    }
  }

  // for uploadfile have to change body is formdata ? maybe ?
  async uploadFile(body: any) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/upload`, body);
      return res.data;
    } catch (err) {
      console.log({ err });
    }
  }
}

export const serviceCreateEdit = new ServiceCreate();
