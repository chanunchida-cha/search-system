import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { setHistoryDataStore } from "~/store/create-edit/assessmentForm/setHistoryDataStore";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";

type Props = {};

const ExpForWork = observer(({}: Props) => {
  const {
    listExperience,
    addListExperience,
    removeListExperience,
    onChangeInputExperience,
  } = setHistoryDataStore;
  // const [listData, setData] = useState([
  //   {
  //     name: "",
  //   },
  // ]);

  // console.log(listData);

  // const handleAdd = () => {
  //   setData([...listData, { name: "" }]);
  // };

  // const handleRemove = (index: number) => {
  //   const list = [...listData];
  //   list.splice(index, 1);
  //   setData(list);
  // };

  // const [selectLevel, setLevels] = useState<{ id: number; level: string }>(
  //   levels[0]!
  // );

  const expType = "work"

  const hidden = listExperience.length === 1;

  return (
    <div>
      {/* {title} */}
      {listExperience.map((data, index) => (
        <div
          className="mt-3 rounded-md border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400"
          key={index}
        >
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <input
                value={data.experienceStart}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExperience(index, event);
                }}
                name="experienceStart"
                id="experienceStart"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5 text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="price"
                className="w-full items-center justify-center font-medium leading-6 text-gray-900"
              >
                ถึง
              </label>
            </div>
            <div className="col-span-2">
              <input
                value={data.experienceEnd}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExperience(index, event);
                }}
                name="experienceEnd"
                id="experienceEnd"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="price"
                className="w-full items-center justify-center font-medium leading-6 text-gray-900"
              >
                สังกัด
              </label>
            </div>
            <div className="col-span-6">
              <input
                 value={data.experienceUniversity}
                 onChange={(event: ChangeEvent<HTMLInputElement>) => {
                   onChangeInputExperience(index, event);
                 }}
                 name="experienceUniversity"
                 id="experienceUniversity"
                 type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3">
            <input
               value={data.experienceRemark}
               onChange={(event: ChangeEvent<HTMLInputElement>) => {
                 onChangeInputExperience(index, event);
               }}
               name="experienceRemark"
               id="experienceRemark"
               type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <AddAndRemoveButton
              onClickAdd={addListExperience}
              onClickRemove={() => removeListExperience(index)}
              hidden={hidden}
            />
          </div>
          {/* <div className="mt-3 grid grid-cols-12 gap-2">
            {listData.length - 1 === index && (
              <div className="col-span-1">
                <button
                  className="w-full rounded-md border border-blue-700 p-1.5 text-white  placeholder:text-gray-400 bg-blue-700"
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>
            )}
            {listData.length > 1 && (
              <div className="col-span-1">
                <button
                  className="w-full rounded-md border border-red-500 p-1.5 text-white  placeholder:text-gray-400 bg-red-500"
                  onClick={onClick}
                >
                  -
                </button>
              </div>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
});
export default ExpForWork;
