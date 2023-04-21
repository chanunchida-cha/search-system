import React from "react";
import Image from "next/image";
import FeedDetailHalfLineContent from "./FeedDetailHalfLineContent";
import FeedDetailOneLineContent from "./FeedDetailOneLineContent";
import FeedDetailQuadLineContent from "./FeedDetailQuadLineContent";
import FeedDetailHalfNewLineContent from "./FeedDetailHalfNewLineContent";
import FeedDetailMultiNewLineContent from "./FeedDetailMultiNewLineContent";
import FeedDetailThirdBoxNewLineContent from "./FeedDetailThirdBoxNewLineContent";
import FeedDetailOneNewLineContent from "./FeedDetailOneNewLineContent";
import FeedOneBoxButton from "~/ui/main-feed/FeedOneBoxButton";
import Link from "next/link";
import { FeedDetailResponse } from "~/models/type/main-feed/typeFeedDetail";

type Props = {
  feedDetail: FeedDetailResponse;
};

function FeedDetail({ feedDetail }: Props) {
  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-5 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white ">
          {/* CONTENT */}
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl font-bold text-black ">
                ประวัติผู้ทรงคุณวุฒิ
              </h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>

            {/* BOX 1 */}
            {/* 225 x 225*/}
            <div className="mt-3 flex flex-row">
              <div className="basis-3/12 ">
                <Image
                  src="/assets/images/dummy-person.png"
                  alt={"person"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-12 flex basis-9/12 items-center">
                <div className="flex w-full flex-col">
                  <FeedDetailHalfLineContent
                    titleLeft={"ชื่อ : "}
                    titleRight={"นามสกุล : "}
                    placeHolderLeft={"ชื่อ"}
                    placeHolderRight={"นามสกุล"}
                    basisLeft={"basis-5/12"}
                    basisRight={"basis-7/12"}
                    inputLeft={"w-3/4"}
                    inputRight={"w-3/4"}
                    mainClass={""}
                    textLeft={feedDetail.first_name}
                    textRight={feedDetail.last_name}
                    checkListArray={false}
                  />
                  <FeedDetailOneLineContent
                    title={"ตำแหน่งทางวิชาการ : "}
                    placeHolder={"ตำแหน่งทางวิชาการ"}
                    mainClass={"mt-3"}
                    inputClass={"w-2/4"}
                    textClass={"font-bold"}
                    textContent={
                      feedDetail.position[0]?.position_name
                        ? feedDetail.position[0].position_name
                        : ""
                    }
                  />
                  <FeedDetailHalfNewLineContent
                    title={"วุฒิการศึกษา :"}
                    major={"ปริญญา"}
                    section={"สาขา"}
                    sectionPlaceHolder={"สาขา"}
                    university={"มหาวิทยาลัย"}
                    universityPlaceHolder={"มหาวิทยาลัย"}
                    mainClass={"mt-3"}
                    contentList={feedDetail.degree}
                  />
                  <FeedDetailMultiNewLineContent
                    title={"สาขาวิชาที่เชี่ยวชาญ :"}
                    textClass={"font-bold"}
                    placeHolder={"สาขาที่เชี่ยวชาญ"}
                    mainClass={"mt-3"}
                    contentList={feedDetail.program}
                  />
                  <FeedDetailOneNewLineContent
                    title={"สังกัดมหาวิทยาลัย :"}
                    mainClass={"mt-3"}
                    mainTextClass={"font-bold"}
                    placeHolder={"สังกัดมหาวิทยาลัย"}
                    textContent={feedDetail.university}
                  />
                  <FeedDetailThirdBoxNewLineContent
                    title={"ประสบการทำงาน :"}
                    mainClass={"mt-3"}
                    mainTextClass={"font-bold"}
                    firstPlaceHolder={"2562"}
                    firstConjunction={"ถึง"}
                    secondPlaceHolder={"ปัจจุบัน"}
                    secondConjunction={"สังกัด"}
                    thirdPlaceHolder={"Software MIT"}
                    textAreaPlaceholder={"เนื้อหาประสบการทำงาน"}
                    contentList={feedDetail.experience.filter(
                      (item) => item.experience_type === "work"
                    )}
                  />
                  <FeedDetailThirdBoxNewLineContent
                    title={"ประสบการณ์ด้านการวิจัย :"}
                    mainClass={"mt-3"}
                    mainTextClass={"font-bold"}
                    firstPlaceHolder={"2562"}
                    firstConjunction={"ถึง"}
                    secondPlaceHolder={"ปัจจุบัน"}
                    secondConjunction={"สังกัด"}
                    thirdPlaceHolder={"Software MIT"}
                    textAreaPlaceholder={"เนื้อหาประสบการณ์ด้านการวิจัย"}
                    contentList={feedDetail.experience.filter(
                      (item) => item.experience_type === "research"
                    )}
                  />
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3 font-bold text-black">
                          ผลงานวิจัยที่ตีพิมพ์ :
                        </p>
                      </div>
                    </div>
                  </div>
                  <FeedDetailHalfLineContent
                    titleLeft={"ชื่อผู้จัดทำ : "}
                    titleRight={"ปีที่ตีพิมพ์ : "}
                    placeHolderLeft={"ชื่อผู้จัดทำ"}
                    placeHolderRight={"ปีที่ตีพิมพ์"}
                    basisLeft={"basis-6/12"}
                    basisRight={"basis-6/12"}
                    inputLeft={"w-3/5"}
                    inputRight={"w-3/5"}
                    mainClass={"mt-3"}
                    textLeft={""}
                    textRight={""}
                    contentList={feedDetail.explore}
                    checkListArray={true}
                  />

                  <FeedDetailQuadLineContent
                    headTitle={
                      "ที่อยู่ที่สามารถติดต่อได้ พร้อมเบอร์ติดต่อ และ E-mail address :"
                    }
                    firstTitle={"ที่อยู่ที่สามารถติดต่อได้ (ที่บ้าน):"}
                    firstPlaceHolder={"ที่อยู่บ้าน"}
                    firstClass={"w-2/4"}
                    secondTitle={"ที่อยู่ที่สามารถติดต่อได้ (ที่ทำงาน):"}
                    secondPlaceHolder={"ที่อยู่ที่ทำงาน"}
                    secondClass={"w-2/4"}
                    thirdTitle={"เบอร์ติดต่อ :"}
                    thirdPlaceHolders={"099-999-9999"}
                    thirdClass={"w-2/4"}
                    fourthTitle={"อีเมลล์ :"}
                    fourthPlaceHolder={"dummy_user@vulcan.bluebik.com"}
                    fourthClass={"w-2/4"}
                    textFirst={feedDetail.address_home}
                    textSecond={feedDetail.address_work}
                    textThird={feedDetail.phone_number}
                    textFourth={feedDetail.email}
                    checkListArray={false}
                  />
                  <FeedDetailQuadLineContent
                    headTitle={"อื่นๆ :"}
                    firstTitle={"เอกสารประวัติ :"}
                    firstPlaceHolder={"history.pdf"}
                    firstClass={"w-3/5 underline underline-offset-4 "}
                    checkListArray={true}
                    isLink={true}
                    contentList={
                      feedDetail.attach
                        ? feedDetail.attach.filter(
                            (item) => item.file_action !== "profile"
                          )
                        : []
                    }
                  />
                </div>
              </div>
            </div>
            {/* END OF BOX 1 */}
          </div>
          {/* END OF CONTENT */}
        </div>
        <div className="mt-6 flex flex-row">
          <Link href="/">
            <FeedOneBoxButton
              btnColor={"[#668ff6]"}
              hoverColor={"[#668ff6]"}
              title={"ย้อนกลับ"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeedDetail;
