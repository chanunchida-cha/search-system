import React from "react";

type Props = {
  title: string;
  textClass: string;
  placeHolder: string;
  mainClass: string;
};

function FeedDetailMultiNewLineContent({
  title,
  textClass,
  placeHolder,
  mainClass,
}: Props) {
  const mockArray = [0, 1, 2];
  return (
    <>
      <div className={`${mainClass} flex w-full flex-row`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className={`ml-3  text-black ${textClass}`}>{title}</p>
          </div>
        </div>
      </div>
      {mockArray.map((item) => (
        <div className="mt-3 flex w-full flex-row">
          <div className="w-full ">
            <div className="flex w-full items-center">
              <input
                type="text"
                name="expertMajor"
                id="expertMajor"
                className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                placeholder={placeHolder}
              ></input>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedDetailMultiNewLineContent;
