import axios from "axios";
import { getCookie } from "../utills/cookie";
import { createBoardUrl } from "../utills/url";

export const useProjectList = () => {
  const token = getCookie("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const fetchFunc = async (config) => {
    const page = config.queryKey[1];
    return await axios.get(createBoardUrl, { params: { page, size: 20 } });
  };

  const deleteFunc = async (id) => {
    try {
      await axios.delete(`${createBoardUrl}/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return { fetchFunc, deleteFunc };
};
