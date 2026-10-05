import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewStudioInterception: React.FC = () => {
  const studioData = [
    {
      site: "Y1",
      total_amt: "305.48", total_pct: "6.78%",
      sports_amt: "95.95", sports_pct: "5.27%",
      lottery_amt: "52.26", lottery_pct: "7.58%",
      live_amt: "74.67", live_pct: "9.14%",
      slot_amt: "40.72", slot_pct: "8.85%",
      esports_amt: "12.07", esports_pct: "6.53%",
      other_amt: "29.80", other_pct: "5.58%",
    },
    {
      site: "Y2",
      total_amt: "331.75", total_pct: "7.37%",
      sports_amt: "136.70", sports_pct: "7.51%",
      lottery_amt: "56.13", lottery_pct: "8.15%",
      live_amt: "78.33", live_pct: "9.59%",
      slot_amt: "29.13", slot_pct: "6.33%",
      esports_amt: "7.99", esports_pct: "4.32%",
      other_amt: "23.48", other_pct: "4.40%",
    },
    {
      site: "Y3",
      total_amt: "308.90", total_pct: "6.86%",
      sports_amt: "97.67", sports_pct: "5.37%",
      lottery_amt: "62.05", lottery_pct: "9.01%",
      live_amt: "81.40", live_pct: "9.97%",
      slot_amt: "24.71", slot_pct: "5.37%",
      esports_amt: "5.64", esports_pct: "3.05%",
      other_amt: "37.42", other_pct: "7.00%",
    },
    {
      site: "Y4",
      total_amt: "1,618.01", total_pct: "35.92%",
      sports_amt: "694.06", sports_pct: "38.15%",
      lottery_amt: "233.56", lottery_pct: "33.90%",
      live_amt: "269.10", live_pct: "32.95%",
      slot_amt: "106.04", slot_pct: "23.04%",
      esports_amt: "47.79", esports_pct: "25.86%",
      other_amt: "267.45", other_pct: "50.06%",
    },
    {
      site: "Y5",
      total_amt: "24.31", total_pct: "0.54%",
      sports_amt: "15.35", sports_pct: "0.84%",
      lottery_amt: "1.54", lottery_pct: "0.22%",
      live_amt: "2.82", live_pct: "0.35%",
      slot_amt: "1.91", slot_pct: "0.42%",
      esports_amt: "0.52", esports_pct: "0.28%",
      other_amt: "2.17", other_pct: "0.41%",
    },
    {
      site: "Y7",
      total_amt: "440.51", total_pct: "9.78%",
      sports_amt: "155.42", sports_pct: "8.54%",
      lottery_amt: "57.23", lottery_pct: "8.30%",
      live_amt: "80.04", live_pct: "9.80%",
      slot_amt: "53.84", slot_pct: "11.70%",
      esports_amt: "30.29", esports_pct: "16.39%",
      other_amt: "63.69", other_pct: "11.92%",
    },
    {
      site: "Y8",
      total_amt: "209.16", total_pct: "4.64%",
      sports_amt: "103.29", sports_pct: "5.68%",
      lottery_amt: "25.68", lottery_pct: "3.73%",
      live_amt: "30.92", live_pct: "3.79%",
      slot_amt: "26.63", slot_pct: "5.79%",
      esports_amt: "14.01", esports_pct: "7.58%",
      other_amt: "8.63", other_pct: "1.62%",
    },
    {
      site: "Y6+Y9",
      total_amt: "478.59", total_pct: "10.63%",
      sports_amt: "210.97", sports_pct: "11.60%",
      lottery_amt: "63.74", lottery_pct: "9.25%",
      live_amt: "97.98", live_pct: "12.00%",
      slot_amt: "52.92", slot_pct: "11.50%",
      esports_amt: "15.09", esports_pct: "8.17%",
      other_amt: "37.89", other_pct: "7.09%",
    },
    {
      site: "BD+XK",
      total_amt: "452.96", total_pct: "10.06%",
      sports_amt: "192.26", sports_pct: "10.57%",
      lottery_amt: "67.58", lottery_pct: "9.81%",
      live_amt: "51.83", live_pct: "6.35%",
      slot_amt: "83.73", slot_pct: "18.19%",
      esports_amt: "18.44", esports_pct: "9.98%",
      other_amt: "39.12", other_pct: "7.32%",
    },
    {
      site: "综合",
      total_amt: "334.61", total_pct: "7.43%",
      sports_amt: "117.62", sports_pct: "6.47%",
      lottery_amt: "69.29", lottery_pct: "10.06%",
      live_amt: "49.49", live_pct: "6.06%",
      slot_amt: "40.67", slot_pct: "8.84%",
      esports_amt: "32.97", esports_pct: "17.84%",
      other_amt: "24.56", other_pct: "4.60%",
    },
  ];

  return (
    <div id="section-audit-studio-interception" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.5 工作室拦截明细" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2 text-sm text-slate-700 font-normal leading-relaxed">
          <p>
            <strong className="text-slate-950 font-bold">整体规模与重点站点：</strong>
            {highlightNumbers(
              "工作室整体拦截金额在 [[4,500 W]] 左右，其中 [[Y4 站、Y6+Y9 站、BD+XK 站]] 占比较高，合计占比达 [[56%]]（金额约 [[2.4kw]] 左右），对比上季度有所下降。"
            )}
          </p>
          <p>
            <strong className="text-slate-950 font-bold">核心拦截分类结构：</strong>
            {highlightNumbers(
              "整体拦截分类中，[[体育批量]]、[[彩票批量]]与[[真人批量]]套利占比较高，占比分别达 [[40%]]、[[15%]] 及 [[18%]]，三大批量套利合计占整体 [[73%]]（批量主类占比 63%+）。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 工作室拦截明细表格 */}
      <ReportTableFrame noScroll>
        <table className="w-full report-data-table border-collapse whitespace-nowrap text-[10.5px] sm:text-[11px] lg:text-xs">
          <thead>
            {/* 一级表头 */}
            <tr className="border-b border-slate-300 font-bold text-slate-900 bg-slate-100/90">
              <th rowSpan={2} className="py-2 px-2.5 text-left border-r border-slate-300">分类</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300 bg-blue-100/60 text-blue-950">7-9月总计(万)</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">体育批量</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">彩票批量</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">真人批量</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">电子批量</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300">电竞批量</th>
              <th colSpan={2} className="py-1.5 px-1.5 text-center">其他（棋牌、娱乐）</th>
            </tr>
            {/* 二级表头 */}
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
            {studioData.map((row, idx) => {
              const isSiteY4 = row.site === "Y4";
              return (
                <tr key={idx} className={isSiteY4 ? "bg-blue-50/30 hover:bg-blue-50/50" : idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/90"}>
                  <td className="px-2.5 py-1.5 text-left font-bold text-slate-900 border-r border-slate-200">{row.site}</td>
                  <td className={`px-1.5 py-1.5 text-right font-bold ${isSiteY4 ? "text-blue-900 font-bold bg-blue-50/30" : "text-slate-900"}`}>{row.total_amt}</td>
                  <td className={`px-1.5 py-1.5 text-center border-r border-slate-200 ${isSiteY4 ? "text-blue-900 font-bold bg-blue-50/30" : "text-slate-600"}`}>{row.total_pct}</td>
                  <td className={`px-1.5 py-1.5 text-right ${isSiteY4 ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.sports_amt}</td>
                  <td className={`px-1.5 py-1.5 text-center border-r border-slate-200 ${isSiteY4 ? "text-blue-900 font-bold" : "text-slate-600"}`}>{row.sports_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.lottery_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.lottery_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.live_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.live_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.slot_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.slot_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.esports_amt}</td>
                  <td className="px-1.5 py-1.5 text-center border-r border-slate-200 text-slate-600">{row.esports_pct}</td>
                  <td className="px-1.5 py-1.5 text-right text-slate-700">{row.other_amt}</td>
                  <td className="px-1.5 py-1.5 text-center text-slate-600">{row.other_pct}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2 border-slate-300 bg-slate-50 font-mono tabular-nums text-slate-900 font-bold">
            <tr className="border-b border-slate-200">
              <td className="px-2.5 py-2 text-left font-bold border-r border-slate-200">小计</td>
              <td className="px-1.5 py-2 text-right font-bold text-blue-900 bg-blue-50/30">4,504.27</td>
              <td className="px-1.5 py-2 text-center font-bold text-blue-900 border-r border-slate-200 bg-blue-50/30">100%</td>
              <td className="px-1.5 py-2 text-right text-blue-900 font-bold">1,819.29</td>
              <td className="px-1.5 py-2 text-center text-blue-900 font-bold border-r border-slate-200">100%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">689.06</td>
              <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">816.57</td>
              <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">460.31</td>
              <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">184.82</td>
              <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100%</td>
              <td className="px-1.5 py-2 text-right text-slate-800">534.22</td>
              <td className="px-1.5 py-2 text-center text-slate-600">100%</td>
            </tr>
            <tr className="bg-slate-100/90 font-bold">
              <td className="px-2.5 py-2 text-left font-bold border-r border-slate-200">总计</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-blue-950 font-bold border-r border-slate-200 bg-blue-100/40">
                4,504.27
              </td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-blue-900 font-bold border-r border-slate-200 bg-blue-50/30">40.39%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-slate-800 border-r border-slate-200">15.30%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-slate-800 border-r border-slate-200">18.13%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-slate-800 border-r border-slate-200">10.22%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-slate-800 border-r border-slate-200">4.10%</td>
              <td colSpan={2} className="px-1.5 py-2 text-center text-slate-800">11.86%</td>
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
