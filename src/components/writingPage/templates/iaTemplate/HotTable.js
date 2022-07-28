import dynamic from "next/dynamic";
const HotTable = dynamic(() => import("@handsontable/react"), { ssr: false });

export { HotTable };
