import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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

// 各角色自身在“8月日均、9月日均、9月30日（全量开启）”三个核心节点的纵向演进对比
const auditStructureData = [
  {
    role: "外包人工审核",
    tag: "差错率 1.82%~1.95%",
    august: 23.9,
    augustLabel: "23.9%",
    september: 16.7,
    septemberLabel: "16.7%",
    sept30: 7.5,
    sept30Label: "7.5%",
  },
  {
    role: "总部人工审核",
    tag: "差错率 0.69%~0.78%",
    august: 44.0,
    augustLabel: "44.0%",
    september: 40.0,
    septemberLabel: "40.0%",
    sept30: 48.1,
    sept30Label: "48.1%",
  },
  {
    role: "系统自动放行",
    tag: "差错率 0.08%~0.15%",
    august: 32.1,
    augustLabel: "32.1%",
    september: 43.3,
    septemberLabel: "43.3%",
    sept30: 44.4,
    sept30Label: "44.4%",
  },
];

// 配色体系：弱化 8月/9月 作为参照底色，突出 9月30日（全量开启）作为核心聚焦点
const timelineColors = {
  august: "#cbd5e1",      // 8月基准：浅石板灰（弱对比背景色）
  september: "#94a3b8",   // 9月过渡：中灰（次级对比弱化色）
  sept30: "#1d4ed8",      // 9月30日全量：高饱和皇家科技蓝（强对比焦点色）
};

const renderBarLabel = (isHighlight: boolean = false) => ({ x, y, width, value }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || !value) {
    return null;
  }

  const text = String(value).trim();
  const centerX = x + width / 2;

  if (isHighlight) {
    return (
      <text
        x={centerX}
        y={y - 8}
        textAnchor="middle"
        fill="#1e3a8a"
        fontSize={13.5}
        fontFamily="var(--font-mono, monospace)"
        fontWeight={900}
        paintOrder="stroke"
        stroke="#ffffff"
        strokeWidth={3}
        strokeLinejoin="round"
      >
        {text}
      </text>
    );
  }

  return (
    <text
      x={centerX}
      y={y - 8}
      textAnchor="middle"
      fill="#64748b"
      fontSize={12}
      fontFamily="var(--font-mono, monospace)"
      fontWeight={650}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinejoin="round"
    >
      {text}
    </text>
  );
};

const timelineLegendItems = [
  { label: "8月日均占比（参考）", color: timelineColors.august, isBold: false },
  { label: "9月日均占比（参考）", color: timelineColors.september, isBold: false },
  { label: "9月30日全量开启占比（核心）", color: timelineColors.sept30, isBold: true },
];

const renderTimelineLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-3 text-sm text-slate-800">
    {timelineLegendItems.map((item) => (
      <div key={item.label} className={`flex items-center gap-2 ${item.isBold ? "font-bold text-blue-900" : "font-medium text-slate-600"}`}>
        <span
          className="h-3 w-3 rounded-xs"
          style={{ backgroundColor: item.color }}
        />
        <span>{item.label}</span>
      </div>
    ))}
  </div>
);

export const SmartDispatchOrderStructure: React.FC = () => {
  return (
    <ReportChartCard
      title="各角色订单结构自身演进趋势对比（8月日均 vs 9月日均 vs 9月30日全量）"
      description={
        <span>
          聚焦各角色自身纵向对比：<strong>外包人工审核</strong> 占比从 <strong>23.9% 持续压降至 7.5%</strong>（高差错率审单基本退出）；<strong>系统自动放行</strong> 占比从 <strong>32.1% 强劲拉升至 44.4%</strong>（替代主力成型）；<strong>总部人工审核</strong> 由 44.0% 平移至 48.1%，人均专注承接复杂核心单。
        </span>
      }
      bodyHeight="h-[460px]"
      footnote="注：横轴为主体角色（外包、总部、系统），柱子展示每个主体自身在 8月日均、9月日均及9月30日全量开启时的审核单量占比（%），上方为各角色审核差错率。"
    >
      <div className="flex flex-col h-full justify-between">
        {/* 审核质量/差错率对比卡片 - 置于图表上方 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-3 border-b border-slate-200">
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">外包人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 1.82% ~ 1.95%</div>
            <div className="text-xs text-emerald-700 font-bold mt-0.5 font-mono">占比 23.9% ➔ 7.5%（大幅压降）</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">总部人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.69% ~ 0.78%</div>
            <div className="text-xs text-slate-600 font-bold mt-0.5 font-mono">占比 44.0% ➔ 48.1%（稳定承接）</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">系统自动放行</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.08% ~ 0.15%</div>
            <div className="text-xs text-blue-700 font-bold mt-0.5 font-mono">占比 32.1% ➔ 44.4%（倍增跃升）</div>
          </div>
        </div>

        <div className="h-[340px] pt-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={auditStructureData}
              barSize={28}
              barGap={10}
              margin={{ top: 28, right: 30, left: 0, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="role"
                stroke={chartColors.ink}
                tick={{ ...chartAxisTick, fontSize: 13.5 }}
              />
              
              {/* Y轴：审核占比(%) */}
              <YAxis
                stroke={chartColors.ink}
                tick={chartAxisTick}
                tickFormatter={(val) => `${val}%`}
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
              />

              <Legend content={renderTimelineLegend} />

              {/* 柱状图：每个角色内部三阶段对比（8月日均 -> 9月日均 -> 9月30日） */}
              <Bar
                dataKey="august"
                name="8月日均占比"
                fill={timelineColors.august}
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                <LabelList dataKey="augustLabel" content={renderBarLabel(false)} />
              </Bar>
              <Bar
                dataKey="september"
                name="9月日均占比"
                fill={timelineColors.september}
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                <LabelList dataKey="septemberLabel" content={renderBarLabel(false)} />
              </Bar>
              <Bar
                dataKey="sept30"
                name="9月30日（全量开启）占比"
                fill={timelineColors.sept30}
                radius={chartBarRadius.standard}
                isAnimationActive={false}
              >
                <LabelList dataKey="sept30Label" content={renderBarLabel(true)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ReportChartCard>
  );
};
