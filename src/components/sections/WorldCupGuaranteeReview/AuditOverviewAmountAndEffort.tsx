import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ComposedChart, Line } from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportChartCard, ReportChartLegend, ReportSectionHeader } from "../../ReportSections";
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
    <div id="section-audit-amount-effort" className="space-y-8">
      {/* 模块小标题 - 统一规范 */}
      <ReportSectionHeader title="2.1.1 金额时效" />

      {/* 文字总结区 */}
      <SummaryBox>
        <div className="space-y-3">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
               "[[二季度总拦截金额]]：累计为 [[2.72]]，6月达 [[1.046]]，[[世界杯期间]]有所提升，对比一季度下降 [[0.35]]，主要为[[批量团伙]]等力度增大，采用[[扣本金]]方式；随着对用户[[违规行为]]持续管控，已形成威慑力成效明显。",
            )}
          </div>
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "[[二季度平均时长]]：经过近一年的对[[系统]]、[[流程]]、[[派单]]、[[人员]]等综合优化，二季度整体[[平均人工时长]]为 [[0:08:45]]，对比一季度提升明显；在[[世界杯期间]]单量增加背景下，[[时效]]仍完成度较高。",
            )}
          </div>
        </div>
      </SummaryBox>

      {/* 图表展示区 - 统一结构规范：标题 + 说明 + 图例 + 图表 + 备注 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* 左卡片: 26年二季度总拦截金额 */}
        <ReportChartCard
          title="二季度拦截金额月度走势"
          subtitle="2026/1 - 2026/6 月度分布"
          value="2.72"
          description="二季度累计拦截金额 2.72，6月受世界杯赛事驱动达到 1.046 峰值；通过强化对黑产批量团伙直接扣除本金，管控威慑效应显著增强。"
          footnote="注：统计口径包含体育、代理、红利等全类别风控拦截处置金额。"
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
          subtitle="时效与审单总量走势"
          value="0:08:45"
          description="经系统派单分流与全流程优化，二季度整体平均人工审核时长稳固在 0:08:45；即使在6月单量激增至 300.77万单 背景下，时效依然平稳可控。"
          legend={
            <ReportChartLegend
              items={[
                { label: "人工审单量 (万单)", color: chartSeriesColors.secondary, shape: "rect" },
                { label: "平均审核时长 (分:秒)", color: chartSeriesColors.trend, shape: "line" },
              ]}
            />
          }
          footnote="注：柱状图代表月度人工审单总量，折线为工单接单至完成审核平均时长。"
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
