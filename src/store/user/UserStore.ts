/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
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

  searchContext = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getUserManage(searchType : string,  page : number, limit : number){
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/user`,
        {
  
          page: page,
          limit: limit,
        }
      );
      
      if(searchType == ""){
        
        const result = response.data;
        this.userManageList = result.data;
        console.log("a",response.status);
        
      }else{
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/researcher/user`,
          {
            username: searchType,
            page: page,
            limit: limit,
          }
        );
        const result = response.data;
        this.userManageList = result.data;
      }
      console.log("b",response.status);
        
    }catch(err: any){
        Swal.fire({
            icon: "error",
            title: err.response.data.errorMessage,
            // text: err.errorMessage,
          });
          console.log(err);
          throw err;
    }
  }

  setSearchContext = (text: string) => {
    this.searchContext = text;
    console.log("searchContext:", this.searchContext);
  };
}

export const userStore = new UserStore
