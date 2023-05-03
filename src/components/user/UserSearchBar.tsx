/* eslint-disable @typescript-eslint/no-floating-promises */
import { observer } from "mobx-react-lite";
import React, {useState, useEffect} from "react";
import { manage_heading } from "~/models/const/user-manage/manage_heading";
import { userStore } from "~/store/user/UserStore";
import { useDebounce } from "~/models/const/user-manage/search_user_debounce";



const UserSearchBar = observer(() => {  

  const { setSearchContext } = userStore;
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 1000);
  const getSearchUser = async (inputText : string) => {
    await userStore.getUserManage(inputText, 0, 10);
  };

  useEffect(() => {
    if (debouncedSearch || debouncedSearch === "") {
      getSearchUser(userStore.searchContext);
    }
  }, [debouncedSearch]);

  return (
    <>
      {/* SearchBar and TypeSelection */}
      <div className="mb-3 mt-5 grid h-12 md:mt-0">
        <div className="flex items-center justify-end">
          {/* SearchBar */}
          <div className="relative w-2/3 md:w-2/5 lg:w-2/5">
            <input
              className="focus:shadow-outline w-full appearance-none rounded-md border-2 border-gray-300 py-2 px-3 pl-10 text-sm leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-[#0265ff] focus:outline-none focus:ring-[#0265ff] md:text-base lg:text-lg"
              id="username"
              type="text"
              placeholder="ค้นหาขื่อบัญชี"
              value={searchText}
              onChange={(event) => {
                setSearchContext(event.target.value)
                setSearchText(event.target.value);    
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-6 w-6 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
      {/* END OF SearchBar and TypeSelection */}
    </>
  );
});

export default UserSearchBar;


