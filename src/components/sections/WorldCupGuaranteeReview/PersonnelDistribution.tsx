import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "以[[系统自动化]]替代重复人工审核，精简岗位，提升人效和整体速率。",
    },
    {
      title: "考核优化",
      category: "降本增效",
      content: "落实量化考核与[[末位淘汰]]，精简低效编制，盘活组织业绩竞争。",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各职场承载力[[动态调配]]，分散集中度以控制属地与合规风险。",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，缩短协同链路，严格权限隔离与[[操作审计留痕]]。",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* 1.1 组织优化举措 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSectionHeader title="1.1 组织优化" />

        <SummaryBox variant="module">
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "聚焦[[人效提升]]与[[合规安全]]：强化策略分析职能，压降重复人工审核与外包编制，持续优化各职场属地资源配置。"
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
                <span
                  className={`text-xs font-mono font-bold ${
                    item.category === "降本增效"
                      ? "text-emerald-700"
                      : "text-blue-700"
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal flex-1">
                {highlightNumbers(item.content)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.2 各职场人员分布与变动明细 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSectionHeader title="1.2 人员分布" />

        <SummaryBox variant="module">
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "各职场编制有序调配转移；持续提升系统自动审单比例，自 [[9月起]] 将外包审单量压降至 [[1% 以下]]，实现[[降本、增效、提质]]多维突破。"
            )}
          </div>
        </SummaryBox>

        <div className="space-y-6 pt-2">
          {/* 第一层：在岗人数 & 外包人力 核心指标 (横向全宽对称对齐) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Card 1: 在岗人数 */}
            <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider uppercase">
                  总人数
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5">
                  场地
                </span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    356
                  </span>
                  <span className="text-sm font-bold text-slate-600">人</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                  <span>↓ 较年初</span>
                  <span>-9 人</span>
                </div>
              </div>
            </div>

            {/* Card 2: 外包人力 */}
            <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider uppercase">
                  总人数
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5">
                  外包
                </span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    100
                  </span>
                  <span className="text-sm font-bold text-slate-600">人</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                  <span>↓ 持续压降</span>
                  <span>-19 人</span>
                </div>
              </div>
            </div>
          </div>

          {/* 第二层：职场属地分布明细 */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                分布
              </span>
              <span className="text-xs font-mono text-slate-400">
                单位：人
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
              {[
                { label: "T场地", count: "3", change: "持平 0", isIncrease: false, isZero: true },
                { label: "D场地", count: "115", change: "↑ +44", isIncrease: true, isZero: false },
                { label: "S场地", count: "211", change: "↓ -28", isIncrease: false, isZero: false },
                { label: "F场地", count: "24", change: "↓ -28", isIncrease: false, isZero: false },
                { label: "远程", count: "0", change: "已清零", isIncrease: false, isZero: true },
                { label: "外包", count: "100", change: "↓ -19", isIncrease: false, isZero: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-slate-200 p-4 text-center flex flex-col items-center justify-between space-y-2 h-full"
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide pb-1.5 border-b border-slate-100 w-full">
                    {item.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-mono tabular-nums py-0.5">
                    {item.count}
                  </div>
                  <div
                    className={`text-xs font-mono font-bold tabular-nums px-1.5 py-0.5 w-full ${
                      item.isIncrease
                        ? "text-blue-800 bg-blue-50 border border-blue-200"
                        : item.isZero
                        ? "text-slate-500 bg-slate-50 border border-slate-100"
                        : "text-emerald-800 bg-emerald-50 border border-emerald-200"
                    }`}
                  >
                    {item.change}
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
