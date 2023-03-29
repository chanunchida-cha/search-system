import React, { ReactElement, useState } from "react";
import AddRemoveField from "~/ui/create-edit/AddRemoveField";
import SelectPrefix from "~/ui/create-edit/SelectPrefix";
import SelectRanks from "~/ui/create-edit/SelectRanks";

interface Props {}

function HistoryForm({}: Props): ReactElement {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  return (
    <div>
      <div>ประวัติผู้ทรงคุณวุฒิ</div>

      <div>
        {/* <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ชื่อ-สกุล
        </label> */}
        <div className="mt-5 flex flex-row">
          <label
            htmlFor="price"
            className="items-center justify-center font-medium leading-6 text-gray-900"
          >
            ชื่อ :
          </label>
          <div className="ml-2 w-32">
            <SelectPrefix />
          </div>
          <div>
            <input
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              type="text"
              name="price"
              id="price"
              className="ml-2 w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
          <label
            htmlFor="price"
            className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
          >
            นามสกุล :
          </label>
          <div>
            <input
              onChange={(event) => {
                setlastName(event.target.value);
              }}
              type="text"
              name="price"
              id="price"
              className="ml-2 w-48 rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
            />
          </div>
        </div>
        <div className="mt-3 flex flex-row">
          <label
            htmlFor="price"
            className="ml-2 items-center justify-center font-medium leading-6 text-gray-900"
          >
            ตำแหน่งทางวิชาการ :
          </label>
          <div className="ml-2 w-56">
            <SelectRanks />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="">
            <AddRemoveField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryForm;
