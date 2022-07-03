import { atom } from "recoil";

export const userProfileState = atom({
  key: "state/userProfile",
  default: "",
});

export const darkModeState = atom({
  key: "state/darkmode",
  default: false,
});

export const userIdState = atom({
  key: "state/userId",
  default: "",
});

export const oauth2RegistrationIdState = atom({
  key: "state/oauth2RegistrationId",
  default: "",
});
