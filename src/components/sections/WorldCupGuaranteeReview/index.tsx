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
            "二季度累计拦截金额 [[2.72]]，平均审核时长稳定在 [[0:08:45]]；体育为核心拦截业务，重点站点平稳可控。"
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
            "聚焦运营与审核全链路合规：[[3.1 专职监督]]常态化稽查违规与敏感操作；[[3.2 风控工单]]全面取缔线下群聊，收拢为系统工单流转；[[3.3 安全机制]]落实导出限额水印、敏感修改双人复核与资金通道直连对账。"
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
            "历经规划、试点与策略调优，全盘各站于 [[9月28日]] 正式全量上线云盾系统，完成审单模式重构。"
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
