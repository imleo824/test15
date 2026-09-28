import React from "react";
import { ArrowDown, Eye, Users, Lock } from "lucide-react";

interface ArchTier {
  level: string;
  name: string;
  status: "进行中" | "待加强";
  icon: React.ReactNode;
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L3 顶层",
    name: "专职监督",
    status: "进行中",
    icon: <Eye className="w-4 h-4 text-slate-900" />,
    keyPoints: [
      "全量操作日志常态巡检与异常行为回溯分析",
      "敏感参数变动与异常红利发放实时监测预警",
      "高危代审与越权操作立案核查与违规问责机制",
    ],
  },
  {
    level: "L2 中层",
    name: "风控工单",
    status: "进行中",
    icon: <Users className="w-4 h-4 text-slate-900" />,
    keyPoints: [
      "清理关停线下非受控沟通渠道，消除私下交接漏洞",
      "各项审核与业务对接全面收拢为后台工单标准化流转",
      "跨部门交接与多人审批全流程线上存证、证据链完整",
    ],
  },
  {
    level: "L1 底层",
    name: "安全机制",
    status: "待加强",
    icon: <Lock className="w-4 h-4 text-slate-900" />,
    keyPoints: [
      "敏感数据导出频次额度限制，全端加盖动态追踪盲水印",
      "敏感信息修改实行双人背靠背复核与提款风险冷却期",
      "资金调账直连三方通道对账核实，强校验真实银行到账流水",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white border border-slate-300 border-t-2 border-t-slate-900 p-4 sm:p-5 space-y-4">
      {/* 头部标题栏：紧凑高能级 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-6 bg-slate-900 shrink-0"></div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-none">
              安全合规分层防御架构
            </h3>
          </div>
        </div>

        {/* 顶部逻辑流标识 */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 border border-slate-200 text-xs font-mono shrink-0 self-start sm:self-auto">
          <span className="font-bold text-slate-900">L1 系统硬控</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L2 协同流转</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L3 专职监督</span>
        </div>
      </div>

      {/* 架构主体：精简无沉淀干净矩阵 */}
      <div className="border border-slate-300 bg-white divide-y divide-slate-200">
        {/* 表格列头指示（大屏显示） */}
        <div className="hidden lg:grid grid-cols-12 gap-3 bg-slate-100/90 px-4 py-2 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-300">
          <div className="col-span-3">防御层级</div>
          <div className="col-span-2 text-center">治理状态</div>
          <div className="col-span-7">核心防护举措与落地要求</div>
        </div>

        {tiers.map((tier, idx) => (
          <React.Fragment key={tier.level}>
            {/* 单层行 */}
            <div className="p-3.5 sm:p-4 hover:bg-slate-50/60 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-center">
                {/* 1. 防御层级 (col-span-3) */}
                <div className="lg:col-span-3 flex items-center gap-2.5">
                  <div className="p-2 bg-slate-100 border border-slate-200 shrink-0">
                    {tier.icon}
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-slate-900 text-white leading-none">
                        {tier.level}
                      </span>
                    </div>
                    <div className="text-base font-bold text-slate-950 tracking-tight leading-tight">
                      {tier.name}
                    </div>
                  </div>
                </div>

                {/* 2. 治理状态 (col-span-2) */}
                <div className="lg:col-span-2 flex items-center justify-start lg:justify-center">
                  {tier.status === "进行中" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-300 text-blue-900 font-bold text-xs font-mono shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>进行中</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-300 text-amber-900 font-bold text-xs font-mono shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>待加强</span>
                    </span>
                  )}
                </div>

                {/* 3. 核心防护举措 (col-span-7) */}
                <div className="lg:col-span-7 pl-0 lg:pl-1">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                    {tier.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-1.5"></span>
                        <span className="leading-relaxed font-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 层级之间的衔接指示条 */}
            {idx < tiers.length - 1 && (
              <div className="bg-slate-100/80 px-4 py-1 text-center border-t border-b border-slate-200 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-600 font-medium">
                <ArrowDown className="w-3 h-3 text-slate-700" />
                <span>
                  {idx === 0
                    ? "顶层监督审计溯源 · 覆盖业务全流程"
                    : "中层流转标准化 · 固化全流程留痕证据链"}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SafetyArchitectureDiagram;
