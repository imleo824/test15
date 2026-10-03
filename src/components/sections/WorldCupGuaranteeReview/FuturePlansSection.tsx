import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge } from "../../ReportSections";
import { Bot, Users, ShieldCheck } from "lucide-react";

export const FuturePlansSection: React.FC = () => {
  const plans: {
    index: string;
    title: string;
    badge: string;
    badgeTone: "blue" | "amber" | "green";
    accentBorder: string;
    icon: React.ReactNode;
    highlights: { title: string; desc: string }[];
  }[] = [
    {
      index: "01",
      title: "优化会员云盾审核",
      badge: "会员云盾",
      badgeTone: "blue",
      accentBorder: "border-blue-600",
      icon: <Bot className="w-5 h-5 text-blue-700" />,
      highlights: [
        {
          title: "规则按周校准",
          desc: "结合实战拦截与复盘样本，[[按周动态校准]]特征与规则权重，防止策略衰减。"
        },
        {
          title: "释放出单潜能",
          desc: "在保持 [[25%]] 人工防线的前提下持续调优阈值，稳步向 [[75% 安全边界]]靠拢。"
        }
      ]
    },
    {
      index: "02",
      title: "落地代理云盾审核",
      badge: "代理云盾",
      badgeTone: "amber",
      accentBorder: "border-amber-500",
      icon: <Users className="w-5 h-5 text-amber-700" />,
      highlights: [
        {
          title: "上线佣金自动审核",
          desc: "将云盾规则引擎拓展至[[代理佣金自动审核]]场景，构建[[代理专属风控特征集]]。"
        },
        {
          title: "动态随机派单",
          desc: "人工介入单全面落实[[动态随机派单]]，彻底切断审核人与代理的私下利益关联。"
        }
      ]
    },
    {
      index: "03",
      title: "深化安全合规治理",
      badge: "安全合规",
      badgeTone: "green",
      accentBorder: "border-emerald-600",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      highlights: [
        {
          title: "全链路工单闭环",
          desc: "业务流转全量收拢至[[线上工单系统]]，杜绝脱单私聊与线下流转，保持 [[100% 审计留痕]]。"
        },
        {
          title: "权限与变更管控",
          desc: "关键信息变更实行[[双人背靠背复核]]，敏感数据导出与截屏落实[[最小必要授权]]。"
        }
      ]
    }
  ];

  return (
    <div id="section-future-plans" className="report-chapter-content">
      {/* 5.0 章节核心要点 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "[[下阶段战略工作重点]]：持续推进[[优化会员云盾审核]]、[[落地代理云盾审核]]与[[深化安全合规治理]]三大任务，实现[[人效提升与安全合规防线强化]]。"
        )}
      </SummaryBox>

      {/* 三大重点卡片布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.index}
            className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 h-full"
          >
            <div className="space-y-5">
              {/* 卡片标头 */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                <span className="font-mono text-2xl font-bold text-slate-400">
                  {plan.index}
                </span>
                <ReportBadge tone={plan.badgeTone} className="text-xs font-mono">
                  {plan.badge}
                </ReportBadge>
              </div>

              {/* 标题 */}
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-slate-50 shrink-0">
                  {plan.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                  {plan.title}
                </h3>
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
    </div>
  );
};

export default FuturePlansSection;
