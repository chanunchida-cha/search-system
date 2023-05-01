import axios from "axios";
import { makeAutoObservable } from "mobx";
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

class ServiceEdit {
  constructor() {
    makeAutoObservable(this);
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
