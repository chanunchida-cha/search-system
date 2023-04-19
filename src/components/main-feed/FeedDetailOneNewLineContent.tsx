import React from "react";

type Props = {
  title: string;
  mainClass: string;
  placeHolder: string;
  mainTextClass: string;
};

function FeedDetailOneNewLineContent({
  title,
  mainClass,
  placeHolder,
  mainTextClass,
}: Props) {
  return (
    <>
      <div className={`${mainClass} flex w-full flex-row`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className={`ml-3 text-black ${mainTextClass}`}>{title}</p>
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
              className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder={placeHolder}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedDetailOneNewLineContent;