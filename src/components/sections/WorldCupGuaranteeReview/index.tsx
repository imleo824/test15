import React from "react";
import { ChapterTitle } from "../../ReportSections";

import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { SafetyComplianceSection } from "./SafetyComplianceSection";
import { SystemAuditEvolutionSection } from "./SystemAuditEvolutionSection";
import { FuturePlansSection } from "./FuturePlansSection";

export const WorldCupGuaranteeReview: React.FC = () => {
  return (
    <div className="report-section-stack pb-20">
      {/* 1.0 组织管理 */}
      <section id="section-1.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>1.0 组织管理</ChapterTitle>
        <PersonnelDistribution />
      </section>

      {/* 2.0 数据概览 */}
      <section id="section-2.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>2.0 数据概览</ChapterTitle>
        <AuditOverviewSection />
      </section>

      {/* 3.0 安全合规 (权限模式升级、敏感操作限制、风控工单治理、专职角色巡检) */}
      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 安全合规</ChapterTitle>
        <SafetyComplianceSection />
      </section>

      {/* 4.0 云盾审核 (审单比例演变、收益测算与云盾系统) */}
      <section id="section-4.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>4.0 云盾审核</ChapterTitle>
        <SystemAuditEvolutionSection />
      </section>

      {/* 5.0 后续计划 (优化会员云盾审核、启动代理云盾审核、继续推进安全合规) */}
      <section id="section-5.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>5.0 后续计划</ChapterTitle>
        <FuturePlansSection />
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
