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
            "围绕[[拦截金额]]、[[处理时效]]、[[业务类型]]与[[重点站点]]开展量化评估：二季度累计拦截 [[2.72]]，平均人工审核时长稳固在 [[0:08:45]]，高危业务与重点站点风险防守扎实有效。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <AuditOverviewSection />
        </div>
      </section>

      {/* 3.0 安全合规 (专职监督兜底、风控工单收口、三大安全机制) */}
      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 安全合规</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "安全合规聚焦日常运营与风控核心链路：以[[3.1 专职监督]]开展常态化审计与违规稽查；以[[3.2 风控工单]]关停线下群聊并实现业务线上化收口；以[[3.3 安全机制]]落实敏感导出管控、背靠背双人复核与通道直连对账。"
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
            "从 [[2025年四季度]] 开始规划，分步、拆期推进，至 [[2026年三季度]] 逐步完成了风控审核流程优化；经过三季度调试，从 [[1个站]] 到 [[A+B等全站]] 于 [[9月28日]] 正式全量开启。"
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
