import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { SafetyComplianceSection } from "./SafetyComplianceSection";
import { SystemAuditEvolutionSection } from "./SystemAuditEvolutionSection";

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
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "三季度累计拦截金额 [[2.72]]，平均审核时长稳定在 [[0:08:45]]；体育为核心拦截业务，重点站点平稳可控。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <AuditOverviewSection />
        </div>
      </section>

      {/* 3.0 安全合规 (专职监督兜底、风控工单收口、安全机制) */}
      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 安全合规</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "构建[[安全合规分层防御架构]]：以专职监督兜底、风控工单线上闭环、底层机制硬控收口，消除私下流转与操作盲区。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <SafetyComplianceSection />
        </div>
      </section>

      {/* 4.0 云盾审核 (审单比例演变、收益测算与云盾系统) */}
      <section id="section-4.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>4.0 云盾审核</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "从25年开始，历经多轮迭代后在26年9月灰度验证，于 [[9月28日]] 正式全量上线，实现审单模式向系统自动化的根本性重构。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <SystemAuditEvolutionSection />
        </div>
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
