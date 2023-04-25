import { useRouter } from "next/router";
import React from "react";
import { ProgramResponse } from "~/models/type/main-feed/typeProgram";

type Props = {
  title: string;
  textClass: string;
  placeHolder: string;
  mainClass: string;
  contentList?: ProgramResponse[];
};

function FeedDetailMultiNewLineContent({
  title,
  textClass,
  placeHolder,
  mainClass,
  contentList,
}: Props) {
  const router = useRouter();
  const edit = router.pathname.startsWith("/edit");
  return (
    <>
      <div className={`${mainClass} flex w-full flex-row`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className={`ml-3  text-black ${textClass}`}>{title}</p>
          </div>
        </div>
      </div>
      {contentList ? (
        contentList.map((item) => (
          <div className="mt-3 flex w-full flex-row">
            <div className="w-full ">
              <div className="flex w-full items-center">
                <input
                  type="text"
                  name="expertMajor"
                  id="expertMajor"
                  value={item.program_name}
                  className={`${
                    edit ? "bg-white text-black" : "pointer-events-none"
                  } ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
                  placeholder={placeHolder}
                ></input>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-3 flex w-full flex-row">
          <div className="w-full ">
            <div className="flex w-full items-center">
              <input
                type="text"
                name="expertMajor"
                id="expertMajor"
                className={`${
                  edit ? "bg-white text-black" : "pointer-events-none"
                } ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 `}
                placeholder={placeHolder}
              ></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedDetailMultiNewLineContent;
