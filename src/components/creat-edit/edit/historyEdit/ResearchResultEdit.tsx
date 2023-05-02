import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";

type Props = {};

const ResearchResultEdit = observer(({}: Props) => {
  const { listExplore, addListExplore, removeExplore, onChangeInputExplore } =
    setHistoryEdit;

  const hidden = listExplore.length === 1;

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
                value={data.explore_name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExplore(index, event);
                }}
                name="explore_name"
                id="explore_name"
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
                value={data.explore_year}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExplore(index, event);
                }}
                name="explore_year"
                id="explore_year"
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
              value={data.explore_detail}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputExplore(index, event);
              }}
              name="explore_detail"
              id="explore_detail"
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
          </div>
        </div>
      ))}
    </div>
  );
});
export default ResearchResultEdit;
