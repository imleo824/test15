import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewAgentInterception: React.FC = () => {
  const agentTableData = [
    {
      month: "1月",
      base_amt: "683.0",
      base_pct: "26.12%",
      extra_amt: "740.9",
      extra_pct: "17.51%",
      head_amt: "61.1",
      head_pct: "14.44%",
      first_dep_amt: "322.4",
      first_dep_pct: "19.77%",
      reward1_amt: "66.4",
      reward1_pct: "17.24%",
      sprint_amt: "146.6",
      sprint_pct: "13.79%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "2月",
      base_amt: "399.3",
      base_pct: "15.27%",
      extra_amt: "684.0",
      extra_pct: "16.16%",
      head_amt: "81.3",
      head_pct: "19.22%",
      first_dep_amt: "165.6",
      first_dep_pct: "10.15%",
      reward1_amt: "73.2",
      reward1_pct: "19.00%",
      sprint_amt: "202.0",
      sprint_pct: "19.00%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "3月",
      base_amt: "159.0",
      base_pct: "6.08%",
      extra_amt: "384.2",
      extra_pct: "9.08%",
      head_amt: "38.7",
      head_pct: "9.15%",
      first_dep_amt: "202.0",
      first_dep_pct: "12.39%",
      reward1_amt: "50.9",
      reward1_pct: "13.21%",
      sprint_amt: "124.8",
      sprint_pct: "11.74%",
      other_amt: "17.8",
      other_pct: "24.45%",
    },
    {
      month: "4月",
      base_amt: "304.2",
      base_pct: "11.64%",
      extra_amt: "540.8",
      extra_pct: "12.78%",
      head_amt: "62.2",
      head_pct: "14.70%",
      first_dep_amt: "276.1",
      first_dep_pct: "16.93%",
      reward1_amt: "64.5",
      reward1_pct: "16.74%",
      sprint_amt: "203.4",
      sprint_pct: "19.13%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "5月",
      base_amt: "298.4",
      base_pct: "11.41%",
      extra_amt: "588.9",
      extra_pct: "13.92%",
      head_amt: "66.9",
      head_pct: "15.81%",
      first_dep_amt: "233.2",
      first_dep_pct: "14.30%",
      reward1_amt: "66.8",
      reward1_pct: "17.34%",
      sprint_amt: "249.8",
      sprint_pct: "23.49%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "6月",
      base_amt: "244.7",
      base_pct: "9.36%",
      extra_amt: "495.8",
      extra_pct: "11.72%",
      head_amt: "63.9",
      head_pct: "15.10%",
      first_dep_amt: "284.9",
      first_dep_pct: "17.47%",
      reward1_amt: "63.4",
      reward1_pct: "16.46%",
      sprint_amt: "136.8",
      sprint_pct: "12.86%",
      other_amt: "-",
      other_pct: "0.00%",
    },
  ];

  
  const processedData = agentTableData.map((row) => {
    const sum = [
      row.base_amt,
      row.extra_amt,
      row.head_amt,
      row.first_dep_amt,
      row.reward1_amt,
      row.sprint_amt,
      row.other_amt,
    ]
      .map((val) => parseFloat(val) || 0)
      .reduce((a, b) => a + b, 0);
    return { ...row, total_amt: sum.toFixed(1) };
  });

  const totals = {
    total_amt: processedData.reduce((acc, r) => acc + parseFloat(r.total_amt), 0),
    base_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.base_amt) || 0), 0),
    extra_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.extra_amt) || 0), 0),
    head_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.head_amt) || 0), 0),
    first_dep_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.first_dep_amt) || 0), 0),
    reward1_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.reward1_amt) || 0), 0),
    sprint_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.sprint_amt) || 0), 0),
    other_amt: processedData.reduce((acc, r) => acc + (parseFloat(r.other_amt) || 0), 0),
  };
  const safePercent = (val, total) => total > 0 ? ((val / total) * 100).toFixed(2) + "%" : "0.00%";

  return (
    <div id="section-audit-agent-interception" className="space-y-8">
      {/* 模块小标题 - 统一规范 */}
      <ReportSectionHeader title="2.1.3 代理数据" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-4">
          <div>
            {highlightNumbers(
              "代理以[[佣金]]为主体，[[活动类]]与[[用户首复存]]共同构成主要补充。"
            )}
          </div>
          <ul className="space-y-3 text-slate-900 font-bold">
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[佣金]]：含基础及额外，总占比达 [[62.42%]]，核心为[[基础佣金]]与[[扶持降档]]",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[活动]]：以[[奖励活动]]（[[4.35%]]）与[[新增冲刺]]（[[12.02%]]）为主，两者合计占整体的 [[16.37%]]。若叠加[[用户首复存]]，三项合计金额为 [[2,932.8]]，占整体约 [[33.15%]]。",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[存款]]：针对用户的[[首复存的活动套利]]，整体占比约为 [[16.77%]]。",
              )}
            </span>
          </li>
          </ul>
        </div>
      </SummaryBox>

      {/* 表格 */}
      <ReportTableFrame>
        <table className="report-dense-table">
          <thead className="bg-slate-100 text-slate-900 ">
            <tr className="bg-slate-100 border-b border-slate-100 font-bold text-slate-900">
              <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2.5 border-r border-slate-100">时间</th>
              <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2.5 border-r border-slate-100">合计</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">基础拦截</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">额外拦截金额</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">人头费拦截</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">首复存</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">奖励活动</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">新增冲刺</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2">其他</th>
            </tr>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-900 font-bold font-semibold text-sm">
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums">
            {processedData.map((row, idx) => {
              const isMay = row.month === "5月";
              return (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/80"}>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center font-bold text-slate-900">{row.month}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center font-black text-blue-900">{row.total_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.base_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.base_pct}</td>
                  <td className={`px-2 md:px-3 lg:px-4 py-3 text-center ${isMay ? "text-blue-700 font-black bg-blue-50/80" : "text-blue-800 font-bold"}`}>{row.extra_amt}</td>
                  <td className={`px-2 md:px-3 lg:px-4 py-3 text-center ${isMay ? "text-blue-700 font-black bg-blue-50/80" : "text-blue-800 font-bold"}`}>{row.extra_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.head_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.head_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.first_dep_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.first_dep_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.reward1_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.reward1_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sprint_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sprint_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_pct}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-blue-50/90 font-black border-t border-blue-200 text-slate-900">
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center font-black">总计</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center font-black text-blue-900">{totals.total_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.base_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.base_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center text-blue-900 font-black">{totals.extra_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center text-blue-900 font-black">{safePercent(totals.extra_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.head_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.head_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.first_dep_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.first_dep_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.reward1_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.reward1_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.sprint_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.sprint_amt, totals.total_amt)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{totals.other_amt.toFixed(1)}</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{safePercent(totals.other_amt, totals.total_amt)}</td>
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
