import React from "react";
import { TgGovernanceSection } from "./TgGovernanceSection";

export const RiskControlTicketSection: React.FC = () => {
  return (
    <div id="section-risk-control-tickets" className="report-business-section space-y-6">
      {/* 治理升级、受益结构与流程明细 */}
      <TgGovernanceSection />
    </div>
  );
};


