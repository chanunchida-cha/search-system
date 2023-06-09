import React, { ReactElement, useState } from "react";
import SelectPrefix from "~/ui/create-edit/SelectPrefix";

interface Props {}

function HistoryForm({}: Props): ReactElement {
  const [name, setName] = useState("");
  return (
    <div>
      <div>ประวัติผู้ทรงคุณวุฒิ</div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ชื่อ-สกุล
        </label>
        <div>
          <div className="grid grid-cols-12 gap-5">
            <div>
              <SelectPrefix />
            </div>
            <div>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                name="price"
                id="price"
                className="col-span-2   w-full rounded-md border border-gray-300 py-1.5  text-gray-900  placeholder:text-gray-400 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryForm;
