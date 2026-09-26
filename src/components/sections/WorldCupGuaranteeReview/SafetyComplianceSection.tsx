import React from "react";
import { InternalControlSection } from "./InternalControlSection";
import { TgGovernanceSection } from "./TgGovernanceSection";
import { SecurityUpgradeSection } from "./SecurityUpgradeSection";
import { ReportSectionHeader } from "../../ReportSections";
import { SafetyArchitectureDiagram } from "./SafetyArchitectureDiagram";

export const SafetyComplianceSection: React.FC = () => {
  return (
    <div id="section-safety-compliance" className="space-y-16">
      {/* 3.0 章节开头：安全合规分层治理架构示意图 (单点 · 协同 · 审计) */}
      <SafetyArchitectureDiagram />

      {/* 3.1 专职监督模块 */}
      <section id="section-3.1" className="report-panel-stack border-t-2 border-slate-900 pt-8 space-y-6 scroll-mt-10">
        <ReportSectionHeader
          title="3.1 专职监督"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-200">
              底线审计兜底 · 违规稽查与行为追溯
            </span>
          }
        />
        <InternalControlSection />
      </section>

      {/* 3.2 风控工单模块 */}
      <section id="section-3.2" className="report-panel-stack border-t-2 border-slate-900 pt-8 space-y-6 scroll-mt-10">
        <ReportSectionHeader
          title="3.2 风控工单"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-200">
              流程统一收口 · 线下群清零与工单流转
            </span>
          }
        />
        <TgGovernanceSection />
      </section>

      {/* 3.3 安全机制模块 */}
      <section id="section-3.3" className="report-panel-stack border-t-2 border-slate-900 pt-8 space-y-6 scroll-mt-10">
        <ReportSectionHeader
          title="3.3 安全机制"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-200">
              系统硬性防线 · 敏感操作/信息修改/资金调账
            </span>
          }
        />
        <SecurityUpgradeSection />
      </section>
    </div>
  );
};

export default SafetyComplianceSection;
