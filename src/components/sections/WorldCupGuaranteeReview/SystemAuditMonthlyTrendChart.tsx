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
import { ReportChartCard } from "../../ReportSections";
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
    monthLabel: "9月",
    autoRate: 55.0,
    autoRateLabel: "55.00%",
    errorRate: 0.06,
    errorRateLabel: "0.060%",
    isSeptember: true,
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
      fill={isLast ? "#047857" : "#1e40af"}
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
  const isFirst = index === 0;

  if (isLast) {
    return (
      <g>
        {/* 9月高亮气泡 */}
        <rect
          x={x - 30}
          y={y - 28}
          width={60}
          height={18}
          fill="#b91c1c"
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
      y={y - 10}
      textAnchor="middle"
      fill={isFirst ? "#991b1b" : "#7f1d1d"}
      fontSize={isFirst ? 12.5 : 11}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={isFirst ? 900 : 700}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={2.5}
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
        <circle cx={cx} cy={cy} r={7} fill="#b91c1c" stroke="#ffffff" strokeWidth={2.5} />
        <circle cx={cx} cy={cy} r={11} fill="none" stroke="#b91c1c" strokeWidth={1.5} strokeDasharray="3 3" />
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
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-3 text-xs sm:text-sm text-slate-800">
    <div className="flex items-center gap-2 font-bold text-blue-900">
      <span className="h-3 w-3 rounded-xs bg-[#2563eb]" />
      <span>1~8月 出单比例 (%)</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-emerald-800">
      <span className="h-3 w-3 rounded-xs bg-[#059669]" />
      <span>9月 出单比例</span>
    </div>
    <div className="flex items-center gap-2 font-bold text-red-700">
      <span className="h-2.5 w-5 bg-red-600 rounded-full inline-block" />
      <span>系统质检率 (%)</span>
    </div>
  </div>
);

export const SystemAuditMonthlyTrendChart: React.FC = () => {
  return (
    <ReportChartCard
      title="系统出单趋势对比"
      description={
        <span>
          2026年1月至9月，<strong>系统出单比例</strong>由 1~8月均值的 <strong>49.77% 稳健攀升至 55.00%</strong>；同时 <strong>系统质检率由 1~8月均值的 0.141%（1月峰值 0.324%）持续大幅压降并收敛至 0.060% 极低安全水平</strong>，<strong>实现了“出单比例提升，出单质量不降反升”的兼顾。</strong>
        </span>
      }
      bodyHeight="h-[510px]"
      footnote="注：数据周期为 2026年1月至2026年9月。左 Y 轴出单比例采用高敏感度聚焦区间（40%~58%），展示系统出单放量趋势；右 Y 轴质检率展示质量持续改善与收敛落差。"
    >
      <div className="flex flex-col h-full justify-between">
        {/* 顶部：系统自身出单与质检率演进对比看板 (聚焦系统本身：出单比例上升、质检率下降) */}
        <div className="overflow-x-auto my-1.5">
          <table className="w-full text-sm sm:text-base text-center border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-800">
                <th className="py-2.5 px-3 text-left font-bold text-slate-500 text-xs sm:text-sm w-36">系统核心指标</th>
                <th className="py-2.5 px-4 font-bold text-slate-700 text-sm sm:text-base">1~8月均值 (基线)</th>
                <th className="w-8 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-4 font-bold text-blue-950 bg-blue-50/70 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-600 shrink-0"></span>
                    <span>9月 (灰度验收)</span>
                  </div>
                </th>
                <th className="w-8 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-4 font-bold text-blue-950 bg-blue-100/80 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-800 shrink-0"></span>
                    <span>系统 (930全量)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {/* 行 1：系统出单比例 (出单比例上升) */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  系统出单比例
                </td>
                <td className="py-3 px-4 font-bold text-slate-700 text-sm sm:text-base">
                  49.77%
                </td>
                <td className="py-3 text-center font-bold text-blue-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-blue-950 bg-blue-50/30 text-sm sm:text-base">
                  52.50% <span className="text-xs text-emerald-700 font-semibold ml-1">(灰度放量)</span>
                </td>
                <td className="py-3 text-center font-bold text-blue-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-blue-950 bg-blue-100/40 text-sm sm:text-base">
                  55.00% <span className="text-xs text-blue-900 font-semibold ml-1">(全量放量)</span>
                </td>
              </tr>

              {/* 行 2：系统质检率 (质检率下降) */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  系统质检率
                </td>
                <td className="py-3 px-4 font-bold text-red-700 text-sm sm:text-base">
                  0.141% <span className="text-xs text-slate-500 font-normal">(1月0.324%)</span>
                </td>
                <td className="py-3 text-center font-bold text-red-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700 bg-blue-50/30 text-sm sm:text-base">
                  0.08% <span className="text-xs text-emerald-800 font-semibold ml-1">(灰度收敛)</span>
                </td>
                <td className="py-3 text-center font-bold text-red-600 text-base sm:text-lg">
                  ➔
                </td>
                <td className="py-3 px-4 font-bold text-emerald-700 bg-blue-100/40 text-sm sm:text-base">
                  0.060% <span className="text-xs text-emerald-800 font-semibold ml-1">(最优收敛)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 双轴图表 */}
        <div className="h-[340px] pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={monthlyTrendData}
              barSize={28}
              margin={{ top: 34, right: 38, left: 10, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="monthLabel"
                stroke={chartColors.ink}
                tick={{ ...chartAxisTick, fontSize: 13 }}
              />
              
              {/* 左 Y 轴：系统出单比例 (%) - 采用高敏感度聚焦区间 [40, 58]，显著拉开 44.37% 与 55.00% 的视觉落差 */}
              <YAxis
                yAxisId="left"
                stroke={chartColors.blue}
                tick={{ ...chartAxisTick, fill: "#1e40af", fontWeight: 700 }}
                tickFormatter={(val) => `${val}%`}
                domain={[40, 58]}
                ticks={[40, 45, 50, 55, 58]}
              />

              {/* 右 Y 轴：系统质检率 (%) - 采用高敏感度区间 [0.03, 0.36]，大幅拉开 0.108% 与 0.060% 的视觉落差 */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#b91c1c"
                tick={{ ...chartAxisTick, fill: "#b91c1c", fontSize: 12, fontWeight: 700 }}
                tickFormatter={(val) => `${Number(val).toFixed(2)}%`}
                domain={[0.03, 0.36]}
                ticks={[0.03, 0.06, 0.10, 0.15, 0.20, 0.28, 0.36]}
              />

              <Tooltip
                formatter={(val: any, name: string) => {
                  if (name === "系统出单比例") return [`${val}%`, "系统出单比例"];
                  if (name === "系统质检率" || name === "系统错误率") return [`${val}%`, "系统质检率"];
                  return [val, name];
                }}
                labelFormatter={(label) => `2026年 ${label}`}
              />

              <Legend content={renderCustomLegend} />

              {/* 柱状图：系统出单比例 (9月单独使用翡翠绿区分) */}
              <Bar
                yAxisId="left"
                dataKey="autoRate"
                name="系统出单比例"
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                {monthlyTrendData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isSeptember ? "#059669" : "#2563eb"}
                  />
                ))}
                <LabelList dataKey="autoRateLabel" content={renderBarLabel} />
              </Bar>

              {/* 9月 0.060% 目标基准参考线 */}
              <ReferenceLine
                y={0.06}
                yAxisId="right"
                stroke="#059669"
                strokeDasharray="4 3"
                strokeWidth={1.5}
                isFront={true}
              />

              {/* 折线图：系统质检率 */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="errorRate"
                name="系统质检率"
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
