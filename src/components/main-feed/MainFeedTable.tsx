import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { main_feed_heading } from "~/models/const/main-feed/main_feed_heading";
import FeedEditButton from "~/ui/main-feed/FeedEditButton";
import FeedDeleteButton from "~/ui/main-feed/FeedDeleteButton";
import { FeedListResponse } from "~/models/type/main-feed/typeFeedList";
import index from "~/pages";
import { feedStore } from "~/store/main-feed/FeedStore";

type Props = {
  feedList: FeedListResponse;
};

function MainFeedTable({ feedList }: Props) {
  console.log("feed list", feedList.content);
  const updatePageCurrent = async (page: number) => {
    await feedStore.getFeedList("", page, 10, "");
  };
  return (
    <>
      {/* TABLE CONTENT */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="border-solid-500 w-full table-auto border-collapse border">
          <thead className="border-b-2 border-gray-200 bg-[#0265ff] ">
            <tr className="">
              {main_feed_heading.map((item) => (
                <th
                  key={item}
                  className={`text-xs text-white md:text-sm ${
                    item === "ลำดับ"
                      ? "p-3 text-center font-semibold tracking-wide"
                      : "p-3 text-center font-semibold tracking-wide"
                  } ${item === "ชื่อโครงการวิจัย" ? "" : "w-32"}`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {feedList.content
              .filter((item) => item.profile_status === true)
              .map((item, index) => (
                <tr className="bg-white">
                  <td className="p-3 text-center text-sm text-gray-700">
                    {index + 1 + Number(feedList.current_page) * 10}
                  </td>
                  <td className="p-3 text-center text-sm text-gray-700">
                    {item.project_title}
                  </td>
                  <td className="whitespace-nowrap p-3 text-left text-sm text-gray-700">
                    <Link
                      href={"/" + item.researcher_id}
                      className="font-bold text-blue-500 hover:underline"
                    >
                      {item.researcher_name}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                    {item.university}
                  </td>
                  <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                    {item.explore_year}
                  </td>
                  <td className="whitespace-nowrap p-3 text-center text-sm text-gray-700">
                    <div className="flex flex-col place-items-center gap-2 md:flex-row lg:flex-row">
                      <Link href={"/" + item.researcher_name}>
                        <FeedEditButton />
                      </Link>
                      <FeedDeleteButton />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATE CONTENT*/}
      <div className="flex items-center justify-between rounded-b-lg border-t border-gray-200 bg-white px-4 py-2 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(Number(feedList.current_page) + 1) * 10 - 9}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {(Number(feedList.current_page) + 1) * 10}
              </span>{" "}
              of{" "}
              <span className="font-medium">
                {Number(feedList.total_object) * Number(feedList.total_page)}
              </span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {Array.from({ length: Number(feedList.total_page) }, (_, index) =>
                Number(feedList.current_page) === index ? (
                  <a
                    href="#"
                    aria-current="page"
                    onClick={() => updatePageCurrent(index)}
                    className="relative z-10 inline-flex items-center bg-[#0265ff] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {index + 1}
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={() => updatePageCurrent(index)}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {index + 1}
                  </a>
                )
              )}
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFeedTable;
