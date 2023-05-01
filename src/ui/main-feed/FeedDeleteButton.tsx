import React from "react";
import Swal from "sweetalert2";
import { observer } from "mobx-react-lite";
import { feedStore } from "~/store/main-feed/FeedStore";

type Props = {
  userId: number;
};

const FeedDeleteButton = observer(({ userId }: Props) => {
  const deleteUserById = async (id: number) => {
    await feedStore.deleteFeedDetailById(id);
  };
  const fetchFeedList = async () => {
    await feedStore.getFeedList(
      feedStore.searchSelection,
      0,
      10,
      feedStore.searchContext
    );
  };
  const confirmDelete = (id: number) => {
    Swal.fire({
      icon: "error",
      title: "ต้องการลบข้อมูล",
      text: "โปรดตรวจสอบก่อนการยืนยัน",
    });
    Swal.fire({
      title: "ต้องการลบข้อมูล",
      text: "โปรดตรวจสอบก่อนการยืนยัน",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#828282",
      cancelButtonColor: "#668ff6",
      confirmButtonText: "ยกเลิก",
      cancelButtonText: "ยืนยัน",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("NOW :", feedStore.deleteUpdateStatus);
      } else {
        deleteUserById(id);
        let idFromUser = String(id);
        if (feedStore.deleteUpdateStatus === "200") {
          Swal.fire("ลบข้อมูล", "ทำการลบข้อมูลสำเร็จ", "success");
          feedStore.setUpdateDeleteState("404");
          fetchFeedList();
        } else {
          feedStore.setUpdateDeleteState("404");
        }
      }
    });
  };
  return (
    <>
      <button
        className="rounded bg-[#ec5e43] py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => confirmDelete(userId)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          ></path>
        </svg>
      </button>
    </>
  );
});

export default FeedDeleteButton;
