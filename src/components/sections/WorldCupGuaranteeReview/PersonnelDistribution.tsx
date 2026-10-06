import React from "react";
import { ArrowDown } from "lucide-react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

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
                "各职场承载动态调配，持续[[提升系统自动审单比例]]，实现[[成本节约与差错压降]]实质成效。历经三轮持续深化调整，大盘审核人员总编制已从最初的 [[524 人]] 稳步压缩降至当前的 [[456 人]]，累计**净减 68 人**（整体降幅 [[-13.0%]]）；后续规划预期：**10 月**随外包清零大盘总编制压降至 [[320 人]]，**11 月**全面出单替代后最终目标收敛至 [[288 人]]（规划累计总压降 [[-45.0%]]，净减 [[236 人]]）："
              )}
            </p>
            <ul className="space-y-1.5 pt-0.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">远程：</strong>
                  {highlightNumbers("效率极低且缺乏合规监管机制的远程人员已于 [[26 Q2 全面清零]]（从原 84 人全部平稳分流或清退）。")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">外包：</strong>
                  {highlightNumbers("审单人力[[持续压减 24.8%]]（由 133 人压降至 100 人），自 9 月起将外包审单量压降至 [[1% 以下]]（预计在 10 月内人员清零）。人员清零后，同步安全[[回收：后台管理系统权限、各种 IP 白名单、虚拟机等]]，并收回所有相关办公设备。")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
                <span>
                  <strong className="text-slate-950 font-bold">场地：</strong>
                  {highlightNumbers("依托绩效考核与系统自动化出单替代，持续[[优化人员结构与清理低效人力]]。")}
                </span>
              </li>
            </ul>
          </div>
        </SummaryBox>

        <div className="space-y-6 pt-2">
          {/* 第一部分：历年各阶段人员动态优化趋势 */}
          <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-2 px-1">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-slate-950 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                  人员趋势
                </span>
                <span className="text-xs font-mono text-slate-500 font-normal">
                  2025 Q4 ➔ 2026 Q3 (当前) ➔ 2026 11月 (规划)
                </span>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-slate-200 text-xs font-mono">
                  <span className="text-slate-600 font-medium">规划累计总压降:</span>
                  <span className="text-emerald-800 font-bold">-45.0% (-236人)</span>
                </span>
              </div>
            </div>
            
            <ReportTableFrame noScroll>
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-300 text-slate-950 font-bold">
                    <th className="py-2.5 px-3.5 font-bold text-slate-950 text-left border-r border-slate-200">类型</th>
                    <th className="py-2.5 px-3 font-mono font-bold text-center border-r border-slate-200">25 Q4</th>
                    <th className="py-2.5 px-3 font-mono font-bold text-center border-r border-slate-200">26 Q1</th>
                    <th className="py-2.5 px-3 font-mono font-bold text-center border-r border-slate-200">26 Q2</th>
                    <th className="py-2.5 px-3.5 font-mono text-center text-slate-950 bg-slate-200 border-x-2 border-slate-500 shadow-xs">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="font-extrabold text-xs sm:text-sm">26 Q3</span>
                        <span className="inline-block px-1.5 py-0.2 bg-slate-950 text-white text-[10px] font-mono font-bold">
                          当前
                        </span>
                      </div>
                    </th>
                    <th className="py-2.5 px-3 font-mono text-center text-slate-900 bg-slate-100 border-r border-slate-300">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="font-extrabold text-xs sm:text-sm">26 10月</span>
                        <span className="inline-block px-1.5 py-0.2 bg-slate-700 text-white text-[10px] font-mono font-bold">
                          规划
                        </span>
                      </div>
                    </th>
                    <th className="py-2.5 px-3 font-mono text-center text-slate-900 bg-slate-100 border-r-2 border-slate-400">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="font-extrabold text-xs sm:text-sm">26 11月</span>
                        <span className="inline-block px-1.5 py-0.2 bg-slate-700 text-white text-[10px] font-mono font-bold">
                          规划
                        </span>
                      </div>
                    </th>
                    <th className="py-2.5 px-3.5 font-bold text-right">规划变动幅度</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal tabular-nums">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold text-slate-900 border-r border-slate-200">外包</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">133</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">131</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">121</td>
                    <td className="py-2.5 px-3.5 font-mono text-center font-extrabold text-slate-950 bg-slate-100 border-x-2 border-slate-400 text-sm sm:text-base">
                      100
                    </td>
                    <td className="py-2.5 px-3 font-mono text-center border-r border-slate-300 bg-slate-50/80">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="font-bold text-slate-900">0</span>
                        <span className="inline-block px-1.5 py-0.2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold font-mono">
                          清零
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-500 border-r-2 border-slate-400 bg-slate-50/80">0</td>
                    <td className="py-2.5 px-3.5 text-right">
                      <div className="flex flex-col items-end justify-center leading-tight gap-0.5">
                        <span className="text-emerald-800 font-bold font-mono text-xs sm:text-sm">↓ -100%</span>
                        <span className="text-[10px] text-emerald-700 font-mono font-medium">(全面清零)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold text-slate-900 border-r border-slate-200">远程</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">84</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">19</td>
                    <td className="py-2.5 px-3 font-mono text-center border-r border-slate-200">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="font-bold text-slate-900">0</span>
                        <span className="inline-block px-1.5 py-0.2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold font-mono">
                          已清零
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-center font-extrabold text-slate-950 bg-slate-100 border-x-2 border-slate-400 text-sm sm:text-base">
                      0
                    </td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-500 border-r border-slate-300 bg-slate-50/80">0</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-500 border-r-2 border-slate-400 bg-slate-50/80">0</td>
                    <td className="py-2.5 px-3.5 text-right">
                      <div className="flex flex-col items-end justify-center leading-tight gap-0.5">
                        <span className="text-emerald-800 font-bold font-mono text-xs sm:text-sm">↓ -100%</span>
                        <span className="text-[10px] text-emerald-700 font-mono font-medium">(已出清)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-2.5 px-3.5 font-bold text-slate-900 border-r border-slate-200">场地</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">307</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">365</td>
                    <td className="py-2.5 px-3 font-mono text-center text-slate-600 border-r border-slate-200">366</td>
                    <td className="py-2.5 px-3.5 font-mono text-center font-extrabold text-slate-950 bg-slate-100 border-x-2 border-slate-400 text-sm sm:text-base">
                      356
                    </td>
                    <td className="py-2.5 px-3 font-mono text-center border-r border-slate-300 bg-slate-50/80">
                      <div className="flex flex-col items-center justify-center leading-tight gap-0.5">
                        <span className="font-bold text-slate-900">320</span>
                        <span className="text-[10px] text-slate-500 font-mono">(-10%)</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-center border-r-2 border-slate-400 bg-slate-50/80">
                      <div className="flex flex-col items-center justify-center leading-tight gap-0.5">
                        <span className="font-bold text-slate-900">288</span>
                        <span className="text-[10px] text-slate-500 font-mono">(-10%)</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3.5 text-right">
                      <div className="flex flex-col items-end justify-center leading-tight gap-0.5">
                        <span className="text-slate-800 font-bold font-mono text-xs sm:text-sm">↓ -19.1%</span>
                        <span className="text-[10px] text-slate-500 font-mono">(较峰值 366 人)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-slate-100 font-bold border-t-2 border-b-2 border-slate-900 text-slate-950 shadow-xs">
                    <td className="py-3.5 px-3.5 font-bold text-slate-950 text-sm sm:text-base border-r border-slate-300 bg-slate-200/60">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-slate-950 shrink-0" />
                        <span>编制总计</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-center text-slate-950 text-sm sm:text-base border-r border-slate-300">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>524</span>
                        <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-center text-slate-950 text-sm sm:text-base border-r border-slate-300">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>515</span>
                        <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-center text-slate-950 text-sm sm:text-base border-r border-slate-300">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>487</span>
                        <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 font-mono font-black text-center text-slate-950 bg-slate-300 border-x-2 border-slate-600 text-base sm:text-lg">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>456</span>
                        <ArrowDown className="w-4 h-4 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-center text-slate-950 text-sm sm:text-base border-r border-slate-300 bg-slate-100">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>320</span>
                        <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-bold text-center text-slate-950 text-sm sm:text-base border-r-2 border-slate-400 bg-slate-100">
                      <div className="inline-flex items-center justify-center gap-1">
                        <span>288</span>
                        <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] shrink-0" />
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 text-right bg-emerald-50/70 border-l border-emerald-200">
                      <div className="flex flex-col items-end leading-tight gap-0.5">
                        <span className="text-emerald-900 font-extrabold font-mono text-sm sm:text-base">
                          ↓ -45.0%
                        </span>
                        <span className="text-[10px] text-emerald-800 font-mono font-semibold">
                          (-236人)
                        </span>
                        <span className="inline-block px-1.5 py-0.5 bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold border border-emerald-300 mt-0.5">
                          当前已压降 -13.0% (-68人)
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ReportTableFrame>
          </div>

          {/* 第二部分：各场地属地分布明细 */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 px-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-slate-950 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-slate-950">
                  分布情况
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-xs">
                <span className="font-medium text-slate-700">总计：</span>
                <span className="font-mono font-bold text-slate-950">456</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
              {[
                { label: "T", count: "6" },
                { label: "D", count: "115" },
                { label: "S", count: "211" },
                { label: "F", count: "24" },
                { label: "远程", count: "0" },
                { label: "外包", count: "100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-slate-200 p-3.5 text-center flex flex-col items-center justify-between space-y-2 h-full"
                >
                  <div className="text-xs font-bold text-slate-700 tracking-wide pb-1.5 border-b border-slate-100 w-full">
                    {item.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-mono tabular-nums py-1">
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
