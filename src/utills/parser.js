export function parseTemplateName(value) {
  if (value === "workflow") return "워크플로우";
  if (value === "ia") return "IA";
  if (value === "sb") return "설계";
  if (value === "design") return "디자인 관련";
  if (value === "develop") return "개발 관련";
  if (value === "qa") return "QA";
  if (value === "free") return "자유형";
}
