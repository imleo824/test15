import React from "react";
import { ReportTableFrame } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";
import { KeyRound, Eye, RefreshCw, ShieldAlert, ArrowRight } from "lucide-react";

interface ArchTier {
  level: string;
  name: string;
  corePrinciple: string;
  controlScene: string;
  status: "执行中" | "可加强";
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L3",
    name: "专职监督",
    corePrinciple: "专人常态巡检与违规稽查问责",
    controlScene: "设独立专职角色进行常态巡检与违规稽查",
    status: "执行中",
    keyPoints: [
      "全量操作日志独立留痕与每日/每周常态巡检",
      "返水、费率、账户状态等敏感参数异动即时预警",
      "外部线索深度稽查与违规问责处理形成闭环",
    ],
  },
  {
    level: "L2",
    name: "风控工单",
    corePrinciple: "业务数据流转全链路工单化管控",
    controlScene: "业务流转全收拢至工单，阻断线下群聊扩散",
    status: "执行中",
    keyPoints: [
      "系统自动化根治高频诉求，源头消除无效流转",
      "全面关停线下非受控群聊，业务对接 100% 迁入风控工单",
      "审核处置与跨组协同线上闭环，全流程存证可溯源",
    ],
  },
  {
    level: "L1",
    name: "安全机制",
    corePrinciple: "有权限操作严加监控与硬规则约束",
    controlScene: "发现有权限但使用异常场景，杜绝滥用",
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
    corePrinciple: "核心源头：最小必要让权限分配合理",
    controlScene: "按需合理分配权限，从源头杜绝特权泛滥",
    status: "可加强",
    keyPoints: [
      "长期权限：仅限极少数核心特权工种，常态化审计留痕",
      "临时权限：专项任务审批限时生效，到期系统自动熔断",
      "凭单权限：一线业务随工单动态解锁，任务办结单结权销",
    ],
  },
];

const logicCards = [
  {
    step: "L0",
    title: "权限分配合理",
    role: "核心源头",
    desc: "坚持最小必要原则合理配置权限，日常无任务无入口，从源头消灭特权泛滥。",
    icon: <KeyRound className="w-4 h-4 text-slate-800" />,
  },
  {
    step: "L1",
    title: "权限实时监控",
    role: "行为防线",
    desc: "对拥有权限的操作严加监控与硬规则约束，拦截批量导出、复制与单人擅改。",
    icon: <Eye className="w-4 h-4 text-blue-800" />,
  },
  {
    step: "L2",
    title: "数据流转管控",
    role: "链路防线",
    desc: "跨部门业务流转 100% 收拢至线上工单系统，彻底取缔线下群聊，防止数据外泄。",
    icon: <RefreshCw className="w-4 h-4 text-indigo-800" />,
  },
  {
    step: "L3",
    title: "专人稽查巡检",
    role: "监督底线",
    desc: "设立独立专职角色开展常态巡检、线索深挖与违规问责，形成监督兜底闭环。",
    icon: <ShieldAlert className="w-4 h-4 text-emerald-800" />,
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white space-y-6">
      {/* 头部标题栏 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-none">
            安全合规分层防御架构
          </h3>
        </div>

        {/* 顶部逻辑流标识 */}
        <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 text-xs shrink-0 self-start sm:self-auto">
          <span className="font-bold text-slate-900">L0 权限合理分配</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L1 权限实时监控</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L2 数据流转管控</span>
          <span className="text-slate-400">➔</span>
          <span className="font-bold text-slate-900">L3 专人稽查巡检</span>
        </div>
      </div>

      {/* 4 层架构核心治理逻辑概述 */}
      <SummaryBox variant="module">
        <div className="text-sm text-slate-700 font-normal leading-relaxed space-y-1.5">
          <p>
            {highlightNumbers(
              "安全合规不仅是[[事件驱动的单点应对]]，而是需要多维度系统化治理，持续构建[[安全合规分层防御架构]]："
            )}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs sm:text-sm text-slate-800 font-normal">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-1.5"></span>
              <span><strong>L0 源头控制：</strong>以权限分配合理为核心源头，坚持最小必要，杜绝特权泛滥；</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-1.5"></span>
              <span><strong>L1 行为防线：</strong>对已持有权限的操作实行全量实时监控，拦截越权与异动；</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-1.5"></span>
              <span><strong>L2 链路管控：</strong>在业务数据流转环节全链路工单化受控，阻断线下扩散；</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-1.5"></span>
              <span><strong>L3 监督兜底：</strong>最终设立专职独立角色进行常态化稽查与巡检，形成防御闭环。</span>
            </li>
          </ul>
        </div>
      </SummaryBox>

      {/* 4 层递进治理逻辑看板（4 列响应式网格） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {logicCards.map((card, idx) => (
          <div
            key={card.step}
            className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-3 h-full"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {card.step}
                  </span>
                  <span className="font-bold text-slate-950 text-sm sm:text-base">
                    {card.title}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5">
                  {card.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                {card.icon}
                <span className="font-bold text-slate-800">防御层级 {idx + 1}/4</span>
              </span>
              {idx < logicCards.length - 1 && (
                <span className="hidden lg:inline text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 架构主体：专业标准审计风格表格 */}
      <ReportTableFrame>
        <table className="report-dense-table report-data-table w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider w-[16%]">
                防御层级
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider w-[28%]">
                核心定位与管控场景
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-center w-[12%]">
                治理状态
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider w-[44%]">
                核心防护举措
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800 text-xs sm:text-sm">
            {tiers.map((tier) => (
              <tr key={tier.level} className="bg-white">
                {/* 1. 防御层级 */}
                <td className="py-3 px-4 align-top">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-slate-900 text-white leading-none shrink-0">
                      {tier.level}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                      {tier.name}
                    </span>
                  </div>
                </td>

                {/* 2. 管控场景与核心定位 */}
                <td className="py-3 px-4 align-top space-y-1">
                  <span className="text-xs font-mono font-bold text-slate-500 block uppercase">
                    {tier.corePrinciple}
                  </span>
                  <span className="text-sm font-bold text-slate-950 leading-relaxed block">
                    {tier.controlScene}
                  </span>
                </td>

                {/* 3. 治理状态 */}
                <td className="py-3 px-4 align-top text-center">
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
                <td className="py-3 px-4 align-top">
                  <ul className="space-y-1.5 text-sm text-slate-800">
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
