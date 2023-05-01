import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FromCreate from "~/components/creat-edit/create/FromCreate";
import FromCreateEdit from "~/components/creat-edit/create/FromCreate";
import FormEdit from "~/components/creat-edit/edit/FormEdit";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { serviceEdit } from "~/store/edit/serviceEdit";
import { feedStore } from "~/store/main-feed/FeedStore";

type Props = {};

const typeTab = [
  {
    type: "history",
    i18n: "ประวัติผู้ทรงคุณวุฒิ",
  },
  {
    type: "Assessment",
    i18n: "ข้อมูลผลการประเมิน",
  },
];

const Edit = observer(({}: Props) => {
  const router = useRouter();
  const {
    profile,
    historyFile,
    orderFile,
    accountFile,
    idCardFile,
    assessmentFile,
    researchPropasalsFile,
    progressReportFile,
    researchArticlesFile,
    reportFile,
    oldFile,
  } = setFileEdit;

  const { id } = router.query;
  console.log("old", oldFile);
  const { deleteOldFile, updateFile } = serviceEdit;

  const onSubmitEdit = async () => {
    try {
      const fromdata = new FormData();
      await deleteOldFile(oldFile);

      for (const file of oldFile) {
        if (file.directory_file === "profile") {
          fromdata.append("uploadfile", profile.profile!);
          fromdata.append("directory_file", profile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "history") {
          fromdata.append("uploadfile", historyFile.history_file!);
          fromdata.append("directory_file", historyFile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "order") {
          fromdata.append("uploadfile", orderFile.order_file!);
          fromdata.append("directory_file", orderFile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "account") {
          fromdata.append("uploadfile", accountFile.account_file!);
          fromdata.append("directory_file", accountFile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "idcard") {
          fromdata.append("uploadfile", idCardFile.idCard_file!);
          fromdata.append("directory_file", idCardFile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "assessment") {
          fromdata.append("uploadfile", assessmentFile.assessmentResults_file!);
          fromdata.append("directory_file", assessmentFile.directory_file!);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "project") {
          fromdata.append(
            "uploadfile",
            researchPropasalsFile.researchPropasals_file!
          );
          fromdata.append(
            "directory_file",
            researchPropasalsFile.directory_file!
          );
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "progress") {
          fromdata.append(
            "uploadfile",
            progressReportFile.progressReport_file!
          );
          fromdata.append("directory_file", progressReportFile.directory_file);
          fromdata.append("directory_id", String(file.directory_id));
        } else if (file.directory_file === "report") {
          fromdata.append("uploadfile", reportFile.reports_file!);
          fromdata.append("directory_file", reportFile.directory_file);
          fromdata.append("directory_id", String(file.directory_file));
        } else if (file.directory_file === "article") {
          fromdata.append(
            "uploadfile",
            researchArticlesFile.researchArticles_file!
          );
          fromdata.append(
            "directory_file",
            researchArticlesFile.directory_file
          );
          fromdata.append("directory_id", String(file.directory_id));
        }
      }
      await updateFile(fromdata);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <FormEdit onSubmitEdit={onSubmitEdit} />;
});

export default Edit;
