import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewHighVipDetail: React.FC = () => {
  // 高等级会员明细数据（最新更新）
  const vipDetailData = [
    {
      vip_level: "VIP 6",
      total_people: 254,
      vip_people_pct: "51.84%",
      sports_people: 123, sports_amt: "742.40", sports_pct: "35.47%",
      esports_people: 34, esports_amt: "117.79", esports_pct: "18.05%",
      agent_people: 18, agent_amt: "146.05", agent_pct: "36.58%",
      bonus_people: 70, bonus_amt: "349.03", bonus_pct: "52.25%",
      software_people: 9, software_amt: "19.75", software_pct: "18.19%",
    },
    {
      vip_level: "VIP 7",
      total_people: 173,
      vip_people_pct: "35.31%",
      sports_people: 85, sports_amt: "959.31", sports_pct: "45.83%",
      esports_people: 33, esports_amt: "156.32", esports_pct: "23.96%",
      agent_people: 17, agent_amt: "125.24", agent_pct: "31.37%",
      bonus_people: 28, bonus_amt: "237.46", bonus_pct: "35.55%",
      software_people: 10, software_amt: "88.16", software_pct: "81.20%",
    },
    {
      vip_level: "VIP 8",
      total_people: 49,
      vip_people_pct: "10.00%",
      sports_people: 17, sports_amt: "266.83", sports_pct: "12.75%",
      esports_people: 13, esports_amt: "307.47", esports_pct: "47.13%",
      agent_people: 10, agent_amt: "113.40", agent_pct: "28.40%",
      bonus_people: 8, bonus_amt: "81.53", bonus_pct: "12.20%",
      software_people: 1, software_amt: "0.66", software_pct: "0.61%",
    },
    {
      vip_level: "VIP 9",
      total_people: 12,
      vip_people_pct: "2.45%",
      sports_people: 7, sports_amt: "122.57", sports_pct: "5.86%",
      esports_people: 5, esports_amt: "70.85", esports_pct: "10.86%",
      agent_people: 0, agent_amt: "0.00", agent_pct: "0.00%",
      bonus_people: 0, bonus_amt: "0.00", bonus_pct: "0.00%",
      software_people: 0, software_amt: "0.00", software_pct: "0.00%",
    },
    {
      vip_level: "VIP 10",
      total_people: 2,
      vip_people_pct: "0.41%",
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
        <div className="space-y-2.5 text-sm text-slate-700 font-normal leading-relaxed">
          <p>
            {highlightNumbers(
              "高V禁用名单数据体现：总人数 [[490 人]]（VIP6~VIP10 核心排查），等级人数分布主要集中在 [[V6 与 V7]] 部分（[[254 人]]与 [[173 人]]），占比合计达 [[87.14%]]；异常类型主要以[[体育打水与彩金套利]]为主，两者合计金额占比达 [[70%]]。"
            )}
          </p>
          <ul className="space-y-2 text-slate-700 pt-1">
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">违规特征与研判要求：</strong>
                {highlightNumbers(
                  "部分违规会员养号手段愈发成熟且手法更隐蔽，对专员水平提出更高要求，尤其在整体研判与新型套利手法的识别上需要更高的业务认知水平。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">分级流转与升级机制：</strong>
                {highlightNumbers(
                  "高V观察中用户大于 [[7 天]]未发现异常提交组长审核，大于 [[15 天]]未发现异常升级为主管审核（整体高V禁用人数呈现每月持续减少）。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">排查机制与向上反馈：</strong>
                {highlightNumbers(
                  "针对高V问题提高向上反馈频率，一审或二审优先向组长反馈问题，并对高V观察中用户实行[[定期排查机制]]。"
                )}
              </span>
            </li>
          </ul>
        </div>
      </SummaryBox>

      {/* 明细表 */}
      <div className="space-y-6">
        <ReportTableFrame noScroll>
          <table className="w-full report-data-table border-collapse whitespace-nowrap text-[10px] sm:text-[10.5px] lg:text-[11.5px]">
            <thead>
              {/* 一级表头 */}
              <tr className="border-b border-slate-300 font-bold text-slate-900 bg-slate-100/90">
                <th rowSpan={2} className="py-2 px-2.5 text-left border-r border-slate-300">VIP等级</th>
                <th colSpan={2} className="py-1.5 px-1.5 text-center border-r border-slate-300 bg-blue-100/60 text-blue-950">总人数</th>
                <th colSpan={3} className="py-1.5 px-1.5 text-center border-r border-slate-300">体育</th>
                <th colSpan={3} className="py-1.5 px-1.5 text-center border-r border-slate-300">电竞</th>
                <th colSpan={3} className="py-1.5 px-1.5 text-center border-r border-slate-300">代理刷子</th>
                <th colSpan={3} className="py-1.5 px-1.5 text-center border-r border-slate-300">彩金</th>
                <th colSpan={3} className="py-1.5 px-1.5 text-center">软件</th>
              </tr>
              {/* 二级表头 */}
              <tr className="border-b border-slate-300 text-slate-700 font-semibold bg-slate-50 text-[9.5px] sm:text-[10px] lg:text-[10.5px]">
                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>

                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-right">金额(万)</th>
                <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>

                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-right">金额(万)</th>
                <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>

                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-right">金额(万)</th>
                <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>

                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-right">金额(万)</th>
                <th className="px-1.5 py-1 text-center border-r border-slate-300">占比</th>

                <th className="px-1.5 py-1 text-center">人数</th>
                <th className="px-1.5 py-1 text-right">金额(万)</th>
                <th className="px-1.5 py-1 text-center">占比</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums">
              {vipDetailData.map((row, idx) => {
                const isHighDensity = row.vip_level === "VIP 6" || row.vip_level === "VIP 7";
                return (
                  <tr key={idx} className={isHighDensity ? "bg-blue-50/30 hover:bg-blue-50/50" : idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/90"}>
                    <td className={`px-2.5 py-1.5 text-left font-bold border-r border-slate-200 ${isHighDensity ? "text-blue-900" : "text-slate-900"}`}>
                      {row.vip_level}
                    </td>
                    <td className={`px-1.5 py-1.5 text-center font-mono ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.total_people}</td>
                    <td className={`px-1.5 py-1.5 text-center font-mono border-r border-slate-200 ${isHighDensity ? "text-blue-900 font-bold bg-blue-50/50" : "text-slate-600"}`}>{row.vip_people_pct}</td>

                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-700">{row.sports_people}</td>
                    <td className={`px-1.5 py-1.5 text-right font-mono ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-700"}`}>{row.sports_amt}</td>
                    <td className={`px-1.5 py-1.5 text-center font-mono border-r border-slate-200 ${isHighDensity ? "text-blue-900 font-bold" : "text-slate-600"}`}>{row.sports_pct}</td>

                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-700">{row.esports_people}</td>
                    <td className="px-1.5 py-1.5 text-right font-mono text-slate-700">{row.esports_amt}</td>
                    <td className="px-1.5 py-1.5 text-center font-mono border-r border-slate-200 text-slate-600">{row.esports_pct}</td>

                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-700">{row.agent_people}</td>
                    <td className="px-1.5 py-1.5 text-right font-mono text-slate-700">{row.agent_amt}</td>
                    <td className="px-1.5 py-1.5 text-center font-mono border-r border-slate-200 text-slate-600">{row.agent_pct}</td>

                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-700">{row.bonus_people}</td>
                    <td className="px-1.5 py-1.5 text-right font-mono text-slate-700">{row.bonus_amt}</td>
                    <td className="px-1.5 py-1.5 text-center font-mono border-r border-slate-200 text-slate-600">{row.bonus_pct}</td>

                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-700">{row.software_people}</td>
                    <td className="px-1.5 py-1.5 text-right font-mono text-slate-700">{row.software_amt}</td>
                    <td className="px-1.5 py-1.5 text-center font-mono text-slate-600">{row.software_pct}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t-2 border-slate-300 bg-slate-50 font-bold font-mono tabular-nums text-slate-900">
              <tr className="border-b-2 border-slate-900 bg-slate-100/90 font-bold">
                <td className="px-2.5 py-2 text-left font-bold border-r border-slate-200">总计</td>
                <td className="px-1.5 py-2 text-center text-slate-900 font-bold">490</td>
                <td className="px-1.5 py-2 text-center text-slate-900 font-bold border-r border-slate-200">100.00%</td>

                <td className="px-1.5 py-2 text-center text-slate-900">233</td>
                <td className="px-1.5 py-2 text-right text-blue-900 font-bold">2,093.12</td>
                <td className="px-1.5 py-2 text-center text-blue-900 font-bold border-r border-slate-200">100.00%</td>

                <td className="px-1.5 py-2 text-center">85</td>
                <td className="px-1.5 py-2 text-right text-slate-800">652.43</td>
                <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100.00%</td>

                <td className="px-1.5 py-2 text-center">46</td>
                <td className="px-1.5 py-2 text-right text-slate-800">399.26</td>
                <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100.00%</td>

                <td className="px-1.5 py-2 text-center">106</td>
                <td className="px-1.5 py-2 text-right text-slate-800">668.02</td>
                <td className="px-1.5 py-2 text-center text-slate-600 border-r border-slate-200">100.00%</td>

                <td className="px-1.5 py-2 text-center">20</td>
                <td className="px-1.5 py-2 text-right text-slate-900">108.58</td>
                <td className="px-1.5 py-2 text-center text-slate-600">100.00%</td>
              </tr>
            </tfoot>
          </table>
        </ReportTableFrame>
      </div>
    </div>
  );
};
