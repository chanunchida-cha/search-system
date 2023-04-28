import React, { useEffect, useState } from "react";
import MainFeedSearchBar from "./MainFeedSearchBar";
import MainFeedTable from "./MainFeedTable";
import { feedStore } from "~/store/main-feed/FeedStore";
import { observer } from "mobx-react-lite";
import FeedAddNewUserButton from "~/ui/main-feed/FeedAddNewUserButton";
import Link from "next/link";

type Props = {};

const MainFeed = observer(({}: Props) => {
  useEffect(() => {
    const fetchFeedList = async () => {
      await feedStore.getFeedList("", 1, 10, "");
    };
    fetchFeedList();
  }, []);
  return (
    <>
      <div className="align-center h-screen bg-gray-100 p-5">
        {/* Heading and AddUserData */}
        <div className="mb-2 grid h-12 grid-cols-1 md:grid md:grid-cols-2">
          <div className="flex items-center justify-start">
            <h1 className="sm:text-2 text-black md:text-xl lg:text-2xl">
              ข้อมูลรายชื่อผู้ทรงคุณวุฒิ
            </h1>
          </div>
          <div className="flex items-center justify-start md:justify-end ">
            <div className="mt-0  w-auto md:w-full lg:w-4/5 xl:w-3/5">
              <Link href={"/"}>
                <FeedAddNewUserButton />
              </Link>
            </div>
          </div>
        </div>
        {/* END OF Heading and AddUserData */}

        <MainFeedSearchBar />
        <MainFeedTable feedList={feedStore.feedList} />
      </div>
    </>
  );
});
export default MainFeed;
