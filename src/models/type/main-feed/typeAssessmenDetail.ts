import { ArticleResponse } from "./typeArticle";
import { ProgressResponse } from "./typeProgress";
import { ProjectResponse } from "./typeProject";
import { ReportResponse } from "./typeReport";

export type AssessmentDetailResponse = {
  profile_id: number;
  assessment_id: number;
  assessment_start: string;
  assessment_end: string;
  assessment_file_name: string;
  assessment_file_action: string;
  assessment_file_id: number;
  Project: ProjectResponse;
  Progress: ProgressResponse;
  Report: ReportResponse;
  Article: ArticleResponse;
};
