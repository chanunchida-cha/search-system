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

  async getUserManage(username : string,  page : number, limit : number){
    try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/user`,
          {
            username : username,
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
