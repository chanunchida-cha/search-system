import { useRouter } from "next/router";
import React from "react";
import { DegreeResponse } from "~/models/type/main-feed/typeDegree";

type Props = {
  title: string;
  major: string;
  section: string;
  sectionPlaceHolder: string;
  university: string;
  universityPlaceHolder: string;
  mainClass: string;
  contentList?: DegreeResponse[];
};

function FeedDetailHalfNewLineContent({
  title,
  major,
  section,
  sectionPlaceHolder,
  university,
  universityPlaceHolder,
  mainClass,
  contentList,
}: Props) {
  const updateEducationDegreeText = (degree: string) => {
    let typeEducation = "";
    if (degree === "bachelor") {
      typeEducation = "ปริญญาตรี";
    } else if (degree === "master") {
      typeEducation = "ปริญญาโท";
    } else if (degree === "doctor") {
      typeEducation = "ปริญญาเอก";
    }
    return typeEducation;
  };

  return (
    <>
      <div className={`flex w-full flex-row ${mainClass}`}>
        <div className="w-full">
          <div className="flex w-full items-center">
            <p className="ml-3 font-bold text-black">{title}</p>
          </div>
        </div>
      </div>
      {contentList ? (
        contentList.map((item) => (
          <div className="mt-3 flex w-full flex-row">
            <div className="basis-6/12 ">
              <div className="flex w-full items-center">
                {}
                <p className="ml-3  text-black">
                  {updateEducationDegreeText(item.degree_type)}
                </p>
                <p className="ml-3  text-black">{section}</p>

                <input
                  type="text"
                  name="major"
                  id="major"
                  value={item.degree_program}
                  className={`${"pointer-events-none"} ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
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
                  value={item.degree_university}
                  className={`${
                    "pointer-events-none"
                  } ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
                  placeholder={universityPlaceHolder}
                ></input>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-3 flex w-full flex-row">
          <div className="basis-6/12 ">
            <div className="flex w-full items-center">
              <p className="ml-3  text-black">{major}</p>
             
              <p className="ml-3  text-black">{section}</p>
             
              <input
                type="text"
                name="major"
                id="major"
                className={`${
                  "pointer-events-none"
                } ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
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
                className={`${
                 "pointer-events-none"
                } ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700`}
                placeholder={universityPlaceHolder}
              ></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedDetailHalfNewLineContent;
