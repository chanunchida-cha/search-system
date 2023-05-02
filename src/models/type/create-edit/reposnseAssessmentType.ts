export type ResponseAssessment = {
  profile_id: number;
  assessment_id: number;
  assessment_start: string;
  assessment_end: string;
  assessment_file_name: string;
  assessment_file_action: string;
  Project: Project;
  Progress: Progress;
  Report: Reports;
  Article: Articles;
};

export type Project = {
  project_id: number;
  project_year: string;
  project_title: string;
  project_point: number;
  project_estimate: boolean;
  project_recommend: boolean;
  file_action: string;
  file_name: string;
  period: boolean;
};
export type Progress = {
  progress_id: number;
  progress_year: string;
  progress_title: string;
  progress_estimate: boolean;
  progress_recommend: boolean;
  file_action: string;
  file_name: string;
  period: boolean;
};

export type Reports = {
  report_id: number;
  report_year: string;
  report_title: string;
  report_estimate: boolean;
  report_recommend: boolean;
  file_action: string;
  file_name: string;
  period: boolean;
};
export type Articles = {
  article_id: number;
  article_year: string;
  article_title: string;
  article_estimate: boolean;
  article_recommend: boolean;
  file_action: string;
  file_name: string;
  period: boolean;
};
