import React from "react";
import { highlightNumbers, SummaryBox } from "./utils";
import { ReportBadge, ReportTableFrame } from "../../ReportSections";

interface PermissionItem {
  id: number;
  name: string;
  status: string;
  statusTone: "green" | "amber" | "blue" | "slate";
  tag: string;
  applicableScope: string;
  rule: string;
  controlMeasure: string;
}

const permissionItems: PermissionItem[] = [
  {
    id: 1,
    name: "长期权限",
    status: "已支持",
    statusTone: "green",
    tag: "少数特权工种",
    applicableScope: "日常核心工作需要（如风控）",
    rule: "仅针对特定极少数核心工种配置常态化查询权限；全量操作实施 100% [[独立审计留痕与行为巡检]]。",
    controlMeasure: "全量日志留痕 + 异常预警",
  },
  {
    id: 2,
    name: "临时权限",
    status: "待支持",
    statusTone: "amber",
    tag: "限时审批生效",
    applicableScope: "专项排查、跨部门短期支持",
    rule: "线上发起限时临时权限申请，明确指定[[有效时间窗口]]（如 2 小时或当日）；到期系统全自动回收熔断。",
    controlMeasure: "到期自动失效、零历史残留",
  },
  {
    id: 3,
    name: "凭单查询",
    status: "待支持",
    statusTone: "amber",
    tag: "任务动态解锁",
    applicableScope: "一线客服、常规审核、业务经办",
    rule: "日常[[无独立主动查询入口]]；仅当系统派单或承接有效工单时，动态解锁[[该工单涉及的玩家特定信息]]，单结权销。",
    controlMeasure: "以单定权、单结权销",
  },
];

export const PermissionStructureSection: React.FC = () => {
  return (
    <div id="section-permission-structure" className="flex flex-col gap-6">
      {/* 3.1 权限模式升级 章节核心导语 */}
      <SummaryBox variant="module">
        <div className="space-y-2.5">
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "一线业务无独立主动查会员场景。全面推进[[权限模式升级]]，构建「长期特权 - 临时限时 - 凭单查询」三级分层架构，收拢常态化查询权限，从源头落实[[以任务定权限、动态解锁、单结权销]]。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 三级权限架构运转规范明细表 */}
      <ReportTableFrame>
        <table className="w-full text-left border-collapse min-w-[680px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <th className="py-2.5 px-3 w-[18%]">权限模式</th>
              <th className="py-2.5 px-3 w-[12%]">支持状态</th>
              <th className="py-2.5 px-3 w-[20%]">适用场景</th>
              <th className="py-2.5 px-3 w-[34%]">运转逻辑与规则</th>
              <th className="py-2.5 px-3 w-[16%]">管控机制</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {permissionItems.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-3 align-top">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="w-5 h-5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </span>
                    <ReportBadge
                      tone="slate"
                      className="text-xs font-mono font-normal"
                    >
                      {item.tag}
                    </ReportBadge>
                  </div>
                </td>
                <td className="py-3 px-3 align-top">
                  <ReportBadge
                    tone={item.statusTone}
                    className="text-xs font-mono font-bold"
                  >
                    {item.status}
                  </ReportBadge>
                </td>
                <td className="py-3 px-3 text-slate-700 text-sm leading-relaxed align-top">
                  {item.applicableScope}
                </td>
                <td className="py-3 px-3 text-slate-800 text-sm leading-relaxed align-top">
                  {highlightNumbers(item.rule)}
                </td>
                <td className="py-3 px-3 text-slate-700 font-mono text-xs sm:text-sm leading-relaxed align-top">
                  {highlightNumbers(item.controlMeasure)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReportTableFrame>
    </div>
  );
};

export default PermissionStructureSection;
