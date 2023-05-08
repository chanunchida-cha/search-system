/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { LoginResponse } from "~/models/type/login/LoginResponse";
import Cookie from "cookie-universal";
const cookies = Cookie();
class LoginStore {

  loginData: LoginResponse = {
    user_id: 0,
    username: "",
    role: "",
    token: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getLogin(userName: string, userPassword: string) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/login`,
        {
          username: userName,
          password: userPassword,
        }
      );
      const rawResult = response.data;
      const result: LoginResponse = rawResult.data;
      cookies.set("username", result.username);
      cookies.set("role", result.role);
      cookies.set("token", result.token);
      cookies.set("userID", result.user_id);
      this.loginData = result;
      console.log("ResData Login", response.data);
      
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: err.response.data.errorMessage
        // text: err.response.data.errorMessage,
      });
      
      console.log(err);
      throw err;
    }
  }
}
export const loginStore = new LoginStore();
