import React from "react";

import { search_feed_selecting } from "~/models/const/main-feed/search_feed_selecting";
import FeedSearchBox from "~/ui/main-feed/FeedSearchBox";
import FeedSearchTypeSelection from "~/ui/main-feed/FeedSearchTypeSelection";



function MainFeedSearchBar() {
  return (
    <>
      {/* SearchBar and TypeSelection */}
      <div className="mb-3 mt-5 grid h-12 md:mt-0">
        <div className="flex items-center justify-end">
          <FeedSearchBox />
          <FeedSearchTypeSelection searchType={search_feed_selecting} />
        </div>
      </div>
      {/* END OF SearchBar and TypeSelection */}
    </>
  );
}

export default MainFeedSearchBar;
