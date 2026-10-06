import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "以[[系统自动审单]]替代人工，压降外包及总部人员，提升[[人效与时效]]。",
    },
    {
      title: "考核优化",
      category: "降本增效",
      content: "落实量化考核与[[末位淘汰]]机制，精简低效人员，提高团队人均效能。",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各职场承载力进行[[动态调配]]，分散集中度以控制[[属地合规风险]]。",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，缩短协同链路，执行更严格[[安全合规]]。",
    },
  ];

  return (
    <div className="report-chapter-content space-y-12 sm:space-y-14">
      {/* 1.1 组织优化举措 */}
      <div className="flex flex-col gap-6">
        <ReportSectionHeader title="1.1 组织优化" />

        <SummaryBox variant="module">
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "聚焦[[人效提升]]与[[合规安全]]：强化系统策略职能，压降人工审核，持续优化各场地配置。"
            )}
          </div>
        </SummaryBox>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {policyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 border border-slate-200 flex flex-col justify-between space-y-3 h-full"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-950 text-base">
                    {item.title}
                  </span>
                </div>
                <ReportBadge
                  tone={item.category === "降本增效" ? "green" : "blue"}
                  className="text-xs font-mono"
                >
                  {item.category}
                </ReportBadge>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal flex-1">
                {highlightNumbers(item.content)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.2 各职场人员分布与变动明细 */}
      <div className="flex flex-col gap-6">
        <ReportSectionHeader title="1.2 人员分布" />

        <SummaryBox variant="module">
          <div className="space-y-2.5 text-sm text-slate-700 font-normal leading-relaxed">
            <p>
              {highlightNumbers(
                "各职场承载动态调配，持续[[提升系统自动审单比例]]，实现[[成本节约与差错压降]]实质成效。历经三轮持续深化调整，大盘审核人员总编制已从最初的 [[524 人]] 稳步压缩降至当前的 [[456 人]]，累计**净减 68 人**（整体降幅 [[-13.0%]]）："
              )}
            </p>
            <ul className="space-y-1.5 pt-0.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">远程办公：</strong>
                  {highlightNumbers("效率极低且缺乏合规监管机制的远程人员已[[全面清零]]（从原 84 人全部平稳分流或清退）。")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">外包团队：</strong>
                  {highlightNumbers("审单人力[[持续压减 24.8%]]（由 133 人压降至 100 人），自 9 月起将外包审单量压降至 [[1% 以下]]（预计在 10 月内人员清零）。人员清零后，同步安全[[回收：后台管理系统权限、各种IP白名单、虚拟机等]]，并收回所有相关办公设备。")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">总部场地：</strong>
                  {highlightNumbers("绩效考核以及系统比例提升等手段持续[[压缩和清理]]低效人员。")}
                </span>
              </li>
            </ul>
          </div>
        </SummaryBox>

        <div className="space-y-8 pt-2">
          {/* 第一部分：历年各阶段人员动态优化趋势（简单表格展示形式） */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-slate-950 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-slate-950">
                  人员趋势
                </span>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 overflow-hidden">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-950 font-bold">
                    <th className="py-3 px-3 font-bold text-slate-900 text-left">编制类型</th>
                    <th className="py-3 px-3 font-mono font-bold text-center">25 Q4</th>
                    <th className="py-3 px-3 font-mono font-bold text-center">26 Q1</th>
                    <th className="py-3 px-3 font-mono font-bold text-center">26 Q2</th>
                    <th className="py-3 px-3 font-mono font-extrabold text-center text-blue-950 bg-blue-100 border-x-2 border-blue-300">26 Q3 (当前)</th>
                    <th className="py-3 px-3 font-mono font-bold text-center bg-amber-50/40 text-amber-950 border-x border-amber-100/50">2026 10月</th>
                    <th className="py-3 px-3 font-mono font-bold text-center bg-indigo-50/40 text-indigo-950 border-x border-indigo-100/50">2026 11月</th>
                    <th className="py-3 px-3 font-bold text-right">变化</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-800">外包人员</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">133</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">131</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">121</td>
                    <td className="py-3 px-3 font-mono text-center font-bold text-blue-950 bg-blue-50 border-x-2 border-blue-200/80">100</td>
                    <td className="py-3 px-3 font-mono text-center">
                      <div className="inline-block bg-amber-100/80 border border-amber-300 text-amber-950 px-2 py-0.5 font-extrabold rounded-sm text-xs shadow-2xs">
                        0 <span className="text-[9px] font-bold block text-amber-800">-100%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-mono text-center text-slate-500">0</td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold font-mono text-xs">
                        <span>↓ -100%</span>
                        <span className="text-[11px] font-sans font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-xs">10月清零</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-800">远程办公</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">84</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">19</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">0</td>
                    <td className="py-3 px-3 font-mono text-center font-bold text-blue-950 bg-blue-50 border-x-2 border-blue-200/80">0</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-500">0</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-500">0</td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold font-mono text-xs">
                        <span>↓ -100%</span>
                        <span className="text-[11px] font-sans font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-xs">-84</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-800">总部场地</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">307</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">365</td>
                    <td className="py-3 px-3 font-mono text-center text-slate-600">366</td>
                    <td className="py-3 px-3 font-mono text-center font-bold text-blue-950 bg-blue-50 border-x-2 border-blue-200/80">356</td>
                    <td className="py-3 px-3 font-mono text-center">
                      <div className="inline-block bg-amber-100/80 border border-amber-300 text-amber-950 px-2 py-0.5 font-extrabold rounded-sm text-xs shadow-2xs">
                        320 <span className="text-[9px] font-bold block text-amber-800">-10%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-mono text-center">
                      <div className="inline-block bg-amber-100/80 border border-amber-300 text-amber-950 px-2 py-0.5 font-extrabold rounded-sm text-xs shadow-2xs">
                        288 <span className="text-[9px] font-bold block text-amber-800">-10%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1.5 text-blue-700 font-bold font-mono text-xs">
                        <span>↓ -6.2%</span>
                        <span className="text-[11px] font-sans font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-xs">总部精减</span>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-slate-100/90 font-extrabold border-t-2 border-b border-slate-300 text-slate-950 text-xs sm:text-sm">
                    <td className="py-3.5 px-3 font-extrabold text-slate-950 text-sm">编制总计</td>
                    <td className="py-3.5 px-3 font-mono font-extrabold text-center text-slate-950 text-sm">524</td>
                    <td className="py-3.5 px-3 font-mono font-extrabold text-center text-slate-950 text-sm">
                      515 <span className="text-emerald-600 font-black">↓</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-extrabold text-center text-slate-950 text-sm">
                      487 <span className="text-emerald-600 font-black">↓</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-black text-center text-blue-950 bg-blue-100/80 border-x-2 border-blue-300 text-sm shadow-2xs">
                      456 <span className="text-emerald-600 font-black">↓</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-extrabold text-center text-slate-950 bg-amber-50/80 text-sm">
                      320 <span className="text-emerald-600 font-black">↓</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-extrabold text-center text-slate-950 bg-indigo-50/80 text-sm">
                      288 <span className="text-emerald-600 font-black">↓</span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1.5 text-emerald-800 font-black font-mono text-xs sm:text-sm">
                        <span>↓ -45.0%</span>
                        <span className="text-[11px] font-sans font-black text-emerald-950 bg-emerald-100 border border-emerald-300 px-1.5 py-0.5 rounded-xs">累计压降</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 第二部分：各场地属地分布明细 */}
          <div className="space-y-4">
            <div className="flex items-center justify-start pb-2 border-b border-slate-100 gap-3 px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-slate-950 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-slate-950">
                  分布情况
                </span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-xs rounded-sm">
                <span className="font-bold text-blue-950">当前分布总人数：</span>
                <span className="font-mono font-extrabold text-blue-700">456</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
              {[
                { label: "T", count: "3" },
                { label: "D", count: "115" },
                { label: "S", count: "211" },
                { label: "F", count: "24" },
                { label: "远程", count: "0" },
                { label: "外包", count: "100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-slate-200 p-4 text-center flex flex-col items-center justify-center space-y-1.5 h-full hover:shadow-2xs transition-shadow"
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide pb-1.5 border-b border-slate-100 w-full">
                    {item.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-mono tabular-nums pt-1.5">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
