import React from "react";
import { PerformanceReformSection } from "./PerformanceReformSection";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ManualAuditEfficiencyChart } from "./ManualAuditEfficiencyChart";
import { ReportSectionHeader } from "../../ReportSections";

export const ManualAuditSection: React.FC = () => {
  return (
    <div id="section-manual-audit" className="report-business-section">
      {/* 6.2 人工审核 模块标题 */}
      <ReportSectionHeader title="6.2 人工审核" />

      {/* 6.2 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="解决长期[[依赖个人自觉性]]、[[绩效机制缺陷]]等问题，破除[[粗暴划档]]与[[经验断层]]，全面提升[[人工审核质效]]与[[团队自驱力]]"
        metricLabel="考核机制升级覆盖率"
        currentStatus="85%"
        keyMetrics="100%"
        progress="85%"
        estimatedTime="9月全量落地"
      />

      {/* 人均审核人均效能趋势 */}
      <ManualAuditEfficiencyChart />

      {/* 6.2.1 升级考核机制 */}
      <div className="report-module-list mt-6">
        <PerformanceReformSection />
      </div>
    </div>
  );
};
