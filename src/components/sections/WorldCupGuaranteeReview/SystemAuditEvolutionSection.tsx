import React from "react";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  Scale,
  Calculator,
  UserCheck,
  Lock,
  Sliders,
  ShieldCheck,
  Scan,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import {
  ReportDimensionCard,
  ReportSectionHeader,
  ReportSubsectionHeader,
  ReportTableFrame
} from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";
import { SmartDispatchOrderStructure } from "./SmartDispatchOrderStructure";
import { SystemAuditMonthlyTrendChart } from "./SystemAuditMonthlyTrendChart";

export const SystemAuditEvolutionSection: React.FC = () => {
  return (
    <div id="section-system-audit-evolution" className="space-y-18 lg:space-y-22">
      {/* 4.1 审单模式翻转 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSectionHeader title="4.1 审单模式演进" />

        {/* 统一文字说明：一句话总结 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "从 [[25年]] 开始，历经多轮迭代后在 [[26年9月开始灰度验证]]，于 [[9月30日正式全量上线]]，审单模式实现[[系统自动为主、人工兜底为辅]]的[[根本性重构]]：系统审核占比由 [[50.0%]] 跃升至 [[65.0%]]（人工审核压降至 [[35.0%]]，逼近 [[25%]] 安全边界）。"
          )}
        </SummaryBox>

        {/* 审单模式结构翻转 看板 */}
        <div className="space-y-6">
          {/* 审单模式结构翻转：统一向心对比（系统 50%➔65% 与 人工 50%➔35%） */}
          <div className="bg-white border border-slate-200 p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-100 gap-2">
              <span className="font-bold text-slate-950 text-base">
                审单模式结构变化
              </span>
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5">
                阶段演进（原来 ➔ 现在 ➔ 最优）
              </span>
            </div>

            {/* 行 1：系统审核演进（50.0% ➔ 65.0% ➔ 75.0%） */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-3.5 p-3.5 bg-slate-50 border border-slate-100">
              {/* 原来 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-white border border-slate-200">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm font-bold text-slate-900">系统占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">50.0</span>
                  <span className="text-xs font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 跃升 1 */}
              <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs shrink-0 self-center">
                <span>+15.0%</span>
                <span className="text-emerald-400 font-bold text-sm leading-none">↑</span>
              </div>

              {/* 现在：鲜明当前背景与聚焦边框 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-blue-100 border-2 border-blue-600 shadow-xs relative">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">现在</span>
                  <span className="text-sm font-bold text-blue-950">系统占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight">65.0</span>
                  <span className="text-xs font-bold text-blue-800">%</span>
                </div>
              </div>

              {/* 跃升 2 */}
              <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs shrink-0 self-center">
                <span>+10.0%</span>
                <span className="text-emerald-400 font-bold text-sm leading-none">↑</span>
              </div>

              {/* 最优 (75.0%)：虚线边框，体现将来的预期感 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-emerald-50/40 border-2 border-dashed border-emerald-500">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">最优</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-950">系统占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-emerald-900 tracking-tight">75.0</span>
                  <span className="text-xs font-bold text-emerald-700">%</span>
                </div>
              </div>
            </div>

            {/* 行 2：人工审核演进（50.0% ➔ 35.0% ➔ 25.0%） */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-3.5 p-3.5 bg-slate-50 border border-slate-100">
              {/* 原来 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-white border border-slate-200">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm font-bold text-slate-900">人工占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">50.0</span>
                  <span className="text-xs font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 压降 1 */}
              <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs shrink-0 self-center">
                <span>-15.0%</span>
                <span className="text-rose-400 font-bold text-sm leading-none">↓</span>
              </div>

              {/* 现在：鲜明当前背景与聚焦边框 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-blue-100 border-2 border-blue-600 shadow-xs relative">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">现在</span>
                  <span className="text-sm font-bold text-slate-950">人工占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">35.0</span>
                  <span className="text-xs font-bold text-slate-700">%</span>
                </div>
              </div>

              {/* 压降 2 */}
              <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs shrink-0 self-center">
                <span>-10.0%</span>
                <span className="text-rose-400 font-bold text-sm leading-none">↓</span>
              </div>

              {/* 最优 (25.0%)：虚线边框，体现将来的预期感 */}
              <div className="flex-1 flex items-center justify-between px-3.5 py-2.5 bg-amber-50/40 border-2 border-dashed border-amber-500">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">最优</span>
                  </div>
                  <span className="text-sm font-bold text-amber-950">人工占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-bold text-amber-900 tracking-tight">25.0</span>
                  <span className="text-xs font-bold text-amber-700">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 系统出单比例极限与业务瓶颈深度剖析 */}
          <div className="bg-white p-5 sm:p-6 border border-slate-200 space-y-5">
            {/* 顶部标题与简述 */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-700"></span>
                <h4 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight flex flex-wrap items-center gap-2">
                  <span>系统出单安全边界</span>
                  <span className="bg-rose-50 text-rose-700 text-xs font-mono font-bold px-2 py-0.5 rounded-sm border border-rose-200 select-none">
                    75% 比例
                  </span>
                </h4>
              </div>
            </div>

            {/* 管理结论：置于【成因剖析】标题正下方 */}
            <div className="p-4 bg-slate-50/60 border-l-2 border-slate-300 text-sm sm:text-base text-slate-800 leading-relaxed">
              基于<strong>“多账号风险拦截（约15%）+ 历史存量标签兜底（约10%）”</strong>的风控边界，当前 <strong>60%~65%</strong> 的系统出单水平已高度贴近 <strong>75%</strong> 的安全物理极限。
            </div>

            {/* 成因 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 成因 1：平台运营特点与多账号关联 */}
              <div className="bg-white p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">平台运营特征：多账号关联高发</span>
                  <span className="text-xs font-mono font-bold text-amber-700">
                    关联风险约 15%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  平台<strong className="text-slate-950 font-semibold">多账号关联占比高达 80% 左右</strong>；其中经策略矩阵深度识别后，<strong className="text-slate-950 font-semibold">高风险关联占比约 15% </strong>，该部分订单必须转入人工复审进行资产核验与风险阻断，无法由系统直接放行。
                </p>
              </div>

              {/* 成因 2：存量风控标签历史残留 */}
              <div className="bg-white p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">历史存量沉淀：存量风控标签留存</span>
                  <span className="text-xs font-mono font-bold text-amber-700">
                    标签残留约 10%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  平台沉淀了大量被打上标签的用户；在经历多轮策略去重与标签清理后，<strong className="text-slate-950 font-semibold">带标存量用户依然占整体单量的 10% 左右</strong>，触发历史标签的订单仍需人工校验兜底。
                </p>
              </div>
            </div>

            {/* 核心数据呈现：左柱右文 1:1 严格对齐 */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              {/* 顶部比例分布说明标头 */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">订单总体结构 (100%)</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-600 font-mono">
                    系统出单安全边界：<strong className="text-amber-800 font-bold">75%</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-blue-600 inline-block"></span>阶段数据 (60%-65%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-amber-100 border border-dashed border-amber-500 inline-block"></span>剩余潜能 (10%~15%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-slate-200 border border-slate-300 inline-block"></span>人工防线 (25%)
                  </span>
                </div>
              </div>

              {/* 主体 3 阶段 1:1 严格对齐图表 */}
              <div className="space-y-3.5">
                {/* 1. 顶部：25% 刚性人工防线 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
                  {/* 左侧柱段 (lg:col-span-3) */}
                  <div className="lg:col-span-3 flex items-center">
                    <div className="flex-1 lg:h-16 min-h-[64px] bg-slate-100 border border-slate-300/80 flex flex-col items-center justify-center rounded-xs">
                      <span className="text-[11px] font-medium text-slate-500">人工防线</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-slate-800">25%</span>
                    </div>
                    <div className="w-6 sm:w-8 flex items-center shrink-0 pl-1">
                      <div className="w-full h-[2px] bg-slate-300 relative flex items-center justify-end">
                        <span className="absolute -right-1.5 text-[10px] text-slate-400 leading-none">▶</span>
                      </div>
                    </div>
                  </div>

                  {/* 右侧解析卡片 1 (lg:col-span-9) */}
                  <div className="lg:col-span-9 lg:h-16 min-h-[64px] p-3 sm:p-3.5 bg-slate-50/80 border-l-2 border-slate-300 flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-900">刚性人工审核比例</span>
                      <span className="text-xs font-mono font-bold text-slate-700">约 25% • 安全边界</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      多账号高危关联（约15%）与存量风险标签兜底（约10%），必须由人工严格把关以阻断穿透。
                    </p>
                  </div>
                </div>

                {/* 2. 中部：10%~15% 剩余潜能 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
                  {/* 左侧柱段 (lg:col-span-3) */}
                  <div className="lg:col-span-3 flex items-center">
                    <div className="flex-1 lg:h-14 min-h-[56px] bg-amber-50/80 border border-dashed border-amber-300 flex flex-col items-center justify-center rounded-xs">
                      <span className="text-[11px] font-medium text-amber-800">剩余潜能</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-amber-950">10%~15%</span>
                    </div>
                    <div className="w-6 sm:w-8 flex items-center shrink-0 pl-1">
                      <div className="w-full h-[2px] bg-amber-400 relative flex items-center justify-end">
                        <span className="absolute -right-1.5 text-[10px] text-amber-600 leading-none">▶</span>
                      </div>
                    </div>
                  </div>

                  {/* 右侧解析卡片 2 (lg:col-span-9) */}
                  <div className="lg:col-span-9 lg:h-14 min-h-[56px] p-3 sm:p-3.5 bg-amber-50/50 border-l-2 border-amber-400 flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-amber-950">逼近系统出单极限</span>
                      <span className="text-xs font-mono font-bold text-amber-800">10% ~ 15% • 剩余潜能</span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      距系统出单安全物理边界（75%）仅存 <strong className="text-amber-950 font-bold font-mono">10% ~ 15%</strong> 的理论提升空间。
                    </p>
                  </div>
                </div>

                {/* 3. 底部：60%~65% 常态自动化 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
                  {/* 左侧柱段 (lg:col-span-3) */}
                  <div className="lg:col-span-3 flex items-center">
                    <div className="flex-1 lg:h-20 min-h-[80px] bg-blue-600 border border-blue-700 flex flex-col items-center justify-center text-white rounded-xs shadow-2xs">
                      <span className="text-[11px] font-medium text-blue-100">阶段数据</span>
                      <span className="text-base sm:text-lg font-mono font-bold tracking-tight">60%~65%</span>
                    </div>
                    <div className="w-6 sm:w-8 flex items-center shrink-0 pl-1">
                      <div className="w-full h-[2px] bg-blue-500 relative flex items-center justify-end">
                        <span className="absolute -right-1.5 text-[10px] text-blue-600 leading-none">▶</span>
                      </div>
                    </div>
                  </div>

                  {/* 右侧解析卡片 3 (lg:col-span-9) */}
                  <div className="lg:col-span-9 lg:h-20 min-h-[80px] p-3 sm:p-3.5 bg-blue-50/40 border-l-2 border-blue-400 flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-blue-950">当前系统运行水平</span>
                      <span className="text-xs font-mono font-bold text-blue-700">60% ~ 65% • 阶段数据</span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      低风险订单全自动秒级放行，覆盖绝大部分常态业务场景，已释放理论自动化潜能的 ~85%。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2 带来核心收益 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSectionHeader title="4.2 带来核心收益" />

        {/* 核心收益结构化气泡/卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-1">
          {/* Bubble 1: 规模跃升 */}
          <div className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
              <strong className="text-sm font-bold text-slate-900">核心维度 · 规模放量跃升</strong>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal flex-1">
              以 <span className="font-mono font-bold text-slate-950">500w</span> 总单量测算，系统替代规模从原先的 <span className="font-mono font-bold text-slate-950">250w单 (50%)</span> 强劲增至 <span className="font-mono font-bold text-slate-950">325w单 (65%)</span>，实现 <span className="text-emerald-700 font-bold font-mono">净增 75w单 (+30.0%)</span>。
            </p>
          </div>

          {/* Bubble 2: 时效提速 */}
          <div className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
              <strong className="text-sm font-bold text-slate-900">核心维度 · 审核时效提速</strong>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal flex-1">
              加权平均停留时间由原来的 <span className="font-mono font-bold text-slate-950">4.13分钟</span> 净压降压缩至 <span className="font-mono font-bold text-slate-950">2.96分钟</span>，全盘时效实现超预期 <span className="text-emerald-700 font-bold font-mono">整体提速 +28.2%</span>。
            </p>
          </div>

          {/* Bubble 3: 降本止损 */}
          <div className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <strong className="text-sm font-bold text-slate-900">核心维度 · 综合降本止损</strong>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 select-none">
                合计约 250w/月
              </span>
            </div>
            <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal flex-1">
              外包节省成本 <span className="text-emerald-700 font-bold font-mono">近 100w/月</span>、外包 <span className="text-emerald-700 font-bold font-mono">直接止损 50w+/月</span>；另总部人审单量精简后理论降本 <span className="text-emerald-700 font-bold font-mono">约 100w/月</span>，综合收益合计 <span className="text-emerald-700 font-bold font-mono">约 250w/月</span>。
            </p>
          </div>
        </div>

        {/* 3 个衍生受益指标卡片阵列（纵向层叠布局，一行一个模块，给对照组充足的排版宽度） */}
        <div className="space-y-6 sm:space-y-8">
          {/* 受益 1：替代订单规模 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  01
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                  降低整体成本
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* 左侧：数据指标对照 */}
              <div className="md:col-span-5 flex flex-col justify-center pb-4 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="space-y-2 py-1">
                  {/* 组 1：系统自动审核 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      系统
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">1-9月月均</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">50.4%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">系统930</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">65.0%</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>增幅</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">+29.0%</div>
                    </div>
                  </div>

                  {/* 组 2：外包单量变化 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      外包
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">1-9月月均</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">9.7%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">外包930</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">0.6%</div>
                      </div>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-rose-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingDown className="w-3 h-3 text-rose-700 shrink-0" />
                        <span>压降</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-rose-700">-93.8%</div>
                    </div>
                  </div>

                  {/* 组 3：总部单量变化 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      总部
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">1-9月月均</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">40.0%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">总部930</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">34.4%</div>
                      </div>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-rose-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingDown className="w-3 h-3 text-rose-700 shrink-0" />
                        <span>精简</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-rose-700">-14.0%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：文字说明 */}
              <div className="md:col-span-7 flex flex-col justify-center md:pl-2">
                <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-3.5">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">自动化占比跃升：</strong>
                      云盾系统出单占比由 1-9月均值 <strong className="text-slate-950 font-mono">50.4%</strong> 提升至 930全量节点的 <strong className="text-slate-950 font-mono">65.0%</strong>，占比相对提升 <strong className="text-slate-950 font-mono">+29.0%</strong>。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">外包清退与降本止损：</strong>
                      外包团队占比由 1-9月月均 <strong className="text-slate-950 font-mono">9.7%</strong> 清退压降至 系统930 的 <strong className="text-slate-950 font-mono">0.6%</strong>（压降相对减幅 <strong className="text-slate-950 font-mono">-93.8%</strong>），全面释放 <strong className="text-slate-950 font-mono">100+ 人力</strong>，直接削减硬性成本 <strong className="text-emerald-700 font-bold font-mono">小 100w/月</strong>；并间接减少外包差错产生的约 <strong className="text-emerald-700 font-bold font-mono">50w+ 元/月</strong> 的资金损失，月度综合经济价值达 <strong className="text-slate-950 font-bold font-mono">150w/月</strong>。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">总部减负与理论成本降低：</strong>
                      总部人工审核占比由月均 <strong className="text-slate-950 font-mono">40.0%</strong> 降至 系统930 的 <strong className="text-slate-950 font-mono">34.4%</strong>（相对精简 <strong className="text-slate-950 font-mono">-14.0%</strong>），相当于直接释放了大约 <strong className="text-emerald-700 font-bold font-mono">30 人</strong> 的日常审核工作量，从而实现了约 <strong className="text-emerald-700 font-bold font-mono">100w/月</strong> 的总部理论综合成本降低。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 受益 2：提升审核时效 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  02
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                  提升审核时效
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* 左侧：数据指标对照 */}
              <div className="md:col-span-5 flex flex-col justify-center pb-4 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="space-y-2.5 py-1">
                  {/* 组 1：平均停留时间 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-16 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none text-center px-1">
                      全盘
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">原来</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">4.13分</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">现在</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">2.96分</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>提速</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">+28.2%</div>
                    </div>
                  </div>

                  {/* 组 2：系统秒级放行 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-16 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none text-center px-1">
                      优质客户
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">订单比例</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">65.0%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">系统自动</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">秒级通过</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>极速</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">15秒内</div>
                    </div>
                  </div>

                  {/* 组 3：风险玩家多维复核 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-16 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none text-center px-1">
                      风险玩家
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">订单比例</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">35.0%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">人工审核</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">多维复核</div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-blue-900 uppercase flex items-center gap-0.5 justify-center">
                        <ShieldCheck className="w-3 h-3 text-blue-700 shrink-0" />
                        <span>严查</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-blue-950">8分内</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：文字说明 */}
              <div className="md:col-span-7 flex flex-col justify-center md:pl-2">
                <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">订单风控停留缩短：</strong>
                      按总单量 <strong className="text-slate-950 font-mono">500w 单</strong> 测算，加权平均停留时间从 <strong className="text-slate-950 font-mono">4.13 分钟降至 2.96 分钟</strong>，净压缩 <strong className="text-slate-950 font-mono">1.17 分钟</strong>（全盘时效提速 <strong className="text-emerald-700 font-mono">+28.2%</strong>）。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">优质用户体感跃升：</strong>
                      释放的 <strong className="text-slate-950 font-mono">75w 单</strong> 由原 8 分钟降至 15 秒；占总量 <strong className="text-slate-950 font-mono">65% 的优质客户提单（325w 单）</strong> 实现“秒过”的体验，出款体感显著改善。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">风险玩家深度严查：</strong>
                      占总量 <strong className="text-slate-950 font-mono">35% 的风险玩家订单</strong> 由专业人工实施多维交叉复核，审核时效严控在 <strong className="text-slate-950 font-mono">8分钟内</strong> 快速闭环，兼顾安全防御与流转速率。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 受益 3：提升审核质量 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  03
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                  提升审核质量
                </span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* 左侧：数据指标对照 */}
              <div className="md:col-span-5 flex flex-col justify-center pb-4 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="space-y-2 py-1">
                  {/* 组 1：系统自对比 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      系统
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">系统原来</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">0.141%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">系统现在</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">0.072%</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>自对比</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">+1.96倍</div>
                    </div>
                  </div>

                  {/* 组 2：系统代外包 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      外包
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">外包均值</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">1.910%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">系统现在</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">0.072%</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>比外包</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">+26.5倍</div>
                    </div>
                  </div>

                  {/* 组 3：系统助总部 */}
                  <div className="flex items-stretch gap-2">
                    <div className="w-12 bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 select-none">
                      总部
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight block">总部均值</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-700">0.840%</div>
                      </div>
                      <div className="bg-slate-50 p-2 text-center flex flex-col justify-center space-y-0.5">
                        <span className="text-xs font-bold text-slate-950 uppercase tracking-tight block">系统现在</span>
                        <div className="font-mono text-sm sm:text-base font-bold text-slate-950">0.072%</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 p-2 text-center flex flex-col justify-center items-center w-[30%] min-w-[90px] shrink-0 space-y-0.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-0.5 justify-center">
                        <TrendingUp className="w-3 h-3 text-emerald-700 shrink-0" />
                        <span>比总部</span>
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-700">+11.6倍</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：文字说明 */}
              <div className="md:col-span-7 flex flex-col justify-center md:pl-2">
                <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-3.5">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">消灭外包高差错风险：</strong>
                      系统审单质量远高于外包和一般审核人员，全面替代质检差错率高达 <strong className="text-slate-950 font-mono">1.91%</strong> 的外包审核，从根本上消除了外包质量控制不力带来的高危差错及安全漏洞。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                    <p>
                      <strong className="text-slate-950">缓解总部压力聚焦核心：</strong>
                      总部订单减少 <strong className="text-slate-950 font-mono">25w+ 单</strong>，缓解了一线审核人员的过度疲劳，得以集中精力深耕高危、复杂及高净值大额订单，显著带动了全盘审核业务的安全防御质效。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ReportDimensionCard>
        </div>

        {/* 各角色订单结构自身演进趋势对比 与 系统出单月度趋势对比 */}
        <div className="space-y-8 sm:space-y-10 pt-2">
          {/* 各角色订单结构自身演进趋势对比（8月日均 vs 9月日均 vs 9月30日全量） */}
          <div>
            <SmartDispatchOrderStructure />
          </div>

          {/* 系统出单趋势对比（2026.01 ~ 2026.09） */}
          <div>
            <SystemAuditMonthlyTrendChart />
          </div>
        </div>
      </div>

      {/* 4.3 智能风控体系架构 */}
      <div id="section-cloud-shield-system" className="space-y-8 sm:space-y-10">
        <ReportSectionHeader title="4.3 云盾风控体系" />

        {/* 机制与支撑说明 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "从 0 到 1 打造[[云盾风控体系]]以支持审单模式演进。通过[[策略矩阵校验 ➔ 风险评分 ➔ 动态派单 ➔ 闭环反馈]]四个环节，明确系统自动放行与人工复审的分工边界，全面支撑自动化出单目标。"
          )}
        </SummaryBox>

          {/* 4.3.1 关键机制优化前后对比 */}
          <div className="space-y-6 sm:space-y-8">
            <ReportSubsectionHeader
              title="4.3.1 云盾体系 · 关键优化对比"
              rightContent={
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  从 <span className="font-semibold text-slate-900 font-mono">2025年四季度</span> 规划至 <span className="font-semibold text-slate-900 font-mono">2026年三季度</span> 完成机制全面优化
                </p>
              }
            />

            {/* 4.3.1 关键机制优化前后对比矩阵 (VS 对比卡片样式) */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {[
                {
                  dimension: "变化1：增加 -> 套利策略矩阵",
                  tag: "策略引擎",
                  before: "无套利策略 (仅粗放额度判定)",
                  upgrade: "+29 项套利规则",
                  after: "补充专项套利矩阵",
                  scenario: "原来大额盈利一律转人工，误杀率高；现在系统自动识别全包、对打、打水、关联、快进快出、租卖号等套利行为，精准拦截违规，正常玩家极速放行。",
                },
                {
                  dimension: "变化2：增加 -> 外部数据联动",
                  tag: "底层基建",
                  before: "无系统接口直连",
                  upgrade: "秒级 API 接口直连",
                  after: "三方场馆数据互通",
                  scenario: "原来专员需手动登录三方场馆逐笔查单；现在核心场馆已实现接口秒级直连，实时共享风控注单与实时数据。",
                },
                {
                  dimension: "变化3：增加 -> 智能决策模型",
                  tag: "量化分流",
                  before: "无风险评分体系",
                  upgrade: "模型量化分级",
                  after: "引入动态风险评分",
                  scenario: "原来凭专员经验主观判定，尺度易漂移；现在结合行为特征实时计算动态风险分，低风险秒级放行，高风险精准触发人工复核。",
                },
                {
                  dimension: "变化4：增加 -> 智能派单机制",
                  tag: "派单调度",
                  before: "简单机械轮询",
                  upgrade: "多因子匹配算法",
                  after: "多因子智能派单",
                  scenario: "原来工单机械轮询派单；现在根据风险等级、业务类型与审核员专长智能派单（复杂套利单派资深专家，基础单派普通专员）。",
                },
                {
                  dimension: "变化5：增加 -> 跨站关联识别",
                  tag: "跨站协同",
                  before: "无跨站关联分析能力",
                  upgrade: "全网图谱打通",
                  after: "跨站关联即时识别",
                  scenario: "历史拦截高危单 50%+ 存在跨站关联，过去为重大盲区；现在自动放行前实时识别比对跨站同设备、同资金链路等特征，补齐关键防线。",
                },
                {
                  dimension: "变化6：增加 -> 风控工具支持",
                  tag: "审核工具",
                  before: "传统人工手工核查",
                  upgrade: "一站式工具链集成",
                  after: "引入风控工具链",
                  scenario: "原来排查关联需跨系统人工比对；现在一键生成关联图谱并由系统自动标识异常，辅助人工精准高效决策。",
                },
              ].map((row, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-5 sm:p-6 space-y-4">
                  {/* 顶部标题与标签 */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-slate-900"></span>
                      <span className="font-bold text-slate-950 text-base">{row.dimension}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 border border-slate-200">
                      {row.tag}
                    </span>
                  </div>

                  {/* VS 左右对比面板 */}
                  <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-center">
                    {/* 左：治理前基线 */}
                    <div className="md:col-span-4 bg-slate-50 border border-slate-200 p-3.5 text-center space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block font-mono">治理前基线</span>
                      <div className="text-xs sm:text-sm font-semibold text-slate-700 font-sans leading-relaxed">{row.before}</div>
                    </div>

                    {/* 中：VS / 核心升级举措 */}
                    <div className="md:col-span-3 flex flex-col items-center justify-center py-2 md:py-0">
                      <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-0.5 select-none inline-flex items-center gap-1 shrink-0 uppercase mb-1">
                        ⚡ VS 升级举措
                      </span>
                      <div className="text-xs font-mono font-bold text-slate-950 border border-dashed border-slate-300 bg-slate-50 px-3 py-1 text-center w-full max-w-[200px]">
                        {row.upgrade}
                      </div>
                    </div>

                    {/* 右：治理后能力 */}
                    <div className="md:col-span-4 bg-emerald-50/50 border border-emerald-200/80 p-3.5 text-center space-y-1">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block font-mono">治理后能力</span>
                      <div className="text-xs sm:text-sm font-bold text-emerald-950 font-sans leading-relaxed">{row.after}</div>
                    </div>
                  </div>

                  {/* 底部实战价值描述 */}
                  <div className="bg-slate-50/70 p-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed border-l-2 border-slate-800">
                    <strong className="text-slate-900 block mb-1">业务场景举例：</strong>
                    {row.scenario}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4.3.2 云盾体系 · 运行闭环框架 */}
          <div className="space-y-6 pt-3">
            <ReportSubsectionHeader
              title={
                <span className="flex items-center gap-2">
                  <span>4.3.2 云盾体系 · 运行闭环框架</span>
                </span>
              }
            />

            {/* 框架说明 */}
            <SummaryBox variant="module">
              {highlightNumbers(
                "云盾构建[[“策略扫描 ➔ 风险评分 ➔ 动态派单 ➔ 闭环反馈进化”]]全链路闭环，融合[[风险分值累加]]与[[特定策略组合]]双重判定逻辑，[[实现系统自动放行与人工精审的高效协同]]。"
              )}
            </SummaryBox>

            {/* 全链路运转主流程指示条（含 4 ➔ 1 闭环反馈机制） */}
            <div className="bg-white border border-slate-200 p-4 space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch text-center">
                <div className="flex flex-col items-center justify-center gap-1.5 bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-slate-700 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-950">1. 提款策略扫描</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">50+ 项探针穿透</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-slate-700 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-950">2. 计算风险分数</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">分值累加 + 组合熔断</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-slate-700 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-950">3. 派单动态匹配</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">系统直出 / 人工专审</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-slate-700 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-slate-950">4. 闭环反馈自进化</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">样本回流反哺策略</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50/80 px-3 py-1.5 border border-slate-100 font-mono">
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>闭环反馈机制：阶段 4 质检与处置样本动态反哺阶段 1 策略库，每周持续自进化校准。</span>
                </span>
                <span className="hidden sm:inline font-bold text-slate-700">4 ➔ 1 持续闭环</span>
              </div>
            </div>

            {/* 4 大核心阶段矩阵：各阶段详细内容卡片 */}
            <div className="space-y-8 sm:space-y-10">
              {/* 阶段 1：对应上方【1. 提款策略扫描】 */}
              <div className="space-y-4">
                <div className="pb-2.5 border-b border-slate-200">
                  <h6 className="text-base sm:text-lg font-bold text-slate-950">
                    阶段一 · 提款策略扫描
                  </h6>
                </div>

                    {/* 策略扫描双重转人工触发逻辑（分数判定 + 高危特定组合熔断） */}
                    <div className="bg-slate-50 border-l-2 border-slate-800 p-3.5 sm:p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-950 text-xs sm:text-sm">
                            双重转人工触发机制（分数量化阈值 + 特定策略组合熔断）
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-rose-800 bg-rose-50 px-2 py-0.5 border border-rose-200">
                          杜绝低分高危漏网
                        </span>
                      </div>

                      {/* 1 行 2 列网格布局 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-stretch text-xs sm:text-[13px] leading-relaxed">
                        {/* 逻辑一：风险分值累加（策略分 + 标签分） */}
                        <div className="bg-white p-3.5 sm:p-4 border border-slate-200 flex flex-col justify-between space-y-2.5 h-full">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                              <div className="font-bold text-slate-950 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0"></span>
                                <span className="text-sm">逻辑一：风险分值累加（风险量化分数）</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-200 px-1.5 py-0.5 select-none">
                                策略分 + 标签分
                              </span>
                            </div>
                            <p className="text-slate-700">
                              风险总分由<strong>「策略扫描分数 + 客户标签分数」</strong>加权综合计算得出。若综合得分达到安全放行门槛（如 ≥ 60分），系统自动阻断并转人工审核：
                            </p>
                            <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1.5 text-xs text-slate-800">
                              <div className="flex items-center gap-1.5 font-bold text-slate-950 font-mono text-[11px] sm:text-xs">
                                <span className="text-blue-700">∑</span>
                                <span>综合风险总分 = 策略规则得分 + 标签配置得分</span>
                              </div>
                              <div className="text-[11px] text-slate-600 font-sans space-y-1 pt-1 border-t border-slate-200">
                                <div><strong>• 策略规则计分：</strong>50+ 项动态策略实时扫描交易行为并逐项量化计分；</div>
                                <div><strong>• 标签独立赋分：</strong>每个风控标签均支持独立配置风险分值，命中标签即自动累加。</div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                            <span>门槛控制机制</span>
                            <span className="text-slate-700 font-bold font-sans">≥ xx分自动转人工</span>
                          </div>
                        </div>

                        {/* 逻辑二：特定策略组合熔断 */}
                        <div className="bg-white p-3.5 sm:p-4 border border-slate-200 flex flex-col justify-between space-y-2.5 h-full">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                              <div className="font-bold text-slate-950 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-rose-600 shrink-0"></span>
                                <span className="text-sm">逻辑二：特定策略组合（低分高危强转）</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold text-rose-800 bg-rose-100/60 border border-rose-200 px-1.5 py-0.5 select-none">
                                VIP差异化 · 30+组合/级
                              </span>
                            </div>
                            <p className="text-slate-700">
                              即使<strong>总风险分数不高（未达门槛）</strong>，只要命中<strong>高危特定策略组合</strong>，同样直接强行熔断并转人工审核，彻底杜绝低分高危漏网：
                            </p>
                            <div className="bg-rose-50/50 border border-rose-200/80 p-2.5 space-y-1.5 text-xs text-slate-800">
                              <div className="font-bold text-rose-950 text-[11px] sm:text-xs">
                                典型组合：敏感资料变更 + 快进快出 / 新绑账户 + 异常红利
                              </div>
                              <div className="text-[11px] text-slate-600 font-sans space-y-1 pt-1 border-t border-rose-100">
                                <div><strong>• VIP 差异化配置：</strong>按 VIP 等级设定差异化熔断阈值，兼顾体验与风控；</div>
                                <div><strong>• 分级 30+ 策略矩阵：</strong>每等级独立配置 30+ 项高危组合，实施精准拦截。</div>
                              </div>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-slate-100 text-[11px] text-rose-700 font-mono font-bold flex items-center justify-between">
                            <span>硬性熔断机制</span>
                            <span className="font-sans">命中组合即刻强转人工</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 策略与标签扫描明细 标题与一句话总结 */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-3.5 bg-slate-900"></span>
                        <span className="font-bold text-slate-950 text-sm sm:text-base">
                          策略与标签扫描明细
                        </span>
                      </div>

                      {/* 一句话总结 */}
                      <SummaryBox variant="module">
                        <div className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          {highlightNumbers(
                            "全盘依托 [[50+ 项策略探针]]实时穿透扫描，本次出单检测呈现 [[45 正常 / 5 异常]]，综合风险总得分累计达 [[105分]]（超过 60分放行安全门槛），自动触发高危阻断并转人工审核。"
                          )}
                        </div>
                      </SummaryBox>
                    </div>

                    {/* 4列策略扫描结果表格 (全量规则名称透视) */}
                    <ReportTableFrame>
                      <table className="report-dense-table w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 text-xs font-mono font-bold border-b border-slate-200 uppercase tracking-wider">
                            <th className="py-2.5 px-3 w-[16%] text-left">分类</th>
                            <th className="py-2.5 px-3 w-[46%] text-left">名称</th>
                            <th className="py-2.5 px-3 w-[18%] text-center">风险分数</th>
                            <th className="py-2.5 px-3 w-[20%] text-center">扫描结果</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                          {[
                            {
                              category: "账户",
                              tagColor: "bg-slate-100 text-slate-800 border-slate-200",
                              items: [
                                { name: "存在关联账号", score: "0分", isError: false },
                                { name: "新绑提款账户后首提", score: "0分", isError: false },
                                { name: "命中高危险标签审核挂起", score: "0分", isError: false },
                                { name: "敏感资料变更后首提", score: "0分", isError: false },
                                { name: "命中高危险标签", score: "+25分", isError: true },
                                { name: "白名单", score: "0分", isError: false },
                                { name: "场馆钱包负数", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "环境",
                              tagColor: "bg-blue-50 text-blue-800 border-blue-200",
                              items: [
                                { name: "使用新设备IP首提", score: "+15分", isError: true },
                                { name: "银行卡为海南地区", score: "0分", isError: false },
                                { name: "提款IP为海南地区", score: "0分", isError: false },
                                { name: "模拟器登录特征", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "内控",
                              tagColor: "bg-orange-50 text-orange-800 border-orange-200",
                              items: [
                                { name: "特殊上分类型", score: "0分", isError: false },
                                { name: "N次提款未过人工审核", score: "0分", isError: false },
                                { name: "短时提款次数过多", score: "+15分", isError: true },
                                { name: "流水不达标", score: "0分", isError: false },
                                { name: "N天内的首次提款", score: "0分", isError: false },
                                { name: "场馆转账失败退回", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "红利",
                              tagColor: "bg-rose-50 text-rose-800 border-rose-200",
                              items: [
                                { name: "领取特邀红利超额", score: "+30分", isError: true },
                                { name: "高红利占比", score: "0分", isError: false },
                                { name: "领取红利后首提", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "新手",
                              tagColor: "bg-teal-50 text-teal-800 border-teal-200",
                              items: [
                                { name: "前N次提款", score: "0分", isError: false },
                                { name: "红利超过限定额度", score: "0分", isError: false },
                                { name: "大额提款", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "行为",
                              tagColor: "bg-amber-50 text-amber-800 border-amber-200",
                              items: [
                                { name: "命中多个套利特征", score: "0分", isError: false },
                                { name: "睡眠账号", score: "0分", isError: false },
                                { name: "租卖号", score: "0分", isError: false },
                                { name: "快进快出", score: "+20分", isError: true },
                                { name: "机器下注", score: "0分", isError: false },
                                { name: "单人单线", score: "0分", isError: false },
                                { name: "批量打水", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "盈利",
                              tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
                              items: [
                                { name: "高盈利率", score: "0分", isError: false },
                                { name: "高盈利审核挂起", score: "0分", isError: false },
                                { name: "短时提款金额过大", score: "0分", isError: false },
                                { name: "高盈利倍数", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "游戏",
                              tagColor: "bg-purple-50 text-purple-800 border-purple-200",
                              items: [
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800 border-sky-200", name: "低赔率注单占比高", score: "0分", isError: false },
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800 border-sky-200", name: "有二次结算注单", score: "0分", isError: false },
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800 border-sky-200", name: "B端-下注行为异常", score: "0分", isError: false },
                                { tag: "真人", tagColor: "bg-purple-50 text-purple-800 border-purple-200", name: "B端-下注行为异常", score: "0分", isError: false },
                                { tag: "棋牌", tagColor: "bg-amber-50 text-amber-800 border-amber-200", name: "命中多个套利特征", score: "0分", isError: false },
                                { tag: "棋牌", tagColor: "bg-amber-50 text-amber-800 border-amber-200", name: "全包", score: "0分", isError: false },
                                { tag: "彩票", tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200", name: "全包", score: "0分", isError: false },
                                { tag: "彩票", tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200", name: "高盈利额", score: "0分", isError: false },
                                { tag: "电子", tagColor: "bg-indigo-50 text-indigo-800 border-indigo-200", name: "卡免费", score: "0分", isError: false },
                                { tag: "电子", tagColor: "bg-indigo-50 text-indigo-800 border-indigo-200", name: "B端-下注行为异常", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "标签",
                              tagColor: "bg-violet-50 text-violet-800 border-violet-200",
                              items: [
                                { name: "标签1", score: "0分", isError: false },
                                { name: "标签2", score: "0分", isError: false },
                                { name: "标签3", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            }
                          ].map((group, groupIdx) => (
                            <React.Fragment key={groupIdx}>
                              {group.items.map((sub: any, itemIdx) => {
                                const gameBgClass = sub.tag === "体育"
                                  ? "bg-sky-50/50"
                                  : sub.tag === "真人"
                                  ? "bg-purple-50/50"
                                  : sub.tag === "棋牌"
                                  ? "bg-amber-50/50"
                                  : sub.tag === "彩票"
                                  ? "bg-emerald-50/50"
                                  : sub.tag === "电子"
                                  ? "bg-indigo-50/50"
                                  : group.category === "标签"
                                  ? "bg-violet-50/30"
                                  : sub.isError
                                  ? "bg-rose-50/40"
                                  : "bg-white";

                                const displayTag = sub.tag || group.category;
                                const displayTagColor = sub.tagColor || group.tagColor || "bg-slate-100 text-slate-800 border-slate-200";

                                const maskStrategyName = (name: string): string => {
                                  if (name === "……") return "……";
                                  if (name.startsWith("标签")) return name;
                                  if (name.length <= 2) return `${name[0]}**`;
                                  if (name.length === 3) return `${name[0]}**${name[2]}`;
                                  if (name.length === 4) return `${name[0]}**${name[3]}`;
                                  if (name.length <= 6) return `${name[0]}**${name.slice(2, 4)}**${name[name.length - 1]}`;
                                  const len = name.length;
                                  const p1 = name[0];
                                  const p2 = name.slice(Math.floor(len / 3), Math.floor(len / 3) + 2);
                                  const p3 = name[len - 1];
                                  return `${p1}**${p2}**${p3}`;
                                };

                                return (
                                <tr
                                  key={itemIdx}
                                  className={`transition-colors ${gameBgClass}`}
                                >
                                  {itemIdx === 0 && (
                                    <td
                                      rowSpan={group.items.length}
                                      className="py-1.5 px-3 font-bold text-slate-950 bg-slate-50 align-middle"
                                    >
                                      {group.category}
                                    </td>
                                  )}
                                  <td className={`py-1 px-3 text-left ${
                                    sub.name === "……"
                                      ? "text-slate-400 font-mono tracking-widest text-xs"
                                      : sub.isError
                                      ? "text-rose-950 font-bold"
                                      : "text-slate-800 font-medium"
                                  }`}>
                                    <div className="flex items-center justify-start gap-1.5 text-left w-full">
                                      {sub.name !== "……" && (
                                        <span className={`px-1.5 py-0.2 font-bold text-xs shrink-0 border ${displayTagColor}`}>
                                          【{displayTag}】
                                        </span>
                                      )}
                                      <span className="font-mono tracking-tight text-left">
                                        {maskStrategyName(sub.name)}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-1 px-3 text-center font-mono text-xs">
                                    {sub.isError ? (
                                      <span className="font-bold text-rose-700">
                                        {sub.score}
                                      </span>
                                    ) : sub.name === "……" ? (
                                      <span className="text-slate-400">{sub.score}</span>
                                    ) : (
                                      <span className="text-slate-600 font-medium">{sub.score}</span>
                                    )}
                                  </td>
                                  <td className="py-1 px-3 text-center">
                                    {sub.isError ? (
                                      <span className="inline-flex items-center gap-1 font-bold text-rose-700 text-xs font-mono">
                                        <XCircle className="w-3 h-3 text-rose-600 shrink-0" />
                                        异常
                                      </span>
                                    ) : (
                                      <span className={`inline-flex items-center gap-1 font-bold text-emerald-700 text-xs font-mono ${sub.name === "……" ? "opacity-80" : ""}`}>
                                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                                        正常
                                      </span>
                                    )}
                                  </td>
                                </tr>
                                );
                              })}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </ReportTableFrame>
                  </div>

                {/* 阶段 2：对应上方【2. 计算风险分数】 */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                    <div className="flex items-center gap-2">
                      <h6 className="text-base sm:text-lg font-bold text-slate-950">
                        阶段二 · 计算风险分数
                      </h6>
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 self-start sm:self-auto">
                      4 步核心链路示意
                    </span>
                  </div>

                    {/* 简版流程示意图: 计算分数 ➔ 总分 ➔ 比较参数 ➔ 决定是否转给人 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs sm:text-sm relative">
                      {/* 1. 计算分数 */}
                      <div className="bg-slate-50/50 p-4 border border-slate-200/70 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <h6 className="font-bold text-slate-950 text-base pt-0.5">1. 计算分数</h6>
                            <Calculator className="w-4 h-4 text-slate-700" />
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            阶段一策略特征校验，逐项计算各风险特征加权分值（如：命中高危标签 +25分、快进快出 +20分）。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono text-slate-600 font-medium">
                          特征因子加权计分
                        </div>
                      </div>

                      {/* 2. 总分 */}
                      <div className="bg-slate-50/50 p-4 border border-slate-200/70 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <h6 className="font-bold text-slate-950 text-base pt-0.5">2. 总分</h6>
                            <Scale className="w-4 h-4 text-slate-700" />
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            多维特征评分引擎综合加权汇总，输出当前提款申请单的总风险分值。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono font-bold text-rose-700">
                          例如：累计得分 105 分
                        </div>
                      </div>

                      {/* 3. 比较参数 */}
                      <div className="bg-slate-50/50 p-4 border border-slate-200/70 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <h6 className="font-bold text-slate-950 text-base pt-0.5">3. 比较参数</h6>
                            <Sliders className="w-4 h-4 text-slate-700" />
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            比对风控安全放行线阈值参数（如：规则放行线 60 分），或比对【高危特定策略组合】命中状态。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono font-bold text-slate-900">
                          比对：105 分 ≥ 60 分 / 组合命中
                        </div>
                      </div>

                      {/* 4. 判定放行或转人工 */}
                      <div className="bg-rose-50/40 p-4 border border-rose-300 flex flex-col justify-between space-y-2.5 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-rose-200">
                            <h6 className="font-bold text-slate-950 text-base pt-0.5">4. 判定放行或转人工</h6>
                            <span className="text-[11px] font-mono font-bold text-rose-800 bg-white border border-rose-200 px-1.5 py-0.5">
                              终审阻断
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed">
                            超出放行安全分值（≥ 60 分）或命中高危特定组合（低分强转），均直接转人工精审；未超线且未中组合则放行。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-rose-200 text-xs sm:text-sm font-mono font-bold text-rose-800 flex items-center justify-between">
                          <span>决策结果</span>
                          <span className="bg-rose-100 text-rose-900 border border-rose-300 px-2 py-0.5">
                            ➔ 阻断转人工
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* 阶段 3：对应上方【3. 派单动态匹配】 */}
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                    <div className="flex items-center gap-2">
                      <h6 className="text-base sm:text-lg font-bold text-slate-950">
                        阶段三 · 派单动态匹配
                      </h6>
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-blue-900 self-start sm:self-auto">
                      双向加权 · 精准派发
                    </span>
                  </div>

                    {/* 顶部业务定义说明 */}
                    <div className="p-3.5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
                      系统通过对<strong>订单特征（金额/风险分/业务类型）</strong>与<strong>审核员能力/负载画像（擅长领域/历史绩效/当前负载）</strong>进行<strong>双向加权实时拟合</strong>，将高风险或专项订单毫秒级分发至最匹配、绩效最优的审核专家，实现质量与时效的双重最优化。
                    </div>

                    {/* 核心画像与双向加权路由模型架构图 */}
                    <div className="space-y-3 pt-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5 pb-2 border-b border-slate-200">
                        <Sliders className="w-4 h-4 text-slate-900" />
                        <span>双向加权动态派单</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-stretch">
                        {/* 左侧：订单特征画像 */}
                        <div className="md:col-span-4 bg-white p-4 border border-slate-200/80 space-y-3 flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 bg-slate-900"></span>
                              订单特征画像
                            </span>
                          </div>
                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="flex items-center justify-between py-1.5 border-b border-slate-200 text-slate-900">
                              <span className="text-slate-600 font-medium">维度 1 · 金额</span>
                              <span className="font-bold text-slate-950">金额大小</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5 border-b border-slate-200 text-slate-900">
                              <span className="text-slate-600 font-medium">维度 2 · 风险</span>
                              <span className="font-bold text-slate-950">S/A/B 风险评分</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5 text-slate-900">
                              <span className="text-slate-600 font-medium">维度 3 · 业务</span>
                              <span className="font-bold text-slate-950">体育 / 真人 / 综合</span>
                            </div>
                          </div>
                        </div>

                        {/* 中间：双向加权路由核心引擎 */}
                        <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-slate-900 text-white text-center space-y-2.5">                       
                          <div>
                            <span className="text-sm sm:text-base font-extrabold block text-white tracking-tight">
                              双向加权路由引擎
                            </span>
                            <span className="text-xs font-mono text-slate-300 block mt-0.5">
                              多因子实时权重矩阵
                            </span>
                          </div>
                          <div className="px-2.5 py-1 bg-emerald-500 text-slate-950 font-mono font-black text-xs tracking-tight">
                            秒级精准派发
                          </div>
                        </div>

                        {/* 右侧：人员能力画像 */}
                        <div className="md:col-span-4 bg-white p-4 border border-slate-200/80 space-y-3 flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 bg-slate-900"></span>
                              人员能力画像
                            </span>
                          </div>
                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="flex items-center justify-between py-1.5 border-b border-slate-200 text-slate-900">
                              <span className="text-slate-600 font-medium">属性 1 · 专长</span>
                              <span className="font-bold text-slate-950">擅长业务领域</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5 border-b border-slate-200 text-slate-900">
                              <span className="text-slate-600 font-medium">属性 2 · 质量</span>
                              <span className="font-bold text-slate-950">历史审核准确率</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5 text-slate-900">
                              <span className="text-slate-600 font-medium">属性 3 · 负载</span>
                              <span className="font-bold text-slate-950">在审单量 & 队列</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 运行场景与分配决策示意 */}
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                        <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-slate-950"></span>
                          派单匹配场景决策示例
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-600">精准派发机制</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        {/* 场景 1：体育专长匹配 */}
                        <div className="bg-white p-4 border border-slate-200/80 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">1. 业务专长对口</span>
                              <span className="text-xs font-mono font-bold text-slate-700">
                                领域专长
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm space-y-1.5 text-slate-900">
                              <div>
                                <span className="text-slate-500 font-medium">待分订单：</span>
                                <strong className="font-bold text-slate-950">体育订单</strong>
                              </div>
                              <div>
                                <span className="text-slate-500 font-medium">候选列表：</span>
                                <span className="text-slate-800">审核员A(体育专精) 与 审核员B(真人组)</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2.5 border-t border-slate-200 space-y-1.5">
                            <div className="bg-slate-50 p-2.5 flex items-center justify-between text-xs sm:text-sm">
                              <span className="font-bold text-slate-700">派发决策</span>
                              <strong className="font-bold text-slate-950 font-mono">指派审核员 A</strong>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              体育订单约 <strong className="font-mono font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 border border-blue-200 rounded-xs select-none">80%</strong> 定向分流至专业体育组，提升审核准确度。
                            </p>
                          </div>
                        </div>

                        {/* 场景 2：高绩效优先 */}
                        <div className="bg-white p-4 border border-slate-200 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">2. 质量绩效优先</span>
                              <span className="text-xs font-mono font-bold text-slate-700">
                                质量把关
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm space-y-1.5 text-slate-900">
                              <div>
                                <span className="text-slate-500 font-medium">待分订单：</span>
                                <strong className="font-bold text-slate-950">高额复审订单</strong>
                              </div>
                              <div>
                                <span className="text-slate-500 font-medium">候选列表：</span>
                                <span className="text-slate-800">审核员A(准确率99%) 与 审核员B(常规组)</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2.5 border-t border-slate-200 space-y-1.5">
                            <div className="bg-slate-50 p-2.5 flex items-center justify-between text-xs sm:text-sm">
                              <span className="font-bold text-slate-700">派发决策</span>
                              <strong className="font-bold text-slate-950 font-mono">指派审核员 A</strong>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              优先派发至高绩效资深审核专家，确保高额资产零差错。
                            </p>
                          </div>
                        </div>

                        {/* 场景 3：分组权限控制 */}
                        <div className="bg-white p-4 border border-slate-200 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">3. 权限分层隔离</span>
                              <span className="text-xs font-mono font-bold text-slate-700">
                                风险隔离
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm space-y-1.5 text-slate-900">
                              <div>
                                <span className="text-slate-500 font-medium">待分订单：</span>
                                <strong className="font-bold text-slate-950">S级特级高危订单</strong>
                              </div>
                              <div>
                                <span className="text-slate-500 font-medium">候选列表：</span>
                                <span className="text-slate-800">审核员A(总部资深组) 与 审核员B(外包组)</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2.5 border-t border-slate-200 space-y-1.5">
                            <div className="bg-slate-50 p-2.5 flex items-center justify-between text-xs sm:text-sm">
                              <span className="font-bold text-slate-700">派发决策</span>
                              <strong className="font-bold text-slate-950 font-mono">指派审核员 A</strong>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              落实严格的权限组校验，阻断非受控越权审核与外部利益勾结。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* 阶段 4：对应上方【4. 闭环反馈自进化】 */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                    <div className="flex items-center gap-2">
                      <h6 className="text-base sm:text-lg font-bold text-slate-950">
                        阶段四 · 闭环反馈自进化
                      </h6>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                      <span className="text-xs sm:text-sm font-mono font-bold text-sky-800">
                        周级动态校准 · 策略抗衰减
                      </span>
                    </div>
                  </div>

                  {/* 阶段四 核心定位与业务机制说明 */}
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      建立常态化实盘抽检与自进化闭环：<strong>每周抽检 500+ 重点案例开展专人深度复盘</strong>，深入排查漏检特征与异常波动，动态反哺策略库与评分权重。
                    </div>
                   
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* 支柱 1：召回率动态回溯 */}
                    <div className="bg-slate-50/50 p-4 sm:p-5 space-y-2 border border-slate-200/70">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                        <span className="report-sequence-badge text-xs">1</span>
                        <span>召回率动态回溯</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        <strong>每周选取 500+ 案例开展专人深度复盘</strong>，持续追踪漏网订单与新型作案样本特征，反向闭环填补策略矩阵防御盲区，防止套利模式扩散。
                      </p>
                    </div>

                    {/* 支柱 2：命中率阈值精修 */}
                    <div className="bg-slate-50/50 p-4 sm:p-5 space-y-2 border border-slate-200/70">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                        <span className="report-sequence-badge text-xs">2</span>
                        <span>命中率阈值精修</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        按周微调各规则评分权重与触发阈值，将误拦截率严控在万分级以下，最大化保障良性用户出款体验。
                      </p>
                    </div>

                    {/* 支柱 3：持续对抗推演迭代 */}
                    <div className="bg-slate-50/50 p-4 sm:p-5 space-y-2 border border-slate-200/70">
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

          {/* 4.3.3 云盾体系 · 保密机制防护 */}
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <ReportSubsectionHeader
              title={
                <span className="flex items-center gap-2">
                  <span>4.3.3 云盾体系 · 保密机制防护</span>
                </span>
              }
            />

            {/* 保密机制说明 */}
            <SummaryBox variant="module">
              {highlightNumbers(
                "为防止底层风控规则被外部对抗与逆向试探，云盾体系通过[[“最小知晓范围、链路环节解耦、百项特征周调、闭环自进化”]]等机制，确保策略细节全流程严密受控与动态有效。"
              )}
            </SummaryBox>

            {/* 4 列防线矩阵卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
              {/* 支柱 1：最小范围知晓与定期归档销毁 */}
              <div className="bg-white p-5 border border-slate-200/80 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    1. 最小知晓与归档销毁
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    底层风控规则、策略参数及评分权重严格执行<strong>“最小知晓范围”</strong>，禁止扩散；规则与参数<strong>定期归档离线并销毁</strong>，从源头杜绝策略外泄与逆向分析。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      原则
                    </span>
                    <span className="text-slate-900 font-bold">按需授权 · 周期销毁</span>
                  </div>
                </div>
              </div>

              {/* 支柱 2：多环节组合控制与防窥全貌 */}
              <div className="bg-white p-5 border border-slate-200/80 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    2. 多环节组合受控
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    体系由特征提取、规则校验、风险评分、动态路由等多环节组合构成，<strong>单一模块无法获悉全链路执行逻辑</strong>，彻底杜绝依据单点推导全局风控规则。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      机制
                    </span>
                    <span className="text-slate-900 font-bold">链路解耦 · 权限隔离</span>
                  </div>
                </div>
              </div>

              {/* 支柱 3：上百个特征及参数周级别动态调整 */}
              <div className="bg-white p-5 border border-slate-200/80 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    3. 上百特征周级调参
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    涵盖<strong>上百个特征及核心权重参数</strong>；风控策略组结合实盘样本执行<strong>周级例行指标校准与动态调参</strong>，打破静态规律，保持防御有效性。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      频率
                    </span>
                    <span className="text-slate-900 font-bold">多维特征 · 周级校准</span>
                  </div>
                </div>
              </div>

              {/* 支柱 4：评估反馈机制与自进化更新迭代 */}
              <div className="bg-white p-5 border border-slate-200/80 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    4. 持续对抗与自进化
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    针对灰黑产对抗模式的变异升级，依托召回率动态回溯与命中率周级调整，驱动策略模型持续版本迭代与抗衰减演化。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      迭代
                    </span>
                    <span className="text-slate-900 font-bold">案例复盘 · 持续进化</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
