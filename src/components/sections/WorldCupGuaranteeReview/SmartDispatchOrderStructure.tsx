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
import { SummaryBox, highlightNumbers, stripDisplayUnits } from "./utils";
import { ReportPanel, ReportPanelHeader } from "../../ReportSections";
import { BarChart3 } from "lucide-react";
import {
  chartAxisTick,
  chartColors,
  chartLabelStyle,
  chartBarRadius,
  chartBarSize,
  chartBarGap,
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
      fontSize={12}
      fontWeight={900}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <tspan x={centerX}>{displayAmount}</tspan>
      {displayRatio ? (
        <tspan x={centerX} dy={14}>
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
      fontSize={12}
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

const qualityMarkerBandDomain: [number, number] = [-3.0, 2.2];

const renderOrderStructureLegend = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 text-sm font-black text-slate-900">
    {orderStructureLegendItems.map((item) => (
      <div key={item.label} className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: item.color }} />
          <span>{item.label}审核单量</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
          <span>{item.label}差错率</span>
        </span>
      </div>
    ))}
  </div>
);

export const SmartDispatchOrderStructure: React.FC = () => {
  return (
    <ReportPanel className="report-panel-stack">
      {/* 头部标题 */}
      <ReportPanelHeader
        icon={<BarChart3 className="h-5 w-5" />}
        title="一、订单结构"
        badge="角色与质量分布"
      />

      {/* 优化总结 */}
      <SummaryBox>
        {highlightNumbers(
          "系统直出与总部承接为主力，外包审核占比持续下调（6月压降至 [[7.5%]]）；差错率上，系统自动审核稳定在 [[0.08%]]~[[0.12%]]，总部6月为 [[0.69%]]，明显低于外包 [[1.82%]]~[[1.92%]] 的高风险区间。",
        )}
      </SummaryBox>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 space-y-2">
          <span className="flex items-center gap-2 font-black text-blue-900 text-xs">
            <span className="report-sequence-badge">1</span>
            系统自动审核
          </span>
          <p className="text-slate-900 font-bold leading-relaxed">
            {highlightNumbers("单量从4月 [[229.9]] 提升至6月 [[280.3]]，差错率稳定在 [[0.08%]]~[[0.12%]] 的极低水平。")}
          </p>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 space-y-2">
          <span className="flex items-center gap-2 font-black text-blue-900 text-xs">
            <span className="report-sequence-badge">2</span>
            外包规模压缩
          </span>
          <p className="text-slate-900 font-bold leading-relaxed">
            {highlightNumbers("外包占比由 [[11.4%]] 逐月下调至 [[7.5%]]（[[47.3]]单），有效压降高差错率（[[1.82%]]~[[1.92%]]）业务风险。")}
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
          <span className="flex items-center gap-2 font-black text-slate-900 text-xs">
            <span className="report-sequence-badge">3</span>
            总部承接复杂单
          </span>
          <p className="text-slate-900 font-bold leading-relaxed">
            {highlightNumbers("6月承接 [[304.1]] 单（占比 [[48.1%]]），差错率稳定在 [[0.69%]]，精准兜底高风险与复杂审核。")}
          </p>
        </div>
      </div>

      {/* 柱状图与折线图双轴组合图表 */}
      <div className="h-[420px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={auditStructureData} barSize={chartBarSize.grouped} barGap={16} margin={chartMargins.standard}>
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis dataKey="month" stroke={chartColors.ink} tick={chartAxisTick} />
            
            {/* 左Y轴：审核单量 */}
            <YAxis 
              yAxisId="left" 
              stroke={chartColors.ink}
              tick={chartAxisTick}
              tickFormatter={(val) => `${(val / 10000).toFixed(0)}`}
              domain={[0, 6500000]}
              ticks={[0, 2000000, 4000000, 6000000]}
            />
            
            {/* 右Y轴：审核质量（资金单量/总审核量 %） */}
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke={chartColors.ink}
              domain={qualityMarkerBandDomain}
              ticks={[0, 0.5, 1.0, 1.5, 2.0]}
              tick={chartAxisTick}
              tickFormatter={(val) => `${val}%`}
            />

            <Tooltip 
              contentStyle={chartTooltipStyle}
              itemStyle={chartTooltipItemStyle}
              formatter={(value: any, name: any, item: any) => {
                if (name.includes("质量")) {
                  return [`${value}%`, name];
                }
                const payload = item?.payload;
                if (name === "系统审核单量") {
                  return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.系统占比}%)`), name];
                }
                if (name === "总部审核单量") {
                  return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.总部占比}%)`), name];
                }
                if (name === "外包审核单量") {
                  return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${payload.外包占比}%)`), name];
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

            {/* 折线图：各角色审核质量，折线及节点对齐各自的单量柱子 */}
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="系统质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="系统质量" 
              dot={{ r: 5, fill: chartSeriesColors.primary, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(-36, 0)"
            >
              <LabelList 
                dataKey="系统质量" 
                content={renderQualityLabel(-36)}
              />
            </Line>
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="总部质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="总部质量" 
              dot={{ r: 5, fill: chartSeriesColors.positive, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(0, 0)"
            >
              <LabelList 
                dataKey="总部质量" 
                content={renderQualityLabel(0)}
              />
            </Line>
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="外包质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="外包质量" 
              dot={{ r: 5, fill: chartSeriesColors.secondary, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(36, 0)"
            >
              <LabelList 
                dataKey="外包质量" 
                content={renderQualityLabel(36)}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ReportPanel>
  );
};
