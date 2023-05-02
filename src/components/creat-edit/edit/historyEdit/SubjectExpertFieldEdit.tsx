import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState, useEffect } from "react";
import AddAndRemoveButton from "../../../../ui/create-edit/AddAndRemoveButton";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";

// interface Props {}

const SubjectExpertFieldEdit = observer(() => {
  // const route = useRouter();

  const {
    listProgram,
    onChangeInputProgram,
    addListProgram,
    removeListProgram,
  } = setHistoryEdit;

  const hidden = listProgram.length === 1;

 console.log(listProgram);
 

  return (
    <div className="list-data">
      {listProgram.map((data, index) => (
        <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
          <div className="col-span-4">
            <input
              name="program_name"
              type="text"
              id="program_name"
              value={data.program_name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChangeInputProgram(index, event);
              }}
              required
              className="w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <AddAndRemoveButton
            onClickAdd={addListProgram}
            onClickRemove={() => removeListProgram(index)}
            hidden={hidden}
          />
        </div>
      ))}
    </div>
  );
});

export default SubjectExpertFieldEdit;
