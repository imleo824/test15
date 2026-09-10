import React from "react";
import { ManualTicketBriefSection } from "./ManualTicketBriefSection";
import { PerformanceReformSection } from "./PerformanceReformSection";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ManualAuditEfficiencyChart } from "./ManualAuditEfficiencyChart";
import { ReportSectionHeader, ReportStepCard, ReportStepGrid } from "../../ReportSections";
import { highlightNumbers } from "./utils";
import { Lightbulb } from "lucide-react";

export const ManualAuditSection: React.FC = () => {
  return (
    <div id="section-manual-audit" className="report-business-section">
      {/* 6.2 人工审核 模块标题 */}
      <ReportSectionHeader title="6.2 人工审核" />

      {/* 6.2 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="解决长期[[依赖个人自觉性]]、[[小飞机群对接工作]]、[[绩效机制缺陷]]等，产生的[[违规操作]]、[[数据安全]]、[[影响效率]]等问题"
        metricLabel="核心流程线上化率"
        currentStatus="90%"
        keyMetrics="100%"
        progress="90%"
        estimatedTime="9月全部完成切换"
      />

      {/* 人均审核人均效能趋势 */}
      <ManualAuditEfficiencyChart />

      {/* 6.2.1 风控工单、6.2.2 升级考核机制 */}
      <div className="report-module-list">
        <ManualTicketBriefSection />
        <PerformanceReformSection />
      </div>
    </div>
  );
};
