import React from "react";
import { Check, Clock, AlertTriangle, ShieldAlert, FileWarning, ShieldCheck } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";
import {
  ReportBadge,
  ReportCompareBlock,
  ReportStepPipeline,
  ReportSubsectionHeader,
  ReportTableFrame,
} from "../../ReportSections";

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
      actionDetails: "入款真实性与到账状态由支付系统自动校验，取消风控人工找财务二次核实。",
    },
    {
      id: "02",
      name: "大额代存核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代理大额代存真实性在前置入款与代理端核验，取消风控线下人工核实。",
    },
    {
      id: "03",
      name: "代存性质核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "统一代理额度代存与系统存款判定标准，取消人工拉群核实冗余环节。",
    },
    {
      id: "04",
      name: "红利审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全量迁移至后台工单，名单与额度系统+人工校验。",
    },
    {
      id: "05",
      name: "审核扣款流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由系统接口自动触发，禁止群内人工报单。",
    },
    {
      id: "06",
      name: "审核复审流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策嵌入后台复审流，群内零敏感数据流转，100% 审计留痕。",
    },
    {
      id: "07",
      name: "上标下标流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "会员上下标对接全量改为后台一键工单审批，系统自动同步生效。",
    },
    {
      id: "08",
      name: "备注审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别高危标签并在界面强制高亮提醒，消除人工漏看漏判。",
    },
    {
      id: "09",
      name: "资料审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "实行多节点背靠背交叉核验，实名证件及隐私资料由 2~3 人协同审批。",
    },
    {
      id: "10",
      name: "会员禁用流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "高危账号封禁与限制接入后台多人审批流，杜绝单人随意封号。",
    },
    {
      id: "11",
      name: "场馆解锁流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "场馆内嵌游戏输光上线系统自动解锁机制，减少风控 15%~20% 无效咨询。",
    },
  ];

  return (
    <div id="section-tg-governance" className="space-y-12 lg:space-y-16">
      {/* 3.2.1 线下离线流程治理 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSubsectionHeader title="3.2.1 线下离线流程治理" />

        {/* 关键治理准则：警惕“形式化工单化”——源头消除优先于工单流转 */}
        <div className="bg-slate-50 border-l-2 border-slate-800 p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
            <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
              治理准则 · 警惕“形式化工单化”（源头消除优先于工单流转）
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              源头能消除的业务，坚决不包装为工单
            </span>
          </div>
          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
            推进线下流程向系统化工单收口过程中，<strong>严防将本可通过系统自动化解决的诉求形式化包装为内部工单</strong>。凡<strong>前端可自主闭环</strong>或<strong>底层系统可根治</strong>的诉求，坚决<strong>从源头彻底消除</strong>；确需人工介入的诉求，<strong>支持用户端自主发起并直连路由至承接部门</strong>，<strong>减少多重冗余角色中转</strong>，实现极简高效流转。
          </p>
        </div>

        {/* 治理准则落地典型场景对比 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-950 text-sm sm:text-base">
                案例 1：体育内嵌玩非体育输光解锁
              </span>
              <ReportBadge tone="green" className="text-xs">已解决</ReportBadge>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed flex-1">
              <p><strong className="text-slate-900">传统弊端：</strong>内嵌游戏输光未自动解锁，导致频繁咨询与人工介入；</p>
              <p><strong className="text-slate-900">源头治理：</strong>底层系统自动识别输光状态并即时解锁，<strong>减少风控约 15%~20% 无效流转</strong>。</p>
            </div>
          </div>

          <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-950 text-sm sm:text-base">
                案例 2：提款流水咨询与校准
              </span>
              <ReportBadge tone="amber" className="text-xs">待解决</ReportBadge>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed flex-1">
              <p><strong className="text-slate-900">传统弊端：</strong>系统流水计算不准引发频繁咨询，客服转提工单复核；</p>
              <p><strong className="text-slate-900">源头治理：</strong>校准流水计算，直接消除咨询源头，<strong>减少风控约 30% 无效咨询与流转</strong>。</p>
            </div>
          </div>
        </div>

        <SummaryBox className="space-y-2">
          <p className="text-sm sm:text-[15.5px] text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "基于治理准则，将全部离线工作对接按[[非必要群聊]]、[[日常沟通群]]、[[高风险审核业务]]与[[低风险咨询业务]]四类分级处置，全面落实解散清理、分级控权与系统工单收口。",
            )}
          </p>
        </SummaryBox>

        {/* 3.2.1 分级治理架构：4 类对接分级处置 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {/* 第 1 列：非必要群聊排查 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    非必要群聊排查
                  </h4>
                </div>
                <ReportBadge tone="green" className="text-xs">
                  100% 已清零
                </ReportBadge>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  排查无实际业务支撑、项目已结束、职责重叠或系统可替代的对接群。
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                <strong className="text-slate-950 font-bold">清零冗余线下对接群</strong>，消除无痕操作漏洞与暴露面。
              </p>
            </div>
          </div>

          {/* 第 2 列：日常沟通讨论群 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    日常沟通讨论群
                  </h4>
                </div>
                <ReportBadge tone="blue" className="text-xs">
                  100% 已收紧
                </ReportBadge>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  仅保留核心业务对接人，严格管控名单与权限，仅限事务同步与日常讨论。
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                限制进出权限，<strong className="text-slate-950 font-bold">严禁流转任何风控单据</strong>，杜绝无痕业务操作。
              </p>
            </div>
          </div>

          {/* 第 3 列：高风险审核业务 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    高风险审核业务
                  </h4>
                </div>
                <ReportBadge tone="green" className="text-xs">
                  100% 已收口
                </ReportBadge>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  涉及上标、备注、复审、扣款、禁用、红利、资料等核心敏感审核操作。
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                全量迁移至后台系统工单与标准 API，全流程留痕且强制复核。
              </p>
            </div>
          </div>

          {/* 第 4 列：低风险咨询业务 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    低风险咨询业务
                  </h4>
                </div>
                <ReportBadge tone="amber" className="text-xs">
                  待协同切换
                </ReportBadge>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  不含敏感数据的常规问询、催促与答疑等轻量状态核验。
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                <strong className="text-slate-950 font-bold">协同对接部门工单就绪后统一切换</strong>，闭环后全量注销。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2.2 线下群聊与系统工单流转对比 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSubsectionHeader title="3.2.2 线下群聊与系统工单流转对比" />

        <SummaryBox>
          <p className="text-sm sm:text-[15.5px] text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "以真实报单跨群检索泄露为例，全面对比[[线下群明文裸露、口头催单无痕]]与[[系统工单脱敏流转、100% 审计存证]]，彻底阻断敏感数据外泄风险。"
            )}
          </p>
        </SummaryBox>

        {/* 规范的治理前后双列对比（对标最佳实践，无多层边框嵌套） */}
        <ReportCompareBlock
          beforeTag="治理前 · 隐患暴露"
          beforeTitle="线下群聊明文操作（传统弊端）"
          beforeContent={
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>风险 1：跨群检索暴露，敏感记录缺乏隔离</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  在通讯工具中全局搜索任一会员账号（如 <span className="font-mono font-bold text-slate-900">qweasd123</span>），该账号在所有历史群聊中的交互记录一览无余，跨群暴露无隔离。
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                  <FileWarning className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>风险 2：敏感信息明文转发，无访问控权</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  会员提款虚拟币地址（如 <code className="font-mono text-[11px] bg-slate-200/70 px-1 py-0.5 text-slate-800">TX8P9qJeKQxG...</code>）、套利标记、红利领取等高危数据在群内直接明文流转，极易被批量截屏与外泄。
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>风险 3：口头催单报单，缺乏审计留痕</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  群内口头报单催单易被刷屏遗漏，且缺乏权限隔离与操作审计，易滋生人情操作与私下协调漏洞。
                </p>
              </div>
            </div>
          }
          afterTag="治理后 · 全面受控"
          afterTitle="风控工单系统闭环（治理成效）"
          afterContent={
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-950 text-sm">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>成效 1：工单系统收口，敏感数据脱敏隔离</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  关闭所有线下报单群，<strong>12 项业务 100% 迁移至风控工单</strong>。仅限授权在册角色按需加密调阅，数据不落本地。
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-950 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>成效 2：关键字段全量脱敏，单项调阅留痕</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  虚拟币地址、流水与证件信息在前端界面默认<strong>全掩码脱敏</strong>；单项解密须经授权审批，调阅动作实时写入安全审计日志。
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-950 text-sm">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>成效 3：标准化审批流，100% 审计存证溯源</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  催单、上标与复审全流程嵌入工单流转，实行<strong>分级权限与不可篡改的系统日志审计</strong>，彻底杜绝人情单与沟通遗漏。
                </p>
              </div>
            </div>
          }
        />
      </div>

      {/* 3.2.3 核心流程闭环节点 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSubsectionHeader title="3.2.3 高风险审核业务" />

        <SummaryBox>
          <p className="text-sm sm:text-[15.5px] text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "以[[提款]]为发起点，推动[[审核]]、[[复审]]、[[KYC]]、[[扣款]]、[[禁用]]全面从离线群聊切换至风控工单，实现敏感信息保护与 100% 审计留痕。",
            )}
          </p>
        </SummaryBox>

        {/* 核心流程改造管道：全局复用 ReportStepPipeline */}
        <ReportStepPipeline
          columns={6}
          steps={[
            { index: 1, title: "提款", subtitle: "业务发起点", status: "触发源", statusType: "neutral" },
            { index: 2, title: "审核", subtitle: "工单初审", status: "改造完成", statusType: "success" },
            { index: 3, title: "复审", subtitle: "关键决策", status: "改造完成", statusType: "success" },
            { index: 4, title: "KYC", subtitle: "身份核验", status: "改造完成", statusType: "success" },
            { index: 5, title: "扣款", subtitle: "系统接口", status: "改造完成", statusType: "success" },
            { index: 6, title: "禁用", subtitle: "多级审批", status: "改造完成", statusType: "success" },
          ]}
        />

        <ReportTableFrame>
          <table className="w-full text-left border-collapse report-dense-table">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-2.5 px-3 w-14 font-mono text-center">序号</th>
                <th className="py-2.5 px-3 w-36">流程</th>
                <th className="py-2.5 px-3 w-28 text-center">等级</th>
                <th className="py-2.5 px-3 w-28 text-center">治理模式</th>
                <th className="py-2.5 px-3">治理动作</th>
                <th className="py-2.5 px-3 w-24 text-right">当前状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 border-b border-slate-200 tabular-nums text-sm">
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
