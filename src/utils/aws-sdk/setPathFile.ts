import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";

export const setPathImage = (data: FeedDetailResponse) => {
    let pathFile = "";
    let autionFile = "";
    let nameFile = "";
    if (data.attach !== null) {
      autionFile = String(
        data.attach.filter((item) => item.file_action === "profile")[0]
          ?.file_action
          ? data.attach.filter((item) => item.file_action === "profile")[0]
              ?.file_action
          : ""
      );
      nameFile = String(
        data.attach.filter((item) => item.file_action === "profile")[0]
          ?.file_name
          ? data.attach.filter((item) => item.file_action === "profile")[0]
              ?.file_name
          : ""
      );
    }
    pathFile = autionFile + "/" + nameFile;
    console.log("PATH FILE: ", pathFile);
    return pathFile;
  };