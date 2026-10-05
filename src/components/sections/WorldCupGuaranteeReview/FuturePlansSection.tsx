import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge } from "../../ReportSections";
import { Plus, ArrowUp } from "lucide-react";

export const FuturePlansSection: React.FC = () => {
  const plans: {
    index: string;
    badge: string;
    badgeTone: "blue" | "slate" | "green";
    highlights: { title: string; desc: string }[];
  }[] = [
    {
      index: "01",
      badge: "优化会员云盾",
      badgeTone: "blue",
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
      highlights: [
        {
          title: "佣金自动审核",
          desc: "将云盾规则引擎拓展至[[代理佣金自动审核]]场景，构建[[代理专属风控特征集]]。",
        },
        {
          title: "动态随机派单",
          desc: "人工介入单全面落实[[动态随机派单]]，彻底切断审核人与代理的私下利益关联。",
        },
      ],
    },
    {
      index: "03",
      badge: "强化安全合规",
      badgeTone: "green",
      highlights: [
        {
          title: "全链路工单闭环",
          desc: "业务流转全量收拢至[[线上工单系统]]，杜绝脱单私聊与线下流转，保持 100% [[审计留痕与溯源]]。",
        },
        {
          title: "权限与变更管控",
          desc: "关键信息变更实行[[双人背靠背复核]]，敏感数据导出与截屏落实[[最小必要授权]]。",
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
                "随着在[[会员维度]]系统化审核取得的阶段性成果，下阶段核心将会员维度的成功实践与成熟能力[[平滑复刻并全面落地至代理审核]]，构建「会员 + 代理」双轮驱动的智能化风控体系，取得更大的风控收益与人效突破。"
              )}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-200/80 pt-2 mt-2">
              {highlightNumbers(
                "工作主线围绕 **优化会员云盾**、**落地代理云盾** 与 **深化安全合规治理** 三大重点展开，持续巩固并扩大智能化治理成果。"
              )}
            </p>
          </div>
        </SummaryBox>

        {/* 上层 2 列：01 优化会员云盾 + 02 落地代理云盾 (中间嵌入大号 + 标志) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {plans.slice(0, 2).map((plan) => (
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
                    <ReportBadge tone={plan.badgeTone} className="text-xs font-mono font-bold">
                      重点推进
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
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-900 text-white border-2 border-white shadow-md flex items-center justify-center shrink-0 rounded-full">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* 03 分别指向 01 和 02 的 2 个向上支撑箭头（无文案） */}
        <div className="grid grid-cols-2 gap-6 -my-2 sm:-my-2.5 z-10 select-none">
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 bg-slate-900 text-white shadow-xs border-2 border-white flex items-center justify-center shrink-0">
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 bg-slate-900 text-white shadow-xs border-2 border-white flex items-center justify-center shrink-0">
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* 下层独占单行：03 强化安全合规 (作为 01 + 02 的底座支撑) */}
        {plans[2] && (
          <div className="bg-white border border-slate-200 p-6 sm:p-7 space-y-5">
            {/* 卡片标头：03 后面紧跟强化安全合规 */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 shrink-0">
                  {plans[2].index}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                  {plans[2].badge}
                </h3>
              </div>
              <ReportBadge tone={plans[2].badgeTone} className="text-xs font-mono font-bold">
                底层安全支撑
              </ReportBadge>
            </div>

            {/* 核心举措要点：2 列横向并排分布 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
              {plans[2].highlights.map((item, idx) => (
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
        )}
      </div>
    </div>
  );
};

export default FuturePlansSection;
