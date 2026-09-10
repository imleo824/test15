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
import { Layers } from "lucide-react";
import {
  chartAxisTick,
  chartColors,
  chartMargins,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

export interface VipSpectrumDataPoint {
  vip: string;
  vipLabel: string;
  netRate: number;        // 输赢率 (%)
  profitLeverage: number; // 红利盈利杠杆 (倍)
  depLeverage: number;    // 红利存款杠杆 (倍)
  bonus: number;          // 红利 (万)
  rebate: number;         // 返水 (万)
  userCount: string;      // 活跃玩家估算
  roleType: string;       // 定位
}

export const vipSpectrumData: VipSpectrumDataPoint[] = [
  { vip: "0级", vipLabel: "0级", netRate: -1.45, profitLeverage: -0.14, depLeverage: 11.2, bonus: 18.2, rebate: 9.8, userCount: "14,500人", roleType: "黑产套利重灾区" },
  { vip: "1级", vipLabel: "1级", netRate: 1.85, profitLeverage: 0.28, depLeverage: 12.1, bonus: 42.0, rebate: 23.5, userCount: "8,900人", roleType: "浅度转化" },
  { vip: "2级", vipLabel: "2级", netRate: 4.20, profitLeverage: 0.62, depLeverage: 13.5, bonus: 65.0, rebate: 36.0, userCount: "6,200人", roleType: "初具造血" },
  { vip: "3级", vipLabel: "3级", netRate: 6.50, profitLeverage: 0.95, depLeverage: 14.2, bonus: 78.0, rebate: 44.0, userCount: "4,500人", roleType: "健康基本盘" },
  { vip: "4级", vipLabel: "4级", netRate: 8.80, profitLeverage: 1.25, depLeverage: 15.0, bonus: 85.0, rebate: 49.0, userCount: "3,100人", roleType: "高造血骨干" },
  { vip: "5级", vipLabel: "5级", netRate: 9.90, profitLeverage: 1.48, depLeverage: 15.6, bonus: 76.0, rebate: 45.0, userCount: "1,950人", roleType: "高粘性客群" },
  { vip: "6级", vipLabel: "6级", netRate: 10.80, profitLeverage: 1.68, depLeverage: 16.2, bonus: 68.0, rebate: 41.0, userCount: "1,120人", roleType: "核心利润源" },
  { vip: "7级", vipLabel: "7级", netRate: 11.60, profitLeverage: 1.85, depLeverage: 16.9, bonus: 58.0, rebate: 36.0, userCount: "620人", roleType: "高客单大户" },
  { vip: "8级", vipLabel: "8级", netRate: 12.50, profitLeverage: 2.08, depLeverage: 17.5, bonus: 46.0, rebate: 29.0, userCount: "310人", roleType: "顶级大户" },
  { vip: "9级", vipLabel: "9级", netRate: 13.20, profitLeverage: 2.25, depLeverage: 18.2, bonus: 38.0, rebate: 25.0, userCount: "140人", roleType: "黑金至尊会员" },
  { vip: "10级", vipLabel: "10级", netRate: 14.50, profitLeverage: 2.52, depLeverage: 19.5, bonus: 32.0, rebate: 22.0, userCount: "60人", roleType: "核心顶梁柱" },
];

export const BonusVipSpectrumChart: React.FC = () => {
  return (
    <ReportPanel className="report-panel-stack">
      <ReportPanelHeader
        icon={<Layers className="h-5 w-5" />}
        title="7.2 会员等级能效对比"
      />

      <SummaryBox>
        {highlightNumbers(
          "会员盈利杠杆呈现清晰的分水岭：[[0级会员呈现 -0.14倍 负杠杆倒挂]]（黑产套利集中），自 [[4级会员起跨入 1.25倍 健康造血区]]，至 [[10级会员攀升至 2.52倍]]，预算应严格向高等级倾斜。"
        )}
      </SummaryBox>

      {/* 核心结论 */}
      <ReportMetricGrid columns={3}>
        <ReportMetricCard
          title="存款杠杆梯度"
          value="11.2 ➔ 19.5"
          unit="倍"
          detail="从 0级 至 10级 随会员等级阶梯上升"
        />
        <ReportMetricCard
          title="盈利造血分水岭"
          value="-0.14 ➔ +2.52"
          unit="倍"
          detail="0级倒挂亏损，4级及以上进入正向造血"
        />
        <ReportMetricCard
          title="高等级造血倍率"
          value="+2.66"
          unit="倍"
          detail="10级较0级盈利杠杆提升，资源向中高阶倾斜"
        />
      </ReportMetricGrid>

      {/* 双图并列 - 统一图表深度结构 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 items-stretch">
        <ReportChartCard
          title="各会员等级存款杠杆梯度"
          subtitle="0级 至 10级 梯度分布"
          value="存款 ÷ 红利"
          description="存款杠杆从 0级会员的 11.2倍 呈阶梯式稳步上升至 10级会员的 19.5倍，高等级客群对平台资金沉淀深度显著优于初级账号。"
          footnote="注：虚线为 15.0倍 平台健康基准线，4级及以上进入安全留存区间。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={vipSpectrumData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="vip" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} domain={[8, 22]} unit="倍" />
              <Tooltip
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(value: any) => [`${value} 倍`, "存款杠杆"]}
                labelFormatter={(label) => {
                  const row = vipSpectrumData.find((v) => v.vip === label);
                  return `${label} (${row?.roleType || ""})`;
                }}
              />
              <ReferenceLine y={15.0} stroke="#64748b" strokeDasharray="3 3" />
              <Bar dataKey="depLeverage" name="存款杠杆" barSize={18} isAnimationActive={false}>
                {vipSpectrumData.map((entry, index) => (
                  <Cell key={`cell-dep-${index}`} fill={index >= 4 ? "#1e293b" : "#64748b"} />
                ))}
                <LabelList dataKey="depLeverage" position="top" formatter={(val: any) => `${val}倍`} style={{ fontSize: "10px", fill: "#0f172a", fontWeight: "bold" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ReportChartCard>

        <ReportChartCard
          title="各会员等级盈利杠杆梯度"
          subtitle="全等级造血与套利分水岭"
          value="输赢 ÷ 红利"
          description="0级会员出现 -0.14倍 严重负倒挂（首存套利重灾区）；自 4级会员跨入 1.25倍 健康造血区分水岭，至 10级会员攀升至 2.52倍 优质造血。"
          footnote="注：0.0倍 为盈亏平衡线（实线），1.0倍 为优质造血分界线（虚线）。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={vipSpectrumData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="vip" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} domain={[-0.4, 3.0]} unit="倍" />
              <Tooltip
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(value: any) => [`${value} 倍`, "盈利杠杆"]}
                labelFormatter={(label) => {
                  const row = vipSpectrumData.find((v) => v.vip === label);
                  return `${label} (${row?.roleType || ""})`;
                }}
              />
              <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1.5} />
              <ReferenceLine y={1.0} stroke="#475569" strokeDasharray="3 3" />
              <Bar dataKey="profitLeverage" name="盈利杠杆" barSize={18} isAnimationActive={false}>
                {vipSpectrumData.map((entry, index) => {
                  const isNegative = entry.profitLeverage < 0;
                  const isLow = entry.profitLeverage < 1.0;
                  return (
                    <Cell
                      key={`cell-profit-${index}`}
                      fill={isNegative ? "#e11d48" : isLow ? "#d97706" : "#0f766e"}
                    />
                  );
                })}
                <LabelList dataKey="profitLeverage" position="top" formatter={(val: any) => `${val}倍`} style={{ fontSize: "10px", fill: "#0f172a", fontWeight: "bold" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ReportChartCard>
      </div>
    </ReportPanel>
  );
};
