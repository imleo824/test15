import React from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { highlightNumbers } from "./utils";
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
      status: "已处理",
      method: "系统替代",
      actionDetails: "升级多节点背靠背交叉核验流，实名证件及隐私资料由 3~4 人审批方可通过",
    },
    {
      id: "10",
      name: "场馆解锁流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "针对在场馆玩内嵌游戏后输光不自动解锁进行彻底解决，输光也自动解锁",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 4.1 分级治理架构 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.1 分级治理架构" />

        {/* 4.1 分级治理架构：从左至右两阶段分析与治理路径 (列与列独立成卡、留有间距、纯白底色、高对比度) */}
        <div className="space-y-3">
          {/* 阶段划分顶部栏：从左至右两步走 (第一步 占 1/4，第二步 占 3/4) */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
            {/* 第一步 阶段标头 */}
            <div className="border border-slate-300 bg-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-950 text-xs sm:text-sm">
                <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                  1
                </span>
                <span>第一步：存在的必要性评估</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 px-1.5 py-0.5 border border-slate-300">
                源头清零
              </span>
            </div>

            {/* 第二步 阶段标头 (横跨右侧 3 列) */}
            <div className="xl:col-span-3 border border-slate-300 bg-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-950 text-xs sm:text-sm">
                <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                  2
                </span>
                <span>第二步：需存在的分级治理</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 px-2 py-0.5 border border-slate-300">
                分级管控 · 闭环留痕
              </span>
            </div>
          </div>

          {/* 4 列主卡片：每列统一采用 三行结构 (标题 / 说明 / 处置方式)，严格横向对齐 */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
            {/* 第 1 列：第一步 · 非必要群聊排查 */}
            <div className="border border-slate-300 bg-white flex flex-col justify-between">
              {/* 第 1 行：标题 */}
              <div className="p-3.5 border-b border-slate-200 h-[86px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-600">
                    第一步 · 必要性评估
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-900 px-1.5 py-0.2 border border-slate-300">
                    源头清零
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-950">
                  非必要群聊排查
                </div>
              </div>

              {/* 第 2 行：说明 */}
              <div className="p-3.5 border-b border-slate-200 h-[126px] flex flex-col">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>说明</span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  逐一审查所有外部对接群聊，凡无实际业务支撑、临时项目已结束、跨团队职责重叠，或可通过现有后台系统直接替代的群聊。
                </p>
              </div>

              {/* 第 3 行：处置方式 */}
              <div className="p-3.5 flex-1">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置方式</span>
                </div>
                <p className="text-xs text-slate-900 leading-relaxed font-normal">
                  一律坚决裁撤注销。<strong className="text-slate-950 font-bold underline decoration-slate-400">已彻底清零关停 48 个线下风控对接群聊</strong>，从源头缩减安全暴露面与无痕操作漏洞。
                </p>
              </div>
            </div>

            {/* 第 2 列：第二步 · 第一类：日常沟通讨论群 */}
            <div className="border border-slate-300 bg-white flex flex-col justify-between">
              {/* 第 1 行：标题 */}
              <div className="p-3.5 border-b border-slate-200 h-[86px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-600">
                    第二步 · 第一类
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-800 px-1.5 py-0.2 border border-slate-300">
                    事务沟通
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-950">
                  日常沟通讨论群
                </div>
              </div>

              {/* 第 2 行：说明 */}
              <div className="p-3.5 border-b border-slate-200 h-[126px] flex flex-col">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>说明</span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  仅保留核心业务对接人，严格管控在群人员编制，定位仅做日常事务同步与业务讨论，不具备任何单据流转与审批属性。
                </p>
              </div>

              {/* 第 3 行：处置方式 */}
              <div className="p-3.5 flex-1">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置方式</span>
                </div>
                <p className="text-xs text-slate-900 leading-relaxed font-normal">
                  严格限制进出权限，<strong className="text-slate-950 font-bold underline decoration-slate-400">严禁流转任何风控单据与审批凭证</strong>，杜绝一切群聊内部无痕业务操作。
                </p>
              </div>
            </div>

            {/* 第 3 列：第二步 · 第二类：高风险业务 */}
            <div className="border border-slate-300 bg-white flex flex-col justify-between">
              {/* 第 1 行：标题 */}
              <div className="p-3.5 border-b border-slate-200 h-[86px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-600">
                    第二步 · 第二类（风控）
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-900 px-1.5 py-0.2 border border-slate-300">
                    最高优先级
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-950">
                  高风险审核业务
                </div>
              </div>

              {/* 第 2 行：说明 */}
              <div className="p-3.5 border-b border-slate-200 h-[126px] flex flex-col">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>说明</span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  涉及实名认证、充提流水审查、大额出款复审、扣款追缴及黑名单配置等强合规高危核心业务操作。
                </p>
              </div>

              {/* 第 3 行：处置方式 */}
              <div className="p-3.5 flex-1">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置方式</span>
                </div>
                <p className="text-xs text-slate-900 leading-relaxed font-normal">
                  <strong className="text-slate-950 font-bold underline decoration-slate-400">群聊 100% 物理注销</strong>，全面迁移至后台系统工单与标准 API 闭环流转，全流程留痕并强制双人复核。
                </p>
              </div>
            </div>

            {/* 第 4 列：第二步 · 第二类：低风险业务 */}
            <div className="border border-slate-300 bg-white flex flex-col justify-between">
              {/* 第 1 行：标题 */}
              <div className="p-3.5 border-b border-slate-200 h-[86px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-600">
                    第二步 · 第二类（风控）
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-800 px-1.5 py-0.2 border border-slate-300">
                    次优先级
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-950">
                  低风险审核业务
                </div>
              </div>

              {/* 第 2 行：说明 */}
              <div className="p-3.5 border-b border-slate-200 h-[126px] flex flex-col">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>说明</span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-normal">
                  常规不含用户隐私信息的审核问询、规则答疑、轻量化状态核验与基础状态反馈。
                </p>
              </div>

              {/* 第 3 行：处置方式 */}
              <div className="p-3.5 flex-1">
                <div className="text-xs font-bold text-slate-950 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置方式</span>
                </div>
                <p className="text-xs text-slate-900 leading-relaxed font-normal">
                  通过<strong className="text-slate-950 font-bold underline decoration-slate-400">风控自助查询工具与标准化工单</strong>持续承接改造，逐步全量线上替代，告别离线群聊催办。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2 成效量化指标 (第二个位置) */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.2 成效量化指标" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>风控审核群注销</span>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300">
                关停率 100%
              </span>
            </div>
            <div className="flex items-baseline gap-2 py-1">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">48</span>
              <ArrowRight className="w-4 h-4 text-slate-700 shrink-0" />
              <span className="text-3xl font-bold font-mono text-slate-950 tabular-nums">0</span>
              <span className="text-xs font-bold text-slate-700">个群</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-normal">第二类风控审核群聊已全面关停清零</p>
          </div>

          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>核心流程线上工单化</span>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300">
                线上化率 100%
              </span>
            </div>
            <div className="flex items-baseline gap-1 py-1">
              <span className="text-3xl font-bold font-mono text-slate-950 tabular-nums">10</span>
              <span className="text-sm font-bold text-slate-700">/ 10 项</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-normal">10 项核心业务已全量上线运行，100% 线上工单闭环</p>
          </div>

          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>工单流转处置时效</span>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300">
                提效 72%
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 py-1">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">18</span>
              <span className="text-xs font-bold text-slate-700">分</span>
              <ArrowRight className="w-4 h-4 text-slate-700 shrink-0 mx-0.5" />
              <span className="text-3xl font-bold font-mono text-slate-950 tabular-nums">5</span>
              <span className="text-xs font-bold text-slate-700">分</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-normal">标准化工单流转替代人工群聊催办，端到端处置大幅提速</p>
          </div>

          <div className="border border-slate-200 bg-white p-4 flex flex-col justify-between space-y-3 border-t-2 border-t-slate-900">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>敏感数据保护与留痕</span>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300">
                数据零外泄
              </span>
            </div>
            <div className="flex items-baseline gap-1 py-1">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">100%</span>
              <span className="text-xs font-bold text-slate-700">系统审计</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-normal">出款、扣款、标签判定全量系统存证备查</p>
          </div>
        </div>
      </div>

      {/* 4.3 流程改造明细 (第三个位置) */}
      <div className="space-y-4">
        <ReportSectionHeader
          title="4.3 流程改造明细"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 border border-slate-200">
              已完成 10/10 项 · 线上化率 100%
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
                            ? "bg-slate-100 text-slate-900 border-slate-300 font-bold"
                            : "bg-amber-50 text-amber-900 border-amber-200 font-bold"
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
