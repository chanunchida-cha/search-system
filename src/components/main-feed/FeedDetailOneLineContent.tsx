import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const edit = router.pathname.startsWith("/edit");
  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="flex w-full items-center">
          <p className={`ml-3 text-black ${textClass}`}>{title}</p>
         {edit && <span className="text-xl text-red-500" aria-hidden="true">
            *
          </span>}
          {isLink ? (
            <Link
              href={
                "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              }
              className="w-3/4"
            >
              <input
                type="text"
                name="position"
                id="position"
                value={textContent}
                className={` ${
                  edit ? "bg-white text-black" : "pointer-events-none"
                } ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
                placeholder={placeHolder}
              ></input>
            </Link>
          ) : (
            <input
              type="text"
              name="position"
              id="position"
              value={textContent}
              className={` ${
                edit ? "bg-white text-black" : "pointer-events-none"
              } ml-3 block rounded  border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700  ${inputClass}`}
              placeholder={placeHolder}
            ></input>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedDetailOneLineContent;
