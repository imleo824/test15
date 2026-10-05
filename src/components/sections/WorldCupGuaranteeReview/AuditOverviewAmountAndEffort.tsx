import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ComposedChart, Line } from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportChartCard, ReportSectionHeader } from "../../ReportSections";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartSeriesColors,
} from "./chartStyles";

export const AuditOverviewAmountAndEffort: React.FC = () => {
  // Chart 1: 26年三季度总防范金 (月度数据 2026/4 ~ 2026/9，Q3 累计 2.98e)
  const amountData = [
    { month: "2026/4", amount: 0.868 },
    { month: "2026/5", amount: 0.810 },
    { month: "2026/6", amount: 1.046 },
    { month: "2026/7", amount: 1.038 },
    { month: "2026/8", amount: 1.057 },
    { month: "2026/9", amount: 0.882 },
  ];

  // Chart 2: 26年三季度平均审核时长 (月度双轴数据: 人工单量 & 人工时效，Q3 均值 09:15)
  const effortData = [
    { month: "2026/4", volume: 228.76, duration: "09:54", durationVal: 9.90 },
    { month: "2026/5", volume: 224.03, duration: "08:07", durationVal: 8.12 },
    { month: "2026/6", volume: 300.77, duration: "08:14", durationVal: 8.23 },
    { month: "2026/7", volume: 329.37, duration: "09:16", durationVal: 9.27 },
    { month: "2026/8", volume: 271.85, duration: "08:02", durationVal: 8.03 },
    { month: "2026/9", volume: 201.92, duration: "10:28", durationVal: 10.47 },
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
    <div id="section-audit-amount-effort" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.1 拦截金额与处理时效" />

      {/* 文字总结区 */}
      <SummaryBox>
        <div className="space-y-2.5">
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            <strong className="text-slate-950 font-bold">整体拦截金额：</strong>
            {highlightNumbers(
              "整体总计金额在 [[2.98E]]，其中 8 月最高为 [[1.057E]]，后续呈现持续减少。此部分主要系 8 月部分代理拦截提升原因，金额对比世界杯期间有所上涨，后续 9 月落回，数据正常。"
            )}
          </div>
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            <strong className="text-slate-950 font-bold">平均审核时长：</strong>
            {highlightNumbers(
              "三季度整体平均人工审核时长为 [[09:15]]，整体处于[[良性审核时间范围]]，后续将持续关注与提升。"
            )}
          </div>
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            <strong className="text-slate-950 font-bold">平均审核单量：</strong>
            {highlightNumbers(
              "随着世界杯赛事结束以及系统出单比例持续提升，[[有效释放人工审核压力]]与审核单量，后续呈现自然回落，属于正常数据表现。"
            )}
          </div>
        </div>
      </SummaryBox>

      {/* 图表展示区 - 统一结构规范：标题 + 说明 + 图例 + 图表 + 备注 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* 左卡片: 26年第三季度总防范金 */}
        <ReportChartCard
          title="总防范金"
          value="2.98E"
        >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={amountData} margin={{ top: 40, right: 20, left: 20, bottom: 10 }}>
                <XAxis
                  dataKey="month"
                  interval={0}
                  padding={{ left: 15, right: 15 }}
                  tick={chartAxisTick}
                  axisLine={{ stroke: chartColors.ink }}
                  tickLine={false}
                />
                <YAxis hide domain={[0, 1.4]} />
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

        {/* 右卡片: 26年第三季度平均审核时长 */}
        <ReportChartCard
          title="平均时长"
          value="09:15"
        >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={effortData} margin={{ top: 48, right: 20, left: 20, bottom: 10 }}>
                <XAxis
                  dataKey="month"
                  interval={0}
                  padding={{ left: 15, right: 15 }}
                  tick={chartAxisTick}
                  axisLine={{ stroke: chartColors.ink }}
                  tickLine={false}
                />
                {/* 调整单量 Y 轴 Range 使柱状图处于下半区，彻底与折线及文本点分离 */}
                <YAxis yAxisId="volume" hide domain={[0, 750]} />
                {/* 调整时效 Y 轴 Range 使折线点拉高至上半区 */}
                <YAxis yAxisId="duration" hide domain={[0, 12]} />
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
                      y={y - 12}
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
