import React from "react";
import { TgGovernanceSection } from "./TgGovernanceSection";
import { PerformanceReformSection } from "./PerformanceReformSection";
import { SystemToolsSection } from "./SystemToolsSection";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ManualAuditEfficiencyChart } from "./ManualAuditEfficiencyChart";
import { ChapterTitle, ReportStepCard, ReportStepGrid } from "../../ReportSections";
import { highlightNumbers } from "./utils";
import { Lightbulb } from "lucide-react";

export const ManualAuditSection: React.FC = () => {
  return (
    <div id="section-manual-audit" className="report-business-section">
      {/* 3.4 人工审核 模块主标题 */}
      <ChapterTitle>3.4 人工审核</ChapterTitle>

      {/* 3.4 核心价值、关键指标、当前状态与整体进度 */}
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

      {/* 兼顾质量与时效的 3 个解法 */}
      <div className="report-section-cluster">
        <div className="report-section-kicker">
          <div className="report-section-kicker-icon">
            <Lightbulb size={18} strokeWidth={2.5} />
          </div>
          <h4>
            兼顾质量与时效的 3 个解法：
          </h4>
        </div>
        
        <ReportStepGrid>
          <ReportStepCard index={1} title="3.4.1 流程升级重构">
            {highlightNumbers("通过[[系统提升自动审核能力]]，[[大幅降低]]人工审核单量比例（详见[[3.1-3.3]]）。")}
          </ReportStepCard>
          <ReportStepCard index={2} title="3.4.2 升级考核机制">
            {highlightNumbers("砍掉[[不必要的繁琐流程]]，推动[[审核流程线上化]]与[[规范化]]。")}
          </ReportStepCard>
          <ReportStepCard index={3} title="3.4.3 系统工具支持">
            {highlightNumbers("提供[[高效智能化工具]]，辅助人员[[快速判研]]与[[精准决策]]。")}
          </ReportStepCard>
        </ReportStepGrid>
      </div>

      {/* 一行3列结构：3.4.1 流程升级重构、3.4.2 升级考核机制、3.4.3 系统工具支持 */}
      <div className="report-module-list">
        <TgGovernanceSection />
        <PerformanceReformSection />
        <SystemToolsSection />
      </div>
    </div>
  );
};
