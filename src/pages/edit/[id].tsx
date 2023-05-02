import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FromCreate from "~/components/creat-edit/create/FromCreate";
import FromCreateEdit from "~/components/creat-edit/create/FromCreate";
import FormEdit from "~/components/creat-edit/edit/FormEdit";
import FeedAssessment from "~/components/main-feed/FeedAssessment";
import FeedDetail from "~/components/main-feed/FeedDetail";
import { BodyProfile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { BodyAssessment } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResponseAssessment } from "~/models/type/create-edit/reposnseAssessmentType";
import { ResponseHistory } from "~/models/type/create-edit/responseHistoryType";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { setAssessmentEdit } from "~/store/edit/assessmentEdit/setAssessmentEdit";
import { setFileEdit } from "~/store/edit/fileEdit/setFileEdit";
import { setHistoryEdit } from "~/store/edit/historyEdit/setHistoryEdit";
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

const Edit = observer(({ }: Props) => {
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
  const { deleteOldFile, updateFile, editDataResearcher, editDataAssessment } = serviceEdit;
  const {
    assessmentResults,
    researchPropasals,
    progressReports,
    reports,
    researchArticles,
  } = setAssessmentEdit;

  const {
    history,
    listLevel,
    listProgram,
    listExperience,
    listExpReserach,
    listExplore,
  } = setHistoryEdit;

  const bodyProfile: BodyProfile = {
    first_name: history.first_name,
    last_name: history.last_name,
    position_name: history.position_name,
    degree: listLevel,
    program: listProgram,
    university: history.university,
    experience: [...listExperience, ...listExpReserach],
    explore: listExplore,
    address_home: history.address_home,
    address_work: history.address_work,
    email: history.email,
    phone_number: history.phone_number,
  };


  const onSubmitEdit = async () => {

    try {
      Swal.fire({
        icon: "info",
        title: 'ยืนยันการแก้ไขข้อมูล',
        text: "โปรดตรวจสอบก่อนการยืนยัน",
        showCancelButton: true,
        confirmButtonColor: '#828282',
        cancelButtonColor: '#0265ff',
        confirmButtonText: 'ยกเลิก',
        cancelButtonText: "ยืนยัน",
        backdrop: false
      }).then(async (result) => {
        console.log(result);
        
        if (result.isDismissed) {
          
          const resResearcher: ResponseHistory = await editDataResearcher(
            bodyProfile, String(id)
          );
          const fromdata = new FormData();
          console.log("bbb", bodyProfile);
    
          const bodyAsessment: BodyAssessment = {
            profile_id: resResearcher.profile_id!,
            assessment_start: assessmentResults.assessment_start,
            assessment_end: assessmentResults.assessment_end,
            project_year: researchPropasals.project_year,
            project_title: researchPropasals.project_title,
            project_point: Number(researchPropasals.project_point),
            project_estimate: Boolean(researchPropasals.project_estimate),
            project_recommend: Boolean(researchPropasals.project_recommend),
            project_period: Boolean(researchPropasals.project_period),
            progress_year: progressReports.progress_year,
            progress_title: progressReports.progress_title,
            progress_estimate: Boolean(progressReports.progress_estimate),
            progress_recommend: Boolean(progressReports.progress_recommend),
            progress_period: Boolean(progressReports.progress_period),
            report_year: reports.report_year,
            report_title: reports.report_title,
            report_estimate: Boolean(reports.report_estimate),
            report_recommend: Boolean(reports.report_recommend),
            report_period: Boolean(reports.report_period),
            article_year: researchArticles.article_year,
            article_title: researchArticles.article_title,
            article_estimate: Boolean(researchArticles.article_estimate),
            article_recommend: Boolean(researchArticles.article_recommend),
            article_period: Boolean(researchArticles.article_period),
          };
          await editDataAssessment(
            bodyAsessment, String(id)
          );
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
          Swal.fire({
            icon: 'success',
            title: 'แก้ไขข้อมูลสำเร็จ',
            confirmButtonColor: '#0265ff',
            confirmButtonText: 'ตกลง',
            backdrop: false,
          },);
          router.push("/")
        }
        
      },);
      
    } catch (error) {
      console.log("error", error);
    }
  };

  return <FormEdit onSubmitEdit={onSubmitEdit} />;
});

export default Edit;
