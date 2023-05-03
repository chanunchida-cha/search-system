import { ChangeEvent, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {  ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { observer } from "mobx-react-lite";
import { levels } from "~/models/const/degreeLevels";
import { Degree } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";


function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const LevelsFieldEdit = observer(() => {


  const {
    listLevel,
    selectLevel,
    addListLevel,
    setSelectedLevel,
    removeListLevel,
    onChangeLavel,
    onChangeInputDegree,
  } = setHistoryEdit;



    console.log("selec",listLevel);

  return (
    <div>
      {listLevel.map((data: Degree, index: number) => (
        <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
          <div className="col-span-3">
            <Listbox
              disabled={index === 0}
              value={selectLevel}
              onChange={(selectedLevel) => {
               

                onChangeLavel(index, selectedLevel.key);
                setSelectedLevel(index, selectedLevel);
              }}
            >
              {({ open }) => (
                <>
                  <div className="relative ">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5  pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {data.degree_type === "bachelor"?"ปริญญาตรี":data.degree_type === "master"?"ปริญญาโท":"ปริญญาเอก"}
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
                            {({ selected }) => (
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
                                    {levels.i18n}
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
              value={data.degree_program}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputDegree(index, event);
              }}
              name="degree_program"
              id="degree_program"
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
              value={data.degree_university}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputDegree(index, event);
              }}
              name="degree_university"
              id="degree_university"
              type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>

          <div className="grid grid-cols-12 gap-2">
            {/* {listData.length - 1 === index && ( */}
            <div className="col-span-6">
              <button
                className="w-full rounded-md border border-blue-700 bg-blue-700 p-1.5  text-white placeholder:text-gray-400"
                onClick={addListLevel}
              >
                +
              </button>
            </div>
            {/* )} */}
            {/* {listData.length > 1 && ( */}
            <div className="col-span-6">
              <button
                className="w-full rounded-md border border-red-500 bg-red-500 p-1.5 text-white placeholder:text-gray-400"
                onClick={() => removeListLevel(index)}
                // hidden={hidden}
                hidden={index === 0}
              >
                -
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      ))}
    </div>
  );
});

export default LevelsFieldEdit;
