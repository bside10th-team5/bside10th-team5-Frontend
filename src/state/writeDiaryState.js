import axios from "axios";
import { format } from "date-fns";
import { atom, useRecoilValue } from "recoil";
import { getCookie } from "../utills/cookie";
import { createRetrospectiveUrl } from "../utills/url";

export const selectedDateState = atom({
  key: "writeDiary/selectedDate",
  default: new Date(),
});

export const templateListState = atom({
  key: "writeDiary/templateList",
  default: [],
});

export const toggleAddTemplateState = atom({
  key: "writeDiary/toggleAddTemplate",
  default: false,
});

export const useHandleTemplate = () => {
  const templateList = useRecoilValue(templateListState);
  const date = useRecoilValue(selectedDateState);
  const saveRetrospective = async (id) => {
    const token = getCookie("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    const convertedTemplateList = templateList.map((el) => {
      if (el.type === "free") {
        return {
          retrospectiveType: "FREESTYLE",
          retrospectiveDate: format(date, "yyyy-MM-dd"),
          contentAsString: el.content,
        };
      }
      return el;
    });
    console.log(convertedTemplateList, "저장전");
    return await axios.post(createRetrospectiveUrl(id), convertedTemplateList);
  };

  return { saveRetrospective };
};
