import React from "react";
import { ReportSectionHeader } from "../../ReportSections";
import { PerformanceReformSection } from "./PerformanceReformSection";

export const ManualAuditSection: React.FC = () => {
  return (
    <div id="section-manual-audit" className="report-business-section space-y-4">
      <ReportSectionHeader title="7.2 人工审核" />
      <PerformanceReformSection />
    </div>
  );
};
