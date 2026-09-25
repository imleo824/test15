import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

import { ZZOverview } from "./ZZOverview";
import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { InternalControlSection } from "./InternalControlSection";
import { RiskControlTicketSection } from "./RiskControlTicketSection";
import { SecurityUpgradeSection } from "./SecurityUpgradeSection";
import { SystemAuditEvolutionSection } from "./SystemAuditEvolutionSection";
import { ManualAuditSection } from "./ManualAuditSection";
import { BonusEfficiencySection } from "./BonusEfficiencySection";

export const WorldCupGuaranteeReview: React.FC = () => {
  return (
    <div className="report-section-stack pb-20">
      <section id="section-1.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>1.0 组织管理</ChapterTitle>
        <PersonnelDistribution />
      </section>

      <section id="section-2.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>2.0 数据概览</ChapterTitle>
        <div className="report-chapter-content">
          <AuditOverviewSection />
        </div>
      </section>

      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 内控概览</ChapterTitle>
        <InternalControlSection />
      </section>

      {/* 4.0 风控工单 */}
      <section id="section-4.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>4.0 风控工单</ChapterTitle>
        <div className="report-chapter-content space-y-10">
          <RiskControlTicketSection />
        </div>
      </section>

      {/* 5.0 安全升级 */}
      <section id="section-5.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>5.0 安全升级</ChapterTitle>
        <div className="report-chapter-content space-y-10">
          <SecurityUpgradeSection />
        </div>
      </section>

      {/* 6.0 系统审核 (独立模式：审单比例演变与直接/间接受益) */}
      <section id="section-6.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>6.0 系统审核</ChapterTitle>
        <SystemAuditEvolutionSection />
      </section>

      <section id="section-7.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>7.0 业务概览</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "当前[[人均效能]]约 [[250,000/人]]，人均处理约 [[24单/时]]。纯粹扩充人力将稀释人效，核心解决路径在于提升[[系统直出与审核比例]]，以系统拦截取代人工排查，实现质量、时效与成本的持续优化。"
          )}
        </SummaryBox>

        <div className="report-chapter-content">
          <ZZOverview />
          <ManualAuditSection />
        </div>
      </section>

      <section id="section-8.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>8.0 套利指数</ChapterTitle>
        <BonusEfficiencySection />
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
