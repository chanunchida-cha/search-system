import React from "react";
import FeedDetailOneNewLineContent from "./FeedDetailOneNewLineContent";
import { ExploreResponse } from "~/models/type/main-feed/typeExplore";

type Props = {
  titleLeft: string;
  titleRight: string;
  placeHolderLeft: string;
  placeHolderRight: string;
  basisLeft: string;
  basisRight: string;
  inputLeft: string;
  inputRight: string;
  mainClass: string;
  textLeft: string;
  textRight: string;
  checkListArray: boolean;
  contentList?: ExploreResponse[];
};

function FeedDetailHalfLineContent({
  titleLeft,
  titleRight,
  placeHolderLeft,
  placeHolderRight,
  basisLeft,
  basisRight,
  inputLeft,
  inputRight,
  mainClass,
  textLeft,
  textRight,
  checkListArray,
  contentList,
}: Props) {
  return (
    <>
      {checkListArray ? (
        <>
          {contentList ? (
            contentList.map((item) => (
              <>
                <div className={`flex w-full flex-row ${mainClass}`}>
                  <div className={`${basisLeft}`}>
                    <div className="flex w-full items-center">
                      <p className="ml-3 font-bold text-black">{titleLeft}</p>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={item.explore_name}
                        className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputLeft}`}
                        placeholder={placeHolderLeft}
                      ></input>
                    </div>
                  </div>
                  <div className={`${basisRight}`}>
                    <div className="flex w-full items-center">
                      <p className="ml-3 font-bold text-black">{titleRight}</p>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        value={item.explore_year}
                        className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputRight}`}
                        placeholder={placeHolderRight}
                      ></input>
                    </div>
                  </div>
                </div>
                <FeedDetailOneNewLineContent
                  title={"รายละเอียด :"}
                  mainClass={"mt-3"}
                  mainTextClass={"font-bold"}
                  placeHolder={"รายละเอียดเนื้อหา"}
                  textContent={item.explore_detail}
                />
              </>
            ))
          ) : (
            <>
              <div className={`flex w-full flex-row ${mainClass}`}>
                <div className={`${basisLeft}`}>
                  <div className="flex w-full items-center">
                    <p className="ml-3 font-bold text-black">{titleLeft}</p>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={textLeft}
                      className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputLeft}`}
                      placeholder={placeHolderLeft}
                    ></input>
                  </div>
                </div>
                <div className={`${basisRight}`}>
                  <div className="flex w-full items-center">
                    <p className="ml-3 font-bold text-black">{titleRight}</p>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      value={textRight}
                      className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputRight}`}
                      placeholder={placeHolderRight}
                    ></input>
                  </div>
                </div>
              </div>
              <FeedDetailOneNewLineContent
                title={"รายละเอียด :"}
                mainClass={"mt-3"}
                mainTextClass={"font-bold"}
                placeHolder={"รายละเอียดเนื้อหา"}
                textContent={""}
              />
            </>
          )}
        </>
      ) : (
        <div className={`flex w-full flex-row ${mainClass}`}>
          <div className={`${basisLeft}`}>
            <div className="flex w-full items-center">
              <p className="ml-3 font-bold text-black">{titleLeft}</p>
              <input
                type="text"
                name="username"
                id="username"
                value={textLeft}
                className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputLeft}`}
                placeholder={placeHolderLeft}
              ></input>
            </div>
          </div>
          <div className={`${basisRight}`}>
            <div className="flex w-full items-center">
              <p className="ml-3 font-bold text-black">{titleRight}</p>
              <input
                type="text"
                name="surname"
                id="surname"
                value={textRight}
                className={`pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 ${inputRight}`}
                placeholder={placeHolderRight}
              ></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedDetailHalfLineContent;
