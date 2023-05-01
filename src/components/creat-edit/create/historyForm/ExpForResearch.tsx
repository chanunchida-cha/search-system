import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import AddAndRemoveButton from "~/ui/create-edit/AddAndRemoveButton";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";

type Props = {};

const ExpforResearch = observer(({}: Props) => {
  const {
    listExpReserach,
    addListExpResearch,
    removeListExpResearch,
    onChangeInputExpResearch,
  } = setHistoryDataStore;

  const hidden = listExpReserach.length === 1;

  return (
    <div>
      {listExpReserach.map((data, index) => (
        <div
          className="mt-3 rounded-md border border-gray-300 p-4 text-gray-900 placeholder:text-gray-400"
          key={index}
        >
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-2">
              <input
                value={data.experience_start}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExpResearch(index, event);
                }}
                name="experience_start"
                id="experience_start"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="price"
                className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
              >
                ถึง
              </label>
            </div>
            <div className="col-span-2">
              <input
                value={data.experience_end}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExpResearch(index, event);
                }}
                name="experience_end"
                id="experience_end"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="price"
                className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
              >
                สังกัด
              </label>
            </div>
            <div className="col-span-6">
              <input
                value={data.experience_university}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChangeInputExpResearch(index, event);
                }}
                name="experience_university"
                id="experience_university"
                type="text"
                className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
          <div className="mt-3">
            <input
              value={data.experience_remark}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputExpResearch(index, event);
              }}
              name="experience_remark"
              id="experience_remark"
              type="text"
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            <AddAndRemoveButton
              onClickAdd={addListExpResearch}
              onClickRemove={() => removeListExpResearch(index)}
              hidden={hidden}
            />
          </div>
        </div>
      ))}
    </div>
  );
});

export default ExpforResearch;
