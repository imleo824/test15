import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewHighVipDetail: React.FC = () => {
  // 高等级会员明细数据（最新更新）
  const vipDetailData = [
    {
      vip_level: "6",
      total_people: 254,
      vip_people_pct: "48.64%",
      sports_people: 123, sports_amt: "742.40", sports_pct: "35.47%",
      esports_people: 34, esports_amt: "117.79", esports_pct: "18.05%",
      agent_people: 18, agent_amt: "146.05", agent_pct: "36.58%",
      bonus_people: 70, bonus_amt: "349.03", bonus_pct: "52.25%",
      software_people: 9, software_amt: "19.75", software_pct: "18.19%",
    },
    {
      vip_level: "7",
      total_people: 173,
      vip_people_pct: "30.86%",
      sports_people: 85, sports_amt: "959.31", sports_pct: "45.83%",
      esports_people: 33, esports_amt: "156.32", esports_pct: "23.96%",
      agent_people: 17, agent_amt: "125.24", agent_pct: "31.37%",
      bonus_people: 28, bonus_amt: "237.46", bonus_pct: "35.55%",
      software_people: 10, software_amt: "88.16", software_pct: "81.20%",
    },
    {
      vip_level: "8",
      total_people: 49,
      vip_people_pct: "15.06%",
      sports_people: 17, sports_amt: "266.83", sports_pct: "12.75%",
      esports_people: 13, esports_amt: "307.47", esports_pct: "47.13%",
      agent_people: 10, agent_amt: "113.40", agent_pct: "28.40%",
      bonus_people: 8, bonus_amt: "81.53", bonus_pct: "12.20%",
      software_people: 1, software_amt: "0.66", software_pct: "0.61%",
    },
    {
      vip_level: "9",
      total_people: 12,
      vip_people_pct: "3.58%",
      sports_people: 7, sports_amt: "122.57", sports_pct: "5.86%",
      esports_people: 5, esports_amt: "70.85", esports_pct: "10.86%",
      agent_people: 0, agent_amt: "0.00", agent_pct: "0.00%",
      bonus_people: 0, bonus_amt: "0.00", bonus_pct: "0.00%",
      software_people: 0, software_amt: "0.00", software_pct: "0.00%",
    },
    {
      vip_level: "10",
      total_people: 2,
      vip_people_pct: "1.85%",
      sports_people: 1, sports_amt: "2.00", sports_pct: "0.10%",
      esports_people: 0, esports_amt: "0.00", esports_pct: "0.00%",
      agent_people: 1, agent_amt: "14.57", agent_pct: "3.65%",
      bonus_people: 0, bonus_amt: "0.00", bonus_pct: "0.00%",
      software_people: 0, software_amt: "0.00", software_pct: "0.00%",
    },
  ];

  return (
    <div id="section-audit-high-vip-detail" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.6 高等级会员拦截" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <p className="text-sm text-slate-700 font-normal leading-relaxed mb-2.5">
          {highlightNumbers(
            "高V禁用名单数据体现：总人数 [[810人]]（VIP6~VIP10 核心排查 490人），等级人数分布主要集中在 [[V6 及 V7]] 部分（254人与 173人），占比总计达约 [[87%]]；异常类型主要以[[体育打水与彩金套利]]为主，两者总计金额占比达 [[70%]]。"
          )}
        </p>
        <ul className="mt-3 space-y-2.5 text-slate-700">
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2" />
            <div className="flex-1">
              <span className="text-slate-950 font-bold">专项数据复盘分析：</span>
              <ul className="mt-1.5 list-none space-y-1.5 pl-3 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="shrink-0 font-mono text-sm text-slate-500">a.</span>
                  <span>{highlightNumbers("部分违规会员养号手段愈发成熟，导致发现延迟情况发生。")}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="shrink-0 font-mono text-sm text-slate-500">b.</span>
                  <span>{highlightNumbers("高V用户的违规手法往往更隐蔽，对专员水平要求更高，尤其在整体判断与新型套利手法的识别上需要更大的认知水平。")}</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2" />
            <div className="flex-1">
              <span className="text-slate-950 font-bold">优化方案：</span>
              <ul className="mt-1.5 list-none space-y-1.5 pl-3 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="shrink-0 font-mono text-sm text-slate-500">1.</span>
                  <span>{highlightNumbers("高V观察中用户大于 [[7天]] 未发现异常提交组长审核，大于 [[15天]] 未发现异常上升主管审核。（整体高V禁用人数呈现每月持续减少）")}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="shrink-0 font-mono text-sm text-slate-500">2.</span>
                  <span>{highlightNumbers("针对高V问题提高向上反馈频率，一审或二审优先向组长反馈问题，并对高V观察中用户实行[[定期排查机制]]。")}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </SummaryBox>

      {/* 明细表 */}
      <div className="space-y-6">
        <ReportTableFrame noScroll className="overflow-x-hidden">
          <table className="report-dense-table report-dense-table--compact w-full table-fixed report-data-table">
            <colgroup>
              <col className="w-[3.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[5.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[7.5%]" />
              <col className="w-[5.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[7%]" />
              <col className="w-[5.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[7%]" />
              <col className="w-[5.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[7%]" />
              <col className="w-[5.5%]" />
              <col className="w-[4.5%]" />
              <col className="w-[6.5%]" />
              <col className="w-[5%]" />
            </colgroup>
            <thead>
              {/* 一级表头 */}
              <tr className="border-b border-slate-300 font-bold text-slate-900 bg-slate-100/90 text-[11px] sm:text-xs">
                <th rowSpan={2} className="py-2 px-0.5 text-center border-r border-slate-300">V</th>
                <th colSpan={2} className="py-1 px-0.5 text-center border-r border-slate-300 bg-blue-100/50 text-blue-950">总人数</th>
                <th colSpan={3} className="py-1 px-0.5 text-center border-r border-slate-300">体育</th>
                <th colSpan={3} className="py-1 px-0.5 text-center border-r border-slate-300">电竞</th>
                <th colSpan={3} className="py-1 px-0.5 text-center border-r border-slate-300">代理刷子</th>
                <th colSpan={3} className="py-1 px-0.5 text-center border-r border-slate-300">彩金</th>
                <th colSpan={3} className="py-1 px-0.5 text-center">软件</th>
              </tr>
              {/* 二级表头 */}
              <tr className="border-b border-slate-300 text-slate-700 font-semibold bg-slate-50 text-[10px] sm:text-[10.5px]">
                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center border-r border-slate-300">%</th>

                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center">金额</th>
                <th className="px-0.5 py-1 text-center border-r border-slate-300">%</th>

                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center">金额</th>
                <th className="px-0.5 py-1 text-center border-r border-slate-300">%</th>

                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center">金额</th>
                <th className="px-0.5 py-1 text-center border-r border-slate-300">%</th>

                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center">金额</th>
                <th className="px-0.5 py-1 text-center border-r border-slate-300">%</th>

                <th className="px-0.5 py-1 text-center">人</th>
                <th className="px-0.5 py-1 text-center">金额</th>
                <th className="px-0.5 py-1 text-center">%</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums text-[8.5px] sm:text-[9px]">
              {vipDetailData.map((row, idx) => {
                const isHighDensity = row.vip_level === "vip6" || row.vip_level === "vip7";
                return (
                  <tr key={idx} className={isHighDensity ? "bg-blue-50/30" : idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                    <td className={`px-0.5 py-1 text-center font-bold border-r border-slate-200 ${isHighDensity ? "text-blue-900" : "text-slate-900"}`}>
                      {row.vip_level}
                    </td>
                    <td className={`px-0.5 py-1 text-center font-mono ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.total_people}</td>
                    <td className={`px-0.5 py-1 text-center font-mono border-r border-slate-200 ${isHighDensity ? "text-blue-900 font-bold bg-blue-50/50" : "text-slate-700"}`}>{row.vip_people_pct}</td>

                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.sports_people}</td>
                    <td className={`px-0.5 py-1 text-center font-mono ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.sports_amt}</td>
                    <td className={`px-0.5 py-1 text-center font-mono border-r border-slate-200 ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.sports_pct}</td>

                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.esports_people}</td>
                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.esports_amt}</td>
                    <td className="px-0.5 py-1 text-center font-mono border-r border-slate-200 text-slate-700">{row.esports_pct}</td>

                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.agent_people}</td>
                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.agent_amt}</td>
                    <td className="px-0.5 py-1 text-center font-mono border-r border-slate-200 text-slate-700">{row.agent_pct}</td>

                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.bonus_people}</td>
                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.bonus_amt}</td>
                    <td className="px-0.5 py-1 text-center font-mono border-r border-slate-200 text-slate-700">{row.bonus_pct}</td>

                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.software_people}</td>
                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.software_amt}</td>
                    <td className="px-0.5 py-1 text-center font-mono text-slate-700">{row.software_pct}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t-2 border-slate-300 bg-slate-50 font-bold font-mono tabular-nums text-[8.5px] sm:text-[9px] text-slate-900">
              <tr>
                <td className="px-0.5 py-1.5 text-center font-bold border-r border-slate-200">总</td>
                <td className="px-0.5 py-1.5 text-center text-slate-900 font-bold">810</td>
                <td className="px-0.5 py-1.5 text-center text-slate-900 font-bold border-r border-slate-200">100.00%</td>

                <td className="px-0.5 py-1.5 text-center text-slate-900">233</td>
                <td className="px-0.5 py-1.5 text-center text-blue-900 font-bold">2,093.12</td>
                <td className="px-0.5 py-1.5 text-center text-blue-900 font-bold border-r border-slate-200">100.00%</td>

                <td className="px-0.5 py-1.5 text-center">85</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800">652.43</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800 border-r border-slate-200">100.00%</td>

                <td className="px-0.5 py-1.5 text-center">46</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800">399.26</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800 border-r border-slate-200">100.00%</td>

                <td className="px-0.5 py-1.5 text-center">106</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800">668.02</td>
                <td className="px-0.5 py-1.5 text-center text-slate-800 border-r border-slate-200">100.00%</td>

                <td className="px-0.5 py-1.5 text-center">20</td>
                <td className="px-0.5 py-1.5 text-center text-slate-900">108.58</td>
                <td className="px-0.5 py-1.5 text-center text-slate-900">100.00%</td>
              </tr>
            </tfoot>
          </table>
        </ReportTableFrame>
      </div>
    </div>
  );
};
