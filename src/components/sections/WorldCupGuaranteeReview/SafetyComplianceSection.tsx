import React from "react";
import { PermissionStructureSection } from "./PermissionStructureSection";
import { SecurityUpgradeSection } from "./SecurityUpgradeSection";
import { TgGovernanceSection } from "./TgGovernanceSection";
import { InternalControlSection } from "./InternalControlSection";
import { ReportSectionHeader } from "../../ReportSections";
import { SafetyArchitectureDiagram } from "./SafetyArchitectureDiagram";

const TIER_STEPS = [
  { level: "L0", shortTitle: "源头控制", title: "L0 源头控制 权限模式升级", href: "#section-3.1" },
  { level: "L1", shortTitle: "行为防线", title: "L1 行为防线 敏感操作限制", href: "#section-3.2" },
  { level: "L2", shortTitle: "链路管控", title: "L2 链路管控 风控工单治理", href: "#section-3.3" },
  { level: "L3", shortTitle: "监督兜底", title: "L3 监督兜底 专职角色巡检", href: "#section-3.4" },
] as const;

export const SafetyTierLocationIndicator: React.FC<{
  currentLevel: "L0" | "L1" | "L2" | "L3";
}> = ({ currentLevel }) => {
  return (
    <nav
      aria-label="防御分层位置导航"
      className="flex items-center gap-1 sm:gap-1.5 flex-nowrap text-xs font-mono py-0.5"
    >
      {TIER_STEPS.map((step, idx) => {
        const isCurrent = step.level === currentLevel;
        return (
          <React.Fragment key={step.level}>
            <a
              href={step.href}
              className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs whitespace-nowrap transition-all select-none shrink-0 ${
                isCurrent
                  ? "bg-slate-900 text-white font-bold border border-slate-900 shadow-xs ring-1 ring-slate-900"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200/90 border border-slate-200"
              }`}
              title={`防御分层位置 · ${step.level} ${step.shortTitle}`}
            >
              <span
                className={`font-mono font-bold text-xs px-1 py-0.5 leading-none shrink-0 ${
                  isCurrent
                    ? "bg-white text-slate-950"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {step.level}
              </span>
              <span
                className={`text-xs whitespace-nowrap leading-none ${
                  isCurrent
                    ? "text-white font-bold"
                    : "text-slate-600 font-medium"
                }`}
              >
                {step.shortTitle}
              </span>
            </a>
            {idx < TIER_STEPS.length - 1 && (
              <span className="text-slate-300 font-normal select-none shrink-0 px-0.5 text-xs">
                ➔
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export const SafetyComplianceSection: React.FC = () => {
  return (
    <div id="section-safety-compliance" className="report-chapter-content space-y-12 sm:space-y-14">
      {/* 3.0 章节开头：安全合规分层防御架构 */}
      <SafetyArchitectureDiagram />

      {/* L0 源头控制 权限模式升级 */}
      <section id="section-3.1" className="scroll-mt-6 flex flex-col gap-6">
        <ReportSectionHeader
          title="L0 源头控制 权限模式升级"
          rightContent={<SafetyTierLocationIndicator currentLevel="L0" />}
        />
        <PermissionStructureSection />
      </section>

      {/* L1 行为防线 敏感操作限制 */}
      <section id="section-3.2" className="scroll-mt-6 flex flex-col gap-6">
        <ReportSectionHeader
          title="L1 行为防线 敏感操作限制"
          rightContent={<SafetyTierLocationIndicator currentLevel="L1" />}
        />
        <SecurityUpgradeSection />
      </section>

      {/* L2 链路管控 风控工单治理 */}
      <section id="section-3.3" className="scroll-mt-6 flex flex-col gap-6">
        <ReportSectionHeader
          title="L2 链路管控 风控工单治理"
          rightContent={<SafetyTierLocationIndicator currentLevel="L2" />}
        />
        <TgGovernanceSection />
      </section>

      {/* L3 监督兜底 专职角色巡检 */}
      <section id="section-3.4" className="scroll-mt-6 flex flex-col gap-6">
        <ReportSectionHeader
          title="L3 监督兜底 专职角色巡检"
          rightContent={<SafetyTierLocationIndicator currentLevel="L3" />}
        />
        <InternalControlSection />
      </section>
    </div>
  );
};

export default SafetyComplianceSection;
