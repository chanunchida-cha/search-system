import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { UserManageResponse } from "~/models/type/user/typeUser";
import { boolean } from "zod";

class UserStore {
  userManageList: UserManageResponse = {
    content: [],
    total_page: 0,
    total_object: 0,
    current_page: 0,
    is_last: true,
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
        this.userManageList = result.data;
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
export const userStore = new UserStore