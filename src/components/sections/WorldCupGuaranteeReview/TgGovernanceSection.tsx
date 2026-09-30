import React from "react";
import { ArrowRight, Check, Clock, AlertTriangle, Search, ShieldAlert, FileWarning } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";
import { ReportSubsectionHeader, ReportTableFrame } from "../../ReportSections";

interface GovernanceItem {
  id: string;
  name: string;
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
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "入款真实性与到账状态由支付系统自动校验，取消风控人工找财务二次核实",
    },
    {
      id: "02",
      name: "大额代存核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代理大额代存真实性在前置入款与代理端核验，取消风控线下人工核实",
    },
    {
      id: "03",
      name: "代存性质核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "统一代理额度代存与系统存款判定标准，取消人工拉群核实冗余环节",
    },
    {
      id: "04",
      name: "流水咨询流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "上线自助查询工具与标准指引，咨询侧自助查询，无需人工问询",
    },
    {
      id: "05",
      name: "红利审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全量迁移至后台工单，名单与额度系统自动校验",
    },
    {
      id: "06",
      name: "审核扣款流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由系统接口自动触发，禁止群内人工报单",
    },
    {
      id: "07",
      name: "审核复审流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策嵌入后台复审流，群内零敏感数据流转，100% 审计留痕",
    },
    {
      id: "08",
      name: "上标下标流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "会员上下标对接全量改为后台一键工单审批，系统自动同步生效",
    },
    {
      id: "09",
      name: "备注审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别高危标签并在界面强制高亮提醒，消除人工漏看漏判",
    },
    {
      id: "10",
      name: "资料审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "实行多节点背靠背交叉核验，实名证件及隐私资料由 2~3 人协同审批",
    },
    {
      id: "11",
      name: "会员禁用流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "高危账号封禁与限制接入后台工单流，系统自动同步拦截，杜绝私下封号",
    },
    {
      id: "12",
      name: "场馆解锁流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "场馆内嵌游戏输光上线系统自动解锁机制，减少风控 15%~20% 无效咨询",
    },
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* 3.2.1 线下离线流程治理 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSubsectionHeader title="3.2.1 线下离线流程治理" />

        <SummaryBox className="space-y-2">
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "全部工作对接群按[[非必要群聊]]、[[日常沟通群]]、[[高风险审核业务]]、[[低风险咨询业务]]四类分级处置，落实清理、控权、工单迁移与协同切换。",
            )}
          </p>
        </SummaryBox>

        {/* 关键治理准则：警惕“形式化工单化”——源头消除优先于工单流转 */}
        <div className="bg-slate-50/80 p-5 sm:p-6 border-t-2 border-slate-900 space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-slate-900 text-white font-mono text-xs font-bold">
                治理准则
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                警惕“形式化工单化” · 源头消除优先于工单流转
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              源头能消除的业务，坚决不包装为工单
            </span>
          </div>

          <p className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal">
            推进线下离线流程治理向系统化收口的过程中，<strong>严防将可通过系统自动化解决的诉求形式化包装为内部工单</strong>。凡<strong>用户前端可自主闭环</strong>或<strong>底层系统可根治</strong>的诉求，必须<strong>从源头彻底消除</strong>；确需人工介入的诉求，<strong>支持用户自主发起并直连路由至承接部门</strong>，<strong>减少多重冗余角色中转</strong>，实现<strong>极简高效流转</strong>。
          </p>

          {/* 典型场景举例：2 列卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
            {/* 场景 1：流水查询与核对 */}
            <div className="bg-white p-4 space-y-2 flex flex-col justify-between border-t-2 border-slate-900">
              <div className="space-y-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                <div>
                  <strong className="text-slate-950 font-semibold mr-1">【典型案例 · 提款流水咨询】</strong>
                </div>
                <div className="text-slate-600">
                  <strong className="text-slate-950 font-medium">传统弊端：</strong>流水计算不准引发频繁咨询，客服转提工单复核；
                  <br />
                  <strong className="text-slate-950 font-medium">源头治理：</strong>校准流水计算并对用户透明呈现，直接消除咨询源头，<strong>减少风控约 30% 无效咨询与流转</strong>。
                </div>
              </div>
            </div>

            {/* 场景 2：体育内嵌场馆玩非体育输光不解锁 */}
            <div className="bg-white p-4 space-y-2 flex flex-col justify-between border-t-2 border-slate-900">
              <div className="space-y-2 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                <div>
                  <strong className="text-slate-950 font-semibold mr-1">【典型案例 · 体育内嵌玩非体育输光不解锁】</strong>
                </div>
                <div className="text-slate-600">
                  <strong className="text-slate-950 font-medium">传统弊端：</strong>内嵌游戏输光未自动解锁，导致频繁咨询与人工介入；
                  <br />
                  <strong className="text-slate-950 font-medium">源头治理：</strong>底层系统自动识别输光状态并即时解锁，<strong>减少风控约 15%~20% 无效流转</strong>。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.1 分级治理架构：从左至右两阶段分析与治理路径 */}
        <div className="space-y-4">
          {/* 4 列主卡片：采用 subgrid 实现 100% 绝对水平对齐 */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:grid-rows-[auto_1fr_1.1fr]">
            {/* 第 1 列：第一步 · 非必要群聊排查 */}
            <div className="bg-slate-50/60 border-t-2 border-slate-900 grid grid-rows-subgrid row-span-3">
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
                <div className="px-3.5 py-2 bg-emerald-700 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-emerald-100 font-normal text-xs">治理现状</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-4 h-4 stroke-[3]" />
                    100% 已清零
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  排查无实际业务支撑、项目已结束、职责重叠或系统可替代的对接群。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-white/60 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  一律注销。<strong className="text-slate-950 font-bold">彻底清零冗余线下对接群</strong>，消除无痕操作漏洞与暴露面。
                </p>
              </div>
            </div>

            {/* 第 2 列：第二步 · 第一类：日常沟通讨论群 */}
            <div className="bg-slate-50/60 border-t-2 border-slate-900 grid grid-rows-subgrid row-span-3">
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
                <div className="px-3.5 py-2 bg-blue-700 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-blue-100 font-normal text-xs">权限管控</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-4 h-4 stroke-[3]" />
                    100% 已收紧
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  仅保留核心业务对接人，严格管控名单与权限，仅限事务同步与日常讨论。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-white/60 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  严格限制进出权限，<strong className="text-slate-950 font-bold">严禁流转任何风控单据</strong>，杜绝无痕业务操作。
                </p>
              </div>
            </div>

            {/* 第 3 列：第二步 · 第二类：高风险业务 */}
            <div className="bg-slate-50/60 border-t-2 border-slate-900 grid grid-rows-subgrid row-span-3">
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
              <div className="p-4 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  涉及上标、备注、复审、扣款、禁用、红利、资料等核心敏感审核操作。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-white/60 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  <strong className="text-slate-950 font-bold">群聊 100% 注销</strong>，全量迁移至后台系统工单与标准 API，全流程留痕且强制复核。
                </p>
              </div>
            </div>

            {/* 第 4 列：第二步 · 第二类：低风险业务 */}
            <div className="bg-slate-50/60 border-t-2 border-slate-900 grid grid-rows-subgrid row-span-3">
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
                <div className="px-3.5 py-2 bg-amber-600 text-white flex items-center justify-between text-xs sm:text-sm font-bold">
                  <span className="text-amber-100 font-normal text-xs">当前状态</span>
                  <span className="font-mono font-black text-white flex items-center gap-1.5 whitespace-nowrap">
                    <Clock className="w-4 h-4 stroke-[3]" />
                    待协同切换
                  </span>
                </div>
              </div>

              {/* 判定标准 */}
              <div className="p-4 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400"></span>
                  <span>排查范围</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  不含敏感数据的常规问询、催促与答疑等轻量状态核验。
                </p>
              </div>

              {/* 处置策略与落地成效 */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/40 flex flex-col justify-start space-y-2">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-900"></span>
                  <span>处置策略与成效</span>
                </div>
                <p className="text-sm text-slate-900 leading-relaxed font-normal">
                  <strong className="text-slate-950 font-bold">协同对接部门工单建设就绪后统一切换</strong>，实现闭环后全量注销。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2.2 线下群聊与系统工单流转对比 */}
      <div className="space-y-6">
        <ReportSubsectionHeader title="3.2.2 线下群聊与系统工单流转对比" />

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
              <div className="flex flex-row items-stretch gap-4 sm:gap-6 min-w-[680px] md:min-w-0">
                {/* ===== 左列：治理前 · 线下群高危隐患 ===== */}
                <div className="flex-1 min-w-0 flex flex-col bg-rose-50/30 border-t-2 border-rose-600 p-5 space-y-4">
                  {/* 左列顶部标题栏 */}
                  <div className="flex items-center justify-between pb-3 border-b border-rose-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-rose-600 shrink-0" />
                      <span className="text-sm font-bold text-rose-950">治理前 · 线下群操作 (风险暴露)</span>
                    </div>
                    <span className="text-xs font-bold text-rose-800 bg-rose-100/70 px-2 py-0.5 font-mono">
                      治理前
                    </span>
                  </div>

                  {/* 左列卡片 1 (风险 1) */}
                  <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-950">
                      <AlertTriangle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                      <span>风险 1：跨群明文检索暴露，敏感记录缺乏隔离</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      搜索任一会员账号（如 <code className="font-mono font-bold text-slate-900">qweasd123</code>），<strong>该账号在所有历史群中的聊天记录被一览无余</strong>，会员核心资产与风控判定信息跨群暴露，存在严重外泄隐患。
                    </p>
                  </div>

                  {/* 左列卡片 2 (风险 2) */}
                  <div className="space-y-1.5 pt-3 border-t border-rose-100 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-950">
                      <FileWarning className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                      <span>风险 2：口头催单报单，缺乏审计留痕</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      群内口头催单报单易被刷屏遗漏，且缺乏权限隔离与操作审计，易滋生人情操作与私下协调。
                    </p>
                  </div>
                </div>

                {/* ===== 中间：垂直贯穿 对比 分隔柱 ===== */}
                <div className="shrink-0 w-8 flex flex-col items-center justify-center relative my-2">
                  <div className="w-px flex-1 bg-slate-200" />
                  <div className="my-2 px-2 py-1 bg-slate-900 text-white font-bold text-xs tracking-wider flex items-center justify-center shrink-0 select-none">
                    对比
                  </div>
                  <div className="w-px flex-1 bg-slate-200" />
                </div>

                {/* ===== 右列：治理后 · 系统化收口闭环 ===== */}
                <div className="flex-1 min-w-0 flex flex-col bg-blue-50/30 border-t-2 border-blue-700 p-5 space-y-4">
                  {/* 右列顶部标题栏 */}
                  <div className="flex items-center justify-between pb-3 border-b border-blue-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 shrink-0" />
                      <span className="text-sm font-bold text-blue-950">治理后 · 工单系统收口 (全面受控)</span>
                    </div>
                    <span className="text-xs font-bold text-blue-800 bg-blue-100/70 px-2 py-0.5 font-mono">
                      治理后
                    </span>
                  </div>

                  {/* 右列卡片 1 (成效 1) */}
                  <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-950">
                      <Check className="w-4.5 h-4.5 text-blue-600 shrink-0 stroke-[3]" />
                      <span>成效 1：工单系统收口，敏感数据脱敏隔离</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      关闭所有线下报单群，<strong>12 项业务 100% 迁移至风控工单</strong>。虚拟币地址与流水信息仅限授权角色加密脱敏调阅，杜绝数据外泄。
                    </p>
                  </div>

                  {/* 右列卡片 2 (成效 2) */}
                  <div className="space-y-1.5 pt-3 border-t border-blue-100 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-blue-950">
                      <Check className="w-4.5 h-4.5 text-blue-600 shrink-0 stroke-[3]" />
                      <span>成效 2：标准化审批流，100% 审计存证溯源</span>
                    </div>
                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                      催单、上标与复审全流程嵌入工单流转，实行<strong>分级权限与不可篡改的系统日志审计</strong>，杜绝人情单与沟通遗漏。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 下方：100% 还原 Telegram Desktop 浅色原版客户端历史真实快照 */}
          <div className="bg-white border border-[#e2e8f0] overflow-hidden font-sans">
            {/* macOS 风格顶部窗口栏 */}
            <div className="bg-[#e7e8ea] px-3 py-2 border-b border-[#e2e8f0] flex items-center justify-between text-xs text-slate-700 select-none">
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
              <div className="sm:col-span-4 bg-[#f4f5f5] border-r border-[#e2e8f0] p-3 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* 搜索框 (输入目标账号 qweasd123 进行跨群检索) */}
                  <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-2 border border-[#e2e8f0]">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-normal text-slate-900 text-xs font-mono select-none">
                      qweasd123
                    </span>
                    <span className="ml-auto text-xs text-slate-400 select-none">✕</span>
                  </div>

                  {/* 搜索命中汇总 (跨所有群聊检索) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-normal">
                    <span>找到 4 条相关记录</span>
                    <span className="text-xs text-slate-500">所有历史群聊（跨群搜索）</span>
                  </div>

                  {/* 会话命中列表 (展示在不同业务大群中全部被搜索出该会员明文记录) */}
                  <div className="space-y-1.5">
                    {/* 命中群 1 (当前选中查看的主群) */}
                    <div className="bg-[#e8f2fe] p-2 rounded-lg border border-[#e2e8f0] cursor-pointer space-y-0.5">
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
                        ...帐号: <span className="text-slate-950 font-bold font-mono">qweasd123</span> 不存款 领取身份红利...
                      </p>
                    </div>

                    {/* 命中群 2: 对接群 */}
                    <div className="bg-white p-2 rounded-lg border border-[#e2e8f0] space-y-0.5">
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
                        ...上标复核: <span className="text-slate-950 font-bold font-mono">qweasd123</span> 同网络节点多账号套利...
                      </p>
                    </div>

                    {/* 命中群 3: 异常复核群 */}
                    <div className="bg-white p-2 rounded-lg border border-[#e2e8f0] space-y-0.5">
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
                        ...提款拦截: 帐号 <span className="text-slate-950 font-bold font-mono">qweasd123</span> 虚拟币地址重复...
                      </p>
                    </div>

                    {/* 命中群 4: 客服出款群 */}
                    <div className="bg-white p-2 rounded-lg border border-[#e2e8f0] space-y-0.5">
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
                        ...催单加急: <span className="text-slate-950 font-bold font-mono">qweasd123</span> 会员催促出款...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. 右侧聊天窗口 (经典 TG 浅绿壁纸 + 单条原版真实高危报单气泡) */}
              <div className="sm:col-span-8 flex flex-col justify-between bg-[#a8cf9e] relative border-l border-[#e2e8f0]">
                {/* 群顶部标题栏 */}
                <div className="bg-white px-3 py-2 border-b border-[#e2e8f0] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-xs font-mono">群1</div>
                    <div className="text-xs text-slate-500">466 位成员</div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Search className="w-4 h-4 text-slate-500" />
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
                    <div className="w-7 h-7 rounded-full bg-[#189bb4] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      双
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-xs p-3 max-w-[92%] border border-[#e2e8f0] space-y-1.5">
                      <div className="text-[#189bb4] font-bold text-xs">小双</div>
                      <div className="bg-[#fdf0ee] p-1.5 rounded-sm border border-[#e2e8f0] text-xs text-slate-700 space-y-0.5">
                        <div className="text-[#c0392b] font-bold">群2 业务转发</div>
                        <div className="truncate text-slate-600 font-mono text-xs">https://t.me/c/1182191778/898813 报单研究...</div>
                      </div>
                      <div className="text-xs leading-relaxed text-slate-900 space-y-0.5 font-sans">
                        <div>平台: 1号盘</div>
                        <div>
                          帐号: <span className="font-mono font-bold text-slate-950">qweasd123</span>
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

      {/* 3.2.3 核心流程闭环节点 */}
      <div className="space-y-4">
        <ReportSubsectionHeader title="3.2.3 核心流程闭环节点" />

        <SummaryBox>
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "以[[提款]]为发起点，推动[[审核]]、[[复审]]、[[KYC]]、[[扣款]]、[[禁用]]全面接入系统工单，实现闭环流转与审计留痕。",
            )}
          </p>
        </SummaryBox>

        {/* 核心流程改造节点：极简一条线，提款为发起点，其余节点大对号表明改造完成 */}
        <div className="bg-slate-50/60 p-5 sm:p-7 border-t-2 border-slate-900">
          {/* 流程管道主体：一条线上贯穿 6 个核心节点 */}
          <div className="relative pt-3 pb-2 overflow-x-auto">
            {/* 贯穿全流程的水平连接轴线 */}
            <div className="hidden sm:block absolute top-[36px] left-[8%] right-[8%] h-[3px] bg-slate-900 -z-0" />

            <div className="grid grid-cols-6 gap-2 relative z-10 min-w-[620px] sm:min-w-0">
              {/* 节点 1：提款（发起点，无对号及其他多余信息） */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
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
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    审核
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 3：复审 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    复审
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 4：KYC */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    KYC
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 5：扣款 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    扣款
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>改造完成</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 节点 6：禁用 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center border-4 border-white shadow-sm mb-3.5">
                  <Check className="w-7 h-7 sm:w-9 sm:h-9 stroke-[3.5] text-white" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight block">
                    禁用
                  </span>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700">
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
              <tr className="border-b border-slate-900 bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-2.5 px-3 w-14 font-mono text-center">序号</th>
                <th className="py-2.5 px-3 w-36">流程</th>
                <th className="py-2.5 px-3 w-28 text-center">等级</th>
                <th className="py-2.5 px-3 w-28 text-center">治理模式</th>
                <th className="py-2.5 px-3">治理动作</th>
                <th className="py-2.5 px-3 w-24 text-right">当前状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 border-b border-slate-900 tabular-nums text-sm">
              {governanceItems.map((item) => {
                const isCompleted = item.status === "已处理";
                return (
                  <tr
                    key={item.id}
                    className={!isCompleted ? "bg-amber-50/20" : ""}
                  >
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-500">
                      {item.id}
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-block text-xs sm:text-sm font-medium ${
                          item.riskLevel === "高风险"
                            ? "text-rose-700 font-semibold"
                            : "text-slate-600"
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
                    <td className="py-3 px-3 text-slate-800 leading-relaxed text-sm sm:text-[14.5px] font-normal">
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
