import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      category: "降本增效",
      content: "以[[系统自动化]]替代重复人工审核，精简岗位编制，提升单人人效；",
    },
    {
      title: "考核机制",
      category: "降本增效",
      content: "落实量化考核与[[末位淘汰]]，人力向[[策略与专业分析岗位]]倾斜，精简低效编制；",
    },
    {
      title: "场地优化",
      category: "合规安全",
      content: "结合各职场承载力[[动态调配工位]]，分散集中度以控制属地与合规风险；",
    },
    {
      title: "流程优化",
      category: "合规安全",
      content: "裁撤跨部门[[冗余流转节点]]，缩短协同链路，严格权限隔离与[[操作审计留痕]]。",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* 核心战略导语 */}
      <SummaryBox variant="chapter">
        <div className="text-base sm:text-[16.5px] font-medium text-slate-900 leading-relaxed">
          {highlightNumbers(
            "依托[[系统自动化]]推进[[组织精简]]与[[作业合规]]，压降低效编制，提升人效与拦截质效。"
          )}
        </div>
      </SummaryBox>

      {/* 1.1 组织优化举措 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSectionHeader title="1.1 组织优化" />

        <SummaryBox variant="module">
          <div className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
            {highlightNumbers(
              "聚焦[[人效提升]]与[[合规安全]]：强化策略分析岗位，压降重复人工审核与外包编制，优化各职场配置。"
            )}
          </div>
        </SummaryBox>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {policyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-7 border border-[#e2e8f0] flex flex-col justify-between space-y-4 h-full"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-950 text-base sm:text-lg">
                    {item.title}
                  </span>
                </div>
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 border ${
                    item.category === "降本增效"
                      ? "text-emerald-800 bg-emerald-50 border-emerald-200"
                      : "text-blue-900 bg-blue-50 border-blue-200"
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <p className="text-sm sm:text-[15.5px] text-slate-700 leading-relaxed font-normal flex-1">
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
          <div className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
            {highlightNumbers(
              "推进[[系统自动审单]]与业务流程收口，外包编制净减 [[17人]]，实现专职化集中运营与在册管控。"
            )}
          </div>
        </SummaryBox>

        <div className="space-y-8 pt-2">
          {/* 第一层：在岗人数 & 外包人力 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto items-stretch">
            {/* Card 1: 在岗人数 */}
            <div className="border border-[#e2e8f0] bg-white p-6 text-center space-y-1.5 flex flex-col justify-between">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block uppercase tracking-wider">
                在岗人数
              </span>
              <div className="flex items-baseline justify-center gap-1.5 py-1 font-mono">
                <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight tabular-nums">
                  365
                </span>
                <span className="text-sm font-bold text-slate-600">人</span>
              </div>
            </div>

            {/* Card 2: 外包人力 */}
            <div className="border border-[#e2e8f0] bg-white p-6 text-center space-y-1.5 flex flex-col justify-between">
              <span className="text-xs sm:text-sm font-bold text-slate-600 block uppercase tracking-wider">
                外包人力
              </span>
              <div className="flex items-baseline justify-center gap-2 py-1 font-mono">
                <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight tabular-nums">
                  119
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 tabular-nums">
                  -17
                </span>
                <span className="text-sm font-bold text-slate-600">人</span>
              </div>
            </div>
          </div>

          {/* 树状连接线 (仅在中大屏幕显示) */}
          <div className="hidden md:block my-3">
            {/* 垂直主干线 */}
            <div className="w-px h-6 bg-slate-300 mx-auto" />

            {/* 水平分支线 */}
            <div className="w-[83.33%] mx-auto h-px bg-slate-300 relative">
              {/* 6个下降触点 */}
              <div className="absolute top-0 left-[0%] -translate-x-1/2 w-px h-6 bg-slate-300" />
              <div className="absolute top-0 left-[20%] -translate-x-1/2 w-px h-6 bg-slate-300" />
              <div className="absolute top-0 left-[40%] -translate-x-1/2 w-px h-6 bg-slate-300" />
              <div className="absolute top-0 left-[60%] -translate-x-1/2 w-px h-6 bg-slate-300" />
              <div className="absolute top-0 left-[80%] -translate-x-1/2 w-px h-6 bg-slate-300" />
              <div className="absolute top-0 left-[100%] -translate-x-1/2 w-px h-6 bg-slate-300" />
            </div>
          </div>

          {/* 第二层：6个细分岗位卡片 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch">
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
                className="border border-[#e2e8f0] bg-white p-5 text-center flex flex-col items-center justify-between space-y-2.5 h-full"
              >
                <div className="text-sm font-bold text-slate-800 tracking-wide">
                  {item.label}
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-slate-950 tracking-tight tabular-nums py-0.5">
                  {item.count}
                </div>
                <div
                  className={`font-mono text-xs font-bold px-2 py-0.5 border tabular-nums ${
                    item.isIncrease
                      ? "text-blue-900 bg-blue-50 border-blue-200"
                      : "text-slate-600 bg-slate-50 border-slate-200"
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
