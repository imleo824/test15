import React from "react";
import { AlertTriangle, Calculator, Shuffle } from "lucide-react";
import { ExpectedRhythm, ModuleSubsectionTitle, SummaryBox, highlightNumbers } from "./utils";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ChapterTitle, ReportPanel, ReportTableFrame } from "../../ReportSections";

export const AgentRiskControlSection: React.FC = () => {
  const yjTableData = [
    {
      metric: "有效新增",
      original: "8",
      sysFix: "4",
      manualCalc: "5",
    },
    {
      metric: "有效活跃",
      original: "12",
      sysFix: "4",
      manualCalc: "5",
    },
    {
      metric: "盈利",
      original: "50,000",
      sysFix: "12,000",
      manualCalc: "12,000",
    },
    {
      metric: "佣金",
      original: "17,500",
      sysFix: "1,800",
      manualCalc: "2,100",
    },
  ];

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

  const warningSteps = [
    { label: "人工录入", value: "45%", tone: "normal" },
    { label: "系统标准", value: "35%", tone: "normal" },
    { label: "对比偏差", value: "+10%", tone: "risk" },
    { label: "触发预警", value: "超过参数阈值", tone: "risk" },
  ];

  return (
    <div id="section-agent-risk-control" className="report-business-section">
      <ChapterTitle>3.5 代理审核</ChapterTitle>

      {/* 核心价值、核心目标、整体进度模块 */}
      <ModuleStatusCard
        coreValue="建立[[自动核算]]与[[随机派单]]审核体系，系统[[自动对账]]与[[异常预警]]，优化[[内部作弊隐患]]"
        metricsList={[
          { label: "系统核算准确率", current: "0%", target: "50%" },
        ]}
        progress="50%"
        estimatedTime="世界杯后完成"
      />

      {/* 核心前置流程图与两大维度架构：1行2列直接铺开 */}
      <div className="report-module-list">
        
        {/* 第一列：3.5.2.1 系统自动派单 */}
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
                  "改由系统按月[[随机指派]]审核任务，彻底切断人为可控的固定审核关系，从根源上压缩[[内外勾结空间]]，"
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

        {/* 第二列：3.5.2.2 系统自动计算佣金 */}
        <ReportPanel
          id="section-agent-yj-calc"
          tone="soft"
          padding="sm"
          className="report-module-stack"
        >
          <div className="report-module-main">
            <div className="report-module-intro">
              <ModuleSubsectionTitle
                title={<><Calculator className="w-5 h-5 text-slate-900 shrink-0" /><span>系统自动计算</span></>}
              />

              <SummaryBox>
                {highlightNumbers(
                  "系统基于盈利贡献、客群质量等模型自动生成。当人工核算偏差超过 [[x%]] 时自动触发[[风险预警]]，最大程度减少人为操纵。"
                )}
              </SummaryBox>

              <ReportTableFrame>
                <table className="report-dense-table">
                  <thead className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <tr>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-left font-black">核算指标</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">原始数据</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">系统修正</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">人工核算</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums">
                    {yjTableData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-left">{row.metric}</td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center">
                          {row.metric === "净盈利" || row.metric === "应发佣金" ? (
                            <span className="line-through">{row.original}</span>
                          ) : (
                            row.original
                          )}
                        </td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center text-blue-900 font-black">{row.sysFix}</td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center">{row.manualCalc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ReportTableFrame>

              <div className="agent-warning-demo report-module-subsection">
                <ModuleSubsectionTitle
                  title={
                    <>
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>审核预警</span>
                    </>
                  }
                  right={
                    <span className="text-xs text-slate-900 bg-slate-100 px-2 py-0.5 rounded font-bold">
                      预警规则：偏差 &gt; x% 触发
                    </span>
                  }
                />

                <div className="p-3 bg-slate-50/50 border border-slate-200/90 rounded-xl">
                  <div className="grid grid-cols-3 gap-2.5 items-center text-center">
                    {/* 左侧：人工录入 */}
                    <div className="bg-white border border-slate-200/90 rounded-lg p-3 space-y-1">
                      <div className="text-xs font-bold text-slate-900">人工录入</div>
                      <div className="text-xl md:text-2xl font-black text-slate-900 font-mono">45%</div>
                    </div>

                    {/* 中间：对比差值 */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-1">
                      <div className="text-xs font-bold text-slate-900">对比差值</div>
                      <div className="text-xl md:text-2xl font-black text-rose-900 font-mono">+10%</div>
                      <div className="text-xs font-black text-slate-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded inline-block">
                        触发预警
                      </div>
                    </div>

                    {/* 右侧：系统标准 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 space-y-1">
                      <div className="text-xs font-bold text-blue-900">系统标准</div>
                      <div className="text-xl md:text-2xl font-black text-blue-900 font-mono">35%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 系统计算佣金 预期节奏 */}
            <div className="report-module-footer">
              <ExpectedRhythm
                items={[
                  { month: "第一阶段已上线", tagColor: "emerald", title: "云盾分数", submitTime: "2025-10-22", status: "解决bug中" },
                  { month: "第一阶段已上线", tagColor: "emerald", title: "云盾审核", submitTime: "2025-12-28", status: "解决bug中" },
                ]}
              />
            </div>
          </div>
        </ReportPanel>

      </div>
    </div>
  );
};
