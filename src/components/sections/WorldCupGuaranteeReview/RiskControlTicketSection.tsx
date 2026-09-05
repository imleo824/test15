import React from "react";
import { TgGovernanceSection } from "./TgGovernanceSection";

export const RiskControlTicketSection: React.FC = () => {
  return (
    <div id="section-risk-control-tickets" className="report-business-section space-y-4">
      {/* 治理跃迁、受益结构与流程明细 */}
      <TgGovernanceSection />
    </div>
  );
};

