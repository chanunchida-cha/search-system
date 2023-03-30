import { useRouter } from "next/router";
import React, { type ReactElement, useState } from "react";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";

interface Props {}

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

const toggles = [
  {
    tab: "01",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    tab: "02",
    i18n: "ข้อมูลผลการประเมิน",
  },
];

function updateToggle(index: number, tab: string) {
  console.log(index, tab);
}

export default function NameFeed({}: Props): ReactElement {
  const router = useRouter();
  const { name } = router.query;
  const [type, settype] = useState("");
  const [toggle, setToggle] = useState("");

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-100 p-8">
        <h1>ชื่อผู้วิจัย : {name} </h1>
      </div>

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
                className={`flex w-full items-center justify-center rounded-t-lg bg-[#d9e3f8] px-2 text-black shadow-lg`}
                onClick={() => {
                  settype(data.type);
                }}
              >
                {data.i18n}
              </div>
            );
          })}
        </div>
        <div>{type === "history" ? <FeedDetail /> : <FeedAssessment />}</div>
      </div>
    </>
  );
}
