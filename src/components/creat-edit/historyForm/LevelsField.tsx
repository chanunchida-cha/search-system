import { ChangeEvent, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";
import { observer } from "mobx-react-lite";
import { setHistoryDataStore } from "~/store/create-edit/assessmentForm/setHistoryDataStore";
import { levels } from "~/models/const/degreeLevels";

interface Props {}

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const LevelsField = observer(({}: Props) => {
  const {
    selectLevel,
    listData,
    setSelectedLevel,
    addListData,
    removeListData,
    onChangeLavel,
    onChangeInputDegree,
  } = setHistoryDataStore;

  const hidden = listData.length === 1;

  return (
    <div>
      {listData.map((data, index: number) => (
        <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
          <div className="col-span-2">
            <Listbox
              value={selectLevel}
              onChange={(selectedLevel) => {
                onChangeLavel(index, selectedLevel);
                setSelectedLevel(selectedLevel);
              }}
            >
              {({ open }) => (
                <>
                  <div className="relative ">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {data.degreeType}
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
                        {levels.map((levels, index) => (
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
                            value={levels}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {levels}
                                  </span>
                                </div>
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
          <div className="col-span-1">
            <label
              htmlFor="price"
              className="items-center justify-center font-medium leading-6 text-gray-900"
            >
              สาขา :
            </label>
          </div>
          <div className="col-span-2">
            <input
              value={data.degreeProgram}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputDegree(index, event);
              }}
              name="degreeProgram"
              id="degreeProgram"
              type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="price"
              className="items-center justify-center font-medium leading-6 text-gray-900"
            >
              มหาวิทยาลัย :
            </label>
          </div>
          <div className="col-span-3">
            <input
              value={data.degreeUniversity}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputDegree(index, event);
              }}
              name="degreeUniversity"
              id="degreeUniversity"
              type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <AddAndRemoveButton
            onClickAdd={addListData}
            onClickRemove={() => removeListData(index)}
            hidden={hidden}
          />

          {/* <div className="col-span-1">
            {listData.length - 1 === index && (
              <button
                className="w-full rounded-md border border-blue-700 p-1.5 text-white  placeholder:text-gray-400 bg-blue-700"
                onClick={handleAdd}
              >
                +
              </button>
            )}
          </div>
          <div className="col-span-1">
            {listData.length > 1 && (
              <button
                className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                onClick={() => handleRemove(index)}
              >
                -
              </button>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
});

export default LevelsField;
