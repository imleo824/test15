import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ReportChartCard, ReportSectionHeader } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";
import {
  chartAxisTick,
  chartColors,
  chartLegendStyle,
  chartMargins,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

export interface MacroTrendLeveragePoint {
  month: string;
  normalDepLeverage: number; // 正常用户·存款杠杆
  riskDepLeverage: number;   // 风控用户·存款杠杆
  allDepLeverage: number;    // 全盘均值·存款杠杆
  normalProfitLeverage: number; // 正常用户·盈利杠杆
  riskProfitLeverage: number;   // 风控用户·盈利杠杆
  allProfitLeverage: number;    // 全盘均值·盈利杠杆
}

export const macroTrendLeverageData: MacroTrendLeveragePoint[] = [
  { 
    month: "25-01", 
    normalDepLeverage: 30.00, 
    riskDepLeverage: 31.25, 
    allDepLeverage: 28.57,
    normalProfitLeverage: 2.02, 
    riskProfitLeverage: 0.67, 
    allProfitLeverage: 1.73 
  },
  { 
    month: "25-02", 
    normalDepLeverage: 28.00, 
    riskDepLeverage: 26.50, 
    allDepLeverage: 26.19,
    normalProfitLeverage: 1.71, 
    riskProfitLeverage: 0.47, 
    allProfitLeverage: 1.42 
  },
  { 
    month: "25-03", 
    normalDepLeverage: 25.50, 
    riskDepLeverage: 22.00, 
    allDepLeverage: 23.00,
    normalProfitLeverage: 1.41, 
    riskProfitLeverage: 0.26, 
    allProfitLeverage: 1.13 
  },
  { 
    month: "25-04", 
    normalDepLeverage: 23.20, 
    riskDepLeverage: 18.50, 
    allDepLeverage: 21.03,
    normalProfitLeverage: 1.12, 
    riskProfitLeverage: 0.17, 
    allProfitLeverage: 0.87 
  },
  { 
    month: "25-05", 
    normalDepLeverage: 20.50, 
    riskDepLeverage: 16.20, 
    allDepLeverage: 18.57,
    normalProfitLeverage: 0.85, 
    riskProfitLeverage: 0.07, 
    allProfitLeverage: 0.65 
  },
  { 
    month: "25-06", 
    normalDepLeverage: 18.20, 
    riskDepLeverage: 14.80, 
    allDepLeverage: 17.25,
    normalProfitLeverage: 0.59, 
    riskProfitLeverage: 0.06, 
    allProfitLeverage: 0.46 
  },
  { 
    month: "25-07", 
    normalDepLeverage: 17.10, 
    riskDepLeverage: 13.90, 
    allDepLeverage: 16.48,
    normalProfitLeverage: 0.50, 
    riskProfitLeverage: 0.03, 
    allProfitLeverage: 0.38 
  },
  { 
    month: "25-08", 
    normalDepLeverage: 16.50, 
    riskDepLeverage: 13.20, 
    allDepLeverage: 15.80,
    normalProfitLeverage: 0.46, 
    riskProfitLeverage: 0.02, 
    allProfitLeverage: 0.34 
  },
  { 
    month: "25-09", 
    normalDepLeverage: 16.10, 
    riskDepLeverage: 12.80, 
    allDepLeverage: 15.38,
    normalProfitLeverage: 0.42, 
    riskProfitLeverage: 0.02, 
    allProfitLeverage: 0.31 
  },
];

export const BonusMacroTrendChart: React.FC = () => {
  return (
    <div className="space-y-4">
      <ReportSectionHeader title="6.1 红利杠杆走势" />

      <SummaryBox>
        {highlightNumbers(
          "正常用户[[盈利杠杆 0.42倍]]保持正向盈利贡献，而风控用户盈利杠杆从 [[0.67倍]] 持续下滑至 [[0.02倍]] 几近归零，达标流水后即刻提现，呈现显著的套利洗水特征。"
        )}
      </SummaryBox>

      {/* 核心双杠杆左右对比模版 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* 左侧：正常用户客群双杠杆 */}
        <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white p-4 space-y-3 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                <span>正常用户客群·红利效率</span>
              </div>
              <span className="text-xs font-mono font-bold bg-slate-100 text-slate-900 px-2 py-0.5 border border-slate-300">
                正向收益沉淀
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {/* 存款杠杆 */}
              <div className="bg-slate-50 p-3 border border-slate-200 space-y-1">
                <div className="text-sm text-slate-800 font-bold">正常用户·存款杠杆</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black font-mono text-slate-950 tabular-nums">16.10</span>
                  <span className="text-sm font-bold text-slate-700">倍</span>
                </div>
                <p className="text-sm text-slate-700 font-normal border-t border-slate-200 pt-1 mt-1">
                  从 30.00倍 回落至 16.10倍
                </p>
              </div>

              {/* 盈利杠杆 */}
              <div className="bg-slate-50 p-3 border border-slate-200 space-y-1">
                <div className="text-sm text-slate-800 font-bold">正常用户·盈利杠杆</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black font-mono text-slate-950 tabular-nums">0.42</span>
                  <span className="text-sm font-bold text-slate-700">倍</span>
                </div>
                <p className="text-sm text-slate-700 font-normal border-t border-slate-200 pt-1 mt-1">
                  保持正向盈利贡献
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：风控套利客群双杠杆 */}
        <div className="border border-slate-200 border-t-2 border-t-rose-800 bg-white p-4 space-y-3 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-rose-700"></span>
                <span>风控套利客群·红利效率</span>
              </div>
              <span className="text-xs font-mono font-bold bg-rose-50 text-rose-900 px-2 py-0.5 border border-rose-200">
                套利洗水预警
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              {/* 存款杠杆 */}
              <div className="bg-slate-50 p-3 border border-slate-200 space-y-1">
                <div className="text-sm text-slate-800 font-bold">风控用户·存款杠杆</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black font-mono text-rose-800 tabular-nums">12.80</span>
                  <span className="text-sm font-bold text-slate-700">倍</span>
                </div>
                <p className="text-sm text-slate-700 font-normal border-t border-slate-200 pt-1 mt-1">
                  从 31.25倍 下滑至 12.80倍
                </p>
              </div>

              {/* 盈利杠杆 */}
              <div className="bg-slate-50 p-3 border border-slate-200 space-y-1">
                <div className="text-sm text-slate-800 font-bold">风控用户·盈利杠杆</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black font-mono text-rose-800 tabular-nums">0.02</span>
                  <span className="text-sm font-bold text-slate-700">倍</span>
                </div>
                <p className="text-sm text-slate-700 font-normal border-t border-slate-200 pt-1 mt-1">
                  对打洗水导致利润几近归零
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 走势图表：左右并排 - 统一图表深度结构 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 items-stretch">
        <ReportChartCard
          title="红利撬动存款杠杆走势"
          value="存款 ÷ 红利"
          description="正常用户存款杠杆由 30.00倍 逐步收敛至 16.10倍 健康水平；风控客群存款杠杆从 31.25倍 持续恶化至 12.80倍，充提套现意图显著。"
          footnote="注：存款杠杆 = 周期内总存款额 ÷ 所获红利总额。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={macroTrendLeverageData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} domain={[10, 35]} unit="倍" />
              <Tooltip contentStyle={chartTooltipStyle} itemStyle={chartTooltipItemStyle} formatter={(value: any, name: any) => [`${value} 倍`, name]} />
              <Legend wrapperStyle={chartLegendStyle} />
              <Line type="monotone" dataKey="normalDepLeverage" name="正常用户" stroke={chartColors.green} strokeWidth={2.5} dot={{ r: 3, fill: chartColors.green }} isAnimationActive={false} />
              <Line type="monotone" dataKey="riskDepLeverage" name="风控用户" stroke={chartColors.red} strokeWidth={2.5} strokeDasharray="4 2" dot={{ r: 3, fill: chartColors.red }} isAnimationActive={false} />
              <Line type="monotone" dataKey="allDepLeverage" name="整体均值" stroke={chartColors.blue} strokeWidth={2} strokeDasharray="3 3" dot={{ r: 2.5, fill: chartColors.blue }} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </ReportChartCard>

        <ReportChartCard
          title="红利撬动盈利杠杆走势"
          value="输赢 ÷ 红利"
          description="正常用户保持 0.42倍 正向盈利贡献；而风控套利群体断崖式下跌至 0.02倍 利润几近归零，暴露出达标流水即提现的洗水特征。"
          footnote="注：盈利杠杆 = 周期内游戏输赢 ÷ 红利总投入（正值代表平台净收益贡献，趋近0代表套利侵蚀）。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={macroTrendLeverageData} margin={chartMargins.compact}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
              <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} />
              <YAxis tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} domain={[0, 2.3]} unit="倍" />
              <Tooltip contentStyle={chartTooltipStyle} itemStyle={chartTooltipItemStyle} formatter={(value: any, name: any) => [`${value} 倍`, name]} />
              <Legend wrapperStyle={chartLegendStyle} />
              <Line type="monotone" dataKey="normalProfitLeverage" name="正常用户" stroke={chartColors.green} strokeWidth={2.5} dot={{ r: 3, fill: chartColors.green }} isAnimationActive={false} />
              <Line type="monotone" dataKey="riskProfitLeverage" name="风控用户" stroke={chartColors.red} strokeWidth={2.5} strokeDasharray="4 2" dot={{ r: 3, fill: chartColors.red }} isAnimationActive={false} />
              <Line type="monotone" dataKey="allProfitLeverage" name="全盘均值" stroke={chartColors.ink} strokeWidth={2} strokeDasharray="3 3" dot={{ r: 2.5, fill: chartColors.ink }} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </ReportChartCard>
      </div>
    </div>
  );
};
