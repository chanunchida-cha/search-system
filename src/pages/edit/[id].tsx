import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";
import { feedStore } from "~/store/main-feed/FeedStore";

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

const Edit = observer(({}: Props) => {
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

  useEffect(() => {
    updateToggle();
    fetchFeedDetail(Number(id));
    fetchAssessmentDetail(Number(id));
  }, []);

  return  <>
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
        <FeedDetail feedDetail={feedStore.feedDetail} />
      ) : (
        <FeedAssessment assessmentDetail={feedStore.assessmentDetail} />
      )}
    </div>
  </div>
</>;
});

export default Edit;