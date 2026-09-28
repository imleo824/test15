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
import { SystemAuditMonthlyTrendChart } from "./SystemAuditMonthlyTrendChart";

export const SystemAuditEvolutionSection: React.FC = () => {
  return (
    <div id="section-system-audit-evolution" className="space-y-8">
      {/* 4.1 审单模式翻转 */}
      <div className="space-y-4">
        <ReportSectionHeader title="4.1 审单模式演进" />

        {/* 统一文字说明：一句话总结 */}
        <SummaryBox variant="module">
          {highlightNumbers(
            "审单模式由“人工为主”向[[“系统自动为主、人工复核为辅”]]转变：系统审核占比从 [[45.0%]] 提升至 [[80.0%]]（人工审核从 [[55.0%]] 降至 [[20.0%]]）。"
          )}
        </SummaryBox>

        {/* 审单模式结构翻转 看板 */}
        <div className="pt-1">
          {/* 连续流向指向卡：统一向心对比结构（45% ➔ 80% 与 55% ➔ 20%） */}
          <div className="bg-white p-5 sm:p-6 border border-slate-200 border-t-2 border-t-slate-900 space-y-4">
            {/* 行 1：系统审核演进（45.0% ➔ 80.0%） */}
            <div className="bg-slate-50/70 p-3.5 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 border border-slate-200/80">
              {/* 原来：45.0% */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">系统审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">45.0</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 中间指向与变化数字：系统 +35.0% */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-0.5">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight border border-slate-800">
                  <span>系统占比 +35.0%</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              {/* 现在：80.0% */}
              <div className="flex-1 flex items-center justify-between bg-blue-50/70 px-4 sm:px-5 py-3 border border-blue-200 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">80.0</span>
                  <span className="text-sm font-bold text-blue-800">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[11px] sm:text-xs font-bold text-blue-800 uppercase tracking-wider">现在（系统主导）</span>
                  <span className="text-sm sm:text-base font-bold text-blue-950">系统审核占比</span>
                </div>
              </div>
            </div>

            {/* 行 2：人工审核演进（55.0% ➔ 20.0%） */}
            <div className="bg-slate-50/70 p-3.5 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 border border-slate-200/80">
              {/* 原来：55.0% */}
              <div className="flex-1 flex items-center justify-between bg-white px-4 sm:px-5 py-3 border border-slate-200 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">人工审核占比</span>
                </div>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">55.0</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>

              {/* 中间指向与变化数字：人工 -35.0% */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-0.5">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight border border-slate-800">
                  <span>人工占比 -35.0%</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              {/* 现在：20.0% */}
              <div className="flex-1 flex items-center justify-between bg-slate-100/80 px-4 sm:px-5 py-3 border border-slate-300 w-full md:w-auto">
                <div className="flex items-baseline gap-0.5 font-mono">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">20.0</span>
                  <span className="text-sm font-bold text-slate-600">%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">现在（人工兜底）</span>
                  <span className="text-sm sm:text-base font-bold text-slate-950">人工审核占比</span>
                </div>
              </div>
            </div>

            {/* 系统出单比例极限与业务瓶颈深度剖析 */}
            <div className="mt-5 pt-4 border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-300 p-4 sm:p-5 space-y-4">
                {/* 顶部标题与简述 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-700"></span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                      系统出单比例理论上限
                    </h4>
                  </div>
 
                </div>

                {/* 管理结论：置于标题正下方 */}
                <div className="p-4 bg-white border-l-4 border-slate-950 text-sm sm:text-base text-slate-800 leading-relaxed shadow-xs">
                  剩余 <strong className="text-slate-950 font-bold font-mono">30%</strong> 的人工审核是基于<strong>“多账号风险拦截（约15%）+ 历史存量标签兜底（约15%）”</strong>的刚性风控边界；当前 <strong>60%~65%</strong> 的系统出单水平已高度贴近 <strong>70%</strong> 的安全物理极限。
                </div>

                {/* 核心数据呈现：左柱右文 1:1 严格对齐 + 左侧 70% 安全极限精确大括号 */}
                <div className="bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                    {/* 左侧：独立分段立柱区域（左侧清晰包含 70% 安全极限大括号 + 柱体 + 右向引线） */}
                    <div className="lg:col-span-5 bg-slate-50/70 p-3.5 sm:p-4 border border-slate-200 flex flex-col justify-between">
                      {/* 柱顶标头 */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                          订单总量 (100%)
                        </span>
                        <span className="font-mono text-slate-500 text-xs">容量标尺</span>
                      </div>

                      {/* 3 大分段立柱 + 左右大括号体系 */}
                      <div className="w-full my-auto py-2.5 space-y-3 sm:space-y-3.5">
                        {/* 1. 顶部柱段：30% 人工防线 */}
                        <div className="flex items-center justify-end">
                          {/* 左侧占位（保持柱体垂直对齐） */}
                          <div className="w-28 sm:w-32 shrink-0"></div>

                          {/* 柱段 */}
                          <div className="w-24 sm:w-28 h-16 bg-slate-200/90 border-2 border-slate-300 flex items-center justify-center shadow-2xs shrink-0">
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
                            <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-950 bg-amber-100 px-1.5 py-1 border border-amber-300 shadow-2xs whitespace-nowrap mr-1">
                              70% 安全极限
                            </span>
                            {/* 精确包裹 5%~10% 与 60%~65% 的右向开口方括号 */}
                            <div className="h-full w-2.5 border-l-2 border-t-2 border-b-2 border-amber-500 shrink-0"></div>
                          </div>

                          {/* 柱段垂直堆叠 */}
                          <div className="flex flex-col space-y-3 sm:space-y-3.5 shrink-0">
                            {/* 2. 中部柱段：5%~10% 潜能空间 */}
                            <div className="flex items-center">
                              <div className="w-24 sm:w-28 h-14 bg-amber-100/90 border-2 border-amber-300 flex items-center justify-center shadow-2xs shrink-0">
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
                              <div className="w-24 sm:w-28 h-20 bg-blue-600 border-2 border-blue-700 flex items-center justify-center text-white shadow-xs shrink-0">
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
                      <div className="min-h-16 p-3.5 sm:p-4 bg-slate-50 border-l-4 border-slate-700 border border-slate-200 flex flex-col justify-center shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-bold text-slate-900">
                            刚性人工审核比例
                          </span>
                          <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-slate-200 text-slate-800 border border-slate-300">
                            约 30% • 安全极限
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          多账号高危关联（约15%）与存量风险标签兜底（约15%），必须由人工严格把关以阻断穿透。
                        </p>
                      </div>

                      {/* 卡片 2：对齐 5%~10% 潜能空间 */}
                      <div className="min-h-14 p-3.5 sm:p-4 bg-amber-50/70 border-l-4 border-amber-500 border border-amber-200 flex flex-col justify-center shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-bold text-amber-950">
                            逼近系统出单极限
                          </span>
                          <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300">
                            5% ~ 10% • 剩余潜能
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed">
                          还有 <strong className="text-amber-950 font-bold font-mono">5% ~ 10%</strong> 到达系统出单比例安全极限（70%）。
                        </p>
                      </div>

                      {/* 卡片 3：对齐 60%~65% 现状基线 */}
                      <div className="min-h-20 p-3.5 sm:p-4 bg-blue-50/70 border-l-4 border-blue-600 border border-blue-200 flex flex-col justify-center shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-bold text-blue-950">
                            当前系统运行水平
                          </span>
                          <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-blue-600 text-white">
                            60% ~ 65% • 全量常态
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-950/85 mt-1 leading-relaxed">
                          低风险订单全自动秒级放行，覆盖绝大部分常态业务场景，已释放理论自动化潜能的 85%~92%。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 为什么存在 30% 刚性人工拦截？深度拆解 */}
                <div className="space-y-2.5 pt-1">
                  <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-950"></span>
                    <span>成因剖析：为什么必须保留约 30% 的人工审核？</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* 成因 1：平台运营特点与多账号关联 */}
                    <div className="bg-white p-3.5 sm:p-4 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">平台运营特征：多账号关联高发</span>
                        <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-200">
                          高风险拦截约 15%
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        受业务模式与活动运营特点影响，平台<strong className="text-slate-950 font-semibold">多账号关联占比高达 80% 左右</strong>；其中经策略矩阵深度识别后，<strong className="text-slate-950 font-semibold">高风险关联占比约 15% </strong>，该部分订单必须转入人工复审进行资产核验与风险阻断，无法由系统直接放行。
                      </p>
                    </div>

                    {/* 成因 2：存量风控标签历史残留 */}
                    <div className="bg-white p-3.5 sm:p-4 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">历史存量沉淀：存量风控标签留存</span>
                        <span className="text-xs font-mono font-bold px-1.5 py-0.5 bg-slate-100 text-slate-900 border border-slate-200">
                          标签残留约 15%
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        平台历史沉淀了大量被打上风控标签的存量用户；在经历多轮策略去重与标签清理后，<strong className="text-slate-950 font-semibold">带标存量用户依然占整体单量的 15% 左右</strong>。触发历史标签的订单仍需人工校验兜底，构成了系统自动化向 70% 以上渗透的核心硬约束。
                      </p>
                    </div>
                  </div>
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
            "系统自动审核大幅提升处理规模与出款时效：系统替代订单规模从 [[200w单]] 扩大至 [[300万单（增加了 100w）]]，同时将风控阶段单均耗时从 [[18.5 分钟缩短至 2.4 分钟（审核时效提速 87.0%）]]。"
          )}
        </SummaryBox>

        {/* 2 个衍生受益指标卡片阵列（左右 2 列布局，严格水平对齐） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* 受益 1：替代订单规模 */}
          <ReportDimensionCard
            className="border-t-4 border-t-slate-950 shadow-xs"
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  01
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                    替代订单规模
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500 font-mono">
                    全量替代 300w单 / 月增 100w单
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
            {/* 模块 1：左右向心对比结构（严格对称 VS 强化对比样式，固定高度对齐） */}
            <div className="bg-slate-50/70 p-3 sm:p-3.5 border border-slate-200/80 space-y-2.5">
              <div className="relative grid grid-cols-2 gap-3 items-stretch">
                {/* 原来：200 万单 */}
                <div className="bg-white p-3 sm:p-3.5 border border-slate-200 flex flex-col items-center justify-between text-center shadow-2xs relative">
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  </div>
                  <div className="my-1.5">
                    <div className="flex items-baseline justify-center gap-0.5 font-mono">
                      <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">200</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-500">w单</span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium">替代订单规模</span>
                </div>

                {/* 中心浮动 VS 勋章 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-white font-mono font-black text-[11px] sm:text-xs tracking-tight border-2 border-white shadow-sm">
                    VS
                  </span>
                </div>

                {/* 现在：300 万单 */}
                <div className="bg-blue-50/70 p-3 sm:p-3.5 border border-blue-200 flex flex-col items-center justify-between text-center shadow-2xs relative">
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="text-[11px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider">现在（全量开启）</span>
                  </div>
                  <div className="my-1.5">
                    <div className="flex items-baseline justify-center gap-0.5 font-mono">
                      <span className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">300</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-800">w单</span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs text-blue-900 font-medium">替代订单规模</span>
                </div>
              </div>

              {/* 变化指示条 */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight border border-slate-800">
                <span className="text-slate-300 text-xs font-normal">规模演进</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-black">+100w单 (+50.0%)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* 模块 2：核心解释说明（左右等高对齐） */}
            <div className="text-sm sm:text-[15.5px] text-slate-800 font-normal leading-relaxed flex flex-col justify-between gap-3 bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">自动化规模跃升：</strong>
                  <span>云盾系统替代人工审单规模由 </span>
                  <strong className="text-slate-950 font-bold font-mono">200w单 提升至 300w单</strong>
                  <span className="text-slate-700">，净替代增加 100w单（增幅 +50.0%）。</span>
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
            className="border-t-4 border-t-slate-950 shadow-xs"
            title={
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-slate-950 text-white font-mono font-bold text-xs sm:text-sm tracking-tight shrink-0">
                  02
                </span>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                    提升审核时效
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500 font-mono">
                    耗时从 18.5分 骤降至 2.4分
                  </span>
                </div>
              </div>
            }
            badge={
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 text-white text-xs sm:text-sm font-mono font-bold tracking-tight">
                <span>时效提速</span>
                <span className="text-emerald-400 font-black">+87.0%</span>
              </span>
            }
          >
            {/* 模块 1：左右向心对比结构（严格对称 VS 强化对比样式，固定高度对齐） */}
            <div className="bg-slate-50/70 p-3 sm:p-3.5 border border-slate-200/80 space-y-2.5">
              <div className="relative grid grid-cols-2 gap-3 items-stretch">
                {/* 原来：18.5 分钟 */}
                <div className="bg-white p-3 sm:p-3.5 border border-slate-200 flex flex-col items-center justify-between text-center shadow-2xs relative">
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">原来（基线）</span>
                  </div>
                  <div className="my-1.5">
                    <div className="flex items-baseline justify-center gap-0.5 font-mono">
                      <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">18.5</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-500">分</span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium">平均停留时间</span>
                </div>

                {/* 中心浮动 VS 勋章 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-white font-mono font-black text-[11px] sm:text-xs tracking-tight border-2 border-white shadow-sm">
                    VS
                  </span>
                </div>

                {/* 现在：2.4 分钟 */}
                <div className="bg-blue-50/70 p-3 sm:p-3.5 border border-blue-200 flex flex-col items-center justify-between text-center shadow-2xs relative">
                  <div className="flex items-center justify-center gap-1.5 w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="text-[11px] sm:text-xs font-bold text-blue-900 uppercase tracking-wider">现在（全量开启）</span>
                  </div>
                  <div className="my-1.5">
                    <div className="flex items-baseline justify-center gap-0.5 font-mono">
                      <span className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">2.4</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-800">分</span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs text-blue-900 font-medium">平均停留时间</span>
                </div>
              </div>

              {/* 变化指示条 */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm tracking-tight border border-slate-800">
                <span className="text-slate-300 text-xs font-normal">时效演进</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-black">-16.1 分 (-87.0%)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* 模块 2：核心解释说明（左右等高对齐） */}
            <div className="text-sm sm:text-[15.5px] text-slate-800 font-normal leading-relaxed flex flex-col justify-between gap-3 bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">审核时长骤降：</strong>
                  <span>系统自动出单单均仅需 </span>
                  <strong className="text-slate-950 font-bold font-mono">15 秒</strong>
                  <span className="text-slate-700">（原人工审核平均需 8 分钟），全局平均停留时间从 </span>
                  <strong className="text-slate-950 font-bold font-mono">18.5 分钟降至 2.4 分钟</strong>。
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-slate-900 shrink-0 mt-2"></span>
                <div className="leading-relaxed">
                  <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">提款体验跃升：</strong>
                  <span>占总量 </span>
                  <strong className="text-slate-950 font-bold font-mono">80% 的低风险订单</strong>
                  <span>彻底摆脱人工队列排队，实现秒级自动放行，端到端出款体感与客诉指标显著改善。</span>
                </div>
              </div>
            </div>
          </ReportDimensionCard>
        </div>

        {/* 各角色订单结构自身演进趋势对比（8月日均 vs 9月日均 vs 9月30日全量） */}
        <div className="pt-1">
          <SmartDispatchOrderStructure />
        </div>

        {/* 系统出单趋势对比（2026.01 ~ 2026.09） */}
        <div className="pt-1">
          <SystemAuditMonthlyTrendChart />
        </div>
      </div>

      {/* 4.3 智能风控体系架构 */}
      <div id="section-cloud-shield-system" className="space-y-4">
        <ReportSectionHeader title="4.3 云盾风控体系" />

        {/* 机制与支撑说明 */}
          <div className="p-3.5 sm:p-4 bg-slate-50/80 border-l-4 border-slate-900 border border-slate-200/60 text-xs sm:text-[13.5px] font-normal text-slate-700 leading-relaxed">
            审核模式优化由<strong>云盾风控系统</strong>支持。通过 <strong>策略矩阵校验 ➔ 风险评分 ➔ 动态决策 ➔ 效果反馈</strong> 四个环节，明确系统自动放行与人工复审的分工边界，支撑 80.0% 自动化放行目标。
          </div>

          {/* 关键能力对比：原来 与 现在 */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <span className="text-base font-bold text-slate-950">
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
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来是盈利 &gt; 5,000 就一刀切转人工审核；现在系统额外自动识别<strong>全包、对打、打水、关联、睡眠、快进快出、租卖号等</strong>等套利行为，精准拦截套利，正常玩家极速放行。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 2：系统接口直连 */}
              <ReportDimensionCard
                title="② 外部数据联动与底层基建"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                        毫秒级直连
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来审核需要专员手动切换到各个三方游戏场馆和支付后台逐笔查单；现在后台与各场馆及支付系统<strong>接口秒级直连</strong>，注单与资金流水全由系统自动秒级拉取比对。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 3：风险评分 */}
              <ReportDimensionCard
                title="③ 智能决策模型与动态分流"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                        无风险评分
                      </span>
                    </div>

                    {/* 中间 优化升级 */}
                    <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                      <div className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs sm:text-sm whitespace-nowrap mb-1 tracking-tight">
                        动态量化分值
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来新老用户全凭审核专员经验主观判定，尺度易漂移；现在系统结合历史行为特征<strong>实时计算动态风险分</strong>，低风险单系统秒级自动放行，高风险单才精准触发人工复核。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 4：智能匹配分单 */}
              <ReportDimensionCard
                title="④ 智能匹配分单与派单机制"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来工单像发扑克牌一样按顺序机械式平均分配；现在系统根据<strong>工单风险等级、业务类型与审核员专长技能</strong>智能派单（如复杂的体育套利单直派资深专家，新手只处理基础常规单）。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 5：风控工具支持 */}
              <ReportDimensionCard
                title="⑤ 风控工具与审核辅助支持"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来排查关联异常需要开多个后台网页逐个肉眼核对 IP 与设备；现在系统一键生成<strong>关联图谱与玩家全景画像</strong>，设备共用、同 IP 聚集等异常由系统秒级高亮标记辅助快速决议。
                  </div>
                </div>
              </ReportDimensionCard>

              {/* 对比项 6：跨站关联打通 */}
              <ReportDimensionCard
                title="⑥ 跨站关联识别与协同拦截"
                badge={
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
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
                  <div className="text-sm sm:text-[15.5px] text-slate-800 leading-relaxed font-normal bg-slate-50/80 p-4 border-l-4 border-slate-900 border border-slate-200/60">
                    <strong className="text-slate-950 font-bold text-sm sm:text-base mr-1">【场景举例】</strong>原来在<strong>系统审核环节完全不具备跨站关联分析能力</strong>；从风控历史数据来看，<strong>存在跨账号/跨站关联且最终被风控拦截处置的比例至少在 50% 以上</strong>，这一能力在系统审核环节的缺位导致了重大防御盲区。现在系统在自动化审核直出前直接实现<strong>跨站关联风险特征实时识别与比对</strong>（涵盖跨站同设备、同资金链路、多站对冲套利等），能够直接识别并拦截具备跨站关联风险的订单，彻底解决了系统审核环节的这一关键缺失。
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
                "云盾系统构建了覆盖[[“1.提款策略扫描 ➔ 2.计算风险分数 ➔ 3.智能双轨分流 ➔ 4.派单动态匹配 ➔ 5.闭环反馈自进化”]]的端到端运行闭环：实现 [[80% 订单 1.8 秒全自动秒级直出]]，大幅缩短出款耗时；同时针对 [[20% 风险订单实施精准阻断与专家动态派单人工精审]]，确保业务合规与资金安全。"
              )}
            </SummaryBox>

            {/* 全链路运转主流程指示条（含 5 ➔ 1 闭环支线） */}
            <div className="bg-slate-900 text-white p-3.5 sm:p-4 border border-slate-800 space-y-2">
              {/* 5 节点网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 items-stretch text-center">
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
                    <Sliders className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">3. 智能双轨分流</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 4 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-slate-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">4. 派单动态匹配</span>
                  </div>
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-500 z-10 font-bold text-xs">➔</div>
                </div>

                {/* 节点 5 */}
                <div className="flex flex-col items-center justify-center gap-1 bg-slate-800/80 p-2.5 border border-slate-700/60 relative">
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-sky-300 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">5. 闭环反馈自进化</span>
                  </div>
                </div>
              </div>

              {/* 简洁的 5 ➔ 1 支线回路 */}
              <div className="hidden lg:block relative h-7 pt-1">
                <svg className="w-full h-full" viewBox="0 0 1000 24" preserveAspectRatio="none">
                  {/* 从第5列中心(900)引出，向左折返至第1列中心(100)，向上指向第1步 */}
                  <path
                    d="M 900 0 L 900 12 Q 900 18 890 18 L 110 18 Q 100 18 100 12 L 100 7"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                  />
                  {/* 向上指向第1节点的箭头 */}
                  <polygon points="96,7 104,7 100,1" fill="#38bdf8" />
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
                <span>5 ➔ 1 闭环反馈支线（反哺策略库）</span>
              </div>
            </div>

            {/* 5 大核心阶段矩阵：左侧纵向时间轴流转（向下指向） + 右侧各阶段详细内容卡片 */}
            <div className="relative">
              {/* 贯穿全流程的左侧连接主线（桌面端） */}
              <div className="hidden md:block absolute left-8 top-10 bottom-16 w-0.5 bg-slate-200 -z-0"></div>

              <div className="space-y-6">
                {/* 阶段 1：对应上方【1. 提款策略扫描】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-16 shrink-0 flex md:flex-col items-center md:items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-900 text-white flex flex-col items-center justify-center border-2 border-slate-950 shadow-xs">
                        <span className="text-xl font-mono font-black text-white leading-none">01</span>
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-3 text-slate-400">
                        <span className="w-0.5 h-6 bg-slate-300"></span>
                        <span className="text-base text-slate-500 font-bold -mt-1">↓</span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800 border border-slate-300">
                      STEP 1 ➔ 2
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-white p-5 sm:p-6 border border-slate-200 border-l-4 border-l-slate-900 space-y-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <Scale className="w-5 h-5 text-slate-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段一 · 提款策略扫描（42 项策略矩阵多维实时并发校验）
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
                </div>

                {/* 阶段 2：对应上方【2. 计算风险分数】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-16 shrink-0 flex md:flex-col items-center md:items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-900 text-white flex flex-col items-center justify-center border-2 border-slate-950 shadow-xs">
                        <span className="text-xl font-mono font-black text-white leading-none">02</span>
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-3 text-slate-400">
                        <span className="w-0.5 h-6 bg-slate-300"></span>
                        <span className="text-base text-slate-500 font-bold -mt-1">↓</span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800 border border-slate-300">
                      STEP 2 ➔ 3
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-white p-5 sm:p-6 border border-slate-200 border-l-4 border-l-slate-900 space-y-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-slate-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段二 · 计算风险分数（多维特征加权综合评分引擎）
                        </h6>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                        动态加权量化评分标尺
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 space-y-2 border border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                          <Calculator className="w-4 h-4 text-slate-800 shrink-0" />
                          <span>2.1 多维特征加权综合评分</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          汇聚设备环境、行为偏好、注单时序、资金流向及跨站图谱等上百个特征变量，通过评分引擎动态加权，为每笔提款订单输出精准的量化风险综合分值。
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 space-y-2 border border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base pb-2 border-b border-slate-200">
                          <Sliders className="w-4 h-4 text-slate-800 shrink-0" />
                          <span>2.2 刚性分级阈值锚定</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          依据风险分数划定清晰决策区间：<strong>极低风险区间</strong>（满足直出条件，直通自动出款通道）与 <strong>中高风险区间</strong>（触发预警，驱动后续动态派工人工精审）。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 阶段 3：对应上方【3. 智能双轨分流】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-16 shrink-0 flex md:flex-col items-center md:items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-950 text-white flex flex-col items-center justify-center border-2 border-blue-900 shadow-xs">
                        <span className="text-xl font-mono font-black text-amber-300 leading-none">03</span>
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-3 text-slate-400">
                        <span className="w-0.5 h-6 bg-slate-300"></span>
                        <span className="text-base text-slate-500 font-bold -mt-1">↓</span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-blue-50 text-blue-900 border border-blue-200">
                      STEP 3 ➔ 4
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-white p-5 sm:p-6 border border-slate-200 border-l-4 border-l-blue-900 space-y-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-blue-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段三 · 智能双轨分流（80% 自动化秒级直出放行）
                        </h6>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 border border-emerald-300 self-start sm:self-auto">
                        80% 订单 1.8 秒秒级直出
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                            <span className="font-bold text-base text-slate-950">
                              3.1 规则引擎自动化秒级放行
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

                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <Scale className="w-5 h-5 text-blue-800 shrink-0" />
                            <span className="font-bold text-base text-slate-950">
                              3.2 出款时效与客诉体验跃升
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
                </div>

                {/* 阶段 4：对应上方【4. 派单动态匹配】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-16 shrink-0 flex md:flex-col items-center md:items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-900 text-white flex flex-col items-center justify-center border-2 border-slate-950 shadow-xs">
                        <span className="text-xl font-mono font-black text-white leading-none">04</span>
                      </div>
                      <div className="hidden md:flex flex-col items-center mt-3 text-slate-400">
                        <span className="w-0.5 h-6 bg-slate-300"></span>
                        <span className="text-base text-slate-500 font-bold -mt-1">↓</span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-800 border border-slate-300">
                      STEP 4 ➔ 5
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-white p-5 sm:p-6 border border-slate-200 border-l-4 border-l-slate-900 space-y-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-slate-900 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段四 · 派单动态匹配（20% 风险订单专家动态派发与人工精审）
                        </h6>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 border border-slate-300 self-start sm:self-auto">
                        精准派工 · 工具赋能精审
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-slate-800 shrink-0" />
                            <span className="font-bold text-base text-slate-950">
                              4.1 智能派工与多维动态匹配
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

                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-slate-800 shrink-0" />
                            <span className="font-bold text-base text-slate-950">
                              4.2 体育小组单独审核通道
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2 py-0.5 border border-slate-300">
                            专人专项
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed pt-1">
                          针对涉及体育赛事的提款工单，系统建立独立专项通道并<strong>优先分流至体育专审小组</strong>；通过“专人专项”机制发挥业务人员对体育盘口、赛制规则与注单水位的深层研判优势，显著提升审核效率与风控甄别质量。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 阶段 5：对应上方【5. 闭环反馈自进化】 */}
                <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
                  {/* 左侧流程节点指示区 */}
                  <div className="md:w-16 shrink-0 flex md:flex-col items-center md:items-center justify-between md:justify-start pt-1 z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-sky-950 text-white flex flex-col items-center justify-center border-2 border-sky-800 shadow-xs">
                        <span className="text-xl font-mono font-black text-sky-200 leading-none">05</span>
                      </div>
                    </div>
                    {/* 移动端辅助显示阶段名 */}
                    <span className="md:hidden text-xs font-bold font-mono px-2 py-0.5 bg-sky-50 text-sky-900 border border-sky-300">
                      阶段 05 · 闭环自进化
                    </span>
                  </div>

                  {/* 右侧阶段说明内容卡片 */}
                  <div className="flex-1 bg-white p-5 sm:p-6 border border-slate-200 border-l-4 border-l-sky-600 space-y-4 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
                      <div className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-sky-700 shrink-0" />
                        <h6 className="text-base sm:text-lg font-bold text-slate-950">
                          阶段五 · 闭环反馈自进化（双向评估反馈与动态自进化机制）
                        </h6>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 border border-sky-300 self-start sm:self-auto">
                        周级动态校准 · 策略抗衰减
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* 支柱 1：召回率动态回溯 */}
                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                          <span className="report-sequence-badge text-xs">1</span>
                          <span>召回率动态回溯</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          持续追踪漏网订单与新型作案样本特征，反向闭环填补策略矩阵防御盲区，防止套利模式扩散。
                        </p>
                      </div>

                      {/* 支柱 2：命中率阈值精修 */}
                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-950 text-base">
                          <span className="report-sequence-badge text-xs">2</span>
                          <span>命中率阈值精修</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          按周微调各规则评分权重与触发阈值，将误拦截率严控在万分级以下，最大化保障良性用户出款体验。
                        </p>
                      </div>

                      {/* 支柱 3：持续对抗推演迭代 */}
                      <div className="bg-slate-50 p-4 sm:p-5 space-y-2 border border-slate-200">
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
                "为防止底层风控规则被外部对抗与逆向试探，云盾体系通过[[“最小知晓范围、链路环节解耦、百项特征周调、闭环自进化”]]等机制，确保策略细节全流程严密受控与动态有效。"
              )}
            </SummaryBox>

            {/* 4 列防线矩阵卡片：去除外层嵌套大边框，采用扁平利落的卡片矩阵 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
              {/* 支柱 1：最小范围知晓与定期归档销毁 */}
              <div className="bg-slate-50/80 p-4 sm:p-5 border border-slate-200 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-3.5 shadow-2xs">
                <div className="space-y-2">
                  <span className="text-sm sm:text-base font-bold text-slate-950 block">
                    1. 最小知晓与归档销毁
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                    所有底层风控规则、策略参数及评分权重严格执行<strong>“最小知晓范围”</strong>控制，严禁全员公示与跨部门扩散；策略版本推移后，历史实验规则与失效参数<strong>定期归档离线并物理销毁</strong>，从源头杜绝策略外泄与逆向分析。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs font-mono text-slate-900 font-semibold shadow-2xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10.5px] font-bold leading-none uppercase tracking-wider">
                      原则
                    </span>
                    <span className="text-slate-900">按需授权 · 周期销毁</span>
                  </div>
                </div>
              </div>

              {/* 支柱 2：多环节组合控制与防窥全貌 */}
              <div className="bg-slate-50/80 p-4 sm:p-5 border border-slate-200 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-3.5 shadow-2xs">
                <div className="space-y-2">
                  <span className="text-sm sm:text-base font-bold text-slate-950 block">
                    2. 多环节组合受控
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                    整个体系由特征工程、策略校验、风险评分、动态路由及辅助工具等多环节组合协同；各环节严格实行权限解耦与链路隔离，<strong>单一岗位无法窥探全链路判定逻辑</strong>，杜绝通过单点样本试探反推全局拦截规则的可能。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs font-mono text-slate-900 font-semibold shadow-2xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10.5px] font-bold leading-none uppercase tracking-wider">
                      机制
                    </span>
                    <span className="text-slate-900">链路解耦 · 权限隔离</span>
                  </div>
                </div>
              </div>

              {/* 支柱 3：上百个特征及参数周级别动态调整 */}
              <div className="bg-slate-50/80 p-4 sm:p-5 border border-slate-200 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-3.5 shadow-2xs">
                <div className="space-y-2">
                  <span className="text-sm sm:text-base font-bold text-slate-950 block">
                    3. 上百特征周级调参
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                    云盾体系涵盖设备环境、注单时序、资金流向、行为偏好、跨站图谱等<strong>上百个特征及核心权重参数</strong>；风控策略组结合实盘样本执行<strong>周级别的例行指标校准与动态调参</strong>，打破静态规则规律，保持对抗维度的动态不确定性。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs font-mono text-slate-900 font-semibold shadow-2xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10.5px] font-bold leading-none uppercase tracking-wider">
                      频率
                    </span>
                    <span className="text-slate-900">100+特征 · 周级校准</span>
                  </div>
                </div>
              </div>

              {/* 支柱 4：评估反馈机制与自进化更新迭代 */}
              <div className="bg-slate-50/80 p-4 sm:p-5 border border-slate-200 border-t-2 border-t-slate-900 flex flex-col justify-between space-y-3.5 shadow-2xs">
                <div className="space-y-2">
                  <span className="text-sm sm:text-base font-bold text-slate-950 block">
                    4. 持续对抗与自进化
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                    针对灰黑产对抗模式的快速变异升级，依托召回率动态回溯与命中率周级精修，构建实盘推演与双向反馈机制，驱动策略模型持续版本迭代与抗衰减演化。
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-300 text-xs font-mono text-slate-900 font-semibold shadow-2xs">
                    <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10.5px] font-bold leading-none uppercase tracking-wider">
                      态势
                    </span>
                    <span className="text-slate-900">实盘推演 · 策略抗衰减</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
