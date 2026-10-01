import React from "react";
import { InternalControlSection } from "./InternalControlSection";
import { TgGovernanceSection } from "./TgGovernanceSection";
import { SecurityUpgradeSection } from "./SecurityUpgradeSection";
import { PermissionStructureSection } from "./PermissionStructureSection";
import { ReportSectionHeader } from "../../ReportSections";
import { SafetyArchitectureDiagram } from "./SafetyArchitectureDiagram";

export const SafetyComplianceSection: React.FC = () => {
  return (
    <div id="section-safety-compliance" className="space-y-18 lg:space-y-22">
      {/* 3.0 章节开头：安全合规分层防御架构 */}
      <SafetyArchitectureDiagram />

      {/* 3.1 专职监督模块 */}
      <section id="section-3.1" className="scroll-mt-6 space-y-8">
        <ReportSectionHeader
          title="3.1 专职监督"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1">
              底线审计兜底 · 违规稽查与行为追溯
            </span>
          }
        />
        <InternalControlSection />
      </section>

      {/* 3.2 风控工单模块 */}
      <section id="section-3.2" className="scroll-mt-6 space-y-8">
        <ReportSectionHeader
          title="3.2 风控工单"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1">
              全链路闭环流转 · 彻底取缔线下群聊
            </span>
          }
        />
        <TgGovernanceSection />
      </section>

      {/* 3.3 安全机制模块 */}
      <section id="section-3.3" className="scroll-mt-6 space-y-8">
        <ReportSectionHeader
          title="3.3 安全机制"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1">
              系统硬性防线 · 信息维护/异常操作/信息修改
            </span>
          }
        />
        <SecurityUpgradeSection />
      </section>

      {/* 3.4 权限结构模块 */}
      <section id="section-3.4" className="scroll-mt-6 space-y-8">
        <ReportSectionHeader
          title="3.4 权限结构"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1">
              访问管控 · 长期/临时/凭单三级权限架构
            </span>
          }
        />
        <PermissionStructureSection />
      </section>
    </div>
  );
};

export default SafetyComplianceSection;
