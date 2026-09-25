import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader } from "../../ReportSections";

export const PersonnelDistribution: React.FC = () => {
  const policyItems = [
    {
      title: "人员优化",
      content: "依托系统自动化推进[[编制集约化]]，持续优化在册人员技能与岗位结构；",
    },
    {
      title: "场地优化",
      content: "结合各职场承载力[[动态平衡工位]]，保持各职场资源集约高效利用；",
    },
    {
      title: "考核机制",
      content: "落实全流程量化考核与[[末位淘汰]]，编制向[[专业分析岗位]]实质倾斜；",
    },
    {
      title: "流程优化",
      content: "裁撤跨部门[[冗余流转节点]]，压缩协同链路，全面[[提升执行效率]]与合规安全。",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 核心战略导语 */}
      <SummaryBox variant="chapter">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            推进编制集约化管理，依托系统自动化优化队伍结构，提升专职风控人效
          </h3>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
            动态平衡职场场地配比，严格执行量化考核与优胜劣汰，稳妥推进外包剥离与专业化升级。
          </p>
        </div>
      </SummaryBox>

      {/* 1.1 组织治理核心举措 (条形矩阵) */}
      <div className="space-y-4">
        <ReportSectionHeader title="1.1 组织治理核心举措" />
        <div className="border border-slate-200 bg-white p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 text-xs">
            {policyItems.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5">
                  <span className="report-sequence-badge text-xs">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {item.title}
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

      {/* 1.2 岗位编制分布与变动明细 */}
      <div className="space-y-4">
        <ReportSectionHeader title="1.2 岗位编制分布与变动明细" />
        <div className="border border-slate-200 bg-white p-5 space-y-6">
          {/* 第一层：CD 占比 & WB 外包 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Card 1: CD */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-slate-50/70 p-4 text-center space-y-1.5">
              <span className="text-sm font-bold text-slate-800 block tracking-wider">
                在册编制总数（全员正式）
              </span>
              <div className="flex items-baseline justify-center gap-1.5 py-1">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight tabular-nums">
                  365
                </span>
                <span className="text-sm font-bold text-slate-600">人</span>
              </div>
              <div className="text-sm text-slate-600 pt-0.5 font-medium">全员正式编制管控</div>
            </div>

            {/* Card 2: WB */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-slate-50/70 p-4 text-center space-y-1.5">
              <span className="text-sm font-bold text-slate-800 block tracking-wider">
                外包协同编制（计划清零）
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
              <div className="text-sm text-slate-600 pt-0.5 font-medium">8月加速缩减直至完全清零</div>
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
