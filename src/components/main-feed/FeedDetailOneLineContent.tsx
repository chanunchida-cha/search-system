import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  mainClass?: string;
  placeHolder?: string;
  inputClass?: string;
  textClass?: string;
  textContent?: string;
  isLink?: boolean;
};

function FeedDetailOneLineContent({
  title,
  mainClass,
  placeHolder,
  inputClass,
  textClass,
  textContent,
  isLink,
}: Props) {
  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="flex w-full items-center">
          <p className={`ml-3 text-black ${textClass}`}>{title}</p>
          {isLink ? (
            <Link href={"/"} className="w-3/4">
              <input
                type="text"
                name="position"
                id="position"
                value={textContent}
                className={` pointer-events-none ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
                placeholder={placeHolder}
              ></input>
            </Link>
          ) : (
            <input
              type="text"
              name="position"
              id="position"
              value={textContent}
              className={` pointer-events-none ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
              placeholder={placeHolder}
            ></input>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedDetailOneLineContent;
