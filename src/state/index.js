import { atom } from "recoil";

export const userProfileState = atom({
  key: "state/userProfile",
  default: "",
});

export const darkModeState = atom({
  key: "state/darkmode",
  default: false,
});
