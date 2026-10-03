import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

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
        <div className="report-chapter-content">
          <AuditOverviewSection />
        </div>
      </section>

      {/* 3.0 安全合规 (专职监督兜底、风控工单收口、安全机制) */}
      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 安全合规</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "安全合规不仅是[[事件驱动]]的单点应对，而是需要多维度系统化治理，持续构建[[安全合规分层防御架构]]：从源头让[[权限分配合理]]（L0 权限结构），对有权限人员实施[[实时行为监控与硬约束]]（L1 安全机制），在跨部门流转中对[[业务数据实施全链路工单化管控]]（L2 风控工单），最终由专职角色实施[[底线稽查与常态巡检]]（L3 专职监督），筑牢纵深防护底线。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <SafetyComplianceSection />
        </div>
      </section>

      {/* 4.0 云盾审核 (审单比例演变、收益测算与云盾系统) */}
      <section id="section-4.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>4.0 云盾审核</ChapterTitle>
        <div className="report-chapter-content">
          <SystemAuditEvolutionSection />
        </div>
      </section>

      {/* 5.0 后续计划 (优化会员云盾审核、启动代理云盾审核、继续推进安全合规) */}
      <section id="section-5.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>5.0 后续计划</ChapterTitle>
        <div className="report-chapter-content">
          <FuturePlansSection />
        </div>
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
