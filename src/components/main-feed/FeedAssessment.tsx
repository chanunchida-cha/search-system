import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

function FeedAssessment({}: Props) {
  return (
    <>
      <div className="mx-auto h-full bg-gray-100 px-10 pb-10">
        <div className="align-center border-solid-900 flex h-full w-full rounded-lg bg-white">
          {/* CONTENT */}
          <div className="w-full p-10">
            <div className="flex w-44 justify-center">
              <h1 className="text-xl text-black ">ประวัติผู้ทรงคุณวุฒิ</h1>
            </div>
            <div className="flex h-0.5 w-44 justify-start bg-[#0265ff]"></div>

            {/* BOX 1 */}
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
                  <div className="flex w-full flex-row">
                    <div className="basis-5/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ชื่อ : </p>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ชื่อ"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-7/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">นามสกุล : </p>
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="นามสกุล"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="flex w-full items-center">
                      <p className="ml-3  text-black">ตำแหน่งทางวิชาการ : </p>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                        placeholder="ตำแหน่ง"
                      ></input>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">วุฒิการศึกษา : </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ปริญญาเอก</p>
                        <p className="ml-3  text-black">สาขา</p>
                        <input
                          type="text"
                          name="major"
                          id="major"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขา"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">มหาวิทยาลัย</p>
                        <input
                          type="text"
                          name="university"
                          id="university"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="มหาวิทยาลัย"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-6/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ปริญญาเอก</p>
                        <p className="ml-3  text-black">สาขา</p>
                        <input
                          type="text"
                          name="major"
                          id="major"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขา"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">มหาวิทยาลัย</p>
                        <input
                          type="text"
                          name="university"
                          id="university"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="มหาวิทยาลัย"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ปริญญาเอก</p>
                        <p className="ml-3  text-black">สาขา</p>
                        <input
                          type="text"
                          name="major"
                          id="major"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขา"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">มหาวิทยาลัย</p>
                        <input
                          type="text"
                          name="university"
                          id="university"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="มหาวิทยาลัย"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">
                          สาขาวิชาที่เชี่ยวชาญ :
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="expertMajor"
                          id="expertMajor"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขาที่เชี่ยวชาญ"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="expertMajor"
                          id="expertMajor"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขาที่เชี่ยวชาญ"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="expertMajor"
                          id="expertMajor"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สาขาที่เชี่ยวชาญ"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">สังกัดมหาวิทยาลัย :</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="universityUnder"
                          id="universityUnder"
                          className="pointer-events-none ml-3 block w-5/6 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="สังกัดมหาวิทยาลัย"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ประสบการทำงาน :</p>
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
                          placeholder="2562"
                        ></input>
                        <p className="ml-3  text-black">ถึง</p>
                      </div>
                    </div>
                    <div className="basis-4/12 ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="workExperienceYear"
                          id="workExperienceYear"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ปัจจุบัน"
                        ></input>
                        <p className="ml-3  text-black">สังกัด</p>
                      </div>
                    </div>
                    <div className="basis-4/12 ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="universitySection"
                          id="universitySection"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="Software MIT "
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
                          placeholder="เนื้อหาประสบการทำงาน"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">
                          ประสบการณ์ด้านการวิจัย :
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-4/12 ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="workExperienceResearchSince"
                          id="workExperienceResearchSince"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="2562"
                        ></input>
                        <p className="ml-3  text-black">ถึง</p>
                      </div>
                    </div>
                    <div className="basis-4/12 ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="workExperienceResearchYear"
                          id="workExperienceResearchYear"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ปัจจุบัน"
                        ></input>
                        <p className="ml-3  text-black">สังกัด</p>
                      </div>
                    </div>
                    <div className="basis-4/12 ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="universitySectionExperience"
                          id="universitySectionExperience"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="Software MIT "
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full ">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="researchDetail"
                          id="researchDetail"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="เนื้อหาประสบการณ์ด้านการวิจัย"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">
                          ผลงานวิจัยทรี่ตีพิมพ์ :
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ชื่อผู้จัดทำ : </p>
                        <input
                          type="text"
                          name="authorName"
                          id="authorName"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ชื่อผู้จัดทำ"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-6/12 ">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">ปีที่ตีพิมพ์ : </p>
                        <input
                          type="text"
                          name="typeYear"
                          id="typeYear"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ปีที่ตีพิมพ์"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">รายละเอียด :</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="detailText"
                          id="detailText"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="รายละเอียดเนื้อหา"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">
                          ที่อยู่ที่สามารถติดต่อได้ พร้อมเบอร์ติดต่อ และ E-mail
                          address :
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-5/12">
                      <div className="flex w-full items-center">
                        <p className="mt-1 ml-3 text-black">
                          ที่อยู่ที่สามารถติดต่อได้ (ที่บ้าน):
                        </p>
                      </div>
                    </div>
                    <div className="basis-7/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="addressUser"
                          id="addressUser"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ที่อยู่บ้าน"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-5/12">
                      <div className="flex w-full items-center">
                        <p className="mt-1 ml-3 text-black">
                          ที่อยู่ที่สามารถติดต่อได้ (ที่ทำงาน):
                        </p>
                      </div>
                    </div>
                    <div className="basis-7/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="addressCompany"
                          id="addressCompany"
                          className="pointer-events-none ml-3 block w-full rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ที่ทำงาน"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-2/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">เบอร์ติดต่อ :</p>
                      </div>
                    </div>
                    <div className="basis-10/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="phoneUser"
                          id="phoneUser"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="099-999-9999"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-2/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">อีเมลล์ :</p>
                      </div>
                    </div>
                    <div className="basis-10/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="emailUser"
                          id="emailUser"
                          className="pointer-events-none ml-3 block w-3/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="dummy_user@vulcan.bluebik.com"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="w-full">
                      <div className="flex w-full items-center">
                        <p className="ml-3  text-black">อื่นๆ :</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-3/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">เอกสารประวัติ :</p>
                      </div>
                    </div>
                    <div className="basis-9/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="historyDocument"
                          id="historyDocument"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="history.pdf"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-5/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">
                          เอกสารคำสั่งแต่งตั้งผู้ทรงคุณวุฒิ :
                        </p>
                      </div>
                    </div>
                    <div className="basis-7/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="appointDocument"
                          id="appointDocument"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="appointing.pdf"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-3/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">
                          เอกสารสำเนาบัญชี :
                        </p>
                      </div>
                    </div>
                    <div className="basis-9/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="accountCopyDocument"
                          id="accountCopyDocument"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="book_bank.pdf"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full flex-row">
                    <div className="basis-4/12">
                      <div className="flex w-full items-center">
                        <p className="ml-3 mt-1 text-black">
                          เอกสารสำเนาบัตรประชาชน :
                        </p>
                      </div>
                    </div>
                    <div className="basis-8/12">
                      <div className="flex w-full items-center">
                        <input
                          type="text"
                          name="idCardCopyDocument"
                          id="idCardCopyDocument"
                          className="pointer-events-none ml-3 block w-2/4 rounded border border-gray-200 bg-gray-100 py-1 px-3 text-gray-700 "
                          placeholder="ID_card.pdf"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF BOX 1 */}
          </div>
          {/* END OF CONTENT */}
        </div>
      </div>
    </>
  );
}

export default FeedAssessment;
