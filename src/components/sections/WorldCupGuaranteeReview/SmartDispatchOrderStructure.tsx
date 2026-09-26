import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { stripDisplayUnits } from "./utils";
import { ReportChartCard } from "../../ReportSections";
import {
  chartAxisTick,
  chartColors,
  chartBarRadius,
  chartBarSize,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

// 4, 5, 6月 角色订单结构与审核质量数据（根据最新数据更新）
const auditStructureData = [
  {
    month: "4月",
    系统单量: 2299427,
    系统占比: 49.9,
    系统标签: "229.9 49.9%",
    总部单量: 1787020,
    总部占比: 38.8,
    总部标签: "178.7 38.8%",
    外包单量: 524514,
    外包占比: 11.4,
    外包标签: "52.5 11.4%",
    系统质量: 0.12,
    总部质量: 0.72,
    外包质量: 1.82,
  },
  {
    month: "5月",
    系统单量: 2545059,
    系统占比: 53.9,
    系统标签: "254.5 53.9%",
    总部单量: 1677872,
    总部占比: 35.5,
    总部标签: "167.8 35.5%",
    外包单量: 501346,
    外包占比: 10.6,
    外包标签: "50.1 10.6%",
    系统质量: 0.08,
    总部质量: 0.74,
    外包质量: 1.89,
  },
  {
    month: "6月",
    系统单量: 2803462,
    系统占比: 44.4,
    系统标签: "280.3 44.4%",
    总部单量: 3041486,
    总部占比: 48.1,
    总部标签: "304.1 48.1%",
    外包单量: 473317,
    外包占比: 7.5,
    外包标签: "47.3 7.5%",
    系统质量: 0.11,
    总部质量: 0.69,
    外包质量: 1.92,
  },
];

const renderAuditStructureLabel = () => ({ x, y, width, value }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || !value) {
    return null;
  }

  const text = String(value).trim();
  const parts = text.split(/\s+/);
  let rawAmount = parts[0] || text;
  let rawRatio = parts[1] || "";

  if (rawRatio.startsWith("(")) rawRatio = rawRatio.slice(1);
  if (rawRatio.endsWith(")")) rawRatio = rawRatio.slice(0, -1);

  const displayAmount = rawAmount.replace(/万/g, "").trim();
  const displayRatio = rawRatio ? (rawRatio.endsWith("%") ? rawRatio : `${rawRatio}%`) : "";

  const centerX = x + width / 2;

  return (
    <text
      className="order-structure-bar-label"
      x={centerX}
      y={y - 20}
      textAnchor="middle"
      fill="#0f172a"
      fontSize={14.5}
      fontWeight={900}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <tspan x={centerX}>{displayAmount}</tspan>
      {displayRatio ? (
        <tspan x={centerX} dy={15}>
          {displayRatio}
        </tspan>
      ) : null}
    </text>
  );
};

const renderQualityLabel = (dx: number = 0) => ({ x, y, value }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || value === undefined || value === null) {
    return null;
  }

  return (
    <text
      x={x + dx}
      y={y - 10}
      textAnchor="middle"
      fill="#0f172a"
      fontSize={14.5}
      fontWeight={900}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      {value}%
    </text>
  );
};

const orderStructureLegendItems = [
  { label: "系统", color: chartSeriesColors.primary },
  { label: "总部", color: chartSeriesColors.positive },
  { label: "外包", color: chartSeriesColors.secondary },
];

const renderOrderStructureLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 text-sm font-semibold text-slate-800">
    {orderStructureLegendItems.map((item) => (
      <div key={item.label} className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: item.color }} />
        <span>{item.label}审核单量</span>
      </div>
    ))}
  </div>
);

export const SmartDispatchOrderStructure: React.FC = () => {
  return (
    <ReportChartCard
      title="角色订单结构与审核质量月度趋势"
      value="系统 44.4% | 人工 48.1%"
      description={
        <span>
          系统自动直出与总部承接成为绝对主力（合计占比 <span className="font-bold text-blue-700 font-mono">92.5%</span>），失误率仅 0.11%~0.69%；高差错率的外包占比大幅压降至 <span className="font-bold text-amber-700 font-mono">7.5%</span>，实现大幅提效与高风险控制双赢。
        </span>
      }
      bodyHeight="h-[400px]"
      footnote="注：左轴为各角色月度审单量（单位：万单），下方为全周期审核差错率对比。"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={auditStructureData} barSize={chartBarSize.grouped} barGap={16} margin={chartMargins.standard}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="month" stroke={chartColors.ink} tick={chartAxisTick} />
              
              {/* 左Y轴：审核单量 */}
              <YAxis 
                yAxisId="left" 
                stroke={chartColors.ink}
                tick={chartAxisTick}
                tickFormatter={(val) => `${(val / 10000).toFixed(0)}万`}
                domain={[0, 4000000]}
                ticks={[0, 1000000, 2000000, 3000000, 4000000]}
              />

              <Tooltip 
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(value: any, name: any, item: any) => {
                  const payload = item?.payload;
                  if (name === "系统审核单量") {
                    return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.系统占比}%, 差错率 ${payload.系统质量}%)`), name];
                  }
                  if (name === "总部审核单量") {
                    return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.总部占比}%, 差错率 ${payload.总部质量}%)`), name];
                  }
                  if (name === "外包审核单量") {
                    return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.外包占比}%, 差错率 ${payload.外包质量}%)`), name];
                  }
                  return [value, name];
                }}
              />

              <Legend content={renderOrderStructureLegend} />

              {/* 柱状图：各角色单量，柱顶标注【单量+占比】 */}
              <Bar yAxisId="left" dataKey="系统单量" fill={chartSeriesColors.primary} name="系统审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
                <LabelList 
                  dataKey="系统标签" 
                  content={renderAuditStructureLabel()}
                />
              </Bar>
              <Bar yAxisId="left" dataKey="总部单量" fill={chartSeriesColors.positive} name="总部审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
                <LabelList 
                  dataKey="总部标签" 
                  content={renderAuditStructureLabel()}
                />
              </Bar>
              <Bar yAxisId="left" dataKey="外包单量" fill={chartSeriesColors.secondary} name="外包审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
                <LabelList 
                  dataKey="外包标签" 
                  content={renderAuditStructureLabel()}
                />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 审核质量/差错率对比卡片 - 清晰独立展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-slate-200">
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">系统自动放行</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.08% ~ 0.12%</div>
            <div className="text-xs text-slate-700 font-semibold mt-0.5">极低失误 / 主力支撑</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">总部人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.69% ~ 0.74%</div>
            <div className="text-xs text-blue-900 font-semibold mt-0.5">深度质检 / 质量稳固</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">外包人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 1.82% ~ 1.92%</div>
            <div className="text-xs text-amber-900 font-semibold mt-0.5">高差错率 / 占比压降至7.5%</div>
          </div>
        </div>
      </div>
    </ReportChartCard>
  );
};
