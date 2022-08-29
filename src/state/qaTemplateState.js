import { atom } from "recoil";

export const qaWorkTagState = atom({
  key: "qaTemplate/qaWorkTag",
  default: ["테스트 시나리오", "QA 테스트", "QA 일정관리"],
});

export const qaWorkSecondTagState = atom({
  key: "qaTemplate/qaWorkSecondTag",
  default: [],
});
