import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

import { ZZOverview } from "./ZZOverview";
import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { InternalControlSection } from "./InternalControlSection";
import { RiskControlTicketSection } from "./RiskControlTicketSection";
import { SystemAuditEvolutionSection } from "./SystemAuditEvolutionSection";
import { ManualAuditSection } from "./ManualAuditSection";
import { SpecialRiskControlSection } from "./SpecialRiskControlSection";
import { BonusEfficiencySection } from "./BonusEfficiencySection";

export const WorldCupGuaranteeReview: React.FC = () => {
  return (
    <div className="report-section-stack pb-20">
      <section className="report-chapter-block">
        <ChapterTitle>1.0 组织管理</ChapterTitle>
        <PersonnelDistribution />
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>2.0 数据概览</ChapterTitle>
        <div className="report-chapter-content">
          <AuditOverviewSection />
          <InternalControlSection />
        </div>
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>3.0 风控工单</ChapterTitle>
        <RiskControlTicketSection />
      </section>

      {/* 4.0 系统审核 (独立模式：审单比例演变与直接/间接受益) */}
      <section className="report-chapter-block">
        <ChapterTitle>4.0 系统审核</ChapterTitle>
        <SystemAuditEvolutionSection />
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>5.0 业务概览</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "当前[[人均效能]]约 [[250,000/人]]，人均处理约 [[24单/时]]。纯粹扩充人力将稀释人效，核心破局点在于提升[[系统直出与审核比例]]，以系统拦截取代人工排查，实现质量、时效与成本的持续优化。"
          )}
        </SummaryBox>

        <div className="report-chapter-content">
          <ZZOverview />
          <ManualAuditSection />
          <SpecialRiskControlSection />
        </div>
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>6.0 红利效率</ChapterTitle>
        <BonusEfficiencySection />
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
