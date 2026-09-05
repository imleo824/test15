import React from "react";
import { Check, Clock } from "lucide-react";
import { highlightNumbers } from "./utils";
import { ReportPanel, ReportPanelHeader } from "../../ReportSections";

interface GovernanceItem {
  id: string;
  name: string;
  sensitivity: "一般" | "非常";
  status: "已处理" | "待排期" | "持续中";
  method: "彻底取消" | "脱敏简化" | "系统替代";
  actionDetails: string;
}

export const TgGovernanceSection: React.FC = () => {
  const governanceItems: GovernanceItem[] = [
    {
      id: "G01",
      name: "财务核实流程",
      sensitivity: "一般",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "在财务环节独立闭环即可，从审核环节彻底剥离，减少冗余流转",
    },
    {
      id: "G02",
      name: "代存核实流程",
      sensitivity: "一般",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代存大额真实性在入款侧核验，严禁在审核出款环节二次人工拉群",
    },
    {
      id: "G03",
      name: "质检对接流程",
      sensitivity: "非常",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "缩小专员对接范围，统一标准共识后线上修正规则，敏感参数完全脱敏",
    },
    {
      id: "G04",
      name: "流水咨询流程",
      sensitivity: "一般",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "上线自助查询工具与标准化操作指引，咨询侧自助秒查，无需人工问询",
    },
    {
      id: "G05",
      name: "审核扣款流程",
      sensitivity: "非常",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由系统 API 自动联动触发，彻底杜绝群内人工报单操作",
    },
    {
      id: "G06",
      name: "红利审核流程",
      sensitivity: "非常",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全面迁移至后台风控工单系统，名单与额度自动校验流转",
    },
    {
      id: "G07",
      name: "审核复审流程",
      sensitivity: "非常",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策全量嵌入管理后台复审流，群内零敏感数据流转且 100% 审计留痕",
    },
    {
      id: "G08",
      name: "上标下标流程",
      sensitivity: "非常",
      status: "已处理",
      method: "系统替代",
      actionDetails: "账号限制与黑名单标记改为后台一键工单审批流，系统自动同步生效",
    },
    {
      id: "G09",
      name: "标签备注流程",
      sensitivity: "非常",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别关键高危标签并实施界面强制高亮提醒，消除人工漏看漏判风险",
    },
    {
      id: "G10",
      name: "资料审核流程",
      sensitivity: "非常",
      status: "待排期",
      method: "系统替代",
      actionDetails: "升级多节点背靠背交叉核验流，实名证件及隐私资料由 3~4 人审批方可通过",
    },
  ];

  return (
    <div className="space-y-4">
      {/* 顶部：核心治理跃迁与成效总览 */}
      <ReportPanel>
        {/* 文字说明：简明定性 */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          全面终结过去跨部门在 Telegram 线下群无痕沟通、碎片化催办与敏感数据裸露的痛点。48 个核心业务群已{" "}
          <span className="font-bold text-red-700 font-mono">100% 物理注销</span>，10 项核心业务流程全部推进至{" "}
          <span className="font-bold text-blue-700 font-mono">100% 线上系统化工单闭环</span>。
        </p>

        {/* 第一行：核心变化（线下群治理 ➔ 线上工单率） */}
        <div className="pt-2">
          <div className="p-4 sm:p-5 rounded-md bg-slate-50/80 border border-slate-100 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                  核心根本变化 · 线下群聊全面清零与工单线上化
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100/80">
                100% 操作留痕 · 物理绝迹泄密
              </span>
            </div>

            {/* 极简对比：治理前 VS 治理现状 */}
            <div className="bg-white py-6 sm:py-7 px-4 rounded-md border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* 治理前 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider mb-1">
                    治理前 (Telegram 线下群)
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-slate-600 tracking-tight">
                      48
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-400">个</span>
                  </div>
                </div>

                {/* 中间：关停清零与 VS */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-2 sm:py-0">
                  <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded bg-emerald-700 text-white font-mono font-bold text-sm sm:text-base whitespace-nowrap mb-1">
                    100% 关停清零
                  </div>
                  <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                    VS
                  </span>
                </div>

                {/* 治理现状 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs sm:text-sm font-bold text-emerald-800 tracking-wider mb-1">
                    治理现状 (全部注销)
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-emerald-700 tracking-tight">
                      0
                    </span>
                    <span className="text-base sm:text-lg font-black text-emerald-700">个群</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReportPanel>

        {/* 10项核心风控业务流程线上化与治理明细清单（重构：大号冲击力、文字极简、强调完成总数与治理手段） */}
        <ReportPanel>
          <ReportPanelHeader
            title="10项核心风控业务流程线上化与治理明细清单"
            badge="已完成 9/10 项 · 线上化率 90%"
          />

          {/* 顶部总览大卡片：直观呈现已搞定流程数与三大治理动作分类 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 border-2 border-emerald-200/90 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-emerald-800 tracking-wider">已搞定/闭环流程</span>
              <div className="flex items-baseline justify-center gap-1 my-0.5">
                <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600">9</span>
                <span className="text-xs font-bold text-emerald-700">/ 10 项</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700">线上化率 90%</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-blue-800 tracking-wider">系统自动替代</span>
              <div className="flex items-baseline justify-center gap-1 my-0.5">
                <span className="text-3xl sm:text-4xl font-black font-mono text-blue-600">6</span>
                <span className="text-xs font-bold text-blue-700">项</span>
              </div>
              <span className="text-[10px] font-bold text-blue-700">API/工单全自动</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-amber-800 tracking-wider">彻底取消/剥离</span>
              <div className="flex items-baseline justify-center gap-1 my-0.5">
                <span className="text-3xl sm:text-4xl font-black font-mono text-amber-600">2</span>
                <span className="text-xs font-bold text-amber-700">项</span>
              </div>
              <span className="text-[10px] font-bold text-amber-700">剥离冗余流程</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/80 border border-purple-200/90 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold text-purple-800 tracking-wider">脱敏简化/工具化</span>
              <div className="flex items-baseline justify-center gap-1 my-0.5">
                <span className="text-3xl sm:text-4xl font-black font-mono text-purple-600">2</span>
                <span className="text-xs font-bold text-purple-700">项</span>
              </div>
              <span className="text-[10px] font-bold text-purple-700">自助查询 & 脱敏</span>
            </div>
          </div>

          {/* 流程大卡片列表 (单列排布：一行一个流程，宽幅大气、重点突出) */}
          <div className="space-y-3">
            {governanceItems.map((item) => {
              const isCompleted = item.status === "已处理";
              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-4.5 rounded-xl border transition-all duration-150 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isCompleted
                      ? "bg-white/95 border-slate-200/90 hover:border-blue-300"
                      : "bg-amber-50/40 border-amber-200"
                  }`}
                >
                  {/* 左侧：流程编号 + 业务名称 + 治理动作详情 */}
                  <div className="space-y-1.5 flex-1 pr-0 sm:pr-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                        {item.id}
                      </span>
                      <span className="text-base font-black text-slate-900 tracking-tight">
                        {item.name}
                      </span>
                      <span
                        className={`text-[11px] font-black px-2.5 py-0.5 rounded font-mono ${
                          item.method === "彻底取消"
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : item.method === "系统替代"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-purple-50 text-purple-700 border border-purple-200"
                        }`}
                      >
                        {item.method}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed pl-0.5">
                      {highlightNumbers(item.actionDetails)}
                    </div>
                  </div>

                  {/* 右侧：状态徽标 (大号完成标记) */}
                  <div className="shrink-0 flex items-center justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                    <span
                      className={`text-xs font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3.5]" />
                      ) : (
                        <Clock className="w-4 h-4 stroke-[3]" />
                      )}
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ReportPanel>
    </div>
  );
};

