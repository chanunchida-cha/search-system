import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const ranks = [
  {
    id: 1,
    prefix: "ศาสตราจารย์เกียรติคุณ",
  },
  {
    id: 2,
    prefix: "ศาสตราจารย์ ดร.",
  },
  {
    id: 3,
    prefix: "ศาสตราจารย์",
  },
  {
    id: 4,
    prefix: "รองศาสตราจารย์ ดร.",
  },
  {
    id: 5,
    prefix: "รองศาสตราจารย์",
  },
  {
    id: 6,
    prefix: "ผู้ช่วยศาสตราจารย์ ดร.",
  },
  {
    id: 7,
    prefix: "ผู้ช่วยศาสตราจารย์",
  },
  {
    id: 8,
    prefix: "อื่น ๆ เช่น ดร. /อาจารย์",
  },
];

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectRanks() {
  const [selected, setSelected] = useState<{ id: number; prefix: string }>(
    ranks[0]!
  );
  return (
    <div ><Listbox value={selected} onChange={setSelected}>
    {({ open }) => (
      <>
   
        <div className="relative ">
          <Listbox.Button className="relative py-1.5 w-full cursor-default rounded-md bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selected?.prefix}
              </span>
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
              {ranks.map((ranks) => (
                <Listbox.Option
                  key={ranks.id}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-indigo-600 text-white" : "text-gray-900",
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
                          {ranks.prefix}
                        </span>
                      </div>

                      {selected ? (
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
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox></div>
  );
}