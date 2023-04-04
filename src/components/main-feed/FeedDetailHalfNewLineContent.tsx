import React from "react";

type Props = {
  title: string;
  major: string;
  section: string;
  sectionPlaceHolder: string;
  university: string;
  universityPlaceHolder: string;
  mainClass: string;
};

function FeedDetailHalfNewLineContent({
  title,
  major,
  section,
  sectionPlaceHolder,
  university,
  universityPlaceHolder,
  mainClass,
}: Props) {
  const mockArray = [0, 1, 2];
  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className="ml-3 font-bold text-black">{title}</p>
          </div>
        </div>
      </div>
      {mockArray.map((item) => (
        <div className="mt-3 flex w-full flex-row">
          <div className="basis-6/12 ">
            <div className="flex w-full items-center">
              <p className="ml-3  text-black">{major}</p>
              <p className="ml-3  text-black">{section}</p>
              <input
                type="text"
                name="major"
                id="major"
                className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                placeholder={sectionPlaceHolder}
              ></input>
            </div>
          </div>
          <div className="basis-6/12 ">
            <div className="flex w-full items-center">
              <p className="ml-3  text-black">{university}</p>
              <input
                type="text"
                name="university"
                id="university"
                className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                placeholder={universityPlaceHolder}
              ></input>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedDetailHalfNewLineContent;
