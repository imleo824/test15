import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { Scale, User, ShieldAlert, CheckCircle, RotateCcw, ArrowRight, ArrowLeft, Target, Workflow, Zap } from "lucide-react";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { SystemAuditMetricsChart } from "./SystemAuditMetricsChart";
import { ChapterTitle, ReportBadge, ReportPanel, ReportPanelHeader, ReportTableFrame } from "../../ReportSections";

export const SystemAuditSection: React.FC = () => {
  const metricDerivationGroups = [
    {
      stage: "业务现状",
      className: "",
      stageClassName: "bg-slate-50",
      rows: [
        {
          metric: "总订单量",
          meaning: "订单规模",
          calculation: "已知：2,200,000单/月",
          conclusion: "测算基数",
        },
        {
          metric: "实际问题订单",
          meaning: "每月实际存在问题的订单",
          calculation: "已知：42,000单/月",
          conclusion: "召回基数",
        },
        {
          metric: "系统错误率基准",
          meaning: "系统放行的问题订单占系统审核量的比例",
          calculation: "沿用当前人工审核错误率：0.7%",
          conclusion: "系统错误率不高于0.7%", 
          tone: "risk", 
          isKeyMetric: true,
        },
      ],
    },
    {
      stage: "审核比例",
      className: "",
      stageClassName: "bg-slate-50",
      rows: [
        {
          metric: "系统审核率",
          meaning: "系统处理的订单占比，代表效率目标",
          calculation: "目标设定：80%",
          conclusion: "系统审核率80%",
        },
        {
          metric: "人工审核率",
          meaning: "人工处理的订单占比，代表人工容量约束",
          calculation: "目标设定：20%",
          conclusion: "人工审核率20%",
        },
        {
          metric: "系统审核量",
          meaning: "系统每月处理规模",
          calculation: "2,200,000 × 80% = 1,760,000",
          conclusion: "1,760,000单/月",
        },
        {
          metric: "人工审核量",
          meaning: "人工每月处理规模",
          calculation: "2,200,000 × 20% = 440,000",
          conclusion: "440,000单/月",
        },
      ],
    },
    {
      stage: "召回要求",
      className: "",
      stageClassName: "bg-slate-50",
      rows: [
        {
          metric: "至少识别问题订单",
          meaning: "必须识别并转人工的问题订单",
          calculation: "42,000 - 12,320 = 29,680（上限 12,320 = 1,760,000 × 0.7%）",
          conclusion: "不少于29,680单/月",
        },
        {
          metric: "问题召回率",
          meaning: "识别并转人工的问题订单占全部问题订单的比例",
          calculation: "29,680 ÷ 42,000 = 70.6%",
          conclusion: "不低于70.6%",
          isKeyMetric: true,
        },
      ],
    },
    {
      stage: "准确要求",
      className: "",
      stageClassName: "bg-slate-50",
      rows: [
        {
          metric: "问题命中率",
          meaning: "人工审核池中实际问题订单占比",
          calculation: "29,680 ÷ 440,000 = 6.75%",
          conclusion: "不低于6.75%", 
          isKeyMetric: true,
        },
      ],
    },
  ];

  return (
    <div id="section-system-audit" className="report-business-section">
      {/* 3.2 系统审核 模块主标题 */}
      <ChapterTitle>3.2 系统审核</ChapterTitle>

      {/* 3.2 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="持续将[[风险特征系统化]]，持续迭代调优，提升系统出单率，以实现质量和效率的平衡"
        metricsList={[
          { label: "系统审核率", current: "45%", target: "80%" },
          { label: "人工审核率", current: "55%", target: "20%" },
        ]}
        progress="45%"
        estimatedTime="持续进行"
      />

      <ReportPanel className="report-panel-stack">
        <ReportPanelHeader
          title="3.2.1 系统评估指标"
          icon={<Target className="h-5 w-5" />}
        />

        <SummaryBox className="flex flex-col gap-3">
          <div>
            {highlightNumbers(
              "[[问题召回率]]是质量底线，决定系统不能漏掉太多问题订单；[[问题命中率]]是结果指标，反映人工审核池中实际有问题订单占比。只有问题召回率[[不低于70.6%]]，问题命中率的提升才有业务价值。"
            )}
          </div>

          {/* 指标制约关系可视化说明 */}
          <div className="system-audit-balance-explainer mt-1 p-4 bg-slate-50/80 rounded-xl border border-slate-200/60 text-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">💡</span>
              <span className="font-black text-sm text-slate-900">指标制约关系与“天平效应”简析</span>
            </div>
            
            <p className="text-sm leading-relaxed font-bold">
              {highlightNumbers("在实际运行中，[[问题召回率]]与[[问题命中率]]通常[[相互制约、呈反比关系]]：这是风控策略面临的最大挑战。提升一端导致另一端下降，因此需要寻找科学的平衡点。")}
            </p>

            {/* 极端对比展示 */}
            <div className="system-audit-balance-grid">
              {/* 极端情况 A */}
              <div className="system-audit-balance-card system-audit-balance-card--side">
                <div>
                  <div className="system-audit-balance-title">
                    <span></span>
                    <span>极端 A（极度宽松）</span>
                  </div>
                  <p>
                    若将所有订单全部转入人工审核，确保毫无漏网：
                  </p>
                </div>
                <div className="system-audit-balance-metrics">
                  <span className="report-evaluation-line">{highlightNumbers("✓ 问题召回率：[[100%]]")}</span>
                  <span className="report-evaluation-line">{highlightNumbers("✗ 问题命中率：[[极低]] (包含海量正常单)")}</span>
                </div>
              </div>

              {/* 科学平衡点 */}
              <div className="system-audit-balance-card system-audit-balance-card--target">
                <div className="system-audit-balance-tag">
                  最佳平衡
                </div>
                <div>
                  <div className="system-audit-balance-title">
                    <span></span>
                    <span>双向协同（目标状态）</span>
                  </div>
                  <p>
                    通过合理规则阈值，在不过度消耗人效的前提下拦截绝大部分风险：
                  </p>
                </div>
                <div className="system-audit-balance-metrics">
                  <span>{highlightNumbers("✓ 召回底线：[[≥ 70.6%]]")}</span>
                  <span>{highlightNumbers("✓ 命中率：[[匹配最优人效]]")}</span>
                </div>
              </div>

              {/* 极端情况 B */}
              <div className="system-audit-balance-card system-audit-balance-card--side">
                <div>
                  <div className="system-audit-balance-title">
                    <span></span>
                    <span>极端 B（极度严苛）</span>
                  </div>
                  <p>
                    只让具有百分百确定作弊特征的订单进入人工：
                  </p>
                </div>
                <div className="system-audit-balance-metrics">
                  <span className="report-evaluation-line">{highlightNumbers("✗ 问题召回率：[[极低]] (部分有问题订单被系统出)")}</span>
                  <span className="report-evaluation-line">{highlightNumbers("✓ 问题命中率：[[100%]] (转到人工的都是有问题的)")}</span>
                </div>
              </div>
            </div>
          </div>

        </SummaryBox>

        <div className="mt-6 space-y-3">
          {/* 目标推演背景备注 */}
          <div className="text-sm font-bold text-slate-800 bg-blue-50/40 px-4 py-3 rounded-xl border border-blue-100/60 flex items-start gap-2.5 shadow-xs">
            <span className="text-blue-600 shrink-0 font-black flex items-center gap-1">
              <span>📌</span> 备注：
            </span>
            <span className="leading-relaxed">
              {highlightNumbers("以下为基于当前业务体量（[[220w 单/月]]，人工错误率 [[0.7%]]，有问题订单 [[4.2w 单/月]]）设定的目标推演过程，旨在阐述系统指标设定的底层业务逻辑。")}
            </span>
          </div>

          <ReportTableFrame>
            <table className="report-dense-table report-metric-derivation-table">
              <colgroup>
                <col className="report-metric-stage-col" />
                <col className="report-metric-name-col" />
                <col className="report-metric-meaning-col" />
                <col className="report-metric-calculation-col" />
                <col className="report-metric-conclusion-col" />
              </colgroup>
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>指标</th>
                  <th>含义</th>
                  <th>计算过程</th>
                  <th>结论/口径</th>
                </tr>
              </thead>
              <tbody>
                {metricDerivationGroups.map((group) =>
                  group.rows.map((row, index) => {
                    const rowKey = `${group.stage}-${row.metric}`;
                    const isKeyMetric = (row as any).isKeyMetric;
                    const isRisk = row.tone === "risk";
                    
                    return (
                      <tr 
                        key={rowKey} 
                        className={`transition-colors ${
                          isKeyMetric 
                            ? (isRisk ? "report-metric-key-row report-metric-key-row--risk" : "report-metric-key-row") 
                            : "bg-transparent border-b border-slate-100"
                        }`}
                      >
                        {index === 0 && (
                          <td rowSpan={group.rows.length} className={`font-black text-slate-900 text-center border-r border-slate-200 ${group.stageClassName}`}>
                            {group.stage}
                          </td>
                        )}
                        <td className={`font-black report-metric-name ${isKeyMetric ? `report-metric-key-cell ${isRisk ? "report-metric-key-cell--risk" : "text-blue-900"}` : "text-slate-900"}`}>
                          {row.metric}
                        </td>
                        <td className={`font-bold report-metric-meaning ${isKeyMetric ? "report-metric-key-cell text-slate-900" : "text-slate-900"}`}>
                          {row.meaning}
                        </td>
                        <td className={`font-black font-mono report-metric-calculation ${isKeyMetric ? "report-metric-key-cell text-slate-900" : "text-slate-900"}`}>
                          {row.calculation}
                        </td>
                        <td className={`font-black ${isKeyMetric ? "report-metric-key-cell" : ""}`}>
                          {isKeyMetric ? (
                            <span className={`report-metric-conclusion ${
                              isRisk 
                                ? "report-metric-conclusion--risk"
                                : ""
                            }`}>
                              {row.conclusion}
                            </span>
                          ) : (
                            <span className="text-blue-900">
                              {row.conclusion}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </ReportTableFrame>
        </div>
      </ReportPanel>

      {/* 系统指标柱状图 */}
      <SystemAuditMetricsChart />

      {/* 系统风控策略核心流程 */}
      <ReportPanel className="system-audit-flow-panel report-panel-stack">
        <ReportPanelHeader
          icon={<Workflow className="h-5 w-5" />}
          title="3.2.2 系统审核流程"
          rightContent={<ReportBadge>全链路闭环</ReportBadge>}
        />
        <SummaryBox>
          <div className="space-y-3">
            <div>
              {highlightNumbers("形成完整的[[拦截-复核-反馈]]闭环：系统通过丰富风险特征让问题订单识别更全，并调整策略阈值减少低风险订单进入人工；人工复核拦截异常后，将审核结果[[回填系统]]修正规则，[[持续迭代优化拦截模型]]，以提升[[召回率]]和[[命中率]]。")}
            </div>
            <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 text-sm text-slate-600 font-bold flex items-start gap-2">
              <span className="inline-block px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-black shrink-0 mt-0.5">备注</span>
              <p className="leading-relaxed">
                {highlightNumbers("风控策略强依赖[[数据维度及处理时效]]，目前[[跨站数据]]涉及加密、性能、时效等问题，需持续优化和攻克。")}
              </p>
            </div>
          </div>
        </SummaryBox>

        {/* 流程图主容器 */}
        <div className="system-audit-flow-grid">
          
          {/* 1. 提款申请节点 */}
          <div className="system-audit-flow-node">
            <div className="system-audit-flow-terminal">
              <User className="w-4 h-4 text-white shrink-0" />
              <span>用户申请</span>
            </div>
          </div>

          {/* 连接箭头：提款申请 -> 系统审核 */}
          <div className="system-audit-flow-arrow">
            <ArrowRight className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
          </div>

          {/* 2. 策略矩阵校验 */}
          <div className="system-audit-flow-main">
            <div className="system-audit-flow-main-title">
              <Scale className="w-4 h-4 text-white" />
              系统审核
            </div>

            {/* 步骤一、二、三 横向三列排布 */}
            <div className="system-audit-step-grid">
              
              {/* 步骤一：策略矩阵校验 */}
              <div className="system-audit-step-card">
                <div className="system-audit-step-title">
                  <span className="report-sequence-badge">1</span>
                  <span>策略矩阵校验</span>
                </div>
                
                <div className="system-audit-rule-stack">
                  {/* 防御型规则 */}
                  <div className="system-audit-rule-box">
                    <div className="system-audit-rule-head">
                      <span>防御型规则</span>
                      <span>29个</span>
                    </div>
                    <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                      <div>
                        <span className="font-black text-slate-900">异常行为 (17个)：</span>
                        模拟器、快进快出、钱包负数、高盈利、倍数异常、短时大额、首提等
                      </div>
                      <div>
                        <span className="font-black text-slate-900">账户安全 (4个)：</span>
                        新设备、睡眠账号、资料变更后、新绑账户等
                      </div>
                      <div>
                        <span className="font-black text-slate-900">状态关联 (8个)：</span>
                        高危标签、关联账号、白名单、特殊上标、转账失败、二次结算、租卖号
                      </div>
                    </div>
                  </div>

                  {/* 套利型规则 */}
                  <div className="system-audit-rule-box">
                    <div className="system-audit-rule-head">
                      <span>作弊型规则</span>
                      <span>10个</span>
                    </div>
                    <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                      <div>
                        <span className="font-black text-slate-900">对冲 (2个)：</span>
                        棋牌全包、操盘全包
                      </div>
                      <div>
                        <span className="font-black text-slate-900">活动 (4个)：</span>
                        命中多个特征、特邀、超额、高占比
                      </div>
                      <div>
                        <span className="font-black text-slate-900">游戏 (4个)：</span>
                        低赔率占比高、电子卡免费、命中多个特征
                      </div>
                    </div>
                  </div>

                  {/* B端风控接口 */}
                  <div className="system-audit-rule-box">
                    <div className="system-audit-rule-head">
                      <span>B端协同</span>
                      <span>3个</span>
                    </div>
                    <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                      <div>
                        <span className="font-black text-slate-900">接口：</span>
                        体育、真人、电子的风控的接口实时对接；（彩票：待开发）
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 步骤二：计算风险分数 */}
              <div className="system-audit-step-card">
                <div className="system-audit-step-title">
                  <span className="report-sequence-badge">2</span>
                  <span>计算风险分数</span>
                </div>

                <div className="system-audit-score-box">
                  <div className="system-audit-score-title">
                    <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>特征汇总计算分数</span>
                  </div>
                  <p>
                    {highlightNumbers("系统汇总[[步骤一]]命中的[[策略规则特征]]，综合计算[[风险分值]]。")}
                  </p>
                  <div className="system-audit-decision-judge" aria-label="分值与参数判定">
                    <div className="system-audit-decision-diamond">
                      <div>
                        <span>分值 &gt; 参数</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 步骤三：系统输出决策 */}
              <div className="system-audit-step-card">
                <div className="system-audit-step-title">
                  <span className="report-sequence-badge">3</span>
                  <span>系统输出决策</span>
                </div>

                <div className="system-audit-decision-stack system-audit-decision-stack--mapped">
                  <div className="system-audit-decision-title">
                    <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>基于分数进行判断</span>
                  </div>
                  <p className="system-audit-decision-description">
                    {highlightNumbers("针对不同的[[VIP等级]]会有不同的[[参数]]来决定是[[直接放行]]还是[[转给人工]]")}
                  </p>

                  <div className="system-audit-decision-results">
                    {/* 直接出单放行 */}
                    <div className="system-audit-decision-box system-audit-decision-box--safe">
                      <div>
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>直接出单放行</span>
                      </div>
                      <p>
                        低于参数由系统放行
                      </p>
                    </div>

                    {/* 转入人工审核 */}
                    <div className="system-audit-decision-box system-audit-decision-box--risk">
                      <div>
                        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>转入人工审核</span>
                      </div>
                      <p>
                        高于参数由系统转人
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 反向连接箭头：评估反馈 -> 系统审核 */}
          <div className="system-audit-flow-arrow">
            <ArrowLeft className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
          </div>

          {/* 3. 评估反馈 */}
          <div className="system-audit-feedback">
            <div className="system-audit-flow-terminal">
              <RotateCcw className="w-4 h-4 text-white shrink-0" />
              <span>评估反馈</span>
            </div>
            
            {/* 效果归因回溯 */}
              <div className="system-audit-feedback-box">
                <div className="system-audit-feedback-head">
                  <span>效果归因回溯</span>
                </div>
              <div className="system-audit-feedback-list">
                <div>
                  <div><span className="report-sequence-badge">1</span>问题召回率回溯</div>
                  <p>
                    还原漏网提单特征，持续提升攻击拦截率与覆盖。
                  </p>
                </div>
                <div>
                  <div><span className="report-sequence-badge">2</span>问题命中率回溯</div>
                  <p>
                    精细化阈值参数调优，最大程度减少正常用户的拦截。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 策略特征拦截实战案例：防御型规则【[内控] 场馆转账失败退回】 */}
        <div className="mt-6 border-t border-slate-200/80 pt-5">
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-3 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="report-case-badge">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  防御型规则案例
                </span>
                <span className="text-base font-black text-slate-900 tracking-tight">
                  【[内控] 场馆转账失败退回】
                </span>
              </div>
            </div>

            <div className="text-base font-bold text-slate-800 leading-relaxed bg-white border border-slate-200/80 rounded-lg p-4 space-y-3">
              <div>
                <span className="font-bold text-slate-900 block mb-1">实现机制：</span>
                {highlightNumbers("C端设有系统拦截策略[[【[内控] 场馆转账失败退回】]]，可[[拦截]]这种转账失败导致的多钱问题。系统[[不会直接出款]]，所有请求将转入[[人工审核]]。")}
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">效果说明：</span>
                {highlightNumbers("以[[7月31日]]，B端[[场馆多钱]]为例，全部实现[[自动拦截]]，拦截全部用户 [[381人]]，系统拦截 [[2,515,285]]。")}
              </div>
            </div>

            {/* 系统审核记录列表仿真还原 */}
            <div className="mt-3">
              <div className="text-sm font-black text-slate-800 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  系统示例：
                </span>
              </div>

              <div className="system-example-table-frame border border-slate-200 rounded-lg shadow-2xs bg-white">
                <table className="report-standard-table system-example-table">
                  <thead>
                    <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-black text-slate-700">
                      <th className="py-2.5 px-3">会员账号</th>
                      <th className="py-2.5 px-3">会员等级</th>
                      <th className="py-2.5 px-3">上级代理</th>
                      <th className="py-2.5 px-3">提款金额</th>
                      <th className="py-2.5 px-3">申请时间</th>
                      <th className="py-2.5 px-3">真实姓名</th>
                      <th className="py-2.5 px-3">收款信息</th>
                      <th className="py-2.5 px-3">设备存款金额</th>
                      <th className="py-2.5 px-3">风险分数</th>
                      <th className="py-2.5 px-3">会员标签</th>
                      <th className="py-2.5 px-3">系统审核结果</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-xs">
                    <tr className="bg-amber-50/30 hover:bg-amber-50/60 transition-colors">
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-bold">herb8899</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">VIP3</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">agent_top</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-black">¥ 18,500.00</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">2026-07-31 10:44:58</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">张三风</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">招商银行 (6225****6789)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">¥ 3,000.00</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-bold">88.5</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">大额提款标签</span>
                      </td>
                      {/* 只有系统审核结果一列完整清晰保留 */}
                      <td className="py-2.5 px-3 font-sans bg-amber-100/50">
                        <div className="flex items-center gap-1.5">                       
                          <span className="system-example-result-chip">
                            [内控] 场馆转账失败退回
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 策略特征拦截实战案例：作弊型规则【[彩票] 全包】 */}
        <div className="mt-4 border-t border-slate-200/80 pt-5">
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-3 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="report-case-badge">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  作弊型规则案例
                </span>
                <span className="text-base font-black text-slate-900 tracking-tight">
                  【[彩票] 全包】
                </span>
              </div>
          
            </div>

            <div className="text-base font-bold text-slate-800 leading-relaxed bg-white border border-slate-200/80 rounded-lg p-4 space-y-3">
              <div>
                <span className="font-bold text-slate-900 block mb-1">实现机制：</span>
                {highlightNumbers("针对彩票最常见的[[全包]]行为，系统设有自动识别与拦截策略[[【[彩票] 全包】]]。命中规则后系统[[自动拒绝直接出款]]，统一转入[[风控人工审核]]。")}
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">效果说明：</span>
                {highlightNumbers("对彩票全包等行为，问题召回率为 [[84%]]，系统拦截 [[近 70w/月]]。")}
              </div>
            </div>

            {/* 系统审核记录列表仿真还原 */}
            <div className="mt-3">
              <div className="text-sm font-black text-slate-800 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  系统示例：
                </span>
              </div>

              <div className="system-example-table-frame border border-slate-200 rounded-lg shadow-2xs bg-white">
                <table className="report-standard-table system-example-table">
                  <thead>
                    <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-black text-slate-700">
                      <th className="py-2.5 px-3">会员账号</th>
                      <th className="py-2.5 px-3">会员等级</th>
                      <th className="py-2.5 px-3">上级代理</th>
                      <th className="py-2.5 px-3">提款金额</th>
                      <th className="py-2.5 px-3">申请时间</th>
                      <th className="py-2.5 px-3">真实姓名</th>
                      <th className="py-2.5 px-3">收款信息</th>
                      <th className="py-2.5 px-3">设备存款金额</th>
                      <th className="py-2.5 px-3">风险分数</th>
                      <th className="py-2.5 px-3">会员标签</th>
                      <th className="py-2.5 px-3">系统审核结果</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-xs">
                    <tr className="bg-amber-50/30 hover:bg-amber-50/60 transition-colors">
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-bold">lottery_user99</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">VIP2</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">agent_cai</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-black">¥ 52,000.00</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">2026-07-31 11:12:05</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">李四海</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">建设银行 (6217****1234)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">¥ 10,000.00</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700 font-bold">94.2</span>
                      </td>
                      <td className="py-2.5 px-3 font-sans">
                        <span className="blur-[3.5px] opacity-40 select-none text-slate-700">彩票频繁提款</span>
                      </td>
                      {/* 只有系统审核结果一列完整清晰保留 */}
                      <td className="py-2.5 px-3 font-sans bg-amber-100/50">
                        <div className="flex items-center gap-1.5">                       
                          <span className="system-example-result-chip">
                            [彩票] 全包
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </ReportPanel>
    </div>
  );
};
