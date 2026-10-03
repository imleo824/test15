import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";
import { ReportBadge, ReportSectionHeader } from "../../ReportSections";

export const AuditOverviewSection: React.FC = () => {
  return (
    <div className="report-chapter-content">
      {/* 2.1 风控数据 主模块标题 */}
      <ReportSectionHeader
        title="2.1 风控数据"
        rightContent={
          <ReportBadge tone="slate" className="text-xs font-mono py-1 px-3">
            2026年第三季度 · 核心拦截与时效全景
          </ReportBadge>
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

