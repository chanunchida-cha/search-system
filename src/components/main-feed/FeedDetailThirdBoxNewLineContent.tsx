import React from "react";

type Props = {
  title: string;
  mainClass: string;
  mainTextClass: string;
  firstPlaceHolder: string;
  firstConjunction: string;
  secondPlaceHolder: string;
  secondConjunction: string;
  thirdPlaceHolder: string;
  textAreaPlaceholder: string;
};

function FeedDetailThirdBoxNewLineContent({
  title,
  mainClass,
  mainTextClass,
  firstPlaceHolder,
  firstConjunction,
  secondPlaceHolder,
  secondConjunction,
  thirdPlaceHolder,
  textAreaPlaceholder,
}: Props) {
  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className={`${mainTextClass} ml-3 text-black`}>{title}</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row">
        <div className="basis-4/12 ">
          <div className="flex w-full items-center">
            <input
              type="text"
              name="workExperienceSince"
              id="workExperienceSince"
              className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder={firstPlaceHolder}
            ></input>
            <p className="ml-3  text-black">{firstConjunction}</p>
          </div>
        </div>
        <div className="basis-4/12 ">
          <div className="flex w-full items-center">
            <input
              type="text"
              name="workExperienceYear"
              id="workExperienceYear"
              className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder={secondPlaceHolder}
            ></input>
            <p className="ml-3  text-black">{secondConjunction}</p>
          </div>
        </div>
        <div className="basis-4/12 ">
          <div className="flex w-full items-center">
            <input
              type="text"
              name="universitySection"
              id="universitySection"
              className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder={thirdPlaceHolder}
            ></input>
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row">
        <div className="w-full ">
          <div className="flex w-full items-center">
            <input
              type="text"
              name="workingDetail"
              id="workingDetail"
              className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
              placeholder={textAreaPlaceholder}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedDetailThirdBoxNewLineContent;
