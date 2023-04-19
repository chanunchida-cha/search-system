import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { LoginResponse } from "~/models/type/login/LoginResponse";


class LoginStore {
    loginData : LoginResponse = {
        user_id: 1,
        username: "",
        role: "",
        token: "",
    };

    constructor() {
        makeAutoObservable(this);
      }

      async getLogin(userName : string, userPassword : string){
        try {
            const response = await axios.post(
                `https://sit-api.uap.universityapp.net/research/api/v1/login`,
                {
                    username : userName,
                    password : userPassword,
                }
            );
            const result = response.data;
            this.loginData = result.data;
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
export const loginStore = new LoginStore



  