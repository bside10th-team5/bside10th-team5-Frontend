import { atom } from "recoil";

export const userProfileState = atom({
  key: "userProfile",
  default: "",
});

export const darkModeState = atom({
  key: "darkmode",
  default: false,
});
