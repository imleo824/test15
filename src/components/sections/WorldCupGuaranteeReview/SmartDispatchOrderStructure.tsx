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

// 8月日均、9月日均 与 9月28日-30日 角色订单结构与审核质量数据
const auditStructureData = [
  {
    date: "8月日均",
    系统单量: 1350000,
    系统占比: 32.1,
    系统标签: "135.0 32.1%",
    总部单量: 1850000,
    总部占比: 44.0,
    总部标签: "185.0 44.0%",
    外包单量: 1000000,
    外包占比: 23.9,
    外包标签: "100.0 23.9%",
    系统质量: 0.15,
    总部质量: 0.78,
    外包质量: 1.95,
  },
  {
    date: "9月日均",
    系统单量: 1950000,
    系统占比: 43.3,
    系统标签: "195.0 43.3%",
    总部单量: 1800000,
    总部占比: 40.0,
    总部标签: "180.0 40.0%",
    外包单量: 750000,
    外包占比: 16.7,
    外包标签: "75.0 16.7%",
    系统质量: 0.12,
    总部质量: 0.73,
    外包质量: 1.88,
  },
  {
    date: "9月28日",
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
    date: "9月29日",
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
    date: "9月30日",
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
      y={y - 18}
      textAnchor="middle"
      fill="#0f172a"
      fontSize={12}
      fontWeight={800}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <tspan x={centerX}>{displayAmount}</tspan>
      {displayRatio ? (
        <tspan x={centerX} dy={13}>
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
      title="角色订单结构与审核质量趋势（8月日均、9月日均与9月28日-30日对比）"
      description={
        <span>
          从 <strong>8月日均</strong>（系统 <span className="font-bold font-mono">135.0万</span> 占 32.1%、外包 <span className="font-bold font-mono text-amber-700">100.0万</span> 占 23.9%）到 <strong>9月30日</strong> 全量开启（系统 <span className="font-bold font-mono text-blue-700">280.3万</span> 占 44.4%、外包 <span className="font-bold font-mono text-emerald-700">47.3万</span> 占 7.5%）：系统替代规模实现倍增，将高差错率的外包业务深度压缩并释放人力，显著提升全盘审单质量。
        </span>
      }
      bodyHeight="h-[430px]"
      footnote="注：左轴为各角色每日审单量（单位：万单），柱顶为【单量(万) 占比(%)】，下方为全阶段审核差错率对比。"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="h-[290px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={auditStructureData} barSize={18} barGap={3} margin={{ top: 48, right: 36, left: 16, bottom: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="date" stroke={chartColors.ink} tick={chartAxisTick} />
              
              {/* 左Y轴：审核单量 */}
              <YAxis 
                yAxisId="left" 
                stroke={chartColors.ink}
                tick={chartAxisTick}
                tickFormatter={(val) => `${(val / 10000).toFixed(0)}万`}
                domain={[0, 3600000]}
                ticks={[0, 1000000, 2000000, 3000000]}
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
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.08% ~ 0.15%</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">总部人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 0.69% ~ 0.78%</div>
          </div>
          <div className="bg-slate-50 p-2.5 border border-slate-200 text-center">
            <div className="text-xs text-slate-800 font-bold">外包人工审核</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5 font-mono">差错率 1.82% ~ 1.95%</div>
          </div>
        </div>
      </div>
    </ReportChartCard>
  );
};
