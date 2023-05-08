/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { makeAutoObservable } from "mobx";
import { BodyProfile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { BodyAssessment } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

class ServiceEdit {
  constructor() {
    makeAutoObservable(this);
  }
  async editDataResearcher(body: BodyProfile , id : string) {
    try {
      const res = await axios.patch(`${url}/api/v1/researcher/profile/${id}`, body);

      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
  }
  async editDataAssessment(body: BodyAssessment, id:string) {
    try {
      const res = await axios.patch(`${url}/api/v1/researcher/assessment/${id}`, body);
      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
   
  }
  async deleteOldFile(oldFile: { directory_file: string; directory_id: number }[]) {
    try {
      const config = {
        data: oldFile,
      };
      const res = await axios.delete(
        `${url}/api/v1/researcher/delete_file`,
        config
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async updateFile(body: FormData) {
    try {
      const res = await axios.post(`${url}/api/v1/researcher/update_file`, body);
      return res.data.data;
    } catch (err) {
      console.log({ err });
    }
  }
}

export const serviceEdit = new ServiceEdit();
