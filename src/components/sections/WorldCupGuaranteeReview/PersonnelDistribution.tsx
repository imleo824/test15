import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "以[[系统自动审单]]替代重复人工审核，压降外包编制，提升[[全盘人效与出单时效]]。",
    },
    {
      title: "考核优化",
      category: "降本增效",
      content: "落实量化考核与[[末位淘汰]]机制，精简低效编制，提高团队人均效能。",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各职场承载力进行[[动态调配]]，分散集中度以控制[[属地合规风险]]。",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，缩短协同链路，严格执行[[权限隔离与全流程操作审计]]。",
    },
  ];

  return (
    <div className="report-chapter-content">
      {/* 1.1 组织优化举措 */}
      <div className="flex flex-col gap-[var(--report-panel-gap)]">
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
      <div className="flex flex-col gap-[var(--report-panel-gap)]">
        <ReportSectionHeader title="1.2 人员分布" />

        <SummaryBox variant="module">
          <div className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "各职场编制按业务承载动态调配；持续提升系统自动审单比例，自 9月起 将外包审单量压降至 1% 以下（预计在10月内清0），实现[[成本节约与差错压降]]实质成效。"
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
                  内部职场在岗
                </span>
                <ReportBadge tone="slate" className="text-xs font-mono">
                  内部在岗
                </ReportBadge>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    356
                  </span>
                  <span className="text-sm font-bold text-slate-600">人</span>
                </div>
                <ReportBadge tone="green" className="text-xs sm:text-sm font-mono font-bold">
                  ↓ -9 人
                </ReportBadge>
              </div>
            </div>

            {/* Card 2: 外包人力 */}
            <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider uppercase">
                  外包在岗总数
                </span>
                <ReportBadge tone="slate" className="text-xs font-mono">
                  外包编制
                </ReportBadge>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    100
                  </span>
                  <span className="text-sm font-bold text-slate-600">人</span>
                </div>
                <ReportBadge tone="green" className="text-xs sm:text-sm font-mono font-bold">
                  ↓ -19 人
                </ReportBadge>
              </div>
            </div>
          </div>

          {/* 第二层：职场属地分布明细 */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                各职场属地分布明细
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
                  <div className="w-full flex justify-center">
                    <ReportBadge
                      tone={
                        item.isIncrease
                          ? "blue"
                          : item.isZero
                          ? "slate"
                          : "green"
                      }
                      className="w-full justify-center text-xs font-mono font-bold"
                    >
                      {item.change}
                    </ReportBadge>
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
