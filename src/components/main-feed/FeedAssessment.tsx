import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

function FeedAssessment({}: Props) {
  return (
    <>
      <div className="mx-auto h-screen bg-gray-100 px-10 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white ">
          {/* CONTENT */}
          <div className="p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl text-black  ">ข้อมูลผลการประเมิน</h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>
          </div>
          {/* END OF CONTENT */}
        </div>
      </div>
    </>
  );
}

export default FeedAssessment;
