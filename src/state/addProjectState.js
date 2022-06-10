import { atom } from "recoil";

export const tagState = atom({
  key: "addProjectState/tag",
  default: ["figma", "javascript", "react", "node", "java"],
});
