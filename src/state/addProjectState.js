import { atom } from "recoil";

export const boardTypeState = atom({
  key: "addProjectState/boardType",
  default: "project",
});

export const boardNameState = atom({
  key: "addProjectState/boardName",
  default: "",
});

export const boardSummaryState = atom({
  key: "addProjectState/boardSummary",
  default: "",
});

export const tagState = atom({
  key: "addProjectState/tag",
  default: ["PPT", "Figma", "Slack", "Notion"],
});

export const projectStartDateState = atom({
  key: "addProjectState/startDate",
  default: new Date(),
});

export const projectEndDateState = atom({
  key: "addProjectState/endDate",
  default: new Date(),
});
