import { atom } from "recoil";

export const userProfileState = atom({
  key: "state/userProfile",
  default: "",
});

export const darkModeState = atom({
  key: "state/darkmode",
  default: false,
});
// export const userProfile = atom({
//   key: "user",
//   default: "",
// });

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const kakaoAccessTokenState = atom({
  key: "kakaoAccessTokenState",
  default: "",
});

export const naverAccessTokenState = atom({
  key: "naverAccessTokenState",
  default: "",
});

export const googleAccessTokenState = atom({
  key: "googleAccessTokenState",
  default: "",
});

export const recentLoginPathState = atom({
  key: "recentLoggedInSns",
  default: "",
});

// export const userId = atom({
//   key: "user",
//   default: "",
// });

// export const userPassword = atom({
//   key: "user",
//   default: "",
// });
