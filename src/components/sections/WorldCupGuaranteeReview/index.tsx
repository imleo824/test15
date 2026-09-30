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
            "安全合规不仅仅是[[单点]]优化，是需要从[[多维度]]和[[多角度]]进行[[全面解决]]，长期来看希望构建[[安全合规分层防御架构]]：以[[专职监督底线兜底]]、[[风控工单线上闭环]]、[[底层安全机制硬控]]，优化私下流转与操作盲区。"
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
