import React from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

interface GovernanceItem {
  id: string;
  name: string;
  riskLevel: "含敏感数据" | "低风险";
  status: "已处理" | "待排期" | "持续中";
  method: "系统替代" | "脱敏简化" | "彻底取消";
  actionDetails: string;
}

export const TgGovernanceSection: React.FC = () => {
  const governanceItems: GovernanceItem[] = [
    {
      id: "01",
      name: "代存核实流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代存大额真实性在入款侧核验，严禁在审核出款环节二次人工拉群",
    },
    {
      id: "02",
      name: "质检对接流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "缩小专员对接范围，统一标准共识后线上修正规则，敏感参数完全脱敏",
    },
    {
      id: "03",
      name: "流水咨询流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "上线自助查询工具与标准化操作指引，咨询侧自助秒查，无需人工问询",
    },
    {
      id: "04",
      name: "审核扣款流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由系统接口自动联动触发，彻底杜绝群内人工报单操作",
    },
    {
      id: "05",
      name: "红利审核流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全面迁移至后台风控工单系统，名单与额度自动校验流转",
    },
    {
      id: "06",
      name: "审核复审流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策全量嵌入管理后台复审流，群内零敏感数据流转且 100% 审计留痕",
    },
    {
      id: "07",
      name: "上标下标流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "系统替代",
      actionDetails: "账号限制与黑名单标记改为后台一键工单审批流，系统自动同步生效",
    },
    {
      id: "08",
      name: "标签备注流程",
      riskLevel: "含敏感数据",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别关键高危标签并实施界面强制高亮提醒，消除人工漏看漏判风险",
    },
    {
      id: "09",
      name: "资料审核流程",
      riskLevel: "含敏感数据",
      status: "待排期",
      method: "系统替代",
      actionDetails: "升级多节点背靠背交叉核验流，实名证件及隐私资料由 3~4 人审批方可通过",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 4.2 外部群治理与工单化 主模块小标题 */}
      <ReportSectionHeader title="4.2 外部群治理与工单化" />

      {/* 核心战略导语 */}
      <SummaryBox variant="chapter">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">
            彻底关停 48 个线下风控群，推动风控业务 100% 线上工单化与系统接口替代
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            切断黑灰产与敏感数据泄露隐患，将出款复审、扣款、红利及黑名单判定全量收归管理后台系统，实现全链路 100% 审计留痕与零数据泄露。
          </p>
        </div>
      </SummaryBox>

      {/* 4.2.1 核心量化指标卡片 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.2.1 成效量化指标" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>风控审核群注销</span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                关停率 100%
              </span>
            </div>
            <div className="flex items-baseline gap-2 py-1">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">48</span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-3xl font-bold font-mono text-emerald-700 tabular-nums">0</span>
              <span className="text-xs font-bold text-slate-500">个群</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">第二类风控审核群聊已全面关停清零</p>
          </div>

          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-blue-800">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>核心流程线上工单化</span>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200">
                线上化率 89%
              </span>
            </div>
            <div className="flex items-baseline gap-1 py-1">
              <span className="text-3xl font-bold font-mono text-blue-800 tabular-nums">8</span>
              <span className="text-sm font-bold text-slate-400">/ 9 项</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">8 项已上线运行，仅 1 项背靠背交叉核验排期中</p>
          </div>

          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>敏感数据保护与留痕</span>
              <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 border border-slate-200">
                数据零外泄
              </span>
            </div>
            <div className="flex items-baseline gap-1 py-1">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">100%</span>
              <span className="text-xs font-bold text-slate-500">系统审计</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal">出款、扣款、标签判定全量系统存证备查</p>
          </div>
        </div>
      </div>

      {/* 4.2.2 分级治理架构 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.2.2 分级治理架构" />
        <div className="border border-slate-200 bg-white p-4 sm:p-5 space-y-3">
          <div className="space-y-3 text-xs">
            {/* 第一行：日常沟通讨论 */}
            <div className="border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                <div className="flex items-center gap-2">
                  <span className="report-sequence-badge">1</span>
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    第一类：日常沟通讨论群
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5">
                  治理策略：精简人员 · 权限严格管控
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                用于跨部门日常事务沟通。严格管控进出权限与在群人员编制，仅保留核心沟通对象，严禁流转任何风控单据与出款凭证。
              </p>
            </div>

            {/* 第二行：风控审核相关 */}
            <div className="border border-slate-200 bg-white p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <span className="report-sequence-badge">2</span>
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    第二类：风控审核相关群
                  </span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5">
                  治理策略：100% 物理注销关停 · 分级线上化
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-50/80 border border-slate-200 p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span className="flex items-center gap-1.5 text-sm">
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                      低风险业务
                    </span>
                    <span className="text-xs text-slate-600 bg-white border border-slate-200 px-2 py-0.5">
                      流程剥离 & 自助秒查
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    常规流水咨询、入款真实性核验等不含隐私信息的业务，从风控群剥离，通过自助查询工具与标准化指引实现线上秒级响应。
                  </p>
                </div>

                <div className="bg-slate-50/80 border border-slate-200 p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span className="flex items-center gap-1.5 text-sm">
                      <span className="w-2 h-2 rounded-full bg-rose-700" />
                      含敏感数据（高风险业务）
                    </span>
                    <span className="text-xs text-rose-700 bg-white border border-rose-200 px-2 py-0.5 font-bold">
                      100% 强工单闭环
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    实名证件、大额流水、扣款、复审及黑名单等高敏信息，100% 物理注销群聊，全面迁移至后台风控工单与系统接口自动化。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2.3 表格：9项核心风控业务线上化与治理明细清单 */}
      <div className="space-y-4">
        <ReportSectionHeader
          title="4.2.3 流程改造明细"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 border border-slate-200">
              已完成 8/9 项 · 线上化率 89%
            </span>
          }
        />
        <ReportTableFrame>
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-slate-900 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider">
                <th className="py-2.5 px-3 w-14 font-mono text-center">序号</th>
                <th className="py-2.5 px-3 w-32">业务流程</th>
                <th className="py-2.5 px-3 w-28 text-center">风险等级</th>
                <th className="py-2.5 px-3 w-28 text-center">治理模式</th>
                <th className="py-2.5 px-3">核心治理动作与替代路径</th>
                <th className="py-2.5 px-3 w-24 text-right">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 border-b-2 border-slate-900 tabular-nums">
              {governanceItems.map((item) => {
                const isCompleted = item.status === "已处理";
                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      !isCompleted ? "bg-amber-50/20" : ""
                    }`}
                  >
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-500">
                      {item.id}
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-block text-xs font-medium px-2 py-0.5 border ${
                          item.riskLevel === "含敏感数据"
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-block text-xs font-mono font-medium px-2 py-0.5 border ${
                          item.method === "系统替代"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : item.method === "脱敏简化"
                            ? "bg-slate-100 text-slate-700 border-slate-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {item.method}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-700 leading-relaxed text-xs sm:text-sm font-normal">
                      {highlightNumbers(item.actionDetails)}
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 border ${
                          isCompleted
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        ) : (
                          <Clock className="w-3 h-3 stroke-[2]" />
                        )}
                        <span>{item.status}</span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ReportTableFrame>
      </div>
    </div>
  );
};
