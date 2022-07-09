import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../state";
import { getCookie } from "../utills/cookie";

export default function useAutoLogin() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const router = useRouter();
  const { pathname } = router;
  const accessToken = getCookie("token");
  const privatePage = pathname.includes("memories") || pathname.includes("addproject") || pathname.includes("writing");

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    } else if (!accessToken && privatePage) {
      router.push("/");
    }
  }, [pathname, accessToken]);
}
