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
