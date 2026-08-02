export const chartColors = {
  ink: "#243041",
  blue: "#2d5f7e",
  blueSoft: "#7f9bb8",
  line: "#dfe7ee",
  grid: "#e5ebf1",
  green: "#2d6f4f",
  amber: "#8e6728",
  red: "#9a3f37",
};

export const chartSeriesColors = {
  primary: chartColors.ink,
  secondary: chartColors.blue,
  tertiary: chartColors.blueSoft,
  manual: chartColors.amber,
  positive: chartColors.green,
  negative: chartColors.red,
  trend: chartColors.ink,
};

export const chartAxisTick = {
  fill: chartColors.ink,
  fontWeight: 600,
  fontSize: 13,
};

export const chartLabelStyle = {
  fill: chartColors.ink,
  fontWeight: 650,
  fontSize: 13,
  paintOrder: "stroke",
  stroke: "#ffffff",
  strokeWidth: 2,
  strokeLinejoin: "round",
};

export const chartLabelEmphasisStyle = {
  ...chartLabelStyle,
  fill: chartColors.blue,
  fontWeight: 700,
};

export const chartLabelRiskStyle = {
  ...chartLabelStyle,
  fill: chartColors.red,
  fontWeight: 700,
};

export const getChartLabelStyle = (
  value: number,
  values: number[],
  options: { highlight?: "max" | "min" | "none"; riskBelowZero?: boolean } = {},
) => {
  const { highlight = "max", riskBelowZero = true } = options;
  const finiteValues = values.filter((item) => Number.isFinite(item));

  if (riskBelowZero && value < 0) {
    return chartLabelRiskStyle;
  }

  if (highlight !== "none" && finiteValues.length > 0) {
    const targetValue = highlight === "min" ? Math.min(...finiteValues) : Math.max(...finiteValues);
    if (value === targetValue) {
      return chartLabelEmphasisStyle;
    }
  }

  return chartLabelStyle;
};

export const getChartLabelClassName = (
  value: number,
  values: number[],
  options: { highlight?: "max" | "min" | "none"; riskBelowZero?: boolean } = {},
) => {
  const { highlight = "max", riskBelowZero = true } = options;
  const finiteValues = values.filter((item) => Number.isFinite(item));

  if (riskBelowZero && value < 0) return "chart-label-risk";

  if (highlight !== "none" && finiteValues.length > 0) {
    const targetValue = highlight === "min" ? Math.min(...finiteValues) : Math.max(...finiteValues);
    if (value === targetValue) return "chart-label-key";
  }

  return "chart-label-normal";
};


export const chartTooltipStyle = {
  backgroundColor: "#ffffff",
  color: chartColors.ink,
  borderRadius: "4px",
  border: `1px solid ${chartColors.line}`,
  boxShadow: "none",
  fontWeight: 600,
};

export const chartTooltipItemStyle = {
  color: chartColors.ink,
};

export const chartLegendStyle = {
  fontWeight: 650,
  color: chartColors.ink,
  paddingTop: "10px",
};

export const chartMargins = {
  standard: { top: 42, right: 38, left: 16, bottom: 12 },
  compact: { top: 36, right: 32, left: 12, bottom: 10 },
  mini: { top: 36, right: 24, left: 0, bottom: 22 },
  hiddenAxis: { top: 36, right: 12, left: -16, bottom: 0 },
};

export const chartBarSize = {
  single: 40,
  grouped: 30,
  stacked: 28,
  horizontal: 24,
  delta: 16,
};

export const chartBarGap = {
  grouped: 8,
  stacked: 0,
};

export const chartBarRadius = {
  standard: [4, 4, 0, 0] as [number, number, number, number],
  horizontal: [0, 4, 4, 0] as [number, number, number, number],
  stackedTop: [4, 4, 0, 0] as [number, number, number, number],
  square: [0, 0, 0, 0] as [number, number, number, number],
};
