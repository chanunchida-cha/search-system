import { observer } from "mobx-react-lite";
import React from "react";
import FromCreateEdit from "~/components/creat-edit/FromCreateEdit";
import { BodyProfile } from "~/models/type/create-edit/AssessmentForm/HistoryData";
import { BodyAssessment } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";
import { ResponseAssessment } from "~/models/type/create-edit/reposnseAssessmentType";
import { ResponseHistory } from "~/models/type/create-edit/responseHistoryType";
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
  const {
    createDataResearcher,
    createDataAssessment,
    uploadFile,
    responeseHistory,
  } = serviceCreateEdit;

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

  const onSubmitCreate = async () => {
    try {
      const resResearcher: ResponseHistory = await createDataResearcher(
        bodyProfile
      );
      console.log("resercher",resResearcher);

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

      const resAssessment: ResponseAssessment = await createDataAssessment(
        bodyAsessment
      );
      console.log("assessment",resAssessment);

      const fromdata = new FormData();
      fromdata.append("uploadfile", profile.profile!);
      fromdata.append("directory_file", profile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.profile_id!));

      //----------------------------------------------------------
      fromdata.append("uploadfile", historyFile.history_file!);
      fromdata.append("directory_file", historyFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.profile_id!));

      //------------------------------------------------------
      fromdata.append("uploadfile", orderFile.order_file!);
      fromdata.append("directory_file", orderFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.profile_id!));

      //------------------------------------------------------
      fromdata.append("uploadfile", accountFile.account_file!);
      fromdata.append("directory_file", accountFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.profile_id!));

      //------------------------------------------------------
      fromdata.append("uploadfile", idCardFile.idCard_file!);
      fromdata.append("directory_file", idCardFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.profile_id!));
      //------------------------------------------------------
      fromdata.append("uploadfile", assessmentFile.assessmentResults_file!);
      fromdata.append("directory_file", assessmentFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.assessment_id!));
      //------------------------------------------------------
      fromdata.append("uploadfile", researchPropasalsFile.researchPropasals_file!);
      fromdata.append("directory_file", researchPropasalsFile.directory_file!);
      fromdata.append("directory_id", String(resAssessment.Project.project_id!));
      //------------------------------------------------------
      fromdata.append("uploadfile", progressReportFile.progressReport_file!);
      fromdata.append("directory_file", progressReportFile.directory_file);
      fromdata.append(
        "directory_id",
        String(resAssessment.Progress.progress_id!)
      );

      //------------------------------------------------------
      fromdata.append("uploadfile", reportFile.reports_file!);
      fromdata.append("directory_file", reportFile.directory_file);
      fromdata.append("directory_id", String(resAssessment.Report.report_id));
      //------------------------------------------------------
      fromdata.append("uploadfile", researchArticlesFile.researchArticles_file!);
      fromdata.append("directory_file", researchArticlesFile.directory_file);
      fromdata.append("directory_id", String(resAssessment.Article.article_id));

      await uploadFile(fromdata);
    } catch (error: any) {
      console.log("error 162", error);
    }
  };

  return <FromCreateEdit onSubmitCreate={onSubmitCreate} />;
});
export default create;
