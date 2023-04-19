import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";
import { setHistoryDataStore } from "~/store/create-edit/assessmentForm/setHistoryDataStore";

type Props = {};

const ResearchResult = observer(({}: Props) => {
  const { listExplore, addListExplore, removeExplore, onChangeInputExplore } =
    setHistoryDataStore;
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

  const hidden = listExplore.length === 1;

  const { historyDataResults, setAssessmentResult } = setHistoryDataStore;
  const handleHistoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newhistoryDataResults = {
      ...historyDataResults,
      [event.target.name]: event.target.value,
    };

    // const [listData, setData] = useState([
    //   {
    //     name: "",
    //   },
    // ]);

    setAssessmentResult(newhistoryDataResults);
  };

  return (
    <div>
      {listExplore.map((data, index) => (
        <div
          className="mt-3 rounded-md border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400"
          key={index}
        >
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="items-center justify-center font-medium leading-6 text-gray-900"
              >
                ชื่อผู้จัดทำ :
              </label>
            </div>
            <div className="col-span-4">
              <input
                value={data.exploreName}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExplore(index, event);
                }}
                name="exploreName"
                id="exploreName"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="price"
                className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
              >
                ปีที่ตีพิมพ์ :
              </label>
            </div>
            <div className="col-span-2">
              <input
                value={data.exploreYear}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExplore(index, event);
                }}
                name="exploreYear"
                id="exploreYear"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="price"
              className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
            >
              รายละเอียด :
            </label>
          </div>
          <div className="mt-3">
            <input
              value={data.exploreDetail}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputExplore(index, event);
              }}
              name="exploreDetail"
              id="exploreDetail"
              type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <AddAndRemoveButton
              onClickAdd={addListExplore}
              onClickRemove={() => removeExplore(index)}
              hidden={hidden}
            />
            {/* {listData.length - 1 === index && (
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
                  onClick={handleRemove}
                >
                  -
                </button>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
});
export default ResearchResult;
