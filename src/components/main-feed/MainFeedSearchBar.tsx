import React from "react";
import { main_feed_heading } from "~/models/const/main-feed/main_feed_heading";
import FeedSearchBox from "~/ui/main-feed/FeedSearchBox";
import FeedSearchTypeSelection from "~/ui/main-feed/FeedSearchTypeSelection";

type Props = {};

function MainFeedSearchBar({}: Props) {
  return (
    <>
      {/* SearchBar and TypeSelection */}
      <div className="mb-3 mt-5 grid h-12 md:mt-0">
        <div className="flex items-center justify-end">
          <FeedSearchTypeSelection searchType={main_feed_heading} />
          <FeedSearchBox />
        </div>
      </div>
      {/* END OF SearchBar and TypeSelection */}
    </>
  );
}

export default MainFeedSearchBar;
