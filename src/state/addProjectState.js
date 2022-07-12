import axios from "axios";
import { format } from "date-fns";
import { atom, useRecoilValue } from "recoil";
import { getCookie } from "../utills/cookie";
import { parseThumnailId } from "../utills/parser";
import { createBoardUrl } from "../utills/url";

export const boardTypeState = atom({
  key: "addProjectState/boardType",
  default: "project",
});

export const boardNameState = atom({
  key: "addProjectState/boardName",
  default: "",
});

export const boardSummaryState = atom({
  key: "addProjectState/boardSummary",
  default: "",
});

export const tagState = atom({
  key: "addProjectState/tag",
  default: ["PPT", "Figma", "Slack", "Notion"],
});

export const projectStartDateState = atom({
  key: "addProjectState/startDate",
  default: new Date(),
});

export const projectEndDateState = atom({
  key: "addProjectState/endDate",
  default: new Date(),
});

export const thumbnailIdState = atom({
  key: "addProjectState/thumbnailId",
  default: "side-project",
});

export const useCreateBoard = () => {
  const projectType = useRecoilValue(boardTypeState) === "project" ? "PROJECT" : "UN_PROJECT";
  const title = useRecoilValue(boardNameState);
  const detail = useRecoilValue(boardSummaryState);
  const usedTools = useRecoilValue(tagState);
  const fromDate = useRecoilValue(projectStartDateState);
  const endDate = useRecoilValue(projectEndDateState);
  const thumbnailId = useRecoilValue(thumbnailIdState);

  const addProject = async () => {
    const token = getCookie("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    return await axios.post(`${createBoardUrl}`, {
      boardType: "WEB",
      title,
      detail,
      fromDate: format(fromDate, "yyyy-MM-dd"),
      toDate: format(endDate, "yyyy-MM-dd"),
      projectType,
      usedTools,
      thumbnailId: parseThumnailId(thumbnailId),
    });
  };

  return { addProject };
};
