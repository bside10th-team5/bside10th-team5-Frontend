import { atom } from "recoil";

export const sbScreenReviewState = atom({
  key: "sbTemplate/sbScreenReview",
  default: [],
});

export const sbWorkTagState = atom({
  key: "sbTemplate/sbWorkTag",
  default: ["홈", "마이페이지", "전체메뉴", "관리자"],
});
