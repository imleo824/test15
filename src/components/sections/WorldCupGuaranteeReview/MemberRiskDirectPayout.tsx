import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader, ModuleSubsectionTitle, SummaryBox, highlightNumbers } from "./utils";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { ReportBadge, ReportPanel } from "../../ReportSections";

export const MemberRiskDirectPayout: React.FC = () => {
  return (
    <ReportPanel id="section-member-direct-payout" tone="soft" padding="sm" className="report-module-stack">
      {/* 头部标题：3.3.1 提升系统出单 */}
      <div className="report-module-intro">
        <ModuleBlockHeader
          title={<><Gauge className="w-5 h-5 text-slate-900 shrink-0" /><span>3.3.1 提升系统出单</span></>}
          right={<ReportBadge>风险分数驱动</ReportBadge>}
        />

        <SummaryBox>
          {highlightNumbers(
            "摒弃命中[[单一特征即转人工]]的粗放模式，升级为基于多维特征实时计算[[综合风险分]]。[[高危订单]]精准分发人工，极低风险订单实现[[系统直接放行]]。"
          )}
        </SummaryBox>
      </div>

      {/* 核心思路 / 升级前后对比参照系统随机派单结构 */}
      <div className="report-module-body">
        <BeforeAfter
          beforeTitle="原来模式"
          beforeSubtitle="[[传统特征判决]]"
          before="命中任意 [[1 个]] 策略特征都[[转人工]]"
          beforeRelation="[[盲目转人工]]，挤占[[常规审核资源]]"
          coreSpan="[[算法升级]]"
          coreStrong="[[风险打分]]"
          coreI="[[精准过滤]]"
          afterTitle="升级模式"
          afterSubtitle="[[风险分数驱动]]"
          after="[[风险分数]] > [[XX]] 才会转人工"
          afterRelation="[[高风险转人工]]，[[极低风险单直出]]"
        />

        {/* 风险分数驱动流程 */}
        <div className="report-module-subsection">
          <ModuleSubsectionTitle
            title={
              <div className="flex items-center gap-2">
                <Gauge className="w-4.5 h-4.5 text-slate-900 shrink-0" />
                <span>风险分数模式</span>
                <ReportBadge tone="blue" className="text-xs scale-90 origin-left">已上线</ReportBadge>
              </div>
            }
          />

          <div className="report-module-surface direct-payout-flow-panel">
          <div className="direct-payout-flow-grid">
          {/* Step 1 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span className="report-sequence-badge">1</span>
              <strong>参数设定</strong>
            </div>
            <div className="direct-payout-step-list">
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>每个策略分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>每个标签分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>转派人工分数</div>
            </div>
            <div className="direct-payout-step-badge">按VIP等级不同设置</div>
          </div>

          <div className="direct-payout-arrow">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>

          {/* Step 2 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span className="report-sequence-badge">2</span>
              <strong>分数计算</strong>
            </div>
            <div className="direct-payout-step-content">
              基于命中策略、标签等实时计算分数
            </div>
            <div className="direct-payout-step-badge">提款发起系统实时计算</div>
          </div>

          <div className="direct-payout-arrow">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>

          {/* Step 3 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span className="report-sequence-badge">3</span>
              <strong>系统审核</strong>
            </div>
            <div className="direct-payout-rule-stack">
              <div>
                <span className="font-bold text-slate-900">大于分值</span>
                <span className="direct-payout-route direct-payout-route--manual">转人工 <ArrowRight className="w-3 h-3" strokeWidth={3} /></span>
              </div>
              <div>
                <span className="font-bold text-slate-900">低于分值</span>
                <span className="direct-payout-route direct-payout-route--system">系统出 <ArrowRight className="w-3 h-3" strokeWidth={3} /></span>
              </div>
            </div>
            <div className="direct-payout-step-badge">系统设定风险分数参数</div>
          </div>
          </div>
          </div>
        </div>

        {/* 风险分数案例：沿用规则案例的说明与系统示例结构 */}
        <div className="report-case-frame">
          <div className="report-case-head">
            <span className="report-case-badge">
              <Zap className="w-3.5 h-3.5 shrink-0" />
              风险分数案例
            </span>
            <span className="report-case-title">【风险分数模式】</span>
          </div>

          <div className="report-case-copy">
            <div>
              <span>实现机制：</span>
              {highlightNumbers("系统基于命中策略、会员标签等实时计算[[风险分数]]。风险分数达到设定参数后，系统自动转入[[人工审核]]。")}
            </div>
            <div>
              <span>效果说明：</span>
              {highlightNumbers(
                "系统示例中，系统计算该订单风险分数为 [[150分]]，并直接[[高亮醒目]]出来。如果参数是[[50分]]，那么就会[[转给人工]]；如果参数是[[200分]]，那么就会[[系统直出]]。",
              )}
            </div>
          </div>

          <div className="report-case-example">
            <div className="report-case-example-label">
              <span></span>
              系统示例：
            </div>
            <div className="system-example-table-frame">
              <table className="report-standard-table system-example-table system-example-table--risk-score">
                <thead>
                  <tr>
                    <th>会员账号</th>
                    <th>会员等级</th>
                    <th>上级代理</th>
                    <th>提款金额</th>
                    <th>申请时间</th>
                    <th>真实姓名</th>
                    <th>收款信息</th>
                    <th>设备存款金额</th>
                    <th>会员标签</th>
                    <th>风险分数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="report-example-masked">risk_user150</span></td>
                    <td><span className="report-example-masked">VIP3</span></td>
                    <td><span className="report-example-masked">agent_risk</span></td>
                    <td><span className="report-example-masked">¥ 18,500.00</span></td>
                    <td><span className="report-example-masked">2026-07-31 10:44:58</span></td>
                    <td><span className="report-example-masked">张三风</span></td>
                    <td><span className="report-example-masked">招商银行 (6225****6789)</span></td>
                    <td><span className="report-example-masked">¥ 3,000.00</span></td>
                    <td><span className="report-example-masked">高风险标签</span></td>
                    <td><span className="direct-payout-risk-score">150分</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="report-module-footer">
        <ExpectedRhythm
          items={[
            { month: "8月", desc: "A系 2个站点" },
            { month: "9月", desc: "A系 8个站点" },
            { month: "10月", desc: "A系 全部站点" },
            { month: "11月", desc: "B系 全部站点" },
            { month: "12月", desc: "全量平稳运行" },
          ]}
        />
      </div>
    </ReportPanel>
  );
};
