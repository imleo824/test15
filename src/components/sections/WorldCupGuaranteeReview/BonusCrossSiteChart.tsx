import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";
import { ReportChartCard, ReportMetricCard, ReportMetricGrid, ReportPanel, ReportPanelHeader } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";
import { Network } from "lucide-react";
import {
  chartAxisTick,
  chartColors,
  chartMargins,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

export interface SimpleCrossSiteDataPoint {
  dimension: string;        // 客群切片
  entityCount: string;      // 规模
  bonusPerEntity: string;   // 均领红利
  depositLeverage: number;  // 红利存款杠杆 (倍)
  profitLeverage: number;   // 红利盈利杠杆 (倍)
  color: string;
  note: string;
}

export const simpleComparisonData: SimpleCrossSiteDataPoint[] = [
  {
    dimension: "真实玩家 (1人1号)",
    entityCount: "20人",
    bonusPerEntity: "3,200元/人",
    depositLeverage: 15.00,
    profitLeverage: 1.31,
    color: chartColors.green,
    note: "真实娱乐沉淀，无跨站对冲洗水，盈利杠杆 1.31倍 健康造血",
  },
  {
    dimension: "套利群体 (1人多号)",
    entityCount: "80人 (180号)",
    bonusPerEntity: "11,200元/人",
    depositLeverage: 14.10,
    profitLeverage: 0.05,
    color: chartColors.red,
    note: "跨站对打刷流水，单人领 3.5倍 红利，盈利杠杆仅 0.05倍",
  },
];

export const BonusCrossSiteChart: React.FC = () => {
  return (
    <ReportPanel className="report-panel-stack">
      <ReportPanelHeader
        icon={<Network className="h-5 w-5" />}
        title="7.3 跨站多账户穿透对比"
      />

      <SummaryBox>
        {highlightNumbers(
          "通过唯一设备与身份标识穿透合并后，套利群体单人平均多领 [[3.5倍]] 红利（[[11,200元]] 对比真实玩家 [[3,200元]]），但因跨站对冲洗水，真实盈利杠杆从 [[1.31倍]] 骤降至 [[0.05倍]]，是预算无效消耗的根源。"
        )}
      </SummaryBox>

      {/* 核心指标对比 */}
      <ReportMetricGrid columns={3}>
        <ReportMetricCard
          title="人均红利获取"
          value="3.5"
          unit="倍"
          detail="套利者 11,200元 / 真实玩家 3,200元"
        />
        <ReportMetricCard
          title="存款撬动表现"
          value="14.1"
          unit="倍"
          detail="对打刷流水伪装，两类客群表面接近"
        />
        <ReportMetricCard
          title="真实净利产出"
          value="0.05"
          unit="倍"
          detail="真实玩家 1.31倍 / 套利者 0.05倍"
        />
      </ReportMetricGrid>

      {/* 左右图表 - 统一图表深度结构 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 items-stretch">
        <ReportChartCard
          title="跨站穿透·存款杠杆对比"
          subtitle="真实玩家 与 跨站套利群体对比"
          value="存款 ÷ 红利"
          description="套利群体通过跨站对打刷流水伪装，存款杠杆（14.10倍）表面与真实玩家（15.00倍）非常接近，具备极高隐蔽性。"
          footnote="注：数据基于全局唯一设备与账号标识进行跨站聚合穿透统计。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={simpleComparisonData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="dimension" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} domain={[0, 18]} unit="倍" />
              <Tooltip
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(val: any, name: any, item: any) => {
                  const row = item.payload;
                  return [`${val} 倍 (人均 ${row.bonusPerEntity})`, name];
                }}
              />
              <Bar dataKey="depositLeverage" name="存款杠杆" barSize={40} isAnimationActive={false}>
                <Cell fill="#0f766e" />
                <Cell fill="#e11d48" />
                <LabelList dataKey="depositLeverage" position="top" formatter={(val: any) => `${val}倍`} style={{ fontSize: "12px", fill: "#334155", fontWeight: "bold" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ReportChartCard>

        <ReportChartCard
          title="跨站穿透·盈利杠杆对比"
          subtitle="真实造血贡献穿透"
          value="输赢 ÷ 红利"
          description="穿透后真实玩家贡献 1.31倍 健康造血；而套利群体单人多领 3.5倍 红利，真实盈利杠杆暴跌至 0.05倍，是预算无效流失核心根源。"
          footnote="注：1.0倍 为基准造血线，低于 0.1倍 判定为严重套利消耗。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={simpleComparisonData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="dimension" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} domain={[0, 1.6]} unit="倍" />
              <Tooltip
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(val: any, name: any, item: any) => {
                  const row = item.payload;
                  return [`${val} 倍 (人均 ${row.bonusPerEntity})`, name];
                }}
              />
              <ReferenceLine y={1.0} stroke="#475569" strokeDasharray="3 3" />
              <Bar dataKey="profitLeverage" name="盈利杠杆" barSize={40} isAnimationActive={false}>
                <Cell fill="#0f766e" />
                <Cell fill="#e11d48" />
                <LabelList dataKey="profitLeverage" position="top" formatter={(val: any) => `${val}倍`} style={{ fontSize: "12px", fill: "#0f172a", fontWeight: "bold" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ReportChartCard>
      </div>
    </ReportPanel>
  );
};
