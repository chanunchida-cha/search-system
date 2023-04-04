import { makeAutoObservable } from "mobx";
import { AssessmentResults } from "~/models/type/create-edit/AssessmentForm/typeDataAssessment";

class SetStateAssessmentStore {
  assessmentResults: AssessmentResults = {
    from: "",
    to: "",
    researchFile: null,
  };
  constructor() {
    makeAutoObservable(this);
  }

  setAssessmentResult = (assessmentData: AssessmentResults) => {
    this.assessmentResults = assessmentData;
    console.log(this.assessmentResults);
    
  };
}

export const setStateAssessmentStore = new SetStateAssessmentStore();
