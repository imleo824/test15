import React from "react";
import { Shuffle } from "lucide-react";
import { ExpectedRhythm, ModuleSubsectionTitle, SummaryBox, highlightNumbers } from "./utils";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ReportPanel, ReportSectionHeader } from "../../ReportSections";

export const AgentRiskControlSection: React.FC = () => {
  const dispatchBefore = [
    "审核关系可[[长期绑定]]",
    "[[手工核算]]，缺少[[机制隔离]]",
    "[[固定关系]]容易形成[[利益空间]]",
  ];

  const dispatchAfter = [
    "系统按[[规则随机派单]]",
    "按[[月轮换]]，减少[[固定接触]]",
    "[[月初系统自动分配前]]，不知道自己本月审谁",
  ];

  return (
    <div id="section-agent-risk-control" className="report-business-section">
      <ReportSectionHeader title="6.3 代理审核" />

      {/* 核心价值、核心目标、整体进度模块 */}
      <ModuleStatusCard
        coreValue="建立[[随机派单]]审核体系，彻底切断人为固定审核关系，优化[[内部作弊隐患]]"
        metricsList={[
          { label: "随机派单执行率", current: "0%", target: "100%" },
        ]}
        progress="50%"
        estimatedTime="世界杯后完成"
      />

      {/* 核心前置流程图与维度架构 */}
      <div className="report-module-list">
        
        {/* 系统自动派单 */}
        <ReportPanel
          id="section-agent-dispatch"
          tone="soft"
          padding="sm"
          className="report-module-stack"
        >
          <div className="report-module-main">
            <div className="report-module-intro">
              <ModuleSubsectionTitle
                title={<><Shuffle className="w-5 h-5 text-slate-900 shrink-0" /><span>系统随机派单</span></>}
              />

              <SummaryBox>
                {highlightNumbers(
                  "改由系统按月[[随机指派]]审核任务，彻底切断人为可控的固定审核关系，从根源上压缩[[内外勾结空间]]。"
                )}
              </SummaryBox>

              <div className="agent-dispatch-model">
                <div className="agent-dispatch-panel">
                  <div className="agent-dispatch-panel-head">
                    <span className="agent-dispatch-panel-badge">{highlightNumbers("原模式")}</span>
                    <strong>{highlightNumbers("[[线下指定分配]]")}</strong>
                  </div>
                  <div className="agent-dispatch-list">
                    {dispatchBefore.map((item) => (
                      <div key={item} className="agent-dispatch-list-item flex items-start gap-2 justify-end text-right">
                        <span className="flex-1 text-right">{highlightNumbers(item)}</span>
                        <i className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 inline-block not-italic mt-1.5" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="agent-dispatch-core">
                  <span>{highlightNumbers("[[系统隔离]]")}</span>
                  <strong>{highlightNumbers("[[随机派单]]")}</strong>
                  <i>{highlightNumbers("[[月度轮换]]")}</i>
                </div>

                <div className="agent-dispatch-panel agent-dispatch-panel-strong">
                  <div className="agent-dispatch-panel-head">
                    <span className="agent-dispatch-panel-badge">{highlightNumbers("新模式")}</span>
                    <strong>{highlightNumbers("[[系统随机派单]]")}</strong>
                  </div>
                  <div className="agent-dispatch-list">
                    {dispatchAfter.map((item) => (
                      <div key={item} className="agent-dispatch-list-item flex items-start gap-2 justify-start text-left">
                        <i className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 inline-block not-italic mt-1.5" />
                        <span className="flex-1 text-left">{highlightNumbers(item)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 系统随机派单 预期节奏 */}
            <div className="report-module-footer">
              <ExpectedRhythm
                items={[
                  { month: "待排期", tagColor: "amber", title: "系统随机派单", submitTime: "2026-05-19", status: "待排期" },
                ]}
              />
            </div>
          </div>
        </ReportPanel>

      </div>
    </div>
  );
};
