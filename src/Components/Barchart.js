import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return <BarChart series={[{ data: [4] }]} width={150} height={200} />;
}
