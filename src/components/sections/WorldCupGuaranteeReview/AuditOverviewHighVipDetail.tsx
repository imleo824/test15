import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportPanel, ReportPanelHeader, ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewHighVipDetail: React.FC = () => {
  // VIP等级明细数据（最新数据）
  const vipDetailData = [
    {
      vip_level: "VIP6",
      total_people: 394,
      vip_people_pct: "48.64%",
      sports_people: 167, sports_amt: "767.35", sports_pct: "24.77%",
      esports_people: 50, esports_amt: "151.46", esports_pct: "18.15%",
      rent_people: 41, rent_amt: "131.55", rent_pct: "20.18%",
      bonus_people: 116, bonus_amt: "361.79", bonus_pct: "34.83%",
      software_people: 20, software_amt: "68.87", software_pct: "41.14%",
    },
    {
      vip_level: "VIP7",
      total_people: 250,
      vip_people_pct: "30.86%",
      sports_people: 107, sports_amt: "1,398.96", sports_pct: "45.16%",
      esports_people: 44, esports_amt: "415.30", esports_pct: "49.76%",
      rent_people: 29, rent_amt: "139.26", rent_pct: "21.37%",
      bonus_people: 54, bonus_amt: "328.70", bonus_pct: "31.64%",
      software_people: 16, software_amt: "81.22", software_pct: "48.52%",
    },
    {
      vip_level: "VIP8",
      total_people: 122,
      vip_people_pct: "15.06%",
      sports_people: 71, sports_amt: "713.20", sports_pct: "23.02%",
      esports_people: 12, esports_amt: "147.19", esports_pct: "17.63%",
      rent_people: 9, rent_amt: "110.11", rent_pct: "16.89%",
      bonus_people: 24, bonus_amt: "199.88", bonus_pct: "19.24%",
      software_people: 6, software_amt: "17.29", software_pct: "10.33%",
    },
    {
      vip_level: "VIP9",
      total_people: 29,
      vip_people_pct: "3.58%",
      sports_people: 19, sports_amt: "135.39", sports_pct: "4.37%",
      esports_people: 3, esports_amt: "13.30", esports_pct: "1.59%",
      rent_people: 1, rent_amt: "4.48", rent_pct: "0.69%",
      bonus_people: 5, bonus_amt: "64.33", bonus_pct: "6.19%",
      software_people: 1, software_amt: "0.00", software_pct: "0.00%",
    },
    {
      vip_level: "VIP10",
      total_people: 15,
      vip_people_pct: "1.85%",
      sports_people: 7, sports_amt: "83.04", sports_pct: "2.68%",
      esports_people: 3, esports_amt: "107.40", esports_pct: "12.87%",
      rent_people: 1, rent_amt: "266.39", rent_pct: "40.87%",
      bonus_people: 4, bonus_amt: "84.14", bonus_pct: "8.10%",
      software_people: 0, software_amt: "0.00", software_pct: "0.00%",
    },
  ];

  return (
    <div id="section-audit-high-vip-detail" className="space-y-8">
      {/* 模块小标题 - 统一规范 */}
      <ReportSectionHeader title="2.1.6 高等级数据" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <p className="text-base text-slate-900 font-bold leading-relaxed mb-3">
          {highlightNumbers(
            "[[高V处理]]达[[5,790.60]]（占总[[21.26%]]），共涉及[[810人]]：",
          )}
        </p>
        <ul className="mt-4 space-y-3 text-slate-900 font-bold">
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[核心分布]]：主要集中在 [[V6及V7]] 部分，占比总计达 [[79.50%]]；[[异常类型]]主要以[[体育打水]]、[[红利套利]]为主，总计人数占比达 [[70.86%]]（金额占比达 [[71.44%]]）。",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <div className="flex-1">
              <span className="text-slate-900 font-bold">业务分析：</span>
              <ul className="mt-1 list-none space-y-1.5 pl-4 text-slate-900 font-bold">
                <li className="flex items-start gap-1">
                  <span className="shrink-0">a.</span>
                  <span>{highlightNumbers("部分违规用户养号手段愈发成熟，导致[[发现延迟]]情况发生。")}</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="shrink-0">b.</span>
                  <span>{highlightNumbers("高V用户违规[[手法更隐蔽]]，对专员综合判断能力要求更高，同时需持续识别[[新型手法]]。")}</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <div className="flex-1">
              <span className="text-slate-900 font-bold">持续优化：</span>
              <ul className="mt-1 list-none space-y-1.5 pl-4 text-slate-900 font-bold">
                <li className="flex items-start gap-1">
                  <span className="shrink-0">1.</span>
                  <span>{highlightNumbers("[[高V观察中用户]]超过 [[7天]] 未发现异常的，提交[[组长审核]]；超过 [[15天]] 未发现异常的，升级至[[主管审核]]。组长每日进行[[复审抽查]]，整体处理人数对比Q1减少约 [[20%]]。")}</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="shrink-0">2.</span>
                  <span>{highlightNumbers("对于[[高V问题]]，[[提高向上反馈频率]]，[[一审]]或[[二审]]优先向[[组长]]反馈问题，并对[[高V观察中用户]][[定期排查]]。")}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </SummaryBox>

      {/* 布局：VIP等级与违规拦截金大表（全宽），下方补充类型统计 */}
      <div className="space-y-6">
        {/* VIP等级与违法类型金额明细表 */}
        <ReportPanel padding="none" className="overflow-hidden space-y-3">
          <ReportTableFrame>
            <table className="report-dense-table">
              <thead className="bg-slate-100 text-slate-900 ">
                {/* 一级表头 */}
                <tr className="bg-slate-100 border-b border-slate-200 font-black text-slate-900">
                  <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">VIP</th>
                  <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">总人数</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">体育</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">电竞</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">租卖</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">彩金</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 text-center">软件</th>
                </tr>
                {/* 二级表头 */}
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">%</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">%</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">%</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">%</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">%</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 font-black text-center">%</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums">
                {vipDetailData.map((row, idx) => {
                  const isHighDensity = row.vip_level === "VIP6" || row.vip_level === "VIP7";
                  return (
                    <tr key={idx} className={isHighDensity ? "bg-blue-50/40" : idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className={`px-1 md:px-2 lg:px-3 py-2.5 text-center font-black border-r border-slate-100 ${isHighDensity ? "text-blue-700" : ""}`}>
                        {row.vip_level}
                      </td>
                      <td className={`px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono ${isHighDensity ? "text-blue-700 font-black" : ""}`}>{row.total_people}</td>
                      <td className={`px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100 ${isHighDensity ? "text-blue-700 font-black bg-blue-50/80" : ""}`}>{row.vip_people_pct}</td>

                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.sports_people}</td>
                      <td className={`px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono ${isHighDensity ? "text-blue-700 font-black" : ""}`}>{row.sports_amt}</td>
                      <td className={`px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100 ${isHighDensity ? "text-blue-700 font-black" : ""}`}>{row.sports_pct}</td>

                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.esports_people}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.esports_amt}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.esports_pct}</td>

                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.rent_people}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.rent_amt}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.rent_pct}</td>

                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.bonus_people}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.bonus_amt}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.bonus_pct}</td>

                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_people}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_amt}</td>
                      <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_pct}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-blue-50/90 font-black border-t-2 border-blue-200 text-slate-900">
                  <td className="px-1 md:px-2 lg:px-3 py-2.5 text-center border-r border-blue-100 font-black">总计</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900 font-black">810</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-blue-100 text-blue-900 font-black">100.00%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900 font-black">371</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-700 bg-blue-100/80 font-black">3,097.93</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-blue-100 text-blue-700 bg-blue-100/80 font-black">53.50%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">112</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-800 font-bold">834.66</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-blue-100 text-blue-800 font-bold">14.41%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">81</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-800 font-bold">651.78</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-blue-100 text-blue-800 font-bold">11.26%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">203</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-800 font-bold">1,038.85</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-blue-100 text-blue-800 font-bold">17.94%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">43</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-slate-900">167.38</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-slate-900">2.89%</td>
                </tr>
              </tfoot>
            </table>
          </ReportTableFrame>
        </ReportPanel>

      </div>
    </div>
  );
};
