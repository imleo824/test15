import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportPanel, ReportPanelHeader } from "../../ReportSections";
import { ChartColumn } from "lucide-react";
import {
  chartAxisTick,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartBarRadius,
  chartBarSize,
  chartBarGap,
  chartLegendStyle,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

// 4, 5, 6月 及汇总 系统审核 问题召回率、问题命中率数据
const systemMetricsData = [
  {
    month: "2026-04",
    问题召回率: 52.90,
    问题命中率: 11.19,
    问题召回率标签: "52.90%",
    问题命中率标签: "11.19%",
  },
  {
    month: "2026-05",
    问题召回率: 49.63,
    问题命中率: 12.82,
    问题召回率标签: "49.63%",
    问题命中率标签: "12.82%",
  },
  {
    month: "2026-06",
    问题召回率: 51.02,
    问题命中率: 10.73,
    问题召回率标签: "51.02%",
    问题命中率标签: "10.73%",
  },
  {
    month: "汇总",
    问题召回率: 51.25,
    问题命中率: 11.40,
    问题召回率标签: "51.25%",
    问题命中率标签: "11.40%",
  },
];
const recallValues = systemMetricsData.map((item) => item.问题召回率);
const hitValues = systemMetricsData.map((item) => item.问题命中率);

const renderSystemMetricLabel =
  (metricKey: "问题召回率" | "问题命中率", labelKey: "问题召回率标签" | "问题命中率标签") =>
  (props: any) => {
    if (!props) return null;
    const { x, y, width, index, value, payload } = props;
    if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number") return null;

    let dataItem = payload;
    if (!dataItem && typeof index === "number" && systemMetricsData[index]) {
      dataItem = systemMetricsData[index];
    }

    let displayLabel = value;
    if (!displayLabel && dataItem) {
      displayLabel = dataItem[labelKey] || (dataItem[metricKey] !== undefined ? `${dataItem[metricKey]}%` : "");
    }
    if (!displayLabel && typeof value === "number") {
      displayLabel = `${value.toFixed(2)}%`;
    }

    if (!displayLabel) return null;

    const values = metricKey === "问题召回率" ? recallValues : hitValues;
    const numericValue = dataItem ? Number(dataItem[metricKey]) : Number(value);
    const isSummary = dataItem?.month === "汇总";
    return (
      <text
        x={x + width / 2}
        y={y - 8}
        textAnchor="middle"
        className={isSummary ? "chart-label-key" : getChartLabelClassName(numericValue, values)}
        {...(isSummary ? getChartLabelStyle(numericValue, [numericValue]) : getChartLabelStyle(numericValue, values))}
      >
        {displayLabel}
      </text>
    );
  };

export const SystemAuditMetricsChart: React.FC = () => {
  return (
    <ReportPanel className="report-panel-stack">
      {/* 头部标题与单位 */}
      <ReportPanelHeader
        title="系统召回率和命中率指标监控"
        icon={<ChartColumn className="h-5 w-5" />}
      />

      {/* 总结说明 */}
      <SummaryBox>
        {highlightNumbers(
          "当前汇总[[问题召回率]]为[[51.25%]]，低于[[70.6%]]的最低要求；当前[[问题命中率]]为[[11.40%]]，高于[[6.75%]]的最低要求。后续先[[补召回]]，再在问题召回率不下降的前提下提升[[问题命中率]]。"
        )}
      </SummaryBox>

      {/* 柱状图图表 */}
      <div className="h-[320px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={systemMetricsData}
            margin={chartMargins.compact}
            barGap={chartBarGap.grouped}
            barSize={chartBarSize.grouped}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis
              dataKey="month"
              stroke={chartColors.ink}
              tick={chartAxisTick}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              stroke={chartColors.ink}
              tick={chartAxisTick}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 70]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            />
            <Tooltip
              contentStyle={chartTooltipStyle}
              itemStyle={chartTooltipItemStyle}
              formatter={(value: any, name: any) => [`${value}%`, name]}
            />
            <Legend
              wrapperStyle={chartLegendStyle}
            />
            {/* 问题召回率 柱子 */}
            <Bar
              dataKey="问题召回率"
              fill={chartSeriesColors.primary}
              name="问题召回率"
              isAnimationActive={false}
              radius={chartBarRadius.standard}
            >
              <LabelList
                dataKey="问题召回率标签"
                position="top"
                content={renderSystemMetricLabel("问题召回率", "问题召回率标签")}
              />
            </Bar>
            {/* 问题命中率 柱子 */}
            <Bar
              dataKey="问题命中率"
              fill={chartSeriesColors.secondary}
              name="问题命中率"
              isAnimationActive={false}
              radius={chartBarRadius.standard}
            >
              <LabelList
                dataKey="问题命中率标签"
                position="top"
                content={renderSystemMetricLabel("问题命中率", "问题命中率标签")}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ReportPanel>
  );
};
