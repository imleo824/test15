import React from "react";
import { ArrowDown, Eye, Users, Lock } from "lucide-react";

interface ArchTier {
  level: string;
  name: string;
  status: "进行中" | "可加强";
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
      "操作日志常态巡检",
      "敏感参数变动预警",
      "违规操作常态稽查",
    ],
  },
  {
    level: "L2 中层",
    name: "风控工单",
    status: "进行中",
    icon: <Users className="w-4 h-4 text-slate-900" />,
    keyPoints: [
      "关停线下非受控沟通渠道，消除私下交接漏洞",
      "审核与业务对接全面收拢至后台工单流转",
      "跨部门审批全流程线上存证、证据链完整",
    ],
  },
  {
    level: "L1 底层",
    name: "安全机制",
    status: "可加强",
    icon: <Lock className="w-4 h-4 text-slate-900" />,
    keyPoints: [
      "敏感信息集中收口与字典维护",
      "复制/截屏/导出等按工种严控",
      "敏感信息修改双人背靠背审批",
      "长期/临时/凭单三级权限结构",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white space-y-4">
      {/* 头部标题栏：紧凑高能级 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-900 pb-3">
        <div className="flex items-center gap-2.5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-none">
              安全合规分层防御架构
            </h3>
          </div>
        </div>

        {/* 顶部逻辑流标识 */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 text-xs font-mono shrink-0 self-start sm:self-auto">
          <span className="font-bold text-slate-900">L1 系统硬控</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L2 协同流转</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L3 专职监督</span>
        </div>
      </div>

      {/* 架构主体：极简专业审计风格分层表格 */}
      <div className="border-t border-b border-slate-900 bg-white divide-y divide-slate-200">
        {/* 表格列头指示（大屏显示） */}
        <div className="hidden lg:grid grid-cols-12 gap-3 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-900">
          <div className="col-span-3">防御层级</div>
          <div className="col-span-2 text-center">治理状态</div>
          <div className="col-span-7">核心防护举措与落地要求</div>
        </div>

        {tiers.map((tier) => (
          <div key={tier.level} className="p-4 sm:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* 1. 防御层级 (col-span-3) */}
              <div className="lg:col-span-3 flex items-center gap-3">
                <div className="p-2.5 bg-slate-100 shrink-0">
                  {tier.icon}
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-slate-900 text-white leading-none">
                      {tier.level}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-slate-950 tracking-tight leading-tight">
                    {tier.name}
                  </div>
                </div>
              </div>

              {/* 2. 治理状态 (col-span-2) */}
              <div className="lg:col-span-2 flex items-center justify-start lg:justify-center">
                {tier.status === "进行中" ? (
                  <span className="inline-flex items-center gap-1.5 text-blue-900 font-bold text-xs sm:text-sm font-mono shrink-0">
                    <span className="w-2 h-2 rounded-[1px] bg-blue-600"></span>
                    <span>进行中</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm font-mono shrink-0">
                    <span className="w-2 h-2 rounded-[1px] bg-amber-600"></span>
                    <span>待加强</span>
                  </span>
                )}
              </div>

              {/* 3. 核心防护举措 (col-span-7) */}
              <div className="lg:col-span-7 pl-0 lg:pl-1">
                <ul className="space-y-2 text-sm sm:text-[15px] text-slate-800">
                  {tier.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                      <span className="leading-relaxed font-normal">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyArchitectureDiagram;
