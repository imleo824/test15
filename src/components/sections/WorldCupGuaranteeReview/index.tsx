import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

import { ZZOverview } from "./ZZOverview";
import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { SafetyComplianceSection } from "./SafetyComplianceSection";
import { SystemAuditEvolutionSection } from "./SystemAuditEvolutionSection";
import { ManualAuditSection } from "./ManualAuditSection";
import { BonusEfficiencySection } from "./BonusEfficiencySection";

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

      {/* 3.0 安全合规 (专职监督兜底、风控工单收口、三大安全机制) */}
      <section id="section-3.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>3.0 安全合规</ChapterTitle>
        <SummaryBox variant="chapter">
          {highlightNumbers(
            "安全合规聚焦日常运营与风控核心链路，以[[3.1 专职监督]]作为审计兜底，常态化稽查违规行为；以[[3.2 风控工单]]彻底关停线下群聊，实现业务全面收口与线上化流转；以[[3.3 安全机制]]在系统层面硬性限制敏感导出、背靠背双人复核与通道流水直连对账，筑牢风控防线。"
          )}
        </SummaryBox>
        <div className="report-chapter-content">
          <SafetyComplianceSection />
        </div>
      </section>

      {/* 4.0 系统审核 (审单比例演变、收益测算与云盾系统) */}
      <section id="section-4.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>4.0 系统审核</ChapterTitle>
        <div className="report-chapter-content">
          <SystemAuditEvolutionSection />
        </div>
      </section>

      {/* 5.0 业务概览 (人效飞轮与人工审核机制) */}
      <section id="section-5.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>5.0 业务概览</ChapterTitle>
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

      {/* 6.0 套利指数 (红利宏观走势、等级能效、穿透与新模型) */}
      <section id="section-6.0" className="report-chapter-block scroll-mt-6">
        <ChapterTitle>6.0 套利指数</ChapterTitle>
        <div className="report-chapter-content">
          <BonusEfficiencySection />
        </div>
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
