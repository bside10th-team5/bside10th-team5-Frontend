import { atom } from "recoil";

export const selectedDateState = atom({
  key: "writeDiary/selectedDate",
  default: new Date(),
});

export const templateListState = atom({
  key: "writeDiary/templateList",
  default: [],
});

export const toggleAddTemplateState = atom({
  key: "writeDiary/toggleAddTemplate",
  default: false,
});
