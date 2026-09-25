import React from "react";
import {
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  RotateCcw,
  User,
  Scale,
  Users
} from "lucide-react";
import {
  ReportDimensionCard,
  ReportSectionHeader
} from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";
import { SmartDispatchOrderStructure } from "./SmartDispatchOrderStructure";

export const SystemAuditEvolutionSection: React.FC = () => {
  return (
    <div id="section-system-audit-evolution" className="space-y-8">
      {/* 6.1 审单模式翻转 */}
      <div className="space-y-4">
        <ReportSectionHeader title="6.1 审单模式演进" />

        {/* 统一文字说明：一句话总结 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "从 [[2025年四季度]] 开始规划，分步、拆期推进，至 [[2026年三季度]] 逐步完成了风控审核流程优化。审单模式由“人工为主”向[[“系统自动为主、人工复核为辅”]]转变：系统审核占比从 [[45.0%]] 提升至 [[80.0%]]（人工审核从 [[55.0%]] 降至 [[20.0%]]），带来等效人力节省 [[63.6%]]（相当于减少 46 名人工审单负荷）与出款时效提速 [[87.0%]]（由 18.5分 缩短至 2.4分）两大实际成效。"
          )}
        </SummaryBox>

        {/* 审单模式结构翻转 看板 */}
        <div className="pt-2">
          <div className="p-5 bg-slate-50 border border-slate-200/80 space-y-4">
            
            {/* 连续流向指向卡：统一向心对比结构（45% ➔ 80% 与 55% ➔ 20%） */}
            <div className="bg-white p-4 sm:p-5 border border-slate-200 space-y-4">
              {/* 行 1：系统审核演进（45.0% ➔ 80.0%） */}
              <div className="border border-slate-200 bg-slate-50/50 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                {/* 原来：45.0% */}
                <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 tracking-wider">原来（基线）</span>
                    <span className="text-sm font-bold text-slate-900">系统审核占比</span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">45.0</span>
                    <span className="text-sm font-bold text-slate-700">%</span>
                  </div>
                </div>

                {/* 中间指向与变化数字：系统 +35.0% */}
                <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1 md:py-0">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-tight border border-slate-800">
                    <span>系统占比 +35.0%</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* 现在：80.0% */}
                <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3 border border-blue-200 w-full md:w-auto">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">80.0</span>
                    <span className="text-sm font-bold text-blue-900">%</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-blue-900 tracking-wider">现在（系统主导）</span>
                    <span className="text-sm font-bold text-blue-950">系统审核占比</span>
                  </div>
                </div>
              </div>

              {/* 行 2：人工审核演进（55.0% ➔ 20.0%） */}
              <div className="border border-slate-200 bg-slate-50/50 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                {/* 原来：55.0% */}
                <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 tracking-wider">原来（基线）</span>
                    <span className="text-sm font-bold text-slate-900">人工审核占比</span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">55.0</span>
                    <span className="text-sm font-bold text-slate-700">%</span>
                  </div>
                </div>

                {/* 中间指向与变化数字：人工 -35.0% */}
                <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1 md:py-0">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-tight border border-slate-800">
                    <span>人工占比 -35.0%</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>

                {/* 现在：20.0% */}
                <div className="flex-1 flex items-center justify-between bg-slate-100 px-4 sm:px-5 py-3 border border-slate-300 w-full md:w-auto">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">20.0</span>
                    <span className="text-sm font-bold text-slate-700">%</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xs font-bold text-slate-900 tracking-wider">现在（人工兜底）</span>
                    <span className="text-sm font-bold text-slate-950">人工审核占比</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.2 带来核心收益 */}
      <div className="space-y-4">
        <ReportSectionHeader title="6.2 带来核心收益" />

        {/* 核心收益一句话说明 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "智能化风控升级带来[[人效与时效双重大幅突破]]——相当于直接[[替代 46 名审核人力（人力消耗降低 67.6%）]]，并驱动订单平均到账耗时从 [[18.5 分钟缩短至 2.4 分钟（审核时效提速 87.0%）]]。"
          )}
        </SummaryBox>

        {/* 2 个衍生受益指标卡片阵列（单列布局：一行一个） */}
        <div className="grid grid-cols-1 gap-4">
          {/* 受益 1：替代人力规模（审核人力当量换算） */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2">
                <span>① 替代人力规模</span>
              </div>
            }
          >
            {/* 统一通用向心对比结构 */}
            <div className="border border-slate-200 bg-slate-50/50 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 my-1">
              {/* 原来：68 人 */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">原来（需人工审单）</span>
                  <span className="text-sm font-bold text-slate-900">审核人力消耗</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">68</span>
                  <span className="text-sm font-bold text-slate-700">人</span>
                </div>
              </div>

              {/* 中间指向与变化数字：-46 人 (-67.6%) */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1 md:py-0">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-tight border border-slate-800">
                  <span>-46 人 (-67.6%)</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>

              {/* 现在：22 人 */}
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">22</span>
                  <span className="text-sm font-bold text-blue-900">人</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">现在（系统替代后）</span>
                  <span className="text-sm font-bold text-blue-950">审核人力消耗</span>
                </div>
              </div>
            </div>

            {/* 核心解释说明 */}
            <div className="pt-2 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed border-t border-slate-200 flex flex-col gap-1.5 mt-2">
              <div>• <strong className="text-slate-900">可省多少人力：</strong>系统全自动出单直出率大幅提升，<strong className="text-slate-900">相当于直接替代了 46 名人工审单员的审核工作量</strong>（人工审核需求从 68人 压减至 22人，审核人力消耗降低 67.6%）。</div>
              <div>• <strong className="text-slate-900">提升人均效能：</strong>将系统自动化出单换算为人力当量后，人均月审单工作量相当于由 2.35万单 提升至 10.0万单/人（等效审核效率提速 4.25倍）。</div>
            </div>
          </ReportDimensionCard>

          {/* 受益 2：提升审核时效 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2">
                <span>② 提升审核时效</span>
              </div>
            }
          >
            {/* 统一通用向心对比结构 */}
            <div className="border border-slate-200 bg-slate-50/50 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 my-1">
              {/* 原来：18.5 分钟 */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm font-bold text-slate-900">平均到账耗时</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">18.5</span>
                  <span className="text-sm font-bold text-slate-700">分</span>
                </div>
              </div>

              {/* 中间指向与变化数字：-16.1 分 (-87.0%) */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1 md:py-0">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-tight border border-slate-800">
                  <span>-16.1 分 (-87.0%)</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>

              {/* 现在：2.4 分钟 */}
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">2.4</span>
                  <span className="text-sm font-bold text-blue-900">分</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">现在（秒级放行）</span>
                  <span className="text-sm font-bold text-blue-950">平均到账耗时</span>
                </div>
              </div>
            </div>

            {/* 核心解释说明 */}
            <div className="pt-2 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed border-t border-slate-200 flex flex-col gap-1.5 mt-2">
              <div>• <strong className="text-slate-900">系统秒级直出：</strong>80.0% 订单由引擎 1.8 秒全自动放行直出，平均到账耗时由 18.5 分钟骤降至 2.4 分钟。</div>
              <div>• <strong className="text-slate-900">高峰排队消融：</strong>比赛高峰排队积压率由 42.6% 降至 1.2%，出款客诉率由 8.4% 压降至 0.9%，大客户复充提升 18.2%。</div>
            </div>
          </ReportDimensionCard>
        </div>

        {/* 核心收益数据佐证：订单结构图表 */}
        <div className="pt-2">
          <SmartDispatchOrderStructure />
        </div>
      </div>

      {/* 6.3 智能风控体系架构 */}
      <div id="section-cloud-shield-system" className="space-y-4">
        <ReportSectionHeader title="6.3 云盾风控体系" />

        {/* 机制与支撑说明 */}
          <div className="p-4 bg-slate-50 border border-slate-200 border-l-4 border-l-blue-700 text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            <strong>支撑机制：</strong>前述审核模式优化由云盾风控系统支持。通过 <strong>策略矩阵校验 ➔ 风险评分 ➔ 动态决策 ➔ 效果反馈</strong> 四个环节，明确系统自动放行与人工复审的分工边界，支撑 80.0% 自动化放行目标。
          </div>

          {/* 关键能力对比：原来 与 现在 */}
          <div className="bg-slate-50 border border-slate-200 p-5 space-y-4">
            <div className="border-b border-slate-200 pb-3 space-y-1.5">
              <span className="text-base font-bold text-slate-900">
                关键机制优化前后对比
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                从 <span className="font-semibold text-slate-900 font-mono">2025年四季度</span> 开始规划，分步推进，至 <span className="font-semibold text-slate-900 font-mono">2026年三季度</span> 逐步完成了风控审核机制的全面优化。
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* 对比项 1：套利策略 */}
              <ReportDimensionCard
                title="① 套利与对冲防御策略"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    策略矩阵维度
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
                        无套利策略
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        +29 项套利规则
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                        补充套利策略
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                    <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来是盈利 &gt; 5,000 就一刀切转人工审核；现在系统额外自动识别<strong>是否全包、打水、多号关联、跨场馆对打</strong>等套利行为，精准拦截套利，正常玩家极速放行。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 2：系统接口直连 */}
              <ReportDimensionCard
                title="② 外部数据联动与底层基建"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    底层基建维度
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
                        无系统接口直连
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        毫秒级直连
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                        引入系统接口直连
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                    <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来审核需要专员手动切换到各个三方游戏场馆和支付后台逐笔查单；现在后台与各场馆及支付系统<strong>接口毫秒级直连</strong>，注单与资金流水全由系统自动秒级拉取比对。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 3：风险评分 */}
              <ReportDimensionCard
                title="③ 智能决策模型与动态分流"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    量化分流维度
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
                        无风险评分
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        动态量化分值
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                        引入风险评分
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                    <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来新老用户全凭审核专员经验主观判定，尺度易漂移；现在系统结合历史行为特征<strong>实时计算动态风险分</strong>，低风险单系统秒级自动放行，高风险单才精准触发人工复核。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 4：智能匹配分单 */}
              <ReportDimensionCard
                title="④ 智能匹配分单与派单机制"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    派单调度维度
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
                        简单轮询
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        多因子匹配
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                        多因子智能匹配
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                    <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来工单像发扑克牌一样按顺序机械式平均分配；现在系统根据<strong>工单风险等级、业务类型与审核员专长技能</strong>智能派单（如复杂的体育套利单直派资深专家，新手只处理基础常规单）。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 5：风控工具支持 */}
              <ReportDimensionCard
                title="⑤ 风控工具与审核辅助支持"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    审核工具维度
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
                        传统人工核查
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 rounded bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        一站式工具链
                      </div>
                      <span className="text-xs font-bold tracking-wider text-slate-700 select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-900 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-blue-950 tracking-tight">
                        引入风控工具链
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="pt-2.5 border-t border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-slate-100/70 p-2.5 border border-slate-200">
                    <strong className="text-slate-950 font-bold">【业务场景示例】</strong>原来排查关联异常需要开多个后台网页逐个肉眼核对 IP 与设备；现在系统一键生成<strong>关联图谱与玩家全景画像</strong>，设备共用、同 IP 聚集等异常由系统秒级高亮标记辅助快速决议。
                  </div>
                </div>
              </ReportDimensionCard>
            </div>
          </div>

          {/* 云盾核心全链路闭环流程机制 */}
          <div className="space-y-3 pt-1">
            <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
              <h5 className="text-sm font-black text-slate-900">
                <span>云盾体系</span>
              </h5>
              <span className="text-xs font-mono font-bold text-slate-700">
                拦截 - 复核 - 反馈自进化机制
              </span>
            </div>

            {/* 一句话核心说明 */}
            <SummaryBox variant="note" className="mb-4">
              {highlightNumbers(
                "云盾风控闭环通过[[“系统风控审核（策略校验➔评分计算）”]]精准分流，支撑 [[80% 订单 1.8 秒全自动秒级直出]]，同时针对 [[20% 风险订单由【人工兜底精审】（路由分发➔风控工具）]]高效把关。"
              )}
            </SummaryBox>

            {/* 流程图主容器：采用 flex-col xl:flex-row 响应式布局，保证中间主区域空间充裕 */}
            <div className="flex flex-col xl:flex-row items-stretch justify-between gap-2.5 w-full my-2">
              {/* 1. 提款申请节点 */}
              <div className="w-full xl:w-28 shrink-0 flex flex-col items-center justify-center p-3 bg-slate-900 text-white border border-slate-900 text-center">
                <User className="w-4 h-4 text-slate-300 mb-1" />
                <span className="font-bold text-xs text-white tracking-tight">用户申请</span>
                <span className="text-xs text-slate-400 font-mono mt-0.5">提款提交</span>
              </div>

              {/* 连接箭头：提款申请 -> 审核层 */}
              <div className="flex items-center justify-center shrink-0 px-0.5 py-1 xl:py-0 text-slate-400">
                <ArrowRight className="w-4 h-4 stroke-[2] rotate-90 xl:rotate-0 text-slate-500" />
              </div>

              {/* 2. 核心审核层：系统风控审核 (2列) ➔ 分流处置 (上下2模块)，左右宽度完全一致 (1:1) */}
              <div className="flex-1 min-w-0 flex flex-col xl:flex-row items-stretch gap-2.5">
                {/* 2.1 系统风控审核 (50% 宽度，与右侧保持一致) */}
                <div className="xl:w-1/2 flex-1 border border-slate-200 bg-white p-3 space-y-2 flex flex-col min-w-0">
                  <div className="bg-slate-900 text-white px-3 py-1.5 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-slate-200" />
                      <span className="font-bold text-xs sm:text-sm tracking-tight">1. 系统风控审核</span>
                    </div>
                    <span className="text-xs bg-slate-800 text-slate-200 px-2 py-0.5 font-mono font-bold whitespace-nowrap border border-slate-700">
                      全量 100% 扫描
                    </span>
                  </div>

                  {/* 2列横向排布：1.策略矩阵校验，2.计算风险分数 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    {/* 步骤一：策略矩阵校验 */}
                    <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                        <span className="report-sequence-badge text-xs">1</span>
                        <span>策略矩阵校验</span>
                      </div>

                      <div className="space-y-1.5 text-xs flex-1 flex flex-col justify-between">
                        {/* 防御型规则 */}
                        <div className="bg-white p-2 border border-slate-200 space-y-0.5">
                          <div className="flex items-center justify-between font-bold text-slate-800 text-xs">
                            <span>防御型规则</span>
                            <span className="text-slate-900 font-mono font-bold">29 个</span>
                          </div>
                          <div className="text-xs text-slate-500 leading-tight">
                            模拟器、快进快出、高盈利、倍数异常等
                          </div>
                        </div>

                        {/* 作弊型规则 */}
                        <div className="bg-white p-2 border border-slate-200 space-y-0.5">
                          <div className="flex items-center justify-between font-bold text-slate-800 text-xs">
                            <span>作弊型规则</span>
                            <span className="text-slate-900 font-mono font-bold">10 个</span>
                          </div>
                          <div className="text-xs text-slate-500 leading-tight">
                            棋牌操盘全包对冲、活动特邀超额等
                          </div>
                        </div>

                        {/* 场馆协同 */}
                        <div className="bg-white p-2 border border-slate-200 space-y-0.5">
                          <div className="flex items-center justify-between font-bold text-slate-800 text-xs">
                            <span>场馆协同</span>
                            <span className="text-slate-900 font-mono font-bold">3 个</span>
                          </div>
                          <div className="text-xs text-slate-500 leading-tight">
                            体育/真人/电子风控接口实时对接
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 步骤二：计算风险分数 */}
                    <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                        <span className="report-sequence-badge text-xs">2</span>
                        <span>计算风险分数</span>
                      </div>

                      <div className="bg-white p-2.5 border border-slate-200 flex-1 flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                          <ShieldAlert className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                          <span>特征加权计算风险分</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          综合汇总命中的防御型、作弊型规则特征与场馆协同信号，精准加权计算订单综合风险分值。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 分流连接指向：箭头上 20%，箭头下 80% */}
                <div className="flex xl:flex-col items-center justify-between xl:justify-center gap-2 shrink-0 px-1 py-1 xl:py-0">
                  <div className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 border border-slate-300 whitespace-nowrap">
                    20%
                  </div>
                  <ArrowRight className="w-4 h-4 stroke-[2] rotate-90 xl:rotate-0 text-slate-600" />
                  <div className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 border border-blue-200 whitespace-nowrap">
                    80%
                  </div>
                </div>

                {/* 2.2 处置分流层：上下 2 个模块（网格 2 行强制等高 1:1，高度完全一致） */}
                <div className="xl:w-1/2 flex-1 grid grid-rows-2 gap-2.5 min-w-0">
                  {/* 【上模块】：2A. 人工兜底精审 */}
                  <div className="border border-slate-200 bg-white p-2.5 flex flex-col justify-between space-y-2 min-h-0">
                    <div className="bg-slate-800 text-white px-3 py-1.5 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-200" />
                        <span className="font-bold text-xs sm:text-sm tracking-tight">2A. 人工兜底精审</span>
                      </div>
                      <span className="text-xs bg-slate-900 text-slate-200 px-2 py-0.5 font-mono font-bold whitespace-nowrap border border-slate-700">
                        风险复核
                      </span>
                    </div>

                    {/* 2个横向排布步骤：1.智能分流路由，2.风控工具支持 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 min-h-0">
                      {/* 步骤一：智能分流路由 */}
                      <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-1 justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                          <span className="report-sequence-badge text-xs">1</span>
                          <span>智能分流路由</span>
                        </div>
                        <div className="text-xs text-slate-700 space-y-1 leading-normal flex-1 flex flex-col justify-center">
                          <div>• <strong className="text-slate-900">高等级优先：</strong>高等级会员优先派给专家组</div>
                          <div>• <strong className="text-slate-900">风险分类：</strong>对冲/套利/作弊定点分发</div>
                          <div>• <strong className="text-slate-900">负载均衡：</strong>队列排队与耗时实时监控</div>
                        </div>
                      </div>

                      {/* 步骤二：风控工具支持 */}
                      <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-1 justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                          <span className="report-sequence-badge text-xs">2</span>
                          <span>风控工具支持</span>
                        </div>
                        <div className="text-xs text-slate-700 space-y-1 leading-normal flex-1 flex flex-col justify-center">
                          <div>• <strong className="text-slate-900">多维日志复核：</strong>关联图谱与设备核查</div>
                          <div>• <strong className="text-slate-900">注单明细比对：</strong>流水倍数与对冲分析</div>
                          <div>• <strong className="text-slate-900">终审裁决工具：</strong>快速划扣放行 / 违规关停</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 【下模块】：2B. 系统直接出单放行 (与 2A 完全对称等高) */}
                  <div className="border border-slate-200 bg-white p-2.5 flex flex-col justify-between space-y-2 min-h-0">
                    <div className="bg-slate-900 text-white px-3 py-1.5 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-slate-200" />
                        <span className="font-bold text-xs sm:text-sm tracking-tight">2B. 系统直接出单放行</span>
                      </div>
                      <span className="text-xs bg-slate-800 text-slate-200 px-2 py-0.5 font-mono font-bold whitespace-nowrap border border-slate-700">
                        1.8秒秒级直出
                      </span>
                    </div>

                    {/* 2个横向排布步骤：1.规则引擎放行，2.极致到账体验 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 min-h-0">
                      {/* 步骤一：规则引擎放行 */}
                      <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-1 justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                          <span className="report-sequence-badge text-xs">1</span>
                          <span>规则引擎放行</span>
                        </div>
                        <div className="text-xs text-slate-600 space-y-1 leading-normal flex-1 flex flex-col justify-center">
                          <div>• <strong>自动出款：</strong>1.8 秒全自动秒级直出</div>
                          <div>• <strong>零干预：</strong>全程无须任何人工审查</div>
                          <div>• <strong>高并发：</strong>支持大促赛事无卡顿放行</div>
                        </div>
                      </div>

                      {/* 步骤二：极致到账体验 */}
                      <div className="bg-slate-50/70 border border-slate-200 p-2.5 flex flex-col gap-1 justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">
                          <span className="report-sequence-badge text-xs">2</span>
                          <span>到账体验与效率</span>
                        </div>
                        <div className="text-xs text-slate-600 space-y-1 leading-normal flex-1 flex flex-col justify-center">
                          <div>• <strong>平均到账：</strong>18.5 分钟 ➔ <strong>2.4 分钟</strong></div>
                          <div>• <strong>客诉排队：</strong>投诉率降至 <strong>0.02%</strong></div>
                          <div>• <strong>体验提升：</strong>提款满意度提升 94%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 反向连接箭头：评估反馈 -> 审核层 */}
              <div className="flex items-center justify-center shrink-0 px-0.5 py-1 xl:py-0 text-slate-400">
                <ArrowLeft className="w-4 h-4 stroke-[2] rotate-90 xl:rotate-0 text-slate-500" />
              </div>

              {/* 3. 评估反馈：垂直居中内含块 */}
              <div className="w-full xl:w-40 shrink-0 flex flex-col justify-between p-3 bg-slate-900 text-white border border-slate-900 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 pb-1.5 border-b border-slate-700/80 shrink-0">
                  <RotateCcw className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>评估反馈机制</span>
                </div>

                {/* 垂直居中容器 */}
                <div className="flex-1 flex flex-col justify-center gap-2 text-xs text-slate-300">
                  <div className="bg-slate-800/90 p-2 border border-slate-700 space-y-1">
                    <div className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                      <span className="w-4 h-4 bg-slate-700 text-slate-200 text-xs flex items-center justify-center font-mono font-bold">1</span>
                      <span>召回率回溯</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">还原漏网提单特征，提升拦截覆盖。</p>
                  </div>

                  <div className="bg-slate-800/90 p-2 border border-slate-700 space-y-1">
                    <div className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                      <span className="w-4 h-4 bg-slate-700 text-slate-200 text-xs flex items-center justify-center font-mono font-bold">2</span>
                      <span>命中率回溯</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">精细调优阈值，减少误拦截。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
