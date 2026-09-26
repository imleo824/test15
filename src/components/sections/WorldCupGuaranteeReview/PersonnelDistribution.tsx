import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "依托[[系统自动化]]替代重复人工审核，持续精简岗位配置，提升单人人效；",
    },
    {
      title: "考核机制",
      category: "降本增效",
      content: "落实全流程量化考核与[[末位淘汰]]，人力向[[策略与专业分析岗位]]倾斜，精简低效编制；",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各场地承载力[[动态调配工位]]，优化场地集中度以控制组织风险与合规风险；",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，缩短协同链路，强化权限隔离与[[操作审计留痕]]。",
    },
  ];

  return (
    <div className="space-y-14">
      {/* 核心战略导语 */}
      <SummaryBox variant="chapter">
        <div className="text-sm md:text-base font-medium text-slate-900 leading-relaxed">
          {highlightNumbers(
            "依托[[系统自动化]]推进[[组织精简化]]与[[作业合规化]]，提升专职风控人效与风险拦截质量。"
          )}
        </div>
      </SummaryBox>

      {/* 1.1 组织治理核心举措 (条形矩阵) */}
      <div className="space-y-5">
        <ReportSectionHeader title="1.1 组织治理核心举措" />

        <SummaryBox variant="module">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "坚持以[[人效提升]]与[[合规安全]]为导向，坚决清理低效岗位与冗余流程，保障风控作业规范高效。"
            )}
          </div>
        </SummaryBox>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {policyItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-5 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="report-sequence-badge text-xs">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-900 text-base">
                    {item.title}
                  </span>
                </div>
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 border ${
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

      {/* 1.2 各职场人员分布与变动明细 */}
      <div className="space-y-5">
        <ReportSectionHeader title="1.2 各职场人员分布与变动明细" />

        <SummaryBox variant="module">
          <div className="text-sm md:text-base text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "推进[[系统自动审单]]与流程收口，外包编制净减 [[17人]]，逐步实现专职化集中运营与在册管控。"
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
