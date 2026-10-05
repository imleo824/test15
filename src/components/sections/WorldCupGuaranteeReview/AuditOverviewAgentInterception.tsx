import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewAgentInterception: React.FC = () => {
  const agentTableData = [
    {
      month: "1月",
      base_amt: "683.0",
      base_pct: "17.19%",
      extra_amt: "740.9",
      extra_pct: "13.54%",
      head_amt: "61.1",
      head_pct: "6.11%",
      first_dep_amt: "322.4",
      first_dep_pct: "17.19%",
      reward1_amt: "66.4",
      reward1_pct: "10.27%",
      sprint_amt: "146.6",
      sprint_pct: "9.72%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "2月",
      base_amt: "399.3",
      base_pct: "10.05%",
      extra_amt: "684.0",
      extra_pct: "12.50%",
      head_amt: "81.3",
      head_pct: "8.13%",
      first_dep_amt: "165.6",
      first_dep_pct: "8.83%",
      reward1_amt: "73.2",
      reward1_pct: "11.32%",
      sprint_amt: "202.0",
      sprint_pct: "13.39%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "3月",
      base_amt: "159.0",
      base_pct: "4.00%",
      extra_amt: "384.2",
      extra_pct: "7.02%",
      head_amt: "38.7",
      head_pct: "3.87%",
      first_dep_amt: "202.0",
      first_dep_pct: "10.77%",
      reward1_amt: "50.9",
      reward1_pct: "7.87%",
      sprint_amt: "124.8",
      sprint_pct: "8.27%",
      other_amt: "17.8",
      other_pct: "100.00%",
    },
    {
      month: "4月",
      base_amt: "304.2",
      base_pct: "7.66%",
      extra_amt: "540.8",
      extra_pct: "9.88%",
      head_amt: "62.2",
      head_pct: "6.22%",
      first_dep_amt: "276.1",
      first_dep_pct: "14.72%",
      reward1_amt: "64.5",
      reward1_pct: "9.98%",
      sprint_amt: "203.4",
      sprint_pct: "13.48%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "5月",
      base_amt: "298.4",
      base_pct: "7.51%",
      extra_amt: "588.9",
      extra_pct: "10.76%",
      head_amt: "66.9",
      head_pct: "6.69%",
      first_dep_amt: "233.2",
      first_dep_pct: "12.43%",
      reward1_amt: "66.8",
      reward1_pct: "10.33%",
      sprint_amt: "249.8",
      sprint_pct: "16.56%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "6月",
      base_amt: "244.7",
      base_pct: "6.16%",
      extra_amt: "495.8",
      extra_pct: "9.06%",
      head_amt: "63.9",
      head_pct: "6.39%",
      first_dep_amt: "284.9",
      first_dep_pct: "15.19%",
      reward1_amt: "63.4",
      reward1_pct: "9.81%",
      sprint_amt: "136.8",
      sprint_pct: "9.07%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "7月",
      base_amt: "272.5",
      base_pct: "6.86%",
      extra_amt: "258.1",
      extra_pct: "4.72%",
      head_amt: "530.5",
      head_pct: "53.06%",
      first_dep_amt: "229.0",
      first_dep_pct: "12.21%",
      reward1_amt: "80.5",
      reward1_pct: "12.45%",
      sprint_amt: "203.4",
      sprint_pct: "13.48%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "8月",
      base_amt: "1,216.4",
      base_pct: "30.62%",
      extra_amt: "1,267.4",
      extra_pct: "23.16%",
      head_amt: "53.8",
      head_pct: "5.38%",
      first_dep_amt: "73.0",
      first_dep_pct: "3.89%",
      reward1_amt: "100.7",
      reward1_pct: "15.58%",
      sprint_amt: "144.2",
      sprint_pct: "9.56%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "9月",
      base_amt: "395.0",
      base_pct: "9.94%",
      extra_amt: "512.6",
      extra_pct: "9.37%",
      head_amt: "41.5",
      head_pct: "4.15%",
      first_dep_amt: "89.8",
      first_dep_pct: "4.78%",
      reward1_amt: "80.1",
      reward1_pct: "12.39%",
      sprint_amt: "97.8",
      sprint_pct: "6.48%",
      other_amt: "-",
      other_pct: "0.00%",
    },
  ];

  const processedData = agentTableData.map((row) => {
    const parseNum = (val: string) => {
      if (!val || val === "-") return 0;
      return parseFloat(val.replace(/,/g, "")) || 0;
    };
    const sum =
      parseNum(row.base_amt) +
      parseNum(row.extra_amt) +
      parseNum(row.head_amt) +
      parseNum(row.first_dep_amt) +
      parseNum(row.reward1_amt) +
      parseNum(row.sprint_amt) +
      parseNum(row.other_amt);
    return {
      ...row,
      total_amt: sum > 0 ? sum.toFixed(1) : "-",
    };
  });

  return (
    <div id="section-audit-agent-interception" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.3 代理拦截分析" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2.5">
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">基础与额外佣金拦截：</strong>
                {highlightNumbers(
                  "基础佣金以及额外佣金拦截[[两者总计占比达 65%]]，主要为基础以及扶持降低派发拦截。8 月数据突出原因为 [[MK 真人代理佣金拦截]]。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">代理活动拦截：</strong>
                {highlightNumbers(
                  "主要以[[首复存与新增冲刺活动]]拦截金为主，两者合计占整体 [[23%]]。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">人头费拦截：</strong>
                {highlightNumbers(
                  "因 25 年优化后此项拦截持续减少；[[7 月数据突出系杯赛策略调整]]所致。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">首复存拦截：</strong>
                {highlightNumbers(
                  "属于会员活动拦截，整体拦截占比约 [[13%]]。"
                )}
              </span>
            </li>
          </ul>
        </div>
      </SummaryBox>

      {/* 表格 */}
      <ReportTableFrame noScroll>
        <table className="w-full report-data-table border-collapse whitespace-nowrap text-[10.5px] sm:text-[11px] lg:text-xs">
          <thead>
            <tr className="border-b border-slate-300 font-bold text-slate-900 bg-slate-100/90">
              <th rowSpan={2} className="py-2 px-2 text-left border-r border-slate-300">时间</th>
              <th rowSpan={2} className="py-2 px-2 text-right border-r border-slate-300 bg-blue-100/60 text-blue-950">合计</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">基础拦截</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">额外拦截金额</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">人头费拦截</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">首复存</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">奖励活动1</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">新增冲刺</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center">其他</th>
            </tr>
            <tr className="border-b border-slate-300 text-slate-700 font-semibold bg-slate-50 text-[10px] sm:text-[10.5px] lg:text-[11px]">
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>
              <th className="px-1.5 py-1 text-right">金额</th>
              <th className="px-1.5 py-1 text-center">占比</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums">
            {processedData.map((row, idx) => {
              const isAug = row.month === "8月";
              const isJul = row.month === "7月";
              return (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/90"}>
                  <td className="px-2 py-1.5 text-left font-bold text-slate-900 border-r border-slate-200">{row.month}</td>
                  <td className="px-2 py-1.5 text-right font-bold text-blue-900 border-r border-slate-200 bg-blue-50/20">{row.total_amt}</td>
                  <td className={`px-1.5 py-1.5 text-right ${isAug ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-700"}`}>{row.base_amt}</td>
                  <td className={`px-1.5 py-1.5 text-center border-r border-slate-200 ${isAug ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-600"}`}>{row.base_pct}</td>
                  <td className={`px-1.5 py-1.5 text-right ${isAug ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-800"}`}>{row.extra_amt}</td>
                  <td className={`px-1.5 py-1.5 text-center border-r border-slate-200 ${isAug ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-600"}`}>{row.extra_pct}</td>
                  <td className={`px-1.5 py-1.5 text-right ${isJul ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-700"}`}>{row.head_amt}</td>
                  <td className={`px-1.5 py-1.5 text-center border-r border-slate-200 ${isJul ? "text-blue-900 font-bold bg-blue-50/40" : "text-slate-600"}`}>{row.head_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.first_dep_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.first_dep_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.reward1_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.reward1_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.sprint_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.sprint_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.other_amt}</td>
                  <td className="px-1.5 py-1.5 text-center text-slate-600">{row.other_pct}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2 border-slate-300 bg-slate-50 font-mono tabular-nums text-slate-900 font-bold">
            <tr className="border-b border-slate-200">
              <td className="px-2 py-2 text-left font-bold border-r border-slate-200">小计</td>
              <td className="px-2 py-2 text-right font-bold text-blue-900 border-r border-slate-200 bg-blue-50/30">14,494.1</td>
              <td className="px-1.5 py-2 text-right text-slate-800">3,972.5</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">5,472.7</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">999.9</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">1,875.9</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">646.5</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">1,508.8</td>
              <td className="px-1.5 py-2 text-center border-r border-slate-200 text-slate-600">100.00%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">17.8</td>
              <td className="px-1.5 py-2 text-center text-slate-600">100.00%</td>
            </tr>
            <tr className="bg-slate-100/90">
              <td className="px-2 py-2 text-left font-bold border-r border-slate-200">总计</td>
              <td colSpan={1} className="px-2 py-2 text-right font-bold text-blue-950 border-r border-slate-200 bg-blue-100/40">14,494.1</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-slate-900 border-r border-slate-200">27.41%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-blue-900 border-r border-slate-200 bg-blue-50/30">37.76%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-slate-900 border-r border-slate-200">6.90%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-slate-900 border-r border-slate-200">12.94%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-slate-900 border-r border-slate-200">4.46%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono font-bold text-slate-900 border-r border-slate-200">10.41%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center font-mono text-slate-700">0.12%</td>
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
