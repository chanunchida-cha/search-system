import { useRouter } from "next/router";
import React from "react";

type Props = {
  title: string;
  mainClass: string;
  placeHolder: string;
  mainTextClass: string;
  textContent: string;
};

function FeedDetailOneNewLineContent({
  title,
  mainClass,
  placeHolder,
  mainTextClass,
  textContent,
}: Props) {
  const router = useRouter();
  const edit = router.pathname.startsWith("/edit");
  return (
    <>
      <div className={`${mainClass} flex w-full flex-row`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className={`ml-3 text-black ${mainTextClass}`}>{title}</p>
            {edit && (
              <span className="text-xl text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row">
        <div className="w-full ">
          <div className="flex w-full items-center">
            <input
              type="text"
              name="universityUnder"
              id="universityUnder"
              value={textContent}
              className={`${
                edit ? "bg-white text-black" : "pointer-events-none"
              } ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 `}
              placeholder={placeHolder}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedDetailOneNewLineContent;
