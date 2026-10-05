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
  Cell,
  ReferenceLine,
} from "recharts";
import { ReportBadge, ReportChartCard } from "../../ReportSections";
import { highlightNumbers } from "./utils";
import {
  chartAxisTick,
  chartColors,
  chartBarRadius,
} from "./chartStyles";

// 2026年1月至9月系统出单趋势与错误率月度数据（提取自实际运营报表）
const monthlyTrendData = [
  {
    month: "2026-01",
    monthLabel: "1月",
    autoRate: 52.66,
    autoRateLabel: "52.66%",
    errorRate: 0.324,
    errorRateLabel: "0.324%",
    isSeptember: false,
  },
  {
    month: "2026-02",
    monthLabel: "2月",
    autoRate: 45.61,
    autoRateLabel: "45.61%",
    errorRate: 0.157,
    errorRateLabel: "0.157%",
    isSeptember: false,
  },
  {
    month: "2026-03",
    monthLabel: "3月",
    autoRate: 50.47,
    autoRateLabel: "50.47%",
    errorRate: 0.135,
    errorRateLabel: "0.135%",
    isSeptember: false,
  },
  {
    month: "2026-04",
    monthLabel: "4月",
    autoRate: 50.33,
    autoRateLabel: "50.33%",
    errorRate: 0.122,
    errorRateLabel: "0.122%",
    isSeptember: false,
  },
  {
    month: "2026-05",
    monthLabel: "5月",
    autoRate: 54.47,
    autoRateLabel: "54.47%",
    errorRate: 0.082,
    errorRateLabel: "0.082%",
    isSeptember: false,
  },
  {
    month: "2026-06",
    monthLabel: "6月",
    autoRate: 48.25,
    autoRateLabel: "48.25%",
    errorRate: 0.111,
    errorRateLabel: "0.111%",
    isSeptember: false,
  },
  {
    month: "2026-07",
    monthLabel: "7月",
    autoRate: 48.01,
    autoRateLabel: "48.01%",
    errorRate: 0.094,
    errorRateLabel: "0.094%",
    isSeptember: false,
  },
  {
    month: "2026-08",
    monthLabel: "8月",
    autoRate: 48.37,
    autoRateLabel: "48.37%",
    errorRate: 0.104,
    errorRateLabel: "0.104%",
    isSeptember: false,
  },
  {
    month: "2026-09",
    monthLabel: "9.30全量",
    autoRate: 65.00,
    autoRateLabel: "65.00%",
    errorRate: 0.072,
    errorRateLabel: "0.072%",
    isSeptember: true,
  },
];

// 计算 1月峰值 0.324% 到 9.30全量 0.072% 的直线连接轨迹（直观表达变化趋势）
const totalMonths = monthlyTrendData.length;
const startRate = monthlyTrendData[0].errorRate; // 0.324
const endRate = monthlyTrendData[totalMonths - 1].errorRate; // 0.072

export const monthlyTrendDataWithLinear = monthlyTrendData.map((d, i) => ({
  ...d,
  linearErrorRate: Number((startRate + ((endRate - startRate) * i) / (totalMonths - 1)).toFixed(4)),
}));

const renderBarLabel = ({ x, y, width, value, index }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || value === undefined) {
    return null;
  }
  const isLast = index === monthlyTrendData.length - 1;
  const centerX = x + width / 2;

  return (
    <text
      x={centerX}
      y={y + 16}
      textAnchor="middle"
      fill={isLast ? "#ffffff" : "#0f172a"}
      fontSize={isLast ? 12 : 11}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={800}
      paintOrder="stroke"
      stroke={isLast ? "#1d4ed8" : "#ffffff"}
      strokeWidth={2}
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
  const isFirst = index === 0;

  if (isLast) {
    return (
      <g>
        {/* 9月成就高亮气泡：质检率降至历史最低 0.072% */}
        <rect
          x={x - 30}
          y={y - 28}
          width={60}
          height={18}
          fill="#047857"
          rx={3}
        />
        <text
          x={x}
          y={y - 15}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={11.5}
          fontFamily="var(--font-mono, monospace)"
          fontWeight={900}
        >
          {value}
        </text>
      </g>
    );
  }

  return (
    <text
      x={x}
      y={y - 12}
      textAnchor="middle"
      fill={isFirst ? "#991b1b" : "#b91c1c"}
      fontSize={isFirst ? 12 : 11}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={800}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      {value}
    </text>
  );
};

const renderCustomDot = (props: any) => {
  const { cx, cy, index } = props;
  const isLast = index === monthlyTrendData.length - 1;
  if (isLast) {
    return (
      <g key={`dot-${index}`}>
        <circle cx={cx} cy={cy} r={7} fill="#047857" stroke="#ffffff" strokeWidth={2.5} />
        <circle cx={cx} cy={cy} r={11} fill="none" stroke="#047857" strokeWidth={1.5} strokeDasharray="3 3" />
      </g>
    );
  }
  return (
    <circle
      key={`dot-${index}`}
      cx={cx}
      cy={cy}
      r={4.5}
      fill="#b91c1c"
      stroke="#ffffff"
      strokeWidth={2}
    />
  );
};

const renderCustomLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 text-xs sm:text-sm text-slate-800">
    <div className="flex items-center gap-2 font-medium text-slate-600">
      <span className="h-3 w-3 rounded-xs bg-[#cbd5e1]" />
      <span>1~8月 出单比例 (%)</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-blue-900">
      <span className="h-3 w-3 rounded-xs bg-[#1d4ed8]" />
      <span>9.30全量 出单比例</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-red-700">
      <span className="h-2.5 w-5 bg-red-600 rounded-full inline-block" />
      <span>实际月度质检率</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-emerald-800">
      <span className="h-0.5 w-6 border-b-2 border-dashed border-emerald-600 inline-block" />
      <span>0.324% ➔ 0.072% 直线连接</span>
    </div>
  </div>
);

export const SystemAuditMonthlyTrendChart: React.FC = () => {
  return (
    <ReportChartCard
      title="系统出单趋势对比"
      description={highlightNumbers(
        "2026年1月至9月，系统出单比例由 1~8月均值 49.77% 提升至 9.30全量的 65.00%；同时系统质检率由 1~8月均值 0.141%（1月峰值 0.324%）稳步压降至 0.072%，实现了[[放量提升同时差错率持续走低]]的实际成效。"
      )}
      bodyHeight="h-[510px]"
      footnote="注：数据周期为 2026年1月至2026年9月（含 9.30 全量推全节点）。左 Y 轴出单比例展示系统出单放量趋势；右 Y 轴质检率展示质量持续改善与收敛落差。"
    >
      <div className="flex flex-col h-full justify-between">
        {/* 顶部：系统自身出单与质检率演进对比看板 (聚焦系统本身：1~8月基线 ➔ 930全量 ➔ 变化与比例) */}
        <div className="overflow-x-auto my-1.5">
          <table className="w-full text-sm sm:text-base text-center border-collapse report-data-table">
            <thead>
              <tr className="border-b border-slate-200 text-slate-800">
                <th className="py-2.5 px-3 text-left font-bold text-slate-500 text-xs sm:text-sm w-32">指标</th>
                <th className="py-2.5 px-4 font-bold text-slate-700 text-sm sm:text-base">1~8月 (均值基线)</th>
                <th className="w-6 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-4 font-bold text-blue-950 bg-blue-100/80 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-800 shrink-0"></span>
                    <span>930 (全量推全)</span>
                  </div>
                </th>
                <th className="py-2.5 px-4 font-bold text-slate-900 text-sm sm:text-base bg-slate-50 border-l border-slate-200/80">
                  变化
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {/* 行 1：系统出单比例 (出单比例上升) */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  出单比例
                </td>
                <td className="py-3 px-4 font-bold text-slate-700 text-sm sm:text-base font-mono">
                  49.77%
                </td>
                <td className="py-3 text-center font-bold text-blue-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-blue-950 bg-blue-100/40 text-sm sm:text-base font-mono">
                  65.00%
                </td>
                <td className="py-3 px-4 text-center font-mono bg-slate-50/60 border-l border-slate-200/80">
                  <div className="inline-flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-bold text-blue-950 text-sm sm:text-base">+15.23%</span>
                    <ReportBadge tone="blue" className="text-xs font-mono">
                      ↑ +30.60%
                    </ReportBadge>
                  </div>
                </td>
              </tr>

              {/* 行 2：系统质检率 (质检率下降) */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  质检率
                </td>
                <td className="py-3 px-4 font-bold text-slate-700 text-sm sm:text-base font-mono">
                  0.141% <span className="text-xs text-slate-500 font-normal font-sans">(1月 0.324%)</span>
                </td>
                <td className="py-3 text-center font-bold text-emerald-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700 bg-blue-100/40 text-sm sm:text-base font-mono">
                  0.072%
                </td>
                <td className="py-3 px-4 text-center font-mono bg-slate-50/60 border-l border-slate-200/80">
                  <div className="inline-flex items-center justify-center gap-1.5 flex-wrap">
                    <span className="font-bold text-emerald-800 text-sm sm:text-base">-0.069%</span>
                    <ReportBadge tone="green" className="text-xs font-mono">
                      ↓ -48.94%
                    </ReportBadge>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 双轴图表 */}
        <div className="h-[340px] pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={monthlyTrendDataWithLinear}
              barSize={28}
              margin={{ top: 34, right: 38, left: 10, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="monthLabel"
                stroke={chartColors.ink}
                tick={{ ...chartAxisTick, fontSize: 13 }}
              />
              
              {/* 左 Y 轴：系统出单比例 (%) - 采用聚焦区间 [40, 70] */}
              <YAxis
                yAxisId="left"
                stroke={chartColors.blue}
                tick={{ ...chartAxisTick, fill: "#1e40af", fontWeight: 700 }}
                tickFormatter={(val) => `${val}%`}
                domain={[40, 70]}
                ticks={[40, 45, 50, 55, 60, 65, 70]}
              />

              {/* 右 Y 轴：系统质检率 (%) */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#b91c1c"
                tick={{ ...chartAxisTick, fill: "#b91c1c", fontSize: 12, fontWeight: 700 }}
                tickFormatter={(val) => `${Number(val).toFixed(2)}%`}
                domain={[0.03, 0.36]}
                ticks={[0.03, 0.072, 0.12, 0.18, 0.25, 0.36]}
              />

              <Tooltip
                formatter={(val: any, name: string) => {
                  if (name === "系统出单比例") return [`${val}%`, "系统出单比例"];
                  if (name === "系统质检率" || name === "实际月度质检率") return [`${val}%`, "系统质检率"];
                  if (name === "0.324% ➔ 0.072% 直线连接") return [`${val}%`, "直线基准"];
                  return [val, name];
                }}
                labelFormatter={(label) => `2026年 ${label}`}
              />

              <Legend content={renderCustomLegend} />

              {/* 柱状图：系统出单比例 (930全量使用统一高亮蓝，1-8月统一为灰系) */}
              <Bar
                yAxisId="left"
                dataKey="autoRate"
                name="系统出单比例"
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                {monthlyTrendDataWithLinear.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isSeptember ? "#1d4ed8" : "#cbd5e1"}
                  />
                ))}
                <LabelList dataKey="autoRateLabel" content={renderBarLabel} />
              </Bar>

              {/* 9月 0.072% 目标基准参考线 */}
              <ReferenceLine
                y={0.072}
                yAxisId="right"
                stroke="#059669"
                strokeDasharray="4 3"
                strokeWidth={1.5}
                isFront={true}
              />

              {/* 0.324% (1月) ➔ 0.072% (9.30) 两点直线连接 */}
              <Line
                yAxisId="right"
                type="linear"
                dataKey="linearErrorRate"
                name="0.324% ➔ 0.072% 直线连接"
                stroke="#059669"
                strokeWidth={2.5}
                strokeDasharray="6 4"
                dot={(props: any) => {
                  const { cx, cy, index } = props;
                  if (typeof cx !== "number" || typeof cy !== "number") return null;
                  if (index === 0 || index === monthlyTrendDataWithLinear.length - 1) {
                    return (
                      <circle
                        key={`linear-dot-${index}`}
                        cx={cx}
                        cy={cy}
                        r={5.5}
                        fill="#059669"
                        stroke="#ffffff"
                        strokeWidth={2}
                      />
                    );
                  }
                  return null;
                }}
                isAnimationActive={false}
              />

              {/* 折线图：实际月度系统质检率 */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="errorRate"
                name="实际月度质检率"
                stroke="#b91c1c"
                strokeWidth={3.5}
                dot={renderCustomDot}
                activeDot={{ r: 8 }}
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
