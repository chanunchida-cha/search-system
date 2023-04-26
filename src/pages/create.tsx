import { observer } from "mobx-react-lite";
import React from "react";
import FromCreateEdit from "~/components/creat-edit/FromCreateEdit";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setStateFile } from "~/store/create-edit/setStateFile";

type Props = {};

const create =observer(({}: Props) =>{
  const {
    profile,
    historyFile,
    orderFile,
    accountFile,
    idCardFile,
    assessmentFile,
    researchPropasalsFile,
    progressReportFile,
    reportFile,
    researchArticlesFile,
  } = setStateFile;
  const {
  historyDataResults,
  } = setHistoryDataStore
  const fromdata = new FormData();
  fromdata.append("file", profile.profile!);
  fromdata.append("directory_file", profile.directory_file!);
  fromdata.append("directory_id", "1");

  //----------------------------------------------------------
  fromdata.append("file", historyFile.history_file!);
  fromdata.append("directory_file", historyFile.directory_file!);
  fromdata.append("directory_id", "1");

  //------------------------------------------------------
  fromdata.append("file", orderFile.order_file!);
  fromdata.append("directory_file", orderFile.directory_file!);
  fromdata.append("directory_id", "1");

  //------------------------------------------------------
  fromdata.append("file", accountFile.account_file!);
  fromdata.append("directory_file", accountFile.directory_file!);
  fromdata.append("directory_id", "1");

  //------------------------------------------------------
  fromdata.append("file", idCardFile.idCard_file!);
  fromdata.append("directory_file", idCardFile.directory_file!);
  fromdata.append("directory_id", "1");

  const bodyProfile ={

  }

  const onSubmitCreate = ()=>{

  }


  return <FromCreateEdit />;
}
)
export default create;
