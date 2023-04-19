import { observer } from "mobx-react-lite";
import React, { ChangeEvent,useState } from "react";
import AddAndRemoveButton from "../../../ui/create-edit/AddAndRemoveButton";
import { setHistoryDataStore } from "~/store/create-edit/assessmentForm/setHistoryDataStore";

// interface Props {}

const SubjectExpertField = observer(() => {

  const{
    listProgram,
    onChangeInputProgram,
    addListProgram,
    removeListProgram,
  } = setHistoryDataStore;

  // const { historyProgramResult, setHistoryProgramResult } = setHistoryDataStore;

  // const handleProgramChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newhistoryProgramResults = {
  //     ...historyProgramResult,
  //     [event.target.name]: event.target.value,
  //   };
  //   setHistoryProgramResult(historyProgram);
  // };

  // const [listData, setData] = useState([
  //   {
  //     programName: "",
  //   },
  // ]);

  // const historyProgram: HistoryProgramResult = {
  //   programList:[]
  // }

  // console.log(listData);

  // const handleAdd = () => {
  //   setData([...listData, { programName: "" }]);

  //   // historyProgram.programList = listData
  // };

  // const handleRemove = (index: number) => {
  //   const list = [...listData];
  //   list.splice(index, 1);
  //   setData(list);
  // };

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   const { name, value } = event.target;
  //   const listOnchange = [...listData];
  //   listOnchange[index][name] = value;
  //   setData(listOnchange);
  //   historyProgram.programList = listData
  //   setHistoryProgramResult(historyProgram);
  
  // };

  // console.log(historyProgramResult);

  // const { historyDataResults, setAssessmentResult } = setHistoryDataStore;
  // const handleHistoryChange = (event: ChangeEvent<HTMLInputElement>,index :number) => {
  //   const newhistoryDataResults = {
  //     ...historyDataResults.Program,
  //     [event.target.name]: event.target.value,
  //   };

  // };

  const hidden = listProgram.length === 1;

  // const addProgramList = () => {
    
  // };

  return (
    <div className="list-data">
      {listProgram.map((data, index) => (
        <div className="mt-3 grid grid-cols-12 gap-2" key={index}>
          <div className="col-span-4">
            <input
              name="programName"
              type="text"
              id="programName"
              value={data.programName}
              // onChange={(event) => handleChange(event, index)}
              // value={historyProgramResult.programList}
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
          {/* {listData.length - 1 === index && (
            <div className="col-span-1">
              <button 
                className="w-full rounded-md border border-blue-700 p-1.5 text-gray-900  placeholder:text-gray-400 bg-blue-700"
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
                type="button"
                onClick={() => handleRemove(index)}
              >
                -
              </button>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
});

export default SubjectExpertField;
