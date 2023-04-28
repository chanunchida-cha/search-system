import { makeAutoObservable } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { RegisterResponse } from "~/models/type/register/typeRegister";
import Cookie from "cookie-universal";
const cookies = Cookie();

class RegisterStore {
    register: RegisterResponse = {
        user_id: 1,
        username: "",
        password: "",
        role: "",
      };

      constructor() {
        makeAutoObservable(this);
      }

      async getRegister(userName: string) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/signup`,
            {
              username: userName,
            }
          );
          const rawResult = response.data;
          const result: RegisterResponse = rawResult.data;
        //   cookies.set("username", result.username);
        //   cookies.set("role", result.role);
        //   cookies.set("token", result.token);
        //   cookies.set("userID", result.user_id);
          this.register = result;
        } catch (err: any) {
          Swal.fire({
            icon: "error",
            title: err.response.data.errorMessage,
            // text: err.errorMessage,
          });
    
          console.log(err);
          throw err;
        }
      }

}

export const registerStore = new RegisterStore();