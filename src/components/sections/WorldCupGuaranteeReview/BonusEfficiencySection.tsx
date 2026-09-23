import React from "react";
import { ReportSectionHeader } from "../../ReportSections";
import { BonusMacroTrendChart } from "./BonusMacroTrendChart";
import { BonusVipSpectrumChart } from "./BonusVipSpectrumChart";
import { BonusCrossSiteChart } from "./BonusCrossSiteChart";
import { NewBonusModelSection } from "./NewBonusModelSection";

export const BonusEfficiencySection: React.FC = () => {
  return (
    <div id="section-bonus-efficiency" className="report-business-section space-y-10">
      {/* 章节核心战略提炼卡片 */}
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-4 sm:p-5">
        <div className="bg-slate-50 border border-slate-200 p-4 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
            <span className="font-mono text-xs font-bold text-slate-800 bg-white px-2 py-0.5 border border-slate-300">
              战略核心目标
            </span>
            <span>直接重构与提升平台整体利润率</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            红利支出是直接侵蚀平台毛收益的最大变动成本。套利指数模型的落地，不仅是防范套利，更是在全局层面上<strong>直接决定平台的净利润率</strong>。控住无效红利流失，是提升全盘盈利能力的核心事项。
          </p>
        </div>
      </div>

      {/* 8.1 红利杠杆走势 */}
      <div className="report-panel-stack border-t-2 border-slate-900 pt-5">
        <BonusMacroTrendChart />
      </div>

      {/* 8.2 会员等级能效对比 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <BonusVipSpectrumChart />
      </div>

      {/* 8.3 跨站多账户穿透对比 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <BonusCrossSiteChart />
      </div>

      {/* 8.4 全新的红利模型 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <NewBonusModelSection />
      </div>
    </div>
  );
};
