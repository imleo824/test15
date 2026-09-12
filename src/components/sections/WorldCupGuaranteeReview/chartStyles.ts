export const chartColors = {
  ink: "#0f172a",
  blue: "#1d4ed8",
  blueSoft: "#334155",
  line: "#94a3b8",
  grid: "#e2e8f0",
  green: "#1e3a8a",
  amber: "#b45309",
  red: "#b91c1c",
};

export const chartSeriesColors = {
  primary: "#0f172a",
  secondary: "#1d4ed8",
  tertiary: "#475569",
  manual: "#b45309",
  positive: "#1e3a8a",
  negative: "#b91c1c",
  trend: "#0f172a",
};

export const chartAxisTick = {
  fill: "#0f172a",
  fontWeight: 700,
  fontSize: 13.5,
};

export const chartLabelStyle = {
  fill: "#0f172a",
  fontWeight: 700,
  fontSize: 13.5,
  paintOrder: "stroke",
  stroke: "#ffffff",
  strokeWidth: 2.5,
  strokeLinejoin: "round",
};

export const chartLabelEmphasisStyle = {
  ...chartLabelStyle,
  fill: "#1d4ed8",
  fontWeight: 700,
};

export const chartLabelRiskStyle = {
  ...chartLabelStyle,
  fill: "#b91c1c",
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
  standard: { top: 44, right: 38, left: 16, bottom: 12 },
  compact: { top: 40, right: 32, left: 12, bottom: 10 },
  mini: { top: 38, right: 24, left: 0, bottom: 22 },
  hiddenAxis: { top: 40, right: 12, left: -16, bottom: 0 },
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
