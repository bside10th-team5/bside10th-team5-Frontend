import { atom } from "recoil";

export const templateListState = atom({
  key: "writeDiary/templateList",
  default: [],
});

export const toggleAddTemplateState = atom({
  key: "writeDiary/toggleAddTemplate",
  default: false,
});
