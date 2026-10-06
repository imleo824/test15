import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewInterceptionType: React.FC = () => {
  const tableData = [
    {
      site: "1",
      q2_amt: "1,782.32",
      q2_pct: "6.54%",
      q3_amt: "1,722.59",
      q3_pct: "5.79%",
      agent_amt: "318.12",
      agent_pct: "5.43%",
      sports_amt: "763.91",
      sports_pct: "5.51%",
      bonus_amt: "276.17",
      bonus_pct: "7.43%",
      other_amt: "364.39",
      other_pct: "5.76%",
    },
    {
      site: "2",
      q2_amt: "1,679.40",
      q2_pct: "6.17%",
      q3_amt: "1,629.15",
      q3_pct: "5.47%",
      agent_amt: "348.46",
      agent_pct: "5.95%",
      sports_amt: "625.66",
      sports_pct: "4.51%",
      bonus_amt: "284.79",
      bonus_pct: "7.66%",
      other_amt: "370.23",
      other_pct: "5.85%",
    },
    {
      site: "3",
      q2_amt: "1,799.35",
      q2_pct: "6.61%",
      q3_amt: "1,827.58",
      q3_pct: "6.14%",
      agent_amt: "329.16",
      agent_pct: "5.62%",
      sports_amt: "746.11",
      sports_pct: "5.38%",
      bonus_amt: "294.88",
      bonus_pct: "7.93%",
      other_amt: "457.43",
      other_pct: "7.23%",
    },
    {
      site: "4",
      q2_amt: "8,990.38",
      q2_pct: "33.01%",
      q3_amt: "10,365.44",
      q3_pct: "34.82%",
      agent_amt: "1,047.37",
      agent_pct: "17.89%",
      sports_amt: "5,261.67",
      sports_pct: "37.94%",
      bonus_amt: "1,430.74",
      bonus_pct: "38.49%",
      other_amt: "2,625.66",
      other_pct: "41.52%",
    },
    {
      site: "5",
      q2_amt: "152.87",
      q2_pct: "0.56%",
      q3_amt: "238.87",
      q3_pct: "0.80%",
      agent_amt: "21.20",
      agent_pct: "0.36%",
      sports_amt: "156.36",
      sports_pct: "1.13%",
      bonus_amt: "28.01",
      bonus_pct: "0.75%",
      other_amt: "33.30",
      other_pct: "0.53%",
    },
    {
      site: "7",
      q2_amt: "2,361.69",
      q2_pct: "8.67%",
      q3_amt: "1,957.11",
      q3_pct: "6.58%",
      agent_amt: "384.31",
      agent_pct: "6.56%",
      sports_amt: "805.66",
      sports_pct: "5.81%",
      bonus_amt: "309.03",
      bonus_pct: "8.31%",
      other_amt: "458.11",
      other_pct: "7.24%",
    },
    {
      site: "8",
      q2_amt: "2,910.27",
      q2_pct: "10.69%",
      q3_amt: "3,979.42",
      q3_pct: "13.37%",
      agent_amt: "2,126.03",
      agent_pct: "36.31%",
      sports_amt: "1,456.00",
      sports_pct: "10.50%",
      bonus_amt: "108.34",
      bonus_pct: "2.91%",
      other_amt: "289.04",
      other_pct: "4.57%",
    },
    {
      site: "6+9",
      q2_amt: "2,577.88",
      q2_pct: "9.47%",
      q3_amt: "3,179.07",
      q3_pct: "10.68%",
      agent_amt: "469.05",
      agent_pct: "8.01%",
      sports_amt: "1,589.15",
      sports_pct: "11.46%",
      bonus_amt: "518.00",
      bonus_pct: "13.94%",
      other_amt: "602.87",
      other_pct: "9.53%",
    },
    {
      site: "BD+XK",
      q2_amt: "2,654.06",
      q2_pct: "9.75%",
      q3_amt: "2,590.76",
      q3_pct: "8.70%",
      agent_amt: "486.69",
      agent_pct: "8.31%",
      sports_amt: "1,289.49",
      sports_pct: "9.30%",
      bonus_amt: "268.38",
      bonus_pct: "7.22%",
      other_amt: "546.20",
      other_pct: "8.64%",
    },
    {
      site: "综合",
      q2_amt: "2,325.26",
      q2_pct: "8.54%",
      q3_amt: "2,275.93",
      q3_pct: "7.65%",
      agent_amt: "324.46",
      agent_pct: "5.54%",
      sports_amt: "1,175.99",
      sports_pct: "8.48%",
      bonus_amt: "198.92",
      bonus_pct: "5.35%",
      other_amt: "576.56",
      other_pct: "9.12%",
    },
  ];

  return (
    <div id="section-audit-interception-type" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.2 拦截类型与站点分布" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2 text-sm text-slate-700 font-normal leading-relaxed">
          <p>
            <strong className="text-slate-950 font-bold">核心拦截结构：</strong>
            {highlightNumbers(
              "体育类为[[主要拦截部分]]，占比达 [[46.6%]]。"
            )}
          </p>
          <p>
            <strong className="text-slate-950 font-bold">红利拦截明细：</strong>
            {highlightNumbers(
              "红利类拦截以[[场馆首存及投注豪礼]]为主，两者总计占红利分类的 [[64%]]。"
            )}
          </p>
          <p>
            <strong className="text-slate-950 font-bold">其他拦截分布：</strong>
            {highlightNumbers(
              "其他类拦截占比 [[21.2%]]，主要以[[电竞与彩票]]等为主。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 表格数据展示 */}
      <ReportTableFrame noScroll>
        <table className="w-full report-data-table border-collapse whitespace-nowrap text-[11px] sm:text-xs">
          <thead>
            <tr className="border-b border-slate-300 text-slate-900 font-bold">
              <th rowSpan={2} className="py-2 px-2.5 text-left bg-slate-100/90 border-r border-slate-300">站点</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-slate-100/90 border-r border-slate-300">2026第2季度总计</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-blue-100/60 text-blue-950 border-r border-slate-300">2026第3季度总计</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-slate-100/90 border-r border-slate-300">代理类</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-slate-100/90 border-r border-slate-300">体育类</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-slate-100/90 border-r border-slate-300">红利类</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center bg-slate-100/90">其他</th>
            </tr>
            <tr className="border-b border-slate-300 text-slate-700 font-semibold bg-slate-50 text-[10.5px] sm:text-[11px]">
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center border-r border-slate-300">占比</th>
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center border-r border-slate-300">占比</th>
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center border-r border-slate-300">占比</th>
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center border-r border-slate-300">占比</th>
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center border-r border-slate-300">占比</th>
              <th className="py-1 px-1.5 text-right">金额</th>
              <th className="py-1 px-1.5 text-center">占比</th>
            </tr>
          </thead>
          <tbody className="tabular-nums font-mono">
            {tableData.map((row, idx) => {
              const isMainSports = row.sports_pct && parseFloat(row.sports_pct) > 30;
              return (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/90"}>
                  <td className="py-1.5 px-2.5 text-left font-bold text-slate-900 border-r border-slate-200">{row.site}</td>
                  <td className="py-1.5 px-1.5 text-right text-slate-700">{row.q2_amt}</td>
                  <td className="py-1.5 px-1.5 text-center border-r border-slate-200 text-slate-600">{row.q2_pct}</td>
                  <td className="py-1.5 px-1.5 text-right font-bold text-slate-950 bg-blue-50/20">{row.q3_amt}</td>
                  <td className="py-1.5 px-1.5 text-center font-bold text-slate-950 border-r border-slate-200 bg-blue-50/20">{row.q3_pct}</td>
                  <td className="py-1.5 px-1.5 text-right text-slate-700">{row.agent_amt}</td>
                  <td className="py-1.5 px-1.5 text-center border-r border-slate-200 text-slate-600">{row.agent_pct}</td>
                  <td className={`py-1.5 px-1.5 text-right ${isMainSports ? "font-bold text-blue-900 bg-blue-50/30" : "text-slate-700"}`}>{row.sports_amt}</td>
                  <td className={`py-1.5 px-1.5 text-center border-r border-slate-200 ${isMainSports ? "font-bold text-blue-900 bg-blue-50/30" : "text-slate-600"}`}>{row.sports_pct}</td>
                  <td className="py-1.5 px-1.5 text-right text-slate-700">{row.bonus_amt}</td>
                  <td className="py-1.5 px-1.5 text-center border-r border-slate-200 text-slate-600">{row.bonus_pct}</td>
                  <td className="py-1.5 px-1.5 text-right text-slate-700">{row.other_amt}</td>
                  <td className="py-1.5 px-1.5 text-center text-slate-600">{row.other_pct}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2 border-slate-300 bg-slate-50 font-bold font-mono">
            <tr className="border-b border-slate-200">
              <td className="py-2 px-2.5 text-left font-bold border-r border-slate-200">小计</td>
              <td className="py-2 px-1.5 text-right font-mono font-bold text-slate-900">27,233.47</td>
              <td className="py-2 px-1.5 text-center font-mono border-r border-slate-200 text-slate-600">100%</td>
              <td className="py-2 px-1.5 text-right font-mono font-bold text-blue-900 bg-blue-50/30">29,765.92</td>
              <td className="py-2 px-1.5 text-center font-mono font-bold text-blue-900 border-r border-slate-200 bg-blue-50/30">100%</td>
              <td className="py-2 px-1.5 text-right font-mono text-slate-800">5,854.86</td>
              <td className="py-2 px-1.5 text-center font-mono border-r border-slate-200 text-slate-600">100%</td>
              <td className="py-2 px-1.5 text-right font-mono font-bold text-slate-900">13,870.01</td>
              <td className="py-2 px-1.5 text-center font-mono font-bold border-r border-slate-200 text-slate-600">100%</td>
              <td className="py-2 px-1.5 text-right font-mono text-slate-800">3,717.27</td>
              <td className="py-2 px-1.5 text-center font-mono border-r border-slate-200 text-slate-600">100%</td>
              <td className="py-2 px-1.5 text-right font-mono text-slate-800">6,323.78</td>
              <td className="py-2 px-1.5 text-center font-mono text-slate-600">100%</td>
            </tr>
            <tr className="bg-slate-100/90 font-bold border-t border-slate-300 border-b-2 border-slate-900">
              <td className="py-2 px-2.5 text-left font-bold border-r border-slate-200">总计</td>
              <td className="py-2 px-1.5 text-right font-mono font-bold text-slate-900">27,233.47</td>
              <td className="py-2 px-1.5 text-center font-mono font-bold border-r border-slate-200 text-slate-600">100%</td>
              <td className="py-2 px-1.5 text-right font-mono font-bold text-blue-900 bg-blue-100/40">29,765.92</td>
              <td className="py-2 px-1.5 text-center font-mono font-bold text-blue-900 border-r border-slate-200 bg-blue-100/40">100%</td>
              <td colSpan={2} className="py-2 px-1.5 font-mono text-center border-r border-slate-200 text-slate-800">19.67%</td>
              <td colSpan={2} className="py-2 px-1.5 font-mono text-center font-bold text-slate-950 border-r border-slate-200">46.60%</td>
              <td colSpan={2} className="py-2 px-1.5 font-mono text-center border-r border-slate-200 text-slate-800">12.49%</td>
              <td colSpan={2} className="py-2 px-1.5 font-mono text-center text-slate-800">21.25%</td>
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
