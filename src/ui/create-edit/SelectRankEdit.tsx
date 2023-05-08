/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { ChangeEvent, Fragment, useState,useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { observer } from "mobx-react-lite";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";
// import { ranks } from "~/models/const/createEdit/rankLevels";


function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectRankEdit = observer(() => {
  // const [selected, setSelected] = useState<{ id: number; prefix: string }>(
  //   ranks[0]!
  // );
  const {
    positions,
    
  } = setHistoryDataStore;
const {history,setHistory,setSelectedRank,onChangeHistory}=setHistoryEdit

console.log("rank",history.position_name);



  useEffect(() => {
    const fecthManage = async () => {
      await setHistoryDataStore.getPositions();
    };
    void fecthManage();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-9">
        <Listbox
          value={history.position_name}
          onChange={(selectedRank) => {
            setSelectedRank(selectedRank);
          }}
        >
          {({ open }) => (
            <>
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{history.position_name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {positions.map((ranks, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={ranks.position_name}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {ranks.position_name}
                              </span>
                            </div>

                            {/* {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null} */}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className="col-span-3">
        <input
          // value={selectedRank}
          value={history.position_name}
          onChange={onChangeHistory}
          type="text"
          name="position_name"
          id="position_name"
          className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
          hidden={positions[positions.length - 1]?.position_name !== history.position_name!}
        />
      </div>
    </div>
  );
});

export default SelectRankEdit;
