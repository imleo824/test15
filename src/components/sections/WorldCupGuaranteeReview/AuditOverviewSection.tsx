import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";
import { SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewSection: React.FC = () => {
  return (
    <div className="report-chapter-content">
      {/* 2.0 章节核心要点 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "三季度风控拦截总金额达 2.72 亿元，其中体育类为[[核心拦截基本盘]]（占比 55.99%）；在单量峰值达 300.77w 单承压下，平均人工审核时长稳定在 08:45；全面推进批量黑产直接扣除本金与高等级会员穿透排查。"
        )}
      </SummaryBox>

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

