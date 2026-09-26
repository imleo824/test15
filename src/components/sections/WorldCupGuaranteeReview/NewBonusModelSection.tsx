import React from "react";
import { 
  ArrowRight,
  Workflow,
  User,
  Gift,
  Scale
} from "lucide-react";
import { ReportSectionHeader, ReportDimensionCard } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

export const NewBonusModelSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <ReportSectionHeader title="8.4 套利指数模型与机制升级" />

      {/* 核心理念说明：精准结构性调整，发的合理 ≠ 盲目少发 */}
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-4 sm:p-5 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 border border-slate-300">
              核心理念
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              核心本质：精准结构性调整，发的合理 ≠ 盲目少发
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-50 px-2.5 py-0.5 border border-slate-200 self-start sm:self-auto">
            四阶动态决策调配
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-normal">
          “发的合理”绝非简单地一刀切盲目压低红利总额，而是通过套利指数算法输出<strong>【正常 / 少发 / 不发 / 多发】</strong>四大决策建议：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <div className="bg-slate-50 border border-slate-200 p-3 space-y-1.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <span className="font-bold block text-slate-900 text-sm font-mono">【正常】</span>
              <span className="text-[11px] font-mono font-bold text-slate-600 bg-white px-1.5 py-0.5 border border-slate-200">
                放行
              </span>
            </div>
            <div className="text-xs text-slate-700 font-mono font-semibold">指数处于 &lt; 30 区间</div>
            <p className="text-[11px] text-slate-500 pt-0.5 leading-normal">
              合规真实活跃用户，秒级放行入账，保障顺畅体验
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-3 space-y-1.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <span className="font-bold block text-amber-900 text-sm font-mono">【少发】</span>
              <span className="text-[11px] font-mono font-bold text-amber-800 bg-white px-1.5 py-0.5 border border-amber-200">
                降额
              </span>
            </div>
            <div className="text-xs text-slate-700 font-mono font-semibold">指数处于 30~70 区间</div>
            <p className="text-[11px] text-slate-500 pt-0.5 leading-normal">
              存在轻微偏离或争议倾向，按预设比例阶梯压缩额度
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-3 space-y-1.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <span className="font-bold block text-rose-900 text-sm font-mono">【不发】</span>
              <span className="text-[11px] font-mono font-bold text-rose-800 bg-white px-1.5 py-0.5 border border-rose-200">
                阻断
              </span>
            </div>
            <div className="text-xs text-slate-700 font-mono font-semibold">指数处于 ≥ 70 区间</div>
            <p className="text-[11px] text-slate-500 pt-0.5 leading-normal">
              高危黑产或对打套利，系统实时拦截，零容忍直拒
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-3 space-y-1.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <span className="font-bold block text-blue-900 text-sm font-mono">【多发】</span>
              <span className="text-[11px] font-mono font-bold text-blue-800 bg-white px-1.5 py-0.5 border border-blue-200">
                倾斜
              </span>
            </div>
            <div className="text-xs text-slate-700 font-mono font-semibold">高等级且极低风险</div>
            <p className="text-[11px] text-slate-500 pt-0.5 leading-normal">
              高净值优质真实客群，倾斜优质红利，提升留存忠诚度
            </p>
          </div>
        </div>
      </div>

      {/* 核心机制导语：覆盖范围与智能量化 */}
      <SummaryBox variant="module">
        <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
          {highlightNumbers(
            "推行[[套利指数自动化评估与人工复核机制]]，覆盖各类红利发放场景。通过游戏输赢比、存提杠杆等多维数据[[动态计算综合风险分值]]，实现[[分级精细调配与提款环节复核]]，有效防范活动套利漏洞。"
          )}
        </p>
      </SummaryBox>

      {/* 升级前后机制变化对比 */}
      <div className="bg-slate-50 border border-slate-200 p-5 space-y-4">
        <div className="border-b border-slate-200 pb-3 space-y-1.5">
          <span className="text-base font-bold text-slate-900">
            红利风控机制优化前后对比
          </span>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            围绕红利申请与发放流程，从 <span className="font-semibold text-slate-900 font-mono">2025年四季度</span> 开始持续优化，经过三期迭代，逐步实现从“事后离线排查”到“事前事中实时规则校验与分层处置”的转变。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* 对比项 1：红利覆盖率 */}
          <ReportDimensionCard
            title="① 红利覆盖率与纳管范围"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                覆盖范围维度
              </span>
            }
          >
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* 原来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-slate-700 tracking-wider mb-1">
                    原来
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    部分过检（离线漏洞）
                  </span>
                </div>

                {/* 中间 优化升级 */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                  <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                    100%全量覆盖
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                    优化升级
                  </span>
                </div>

                {/* 现在/将来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                    现在
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                    100% 全渠道实时过检
                  </span>
                </div>
              </div>

              {/* 通俗大白话业务场景示例 */}
              <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来仅对特定大额或敏感活动人工抽检，常规返水与自动充惠未设前置防线；现在<strong>不论自动接口还是人工工单</strong>，所有红利发放前 100% 强制调用模型过检，无过检一律不可入账。
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 2：审核对接方式 */}
          <ReportDimensionCard
            title="② 外部对接与决策时效"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                时效链路维度
              </span>
            }
          >
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* 原来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-slate-700 tracking-wider mb-1">
                    原来
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    离线异步排查
                  </span>
                </div>

                {/* 中间 优化升级 */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                  <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                    秒级实时决策
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                    优化升级
                  </span>
                </div>

                {/* 现在/将来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                    现在
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                    在线实时审核 (&lt;1秒)
                  </span>
                </div>
              </div>

              {/* 通俗大白话业务场景示例 */}
              <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来是红利发放后再跑离线脚本，等发现异常时黑产早已套现提款出逃；现在系统在<strong>发放请求发起的毫秒级瞬间</strong>完成特征抽取与算法校验，决策延迟低于 1 秒。
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 3：审核决策机制 */}
          <ReportDimensionCard
            title="③ 算法模型与分级裁决"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                核心决策维度
              </span>
            }
          >
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* 原来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-slate-700 tracking-wider mb-1">
                    原来
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    主观人工经验审批
                  </span>
                </div>

                {/* 中间 优化升级 */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                  <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                    多维套利算法
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                    优化升级
                  </span>
                </div>

                {/* 现在/将来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                    现在
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                    四阶分级动态裁定
                  </span>
                </div>
              </div>

              {/* 通俗大白话业务场景示例 */}
              <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来审批全凭专员肉眼与主观裁量，宽严不一且极易被黑产攻破；现在系统基于<strong>游戏输赢、存提杠杆、行为关联</strong>动态生成套利指数，自动化给出【正常、少发、不发、多发】精细化调配建议。
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 4：异常发放监督 */}
          <ReportDimensionCard
            title="④ 特批兜底与跨环节闭环"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                兜底闭环维度
              </span>
            }
          >
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* 原来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-slate-700 tracking-wider mb-1">
                    原来
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    缺乏留痕与后端联动
                  </span>
                </div>

                {/* 中间 优化升级 */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                  <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                    自动风险标记
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                    优化升级
                  </span>
                </div>

                {/* 现在/将来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                    现在
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                    风险标记+提款联动复核
                  </span>
                </div>
              </div>

              {/* 通俗大白话业务场景示例 */}
              <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来手工派发缺乏系统跟踪，容易出现遗漏；现在如因特殊情况需要人工审批派发，系统会自动附加风险关注标记，提款环节自动进行流水与注单复核，保障资金安全。
              </div>
            </div>
          </ReportDimensionCard>
        </div>
      </div>

      {/* 核心全链路流转机制：参照云盾体系呈现形式 */}
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-4 sm:p-5 space-y-4">
        {/* 标题栏 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Workflow className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                红利风控全链路流转机制
              </h4>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                端到端闭环流转：业务申请提请 ➔ 风控红利审核（四阶穿透把关）➔ 安全发放入账
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 border border-slate-200 self-start sm:self-auto">
            全链路闭环风控体系
          </span>
        </div>

        {/* 核心说明 Note */}
        <SummaryBox variant="note">
          {highlightNumbers(
            "红利风控全链路闭环通过[[“申请节点（工单/接口统一提请）”]]全面前置触发纳管，无缝导入[[“风控红利审核阶段（算法测算 ➔ 分级裁定 ➔ 人工复核 ➔ 闭环兜底）”]]四步全维穿透把关，最终安全抵达[[“发放节点（合规直出、降额限额或静默打标出账联动提款狙击）”]]，杜绝任何黑产脱管套利漏洞。"
          )}
        </SummaryBox>

        {/* 流程主容器：采用 flex-col xl:flex-row 响应式布局，完全参照云盾体系呈现架构 */}
        <div className="flex flex-col xl:flex-row items-stretch justify-between gap-2.5 w-full my-2">
          
          {/* 1. 申请节点 */}
          <div className="w-full xl:w-36 shrink-0 flex flex-col justify-between p-3.5 bg-slate-900 text-white border border-slate-900 space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-200 pb-1.5 border-b border-slate-700/80 shrink-0">
              <User className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span>申请节点</span>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-2 text-xs text-slate-300">
              <div className="bg-slate-800/90 p-2.5 border border-slate-700 space-y-1 text-left">
                <div className="font-bold text-white text-xs">前置统一纳管</div>
                <div className="text-[11px] text-slate-300 leading-normal">
                  全量红利一律前置调用风控模型，未过审严禁直出
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] font-mono text-slate-400 border-t border-slate-700/80 pt-1.5">
              100% 前置过检
            </div>
          </div>

          {/* 连接箭头：申请 -> 风控红利审核 */}
          <div className="flex items-center justify-center shrink-0 px-0.5 py-1 xl:py-0 text-slate-400">
            <ArrowRight className="w-4 h-4 stroke-[2] rotate-90 xl:rotate-0 text-slate-500" />
          </div>

          {/* 2. 核心：风控红利审核阶段 (四阶穿透把关：算法测算、分级裁定、人工复核、闭环兜底) */}
          <div className="flex-1 min-w-0 border border-slate-200 bg-white p-3 space-y-2.5 flex flex-col">
            <div className="bg-slate-900 text-white px-3 py-1.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-slate-200" />
                <span className="font-bold text-xs sm:text-sm tracking-tight">风控红利审核阶段</span>
              </div>
              <span className="text-xs bg-slate-800 text-slate-200 px-2 py-0.5 font-mono font-bold whitespace-nowrap border border-slate-700">
                4 步全维穿透把关
              </span>
            </div>

            {/* 4 个步骤横向卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2.5 flex-1 min-h-0">
              
              {/* 步骤 1：算法测算 */}
              <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="report-sequence-badge text-xs">1</span>
                    <span>算法测算</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    0~100量化分
                  </span>
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-between text-xs">
                  <div className="bg-white border border-slate-300 text-slate-900 font-mono text-[11px] p-2 text-center font-bold tracking-tight">
                    套利指数 = f(等级, 输赢, 存杠, 盈杠, 行为, 关联)
                  </div>

                  <div className="bg-white border border-slate-200 p-2 space-y-1 text-xs">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="font-bold text-slate-800">价值基线</span>
                      <span className="text-slate-600 font-mono text-[11px]">会员等级 / 累计盈亏</span>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="font-bold text-slate-800">杠杆偏离</span>
                      <span className="text-slate-600 font-mono text-[11px]">存款杠杆 / 盈利贡献</span>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="font-bold text-slate-800">异常行为</span>
                      <span className="text-slate-600 font-mono text-[11px]">全包对打 / 极速洗水</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">跨站聚合</span>
                      <span className="text-slate-600 font-mono text-[11px]">同设备 / 关联穿透</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-tight">
                    基于多维行为特征数据实时计算，毫秒级输出综合套利偏离分。
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-1 text-center text-[11px] font-mono font-bold text-slate-700">
                  套利指数实时测算
                </div>
              </div>

              {/* 步骤 2：分级裁定 */}
              <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="report-sequence-badge text-xs">2</span>
                    <span>分级裁定</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    四阶动态决策
                  </span>
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-between text-xs">
                  <div className="p-1.5 border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                      <span className="font-bold text-slate-900">【正常】极速放行</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-700 font-bold">0~29 分</span>
                  </div>

                  <div className="p-1.5 border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0"></span>
                      <span className="font-bold text-amber-900">【少发】降额压缩</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-700 font-bold">30~69 分</span>
                  </div>

                  <div className="p-1.5 border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                      <span className="font-bold text-rose-900">【不发】阻断拦截</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-700 font-bold">70~100 分</span>
                  </div>

                  <div className="p-1.5 border border-slate-200 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0"></span>
                      <span className="font-bold text-blue-900">【多发】激励倾斜</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-700 font-bold">优质合规</span>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-tight">
                    资源精准倾斜高净值真实客群，压减黑产无效成本。
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-1 text-center text-[11px] font-mono font-bold text-slate-700">
                  四阶调配 · 精准控本提效
                </div>
              </div>

              {/* 步骤 3：人工复核 */}
              <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="report-sequence-badge text-xs">3</span>
                    <span>人工复核</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    权责留痕把关
                  </span>
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-between text-xs">
                  <div className="bg-white border border-slate-200 p-2 space-y-1">
                    <div className="font-bold text-slate-800 text-xs">介入触发条件</div>
                    <div className="text-[11px] text-slate-600 leading-normal">
                      争议区间 (30~69分) 申请原额、高等级客诉复议或超限特邀提请
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-2 space-y-1">
                    <div className="font-bold text-slate-800 text-xs">处置路径</div>
                    <div className="text-[11px] text-slate-600 space-y-0.5 leading-normal">
                      <div>• <strong className="text-slate-900">核准/驳回：</strong>采纳模型意见，直接阻断发放</div>
                      <div>• <strong className="text-slate-900">强行特批：</strong>业务强制放行，工单留痕触发下步</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-tight">
                    严禁无痕放行，每一笔特批强制留存工单流水与审核人工号。
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-1 text-center text-[11px] font-mono font-bold text-slate-700">
                  风控复核 · 权责留痕审计
                </div>
              </div>

              {/* 步骤 4：闭环兜底 */}
              <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="report-sequence-badge text-xs">4</span>
                    <span>闭环兜底</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    隐性打标协同
                  </span>
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-between text-xs">
                  <div className="bg-white border border-slate-200 p-2 space-y-1">
                    <div className="font-bold text-slate-800 text-xs">触发场景</div>
                    <div className="text-[11px] text-slate-600 leading-normal">
                      模型判定建议【少发/不发】，经人工审核强行特批放行仍出账
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-2 space-y-1">
                    <div className="font-bold text-slate-800 text-xs">前/后端协同</div>
                    <div className="text-[11px] text-slate-600 space-y-0.5 leading-normal">
                      <div>• <strong className="text-slate-900">前端策略：</strong>红利正常到账，不发生客诉碰撞</div>
                      <div>• <strong className="text-slate-900">后端闭环：</strong>自动加注高危标签，提款加倍狙击</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-tight">
                    兼顾业务前台体验与资金风控底线，杜绝任何套利出逃漏洞。
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-1 text-center text-[11px] font-mono font-bold text-slate-700">
                  静默标记 ➔ 提款精准狙击
                </div>
              </div>

            </div>
          </div>

          {/* 连接箭头：风控红利审核 -> 发放 */}
          <div className="flex items-center justify-center shrink-0 px-0.5 py-1 xl:py-0 text-slate-400">
            <ArrowRight className="w-4 h-4 stroke-[2] rotate-90 xl:rotate-0 text-slate-500" />
          </div>

          {/* 3. 发放节点 */}
          <div className="w-full xl:w-36 shrink-0 flex flex-col justify-between p-3.5 bg-slate-900 text-white border border-slate-900 space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-200 pb-1.5 border-b border-slate-700/80 shrink-0">
              <Gift className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span>发放节点</span>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-2 text-xs text-slate-300">
              <div className="bg-slate-800/90 p-2.5 border border-slate-700 space-y-1 text-left">
                <div className="font-bold text-white text-xs">合规极速直出</div>
                <div className="text-[11px] text-slate-300 leading-normal">
                  正常放行与多发激励红利安全直发，秒级到账保障体验
                </div>
              </div>

              <div className="bg-slate-800/90 p-2.5 border border-slate-700 space-y-1 text-left">
                <div className="font-bold text-white text-xs">降额/特批出账</div>
                <div className="text-[11px] text-slate-300 leading-normal">
                  降额出账或静默加标发放，紧密联动提款出款严密排查
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] font-mono text-slate-400 border-t border-slate-700/80 pt-1.5">
              安全出账 · 闭环留痕
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewBonusModelSection;



