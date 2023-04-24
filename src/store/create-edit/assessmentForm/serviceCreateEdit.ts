import { makeAutoObservable } from "mobx";


class ServiceCreate {
  responeseHistory =[]
  constructor() {
    makeAutoObservable(this);
  }
}

export const serviceCreateEdit = new ServiceCreate();
