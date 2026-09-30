import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";
import { ReportChartCard } from "../../ReportSections";
import {
  chartAxisTick,
  chartColors,
  chartBarRadius,
  chartTooltipStyle,
} from "./chartStyles";

// 横坐标为三大角色（外包、总部、系统），每个角色包含 1月至9月（及9.30全量）所有月份的柱子
export interface RoleMonthlyData {
  role: string;
  tag: string;
  m1: number;
  m1Label: string;
  m2: number;
  m2Label: string;
  m3: number;
  m3Label: string;
  m4: number;
  m4Label: string;
  m5: number;
  m5Label: string;
  m6: number;
  m6Label: string;
  m7: number;
  m7Label: string;
  m8: number;
  m8Label: string;
  m9: number;
  m9Label: string;
  m9_30: number;
  m9_30Label: string;
}

export const roleGroupedData: RoleMonthlyData[] = [
  {
    role: "外包",
    tag: "1~8月均质检率 1.91%",
    m1: 9.80,
    m1Label: "9.80%",
    m2: 9.04,
    m2Label: "9.04%",
    m3: 11.93,
    m3Label: "11.93%",
    m4: 11.03,
    m4Label: "11.03%",
    m5: 10.39,
    m5Label: "10.39%",
    m6: 7.73,
    m6Label: "7.73%",
    m7: 9.14,
    m7Label: "9.14%",
    m8: 11.92,
    m8Label: "11.92%",
    m9: 16.7,
    m9Label: "16.7%",
    m9_30: 7.5,
    m9_30Label: "7.5%",
  },
  {
    role: "总部",
    tag: "1~8月均质检率 0.85%",
    m1: 37.55,
    m1Label: "37.55%",
    m2: 45.36,
    m2Label: "45.36%",
    m3: 37.60,
    m3Label: "37.60%",
    m4: 38.64,
    m4Label: "38.64%",
    m5: 35.14,
    m5Label: "35.14%",
    m6: 44.02,
    m6Label: "44.02%",
    m7: 42.85,
    m7Label: "42.85%",
    m8: 39.71,
    m8Label: "39.71%",
    m9: 40.0,
    m9Label: "40.0%",
    m9_30: 48.1,
    m9_30Label: "48.1%",
  },
  {
    role: "系统",
    tag: "1~8月均质检率 0.14%",
    m1: 52.66,
    m1Label: "52.66%",
    m2: 45.61,
    m2Label: "45.61%",
    m3: 50.47,
    m3Label: "50.47%",
    m4: 50.33,
    m4Label: "50.33%",
    m5: 54.47,
    m5Label: "54.47%",
    m6: 48.25,
    m6Label: "48.25%",
    m7: 48.01,
    m7Label: "48.01%",
    m8: 48.37,
    m8Label: "48.37%",
    m9: 43.3,
    m9Label: "43.3%",
    m9_30: 44.4,
    m9_30Label: "44.4%",
  },
];

// 1月至9月（含9.30全量）月份柱状图配色体系：1月~9月全为灰色系，仅 9.30全量 采用专属科技蓝高亮
export const monthBarConfigs = [
  { key: "m1", name: "1月", color: "#e2e8f0", hasBorder: true },
  { key: "m2", name: "2月", color: "#cbd5e1" },
  { key: "m3", name: "3月", color: "#cbd5e1" },
  { key: "m4", name: "4月", color: "#94a3b8" },
  { key: "m5", name: "5月", color: "#94a3b8" },
  { key: "m6", name: "6月", color: "#64748b" },
  { key: "m7", name: "7月", color: "#64748b" },
  { key: "m8", name: "8月", color: "#475569" },
  { key: "m9", name: "9月", color: "#334155" },
  { key: "m9_30", name: "9.30全量", color: "#1d4ed8", isKey: true },
];

// 自定义 Tooltip：悬浮展示某角色全部月份的对比数据
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const roleItem = roleGroupedData.find((d) => d.role === label);
    return (
      <div style={chartTooltipStyle} className="p-3 space-y-2 min-w-[240px]">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <span className="font-bold text-slate-900 text-sm">{label}审核 · 月度演进明细</span>
          <span className="text-[11px] text-slate-800 font-mono font-bold">
            {roleItem?.tag}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          {payload.map((item: any) => {
            const isSpecial = item.dataKey === "m9_30";
            const valText = typeof item.value === "string" && item.value.endsWith("%") ? item.value : `${item.value}%`;
            return (
              <div key={item.dataKey} className={`flex items-center justify-between ${isSpecial ? "font-bold text-blue-900" : ""}`}>
                <span className="flex items-center gap-1 text-slate-600">
                  <span
                    className="w-2 h-2 rounded-xs shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={isSpecial ? "text-blue-950 font-bold" : ""}>{item.name}:</span>
                </span>
                <span className={`font-mono font-bold ${isSpecial ? "text-blue-700" : "text-slate-900"}`}>{valText}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

// 仅 1月（起点基线）和 9.30（全量终点）展示柱顶具体数字
const renderKeyBarLabel = (monthKey: string) => (props: any) => {
  const { x, y, width, value } = props;
  const isShow = monthKey === "m1" || monthKey === "m9_30";
  if (!isShow || typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || !value) {
    return null;
  }

  const is930 = monthKey === "m9_30";
  const text = typeof value === "string" ? (value.endsWith("%") ? value : `${value}%`) : `${value}%`;
  const centerX = x + width / 2;

  return (
    <text
      x={centerX}
      y={y - 6}
      textAnchor="middle"
      fill={is930 ? "#1d4ed8" : "#475569"}
      fontSize={is930 ? 11.5 : 10.5}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={is930 ? 900 : 750}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinejoin="round"
    >
      {text}
    </text>
  );
};

// 自定义图例
const renderLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-3 text-xs text-slate-800">
    {monthBarConfigs.map((cfg) => (
      <div key={cfg.key} className="flex items-center gap-1.5 font-medium">
        <span
          className={`h-2.5 w-2.5 rounded-xs shrink-0 ${cfg.hasBorder ? "border border-slate-300" : ""}`}
          style={{ backgroundColor: cfg.color }}
        />
        <span className={cfg.isKey ? "font-bold text-blue-900 bg-blue-50 px-1 py-0.2" : "text-slate-600"}>
          {cfg.name}
        </span>
      </div>
    ))}
  </div>
);

export const SmartDispatchOrderStructure: React.FC = () => {
  return (
    <ReportChartCard
      title="出单结构趋势对比"
      description={
        <span>
          <strong>三大审核主体（外包 / 总部 / 系统）出单结构与质量演进：</strong>
          <strong>外包审核</strong> 占比从 1月的 <strong>9.80%</strong> 持续压降至 9.30全量的 <strong>7.5%</strong>（高质检率审单基本退出）；
          <strong>总部审核</strong> 稳定在 <strong>35.14% ~ 48.1%</strong> 专注承接高危与复杂核心单；
          <strong>系统自动审单</strong> 强劲跃升至 <strong>55.00%</strong>（主力放量全面成型）。
        </span>
      }
      bodyHeight="h-[510px]"
      footnote="注：横坐标为主体角色（外包、总部、系统），每个主体内部展示 1月至9月及 9月30日全量开启节点的所有月份对比柱子，直观展示三大主体月度占比的历史消长。"
    >
      <div className="flex flex-col h-full justify-between">
        {/* 顶部：极简轻量 3 列表格对比看板 (直接通过 > 和 < 进行指标对决) */}
        <div className="overflow-x-auto my-1.5">
          <table className="w-full text-sm sm:text-base text-center border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-800">
                <th className="py-2.5 px-3 text-left font-bold text-slate-500 text-xs sm:text-sm w-24">指标</th>
                <th className="py-2.5 px-3 font-bold text-slate-800 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 shrink-0"></span>
                    <span>外包 (1-8月均值)</span>
                  </div>
                </th>
                <th className="w-6 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-3 font-bold text-slate-800 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-slate-600 shrink-0"></span>
                    <span>总部 (1-8月均值)</span>
                  </div>
                </th>
                <th className="w-6 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-3 font-bold text-blue-950 bg-blue-50/70 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-600 shrink-0"></span>
                    <span>系统 (1-8月均值)</span>
                  </div>
                </th>
                <th className="w-6 py-2.5 text-slate-400 font-mono"></th>
                <th className="py-2.5 px-3 font-bold text-blue-950 bg-blue-100/80 text-sm sm:text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 bg-blue-800 shrink-0"></span>
                    <span>系统 (930全量)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {/* 行 1：质检率 */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  质检率
                </td>
                <td className="py-3 px-3 font-bold text-red-700 text-sm sm:text-base">
                  1.91%
                </td>
                <td className="py-3 text-center font-bold text-red-600 text-base">
                  &gt;
                </td>
                <td className="py-3 px-3 font-bold text-slate-900 text-sm sm:text-base">
                  0.85%
                </td>
                <td className="py-3 text-center font-bold text-red-600 text-base">
                  &gt;
                </td>
                <td className="py-3 px-3 font-bold text-emerald-800 bg-blue-50/30 text-sm sm:text-base">
                  0.14%
                </td>
                <td className="py-3 text-center font-bold text-emerald-600 text-base">
                  ➔
                </td>
                <td className="py-3 px-3 font-bold text-emerald-700 bg-blue-100/40 text-sm sm:text-base">
                  0.060% <span className="text-xs font-bold text-emerald-800 ml-1">(最优)</span>
                </td>
              </tr>

              {/* 行 2：出单比例 */}
              <tr>
                <td className="py-3 px-3 text-left font-bold text-slate-900 text-sm">
                  出单比例
                </td>
                <td className="py-3 px-3 font-bold text-slate-700 text-sm sm:text-base">
                  10.12% 
                </td>
                <td className="py-3 text-center font-bold text-slate-400 text-base">
                  &lt;
                </td>
                <td className="py-3 px-3 font-bold text-slate-900 text-sm sm:text-base">
                  40.11%
                </td>
                <td className="py-3 text-center font-bold text-slate-400 text-base">
                  &lt;
                </td>
                <td className="py-3 px-3 font-bold text-blue-950 bg-blue-50/30 text-sm sm:text-base">
                  49.77%
                </td>
                <td className="py-3 text-center font-bold text-blue-600 text-base">
                  ➔
                </td>
                <td className="py-3 px-3 font-bold text-blue-950 bg-blue-100/40 text-sm sm:text-base">
                  55.00% <span className="text-xs font-bold text-blue-900 ml-1">(全量放量)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 图表展示区：横坐标为 外包 / 总部 / 系统，每个角色包含全部月份柱子 */}
        <div className="h-[340px] pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={roleGroupedData}
              barGap={3}
              barCategoryGap="20%"
              margin={{ top: 24, right: 20, left: -10, bottom: 6 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="role"
                stroke={chartColors.ink}
                tick={{ ...chartAxisTick, fontSize: 14, fontWeight: 800 }}
              />
              {/* 左 Y 轴：出单比例 (%) */}
              <YAxis
                yAxisId="left"
                stroke={chartColors.ink}
                tick={chartAxisTick}
                tickFormatter={(val) => `${val}%`}
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
              />

              {/* 右 Y 轴：质检率 (%) */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#b91c1c"
                tick={{ ...chartAxisTick, fill: "#b91c1c", fontSize: 12, fontWeight: 700 }}
                tickFormatter={(val) => `${val}%`}
                domain={[0, 2.5]}
                ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend} />

              {/* 每个角色内部的 10 个月份柱子 */}
              {monthBarConfigs.map((cfg) => (
                <Bar
                  key={cfg.key}
                  yAxisId="left"
                  dataKey={cfg.key}
                  name={cfg.name}
                  fill={cfg.color}
                  radius={chartBarRadius.standard}
                  isAnimationActive={false}
                >
                  {(cfg.key === "m1" || cfg.key === "m9_30") && (
                    <LabelList
                      dataKey={`${cfg.key}Label`}
                      content={renderKeyBarLabel(cfg.key)}
                    />
                  )}
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ReportChartCard>
  );
};

export default SmartDispatchOrderStructure;
