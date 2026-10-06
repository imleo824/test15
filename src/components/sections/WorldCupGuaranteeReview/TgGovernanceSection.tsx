import React from "react";
import {
  Check,
  Clock,
  AlertTriangle,
  ShieldAlert,
  Sliders,
  Search,
  X,
  MoreVertical,
} from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";
import {
  ReportBadge,
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
      actionDetails: "入款真实性与到账状态由[[支付系统自动校验]]，取消风控人工找财务二次核实。",
    },
    {
      id: "02",
      name: "大额代存核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "代理大额代存真实性在[[前置入款与代理端核验]]，取消风控线下人工核实。",
    },
    {
      id: "03",
      name: "代存性质核实",
      riskLevel: "低风险",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "统一代理额度代存与系统存款判定标准，[[取消人工拉群核实]]冗余环节。",
    },
    {
      id: "04",
      name: "红利审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "关停线下红利审核，全量迁移至[[后台工单]]，名单与额度系统+人工校验。",
    },
    {
      id: "05",
      name: "审核扣款流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控判定与扣款动作由[[系统接口自动触发]]，禁止群内人工报单。",
    },
    {
      id: "06",
      name: "审核复审流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "核心出款决策嵌入[[后台复审流]]，群内零敏感数据流转，100% [[审计留痕]]。",
    },
    {
      id: "07",
      name: "上标下标流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "会员上下标对接全量改为[[后台一键工单审批]]，系统自动同步生效。",
    },
    {
      id: "08",
      name: "备注审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别高危标签并在界面[[强制高亮提醒]]，消除人工漏看漏判。",
    },
    {
      id: "09",
      name: "资料审核流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "实行多节点[[背靠背交叉核验]]，实名证件及隐私资料由 2~3 人协同审批。",
    },
    {
      id: "10",
      name: "会员禁用流程",
      riskLevel: "高风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "高危账号封禁与限制接入[[后台多人审批流]]，杜绝单人随意封号。",
    },
    {
      id: "11",
      name: "场馆解锁流程",
      riskLevel: "低风险",
      status: "已处理",
      method: "系统替代",
      actionDetails: "场馆内嵌游戏输光上线[[系统自动解锁机制]]，减少风控约 15%~20% 无效咨询。",
    },
  ];

  return (
    <div id="section-tg-governance" className="flex flex-col gap-10 sm:gap-12">
      {/* L2.1 线下离线流程治理 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L2.1 治理准则" />

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
            {highlightNumbers(
              "推进线下流程向系统化工单收口过程中，严格警惕“形式化工单化”。凡前端可自主闭环或底层系统可根治的诉求，坚决落实[[源头彻底消除]]；确需人工介入的诉求，全面推行[[端到端直连路由]]，消除多重冗余中转，实现极简高效流转。"
            )}
          </p>
        </div>

        {/* 治理准则落地典型场景对比 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-950 text-sm sm:text-base">
                案例 1：体育内嵌玩非体育输光解锁
              </span>
              <ReportBadge tone="green" className="text-xs font-mono">已解决</ReportBadge>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed flex-1">
              <p>
                <strong className="text-slate-900 font-bold">传统弊端：</strong>
                {highlightNumbers("内嵌游戏输光未自动解锁，导致频繁咨询与人工介入申请解锁；")}
              </p>
              <p>
                <strong className="text-slate-900 font-bold">源头治理：</strong>
                {highlightNumbers("[[并非为此新建「场馆解锁工单」]]，而是由底层系统自动识别输光状态并即时解锁，从根源彻底消除不该存在的咨询，减少风控约 15%~20% 无效流转。")}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-950 text-sm sm:text-base">
                案例 2：提款流水咨询与校准
              </span>
              <ReportBadge tone="amber" className="text-xs font-mono">待解决</ReportBadge>
            </div>
            <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed flex-1">
              <p>
                <strong className="text-slate-900 font-bold">传统弊端：</strong>
                {highlightNumbers("系统流水计算不准引发频繁咨询，客服被迫转提工单交由人工逐笔复核；")}
              </p>
              <p>
                <strong className="text-slate-900 font-bold">源头治理：</strong>
                {highlightNumbers("[[并非为此新建「流水查询工单」]]，而是直接校准底层流水计算规则并清晰展示，从根源彻底消除不该存在的咨询，减少风控约 30% 无效流转。")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* L2.2 线下离线流程治理分类 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L2.2 治理分类" />

        <SummaryBox className="space-y-2">
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "根据安全治理准则，对全部离线工作对接实施四级分类处置：[[非必要群聊]]坚决清零、[[日常沟通群]]严格控权、[[高风险审核业务]]全量工单收口、[[低风险咨询业务]]系统协同切换，彻底阻断线下无痕流转风险。"
            )}
          </p>
        </SummaryBox>

        {/* 3.2.1 分级治理架构：4 类对接分级处置 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
          {/* 第 1 列：非必要群聊排查 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="pb-2.5 border-b border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    非必要群聊排查
                  </h4>
                </div>
                <div>
                  <ReportBadge tone="green" className="text-xs">
                    100% 已清零
                  </ReportBadge>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {highlightNumbers("排查无实际业务支撑、项目已结束、职责重叠或系统可替代的对接群。")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("[[清零冗余线下对接群 20+]]，消除无痕操作漏洞与暴露面。")}
              </p>
            </div>
          </div>

          {/* 第 2 列：日常沟通讨论群 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="pb-2.5 border-b border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    日常沟通讨论群
                  </h4>
                </div>
                <div>
                  <ReportBadge tone="blue" className="text-xs">
                    100% 已收紧
                  </ReportBadge>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {highlightNumbers("仅保留核心业务对接人，严格管控名单与权限，仅限事务同步与日常讨论。")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("限制进出权限，[[严禁流转任何风控单据]]，杜绝无痕业务操作。")}
              </p>
            </div>
          </div>

          {/* 第 3 列：高风险审核业务 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="pb-2.5 border-b border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    高风险审核业务
                  </h4>
                </div>
                <div>
                  <ReportBadge tone="green" className="text-xs">
                    100% 已收口
                  </ReportBadge>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {highlightNumbers("涉及[[上标、备注、复审、扣款、禁用、红利、资料]]等核心敏感审核操作。")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("[[全量迁移至后台系统工单与标准 API]]，全流程留痕且强制复核。")}
              </p>
            </div>
          </div>

          {/* 第 4 列：低风险咨询业务 */}
          <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-3 h-full">
            <div className="space-y-3">
              <div className="pb-2.5 border-b border-slate-100 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
                    低风险咨询业务
                  </h4>
                </div>
                <div>
                  <ReportBadge tone="amber" className="text-xs">
                    待协同切换
                  </ReportBadge>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  排查范围
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {highlightNumbers("不含敏感数据的常规问询、催促与答疑等轻量状态核验。")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                处置策略与成效
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("[[协同对接部门工单就绪后统一切换]]，闭环后全量注销。")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* L2.3 典型案例 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L2.3 典型案例" />

        <SummaryBox>
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "以真实报单跨群检索泄露为例，全面对比[[线下群明文裸露、口头催单无痕]]与[[系统工单脱敏流转、100% 审计存证]]，彻底阻断敏感数据外泄风险。"
            )}
          </p>
        </SummaryBox>

        {/* 典型案例双列布局：左侧群聊实景还原（占一半），右侧上下堆叠对比（上半传统弊端，下半治理成效） */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* 左半部分：Telegram 线下群聊实景还原 */}
          <div className="xl:col-span-6 flex flex-col h-full">
            <div className="w-full h-full bg-white border border-slate-300 shadow-xs overflow-hidden text-slate-900 font-sans flex flex-col justify-between">
              {/* macOS 顶部窗口控制栏 */}
              <div className="bg-[#242f3d] px-3.5 py-1.5 flex items-center justify-between border-b border-[#17212b] text-white shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-inner" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-inner" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-inner" />
                  <span className="ml-2.5 text-xs font-medium text-slate-300 font-mono">群1 – 示例</span>
                </div>
              </div>

              {/* 主体 2 列架构：左侧全局搜索命中列表 + 右侧群聊真实明文消息视窗 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 flex-1 min-h-0">
                {/* 左侧：全局搜索栏与跨群检索命中结果 */}
                <div className="sm:col-span-5 bg-white border-r border-slate-200 p-2.5 flex flex-col justify-between text-xs space-y-2">
                  <div className="space-y-1.5">
                    {/* 搜索输入框 */}
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        value="asd001"
                        className="w-full bg-slate-100 border border-slate-300 rounded px-2 py-1 text-xs text-slate-900 font-mono font-bold pr-6 focus:outline-none"
                      />
                      <X className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2" />
                    </div>

                    {/* 检索命中统计 */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 pb-1 border-b border-slate-100">
                      <span className="font-bold text-slate-700">9 messages found</span>
                      <span className="font-mono text-slate-400">All chats</span>
                    </div>

                    {/* 搜索命中消息列表 */}
                    <div className="space-y-1">
                      {[
                        { group: "群1", date: "6/26", preview: "专员-B: 📰 平台 : 1 帐号: asd001...", active: true },
                        { group: "群2", date: "9/6", preview: "...: 平台: 1 帐号: asd001 ...", active: false },
                        { group: "群1", date: "8/24", preview: "...: 平台: 1 帐号: asd001 ...", active: false },
                        { group: "群3", date: "4/13", preview: "... 平台 : 4 帐号: asd001 ...", active: false },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`p-1.5 rounded flex items-start gap-2 text-xs transition-colors ${
                            item.active
                              ? "bg-[#3390ec] text-white shadow-xs"
                              : "hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 ${
                              item.active ? "bg-white/20 text-white" : "bg-[#3390ec] text-white"
                            }`}
                          >
                            {item.group}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between leading-tight">
                              <span className="font-bold truncate text-[10px]">👥 {item.group}</span>
                              <span
                                className={`text-[9px] font-mono shrink-0 ml-1 ${
                                  item.active ? "text-blue-100" : "text-slate-400"
                                }`}
                              >
                                {item.date}
                              </span>
                            </div>
                            <div
                              className={`text-[9.5px] truncate mt-0.5 ${
                                item.active ? "text-blue-50 font-medium" : "text-slate-500"
                              }`}
                            >
                              {item.preview}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 text-center py-0.5 border-t border-slate-100 font-mono">
                    ...跨群共 9 条历史报单记录
                  </div>
                </div>

                {/* 右侧：聊天对话主视窗 */}
                <div className="sm:col-span-7 bg-[#8ca37b]/20 flex flex-col justify-between relative bg-[radial-gradient(#6c895c_1px,transparent_1px)] [background-size:16px_16px]">
                  {/* 群聊顶栏 */}
                  <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 border-b border-slate-200 flex items-center justify-between shrink-0">
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">群1</div>
                      <div className="text-[10px] text-slate-500 leading-none mt-0.5">464 位成员</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Search className="w-3.5 h-3.5 cursor-pointer hover:text-slate-800" />
                      <Sliders className="w-3.5 h-3.5 cursor-pointer hover:text-slate-800" />
                      <MoreVertical className="w-3.5 h-3.5 cursor-pointer hover:text-slate-800" />
                    </div>
                  </div>

                  {/* 消息流主区域 */}
                  <div className="p-2.5 sm:p-3 space-y-2 text-xs flex-1 flex flex-col justify-between">
                    {/* 日期分隔线 */}
                    <div className="flex justify-center">
                      <span className="text-slate-500 text-[10px] font-mono font-medium px-2 py-0.5 bg-slate-100 border border-slate-200">
                        2026年6月26日 离线报单留样
                      </span>
                    </div>

                    {/* 核心高危报单明细消息 */}
                    <div className="flex items-start gap-1.5">
                      <div className="w-5 h-5 bg-slate-800 text-white flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">
                        F
                      </div>
                      <div className="bg-white p-2 sm:p-2.5 w-full space-y-1 shadow-2xs border border-slate-200">
                        <div className="text-[10.5px] font-bold text-slate-900 flex items-center justify-between">
                          <span>A001</span>
                          <span className="text-[9.5px] text-slate-500 font-mono font-normal">14:02</span>
                        </div>

                        {/* 报单明文文本 */}
                        <div className="space-y-0.5 font-mono text-[11px] text-slate-900 leading-relaxed bg-slate-50 p-2 rounded border border-slate-200">
                          <div>平台 : 1</div>
                          <div>
                            帐号:{" "}
                            <strong className="font-mono font-bold text-slate-950">
                              asd001
                            </strong>
                          </div>
                          <div>等级: 7</div>
                          <div>上级: leader_001</div>
                          <div>上标/复审:    复审</div>
                          <div className="pt-0.5">
                            <span className="text-slate-700 font-bold">问题描述/截图:</span>
                            <div className="text-slate-800 pl-1.5 mt-0.5 border-l-2 border-slate-300 space-y-0.5 text-[10.5px]">
                              <div>user_test 4 有记录异常游戏  同下注</div>
                              <div>该会员多次异常游戏被处理后 今天继续同赛事下注多局 ，可疑继续电竞异常投注 ，麻烦复审</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右半部分：上下堆叠对比卡片（上：传统弊端，下：治理成效） */}
          <div className="xl:col-span-6 flex flex-col justify-between gap-4 h-full">
            {/* 上半：治理前 · 隐患暴露（传统弊端） */}
            <div className="bg-white border border-slate-200 p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-rose-700 shrink-0"></span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950">
                    线下群聊明文操作（传统弊端）
                  </h4>
                </div>
                <ReportBadge tone="red" className="text-xs font-mono font-medium">
                  治理前 · 隐患暴露
                </ReportBadge>
              </div>

              <div className="space-y-2.5 flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>风险 1：跨群全局检索穿透，敏感记录缺乏隔离</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {highlightNumbers(
                      "在通讯工具中全局搜索任一会员账号（如 asd001），直接搜出跨度从 2025 年 8 月到 2026 年 9 月长达一年多的 9 条历史报单记录，跨群暴露无任何隔离。"
                    )}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>风险 2：口头催单报单，缺乏系统审计留痕</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {highlightNumbers(
                      "群内口头私下催单报单，缺乏标准化系统工单流转与权限管控，极易滋生人情单与操作隐患。"
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* VS 对比转换指示条 */}
            <div className="relative flex items-center justify-center -my-1 py-1 z-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative inline-flex items-center gap-1.5 px-3 py-0.5 bg-slate-900 text-white text-xs font-mono font-bold tracking-wider shadow-2xs border border-slate-800">
                <span>VS</span>
                <span className="text-slate-300 font-normal text-[11px]">对比</span>
              </div>
            </div>

            {/* 下半：治理后 · 全面受控（治理成效） */}
            <div className="bg-white border border-slate-200 p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-emerald-700 shrink-0"></span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950">
                    风控工单系统闭环（治理成效）
                  </h4>
                </div>
                <ReportBadge tone="green" className="text-xs font-mono font-medium">
                  治理后 · 全面受控
                </ReportBadge>
              </div>

              <div className="space-y-2.5 flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-950 text-xs sm:text-sm">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>成效 1：工单系统收口，敏感数据脱敏隔离</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {highlightNumbers(
                      "关闭所有线下非受控报单群，11 项业务 100% [[迁移至风控工单治理闭环]]。严控跨群检索，仅限授权在册角色按需加密调阅，数据不落本地。"
                    )}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-950 text-xs sm:text-sm">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>成效 2：标准化审批流，100% 审计存证溯源</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {highlightNumbers(
                      "催单、上标与复审全流程嵌入工单流转，实行[[分级权限与不可篡改的系统日志审计]]，彻底杜绝人情单与口头操作漏洞。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* L2.4 高风险审核业务 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L2.4 高风险审核业务" />

        <SummaryBox>
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "以提款为发起点，推动审核、复审、KYC、扣款、禁用全面[[由离线群聊切换至风控工单]]，实现敏感数据严密防护与 100% 审计留痕。",
            )}
          </p>
        </SummaryBox>

        {/* 核心全流程改造管道：去除外部边框 */}
        <ReportStepPipeline
          bordered={false}
          columns={6}
          steps={[
            { index: 1, title: "提款", subtitle: "业务发起点", status: "触发源", statusType: "neutral" },
            { index: 2, title: "审核", subtitle: "工单", status: "改造完成", statusType: "success" },
            { index: 3, title: "复审", subtitle: "工单", status: "改造完成", statusType: "success" },
            { index: 4, title: "KYC", subtitle: "工单", status: "改造完成", statusType: "success" },
            { index: 5, title: "扣款", subtitle: "工单", status: "改造完成", statusType: "success" },
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
                      <ReportBadge
                        tone={
                          item.method === "系统替代"
                            ? "blue"
                            : item.method === "脱敏简化"
                            ? "slate"
                            : "amber"
                        }
                        className="text-xs font-mono"
                      >
                        {item.method}
                      </ReportBadge>
                    </td>
                    <td className="py-3 px-3 text-slate-800 leading-relaxed text-sm sm:text-[14.5px] font-normal">
                      {highlightNumbers(item.actionDetails)}
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <ReportBadge
                        tone={isCompleted ? "green" : "amber"}
                        className="text-xs font-mono"
                      >
                        {isCompleted ? (
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        ) : (
                          <Clock className="w-3 h-3 stroke-[2]" />
                        )}
                        <span>{item.status}</span>
                      </ReportBadge>
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
