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
  Scan
} from "lucide-react";
import {
  ReportDimensionCard,
  ReportSectionHeader,
  ReportSubsectionHeader
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
            "审单模式实现[[系统自动为主、人工兜底为辅]]的[[根本性重构]]：系统审核占比由 [[45.0%]] 跃升至常态 [[65.0%]]（人工审核压降至 [[35.0%]]，逼近 [[30%]] 刚性安全边界）。"
          )}
        </SummaryBox>

        {/* 审单模式结构翻转 看板 */}
        <div className="space-y-6">
          {/* 连续流向指向卡：统一向心对比结构（45% ➔ 65% 与 55% ➔ 35%） */}
          <div className="bg-slate-50/60 p-5 sm:p-6 border-t-2 border-slate-900 space-y-4">
            {/* 行 1：系统审核演进（45.0% ➔ 65.0%） */}
            <div className="bg-white p-3.5 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* 原来：45.0% */}
              <div className="flex-1 flex items-center justify-between bg-slate-50 px-4 sm:px-5 py-3 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">系统审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">45.0</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 中间指向与变化数字：系统 +20.0% */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-0.5">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight">
                  <span>系统占比 +20.0%</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              {/* 现在：65.0% */}
              <div className="flex-1 flex items-center justify-between bg-blue-50/80 px-4 sm:px-5 py-3 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">65.0</span>
                  <span className="text-sm font-bold text-blue-800">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[11px] sm:text-xs font-bold text-blue-800 uppercase tracking-wider">现在（全量常态）</span>
                  <span className="text-sm sm:text-base font-bold text-blue-950">系统审核占比</span>
                </div>
              </div>
            </div>

            {/* 行 2：人工审核演进（55.0% ➔ 35.0%） */}
            <div className="bg-white p-3.5 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* 原来：55.0% */}
              <div className="flex-1 flex items-center justify-between bg-slate-50 px-4 sm:px-5 py-3 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">人工审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">55.0</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 中间指向与变化数字：人工 -20.0% */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-0.5">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight">
                  <span>人工占比 -20.0%</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              {/* 现在：35.0% */}
              <div className="flex-1 flex items-center justify-between bg-slate-100/90 px-4 sm:px-5 py-3 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">35.0</span>
                  <span className="text-sm font-bold text-slate-600">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">现在（人工兜底）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-950">人工审核占比</span>
                </div>
              </div>
            </div>
          </div>

          {/* 系统出单比例极限与业务瓶颈深度剖析 */}
          <div className="bg-slate-50/60 p-5 sm:p-6 border-t-2 border-slate-900 space-y-5">
            {/* 顶部标题与简述 */}
            <div className="flex items-center gap-2 pb-1">
              <span className="w-2.5 h-2.5 bg-blue-700"></span>
              <h4 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                系统出单比例理论上限与刚性安全边界
              </h4>
            </div>

            {/* 管理结论：置于【成因剖析】标题正下方 */}
            <div className="p-4 bg-white border-l-4 border-slate-900 text-sm sm:text-base text-slate-800 leading-relaxed">
              基于<strong>“多账号风险拦截（约15%）+ 历史存量标签兜底（约15%）”</strong>的刚性风控边界；当前 <strong>60%~65%</strong> 的系统出单水平已高度贴近 <strong>70%</strong> 的安全物理极限。
            </div>

            {/* 成因 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 成因 1：平台运营特点与多账号关联 */}
              <div className="bg-white p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">平台运营特征：多账号关联高发</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-900">
                    关联风险拦截约 15%
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
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-900">
                    标签残留约 15%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  平台沉淀了大量被打上标签的用户；在经历多轮策略去重与标签清理后，<strong className="text-slate-950 font-semibold">带标存量用户依然占整体单量的 15% 左右</strong>，触发历史标签的订单仍需人工校验兜底。
                </p>
              </div>
            </div>

            {/* 核心数据呈现：左柱右文 1:1 严格对齐 + 左侧 70% 安全极限精确大括号 */}
            <div className="bg-slate-50/50 p-4 sm:p-5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                {/* 左侧：独立分段立柱区域（左侧清晰包含 70% 安全极限大括号 + 柱体 + 右向引线） */}
                <div className="lg:col-span-5 bg-white p-4 flex flex-col justify-between">
                  {/* 柱顶标头 */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                      订单总量 (100%)
                    </span>
                  </div>

                  {/* 3 大分段立柱 + 左右大括号体系 */}
                  <div className="w-full my-auto py-2.5 space-y-3 sm:space-y-3.5">
                    {/* 1. 顶部柱段：30% 人工防线 */}
                    <div className="flex items-center justify-end">
                      {/* 左侧占位（保持柱体垂直对齐） */}
                      <div className="w-28 sm:w-32 shrink-0"></div>

                      {/* 柱段 */}
                      <div className="w-24 sm:w-28 h-16 bg-slate-200/90 flex items-center justify-center shrink-0">
                        <span className="text-xs sm:text-sm font-mono font-bold text-slate-700">
                          30%
                        </span>
                      </div>

                      {/* 右侧大括号引线 */}
                      <div className="w-6 flex items-center text-slate-500 font-mono text-xs shrink-0 pl-1">
                        <div className="h-9 border-r-2 border-t-2 border-b-2 border-slate-400 w-2 relative flex items-center">
                          <span className="absolute -right-2 text-xs font-black">▶</span>
                        </div>
                      </div>
                    </div>

                    {/* 2 & 3. 组合柱段：被「70% 安全极限」大括号精确包含 */}
                    <div className="flex items-stretch justify-end">
                      {/* 左侧大括号区域：包含标签与精确开向右侧的方括号 */}
                      <div className="w-28 sm:w-32 flex items-center justify-end pr-1.5 shrink-0 select-none">
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-950 bg-amber-100 px-1.5 py-1 whitespace-nowrap mr-1">
                          70% 安全边界
                        </span>
                        {/* 精确包裹 5%~10% 与 60%~65% 的右向开口方括号 */}
                        <div className="h-full w-2.5 border-l-2 border-t-2 border-b-2 border-amber-500 shrink-0"></div>
                      </div>

                      {/* 柱段垂直堆叠 */}
                      <div className="flex flex-col space-y-3 sm:space-y-3.5 shrink-0">
                        {/* 2. 中部柱段：5%~10% 潜能空间 */}
                        <div className="flex items-center">
                          <div className="w-24 sm:w-28 h-14 bg-amber-100/90 flex items-center justify-center shrink-0">
                            <span className="text-xs sm:text-sm font-mono font-black text-amber-950">
                              5%~10%
                            </span>
                          </div>
                          {/* 右侧引线 */}
                          <div className="w-6 flex items-center text-amber-600 font-mono text-xs shrink-0 pl-1">
                            <div className="h-8 border-r-2 border-t-2 border-b-2 border-amber-500 w-2 relative flex items-center">
                              <span className="absolute -right-2 text-xs font-black">▶</span>
                            </div>
                          </div>
                        </div>

                        {/* 3. 底部柱段：60%~65% 系统出单 */}
                        <div className="flex items-center">
                          <div className="w-24 sm:w-28 h-20 bg-blue-600 flex items-center justify-center text-white shrink-0">
                            <span className="text-base sm:text-lg font-mono font-black tracking-tight">
                              60%~65%
                            </span>
                          </div>
                          {/* 右侧引线 */}
                          <div className="w-6 flex items-center text-blue-600 font-mono text-xs shrink-0 pl-1">
                            <div className="h-12 border-r-2 border-t-2 border-b-2 border-blue-600 w-2 relative flex items-center">
                              <span className="absolute -right-2 text-xs font-black">▶</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右侧：3 大分段严格 1:1 垂直对齐解析卡片 */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-3.5 my-auto">
                  {/* 卡片 1：对齐 30% 刚性人工防线 */}
                  <div className="min-h-16 p-3.5 sm:p-4 bg-white border-l-4 border-slate-400 flex flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        刚性人工审核比例
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-800">
                        约 30% • 安全边界
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      多账号高危关联（约15%）与存量风险标签兜底（约15%），必须由人工严格把关以阻断穿透。
                    </p>
                  </div>

                  {/* 卡片 2：对齐 5%~10% 潜能空间 */}
                  <div className="min-h-14 p-3.5 sm:p-4 bg-white border-l-4 border-amber-500 flex flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-amber-950">
                        逼近系统出单极限
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-900">
                        5% ~ 10% • 剩余潜能
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed">
                      还有 <strong className="text-amber-950 font-bold font-mono">5% ~ 10%</strong> 到达系统出单比例安全边界（70%）。
                    </p>
                  </div>

                  {/* 卡片 3：对齐 60%~65% 现状基线 */}
                  <div className="min-h-20 p-3.5 sm:p-4 bg-white border-l-4 border-blue-600 flex flex-col justify-center">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-blue-950">
                        当前系统运行水平
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-blue-600 text-white">
                        60% ~ 65% • 全量常态
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      低风险订单全自动秒级放行，覆盖绝大部分常态业务场景，已释放理论自动化潜能的 ~90%。
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

        {/* 核心收益一句话说明 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "系统自动审核[[大幅提升规模与时效]]：以 [[500万]] 总单量测算，系统出单由 [[225w单]] 增至 [[300w单]]，全盘平均停留时间由 [[4.51分钟]] 压降至 [[3.35分钟]]（[[时效提速 25.8%]]）。"
          )}
        </SummaryBox>

        {/* 2 个衍生受益指标卡片阵列（左右 2 列布局，严格水平对齐） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* 受益 1：替代订单规模 */}
          <ReportDimensionCard
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  01
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                    替代订单规模
                  </span>
                </div>
              </div>
            }
            badge={
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-white text-xs sm:text-sm font-mono font-bold tracking-tight">
                <span>规模增幅</span>
                <span className="text-emerald-400 font-black">+50.0%</span>
              </span>
            }
          >
            {/* 模块 1：左右向心对比结构 */}
            <div className="relative grid grid-cols-2 gap-3 items-stretch">
              {/* 原来：200 万单 */}
              <div className="bg-white p-4 flex flex-col items-center justify-between text-center relative">
                <div className="flex items-center justify-center gap-1.5 w-full">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-400"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                </div>
                <div className="my-2">
                  <div className="flex items-baseline justify-center gap-0.5 font-mono">
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">200</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-500">万单</span>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">替代订单规模</span>
              </div>

              {/* 中心浮动 对比 标识 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] bg-slate-950 text-white font-bold text-[11px] sm:text-xs tracking-tight border border-white">
                  对比
                </span>
              </div>

              {/* 现在：300 万单 */}
              <div className="bg-blue-50/60 p-4 flex flex-col items-center justify-between text-center relative">
                <div className="flex items-center justify-center gap-1.5 w-full">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-blue-600"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider">现在（全量开启）</span>
                </div>
                <div className="my-2">
                  <div className="flex items-baseline justify-center gap-0.5 font-mono">
                    <span className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">300</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-800">万单</span>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-blue-900 font-medium">替代订单规模</span>
              </div>
            </div>

            {/* 模块 2：核心解释说明（左右等高对齐） */}
            <div className="text-sm sm:text-[15.5px] text-slate-800 font-normal leading-relaxed flex flex-col justify-between gap-3 bg-white p-4 border-l-2 border-slate-900 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">自动化规模跃升：</strong>
                  <span>云盾系统替代人工审单规模由 </span>
                  <strong className="text-slate-950 font-bold font-mono">200 万单提升至 300 万单</strong>
                  <span className="text-slate-700">，净替代增加 100 万单（增幅 +50.0%）。</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">人力减负与差错止损：</strong>
                  <span>替代外包 </span>
                  <strong className="text-slate-950 font-bold font-mono">50万+ 订单</strong>
                  <span>，直接释放外包 </span>
                  <strong className="text-slate-950 font-bold font-mono">100+ 人力</strong>
                  <span>，外包差错实现</span>
                  <strong className="text-slate-950 font-bold font-mono"> 月度止损 50万+ 元</strong>
                  <span>；总部审单同步精减 </span>
                  <strong className="text-slate-950 font-bold font-mono">50万+ 单</strong>
                  <span>；全量开启后月度综合业务价值约 </span>
                  <strong className="text-slate-950 font-bold font-mono">300万/月</strong>。
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
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                    提升审核时效
                  </span>
                </div>
              </div>
            }
            badge={
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-white text-xs sm:text-sm font-mono font-bold tracking-tight">
                <span>时效提速</span>
                <span className="text-emerald-400 font-black">+25.8%</span>
              </span>
            }
          >
            {/* 模块 1：左右向心对比结构 */}
            <div className="relative grid grid-cols-2 gap-3 items-stretch">
              {/* 原来：4.51 分钟 */}
              <div className="bg-white p-4 flex flex-col items-center justify-between text-center relative">
                <div className="flex items-center justify-center gap-1.5 w-full">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-slate-400"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                </div>
                <div className="my-2">
                  <div className="flex items-baseline justify-center gap-0.5 font-mono">
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">4.51</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-500">分</span>
                  </div>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  <span>平均停留时间</span>
                </div>
              </div>

              {/* 中心浮动 对比 标识 */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-[2px] bg-slate-950 text-white font-bold text-[11px] sm:text-xs tracking-tight border border-white">
                  对比
                </span>
              </div>

              {/* 现在：3.35 分钟 */}
              <div className="bg-blue-50/60 p-4 flex flex-col items-center justify-between text-center relative">
                <div className="flex items-center justify-center gap-1.5 w-full">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-blue-600"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider">现在（全量开启）</span>
                </div>
                <div className="my-2">
                  <div className="flex items-baseline justify-center gap-0.5 font-mono">
                    <span className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">3.35</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-800">分</span>
                  </div>
                </div>
                <div className="text-[11px] sm:text-xs text-blue-900 font-medium">
                  <span>平均停留时间</span>
                </div>
              </div>
            </div>

            {/* 模块 2：核心解释说明（左右等高对齐） */}
            <div className="text-sm sm:text-[15.5px] text-slate-800 font-normal leading-relaxed flex flex-col justify-between gap-3 bg-white p-4 border-l-2 border-slate-900 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">全盘平均停留缩短：</strong>
                  <span>按总单量 500万 测算（人审单均 8 分钟、系统单均 15 秒），加权平均停留时间从 </span>
                  <strong className="text-slate-950 font-bold font-mono">4.51 分钟降至 3.35 分钟</strong>
                  <span className="text-slate-700">，净压缩 </span>
                  <strong className="text-slate-950 font-bold font-mono">1.16 分钟</strong>
                  <span className="text-slate-700">（全盘时效提速 </span>
                  <strong className="text-emerald-700 font-bold font-mono">+25.8%</strong>
                  <span className="text-slate-700">）。</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">转系统单秒级直出：</strong>
                  <span>系统审核规模由 225万增至 300万，释放的 </span>
                  <strong className="text-slate-950 font-bold font-mono">75 万单</strong>
                  <span>由原 8 分钟降至 15 秒（提速 96.9%）；占总量 </span>
                  <strong className="text-slate-950 font-bold font-mono">60% 的系统订单（300万单）</strong>
                  <span>彻底摆脱人工排队，端到端出款体感显著改善。</span>
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
            "从0到1打造了[[云盾风控体系]]支持审核模式优化。通过 [[策略矩阵校验 ➔ 风险评分 ➔ 动态决策 ➔ 效果反馈]] 四个环节，[[明确系统自动放行与人工复审的分工边界]]，支撑系统自动化目标。"
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

            <div className="flex flex-col gap-6">
              {/* 对比项 1：套利策略 */}
              <ReportDimensionCard
                title="① 增加套利策略"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    策略矩阵
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        无套利策略
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        +29 项套利规则
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        补充套利策略
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来盈利 &gt; xxx 等防御性的策略一律转人工；现在系统自动识别<strong>全包、对打、打水、关联、快进快出、租卖号</strong>等套利行为，精准拦截违规，正常玩家极速放行。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 2：系统接口直连 */}
              <ReportDimensionCard
                title="② 外部数据联动"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    底层基建
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        无系统接口直连
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        秒级直连
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        引入系统接口直连
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来专员需手动登录三方场馆逐笔查单；现在一些核心场馆<strong>接口秒级直连</strong>，实时共享风控信息。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 3：风险评分 */}
              <ReportDimensionCard
                title="③ 智能决策模型"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    量化分流
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        无风险评分体系
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        模型分级
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        引入风险评分
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来凭专员经验主观判定，尺度易漂移；现在结合行为特征<strong>实时计算动态风险分</strong>，低风险秒级放行，高风险精准触发人工复核。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 4：智能匹配分单 */}
              <ReportDimensionCard
                title="④ 智能派单机制"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    派单调度
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        简单轮询
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        多因子匹配
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        多因子智能匹配
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来工单按顺序机械轮询；现在根据<strong>风险等级、业务类型与审核员专长</strong>智能派单（如复杂的体育套利单直派资深专家，基础单派普通专员）。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 5：风控工具支持 */}
              <ReportDimensionCard
                title="⑤ 风控工具支持"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    审核工具
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        传统人工核查
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        一站式工具链
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        引入风控工具链
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来排查关联需跨系统肉眼比对，现在一键生成<strong>关联图谱</strong>等异常由系统自动辅助决策，大幅提升执行效率。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 6：跨站关联打通 */}
              <ReportDimensionCard
                title="⑥ 跨站关联识别"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono">
                    跨站协同
                  </span>
                }
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    {/* 原来 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-slate-500 tracking-wider mb-1">
                        原来
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                        无跨站关联能力
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        跨站关联打通
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase select-none">
                        优化升级
                      </span>
                    </div>

                    {/* 现在 */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-blue-800 tracking-wider mb-1">
                        现在
                      </span>
                      <span className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                        跨站关联即时识别
                      </span>
                    </div>
                  </div>

                  {/* 业务场景说明 */}
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-white p-3.5 border-l-2 border-slate-900">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来<strong>系统审核环节不具备跨站关联分析能力</strong>，而历史被拦截处置的高危订单中 <strong>50% 以上存在跨账号/跨站关联</strong>，形成重大防御盲区。现在系统在自动放行前<strong>实时识别比对跨站特征</strong>（跨站同设备、同资金链路、多站对冲等），直接识别拦截跨站风险，补齐关键防线。
                  </div>
                </div>
              </ReportDimensionCard>
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
                "云盾构建[[“策略扫描 ➔ 风险评分 ➔ 动态派单 ➔ 闭环反馈进化”]]全链路闭环，以数据、特征、策略、评分与流程为支撑，[[实现系统自动放行与人工精审的高效协同]]。"
              )}
            </SummaryBox>

            {/* 全链路运转主流程指示条（含 4 ➔ 1 闭环支线） */}
            <div className="bg-slate-900 text-white p-3.5 sm:p-4 border border-slate-800 space-y-2">
              {/* 4 节点网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 items-stretch text-center">
                {/* 节点 1 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">1. 提款策略扫描</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 2 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">2. 计算风险分数</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 3 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">3. 派单动态匹配</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 4 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-sky-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">4. 闭环反馈自进化</span>
                  </div>
                </div>
              </div>

              {/* 简洁的 4 ➔ 1 支线回路 */}
              <div className="hidden lg:block relative h-7 pt-1">
                <svg className="w-full h-full" viewBox="0 0 1000 24" preserveAspectRatio="none">
                  {/* 从第4列中心(875)引出，向左折返至第1列中心(125)，向上指向第1步 */}
                  <path
                    d="M 875 0 L 875 12 Q 875 18 865 18 L 135 18 Q 125 18 125 12 L 125 7"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                  />
                  {/* 向上指向第1节点的箭头 */}
                  <polygon points="121,7 129,7 125,1" fill="#38bdf8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[11px] font-mono text-sky-300 bg-slate-900 px-2.5 py-0.5 border border-sky-500/40">
                    ⮐ 闭环反馈支线（反哺策略库）
                  </span>
                </div>
              </div>

              {/* 移动端简洁支线文字 */}
              <div className="lg:hidden flex items-center justify-center gap-1.5 text-xs text-sky-300 font-mono pt-1">
                <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                <span>4 ➔ 1 闭环反馈支线（反哺策略库）</span>
              </div>
            </div>

            {/* 4 大核心阶段矩阵：左侧纵向时间轴流转（向下指向） + 右侧各阶段详细内容卡片 */}
            <div className="relative">
              {/* 贯穿全流程的左侧连接主线（桌面端） */}
              <div className="hidden md:block absolute left-5 top-8 bottom-12 w-px bg-slate-200 -z-0"></div>

              <div className="space-y-8 sm:space-y-10">
                    {/* 阶段 1：对应上方【1. 提款策略扫描】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-5">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-10 shrink-0 flex md:flex-col items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
                        01
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-2 text-slate-300">
                        <span className="w-px h-6 bg-slate-300"></span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800">
                      STEP 1 ➔ 2
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <Scan className="w-5 h-5 text-slate-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段一 · 提款策略扫描
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 bg-white px-2.5 py-0.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                          50+ 项策略探针穿透
                        </span>
                      </div>
                    </div>

                    {/* 4列策略扫描结果表格 (全量规则名称透视) */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 text-xs font-mono font-bold border-b border-slate-300">
                            <th className="py-2.5 px-3 w-[18%]">分类</th>
                            <th className="py-2.5 px-3 w-[42%]">子项策略名称</th>
                            <th className="py-2.5 px-3 w-[16%] text-center">风险分数</th>
                            <th className="py-2.5 px-3 w-[24%] text-center">
                              <span className="inline-flex items-center gap-1">
                                扫描结果 <span className="text-[11px] text-slate-500 font-normal">(45 正常 / <span className="text-rose-600 font-bold">5 异常</span>)</span>
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                          {[
                            {
                              category: "账户",
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
                              items: [
                                { name: "领取特邀红利超额", score: "+30分", isError: true },
                                { name: "高红利占比", score: "0分", isError: false },
                                { name: "领取红利后首提", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "新手",
                              items: [
                                { name: "前N次提款", score: "0分", isError: false },
                                { name: "红利超过限定额度", score: "0分", isError: false },
                                { name: "大额提款", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            },
                            {
                              category: "行为",
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
                              items: [
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800", name: "低赔率注单占比高", score: "0分", isError: false },
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800", name: "有二次结算注单", score: "0分", isError: false },
                                { tag: "体育", tagColor: "bg-sky-50 text-sky-800", name: "B端-下注行为异常", score: "0分", isError: false },
                                { tag: "真人", tagColor: "bg-purple-50 text-purple-800", name: "B端-下注行为异常", score: "0分", isError: false },
                                { tag: "棋牌", tagColor: "bg-amber-50 text-amber-800", name: "命中多个套利特征", score: "0分", isError: false },
                                { tag: "棋牌", tagColor: "bg-amber-50 text-amber-800", name: "全包", score: "0分", isError: false },
                                { tag: "彩票", tagColor: "bg-emerald-50 text-emerald-800", name: "全包", score: "0分", isError: false },
                                { tag: "彩票", tagColor: "bg-emerald-50 text-emerald-800", name: "高盈利额", score: "0分", isError: false },
                                { tag: "电子", tagColor: "bg-indigo-50 text-indigo-800", name: "卡免费", score: "0分", isError: false },
                                { tag: "电子", tagColor: "bg-indigo-50 text-indigo-800", name: "B端-下注行为异常", score: "0分", isError: false },
                                { name: "……", score: "-", isError: false }
                              ]
                            }
                          ].map((group, groupIdx) => (
                            <React.Fragment key={groupIdx}>
                              {group.items.map((sub, itemIdx) => {
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
                                  : sub.isError
                                  ? "bg-rose-50/40"
                                  : "bg-white";

                                const maskStrategyName = (name: string): string => {
                                  if (name === "……") return "……";
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
                                  <td className={`py-1 px-3 ${
                                    sub.name === "……"
                                      ? "text-slate-400 font-mono tracking-widest text-[11px]"
                                      : sub.isError
                                      ? "text-rose-950 font-bold"
                                      : "text-slate-800 font-medium"
                                  }`}>
                                    <div className="flex items-center gap-1.5">
                                      {sub.tag && (
                                        <span className={`px-1.5 py-0.2 font-bold text-[10px] shrink-0 ${sub.tagColor}`}>
                                          【{sub.tag}】
                                        </span>
                                      )}
                                      <span className="font-mono tracking-tight">
                                        {maskStrategyName(sub.name)}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-1 px-3 text-center font-mono text-[11px]">
                                    {sub.isError ? (
                                      <span className="font-bold text-rose-700 bg-rose-100/80 px-1.5 py-0.5">
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
                                      <span className="inline-flex items-center gap-1 font-bold text-rose-700 bg-rose-50 px-2 py-0.5 text-[11px] font-mono">
                                        <XCircle className="w-3 h-3 text-rose-600 shrink-0" />
                                        异常
                                      </span>
                                    ) : (
                                      <span className={`inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 text-[11px] font-mono ${sub.name === "……" ? "opacity-80" : ""}`}>
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
                    </div>
                  </div>
                </div>

                {/* 阶段 2：对应上方【2. 计算风险分数】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-5">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-10 shrink-0 flex md:flex-col items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
                        02
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-2 text-slate-300">
                        <span className="w-px h-6 bg-slate-300"></span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800">
                      STEP 2 ➔ 3
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片：简版量化决策流程示意 */}
                  <div className="flex-1 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-slate-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段二 · 计算风险分数
                        </h6>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-white px-2.5 py-0.5 self-start sm:self-auto">
                        4 步核心链路示意
                      </span>
                    </div>

                    {/* 简版流程示意图: 计算分数 ➔ 总分 ➔ 比较参数 ➔ 决定是否转给人 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs sm:text-sm relative">
                      {/* 1. 计算分数 */}
                      <div className="bg-white p-4 border-t-2 border-slate-900 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2 py-0.5">01</span>
                            <Calculator className="w-4 h-4 text-slate-700" />
                          </div>
                          <h6 className="font-bold text-slate-950 text-base pt-0.5">1. 计算分数</h6>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            阶段一策略特征校验，逐项计算各风险特征加权分值（如: 命中高危标签 +25分、快进快出 +20分）。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono text-slate-600 font-medium">
                          特征因子加权计分
                        </div>
                      </div>

                      {/* 2. 总分 */}
                      <div className="bg-white p-4 border-t-2 border-slate-900 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2 py-0.5">02</span>
                            <Scale className="w-4 h-4 text-slate-700" />
                          </div>
                          <h6 className="font-bold text-slate-950 text-base pt-0.5">2. 总分</h6>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            多维特征评分引擎综合加权汇总，输出当前提款申请单的总风险分值。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5">
                          例如: 累计得分 105 分
                        </div>
                      </div>

                      {/* 3. 比较参数 */}
                      <div className="bg-white p-4 border-t-2 border-slate-900 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                            <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2 py-0.5">03</span>
                            <Sliders className="w-4 h-4 text-slate-700" />
                          </div>
                          <h6 className="font-bold text-slate-950 text-base pt-0.5">3. 比较参数</h6>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            比对风控安全放行线阈值参数（如: 规则放行线 60 分）。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-200 text-xs sm:text-sm font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5">
                          比对: 105分 ≥ 60分
                        </div>
                      </div>

                      {/* 4. 决定是否转给人 */}
                      <div className="bg-slate-900 text-white p-4 flex flex-col justify-between space-y-2 relative">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                            <span className="text-xs font-mono font-bold bg-rose-500 text-white px-2 py-0.5">04</span>
                            <UserCheck className="w-4 h-4 text-amber-300" />
                          </div>
                          <h6 className="font-bold text-white text-base pt-0.5">4. 决定是否转给人</h6>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            超出放行安全分值，触发风控防御阻断并转人工精审；未超线直接自动放行。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-800 text-xs sm:text-sm font-mono font-bold text-rose-300 flex items-center gap-1">
                          <span>➔ 决策: 阻断转人工</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 阶段 3：对应上方【3. 派单动态匹配】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-5">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-10 shrink-0 flex md:flex-col items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
                        03
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-2 text-slate-300">
                        <span className="w-px h-6 bg-slate-300"></span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800">
                      STEP 3 ➔ 4
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-slate-950 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段三 · 派单动态匹配
                        </h6>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-blue-950 bg-blue-50 px-2.5 py-1 self-start sm:self-auto">
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
                        <span>双向加权动态派单架构</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-stretch">
                        {/* 左侧：订单特征画像 */}
                        <div className="md:col-span-4 bg-white p-4 border-t-2 border-slate-900 space-y-3 flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 bg-slate-900"></span>
                              订单特征画像
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-800 bg-slate-200 px-2 py-0.5">3 大维度</span>
                          </div>
                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="flex items-center justify-between py-1.5 border-b border-slate-200 text-slate-900">
                              <span className="text-slate-600 font-medium">维度 1 · 金额</span>
                              <span className="font-bold text-slate-950">提款金额规模</span>
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
                          <div className="flex items-center justify-center gap-2 text-blue-300 text-xs font-mono font-bold">
                            <span>➔</span>
                            <Sliders className="w-5 h-5 text-emerald-400" />
                            <span>⮐</span>
                          </div>
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
                        <div className="md:col-span-4 bg-white p-4 border-t-2 border-slate-900 space-y-3 flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                            <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 bg-slate-900"></span>
                              人员能力画像
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-800 bg-slate-200 px-2 py-0.5">3 大属性</span>
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
                          典型派单匹配场景与决策示例
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-600">精准派发机制</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        {/* 场景 1：体育专长匹配 */}
                        <div className="bg-white p-4 border-t-2 border-slate-900 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">1. 业务专长对口</span>
                              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-900">
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
                              体育订单约80%给到体育组，提升准确度。
                            </p>
                          </div>
                        </div>

                        {/* 场景 2：高绩效优先 */}
                        <div className="bg-white p-4 border-t-2 border-slate-900 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">2. 质量绩效优先</span>
                              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-900">
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
                              优先高绩效资深专家处理，确保质量零差错。
                            </p>
                          </div>
                        </div>

                        {/* 场景 3：分组权限控制 */}
                        <div className="bg-white p-4 border-t-2 border-slate-900 space-y-3 flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                              <span className="text-xs sm:text-sm font-bold text-slate-950">3. 权限分层隔离</span>
                              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-900">
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
                              严格权限校验，杜绝越权审查与防套取。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 阶段 4：对应上方【4. 闭环反馈自进化】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-5">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-10 shrink-0 flex md:flex-col items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
                        04
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800">
                      阶段 04 · 闭环自进化
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-sky-700 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段四 · 闭环反馈自进化
                        </h6>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                        <span className="text-xs sm:text-sm font-mono font-bold text-blue-950 bg-blue-50 px-2.5 py-0.5">
                          专人复盘 <strong className="text-blue-900 font-black">500+</strong> 例/周
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5">
                          周级动态校准 · 策略抗衰减
                        </span>
                      </div>
                    </div>

                    {/* 阶段四 核心定位与业务机制说明 */}
                    <div className="p-3.5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-900 leading-relaxed font-normal flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        建立常态化实盘抽检与自进化闭环：<strong>每周都会找到 500+ 案例进行专人复盘分析</strong>，深入排查漏检特征与异常波动，动态反哺策略库与评分权重。
                      </div>
                     
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* 支柱 1：召回率动态回溯 */}
                      <div className="bg-white p-4 sm:p-5 space-y-2 border-t-2 border-slate-900">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                          <span className="report-sequence-badge text-xs">1</span>
                          <span>召回率动态回溯</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          <strong>每周选取 500+ 案例开展专人深度复盘</strong>，持续追踪漏网订单与新型作案样本特征，反向闭环填补策略矩阵防御盲区，防止套利模式扩散。
                        </p>
                      </div>

                      {/* 支柱 2：命中率阈值精修 */}
                      <div className="bg-white p-4 sm:p-5 space-y-2 border-t-2 border-slate-900">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                          <span className="report-sequence-badge text-xs">2</span>
                          <span>命中率阈值精修</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          按周微调各规则评分权重与触发阈值，将误拦截率严控在万分级以下，最大化保障良性用户出款体验。
                        </p>
                      </div>

                      {/* 支柱 3：持续对抗推演迭代 */}
                      <div className="bg-white p-4 sm:p-5 space-y-2 border-t-2 border-slate-900">
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
              <div className="bg-slate-50/70 p-5 border-t-2 border-slate-900 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    1. 最小知晓与归档销毁
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    底层风控规则、策略参数及评分权重严格执行<strong>“最小知晓范围”</strong>，禁止扩散；规则与参数<strong>定期归档离线并销毁</strong>，从源头杜绝策略外泄与逆向分析。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      原则
                    </span>
                    <span className="text-slate-900 font-bold">按需授权 · 周期销毁</span>
                  </div>
                </div>
              </div>

              {/* 支柱 2：多环节组合控制与防窥全貌 */}
              <div className="bg-slate-50/70 p-5 border-t-2 border-slate-900 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    2. 多环节组合受控
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    体系由特征提取、规则校验、风险评分、动态路由等多环节组合构成，<strong>单一功能无法准确影响全链路执行逻辑</strong>，极难知道一个点反推全局规则。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      机制
                    </span>
                    <span className="text-slate-900 font-bold">链路解耦 · 权限隔离</span>
                  </div>
                </div>
              </div>

              {/* 支柱 3：上百个特征及参数周级别动态调整 */}
              <div className="bg-slate-50/70 p-5 border-t-2 border-slate-900 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    3. 上百特征周级调参
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    涵盖<strong>上百个特征及核心权重参数</strong>；风控策略组结合实盘样本执行<strong>周级例行指标校准与动态调参</strong>，打破静态规律，保持防御有效性。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      频率
                    </span>
                    <span className="text-slate-900 font-bold">100+特征 · 周级校准</span>
                  </div>
                </div>
              </div>

              {/* 支柱 4：评估反馈机制与自进化更新迭代 */}
              <div className="bg-slate-50/70 p-5 border-t-2 border-slate-900 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className="text-base font-bold text-slate-950 block">
                    4. 持续对抗与自进化
                  </span>
                  <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                    针对灰黑产对抗模式的变异升级，依托召回率动态回溯与命中率周级调整，驱动策略模型持续版本迭代与抗衰减演化。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white text-xs font-mono text-slate-900 font-semibold">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-xs font-bold leading-none uppercase tracking-wider">
                      态势
                    </span>
                    <span className="text-slate-900 font-bold">周级调整 · 策略抗衰减</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
