export type AssessmentResults = {
  from: string;
  to: string;
  researchFile: File | null;
};

export type ResearchPropasals = {
  project_year: string;
  project_title: string;
  project_point: number;
  project_estimate: boolean;
  project_recommend: boolean;
  period: boolean;
  researchPropasalsFile: File | null;
};

export type ProgressReports = {
  progress_year: string;
  progress_title: string;
  progress_estimate: boolean;
  progress_recommend: boolean;
  period: boolean;
  progressReportsFile: File | null;
};

export type Reports = {
  report_year: string;
  report_title: string;
  report_estimate: boolean;
  report_recommend: boolean;
  period: boolean;
  reports: File | null;
};

export type ResearchArticles = {
  article_year: string;
  article_title: string;
  article_estimate: boolean;
  article_recommend: boolean;
  period: boolean;
  researchArticles: File | null;
};