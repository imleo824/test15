import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "依托[[系统自动化精简人工]]，持续优化人员技能与岗位结构，大幅提升单人人效；",
    },
    {
      title: "考核机制",
      category: "降本增效",
      content: "落实全流程量化考核与[[末位淘汰]]，人力向[[专业分析与策略岗位]]倾斜，杜绝人员冗余；",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各职场承载力[[动态平衡工位]]，优化各场地工位以控制组织风险与合规风险；",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，压缩协同链路，全面强化权限隔离与[[全链路合规安全]]。",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 核心战略导语 */}
      <SummaryBox variant="chapter">
        <div className="text-sm md:text-base font-medium text-slate-900 leading-relaxed">
          {highlightNumbers(
            "依托[[系统自动化]]全面推进[[组织精简化]]与[[作业合规化]]，实质提升专职风控人效。"
          )}
        </div>
      </SummaryBox>

      {/* 1.1 组织治理核心举措 (条形矩阵) */}
      <div className="space-y-4">
        <ReportSectionHeader title="1.1 组织治理核心举措" />

        <SummaryBox variant="module">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "[[人效]]是团队最核心的竞争力，坚决去除冗余岗位、低效人员；[[安全合规]]是业务稳健运行最核心的基础保障。"
            )}
          </div>
        </SummaryBox>

        <div className="border border-slate-200 bg-white p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 text-xs">
            {policyItems.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="report-sequence-badge text-xs">
                      {index + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs sm:text-sm font-bold px-2 py-0.5 border ${
                      item.category === "降本增效"
                        ? "text-emerald-800 bg-emerald-50 border-emerald-200"
                        : "text-blue-800 bg-blue-50 border-blue-200"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {highlightNumbers(item.content)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1.2 各职场人员分布与变动明细 */}
      <div className="space-y-4">
        <ReportSectionHeader title="1.2 各职场人员分布与变动明细" />

        <SummaryBox variant="module">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "得益于[[系统自动化优化]]与智能审单流转，外包占比大幅降低 [[99%]]，全面实现全员正式在册与专职化运营管控。"
            )}
          </div>
        </SummaryBox>

        <div className="border border-slate-200 bg-white p-5 space-y-6">
          {/* 第一层：CD 占比 & WB 外包 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Card 1: CD */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-slate-50/70 p-4 text-center space-y-1.5">
              <span className="text-sm font-bold text-slate-800 block tracking-wider">
                在岗人数
              </span>
              <div className="flex items-baseline justify-center gap-1.5 py-1">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight tabular-nums">
                  365
                </span>
                <span className="text-sm font-bold text-slate-600">人</span>
              </div>
            </div>

            {/* Card 2: WB */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-slate-50/70 p-4 text-center space-y-1.5">
              <span className="text-sm font-bold text-slate-800 block tracking-wider">
                外包人力
              </span>
              <div className="flex items-baseline justify-center gap-2 py-1">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight tabular-nums">
                  119
                </span>
                <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2 py-0.5 border border-slate-300 tabular-nums">
                  -17
                </span>
                <span className="text-sm font-bold text-slate-600">人</span>
              </div>
            </div>
          </div>

          {/* 树状连接线 (仅在中大屏幕显示) */}
          <div className="hidden md:block my-1">
            {/* 垂直主干线 */}
            <div className="w-px h-4 bg-slate-300 mx-auto" />

            {/* 水平分支线 */}
            <div className="w-[83.33%] mx-auto h-px bg-slate-300 relative">
              {/* 6个下降触点 */}
              <div className="absolute top-0 left-[0%] -translate-x-1/2 w-px h-4 bg-slate-300" />
              <div className="absolute top-0 left-[20%] -translate-x-1/2 w-px h-4 bg-slate-300" />
              <div className="absolute top-0 left-[40%] -translate-x-1/2 w-px h-4 bg-slate-300" />
              <div className="absolute top-0 left-[60%] -translate-x-1/2 w-px h-4 bg-slate-300" />
              <div className="absolute top-0 left-[80%] -translate-x-1/2 w-px h-4 bg-slate-300" />
              <div className="absolute top-0 left-[100%] -translate-x-1/2 w-px h-4 bg-slate-300" />
            </div>
          </div>

          {/* 第二层：6个细分岗位卡片 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "T场地", count: "3", change: "↓ -18", isReduction: true },
              { label: "D场地", count: "71", change: "↓ -5", isReduction: true },
              { label: "S场地", count: "239", change: "↑ +21", isIncrease: true },
              { label: "F场地", count: "52", change: "↑ +2", isIncrease: true },
              { label: "远程", count: "0", change: "↓ -5", isReduction: true },
              { label: "外包", count: "119", change: "↓ -12", isReduction: true },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-slate-200 bg-white p-3.5 text-center flex flex-col items-center justify-between space-y-2"
              >
                <div className="text-sm font-bold text-slate-800">
                  {item.label}
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight tabular-nums">
                  {item.count}
                </div>
                <div
                  className={`font-mono text-xs font-bold px-2 py-0.5 border tabular-nums ${
                    item.isIncrease
                      ? "text-blue-900 bg-blue-50 border-blue-200"
                      : "text-slate-700 bg-slate-100 border-slate-200"
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
  );
};
