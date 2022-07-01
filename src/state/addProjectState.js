import { atom } from "recoil";

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
