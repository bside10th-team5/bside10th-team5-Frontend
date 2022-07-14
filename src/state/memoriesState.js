import axios from "axios";
import { getCookie } from "../utills/cookie";
import { createBoardUrl } from "../utills/url";

export const useProjectList = () => {
  const token = getCookie("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const fetch = async () => await axios.get(createBoardUrl, { params: { page: 0, size: 20 } });

  return { fetch };
};
