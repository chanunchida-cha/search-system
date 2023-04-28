import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import React, { type ReactElement, useState, useEffect } from "react";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";
import { feedStore } from "~/store/main-feed/FeedStore";
import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";

type Props = {};

const typeTab = [
  {
    type: "history",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    type: "Assessment",
    i18n: "ข้อมูลผลการประเมิน",
  },
];
const NameFeed = observer(({}: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [type, settype] = useState("");
  const updateToggle = () => {
    settype("history");
  };

  const fetchFeedDetail = async (id: number) => {
    await feedStore.getFeedDetail(id);
  };

  const fetchAssessmentDetail = async (id: number) => {
    await feedStore.getAssessmentDetail(id);
  };

  const setPathImage = (data: FeedDetailResponse) => {
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

  useEffect(() => {
    updateToggle();
    const getDetail = async () => {
      await feedStore.getFeedDetail(Number(id));
    };
    getDetail();
  }, [id]);
  useEffect(() => {
    const getAssessmentDetail = async () => {
      await feedStore.getAssessmentDetail(Number(id));
    };
    getAssessmentDetail();
  }, [id]);

  return (
    <>
      {/* <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-100 p-8">
        <h1 className="text-black">ID ผู้ทรงคุณวุฒิ : {id} </h1>
      </div> */}

      <div className="mx-auto h-screen bg-gray-100">
        <div className=" ml-16 mt-3 grid h-16 grid-cols-4">
          {typeTab.map((data) => {
            return type === data.type ? (
              <div
                className={`flex w-full items-center justify-center rounded-t-lg bg-[#668ff6] px-2 text-white shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            ) : (
              <div
                className={`mt-4 flex h-12 w-full items-center justify-center rounded-t-lg bg-[#d9e3f8] px-2 text-black shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            );
          })}
        </div>
        <div>
          {type === "history" ? (
            <FeedDetail
              feedDetail={feedStore.feedDetail}
              imagePath={setPathImage(feedStore.feedDetail)}
            />
          ) : (
            <FeedAssessment assessmentDetail={feedStore.assessmentDetail} />
          )}
        </div>
      </div>
    </>
  );
});

export default NameFeed;
