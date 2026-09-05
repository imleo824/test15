import React from "react";
import { ManualTicketBriefSection } from "./ManualTicketBriefSection";
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
      {/* 5.2 人工审核 模块主标题 */}
      <ChapterTitle>5.2 人工审核</ChapterTitle>

      {/* 5.2 核心价值、关键指标、当前状态与整体进度 */}
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
          <ReportStepCard index={1} title="4.4.1 风控工单">
            {highlightNumbers("全面推动线下群聊向[[线上风控工单]]迁移，规范审核流程，实现[[过程可追溯、安全不泄密]]。")}
          </ReportStepCard>
          <ReportStepCard index={2} title="4.4.2 升级考核机制">
            {highlightNumbers("砍掉[[不必要的繁琐流程]]，推动[[审核流程线上化]]与[[规范化]]。")}
          </ReportStepCard>
          <ReportStepCard index={3} title="4.4.3 系统工具支持">
            {highlightNumbers("提供[[高效智能化工具]]，辅助人员[[快速判研]]与[[精准决策]]。")}
          </ReportStepCard>
        </ReportStepGrid>
      </div>

      {/* 一行3列结构：4.4.1 风控工单、4.4.2 升级考核机制、4.4.3 系统工具支持 */}
      <div className="report-module-list">
        <ManualTicketBriefSection />
        <PerformanceReformSection />
        <SystemToolsSection />
      </div>
    </div>
  );
};
