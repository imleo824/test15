import React from "react";
import { ReportBadge, ReportTableFrame } from "../../ReportSections";
import { KeyRound, Eye, RefreshCw, ShieldAlert, ArrowRight } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";

interface ArchTier {
  level: string;
  name: string;
  corePrinciple: string;
  status: "执行中" | "可加强";
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L0",
    name: "源头控制",
    corePrinciple: "权限模式升级",
    status: "可加强",
    keyPoints: [
      "[[长期权限]]：仅限极少数核心特权工种，常态化[[审计留痕]]",
      "[[临时权限]]：专项任务审批限时生效，到期[[系统自动熔断]]",
      "[[凭单权限]]：一线业务随工单动态解锁，任务办结[[单结权销]]",
    ],
  },
  {
    level: "L1",
    name: "行为防线",
    corePrinciple: "敏感操作限制",
    status: "可加强",
    keyPoints: [
      "敏感信息全平台集中收口，展示入口默认[[掩码脱敏]]",
      "批量查询与导出按工种严控，高频调阅[[自动熔断]]",
      "敏感信息修改取消单人直改，实行[[双人背靠背审批]]与冷却",
    ],
  },
  {
    level: "L2",
    name: "链路管控",
    corePrinciple: "风控工单治理",
    status: "执行中",
    keyPoints: [
      "系统自动化根治高频诉求，源头消除无效流转",
      "全面关停线下非受控群聊，业务对接 [[100% 迁入风控工单]]",
      "审核处置与跨组协同线上闭环，全流程[[存证可溯源]]",
    ],
  },
  {
    level: "L3",
    name: "监督兜底",
    corePrinciple: "专职角色巡检",
    status: "执行中",
    keyPoints: [
      "全量操作日志[[独立留痕]]与每日/每周常态巡检",
      "返水、费率、账户状态等敏感参数异动[[即时预警]]",
      "外部线索深度稽查与违规问责处理形成闭环",
    ],
  },
];

const logicCards = [
  {
    step: "L0",
    title: "源头控制",
    role: "权限模式升级",
    desc: "坚持最小必要原则推进权限模式升级，以任务定权限、[[单结权销]]，从源头消灭特权泛滥与越权隐患。",
    icon: <KeyRound className="w-4 h-4 text-slate-800" />,
  },
  {
    step: "L1",
    title: "行为防线",
    role: "敏感操作限制",
    desc: "对拥有权限的操作严加监控与硬规则约束，落实敏感操作限制，拦截越权调阅、[[批量导出]]与[[单人擅改]]。",
    icon: <Eye className="w-4 h-4 text-blue-800" />,
  },
  {
    step: "L2",
    title: "链路管控",
    role: "风控工单治理",
    desc: "跨部门业务流转 [[100% 收拢至风控工单]]治理闭环，彻底取缔线下群聊，阻断业务数据外泄扩散。",
    icon: <RefreshCw className="w-4 h-4 text-indigo-800" />,
  },
  {
    step: "L3",
    title: "监督兜底",
    role: "专职角色巡检",
    desc: "设立专职角色开展[[常态化巡检]]、线索深度穿透核查与违规问责，形成全流程防御闭环。",
    icon: <ShieldAlert className="w-4 h-4 text-emerald-800" />,
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[var(--report-panel-gap)]">
      {/* 3.0 章节核心要点总结 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "安全合规不仅是[[事件驱动的单点应对]]，而是需要多维度系统化治理，持续构建覆盖「[[L0 源头控制 · 权限模式升级]] - [[L1 行为防线 · 敏感操作限制]] - [[L2 链路管控 · 风控工单治理]] - [[L3 监督兜底 · 专职角色巡检]]」的[[分层防御闭环体系]]。"
        )}
      </SummaryBox>

      {/* 4 层递进治理逻辑看板（4 列响应式网格，一体化融合治理原则与实施场景） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {logicCards.map((card, idx) => (
          <div
            key={card.step}
            className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-3.5 h-full"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {card.step}
                  </span>
                  <span className="font-bold text-slate-950 text-sm sm:text-base">
                    {card.title}
                  </span>
                </div>
                <ReportBadge tone="slate" className="text-xs font-mono">
                  {card.role}
                </ReportBadge>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {highlightNumbers(card.desc)}
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
        <table className="safety-architecture-table w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left">
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[18%]">
                防御层级
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[24%]">
                核心定位
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[14%]">
                治理状态
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[44%]">
                核心举措
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800 text-xs sm:text-sm text-left">
            {tiers.map((tier) => (
              <tr key={tier.level} className="bg-white text-left">
                {/* 1. 防御层级 */}
                <td className="py-3 px-4 align-top text-left">
                  <div className="flex items-center justify-start gap-2 text-left">
                    <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-slate-900 text-white leading-none shrink-0 text-left">
                      {tier.level}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-950 tracking-tight text-left">
                      {tier.name}
                    </span>
                  </div>
                </td>

                {/* 2. 管控场景与核心定位 */}
                <td className="py-3 px-4 align-top text-left">
                  <span className="text-sm sm:text-base font-bold text-slate-900 text-left block">
                    {tier.corePrinciple}
                  </span>
                </td>

                {/* 3. 治理状态 */}
                <td className="py-3 px-4 align-top text-left">
                  <div className="flex items-center justify-start text-left">
                    <ReportBadge
                      tone={tier.status === "执行中" ? "blue" : "amber"}
                      className="text-xs font-mono"
                    >
                      {tier.status}
                    </ReportBadge>
                  </div>
                </td>

                {/* 4. 核心防护举措 */}
                <td className="py-3 px-4 align-top text-left">
                  <ul className="space-y-1.5 text-sm text-slate-800 text-left">
                    {tier.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start justify-start gap-2 text-left">
                        <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                        <span className="leading-relaxed font-normal text-left">{highlightNumbers(pt)}</span>
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
