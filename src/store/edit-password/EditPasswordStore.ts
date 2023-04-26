import { makeAutoObservable } from "mobx";
import axios from "axios";

type ChangePasswordData = {
  user_id: number;
  old_password: string;
  new_password: string;
};

class EditPasswordStore {
  isLoading = false;
  isSuccess = false;
  isError = false;
  errorMessage = "";

  constructor() {
    makeAutoObservable(this);
  }

  async changePassword(data: ChangePasswordData) {
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;
    this.errorMessage = "";

    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/changePassword`, data);
      this.isSuccess = true;
    } catch (error: any) {
      this.isError = true;
      this.errorMessage = error.message;
    } finally {
      this.isLoading = false;
    }
  }
}

export default new EditPasswordStore();
