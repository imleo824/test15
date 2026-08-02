import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader, ModuleSubsectionTitle, SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportPanel } from "../../ReportSections";
import { Route, CheckCircle2, Zap } from "lucide-react";

const dispatchDecisionScenarios = [
  {
    number: "1",
    title: "体育优先",
    order: "体育类型订单",
    people: "审核员 A (擅长体育) | 审核员 B (擅长真人)",
    decision: "指派 A 审核",
    reason: "专业对口，提升审核效率。",
  },
  {
    number: "2",
    title: "高绩效优先",
    order: "常规提款订单",
    people: "审核员 A (历史绩效高) | 审核员 B (绩效普通)",
    decision: "指派 A 审核",
    reason: "优先高绩效人员处理，提高质量。",
  },
  {
    number: "3",
    title: "分组权限控制",
    order: "大额或高风险订单",
    people: "审核员 A (资深组权限) | 审核员 B (限低风险低金额)",
    decision: "指派 A 审核",
    reason: "只分给高权限人员，提升质量。",
  },
];

export const MemberRiskSmartDispatch: React.FC = () => {
  return (
    <ReportPanel id="section-member-smart-dispatch" tone="soft" padding="sm" className="report-module-stack">
      {/* 头部标题：3.3.2 升级派单模式 */}
      <div className="report-module-intro">
        <ModuleBlockHeader
          title={<><Route className="w-5 h-5 text-slate-900 shrink-0" /><span>3.3.2 升级派单模式</span></>}
          right={<ReportBadge>人与单精准匹配</ReportBadge>}
        />
      </div>

      {/* 核心思路 / 升级前后对比 */}
      <div className="report-module-body">
        <BeforeAfter
          beforeTitle="原来模式"
          beforeSubtitle="[[轮询均分]]"
          before="每个人被分配的订单数量[[几乎一样]]"
          beforeRelation="按单量[[机械均分]]"
          coreSpan="[[算法升级]]"
          coreStrong="[[人单匹配]]"
          coreI="[[最优派单]]"
          afterTitle="升级模式"
          afterSubtitle="[[人单精准匹配]]"
          after="这一刻，[[这一单给谁是最优解]]"
          afterRelation="按[[人单特征]][[动态加权优化]]"
        />

        {/* 智能派单逻辑与分配机制（整合为一个模块） */}
        <div className="report-module-subsection">
          <div className="report-module-surface report-module-body">

        {/* 1. 核心路由逻辑图解 */}
        <div className="report-module-subsection">
          <ModuleSubsectionTitle 
            title={
              <div className="flex items-center gap-2">
                <span>双向特征路由匹配模型</span>
                <ReportBadge tone="blue" className="text-xs scale-90 origin-left">已上线</ReportBadge>
              </div>
            }
          />
          <SummaryBox>
            {highlightNumbers("基于[[订单与人员的多维特征]]进行[[双向加权计算]]，将[[高危或专项订单]]精准分发至[[最匹配、绩效最优的审核人员]]，从而全面提升[[审核质量]]与[[处理效率]]。")}
          </SummaryBox>
          
          <div className="report-module-surface overflow-hidden relative space-y-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative z-10">
              {/* 左侧：订单特征 */}
              <div className="flex-1 w-full max-w-sm bg-slate-50 border border-slate-200/80 rounded-lg p-4 shadow-2xs relative">
                <div className="text-center mb-3">
                  <span className="text-sm font-black text-slate-900 bg-white border border-slate-200/60 px-3 py-1 rounded-full shadow-2xs inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    订单特征画像
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <span className="text-xs font-bold text-slate-900">维度 1</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">金额大小</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <span className="text-xs font-bold text-slate-900">维度 2</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">风险分数</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <span className="text-xs font-bold text-slate-900">维度 3</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">业务类型</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
                {/* 装饰线 */}
                <div className="hidden lg:block absolute -right-6 top-[60%] w-6 border-t-[2px] border-dashed border-blue-300"></div>
              </div>

              {/* 中间：匹配引擎 */}
              <div className="shrink-0 flex flex-col items-center justify-center relative">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center ring-4 ring-blue-50 relative z-10">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="mt-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded text-center relative z-10">
                  <div className="text-xs font-black text-blue-900">双向加权路由</div>
                </div>
              </div>

              {/* 右侧：人员特征 */}
              <div className="flex-1 w-full max-w-sm bg-slate-50 border border-slate-200/80 rounded-lg p-4 shadow-2xs relative">
                {/* 装饰线 */}
                <div className="hidden lg:block absolute -left-6 top-[60%] w-6 border-t-[2px] border-dashed border-blue-300"></div>
                
                <div className="text-center mb-3">
                  <span className="text-sm font-black text-slate-900 bg-white border border-slate-200/60 px-3 py-1 rounded-full shadow-2xs inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    人员能力画像
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">擅长业务领域</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">标签 1</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">人员历史绩效</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">标签 2</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-slate-900">当前工作负载</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">状态 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 分配决策机制示例 */}
        <div className="report-module-subsection">
          <div className="report-case-list">
            {dispatchDecisionScenarios.map((scenario) => (
              <article key={scenario.number} className="report-case-frame dispatch-decision-case">
                <div className="report-case-head">
                  <span className="report-case-badge">
                    <Zap className="w-3.5 h-3.5 shrink-0" />
                    分配决策案例
                  </span>
                  <span className="report-sequence-badge">{scenario.number}</span>
                  <span className="report-case-title">【{scenario.title}】</span>
                </div>
                <div className="report-case-copy">
                  <div>
                    <span>实现机制：</span>
                    <p>待分订单：{scenario.order}；空闲人员：{scenario.people}。</p>
                  </div>
                  <div>
                    <span>效果说明：</span>
                    <p>{highlightNumbers(`分配决策：[[${scenario.decision}]]。${scenario.reason}`)}</p>
                  </div>
                </div>
                <div className="report-case-example">
                  <div className="report-case-example-label">
                    <span></span>
                    系统示例：
                  </div>
                  <div className="system-example-table-frame">
                    <table className="report-standard-table system-example-table system-example-table--dispatch">
                      <thead>
                        <tr>
                          <th>待分订单</th>
                          <th>空闲人员</th>
                          <th>分配决策</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="report-example-masked">{scenario.order}</span></td>
                          <td><span className="report-example-masked">{scenario.people}</span></td>
                          <td><span className="dispatch-case-decision">{scenario.decision}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
