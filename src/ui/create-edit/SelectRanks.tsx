import { ChangeEvent, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { observer } from "mobx-react-lite";
import { setHistoryDataStore } from "~/store/create-edit/assessmentForm/setHistoryDataStore";
import { ranks } from "~/models/const/createEdit/rankLevels";

// const ranks = [
//   {
//     id: 1,
//     prefix: "ศาสตราจารย์เกียรติคุณ",
//   },
//   {
//     id: 2,
//     prefix: "ศาสตราจารย์ ดร.",
//   },
//   {
//     id: 3,
//     prefix: "ศาสตราจารย์",
//   },
//   {
//     id: 4,
//     prefix: "รองศาสตราจารย์ ดร.",
//   },
//   {
//     id: 5,
//     prefix: "รองศาสตราจารย์",
//   },
//   {
//     id: 6,
//     prefix: "ผู้ช่วยศาสตราจารย์ ดร.",
//   },
//   {
//     id: 7,
//     prefix: "ผู้ช่วยศาสตราจารย์",
//   },
//   {
//     id: 8,
//     prefix: "อื่น ๆ เช่น ดร. /อาจารย์",
//   },
// ];

// interface Props {}

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectRanks = observer(() => {
  // const [selected, setSelected] = useState<{ id: number; prefix: string }>(
  //   ranks[0]!
  // );
  const {
    selectRanks,
    setSelectedRank,
    historyDataResults,
    setAssessmentResult,
  } = setHistoryDataStore;

  const handleHistoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newhistoryDataResults = {
      ...historyDataResults,
      [event.target.name]: event.target.value,
    };
    setAssessmentResult(newhistoryDataResults);
  };

  console.log(ranks[ranks.length - 1]);
  console.log(selectRanks);

  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-9">
        <Listbox
          value={selectRanks}
          onChange={(selectedRank) => {
            setSelectedRank(selectedRank);
          }}
        >
          {({ open }) => (
            <>
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{selectRanks}</span>
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
                    {ranks.map((ranks, index) => (
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
                        value={ranks}
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
                                {ranks}
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
          value={historyDataResults.positionName}
          onChange={handleHistoryChange}
          type="text"
          name="positionName"
          id="positionName"
          className="w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
          hidden={ranks[ranks.length - 1] !== selectRanks}
        />
      </div>
    </div>
  );
});

export default SelectRanks;
