export type AssessmentResults = {
  assessment_start: string;
  assessment_end: string;
};
export type AssessmentResultsFile = {
  assessmentResults_file: File | null;
  directory_file: string;
};

export type ResearchPropasals = {
  project_year: string;
  project_title: string;
  project_point: number;
  project_estimate: string;
  project_recommend: string;
  project_period: string;
};
export type ResearchPropasalsFile = {
  researchPropasals_file: File | null;
  directory_file: string;
};

export type ProgressReports = {
  progress_year: string;
  progress_title: string;
  progress_estimate: string;
  progress_recommend: string;
  progress_period: string;
};
export type ProgressReportsFile = {
  progressReport_file: File | null;
  directory_file: string;
};

export type Reports = {
  report_year: string;
  report_title: string;
  report_estimate: string;
  report_recommend: string;
  report_period: string;
};
export type ReportFile = {
  reports_file: File | null;
  directory_file: string;
};

export type ResearchArticles = {
  article_year: string;
  article_title: string;
  article_estimate: string;
  article_recommend: string;
  article_period: string;
};
export type ResearchArticlesFile = {
  researchArticles_file: File | null;
  directory_file: string;
};

export type BodyAssessment = {
  profile_id?: number;
  assessment_start: string;
  assessment_end: string;
  project_year: string;
  project_title: string;
  project_point: number;
  project_estimate: boolean;
  project_recommend: boolean;
  project_period: boolean;
  progress_year: string;
  progress_title: string;
  progress_estimate: boolean;
  progress_recommend: boolean;
  progress_period: boolean;
  report_year: string;
  report_title: string;
  report_estimate: boolean;
  report_recommend: boolean;
  report_period: boolean;
  article_year: string;
  article_title: string;
  article_estimate: boolean;
  article_recommend: boolean;
  article_period: boolean;
};
