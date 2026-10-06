import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge } from "../../ReportSections";
import { Lightbulb, Plus } from "lucide-react";

export const FuturePlansSection: React.FC = () => {
  const plans: {
    index: string;
    badge: string;
    badgeTone: "blue" | "slate";
    status?: string;
    statusTone?: "blue" | "slate" | "amber" | "green";
    highlights: { title: string; desc: string }[];
  }[] = [
    {
      index: "01",
      badge: "优化会员云盾",
      badgeTone: "blue",
      status: "持续进化",
      statusTone: "blue",
      highlights: [
        {
          title: "规则按周校准",
          desc: "结合实战拦截与复盘样本，[[按周动态校准]]特征与规则权重，防止策略衰减。",
        },
        {
          title: "释放出单潜能",
          desc: "在保持 25% 人工防线的前提下持续调优阈值，稳步向 75% [[安全物理边界]]靠拢。",
        },
      ],
    },
    {
      index: "02",
      badge: "落地代理云盾",
      badgeTone: "slate",
      status: "持续在解决线上问题中",
      statusTone: "amber",
      highlights: [
        {
          title: "代理云盾体系（解决线上问题中）",
          desc: "构建[[专属风控特征集]]，整合**佣金审核**与**质量分数**两大核心模块；当前正[[持续解决上线初期的问题中]]。",
        },
        {
          title: "动态随机派单",
          desc: "审核全面落实[[动态随机派单]]，优化审核人与代理的固定审核分配带来的违规风险。",
        },
      ],
    },
  ];

  return (
    <div id="section-future-plans" className="report-chapter-content">
      <div className="flex flex-col gap-6">
        {/* 5.0 章节核心要点 */}
        <SummaryBox variant="chapter">
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
              {highlightNumbers(
                "随着在[[会员维度]]系统化审核取得的阶段性成果，下阶段核心将会员维度的成功实践与经验[[全面落地至代理审核]]，构建「会员 + 代理」双轮驱动的智能化风控体系，取得更大的风控收益与人效突破。工作主线围绕 **优化会员云盾** 与 **落地代理云盾** 两大核心展开，持续巩固并扩大智能化治理成果。"
              )}
            </p>
            <div className="flex items-start gap-1.5 text-xs text-slate-500 font-normal leading-relaxed border-t border-dashed border-slate-200 pt-2 mt-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                {highlightNumbers(
                  "跨站关联占比极高，[[系统策略的智能化与高精度]]的核心，[[依赖于底层大数据的支撑]]（涵盖[[数据的多维度、准确性、稳定性、时效性]]等核心维度），以此作为保障系统持续稳定、安全输出成效的技术基石。"
                )}
              </div>
            </div>
          </div>
        </SummaryBox>

        {/* 2 列：01 优化会员云盾 + 02 落地代理云盾 (中间嵌入大号 + 标志) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.index}
                className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-5 h-full"
              >
                <div className="space-y-4">
                  {/* 卡片标头：01 / 02 后面紧跟分类作为大标题 */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 shrink-0">
                        {plan.index}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                        {plan.badge}
                      </h3>
                    </div>
                    <ReportBadge tone={plan.statusTone || plan.badgeTone} className="text-xs font-mono font-bold">
                      {plan.status || "重点推进"}
                    </ReportBadge>
                  </div>

                  {/* 核心举措要点 */}
                  <div className="space-y-4 pt-1">
                    {plan.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2"></span>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-slate-950 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-700 font-normal leading-relaxed">
                            {highlightNumbers(item.desc)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>            
              </div>
            ))}
          </div>

          {/* 01 与 02 之间的大号 + 标志 */}
          <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center my-3 md:my-0 pointer-events-none">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900 text-white border border-slate-300 shadow-xs flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlansSection;
