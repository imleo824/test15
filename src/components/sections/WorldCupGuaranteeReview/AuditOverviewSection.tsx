import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";

export const AuditOverviewSection: React.FC = () => {
  return (
    <div className="report-chapter-content">
      {/* 2.1 拦截金额与处理时效 */}
      <AuditOverviewAmountAndEffort />

      {/* 2.2 拦截金额与类型占比 */}
      <AuditOverviewInterceptionType />

      {/* 2.3 代理拦截数据 */}
      <AuditOverviewAgentInterception />

      {/* 2.4 体育拦截数据 */}
      <AuditOverviewSportsInterception />

      {/* 2.5 工作室拦截明细 */}
      <AuditOverviewStudioInterception />

      {/* 2.6 高等级会员 */}
      <AuditOverviewHighVipDetail />
    </div>
  );
};

export default AuditOverviewSection;

