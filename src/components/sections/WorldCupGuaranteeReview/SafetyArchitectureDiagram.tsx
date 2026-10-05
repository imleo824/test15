import React from "react";
import { ReportBadge, ReportTableFrame } from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";

interface ArchTier {
  level: string;
  name: string;
  corePrinciple: string;
  status: "执行中" | "可加强";
  summary: string;
  keyPoints: string[];
}

const tiers: ArchTier[] = [
  {
    level: "L0",
    name: "源头控制",
    corePrinciple: "权限模式升级",
    status: "可加强",
    summary: "坚持[[最小必要原则]]推进权限模式升级，以任务定权限、[[单结权销]]，从源头消灭特权泛滥与越权隐患。",
    keyPoints: [
      "长期权限：仅限极少数核心特权工种，常态化[[审计留痕]]",
      "临时权限：专项任务审批限时生效，到期[[系统自动收回]]",
      "凭单权限：一线业务随工单动态解锁，任务办结[[单结权销]]",
    ],
  },
  {
    level: "L1",
    name: "行为防线",
    corePrinciple: "敏感操作限制",
    status: "可加强",
    summary: "对[[拥有权限的操作]]严加监控，落实敏感操作限制，拦截越权调阅、[[批量导出]]与[[单人擅改]]。",
    keyPoints: [
      "清理收口：散落在不同模块和平台的[[敏感信息]]进行[[集中清理]]",
      "调阅管控：批量查询与导出按工种严控，高频调阅实行[[异常自动熔断]]",
      "修改保护：敏感信息修改取消单人直改，实行[[双人背靠背审批]]与提款冷却",
    ],
  },
  {
    level: "L2",
    name: "链路管控",
    corePrinciple: "风控工单治理",
    status: "执行中",
    summary: "跨部门敏感业务流转收拢至[[风控工单治理闭环]]，取缔线下群聊，阻断业务数据外泄扩散。",
    keyPoints: [
      "源头消除：系统自动化根治高频诉求，源头消除无效流转",
      "关停群聊：全面关停线下非受控群聊，业务对接全面[[迁入风控工单]]",
      "闭环存证：审核处置与跨组协同线上闭环，全流程[[存证可溯源]]",
    ],
  },
  {
    level: "L3",
    name: "监督兜底",
    corePrinciple: "专职角色巡检",
    status: "执行中",
    summary: "设立[[专职角色]]常态化巡检全量操作日志，强化[[敏感行为即时预警]]与线索深度稽查追责。",
    keyPoints: [
      "常态巡检：全量操作日志[[独立留痕]]，对明文回显、敏感修改等实施常态复核",
      "即时预警：红利派发、平台参数变动与异常登录等高危操作[[拦截预警]]",
      "问责闭环：外部线索深度稽查、违规责任人严肃追责与[[资产止损挽回]]",
    ],
  },
];

export const SafetyArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3.5">
      {/* 3.0 章节核心要点总结 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "构建从源头权限到日常监督的四层防御体系：覆盖「[[L0 源头控制 · 权限模式升级]] - [[L1 行为防线 · 敏感操作限制]] - [[L2 链路管控 · 风控工单治理]] - [[L3 监督兜底 · 专职角色巡检]]」，实现权限严格收口、行为全程受控、流转线上存证与专职独立监督。"
        )}
      </SummaryBox>

      {/* 架构主体：专业标准审计风格表格 */}
      <ReportTableFrame>
        <table className="safety-architecture-table w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-left">
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[14%]">
                防御层级
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[18%]">
                核心定位
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[12%]">
                治理状态
              </th>
              <th className="py-2.5 px-4 text-xs font-bold text-slate-900 uppercase tracking-wider text-left w-[56%]">
                核心举措
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800 text-xs sm:text-sm text-left">
            {tiers.map((tier) => (
              <tr key={tier.level} className="bg-white text-left">
                {/* 1. 防御层级 */}
                <td className="py-3.5 px-4 align-middle text-left">
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
                <td className="py-3.5 px-4 align-middle text-left">
                  <span className="text-sm sm:text-base font-bold text-slate-900 text-left block">
                    {tier.corePrinciple}
                  </span>
                </td>

                {/* 3. 治理状态 */}
                <td className="py-3.5 px-4 align-middle text-left">
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
                <td className="py-3.5 px-4 align-top text-left">
                  <div className="space-y-2 text-left">
                    {/* 核心举措总结句：无分割符号，总结提炼 */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed text-left">
                      {highlightNumbers(tier.summary)}
                    </p>

                    {/* 具体实施明细：带圆点符号与粗体前缀引导 */}
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700 text-left pt-1.5 border-t border-slate-100">
                      {tier.keyPoints.map((pt, pIdx) => {
                        const parts = pt.split("：");
                        const hasPrefix = parts.length > 1 && parts[0].length <= 6;
                        return (
                          <li key={pIdx} className="flex items-start justify-start gap-2 text-left">
                            <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-1.5"></span>
                            <span className="leading-relaxed font-normal text-left">
                              {hasPrefix && (
                                <strong className="text-slate-950 font-bold">{parts[0]}：</strong>
                              )}
                              {highlightNumbers(hasPrefix ? parts.slice(1).join("：") : pt)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
