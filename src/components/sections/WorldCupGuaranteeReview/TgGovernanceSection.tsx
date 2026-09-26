import React from "react";
import { ArrowRight, Check, Clock, AlertTriangle, Search, ShieldAlert, FileWarning } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";
import { ReportSubsectionHeader, ReportTableFrame } from "../../ReportSections";

interface GovernanceItem {
  id: string;
  name: string;
  department: string;
  riskLevel: "高风险" | "低风险";
  status: "已处理" | "待排期" | "持续中";
  method: "系统替代" | "脱敏简化" | "彻底取消";
  actionDetails: string;
}

export const TgGovernanceSection: React.FC = () => {
  const governanceItems: GovernanceItem[] = [
    {
      id: "01",
      name: "到账核实流程",
      department: "财务",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "入款真实性与到账状态由财务及支付系统自动核验，严禁风控审核环节人工拉群找财务二次确认",
    },
    {
      id: "02",
      name: "大额代存核实",
      department: "代理",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代理大额代存真实性在前置入款与代理侧核验，严禁风控审核环节线下找代理人工二次拉群核实",
    },
    {
      id: "03",
      name: "代存性质核实",
      department: "代理",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "统一代理额度代存与系统存款类型判定标准，彻底取消风控人工拉群核实性质并视作红利审核的冗余流程",
    },
    {
      id: "04",
      name: "流水咨询流程",
      department: "维护",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "上线自助查询工具与标准化操作指引，咨询侧自助秒查，无需人工问询",
    },
    {
      id: "05",
      name: "审核扣款流程",
      department: "运营",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由系统接口自动联动触发，彻底杜绝群内人工报单操作",
    },
    {
      id: "06",
      name: "红利审核流程",
      department: "运营",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全面迁移至后台风控工单系统，名单与额度自动校验流转",
    },
    {
      id: "07",
      name: "审核复审流程",
      department: "风控",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策全量嵌入管理后台复审流，群内零敏感数据流转且 100% 审计留痕",
    },
    {
      id: "08",
      name: "上标下标流程",
      department: "内部",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "对会员上下标流程对接全部改为后台一键工单审批流，系统自动同步生效",
    },
    {
      id: "09",
      name: "备注审核流程",
      department: "内部",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别关键高危标签并实施界面强制高亮提醒，消除人工漏看漏判风险",
    },
    {
      id: "10",
      name: "资料审核流程",
      department: "内部",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "升级多节点背靠背交叉核验流，实名证件及隐私资料由 2~3 人审批方可通过",
    },
    {
      id: "11",
      name: "会员禁用流程",
      department: "内部",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "高危账号封禁与权限限制全量接入后台工单审批流，系统自动同步拦截，杜绝人工私下封号",
    },
    {
      id: "12",
      name: "场馆解锁流程",
      department: "维护",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "针对在场馆玩内嵌游戏后输光不自动解锁进行彻底解决，内嵌游戏输光也自动解锁，减少风控大概15%-20%的无效咨询",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 3.2.1 线下离线流程治理 */}
      <div className="space-y-4">
        <ReportSubsectionHeader title="3.2.1 线下离线流程治理" />

        <SummaryBox className="mb-2">
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "针对全部工作对接群，按照[[非必要群聊]]、[[日常沟通群]]、[[高风险审核业务]]、[[低风险咨询业务]]四种典型场景开展分级治理与处置，推行坚决清理、严控权限、迁移系统工单与协同切换。",
            )}
          </p>
        </SummaryBox>

        {/* 4.1 分级治理架构：从左至右两阶段分析与治理路径 */}
        <div className="space-y-4">
          {/* 4 列主卡片：每列统一采用 结构化卡片 (头部 / 判定标准 / 处置策略与落地成效) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
            {/* 第 1 列：第一步 · 非必要群聊排查 */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white flex flex-col justify-between">
              {/* 卡片头部：标题行 + 状态强背景行 */}
              <div>
                <div className="px-3.5 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 tracking-tight truncate">
                    非必要群聊排查
                  </h4>
                </div>
                <div className="px-3.5 py-2 bg-emerald-600 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-emerald-100 font-normal text-xs">治理现状</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-4 h-4 stroke-[3]" />
                    100% 已清零
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex-1 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  逐一审查所有对接群，凡无实际业务支撑、临时项目已结束、跨团队职责重叠，或可通过现有后台系统直接替代的群对接。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/40 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  一律坚决裁撤注销。<strong className="text-slate-950 font-bold underline decoration-slate-400">已彻底清零关停 48 个线下风控对接群聊</strong>，从源头缩减安全暴露面与无痕操作漏洞。
                </p>
              </div>
            </div>

            {/* 第 2 列：第二步 · 第一类：日常沟通讨论群 */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white flex flex-col justify-between">
              {/* 卡片头部：标题行 + 状态强背景行 */}
              <div>
                <div className="px-3.5 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 tracking-tight truncate">
                    日常沟通讨论群
                  </h4>
                </div>
                <div className="px-3.5 py-2 bg-blue-600 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-blue-100 font-normal text-xs">权限管控</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-4 h-4 stroke-[3]" />
                    100% 已收紧
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex-1 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  仅保留核心业务对接人，严格管控在群人员名单与权限，定位仅做日常事务同步与业务讨论，不具备任何单据流转与审批属性。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/40 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  严格限制进出权限、记录最小时间清理，<strong className="text-slate-950 font-bold underline decoration-slate-400">严禁流转任何风控单据与审批凭证</strong>，杜绝一切群聊内部无痕业务操作。
                </p>
              </div>
            </div>

            {/* 第 3 列：第二步 · 第二类：高风险业务 */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white flex flex-col justify-between">
              {/* 卡片头部：标题行 + 状态强背景行 */}
              <div>
                <div className="px-3.5 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 tracking-tight truncate">
                    高风险审核业务
                  </h4>
                </div>
                <div className="px-3.5 py-2 bg-slate-900 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-300 font-normal text-xs">处置结果</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                    100% 已注销
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex-1 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  涉及敏感信息以及审核流程相关，如上标、备注、复审、扣款、禁用、红利、资料等等强合规高危核心业务操作。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/40 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  <strong className="text-slate-950 font-bold underline decoration-slate-400">群聊 100% 注销</strong>，全面迁移至后台系统工单与标准 API 闭环流转，全流程留痕并强制多人复核，综合提效～50%。
                </p>
              </div>
            </div>

            {/* 第 4 列：第二步 · 第二类：低风险业务 */}
            <div className="border border-slate-200 border-t-2 border-t-slate-900 bg-white flex flex-col justify-between">
              {/* 卡片头部：标题行 + 状态强背景行 */}
              <div>
                <div className="px-3.5 py-2.5 bg-slate-100/90 border-b border-slate-200 flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-slate-950 tracking-tight truncate">
                    低风险咨询业务
                  </h4>
                </div>
                <div className="px-3.5 py-2 bg-amber-500 text-amber-950 flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-amber-900 font-normal text-xs">演进状态</span>
                  <span className="font-mono font-black text-amber-950 flex items-center gap-1.5 whitespace-nowrap">
                    <Clock className="w-4 h-4 stroke-[3]" />
                    待协同切换
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex-1 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  常规不含敏感数据的问询、催促、答疑等轻量化状态核验与基础状态反馈。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/40 space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  <strong className="text-slate-950 font-bold underline decoration-slate-400">需协同各方工单建设就绪后统一切换</strong>，待对接部门工单流程闭环上线后，即可全量切换注销。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2.2 线下群 vs 工单流转对比 */}
      <div className="space-y-6">
        <ReportSubsectionHeader title="3.2.2 线下群 vs 工单流转对比" />

        {/* 治理前 Telegram 线下群操作隐患与高风险场景剖析 (具象化案例阐述) */}
        <div className="space-y-6">
          {/* 1. 治理前 vs 治理后 变化对比卡片 (置于截图上方：一列2行风险 vs 一列2行成效) */}
          <div className="space-y-4">
            <div className="space-y-1.5 border-b border-slate-200 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ShieldAlert className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                  <span>【案例】线下群高危隐患与系统化收口对比</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-slate-900 text-white px-2.5 py-0.5">
                    治理前后对比
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                以真实报单跨群检索泄露为例，具象化呈现从“线下群明文裸露、口头催单无痕”到“内部工单脱敏流转、100% 审计存证”的实质性收益与风险消除。
              </p>
            </div>

            {/* 左右 2 列并排对比布局 (左列治理前 2 行 vs 中间 VS vs 右列治理后 2 行) */}
            <div className="w-full overflow-x-auto pb-1">
              <div className="flex flex-row items-stretch gap-3 sm:gap-5 min-w-[680px] md:min-w-0">
                {/* ===== 左列：治理前 · 线下群高危隐患 (一列 2 行) ===== */}
                <div className="flex-1 min-w-0 flex flex-col space-y-3">
                  {/* 左列顶部标题栏 */}
                  <div className="flex items-center justify-between bg-rose-50/80 border border-rose-200 px-3.5 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-rose-950">治理前 · 线下群操作 (风险暴露)</span>
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-white px-2 py-0.5 border border-rose-200">
                      治理前 · 线下群
                    </span>
                  </div>

                  {/* 左列卡片 1 (风险 1) */}
                  <div className="border border-slate-200 bg-white p-4 sm:p-5 space-y-2.5 border-l-4 border-l-rose-600 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                      <AlertTriangle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                      <span>风险 1：全域跨群明文检索，会员数据秒级穿透</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      在搜索栏中键入任一会员账号（如 <code className="bg-slate-100 px-1.5 py-0.5 font-mono font-bold text-slate-900 rounded">qweasd123</code>），将<strong>秒级穿透该账号在所有历史群、对接群、审核群中的全部敏感记录</strong>，导致会员核心资产与风控记录跨群全量裸露，极易被批量爬取或外泄。
                    </p>
                  </div>

                  {/* 左列卡片 2 (风险 2) */}
                  <div className="border border-slate-200 bg-white p-4 sm:p-5 space-y-2.5 border-l-4 border-l-amber-600 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                      <FileWarning className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                      <span>风险 2：口头催单报单，缺乏审计留痕</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      群内人工发消息催单、上标报单极易被刷屏遗漏，且缺乏正规的系统审批权限隔离与操作审计流水，容易滋生人情操作与私下协调。
                    </p>
                  </div>
                </div>

                {/* ===== 中间：垂直贯穿 对比 分隔柱 ===== */}
                <div className="shrink-0 w-9 flex flex-col items-center justify-center relative my-2">
                  <div className="w-px flex-1 bg-slate-300" />
                  <div className="my-2 w-9 h-9 rounded-full bg-slate-900 text-white font-black text-xs tracking-wider flex items-center justify-center border-2 border-white ring-1 ring-slate-300 shrink-0 select-none">
                    对比
                  </div>
                  <div className="w-px flex-1 bg-slate-300" />
                </div>

                {/* ===== 右列：治理后 · 系统化收口闭环 (一列 2 行) ===== */}
                <div className="flex-1 min-w-0 flex flex-col space-y-3">
                  {/* 右列顶部标题栏 */}
                  <div className="flex items-center justify-between bg-blue-50/80 border border-blue-200 px-3.5 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-blue-950">治理后 · 工单系统收口 (全面受控)</span>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-white px-2 py-0.5 border border-blue-200">
                      治理后 · 工单闭环
                    </span>
                  </div>

                  {/* 右列卡片 1 (成效 1) */}
                  <div className="border border-blue-200 bg-blue-50/30 p-4 sm:p-5 space-y-2.5 border-l-4 border-l-blue-600 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-950">
                      <Check className="w-4.5 h-4.5 text-blue-600 shrink-0 stroke-[3]" />
                      <span>成效 1：工单系统收口，敏感数据脱敏隔离</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      彻底关闭所有线下业务报单群，全部 <strong>12 项业务 100% 迁移至内部风控工单系统</strong>。会员虚拟币地址与流水信息仅限授权角色在系统内加密脱敏调阅，杜绝跨群检索与数据外泄。
                    </p>
                  </div>

                  {/* 右列卡片 2 (成效 2) */}
                  <div className="border border-blue-200 bg-blue-50/30 p-4 sm:p-5 space-y-2.5 border-l-4 border-l-blue-600 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-950">
                      <Check className="w-4.5 h-4.5 text-blue-600 shrink-0 stroke-[3]" />
                      <span>成效 2：标准化审批流，100% 审计存证溯源</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      所有催单、上标与复审全流程嵌入工单流转，实行<strong>多级权限管控与不可篡改的系统日志审计存证</strong>，杜绝口头人情单与沟通遗漏。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 下方：100% 还原 Telegram Desktop 浅色原版客户端历史真实快照 */}
          <div className="bg-white border border-slate-300 overflow-hidden font-sans">
            {/* macOS 风格顶部窗口栏 */}
            <div className="bg-[#e7e8ea] px-3 py-2 border-b border-slate-300 flex items-center justify-between text-xs text-slate-700 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block" />
                </div>
                <span className="font-medium text-slate-700 ml-2 text-xs">群1 · 历史群快照示意</span>
              </div>
            </div>

            {/* TG 客户端主工作区 (左侧搜索列表 + 右侧绿色壁纸聊天窗口) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-white">
              {/* 1. 左侧会话与搜索结果列表 (纯正 TG 浅色灰白底) */}
              <div className="sm:col-span-4 bg-[#f4f5f5] border-r border-[#dfe1e5] p-3 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* 搜索框 (输入目标账号 qweasd123 进行跨群检索) */}
                  <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-2 border border-[#dfe1e5] shadow-2xs">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-normal text-slate-900 text-xs font-mono select-none">
                      qweasd123
                    </span>
                    <span className="ml-auto text-xs text-slate-400 cursor-pointer hover:text-slate-600">✕</span>
                  </div>

                  {/* 搜索命中汇总 (跨所有群聊检索) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-normal">
                    <span>找到 4 条相关记录</span>
                    <span className="text-xs text-slate-500">所有历史群聊（跨群搜索）</span>
                  </div>

                  {/* 会话命中列表 (展示在不同业务大群中全部被搜索出该会员明文记录) */}
                  <div className="space-y-1.5">
                    {/* 命中群 1 (当前选中查看的主群) */}
                    <div className="bg-[#e8f2fe] p-2 rounded-lg border border-[#c4ddfa] cursor-pointer space-y-0.5 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#3390ec] text-white font-bold flex items-center justify-center text-xs shrink-0">
                            群1
                          </span>
                          <span className="font-bold text-slate-900 text-xs truncate max-w-[130px] font-mono">
                            群1
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">09:12</span>
                      </div>
                      <p className="text-xs text-slate-600 truncate pl-7.5">
                        ...帐号: <span className="bg-[#bde0fe] text-[#004880] font-bold px-0.5 rounded font-mono">qweasd123</span> 不存款 领取身份红利...
                      </p>
                    </div>

                    {/* 命中群 2: 对接群 */}
                    <div className="bg-white hover:bg-slate-100/70 p-2 rounded-lg border border-slate-200 cursor-pointer space-y-0.5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#f58c38] text-white font-bold flex items-center justify-center text-xs shrink-0">
                            群2
                          </span>
                          <span className="font-bold text-slate-900 text-xs truncate max-w-[130px] font-mono">
                            群2
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">昨天</span>
                      </div>
                      <p className="text-xs text-slate-600 truncate pl-7.5">
                        ...上标复核: <span className="bg-[#bde0fe] text-[#004880] font-bold px-0.5 rounded font-mono">qweasd123</span> 同网络节点多账号套利...
                      </p>
                    </div>

                    {/* 命中群 3: 异常复核群 */}
                    <div className="bg-white hover:bg-slate-100/70 p-2 rounded-lg border border-slate-200 cursor-pointer space-y-0.5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#27c93f] text-white font-bold flex items-center justify-center text-xs shrink-0">
                            群3
                          </span>
                          <span className="font-bold text-slate-900 text-xs truncate max-w-[130px] font-mono">
                            群3
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">9月8日</span>
                      </div>
                      <p className="text-xs text-slate-600 truncate pl-7.5">
                        ...提款拦截: 帐号 <span className="bg-[#bde0fe] text-[#004880] font-bold px-0.5 rounded font-mono">qweasd123</span> 虚拟币地址重复...
                      </p>
                    </div>

                    {/* 命中群 4: 客服出款群 */}
                    <div className="bg-white hover:bg-slate-100/70 p-2 rounded-lg border border-slate-200 cursor-pointer space-y-0.5 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-[#8e44ad] text-white font-bold flex items-center justify-center text-xs shrink-0">
                            群4
                          </span>
                          <span className="font-bold text-slate-900 text-xs truncate max-w-[130px] font-mono">
                            群4
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">8月29日</span>
                      </div>
                      <p className="text-xs text-slate-600 truncate pl-7.5">
                        ...催单加急: <span className="bg-[#bde0fe] text-[#004880] font-bold px-0.5 rounded font-mono">qweasd123</span> 会员催促出款...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. 右侧聊天窗口 (经典 TG 浅绿壁纸 + 单条原版真实高危报单气泡) */}
              <div className="sm:col-span-8 flex flex-col justify-between bg-[#a8cf9e] relative border-l border-[#dfe1e5]">
                {/* 群顶部标题栏 */}
                <div className="bg-white px-3 py-2 border-b border-[#dfe1e5] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-xs font-mono">群1</div>
                    <div className="text-xs text-slate-500">466 位成员</div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Search className="w-4 h-4 cursor-pointer hover:text-slate-800" />
                    <div className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded-xs text-xs font-bold">
                      ◫
                    </div>
                    <div className="text-slate-500 font-bold text-sm leading-none">⋮</div>
                  </div>
                </div>

                {/* 聊天内容流 (只保留真实截图单条消息，无需滚动) */}
                <div className="p-4 flex-1 flex flex-col justify-center text-xs min-h-[260px]">
                  {/* 真实截图高危报单 (完全严格 1:1 参照真实截图) */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#189bb4] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      双
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-xs p-3 max-w-[92%] shadow-[0_1px_3px_rgba(0,0,0,0.12)] space-y-1.5">
                      <div className="text-[#189bb4] font-bold text-xs">小双</div>
                      <div className="bg-[#fdf0ee] p-1.5 rounded-sm border-l-[3px] border-[#d84d34] text-xs text-slate-700 space-y-0.5">
                        <div className="text-[#c0392b] font-bold">群2 业务转发</div>
                        <div className="truncate text-slate-600 font-mono text-xs">https://t.me/c/1182191778/898813 报单研究...</div>
                      </div>
                      <div className="text-xs leading-relaxed text-slate-900 space-y-0.5 font-sans">
                        <div>平台: 1号盘</div>
                        <div>
                          帐号: <span className="bg-[#bde0fe] text-[#004880] px-1 py-0.2 rounded font-mono font-bold">qweasd123</span>
                        </div>
                        <div>等级: 0级会员</div>
                        <div>上级: 无</div>
                        <div>上标/复审: 复审</div>
                        <div>问题描述/截图:</div>
                        <div>虚拟币地址</div>
                        <div className="font-mono text-xs text-slate-800 break-all bg-slate-100 p-1.5 rounded border border-slate-200">
                          TX8P9qJeKQxGTCi8q8ZY4pL8otS2545gjLj6t
                        </div>
                        <div>不存款 领取身份红利 套利 复审</div>
                      </div>
                      <div className="text-right text-xs text-slate-400 font-mono pt-0.5">
                        09:12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2.3 风控工单业务改造明细 */}
      <div className="space-y-6">
        {/* 核心流程改造节点：极简一条线，提款为发起点，其余节点大对号表明改造完成 */}
        <div className="border border-slate-200 bg-white p-5 sm:p-7 border-t-2 border-t-slate-900 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>核心流程闭环节点</span>
                <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-0.5 border border-emerald-200">
                  全链路闭环
                </span>
              </h4>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              以提款为发起点，审核、复审、挂起、扣款、禁用全环节实现系统化与合规审计留痕
            </p>
          </div>

          {/* 流程管道主体：一条线上贯穿 6 个核心节点 */}
          <div className="relative pt-3 pb-2 overflow-x-auto">
            {/* 贯穿全流程的水平连接轴线 */}
            <div className="hidden sm:block absolute top-[36px] left-[8%] right-[8%] h-[3px] bg-slate-900 -z-0" />

            <div className="grid grid-cols-6 gap-2 relative z-10 min-w-[620px] sm:min-w-0">
              {/* 节点 1：提款（发起点，无对号及其他多余信息） */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border-4 border-white ring-2 ring-slate-400 mb-3.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-700">发起</span>
                </div>
                <div className="space-y-1">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    提款
                  </span>
                </div>
              </div>

              {/* 节点 2：审核 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white ring-2 ring-slate-900 mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    审核
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 bg-emerald-50 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 3：复审 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white ring-2 ring-slate-900 mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    复审
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 bg-emerald-50 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 4：挂起 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white ring-2 ring-slate-900 mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    挂起
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 bg-emerald-50 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 5：扣款 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white ring-2 ring-slate-900 mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    扣款
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 bg-emerald-50 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 6：禁用 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white ring-2 ring-slate-900 mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    禁用
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 bg-emerald-50 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReportTableFrame>
          <table className="w-full text-left border-collapse report-dense-table">
            <thead>
              <tr className="border-b-2 border-slate-900 bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-2.5 px-3 w-14 font-mono text-center">序号</th>
                <th className="py-2.5 px-3 w-32">流程</th>
                <th className="py-2.5 px-3 w-32">部门</th>
                <th className="py-2.5 px-3 w-28 text-center">等级</th>
                <th className="py-2.5 px-3 w-28 text-center">治理模式</th>
                <th className="py-2.5 px-3">治理动作</th>
                <th className="py-2.5 px-3 w-24 text-right">当前状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 border-b-2 border-slate-900 tabular-nums text-sm">
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
                    <td className="py-3 px-3 font-medium text-slate-700 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 font-medium text-xs sm:text-sm">
                        {item.department}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-block text-xs sm:text-sm font-medium px-2 py-0.5 border ${
                          item.riskLevel === "高风险"
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {item.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-block text-xs sm:text-sm font-mono font-medium px-2 py-0.5 border ${
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
