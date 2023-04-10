import React from "react";
import FeedDetailOneLineContent from "./FeedDetailOneLineContent";

type Props = {
  headTitle: string;
  firstTitle: string;
  firstPlaceHolder: string;
  firstClass: string;
  secondTitle: string;
  secondPlaceHolder: string;
  secondClass: string;
  thirdTitle: string;
  thirdPlaceHolders: string;
  thirdClass: string;
  fourthTitle: string;
  fourthPlaceHolder: string;
  fourthClass: string;
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
}: Props) {
  return (
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
      />
      <FeedDetailOneLineContent
        title={secondTitle}
        placeHolder={secondPlaceHolder}
        mainClass={"mt-3"}
        inputClass={secondClass}
        textClass={""}
      />
      <FeedDetailOneLineContent
        title={thirdTitle}
        placeHolder={thirdPlaceHolders}
        mainClass={"mt-3"}
        inputClass={thirdClass}
        textClass={""}
      />
      <FeedDetailOneLineContent
        title={fourthTitle}
        placeHolder={fourthPlaceHolder}
        mainClass={"mt-3"}
        inputClass={fourthClass}
        textClass={""}
      />
    </>
  );
}

export default FeedDetailQuadLineContent;
