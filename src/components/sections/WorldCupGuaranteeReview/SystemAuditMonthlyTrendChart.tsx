import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { ReportChartCard } from "../../ReportSections";
import {
  chartAxisTick,
  chartColors,
  chartBarRadius,
} from "./chartStyles";

// 2026年1月至9月系统出单趋势与错误率月度数据
const monthlyTrendData = [
  {
    month: "2026-01",
    monthLabel: "1月",
    autoRate: 28.5,
    autoRateLabel: "28.5%",
    errorRate: 0.14,
    errorRateLabel: "0.14%",
  },
  {
    month: "2026-02",
    monthLabel: "2月",
    autoRate: 31.0,
    autoRateLabel: "31.0%",
    errorRate: 0.13,
    errorRateLabel: "0.13%",
  },
  {
    month: "2026-03",
    monthLabel: "3月",
    autoRate: 34.2,
    autoRateLabel: "34.2%",
    errorRate: 0.12,
    errorRateLabel: "0.12%",
  },
  {
    month: "2026-04",
    monthLabel: "4月",
    autoRate: 37.0,
    autoRateLabel: "37.0%",
    errorRate: 0.11,
    errorRateLabel: "0.11%",
  },
  {
    month: "2026-05",
    monthLabel: "5月",
    autoRate: 40.2,
    autoRateLabel: "40.2%",
    errorRate: 0.10,
    errorRateLabel: "0.10%",
  },
  {
    month: "2026-06",
    monthLabel: "6月",
    autoRate: 42.5,
    autoRateLabel: "42.5%",
    errorRate: 0.09,
    errorRateLabel: "0.09%",
  },
  {
    month: "2026-07",
    monthLabel: "7月",
    autoRate: 43.8,
    autoRateLabel: "43.8%",
    errorRate: 0.09,
    errorRateLabel: "0.09%",
  },
  {
    month: "2026-08",
    monthLabel: "8月",
    autoRate: 45.0,
    autoRateLabel: "45.0%",
    errorRate: 0.08,
    errorRateLabel: "0.08%",
  },
  {
    month: "2026-09",
    monthLabel: "9月",
    autoRate: 64.2,
    autoRateLabel: "64.2%",
    errorRate: 0.08,
    errorRateLabel: "0.08%",
  },
];

const renderBarLabel = ({ x, y, width, value, index }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || value === undefined) {
    return null;
  }
  const isLast = index === monthlyTrendData.length - 1;
  const centerX = x + width / 2;

  return (
    <text
      x={centerX}
      y={y - 8}
      textAnchor="middle"
      fill={isLast ? "#1d4ed8" : "#334155"}
      fontSize={isLast ? 13.5 : 12}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={isLast ? 900 : 700}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinejoin="round"
    >
      {value}
    </text>
  );
};

const renderLineLabel = ({ x, y, value, index }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || value === undefined) {
    return null;
  }
  const isLast = index === monthlyTrendData.length - 1;

  return (
    <text
      x={x}
      y={y - 10}
      textAnchor="middle"
      fill={isLast ? "#b91c1c" : "#7f1d1d"}
      fontSize={11.5}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={750}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinejoin="round"
    >
      {value}
    </text>
  );
};

const renderCustomLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-3 text-sm text-slate-800">
    <div className="flex items-center gap-2 font-bold text-blue-900">
      <span className="h-3 w-3 rounded-xs bg-blue-600" />
      <span>系统出单比例 (%)</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-red-700">
      <span className="h-2.5 w-5 bg-red-600 rounded-full inline-block" />
      <span>系统错误率 (%)</span>
    </div>
  </div>
);

export const SystemAuditMonthlyTrendChart: React.FC = () => {
  return (
    <ReportChartCard
      title="系统出单趋势对比（2026.01 ~ 2026.09）"
      description={
        <span>
          2026年1月至9月，<strong>系统出单比例</strong>由 <strong>28.5% 稳步攀升至 64.2%</strong>（9月30日全量开启达 80.0%）；同时 <strong>系统错误率持续压降并稳定在 0.08% 极低安全水平</strong>，实现了“出单规模大幅扩张”与“极低差错资损”的兼顾。
        </span>
      }
      bodyHeight="h-[460px]"
      footnote="注：数据周期为 2026年1月至2026年9月。左轴柱状图代表系统自动出单比例（%），右轴折线图代表系统审核错误率（%）。"
    >
      <div className="flex flex-col h-full justify-between">
        {/* 核心指标看板：2 大核心数据点 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3 border-b border-slate-200">
          {/* 指标 1：系统出单比例 */}
          <div className="bg-blue-50/60 p-2.5 sm:p-3 border border-blue-200 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-blue-900">系统出单比例</div>
              <div className="text-xs text-blue-800/80 mt-0.5">从 28.5% 提升至 64.2%（全量达 80.0%）</div>
            </div>
            <div className="text-right font-mono">
              <span className="text-lg sm:text-xl font-black text-blue-950">28.5% ➔ 64.2%</span>
              <div className="text-xs font-bold text-emerald-700">+35.7% 增幅</div>
            </div>
          </div>

          {/* 指标 2：系统错误率 */}
          <div className="bg-slate-50 p-2.5 sm:p-3 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-800">系统错误率（差错率）</div>
              <div className="text-xs text-slate-600 mt-0.5">从 0.14% 持续收敛至 0.08%</div>
            </div>
            <div className="text-right font-mono">
              <span className="text-lg sm:text-xl font-black text-slate-900">0.14% ➔ 0.08%</span>
              <div className="text-xs font-bold text-emerald-700">-42.9% 压降 (稳定安全)</div>
            </div>
          </div>
        </div>

        {/* 双轴图表 */}
        <div className="h-[340px] pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={monthlyTrendData}
              barSize={28}
              margin={{ top: 28, right: 35, left: 10, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="monthLabel"
                stroke={chartColors.ink}
                tick={{ ...chartAxisTick, fontSize: 13 }}
              />
              
              {/* 左 Y 轴：系统出单比例 (%) */}
              <YAxis
                yAxisId="left"
                stroke={chartColors.blue}
                tick={chartAxisTick}
                tickFormatter={(val) => `${val}%`}
                domain={[0, 80]}
                ticks={[0, 20, 40, 60, 80]}
              />

              {/* 右 Y 轴：系统错误率 (%) */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#b91c1c"
                tick={{ ...chartAxisTick, fill: "#b91c1c", fontSize: 12 }}
                tickFormatter={(val) => `${val}%`}
                domain={[0, 0.25]}
                ticks={[0, 0.05, 0.10, 0.15, 0.20, 0.25]}
              />

              <Tooltip
                formatter={(val: any, name: string) => {
                  if (name === "系统出单比例") return [`${val}%`, "系统出单比例"];
                  if (name === "系统错误率") return [`${val}%`, "系统错误率"];
                  return [val, name];
                }}
                labelFormatter={(label) => `2026年 ${label}`}
              />

              <Legend content={renderCustomLegend} />

              {/* 柱状图：系统出单比例 */}
              <Bar
                yAxisId="left"
                dataKey="autoRate"
                name="系统出单比例"
                fill="#1d4ed8"
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                <LabelList dataKey="autoRateLabel" content={renderBarLabel} />
              </Bar>

              {/* 折线图：系统错误率 */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="errorRate"
                name="系统错误率"
                stroke="#b91c1c"
                strokeWidth={3}
                dot={{ r: 4.5, fill: "#b91c1c", stroke: "#ffffff", strokeWidth: 2 }}
                activeDot={{ r: 6.5 }}
                isAnimationActive={false}
              >
                <LabelList dataKey="errorRateLabel" content={renderLineLabel} />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ReportChartCard>
  );
};
