/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { showImage } from "~/utils/aws-sdk/showImage";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  mainClass?: string;
  placeHolder?: string;
  inputClass?: string;
  textClass?: string;
  textContent?: string;
  isLink?: boolean;
  imagePath?: string;
};

function FeedDetailOneLineContent({
  title,
  mainClass,
  placeHolder,
  inputClass,
  textClass,
  textContent,
  isLink,
  imagePath,
}: Props) {
  const [s3url, setS3url] = useState<string>();
  const loadImage = async () => {
    await showImage("pdf", imagePath!, String(textContent), setS3url);
  };
  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="flex w-full items-center">
          <p className={`ml-3 text-black ${textClass}`}>{title}</p>
      
          {isLink ? (
            <Link
              href={`${s3url}`}
              className="w-3/4"
              onClick={() => loadImage()}
            >
              <input
                type="text"
                name="position"
                id="position"
                value={textContent}
                className={` pointer-events-none
                 ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
                placeholder={placeHolder}
              ></input>
            </Link>
          ) : (
            <input
              type="text"
              name="position"
              id="position"
              value={textContent}
              className={` pointer-events-none
              ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
              placeholder={placeHolder}
            ></input>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedDetailOneLineContent;
