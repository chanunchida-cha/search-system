import { observer } from "mobx-react-lite";
import React from "react";
import FromCreateEdit from "~/components/creat-edit/FromCreateEdit";
import { BodyProfile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { BodyAssessment } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { setStateAssessmentStore } from "~/store/create-edit/assessmentForm/setStateAssessmentStore";
import { setHistoryDataStore } from "~/store/create-edit/historyForm/setHistoryDataStore";
import { serviceCreateEdit } from "~/store/create-edit/serviceCreateEdit";
import { setStateFile } from "~/store/create-edit/setStateFile";

type Props = {};

const create = observer(({}: Props) => {
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
    listData,
    listProgram,
    listExperience,
    listExpReserach,
    listExplore,
  } = setHistoryDataStore;
  const {
    assessmentResults,
    researchPropasals,
    progressReports,
    reports,
    researchArticles,
  } = setStateAssessmentStore;
  const { createDataResearcher, createDataAssessment } = serviceCreateEdit;

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

  const bodyProfile: BodyProfile = {
    first_name: historyDataResults.first_name,
    last_name: historyDataResults.last_name,
    position_name: historyDataResults.position_name,
    degree: listData,
    program: listProgram,
    university: historyDataResults.university,
    experience: [...listExperience, ...listExpReserach],
    explore: listExplore,
    address_home: historyDataResults.address_home,
    address_work: historyDataResults.address_work,
    email: historyDataResults.email,
    phone_number: historyDataResults.phone_number,
  };

  const bodyAsessment: BodyAssessment = {
    profile_id: 1,
    assessment_start: assessmentResults.assessment_start,
    assessment_end: assessmentResults.assessment_end,
    project_year: researchPropasals.project_year,
    project_title: researchPropasals.project_title,
    project_point: researchPropasals.project_point,
    project_estimate: researchPropasals.project_estimate,
    project_recommend: researchPropasals.project_recommend,
    project_period: researchPropasals.project_period,
    progress_year: progressReports.progress_year,
    progress_title: progressReports.progress_title,
    progress_estimate: progressReports.progress_estimate,
    progress_recommend: progressReports.progress_recommend,
    progress_period: progressReports.progress_period,
    report_year: reports.report_year,
    report_title: reports.report_title,
    report_estimate: reports.report_estimate,
    report_recommend: reports.report_recommend,
    report_period: reports.report_period,
    article_year: researchArticles.article_year,
    article_title: researchArticles.article_title,
    article_estimate: researchArticles.article_estimate,
    article_recommend: researchArticles.article_recommend,
    article_period: researchArticles.article_period,
  };

  const onSubmitCreate = async() => {
    await createDataResearcher(bodyProfile)

  };


  return <FromCreateEdit />;
});
export default create;
