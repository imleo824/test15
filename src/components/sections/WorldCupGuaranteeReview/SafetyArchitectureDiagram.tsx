import React from "react";
import { ArrowDown, ArrowUp, Eye, Users, Lock } from "lucide-react";

interface ArchTier {
  level: string;
  name: string;
  attribute: "审计" | "协同" | "单点";
  badgeTheme: {
    bg: string;
    text: string;
    border: string;
    levelBg: string;
  };
  icon: React.ReactNode;
  scope: string;
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L3 顶层",
    name: "专职监督",
    attribute: "审计",
    badgeTheme: {
      bg: "bg-purple-100",
      text: "text-purple-950",
      border: "border-purple-400",
      levelBg: "bg-purple-900 text-white",
    },
    icon: <Eye className="w-6 h-6 text-purple-700" />,
    scope: "独立常态化稽查 · 全链路反向穿透",
    keyPoints: [
      "全量操作日志常态巡检与回溯分析",
      "敏感参数变更与红利异常发放实时监测预警",
      "高危代审与越权操作立案核查与违规问责机制",
    ],
  },
  {
    level: "L2 中层",
    name: "风控工单",
    attribute: "协同",
    badgeTheme: {
      bg: "bg-blue-100",
      text: "text-blue-950",
      border: "border-blue-400",
      levelBg: "bg-blue-900 text-white",
    },
    icon: <Users className="w-6 h-6 text-blue-700" />,
    scope: "业务统一收口 · 杜绝私下暗箱串通",
    keyPoints: [
      "清理关停线下非受控沟通渠道，消除私下交接漏洞",
      "各项审核与业务对接全面收拢为后台工单标准化流转",
      "跨部门交接与多人审批全流程线上存证、证据链完整",
    ],
  },
  {
    level: "L1 底层",
    name: "安全机制",
    attribute: "单点",
    badgeTheme: {
      bg: "bg-emerald-100",
      text: "text-emerald-950",
      border: "border-emerald-400",
      levelBg: "bg-emerald-900 text-white",
    },
    icon: <Lock className="w-6 h-6 text-emerald-700" />,
    scope: "人机单点操作硬控制 · 消除自由裁量",
    keyPoints: [
      "敏感数据导出频次额度限制，全端加盖动态追踪盲水印",
      "敏感信息修改实行双人背靠背复核与提款风险冷却期",
      "资金调账直连三方通道对账核实，强校验真实银行到账流水",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white border-2 border-slate-900 p-6 sm:p-8 space-y-7 shadow-xs">
      {/* 头部标题与极简层级递进导向 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-slate-900 pb-5">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            安全合规分层防御架构示意图
          </h3>
        </div>

        {/* 顶部清晰三级逻辑流 */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-2 border border-slate-300 font-mono text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white font-bold text-emerald-900 border border-emerald-300">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <span>单点防作案</span>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white font-bold text-blue-900 border border-blue-300">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>协同防无痕</span>
          </div>
          <span className="text-slate-400 font-bold">→</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white font-bold text-purple-900 border border-purple-300">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span>审计防遗漏</span>
          </div>
        </div>
      </div>

      {/* 架构主体：三层递进报告卡片（纯静态、正式报告格式、无网页交互按钮） */}
      <div className="space-y-4">
        {tiers.map((tier, idx) => (
          <div key={tier.level} className="relative">
            {/* 单层主卡片 */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white p-5 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* 1. 左侧：层级与模块标识 (占 4 列) */}
                <div className="lg:col-span-4 flex items-center gap-4">
                  <div className="p-3 bg-white border border-slate-300 shrink-0">
                    {tier.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-mono text-xs font-black px-2.5 py-1 ${tier.badgeTheme.levelBg}`}
                      >
                        {tier.level}
                      </span>
                      <span
                        className={`text-xs font-black font-mono px-2.5 py-1 border ${tier.badgeTheme.bg} ${tier.badgeTheme.text} ${tier.badgeTheme.border}`}
                      >
                        属性：{tier.attribute}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      {tier.name}
                    </h4>
                  </div>
                </div>

                {/* 2. 右侧：核心管控手段与机制说明 (占 8 列，纯静态专业报告样式) */}
                <div className="lg:col-span-8 bg-slate-50/70 p-4 sm:p-5 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {tier.scope}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 border border-slate-200">
                      关键管控抓手
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-800 font-medium">
                    {tier.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 层级之间的衔接连线指示 */}
            {idx < tiers.length - 1 && (
              <div className="flex items-center justify-center my-2">
                <div className="flex items-center gap-2 bg-slate-900 text-white text-xs font-mono font-bold px-3 py-1 border border-slate-800">
                  <ArrowDown className="w-3.5 h-3.5" />
                  <span>
                    {idx === 0
                      ? "顶层反向穿透稽查 · 支撑常态化监督兜底"
                      : "中层流转固化单据 · 沉淀全流程合规证据链"}
                  </span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
