import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ComposedChart, Line } from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportChartCard, ReportChartLegend, ReportSubsectionHeader } from "../../ReportSections";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartMargins,
  chartSeriesColors,
} from "./chartStyles";

export const AuditOverviewAmountAndEffort: React.FC = () => {
  // Chart 1: 26年Q2总拦截金 (月度数据 2026/1 ~ 2026/6)
  const amountData = [
    { month: "2026/1", amount: 1.153 },
    { month: "2026/2", amount: 1.019 },
    { month: "2026/3", amount: 0.899 },
    { month: "2026/4", amount: 0.868 },
    { month: "2026/5", amount: 0.810 },
    { month: "2026/6", amount: 1.046 },
  ];

  // Chart 2: 26年Q2平均审核时长 (双轴数据: 人工单量 & 人工时效)
  const effortData = [
    { month: "2026/1", volume: 221.53, duration: "0:10:12", durationVal: 10.20 },
    { month: "2026/2", volume: 223.84, duration: "0:10:46", durationVal: 10.77 },
    { month: "2026/3", volume: 231.49, duration: "0:09:38", durationVal: 9.63 },
    { month: "2026/4", volume: 228.76, duration: "0:09:54", durationVal: 9.90 },
    { month: "2026/5", volume: 224.03, duration: "0:08:07", durationVal: 8.12 },
    { month: "2026/6", volume: 300.77, duration: "0:08:14", durationVal: 8.23 },
  ];
  const amountValues = amountData.map((item) => item.amount);
  const volumeValues = effortData.map((item) => item.volume);
  const durationValues = effortData.map((item) => item.durationVal);

  const renderTopLabel =
    (values: number[], formatter: (value: number, index: number) => string, highlight: "max" | "min" = "max") =>
    ({ x, y, width, value, index }: any) => {
      const numericValue = Number(value);
      return (
        <text
          x={x + width / 2}
          y={y - 8}
          textAnchor="middle"
          className={getChartLabelClassName(numericValue, values, { highlight })}
          {...getChartLabelStyle(numericValue, values, { highlight })}
        >
          {formatter(numericValue, index)}
        </text>
      );
    };

  return (
    <div id="section-audit-amount-effort" className="space-y-5">
      {/* 模块小标题 - 统一规范 */}
      <ReportSubsectionHeader title="2.1.1 金额时效" />

      {/* 文字总结区 */}
      <SummaryBox>
        <div className="space-y-2.5">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
               "[[二季度总拦截金额]]：累计拦截 [[2.72]]；6月受[[世界杯赛事]]驱动回升至 [[1.046]]。受前期严管及对[[批量团伙]]直接[[扣除本金]]威慑影响，二季度环比一季度下降 [[0.35]]。",
            )}
          </div>
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "[[二季度平均审核时长]]：依托[[系统分流]]与[[智能派单]]，二季度[[平均人工审核时长]]稳定在 [[0:08:45]]；6月单量达 [[300.77w单]] 峰值下，审核时效平稳可控。",
            )}
          </div>
        </div>
      </SummaryBox>

      {/* 图表展示区 - 统一结构规范：标题 + 说明 + 图例 + 图表 + 备注 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* 左卡片: 26年二季度总拦截金额 */}
        <ReportChartCard
          title="二季度拦截金额月度走势"
          value="2.72"
          description="二季度累计拦截金额 2.72，6月受世界杯赛事驱动达到 1.046 峰值；强化对批量黑产直接扣除本金，威慑效应显著。"
        >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={amountData} margin={chartMargins.hiddenAxis}>
                <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
                <YAxis hide domain={[0, 1.5]} />
                <Bar
                  dataKey="amount"
                  fill={chartSeriesColors.secondary}
                  radius={chartBarRadius.standard}
                  barSize={chartBarSize.single}
                  isAnimationActive={false}
                  label={renderTopLabel(amountValues, (value) => value.toFixed(3))}
                />
              </BarChart>
            </ResponsiveContainer>
        </ReportChartCard>

        {/* 右卡片: 26年二季度平均审核时长 */}
        <ReportChartCard
          title="二季度平均人工审核时长"
          value="0:08:45"
          description="依托系统派单分流，平均人工审核时长稳定在 0:08:45；6月单量达 300.77万单，时效依然平稳可控。"
          legend={
            <ReportChartLegend
              items={[
                { label: "人工审单量 (万单)", color: chartSeriesColors.secondary, shape: "rect" },
                { label: "平均审核时长 (分:秒)", color: chartSeriesColors.trend, shape: "line" },
              ]}
            />
          }
        >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={effortData} margin={chartMargins.hiddenAxis}>
                <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
                <YAxis yAxisId="volume" hide domain={[0, 900]} />
                <YAxis yAxisId="duration" hide domain={[0, 13.5]} />
                <Bar
                  yAxisId="volume"
                  dataKey="volume"
                  fill={chartSeriesColors.secondary}
                  radius={chartBarRadius.standard}
                  barSize={chartBarSize.single}
                  isAnimationActive={false}
                  label={renderTopLabel(volumeValues, (value) => value.toFixed(2))}
                />
                <Line
                  yAxisId="duration"
                  type="monotone"
                  dataKey="durationVal"
                  stroke={chartSeriesColors.trend}
                  strokeWidth={2.5}
                  isAnimationActive={false}
                  dot={{ r: 4, fill: "#ffffff", stroke: chartSeriesColors.trend, strokeWidth: 2 }}
                  label={({ x, y, index }) => (
                    <text
                      x={x}
                      y={y - 10}
                      textAnchor="middle"
                      className={getChartLabelClassName(effortData[index].durationVal, durationValues, { highlight: "min" })}
                      {...getChartLabelStyle(effortData[index].durationVal, durationValues, { highlight: "min" })}
                    >
                      {effortData[index].duration}
                    </text>
                  )}
                />
              </ComposedChart>
            </ResponsiveContainer>
        </ReportChartCard>
      </div>
    </div>
  );
};
