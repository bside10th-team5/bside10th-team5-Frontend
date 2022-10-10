import { BLUE, GREEN, ORANGE, YELLOW } from "../styles/theme";

export function parseTemplateName(value) {
  if (value === "workflow") return "워크플로우";
  if (value === "ia") return "IA";
  if (value === "sb") return "설계";
  if (value === "design") return "디자인 관련";
  if (value === "develop") return "개발 관련";
  if (value === "qa") return "QA";
  if (value === "free") return "자유형";
}

export function parseTemplateType(value) {
  if (value === "FREESTYLE") return "free";
  if (value === "SB") return "sb";
  return "?"
}

export function parseProjectType(value) {
  if (value === "PROJECT") return "프로젝트형";
  return "자유형";
}

const thumbnailIdObj = {
  0: "side-project",
  1: "work-log",
  2: "project",
  3: "i-learned",
  4: "grow-up",
  "side-project": 0,
  "work-log": 1,
  project: 2,
  "i-learned": 3,
  "grow-up": 4,
};

Object.freeze(thumbnailIdObj);
export function parseThumnailId(value) {
  return thumbnailIdObj[value];
}

export const getColor = (colorCase) => {
  if (colorCase === 1) return ORANGE;
  if (colorCase === 2) return GREEN;
  if (colorCase === 3) return BLUE;
  if (colorCase === 4) return YELLOW;
};
