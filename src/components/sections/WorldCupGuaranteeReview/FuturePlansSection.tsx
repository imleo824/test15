import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { Bot, Users, ShieldCheck } from "lucide-react";

export const FuturePlansSection: React.FC = () => {
  const plans = [
    {
      index: "01",
      title: "优化会员云盾审核",
      badge: "会员云盾",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      accentBorder: "border-blue-600",
      icon: <Bot className="w-5 h-5 text-blue-700" />,
      highlights: [
        {
          title: "规则周级校准",
          desc: "结合常态数据与复盘案例，[[周级校准]]特征与规则，防止策略衰减。"
        },
        {
          title: "释放出单潜能",
          desc: "在 [[30%]] 人工防线硬性约束下，优化特征权重，争取向 [[70%]] [[出单极限]]靠拢。"
        }
      ]
    },
    {
      index: "02",
      title: "落地代理云盾审核",
      badge: "代理云盾",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      accentBorder: "border-amber-500",
      icon: <Users className="w-5 h-5 text-amber-700" />,
      highlights: [
        {
          title: "上线佣金自动审核",
          desc: "将云盾能力延伸至[[代理佣金自动审核]]场景，构建[[代理专属风控模型]]。"
        },
        {
          title: "动态随机派单",
          desc: "人工审核落实[[动态随机派单]]，消除长期绑定审核关系的合规隐患。"
        }
      ]
    },
    {
      index: "03",
      title: "继续推进安全合规",
      badge: "安全合规",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      accentBorder: "border-emerald-600",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      highlights: [
        {
          title: "工单线上闭环",
          desc: "全面收拢至[[后台工单线上流转]]，杜绝线下交接，保持[[审计留痕]]完整。"
        },
        {
          title: "权限与改单管控",
          desc: "敏感信息修改实行[[双人背靠背审批]]，导出与截屏按岗位[[严格限权]]。"
        }
      ]
    }
  ];

  return (
    <div id="section-future-plans" className="space-y-8">
      {/* 5.0 章节一句话总结 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "[[下季度重点工作]]：重点推进[[优化会员云盾审核]]、[[落地代理云盾审核]]与[[继续推进安全合规]]三项落地任务。"
        )}
      </SummaryBox>

      {/* 三大重点卡片布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.index}
            className={`bg-white border border-slate-200 border-t-4 ${plan.accentBorder} p-5 sm:p-6 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md transition-shadow`}
          >
            <div className="space-y-4">
              {/* 卡片标头 */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-2xl font-extrabold text-slate-300">
                  {plan.index}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 border ${plan.badgeColor}`}
                >
                  {plan.badge}
                </span>
              </div>

              {/* 标题 */}
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-slate-100 shrink-0">
                  {plan.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                  {plan.title}
                </h3>
              </div>

              {/* 核心举措要点 */}
              <div className="space-y-3.5 pt-2">
                {plan.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
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
