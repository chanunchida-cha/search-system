import { makeAutoObservable } from "mobx";


class ServiceCreate {
  constructor() {
    makeAutoObservable(this);
  }
}

export const serviceCreateEdit = new ServiceCreate();
