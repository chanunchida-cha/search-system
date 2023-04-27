import { makeAutoObservable } from "mobx";
import axios from "axios";

class EditPasswordStore {

  constructor() {
    makeAutoObservable(this);
  }

  async getLogin(user_id: number, old_password: string, new_password: string) {
    const userToPatch = {
      user_id: user_id,
      old_password: old_password,
      new_password: new_password,
    };

    const handleClick = async () => {
      const response = await axios
        .patch('process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/changePassword', userToPatch)
        .catch((error) => console.log('Error: ', error));
      if (response && response.data) {
        console.log(response);
        console.log(response.data);
      }
    };
  }
}
export const editPasswordStore = new EditPasswordStore();
