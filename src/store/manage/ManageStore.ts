import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { ManageResponse } from "~/models/type/manage/typeManage";

class ManageStore {
  manageList: ManageResponse = {
    content: [],
    total_page: "",
    total_object: "",
    current_page: "",
    is_last: "",
};

  constructor() {
    makeAutoObservable(this);
  }

  async getUserManage(page : number, limit : number){
    try {
        const response = await axios.post(
          `https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists`,
          {
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.manageList = result.data;
    }catch(err: any){
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
export const manageStore = new ManageStore
