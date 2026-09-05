import React from "react";
import {
  Users,
  Clock,
  ShieldCheck,
  DollarSign,
  Cpu,
  ShieldAlert,
  Workflow,
  User,
  ArrowRight,
  ArrowLeft,
  Scale,
  CheckCircle,
  RotateCcw
} from "lucide-react";
import {
  ReportPanel,
  ReportPanelHeader
} from "../../ReportSections";
import { highlightNumbers } from "./utils";
import { SmartDispatchOrderStructure } from "./SmartDispatchOrderStructure";

export const SystemAuditEvolutionSection: React.FC = () => {
  return (
    <div id="section-system-audit-evolution" className="space-y-7">
      {/* 顶层：核心指标跃迁总览（第一行3个核心数字 ➔ 大括号引出2个衍生收益） */}
      <ReportPanel>
        {/* 文字说明：极简定性 */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          审单模式由“全人工人海”向“系统自动为主、人工兜底”彻底翻转：系统审核占比从{" "}
          <span className="font-bold text-blue-700 font-mono">14.8%</span> 飙升至{" "}
          <span className="font-bold text-blue-700 font-mono">82.4%</span>（人工审核从{" "}
          <span className="font-bold text-amber-700 font-mono">85.2%</span> 降至{" "}
          <span className="font-bold text-amber-700 font-mono">17.6%</span>
          ），直接驱动人力成本削减 <span className="font-bold text-emerald-700 font-mono">67.6%</span>（年省 828 万元）与出款时效提速 <span className="font-bold text-blue-700 font-mono">87.0%</span>（由 18.5分 降至 2.4分）两大核心收益。
        </p>

        {/* 核心结构：第一行 3 个数字 (14.8% ➔ 82.4% ➔ +67.6 pct 极简指向流向) */}
        <div className="pt-2">
          {/* 第一行：系统审核占比极简指向流向看板 */}
          <div className="p-4 sm:p-5 rounded-md bg-slate-50/80 border border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                  核心根本变化 · 审单模式结构翻转（系统审核占比）
                </span>
              </div>
            </div>

            {/* 极简流向卡片：基线 VS 现状 */}
            <div className="bg-white py-6 sm:py-7 px-4 rounded-md border border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* 原来 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs sm:text-sm font-bold text-slate-400 tracking-wider mb-1">
                    原来
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-slate-600 tracking-tight">
                      14.8
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-400">%</span>
                  </div>
                </div>

                {/* 中间：VS 与 跨越变化 */}
                <div className="sm:col-span-2 flex flex-col items-center justify-center py-2 sm:py-0">
                  <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded bg-emerald-700 text-white font-mono font-bold text-sm sm:text-base whitespace-nowrap mb-1">
                    +67.6 pct
                  </div>
                  <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                    VS
                  </span>
                </div>

                {/* 现在 */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                  <span className="text-xs sm:text-sm font-bold text-blue-600 tracking-wider mb-1">
                    现在
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-blue-600 tracking-tight">
                      82.4
                    </span>
                    <span className="text-base sm:text-lg font-black text-blue-500">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 大括号分叉连接器 (Bracket Visual Connector - 2路分叉) */}
          <div className="my-2.5 px-4 hidden sm:flex flex-col items-center">
            {/* 上部引线 */}
            <div className="w-0.5 h-3 bg-blue-400"></div>

            {/* 大括号中心节点标签 */}
            <div className="px-3.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black rounded-full shadow-xs flex items-center gap-1.5">
              <span>引出驱动两大直接收益</span>
              <span className="text-blue-200">↴</span>
            </div>

            {/* 水平展开支架与下垂双引线 */}
            <div className="w-full relative h-4 mt-1">
              {/* 水平贯穿横线 (连接 25% 到 75%) */}
              <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-blue-300 rounded-full"></div>
              {/* 垂直下垂至 2 个卡片中心的两条引线 */}
              <div className="absolute top-0 left-[25%] w-0.5 h-4 bg-blue-300"></div>
              <div className="absolute top-0 right-[25%] w-0.5 h-4 bg-blue-300"></div>
            </div>
          </div>

          {/* 移动端简易提示 */}
          <div className="sm:hidden text-center my-3">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 font-black text-xs rounded-full border border-blue-200">
              ↴ 由此驱动产生 2 大业务直接收益
            </span>
          </div>

          {/* 大括号内包含的 2 个衍生受益指标（同样采用 基线 ➔ 现状 ➔ 变化 形式，附带精简解释） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 受益 1：降低人力成本 */}
            <div className="p-4 rounded-xl border-2 border-emerald-200/90 bg-emerald-50/20 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs sm:text-sm font-black text-emerald-950">
                    ① 降低人力成本（月用工支出）
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded font-mono">
                  年化净省 828 万元
                </span>
              </div>

              {/* 内部极简对比：基线 VS 现状，大号 VS 视觉冲击 */}
              <div className="bg-white/90 py-5 px-3 rounded-lg border border-emerald-200/80 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider mb-0.5">
                      原来
                    </span>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-slate-600 tracking-tight">
                        102.0
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-400">万</span>
                    </div>
                  </div>

                  {/* 中间：大大的 VS 与 变化幅度 (进一步加大模块与字体) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-emerald-600 text-white font-mono font-black text-sm sm:text-base shadow-sm whitespace-nowrap mb-0.5 tracking-tight">
                      -67.6%
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-700 tracking-wider mb-0.5">
                      现在
                    </span>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 tracking-tight">
                        33.0
                      </span>
                      <span className="text-xs sm:text-sm font-black text-emerald-600">万</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 极简核心解释说明 */}
              <div className="pt-2 text-[11px] text-slate-600 font-medium leading-relaxed border-t border-emerald-200/60 flex flex-col gap-1">
                <div>• <strong>人员编制优化：</strong>专职审单 FTE 从 68人 优化至 22人（削减 46人），月薪酬支出从 102.0万 压减至 33.0万。</div>
                <div>• <strong>人均产能倍增：</strong>人均月审单由 2.35万单 提至 10.0万单/人（提速 4.25倍），单均审核成本由 0.64元 降至 0.15元。</div>
              </div>
            </div>

            {/* 受益 2：提升审核时效 */}
            <div className="p-4 rounded-xl border-2 border-blue-200/90 bg-blue-50/20 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-blue-200/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span className="text-xs sm:text-sm font-black text-blue-950">
                    ② 提升审核时效（平均到账耗时）
                  </span>
                </div>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-100/80 px-2 py-0.5 rounded font-mono">
                  系统 1.8 秒秒级直出
                </span>
              </div>

              {/* 内部极简对比：基线 VS 现状，大号 VS 视觉冲击 */}
              <div className="bg-white/90 py-5 px-3 rounded-lg border border-blue-200/80 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider mb-0.5">
                      原来
                    </span>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-slate-600 tracking-tight">
                        18.5
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-400">分</span>
                    </div>
                  </div>

                  {/* 中间：大大的 VS 与 变化幅度 (进一步加大模块与字体) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-mono font-black text-sm sm:text-base shadow-sm whitespace-nowrap mb-0.5 tracking-tight">
                      提速 87%
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-wider mb-0.5">
                      现在
                    </span>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-blue-600 tracking-tight">
                        2.4
                      </span>
                      <span className="text-xs sm:text-sm font-black text-blue-600">分</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 极简核心解释说明 */}
              <div className="pt-2 text-[11px] text-slate-600 font-medium leading-relaxed border-t border-blue-200/60 flex flex-col gap-1">
                <div>• <strong>系统秒级直出：</strong>82.4% 订单由引擎 1.8 秒全自动放行直出，平均到账耗时由 18.5 分钟骤降至 2.4 分钟。</div>
                <div>• <strong>高峰排队消融：</strong>比赛高峰排队积压率由 42.6% 降至 1.2%，出款客诉率由 8.4% 压降至 0.9%，大客户复充提升 18.2%。</div>
              </div>
            </div>
          </div>
        </div>
      </ReportPanel>

      {/* 一、订单结构（由原 5.0/4.3 智能派单迁移至此） */}
      <SmartDispatchOrderStructure />

      {/* 二、云盾体系：从0到1打造领先的智能化风控闭环体系 */}
      <div id="section-cloud-shield-system" className="report-business-section space-y-5">
        <ReportPanel className="system-audit-flow-panel report-panel-stack">
          <ReportPanelHeader
            icon={<ShieldAlert className="h-5 w-5 text-indigo-600" />}
            title="二、云盾体系：从0到1打造领先的智能化风控闭环体系"
            badge="技术落地中枢"
          />

          {/* 破局总结：直接说明机制与支撑 */}
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs font-bold text-blue-950 leading-relaxed">
            💡 <strong>底层实现机制：</strong>前面业务收益的底层支撑，源自自建的云盾闭环体系。通过 <strong>策略矩阵校验 ➔ 风险评分 ➔ 分流决策 ➔ 效果反馈</strong> 四大环节，从根本上解决“何时自动直出”与“何时转入人工”，筑牢 82.4% 自动化底座。
          </div>

          {/* 关键能力跃迁对比：原来 VS 现在 (每个指标独立一行，宽幅大气 VS 呈现) */}
          <div className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-4 sm:p-5 space-y-3.5 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>关键事项与技术能力跃迁</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                能力全面升维 · 筑牢自动审核底座
              </span>
            </div>

            <div className="space-y-3">
              {/* 对比项 1：套利策略 (独立整行) */}
              <div className="bg-white/95 p-4 sm:p-5 rounded-xl border border-emerald-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    ① 套利与对冲防御策略
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-mono border border-emerald-200">
                    策略矩阵维度
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-slate-400 tracking-wider mb-1">
                      原来
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-600 tracking-tight">
                      无套利策略
                    </span>
                    <span className="text-xs text-slate-400 mt-1">依赖人工肉眼排查 · 漏判高发</span>
                  </div>

                  {/* 中间 VS (带徽标) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-emerald-600 text-white font-mono font-black text-xs sm:text-sm shadow-sm whitespace-nowrap mb-1 tracking-tight">
                      +29项防御规则
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-emerald-700 tracking-wider mb-1">
                      现在
                    </span>
                    <span className="text-lg sm:text-xl font-black text-emerald-600 tracking-tight">
                      补充套利策略
                    </span>
                    <span className="text-xs text-emerald-700 font-bold mt-1">29项防御规则实时拦截 · 毫秒生效</span>
                  </div>
                </div>
              </div>

              {/* 对比项 2：B端API (独立整行) */}
              <div className="bg-white/95 p-4 sm:p-5 rounded-xl border border-blue-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    ② 外部数据联动与底层基建
                  </span>
                  <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full font-mono border border-blue-200">
                    底层基建维度
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-slate-400 tracking-wider mb-1">
                      原来
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-600 tracking-tight">
                      无 B端 API
                    </span>
                    <span className="text-xs text-slate-400 mt-1">信息孤岛离线核验 · 无法自动比对</span>
                  </div>

                  {/* 中间 VS (带徽标) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-mono font-black text-xs sm:text-sm shadow-sm whitespace-nowrap mb-1 tracking-tight">
                      毫秒级直连
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-blue-700 tracking-wider mb-1">
                      现在
                    </span>
                    <span className="text-lg sm:text-xl font-black text-blue-600 tracking-tight">
                      引入 B端 API
                    </span>
                    <span className="text-xs text-blue-700 font-bold mt-1">跨系统秒级联动 · 全自动数据核验</span>
                  </div>
                </div>
              </div>

              {/* 对比项 3：风险评分 (独立整行) */}
              <div className="bg-white/95 p-4 sm:p-5 rounded-xl border border-indigo-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    ③ 智能决策模型与动态分流
                  </span>
                  <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full font-mono border border-indigo-200">
                    量化分流维度
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-slate-400 tracking-wider mb-1">
                      原来
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-600 tracking-tight">
                      无风险评分
                    </span>
                    <span className="text-xs text-slate-400 mt-1">凭人工经验主观判 · 尺度漂移</span>
                  </div>

                  {/* 中间 VS (带徽标) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-indigo-600 text-white font-mono font-black text-xs sm:text-sm shadow-sm whitespace-nowrap mb-1 tracking-tight">
                      动态量化分值
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-indigo-700 tracking-wider mb-1">
                      现在
                    </span>
                    <span className="text-lg sm:text-xl font-black text-indigo-600 tracking-tight">
                      引入风险评分
                    </span>
                    <span className="text-xs text-indigo-700 font-bold mt-1">量化阈值智能分流 · 秒级放行/人工复核</span>
                  </div>
                </div>
              </div>

              {/* 对比项 4：智能匹配分单 (独立整行) */}
              <div className="bg-white/95 p-4 sm:p-5 rounded-xl border border-purple-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    ④ 智能匹配分单与派单机制
                  </span>
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full font-mono border border-purple-200">
                    派单调度维度
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* 原来 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-slate-400 tracking-wider mb-1">
                      原来
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-600 tracking-tight">
                      简单轮询
                    </span>
                    <span className="text-xs text-slate-400 mt-1">盲目平均派单 · 高危单分配初级人员</span>
                  </div>

                  {/* 中间 VS (带徽标) */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-1 sm:py-0">
                    <div className="px-3.5 py-1 rounded-full bg-purple-600 text-white font-mono font-black text-xs sm:text-sm shadow-sm whitespace-nowrap mb-1 tracking-tight">
                      多因子匹配
                    </div>
                    <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-slate-300 select-none leading-none">
                      VS
                    </span>
                  </div>

                  {/* 现在 */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-purple-700 tracking-wider mb-1">
                      现在
                    </span>
                    <span className="text-lg sm:text-xl font-black text-purple-600 tracking-tight">
                      多因子智能匹配
                    </span>
                    <span className="text-xs text-purple-700 font-bold mt-1">技能组/风险等级/负载动态最优路由</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 云盾核心全链路闭环流程机制 */}
          <div className="space-y-3 pt-1">
            <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
              <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                <Workflow className="h-4 w-4 text-blue-600" />
                <span>云盾全链路闭环审核流程</span>
              </h5>
              <span className="text-xs font-mono font-bold text-slate-500">
                拦截 - 复核 - 反馈自进化机制
              </span>
            </div>

            {/* 流程图主容器 */}
            <div className="system-audit-flow-grid">
              {/* 1. 提款申请节点 */}
              <div className="system-audit-flow-node">
                <div className="system-audit-flow-terminal">
                  <User className="w-4 h-4 text-white shrink-0" />
                  <span>用户申请</span>
                </div>
              </div>

              {/* 连接箭头：提款申请 -> 系统审核 */}
              <div className="system-audit-flow-arrow">
                <ArrowRight className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
              </div>

              {/* 2. 策略矩阵校验 */}
              <div className="system-audit-flow-main">
                <div className="system-audit-flow-main-title">
                  <Scale className="w-4 h-4 text-white" />
                  系统审核
                </div>

                {/* 步骤一、二、三 横向三列排布 */}
                <div className="system-audit-step-grid">
                  {/* 步骤一：策略矩阵校验 */}
                  <div className="system-audit-step-card">
                    <div className="system-audit-step-title">
                      <span className="report-sequence-badge">1</span>
                      <span>策略矩阵校验</span>
                    </div>

                    <div className="system-audit-rule-stack">
                      {/* 防御型规则 */}
                      <div className="system-audit-rule-box">
                        <div className="system-audit-rule-head">
                          <span>防御型规则</span>
                          <span>29个</span>
                        </div>
                        <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                          <div>
                            <span className="font-black text-slate-900">异常行为 (17个)：</span>
                            模拟器、快进快出、钱包负数、高盈利、倍数异常、短时大额、首提等
                          </div>
                          <div>
                            <span className="font-black text-slate-900">账户安全 (4个)：</span>
                            新设备、睡眠账号、资料变更后、新绑账户等
                          </div>
                          <div>
                            <span className="font-black text-slate-900">状态关联 (8个)：</span>
                            高危标签、关联账号、白名单、特殊上标、转账失败、二次结算、租卖号
                          </div>
                        </div>
                      </div>

                      {/* 作弊型规则 */}
                      <div className="system-audit-rule-box">
                        <div className="system-audit-rule-head">
                          <span>作弊型规则</span>
                          <span>10个</span>
                        </div>
                        <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                          <div>
                            <span className="font-black text-slate-900">对冲 (2个)：</span>
                            棋牌全包、操盘全包
                          </div>
                          <div>
                            <span className="font-black text-slate-900">活动 (4个)：</span>
                            命中多个特征、特邀、超额、高占比
                          </div>
                          <div>
                            <span className="font-black text-slate-900">游戏 (4个)：</span>
                            低赔率占比高、电子卡免费、命中多个特征
                          </div>
                        </div>
                      </div>

                      {/* B端风控接口 */}
                      <div className="system-audit-rule-box">
                        <div className="system-audit-rule-head">
                          <span>B端协同</span>
                          <span>3个</span>
                        </div>
                        <div className="space-y-2 text-sm leading-relaxed text-slate-600 font-semibold">
                          <div>
                            <span className="font-black text-slate-900">接口：</span>
                            体育、真人、电子的风控接口实时对接；（彩票：待开发）
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 步骤二：计算风险分数 */}
                  <div className="system-audit-step-card">
                    <div className="system-audit-step-title">
                      <span className="report-sequence-badge">2</span>
                      <span>计算风险分数</span>
                    </div>

                    <div className="system-audit-score-box">
                      <div className="system-audit-score-title">
                        <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>特征汇总计算分数</span>
                      </div>
                      <p>
                        {highlightNumbers(
                          "系统汇总命中的[[策略规则特征]]，综合加权计算[[订单综合风险分值]]。"
                        )}
                      </p>
                      <div className="system-audit-decision-judge" aria-label="分值与参数判定">
                        <div className="system-audit-decision-diamond">
                          <div>
                            <span>分值 &gt; 参数</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 步骤三：系统输出决策 */}
                  <div className="system-audit-step-card">
                    <div className="system-audit-step-title">
                      <span className="report-sequence-badge">3</span>
                      <span>系统输出决策</span>
                    </div>

                    <div className="system-audit-decision-stack system-audit-decision-stack--mapped">
                      <div className="system-audit-decision-title">
                        <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>基于分值参数判断</span>
                      </div>
                      <p className="system-audit-decision-description">
                        针对不同的 VIP 等级设置差异化风险阈值，决定直接秒级放行或转人工：
                      </p>

                      <div className="system-audit-decision-results">
                        {/* 直接出单放行 */}
                        <div className="system-audit-decision-box system-audit-decision-box--safe">
                          <div>
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>直接出单放行 (82.4%)</span>
                          </div>
                          <p>≤ 阈值由系统 1.8 秒直出</p>
                        </div>

                        {/* 转入人工审核 */}
                        <div className="system-audit-decision-box system-audit-decision-box--risk">
                          <div>
                            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>转入人工审核 (17.6%)</span>
                          </div>
                          <p>&gt; 阈值由系统转人工精审</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 反向连接箭头：评估反馈 -> 系统审核 */}
              <div className="system-audit-flow-arrow">
                <ArrowLeft className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
              </div>

              {/* 3. 评估反馈 */}
              <div className="system-audit-feedback">
                <div className="system-audit-flow-terminal">
                  <RotateCcw className="w-4 h-4 text-white shrink-0" />
                  <span>评估反馈</span>
                </div>

                {/* 效果归因回溯 */}
                <div className="system-audit-feedback-box">
                  <div className="system-audit-feedback-head">
                    <span>效果归因回溯</span>
                  </div>
                  <div className="system-audit-feedback-list">
                    <div>
                      <div>
                        <span className="report-sequence-badge">1</span>问题召回率回溯
                      </div>
                      <p>还原漏网提单特征，持续提升攻击拦截率与覆盖。</p>
                    </div>
                    <div>
                      <div>
                        <span className="report-sequence-badge">2</span>问题命中率回溯
                      </div>
                      <p>精细化阈值参数调优，最大程度减少正常用户的拦截。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReportPanel>
      </div>
    </div>
  );
};
