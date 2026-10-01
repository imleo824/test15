import React from "react";
import { ReportTableFrame } from "../../ReportSections";

interface ArchTier {
  level: string;
  name: string;
  controlScene: string;
  status: "执行中" | "可加强";
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L3",
    name: "专职监督",
    controlScene: "有专门角色进行巡检和稽查",
    status: "执行中",
    keyPoints: [
      "操作日志全量留痕与常态巡检",
      "返水、费率等敏感参数变动即时预警",
      "外部线索深度稽查与违规问责闭环",
    ],
  },
  {
    level: "L2",
    name: "风控工单",
    controlScene: "防止敏感信息被流转和扩散",
    status: "执行中",
    keyPoints: [
      "系统自动化根治高频诉求，源头消除无效流转",
      "全面关停线下非受控群聊，业务对接 100% 迁入工单",
      "审核处置与跨组协同线上闭环，全流程存证溯源",
    ],
  },
  {
    level: "L1",
    name: "安全机制",
    controlScene: "发现有权限但使用异常场景",
    status: "可加强",
    keyPoints: [
      "敏感信息全平台集中收口，展示入口默认掩码脱敏",
      "批量查询与导出按工种严控，高频调阅自动熔断",
      "敏感信息修改取消单人直改，实行双人背靠背审批与冷却",
    ],
  },
  {
    level: "L0",
    name: "权限结构",
    controlScene: "按需分配权限保持风险最小",
    status: "可加强",
    keyPoints: [
      "长期权限：仅限极少数核心特权工种，常态化审计留痕",
      "临时权限：专项任务审批限时生效，到期系统自动熔断",
      "凭单权限：一线业务随工单动态解锁，任务办结单结权销",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white space-y-4">
      {/* 头部标题栏：紧凑高能级 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-none">
            安全合规分层防御
          </h3>
        </div>

        {/* 顶部逻辑流标识 */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 text-xs shrink-0 self-start sm:self-auto">
          <span className="font-bold text-slate-900">L0 权限结构</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L1 安全机制</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L2 风控工单</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L3 专职监督</span>
        </div>
      </div>

      {/* 架构主体：专业标准审计风格表格 */}
      <ReportTableFrame>
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-3 px-4 sm:px-5 text-xs font-bold text-slate-900 uppercase tracking-wider w-[18%]">
                防御层级
              </th>
              <th className="py-3 px-4 sm:px-5 text-xs font-bold text-slate-900 uppercase tracking-wider w-[26%]">
                管控场景
              </th>
              <th className="py-3 px-4 sm:px-5 text-xs font-bold text-slate-900 uppercase tracking-wider text-center w-[14%]">
                治理状态
              </th>
              <th className="py-3 px-4 sm:px-5 text-xs font-bold text-slate-900 uppercase tracking-wider w-[42%]">
                核心防护举措
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800">
            {tiers.map((tier) => (
              <tr key={tier.level} className="hover:bg-slate-50/60 transition-colors">
                {/* 1. 防御层级 */}
                <td className="py-4 px-4 sm:px-5 align-top">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-slate-900 text-white leading-none shrink-0">
                      {tier.level}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                      {tier.name}
                    </span>
                  </div>
                </td>

                {/* 2. 管控场景 */}
                <td className="py-4 px-4 sm:px-5 align-top">
                  <span className="text-sm sm:text-[14.5px] font-bold text-slate-950 leading-relaxed block">
                    {tier.controlScene}
                  </span>
                </td>

                {/* 3. 治理状态 */}
                <td className="py-4 px-4 sm:px-5 align-top text-center">
                  {tier.status === "执行中" ? (
                    <span className="inline-flex items-center gap-1.5 text-blue-900 font-bold text-xs sm:text-sm font-mono px-2 py-0.5 bg-blue-50 border border-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>执行中</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm font-mono px-2 py-0.5 bg-amber-50 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>{tier.status}</span>
                    </span>
                  )}
                </td>

                {/* 4. 核心防护举措 */}
                <td className="py-4 px-4 sm:px-5 align-top">
                  <ul className="space-y-1.5 text-sm sm:text-[14.5px] text-slate-800">
                    {tier.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                        <span className="leading-relaxed font-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReportTableFrame>
    </div>
  );
};

export default SafetyArchitectureDiagram;
