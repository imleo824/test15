import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { MemberRiskDirectPayout } from "./MemberRiskDirectPayout";
import { MemberRiskSmartDispatch } from "./MemberRiskSmartDispatch";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ChapterTitle, ReportPanel, ReportPanelHeader, ReportStepCard } from "../../ReportSections";
import { Funnel } from "lucide-react";

export const SmartDispatchSection: React.FC = () => {
  return (
    <div id="section-smart-dispatch" className="report-business-section">
      {/* 4.3 智能派单 模块主标题 */}
      <ChapterTitle>4.3 智能派单</ChapterTitle>

      {/* 3.3 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="重构[[接单派单逻辑]]，推行[[人单匹配]]与[[智能打分]]，实现[[提效提质]]"
        metricLabel="转人工审核占比"
        currentStatus="55%"
        keyMetrics="<20%"
        progress="70%"
        estimatedTime="世界杯前"
      />

      {/* 独立模块：审核漏斗 */}
      <ReportPanel className="report-panel-stack">
        {/* 审核漏斗 标题 */}
        <ReportPanelHeader icon={<Funnel className="h-5 w-5" />} title="审核漏斗" />

        {/* 现状总结一句话 */}
        <SummaryBox>
          {highlightNumbers("当前提款订单中 [[55%]] 转入人工审核，但最终违规实锤占比 [[red:<2.5%]]。大量低风险订单挤占人工资源，亟需提升[[系统直出比例]]与[[智能派单质效]]。")}
        </SummaryBox>

        {/* 2个优化点，一行2列 (扁平左边栏设计) */}
        <div className="smart-funnel-insight-grid">
          {/* 优化点一 */}
          <ReportStepCard index={1} title="优化点一：是否要转到人工？">
            <p>
              {highlightNumbers("剩余 [[52.5%]] 的订单属于[[低风险常规订单]]，[[系统直接出单]]优化空间很大。")}
            </p>
          </ReportStepCard>

          {/* 优化点二 */}
          <ReportStepCard index={2} title="优化点二：分配给谁的问题？">
            <p>
              {highlightNumbers("确定转人工后，需解决[[blue:人与单精准匹配]]问题，全面提升[[审单质量]]与[[效率]]。")}
            </p>
          </ReportStepCard>
        </div>

        {/* 审核漏斗示意图 */}
        <div className="report-module-surface smart-funnel">
          <div className="smart-funnel-canvas">
            {/* 模块 1：提款订单（100%） */}
            <div className="smart-funnel-node smart-funnel-node-root">
              订单（100%）
            </div>

            {/* 指向系统审核 */}
            <div className="smart-funnel-arrow">
              ↓
            </div>

            {/* 模块 2：系统审核（100%） */}
            <div className="smart-funnel-node smart-funnel-node-system">
              系统审核（100%）
            </div>

            {/* 系统审核分流连线：左指向【通过 (放行)】45%，右指向【人工审核】55% */}
            <div className="smart-funnel-split">
              <span className="smart-funnel-branch">
                <span className="smart-funnel-arrow-symbol">↙</span>
                <span className="smart-funnel-rate smart-funnel-rate--positive">45%</span>
              </span>
              <span className="smart-funnel-branch">
                <span className="smart-funnel-rate smart-funnel-rate--accent">55%</span>
                <span className="smart-funnel-arrow-symbol">↘</span>
                <span className="smart-funnel-callout smart-funnel-callout--accent">
                  优化点2
                </span>
              </span>
            </div>

            {/* 对齐层：左侧【通过 (放行)】与右侧【人工审核（～55%）】，增宽中间间距，并包含水平向左箭头 ← */}
            <div className="smart-funnel-outcomes">
              {/* 左侧：模块 4：通过 (放行) */}
              <div className="flex flex-col items-center">
                <div className="smart-funnel-node smart-funnel-node-pass">
                  通过
                </div>
              </div>

              {/* 中间：人工审核指向通过放行的水平箭头 ← (标示 52.5%) */}
              <div className="smart-funnel-conversion">
                <span className="smart-funnel-rate smart-funnel-rate--positive">52.5%</span>
                <span className="smart-funnel-arrow-symbol">←</span>
                <span className="smart-funnel-callout smart-funnel-callout--positive">
                  优化点1
                </span>
              </div>

              {/* 右侧列：人工审核（～55%）以及正下方的拦截 (拒绝) */}
              <div className="flex flex-col items-center space-y-3">
                {/* 模块 3：人工审核（～55%） */}
                <div className="smart-funnel-node smart-funnel-node-manual">
                  人工审核
                </div>

                {/* 人工审核向下指向【拦截 (拒绝)】(标示 2.5% 在箭头左侧，且箭头水平居中对齐) */}
                <div className="smart-funnel-reject-route">
                  <span className="smart-funnel-rate smart-funnel-rate--negative">
                    2.5%
                  </span>
                  <span className="smart-funnel-arrow-symbol">↓</span>
                  <span />
                </div>

                {/* 模块 5：拦截 (拒绝) */}
                <div className="smart-funnel-node smart-funnel-node-reject">
                  拦截
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReportPanel>

      {/* 独立模块：单列上下布局（3.3.1 提升系统出单比例 与 3.3.2 升级人工派单模式） */}
      <div className="report-module-list">
        {/* 3.3.1 系统直接出单比例 */}
        <MemberRiskDirectPayout />

        {/* 3.3.2 升级人工派单模式 */}
        <MemberRiskSmartDispatch />
      </div>
    </div>
  );
};
