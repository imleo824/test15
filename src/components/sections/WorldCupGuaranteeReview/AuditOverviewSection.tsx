import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";
import { ReportSectionHeader } from "../../ReportSections";

export const AuditOverviewSection: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 2.1 风控数据 主模块标题 */}
      <ReportSectionHeader
        title="2.1 风控数据"
        rightContent={
          <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-200">
            2026年二季度 · 核心拦截与时效全景
          </span>
        }
      />

      {/* 2.1.1 拦截金额与处理量 */}
      <AuditOverviewAmountAndEffort />

      {/* 2.1.2 拦截金额与类型占比 */}
      <AuditOverviewInterceptionType />

      {/* 2.1.3 代理拦截数据 */}
      <AuditOverviewAgentInterception />

      {/* 2.1.4 体育拦截数据 */}
      <AuditOverviewSportsInterception />

      {/* 2.1.5 工作室拦截明细 */}
      <AuditOverviewStudioInterception />

      {/* 2.1.6 高等级会员 */}
      <AuditOverviewHighVipDetail />
    </div>
  );
};
