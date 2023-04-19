export type AssessmentResults = {
  from: string;
  to: string;
  researchFile: File | null;
};

export type ResearchPropasals = {
  project_year: string;
  project_title: string;
  project_point: number;
  project_estimate: string;
  project_recommend: string;
  project_period: string;
  researchPropasalsFile: File | null;
};

export type ProgressReports = {
  progress_year: string;
  progress_title: string;
  progress_estimate: string;
  progress_recommend: string;
  progress_period: string;
  progressReportsFile: File | null;
};

export type Reports = {
  report_year: string;
  report_title: string;
  report_estimate: string;
  report_recommend: string;
  report_period: string;
  reportsFile: File | null;
};

export type ResearchArticles = {
  article_year: string;
  article_title: string;
  article_estimate: string;
  article_recommend: string;
  article_period: string;
  researchArticlesFile: File | null;
};
