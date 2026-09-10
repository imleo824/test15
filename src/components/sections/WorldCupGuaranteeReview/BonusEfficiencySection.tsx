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
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-5 space-y-4">
        {/* 标题与核心战略定位 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              套利指数与红利风控战略提炼
            </h3>
          </div>
          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2.5 py-1 border border-slate-200 self-start sm:self-auto">
            平台利润率重构核心策略
          </span>
        </div>

        {/* 核心 2 大点结构化剖析 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* 1. 影响利润率：最重要的大事 */}
          <div className="bg-slate-50 border border-slate-200 p-4 space-y-2 h-full flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span className="w-5 h-5 bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">1</span>
                <span>核心目标：直接重构与提升平台整体利润率</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                红利支出是直接侵蚀平台毛收益的最大变动成本。套利指数模型的落地，不仅是防范套利，更是在全局层面上<strong>直接决定平台的净利润率</strong>。控住无效红利流失，是提升全盘盈利能力核心事项。
              </p>
            </div>
          </div>

          {/* 2. 发的合理：正常/少发/不发/多发（结构性调整） */}
          <div className="bg-slate-50 border border-slate-200 p-4 space-y-2 h-full flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <span className="w-5 h-5 bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">2</span>
                <span>核心本质：精准结构性调整，发的合理 ≠ 盲目少发</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                “发的合理”绝非简单地一刀切盲目压低红利总额，而是通过套利指数算法输出<strong>【正常 / 少发 / 不发 / 多发】</strong>四大决策建议：
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="bg-white border border-slate-200 p-2 text-center">
                <span className="font-bold block text-emerald-800 text-xs font-mono">【正常】</span>
                <span className="text-[11px] text-slate-600 font-mono">指数处于 &lt; 30 区间</span>
              </div>
              <div className="bg-white border border-slate-200 p-2 text-center">
                <span className="font-bold block text-amber-800 text-xs font-mono">【少发】</span>
                <span className="text-[11px] text-slate-600 font-mono">指数处于 30~70 区间</span>
              </div>
              <div className="bg-white border border-slate-200 p-2 text-center">
                <span className="font-bold block text-rose-800 text-xs font-mono">【不发】</span>
                <span className="text-[11px] text-slate-600 font-mono">指数处于 ≥ 70 区间</span>
              </div>
              <div className="bg-white border border-slate-200 p-2 text-center">
                <span className="font-bold block text-blue-900 text-xs font-mono">【多发】</span>
                <span className="text-[11px] text-slate-600 font-mono">高等级且极低风险区间</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部逻辑闭环 */}
        <div className="bg-slate-50 border border-slate-200 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700">
          <div>
            <strong>监控与执行体系：</strong>通过<span className="text-blue-900 font-bold">游戏输赢、存款杠杆、盈利杠杆</span>三维监控全盘能效，配合<span className="text-blue-900 font-bold">全量（自动/手动）套利指数模型</span>与<span className="text-rose-700 font-bold">隐性打标兜底</span>，实现最大化控本提效。
          </div>
        </div>
      </div>

      {/* 7.1 红利杠杆走势 */}
      <div className="report-panel-stack border-t-2 border-slate-900 pt-5">
        <BonusMacroTrendChart />
      </div>

      {/* 7.2 会员等级能效对比 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <BonusVipSpectrumChart />
      </div>

      {/* 7.3 跨站多账户穿透对比 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <BonusCrossSiteChart />
      </div>

      {/* 7.4 全新的红利模型 */}
      <div className="report-panel-stack border-t border-slate-200 pt-5">
        <NewBonusModelSection />
      </div>
    </div>
  );
};
