import { makeAutoObservable } from "mobx";
import axios from "axios";

type Login = {
    username: string;
    password: string;
  };

  