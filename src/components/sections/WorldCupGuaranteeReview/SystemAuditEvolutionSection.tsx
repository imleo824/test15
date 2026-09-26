import React from "react";
import {
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  RotateCcw,
  User,
  Scale,
  Calculator,
  UserCheck,
  Users,
  Lock,
  EyeOff,
  Sliders,
  RefreshCw,
  ShieldCheck,
  AlertTriangle
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
      {/* 4.1 审单模式翻转 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.1 审单模式演进" />

        {/* 统一文字说明：一句话总结 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "审单模式由“人工为主”向[[“系统自动为主、人工复核为辅”]]转变：系统审核占比从 [[45.0%]] 提升至 [[80.0%]]（人工审核从 [[55.0%]] 降至 [[20.0%]]），带来等效人力节省 [[63.6%]]（相当于减少 46 名人工审单负荷）与出款时效提速 [[87.0%]]（由 18.5分 缩短至 2.4分）两大实际成效。"
          )}
        </SummaryBox>

        {/* 审单模式结构翻转 看板 */}
        <div className="pt-2">
          {/* 连续流向指向卡：统一向心对比结构（45% ➔ 80% 与 55% ➔ 20%） */}
          <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
            {/* 行 1：系统审核演进（45.0% ➔ 80.0%） */}
            <div className="bg-slate-50/70 p-3.5 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* 原来：45.0% */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3.5 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">系统审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">45.0</span>
                  <span className="text-sm sm:text-base font-bold text-slate-700">%</span>
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
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3.5 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">80.0</span>
                  <span className="text-sm sm:text-base font-bold text-blue-900">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs sm:text-sm font-bold text-blue-900 tracking-wider">现在（系统主导）</span>
                  <span className="text-sm sm:text-base font-bold text-blue-950">系统审核占比</span>
                </div>
              </div>
            </div>

            {/* 行 2：人工审核演进（55.0% ➔ 20.0%） */}
            <div className="bg-slate-50/70 p-3.5 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* 原来：55.0% */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3.5 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">人工审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">55.0</span>
                  <span className="text-sm sm:text-base font-bold text-slate-700">%</span>
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
              <div className="flex-1 flex items-center justify-between bg-slate-100 px-4 sm:px-5 py-3.5 border border-slate-300 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">20.0</span>
                  <span className="text-sm sm:text-base font-bold text-slate-700">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider">现在（人工兜底）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-950">人工审核占比</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2 带来核心收益 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.2 带来核心收益" />

        {/* 核心收益一句话说明 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "系统自动审核大幅提升处理规模与出款时效：系统替代订单规模从 [[200万单]] 扩大至 [[300万单（增加了 100万单）]]，同时将平均到账耗时从 [[18.5 分钟缩短至 2.4 分钟（审核时效提速 87.0%）]]。"
          )}
        </SummaryBox>

        {/* 2 个衍生受益指标卡片阵列（单列布局：一行一个） */}
        <div className="grid grid-cols-1 gap-4">
          {/* 受益 1：替代订单规模 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2">
                <span>① 替代订单规模</span>
              </div>
            }
          >
            {/* 统一通用向心对比结构 */}
            <div className="bg-slate-50/70 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 my-1">
              {/* 原来：200 万单 */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3.5 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">替代订单规模</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">200</span>
                  <span className="text-sm sm:text-base font-bold text-slate-700">万单</span>
                </div>
              </div>

              {/* 中间指向与变化数字：+100万单 (+50.0%) */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1 md:py-0">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-sm tracking-tight border border-slate-800">
                  <span>+100万单 (+50.0%)</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>

              {/* 现在：300 万单 */}
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3.5 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">300</span>
                  <span className="text-sm sm:text-base font-bold text-blue-900">万单</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider">现在（全量开启后）</span>
                  <span className="text-sm sm:text-base font-bold text-blue-950">替代订单规模</span>
                </div>
              </div>
            </div>

            {/* 核心解释说明 */}
            <div className="text-base sm:text-[17.5px] text-slate-800 font-normal leading-[1.75] flex flex-col gap-3 mt-2 bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-950 shrink-0 mt-2.5"></span>
                <div className="text-base sm:text-[17.5px] leading-[1.75]">
                  <strong className="text-slate-950 font-bold text-base sm:text-lg">替代规模跃升：</strong>
                  <span>伴随系统优化与全量开启，云盾系统替代人工审单的业务规模从 </span>
                  <strong className="text-slate-950 font-bold">200万单 提升至 300万单</strong>
                  <span className="text-slate-700">，净增替代了 100万单（规模增幅 +50.0%）。</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-950 shrink-0 mt-2.5"></span>
                <div className="text-base sm:text-[17.5px] leading-[1.75] space-y-2.5 flex-1">
                  <div>
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">减负降本与质量止损：</strong>
                    <span>原外包 </span>
                    <strong className="text-slate-950 font-bold">50万+ 订单被系统替代</strong>
                    <span>，直接</span>
                    <strong className="text-slate-950 font-bold">释放外包 100+ 人力</strong>
                    <span>，外包出错金额实现</span>
                    <strong className="text-slate-950 font-bold">月度止损 50万+ 元</strong>
                    <span>；同时</span>
                    <strong className="text-slate-950 font-bold">总部审单减少 100万+ 单</strong>
                    <span>，显著释放总部审核压力；结合人力削减、差错止损与时效提速，</span>
                    <strong className="text-slate-950 font-bold">全量开启后月度综合收益约 300万/月</strong>。
                  </div>

                  {/* 3 大核心量化维度速览条 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-0.5">
                    <div className="bg-white p-2.5 border border-slate-200 flex flex-col justify-between">
                      <span className="text-xs text-slate-500 font-bold">人力释放</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-lg font-mono font-bold text-slate-950">100+</span>
                        <span className="text-xs text-slate-700 font-bold">人（外包替代）</span>
                      </div>
                      <span className="text-xs text-slate-600 mt-0.5">总部单量减少 100万+</span>
                    </div>

                    <div className="bg-white p-2.5 border border-slate-200 flex flex-col justify-between">
                      <span className="text-xs text-slate-500 font-bold">质量与止损</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-lg font-mono font-bold text-emerald-700">50万+</span>
                        <span className="text-xs text-emerald-800 font-bold">元/月</span>
                      </div>
                      <span className="text-xs text-slate-600 mt-0.5">阻断外包高差错出款</span>
                    </div>

                    <div className="bg-white p-2.5 border border-slate-200 flex flex-col justify-between">
                      <span className="text-xs text-slate-500 font-bold">月度综合收益</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-lg font-mono font-bold text-blue-900">300万</span>
                        <span className="text-xs text-blue-900 font-bold">/月</span>
                      </div>
                      <span className="text-xs text-slate-600 mt-0.5">人力+止损+人效总价值</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 角色订单结构与审核质量趋势（8月日均、9月日均与9月28日-30日对比） */}
            <div className="pt-2">
              <SmartDispatchOrderStructure />
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
            <div className="bg-slate-50/70 p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 my-1">
              {/* 原来：18.5 分钟 */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3.5 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">平均到账耗时</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-950 tracking-tight">18.5</span>
                  <span className="text-sm sm:text-base font-bold text-slate-700">分</span>
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
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3.5 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-blue-950 tracking-tight">2.4</span>
                  <span className="text-sm sm:text-base font-bold text-blue-900">分</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider">现在（秒级放行）</span>
                  <span className="text-sm sm:text-base font-bold text-blue-950">平均到账耗时</span>
                </div>
              </div>
            </div>

            {/* 核心解释说明 */}
            <div className="text-base sm:text-[17.5px] text-slate-800 font-normal leading-[1.75] flex flex-col gap-3 mt-2 bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-950 shrink-0 mt-2.5"></span>
                <div className="text-base sm:text-[17.5px] leading-[1.75]">
                  <strong className="text-slate-950 font-bold text-base sm:text-lg">系统秒级直出：</strong>
                  <strong className="text-slate-950 font-bold">80.0% 订单由引擎 1.8 秒全自动放行直出</strong>，平均到账耗时由 18.5 分钟骤降至 2.4 分钟。
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-slate-950 shrink-0 mt-2.5"></span>
                <div className="text-base sm:text-[17.5px] leading-[1.75]">
                  <strong className="text-slate-950 font-bold text-base sm:text-lg">高峰排队消除：</strong>
                  <span>比赛高峰排队积压率由 42.6% 降至 1.2%，出款客诉率由 8.4% 压降至 0.9%，大客户复充提升 18.2%。</span>
                </div>
              </div>
            </div>
          </ReportDimensionCard>
        </div>
      </div>

      {/* 4.3 智能风控体系架构 */}
      <div id="section-cloud-shield-system" className="space-y-4">
        <ReportSectionHeader title="4.3 云盾风控体系" />

        {/* 机制与支撑说明 */}
          <div className="p-4 bg-slate-50 border-l-4 border-l-blue-700 text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            <strong>支撑机制：</strong>前述审核模式优化由云盾风控系统支持。通过 <strong>策略矩阵校验 ➔ 风险评分 ➔ 动态决策 ➔ 效果反馈</strong> 四个环节，明确系统自动放行与人工复审的分工边界，支撑 80.0% 自动化放行目标。
          </div>

          {/* 关键能力对比：原来 与 现在 */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <span className="text-base font-bold text-slate-900">
                关键机制优化前后对比
              </span>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                从 <span className="font-semibold text-slate-900 font-mono">2025年四季度</span> 规划至 <span className="font-semibold text-slate-900 font-mono">2026年三季度</span> 完成机制全面优化
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
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
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
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来是盈利 &gt; 5,000 就一刀切转人工审核；现在系统额外自动识别<strong>是否全包、打水、多号关联、跨场馆对打</strong>等套利行为，精准拦截套利，正常玩家极速放行。
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
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
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
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来审核需要专员手动切换到各个三方游戏场馆和支付后台逐笔查单；现在后台与各场馆及支付系统<strong>接口毫秒级直连</strong>，注单与资金流水全由系统自动秒级拉取比对。
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
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
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
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来新老用户全凭审核专员经验主观判定，尺度易漂移；现在系统结合历史行为特征<strong>实时计算动态风险分</strong>，低风险单系统秒级自动放行，高风险单才精准触发人工复核。
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
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
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
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来工单像发扑克牌一样按顺序机械式平均分配；现在系统根据<strong>工单风险等级、业务类型与审核员专长技能</strong>智能派单（如复杂的体育套利单直派资深专家，新手只处理基础常规单）。
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
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
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
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来排查关联异常需要开多个后台网页逐个肉眼核对 IP 与设备；现在系统一键生成<strong>关联图谱与玩家全景画像</strong>，设备共用、同 IP 聚集等异常由系统秒级高亮标记辅助快速决议。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 6：跨站关联打通 */}
              <ReportDimensionCard
                title="⑥ 跨站关联识别与协同拦截"
                badge={
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                    跨站协同维度
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
                        无跨站关联能力
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        跨站关联打通
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
                        跨站关联即时识别
                      </span>
                    </div>
                  </div>

                  {/* 通俗大白话示例 */}
                  <div className="text-base sm:text-[17px] text-slate-900 leading-[1.75] font-normal bg-slate-50 p-4 sm:p-5 border-l-4 border-slate-900">
                    <strong className="text-slate-950 font-bold text-base sm:text-lg">【业务场景示例】</strong>原来在<strong>系统审核环节完全不具备跨站关联分析能力</strong>，各站点数据彼此孤立；然而从实盘风控历史数据来看，<strong>存在跨账号/跨站关联且最终被风控拦截处置的比例至少在 50% 以上</strong>，这一能力在系统审核环节的缺位导致了重大防御盲区。现在系统在自动化审核直出前直接实现<strong>跨站关联风险特征实时识别与比对</strong>（涵盖跨站同设备、同资金链路、多站对冲套利等），能够直接识别并拦截具备跨站关联风险的订单，彻底解决了系统审核环节的这一关键缺失。
                  </div>
                </div>
              </ReportDimensionCard>
            </div>
          </div>

          {/* 维度一：云盾体系 · 运行闭环框架（说明框架架构与全链路流转） */}
          <div className="space-y-6 pt-3">
            {/* 头部标题栏 */}
            <div className="border-b-2 border-slate-900 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-slate-900 text-white shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h5 className="text-base sm:text-lg font-bold text-slate-950">
                  云盾体系 · 运行闭环框架
                </h5>
              </div>
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                架构机制 · 端到端全链路闭环
              </span>
            </div>

            {/* 框架说明 */}
            <SummaryBox variant="module">
              {highlightNumbers(
                "云盾系统构建了覆盖[[“1.用户提款申请 ➔ 2.自动化策略扫描 ➔ 3.计算风险分数 ➔ 4.智能双轨分流 ➔ 5.派单动态匹配 ➔ 6.闭环反馈自进化”]]的端到端运行闭环：实现 [[80% 订单 1.8 秒全自动秒级直出]]，大幅缩短出款耗时；同时针对 [[20% 风险订单实施精准阻断与专家动态派单人工精审]]，确保业务合规与资金安全。"
              )}
            </SummaryBox>

            {/* 全链路运转主流程指示条（含 6 ➔ 2 闭环支线） */}
            <div className="bg-slate-900 text-white p-3.5 sm:p-4 border border-slate-800 space-y-2">
              {/* 6 节点网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 items-stretch text-center">
                {/* 节点 1 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">1. 用户提款申请</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 2 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">2. 自动化策略扫描</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 3 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">3. 计算风险分数</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 4 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">4. 智能双轨分流</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 5 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">5. 派单动态匹配</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 6 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-sky-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">6. 闭环反馈自进化</span>
                  </div>
                </div>
              </div>

              {/* 仅保留简洁的 6 ➔ 2 支线回路 */}
              <div className="hidden lg:block relative h-7 pt-1">
                <svg className="w-full h-full" viewBox="0 0 1000 24" preserveAspectRatio="none">
                  {/* 从第6列中心(917)引出，向左折返至第2列中心(250)，向上指向第2步 */}
                  <path
                    d="M 917 0 L 917 12 Q 917 18 905 18 L 262 18 Q 250 18 250 12 L 250 7"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                  />
                  {/* 向上指向第2节点的箭头 */}
                  <polygon points="246,7 254,7 250,1" fill="#38bdf8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[11px] font-mono text-sky-300 bg-slate-900 px-2.5 py-0.5 border border-sky-500/40">
                    ⮐ 闭环反馈支线（反哺策略）
                  </span>
                </div>
              </div>

              {/* 移动端简洁支线文字 */}
              <div className="lg:hidden flex items-center justify-center gap-1.5 text-xs text-sky-300 font-mono pt-1">
                <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                <span>6 ➔ 2 闭环反馈支线（反哺策略）</span>
              </div>
            </div>

            {/* 6 大核心阶段矩阵卡片（与上方 1-6 流程节点严格一一对应） */}
            <div className="space-y-5">
              {/* 阶段 1：对应上方【1. 用户提款申请】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      01
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段一 · 用户提款申请（入站监听与前置上下文组装）
                    </h6>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                    全量 100% 订单实时监听受理
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                      <User className="w-4 h-4 text-slate-800 shrink-0" />
                      <span>1.1 毫秒级入站监听与资格初检</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      用户端发起出款提单后，消息总线毫秒级捕获申请事件；系统在 <strong>30毫秒内</strong> 快速完成账户锁定状态、基础额度上下限与通道可用性等合法性前置初筛。
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                      <ShieldAlert className="w-4 h-4 text-slate-800 shrink-0" />
                      <span>1.2 实时上下文快照动态构建</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      同步拉取提款瞬时终端设备指纹、网络 IP 拓扑、当期有效流水倍数达成度与历史充提沉淀，毫秒级组装为风控标准上下文快照，即刻推入云盾检测流。
                    </p>
                  </div>
                </div>
              </div>

              {/* 阶段 2：对应上方【2. 自动化策略扫描】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      02
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段二 · 自动化策略扫描（42 项策略矩阵多维实时并发校验）
                    </h6>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                    42 项核心规则实时并发
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* 防御型规则 */}
                  <div className="bg-slate-50 p-4 space-y-2 border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm pb-1.5 border-b border-slate-200">
                      <span>防御型规则</span>
                      <span className="font-mono text-slate-950 bg-white px-2 py-0.5 border border-slate-300">29 个</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      涵盖模拟器多开、快进快出套现、异常高盈利倍数、高频提款与黑名单库实时碰撞等基础防护。
                    </p>
                  </div>

                  {/* 作弊型规则 */}
                  <div className="bg-slate-50 p-4 space-y-2 border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm pb-1.5 border-b border-slate-200">
                      <span>作弊型规则</span>
                      <span className="font-mono text-slate-950 bg-white px-2 py-0.5 border border-slate-300">10 个</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      棋牌操盘对打、多账号双向对冲、活动特邀多开冒领、洗水刷量等作弊行为特征矩阵深度穿透。
                    </p>
                  </div>

                  {/* 场馆协同 */}
                  <div className="bg-slate-50 p-4 space-y-2 border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm pb-1.5 border-b border-slate-200">
                      <span>场馆协同</span>
                      <span className="font-mono text-slate-950 bg-white px-2 py-0.5 border border-slate-300">3 个</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      体育、真人、电子等场馆风控接口实时联动，毫秒级跨系统校准注单时序与场馆返奖异常。
                    </p>
                  </div>
                </div>
              </div>

              {/* 阶段 3：对应上方【3. 计算风险分数】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      03
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段三 · 计算风险分数（多维特征加权综合评分引擎）
                    </h6>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                    动态加权量化评分标尺
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                      <Calculator className="w-4 h-4 text-slate-800 shrink-0" />
                      <span>3.1 多维特征加权综合评分</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      汇聚设备环境、行为偏好、注单时序、资金流向及跨站图谱等上百个特征变量，通过评分引擎动态加权，为每笔提款订单输出精准的量化风险综合分值。
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                      <Sliders className="w-4 h-4 text-slate-800 shrink-0" />
                      <span>3.2 刚性分级阈值锚定</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      依据风险分数划定清晰决策区间：<strong>极低风险区间</strong>（满足直出条件，直通自动出款通道）与 <strong>中高风险区间</strong>（触发预警，驱动后续动态派工人工精审）。
                    </p>
                  </div>
                </div>
              </div>

              {/* 阶段 4：对应上方【4. 智能双轨分流】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      04
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段四 · 智能双轨分流（80% 自动化秒级直出放行）
                    </h6>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 border border-emerald-300 self-start sm:self-auto">
                    80% 订单 1.8 秒秒级直出
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                        <span className="font-bold text-base text-slate-950">
                          4.1 规则引擎自动化秒级放行
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5">
                        0 人工干预
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      命中极低风险区间的海量良性订单，直接由规则引擎执行 <strong>1.8 秒全自动直出放行</strong>，全程 <strong>0 人工干预</strong>，支持高峰期万级并发瞬间消化。
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-blue-800 shrink-0" />
                        <span className="font-bold text-base text-slate-950">
                          4.2 出款时效与客诉体验跃升
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5">
                        提速 87.0%
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      平均到账耗时从 18.5 分钟压降至 <strong>2.4 分钟</strong>，高峰排队积压率彻底归零，出款客诉率由 8.4% 压降至 <strong>0.9%</strong>，高价值用户充提体验显著提升。
                    </p>
                  </div>
                </div>
              </div>

              {/* 阶段 5：对应上方【5. 派单动态匹配】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      05
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段五 · 派单动态匹配（20% 风险订单专家动态派发与人工精审）
                    </h6>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                    精准派工 · 工具赋能精审
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-slate-800 shrink-0" />
                        <span className="font-bold text-base text-slate-950">
                          5.1 智能派工与多维动态匹配
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2 py-0.5 border border-slate-300">
                        智能分派
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      转入人工的 20% 订单，依托智能派工算法，根据 <strong>会员 VIP 等级、风险类型标签（套利/对冲/作弊）与审单人员当前负荷及专长权重</strong>，毫秒级动态派发给最适宜的专员或专家组。
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-slate-800 shrink-0" />
                        <span className="font-bold text-base text-slate-950">
                          5.2 工具赋能研判与精准拦截
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2 py-0.5 border border-slate-300">
                        高危精审
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      提供关联图谱、设备核查、注单流水比对等辅助工具；总部订单精减 100万+，外包单量压降至 7.5%，专职人员集中精力攻坚高危欺诈，实现精准拦截与月度止损 50万+ 元。
                    </p>
                  </div>
                </div>
              </div>

              {/* 阶段 6：对应上方【6. 闭环反馈自进化】 */}
              <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      06
                    </span>
                    <h6 className="text-base sm:text-lg font-bold text-slate-950">
                      阶段六 · 闭环反馈自进化（双向评估反馈与动态自进化机制）
                    </h6>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                    周级动态校准 · 策略抗衰减
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* 支柱 1：召回率动态回溯 */}
                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                      <span className="report-sequence-badge text-xs">1</span>
                      <span>召回率动态回溯</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      持续追踪漏网订单与新型作案样本特征，反向闭环填补策略矩阵防御盲区，防止套利模式扩散。
                    </p>
                  </div>

                  {/* 支柱 2：命中率阈值精修 */}
                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                      <span className="report-sequence-badge text-xs">2</span>
                      <span>命中率阈值精修</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      按周微调各规则评分权重与触发阈值，将误拦截率严控在万分级以下，最大化保障良性用户出款体验。
                    </p>
                  </div>

                  {/* 支柱 3：持续对抗推演迭代 */}
                  <div className="bg-slate-50 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                      <span className="report-sequence-badge text-xs">3</span>
                      <span>变异对抗与持续演进</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      灰黑产套利模式持续升级，风控系统保持高度警惕，每周进行实盘推演与算法模型版本更新。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 维度二：云盾体系 · 机制保密与安全防护（说明如何做到保密防逆向） */}
          <div className="space-y-4 pt-6 border-t border-slate-300">
            {/* 头部标题栏 */}
            <div className="border-b-2 border-slate-900 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-slate-900 text-white shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h5 className="text-base sm:text-lg font-bold text-slate-950">
                  云盾体系 · 机制保密与安全防护
                </h5>
              </div>
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                保密机制 · 深度防窥探与防逆向
              </span>
            </div>

            {/* 保密机制说明 */}
            <SummaryBox variant="module">
              {highlightNumbers(
                "为防止底层风控规则被外部对抗与逆向试探，云盾体系通过[[“最小知晓范围、链路环节解耦、百项特征周调、闭环自进化”]]四大核心保密机制，确保策略细节全流程严密受控与动态有效。"
              )}
            </SummaryBox>

            {/* 4 列防线矩阵卡片：去除外层嵌套大边框，采用扁平利落的卡片矩阵 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
              {/* 支柱 1：最小范围知晓与定期归档销毁 */}
              <div className="bg-slate-50 p-5 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    1. 最小知晓与归档销毁
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    所有底层风控规则、策略参数及评分权重严格执行<strong>“最小知晓范围”</strong>控制，严禁全员公示与跨部门扩散；策略版本推移后，历史实验规则与失效参数<strong>定期归档离线并物理销毁</strong>，从源头杜绝策略外泄与逆向分析。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/90">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs sm:text-sm font-mono text-slate-900 font-semibold shadow-xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[11px] font-bold leading-none uppercase tracking-wider">
                      原则
                    </span>
                    <span className="text-slate-900">按需授权 · 生命周期销毁</span>
                  </div>
                </div>
              </div>

              {/* 支柱 2：多环节组合控制与防窥全貌 */}
              <div className="bg-slate-50 p-5 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    2. 多环节组合受控
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    整个体系的运行控制由特征工程、策略校验、风险评分、动态路由及辅助工具等<strong>多环节组合协同而成</strong>；各环节严格权限隔离，<strong>很难单个人看到运行全貌</strong>，极难通过单一行为试探反推整套风控拦截的全局边界。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/90">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs sm:text-sm font-mono text-slate-900 font-semibold shadow-xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[11px] font-bold leading-none uppercase tracking-wider">
                      机制
                    </span>
                    <span className="text-slate-900">链路解耦 · 权限隔离</span>
                  </div>
                </div>
              </div>

              {/* 支柱 3：上百个特征及参数周级别动态调整 */}
              <div className="bg-slate-50 p-5 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    3. 上百特征周级调参
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    云盾体系涵盖设备环境、注单时序、资金流向、行为偏好、跨站图谱等<strong>上百个特征及核心权重参数</strong>；风控策略组结合实盘样本执行<strong>周级别的例行指标校准与动态调参</strong>，打破静态规则规律，使外部对抗者始终面临不确定性。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/90">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs sm:text-sm font-mono text-slate-900 font-semibold shadow-xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[11px] font-bold leading-none uppercase tracking-wider">
                      频率
                    </span>
                    <span className="text-slate-900">100+特征 · 周级动态校准</span>
                  </div>
                </div>
              </div>

              {/* 支柱 4：评估反馈机制与自进化更新迭代 */}
              <div className="bg-slate-50 p-5 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    4. 持续对抗与自进化
                  </span>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    灰黑产<strong>套利模式持续进行变异与升级</strong>，整个云盾体系时刻保持警惕，绝不固步自封。依托召回率与命中率双向闭环回溯，快速捕捉新型变异套利行为，驱动算法模型与拦截规则<strong>持续进行版本演进与更新迭代</strong>。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/90">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs sm:text-sm font-mono text-slate-900 font-semibold shadow-xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[11px] font-bold leading-none uppercase tracking-wider">
                      态势
                    </span>
                    <span className="text-slate-900">时刻警惕 · 闭环迭代更新</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
