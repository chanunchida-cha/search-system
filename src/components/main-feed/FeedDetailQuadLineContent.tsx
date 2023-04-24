import React from "react";
import FeedDetailOneLineContent from "./FeedDetailOneLineContent";
import { AttachResponse } from "~/models/type/main-feed/typeAttach";

type Props = {
  headTitle: string;
  firstTitle: string;
  firstPlaceHolder: string;
  firstClass: string;
  secondTitle?: string;
  secondPlaceHolder?: string;
  secondClass?: string;
  thirdTitle?: string;
  thirdPlaceHolders?: string;
  thirdClass?: string;
  fourthTitle?: string;
  fourthPlaceHolder?: string;
  fourthClass?: string;
  textFirst?: string;
  textSecond?: string;
  textThird?: string;
  textFourth?: string;
  checkListArray: boolean;
  contentList?: AttachResponse[];
  isLink?: boolean;
};

function FeedDetailQuadLineContent({
  headTitle,
  firstTitle,
  firstPlaceHolder,
  firstClass,
  secondTitle,
  secondPlaceHolder,
  secondClass,
  thirdTitle,
  thirdPlaceHolders,
  thirdClass,
  fourthTitle,
  fourthPlaceHolder,
  fourthClass,
  textFirst,
  textSecond,
  textThird,
  textFourth,
  checkListArray,
  contentList,
  isLink,
}: Props) {
  return (
    <>
      {checkListArray ? (
        <>
          <div className="mt-3 flex w-full flex-row">
            <div className="w-full">
              <div className="flex w-full items-center">
                <p className="ml-3 font-bold text-black">{headTitle}</p>
              </div>
            </div>
          </div>
          {contentList ? (
            contentList.map((item) => (
              <>
                <FeedDetailOneLineContent
                  title={firstTitle}
                  placeHolder={firstPlaceHolder}
                  mainClass={"mt-3"}
                  inputClass={firstClass}
                  textClass={""}
                  textContent={item.file_name}
                  isLink={isLink}
                />
              </>
            ))
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div className="mt-3 flex w-full flex-row">
            <div className="w-full">
              <div className="flex w-full items-center">
                <p className="ml-3 font-bold text-black">{headTitle}</p>
              </div>
            </div>
          </div>
          <FeedDetailOneLineContent
            title={firstTitle}
            placeHolder={firstPlaceHolder}
            mainClass={"mt-3"}
            inputClass={firstClass}
            textClass={""}
            textContent={textFirst}
          />
          <FeedDetailOneLineContent
            title={secondTitle}
            placeHolder={secondPlaceHolder}
            mainClass={"mt-3"}
            inputClass={secondClass}
            textClass={""}
            textContent={textSecond}
          />
          <FeedDetailOneLineContent
            title={thirdTitle}
            placeHolder={thirdPlaceHolders}
            mainClass={"mt-3"}
            inputClass={thirdClass}
            textClass={""}
            textContent={textThird}
          />
          <FeedDetailOneLineContent
            title={fourthTitle}
            placeHolder={fourthPlaceHolder}
            mainClass={"mt-3"}
            inputClass={fourthClass}
            textClass={""}
            textContent={textFourth}
          />
        </>
      )}
    </>
  );
}

export default FeedDetailQuadLineContent;
