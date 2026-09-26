import React from "react";
import { ArrowDown, ArrowUp, Eye, Users, Lock } from "lucide-react";

interface ArchTier {
  level: string;
  name: string;
  attribute: "独立审计" | "协同流转" | "系统硬控";
  icon: React.ReactNode;
  scope: string;
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L3 顶层",
    name: "专职监督",
    attribute: "独立审计",
    icon: <Eye className="w-5 h-5 text-slate-800" />,
    scope: "独立常态化巡检 · 违规溯源问责",
    keyPoints: [
      "全量操作日志常态巡检与异常行为回溯分析",
      "敏感参数变动与异常红利发放实时监测预警",
      "高危代审与越权操作立案核查与违规问责机制",
    ],
  },
  {
    level: "L2 中层",
    name: "风控工单",
    attribute: "协同流转",
    icon: <Users className="w-5 h-5 text-slate-800" />,
    scope: "业务系统收口 · 杜绝私下非受控交接",
    keyPoints: [
      "清理关停线下非受控沟通渠道，消除私下交接漏洞",
      "各项审核与业务对接全面收拢为后台工单标准化流转",
      "跨部门交接与多人审批全流程线上存证、证据链完整",
    ],
  },
  {
    level: "L1 底层",
    name: "安全机制",
    attribute: "系统硬控",
    icon: <Lock className="w-5 h-5 text-slate-800" />,
    scope: "关键操作权限硬约束 · 规范自由裁量",
    keyPoints: [
      "敏感数据导出频次额度限制，全端加盖动态追踪盲水印",
      "敏感信息修改实行双人背靠背复核与提款风险冷却期",
      "资金调账直连三方通道对账核实，强校验真实银行到账流水",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-300 border-t-2 border-t-slate-900 p-6 sm:p-7 space-y-6">
      {/* 头部标题与逻辑导向 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            安全合规分层防御架构
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            涵盖单点操作、协同流转与独立审计的三层合规防护体系
          </p>
        </div>

        {/* 顶部清晰三级逻辑流 */}
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 border border-slate-200 text-xs font-mono">
          <span className="font-bold text-slate-900">L1 系统硬控</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L2 协同流转</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L3 专职监督</span>
        </div>
      </div>

      {/* 架构主体：三层递进报告卡片 */}
      <div className="space-y-3.5">
        {tiers.map((tier, idx) => (
          <div key={tier.level} className="space-y-2">
            {/* 单层主卡片 */}
            <div className="border border-slate-200 bg-white p-5 sm:p-6 hover:border-slate-300 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                {/* 1. 左侧：层级与模块标识 (占 4 列) */}
                <div className="lg:col-span-4 flex items-center gap-3.5">
                  <div className="p-3 bg-slate-50 border border-slate-200 shrink-0 text-slate-800">
                    {tier.icon}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-slate-900 text-white">
                        {tier.level}
                      </span>
                      <span className="text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200">
                        {tier.attribute}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                      {tier.name}
                    </h4>
                  </div>
                </div>

                {/* 2. 右侧：核心管控手段与机制说明 (占 8 列) */}
                <div className="lg:col-span-8 bg-slate-50 p-4 border border-slate-200 space-y-2.5">
                  <div className="border-b border-slate-200 pb-2">
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {tier.scope}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {tier.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
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
              <div className="flex items-center justify-center py-1">
                <div className="flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-mono font-medium px-3 py-1 border border-slate-200">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {idx === 0
                      ? "顶层监督审计溯源 · 守护业务合规底线"
                      : "中层流转标准化 · 固化全流程留痕证据链"}
                  </span>
                  <ArrowUp className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
