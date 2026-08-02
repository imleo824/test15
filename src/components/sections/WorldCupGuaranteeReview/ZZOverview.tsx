import React from "react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Clock3,
  Cpu,
  Crosshair,
  Database,
  GitBranch,
  RotateCw,
  ShieldAlert,
  ShieldCheck,
  Target,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { highlightNumbers } from "./utils";

const flywheelSteps = [
  {
    number: "1",
    title: "提升系统审核比例",
    desc: ["规则、模型、特征优化", "让系统承担更多低风险订单"],
    icon: BarChart3,
    tone: "blue",
    className: "business-flywheel-card-one",
    tag: "破局点 / 切入点",
  },
  {
    number: "2",
    title: "人工审核量下降",
    desc: ["人工处理单量减少", "审核资源更聚焦"],
    icon: UsersRound,
    tone: "blue",
    className: "business-flywheel-card-two",
  },
  {
    number: "3",
    title: "人工审核风险浓度提升",
    desc: ["人工收到的订单更“有问题”", "无效审核减少"],
    icon: Crosshair,
    tone: "blue",
    className: "business-flywheel-card-three",
  },
  {
    number: "4",
    title: "质量提升 & 时效提升",
    desc: ["处理更快，积压更少", "误判、漏判减少"],
    icon: Clock3,
    tone: "blue",
    className: "business-flywheel-card-four",
  },
  {
    number: "5",
    title: "结果沉淀与反哺系统",
    desc: ["审核结果、标签、案例沉淀", "持续优化规则与模型"],
    icon: Database,
    tone: "blue",
    className: "business-flywheel-card-five",
  },
];

export const ZZOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="report-card business-flywheel-shell p-6 overflow-hidden">
        <div className="business-flywheel">
        {/* 页眉标题 */}
        <div className="business-flywheel-head flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <RotateCw className="w-6 h-6 text-blue-700 shrink-0" />
            <h3 className="text-xl font-black text-slate-900">质量效率飞轮</h3>
          </div>
          <div className="business-flywheel-logic-strip flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50/60 px-3 py-1.5 text-xs font-bold text-slate-900">
            <span className="shrink-0 rounded bg-blue-600 px-1.5 py-0.5 text-xs font-black text-white">指标逻辑</span>
            <span>{highlightNumbers("过程支撑指标（[[安全底线]]）→ 支撑核心业务目标（[[系统放行率提升至 80%]]）→ 进而实现终极管理目标（[[降本增效]]）")}</span>
          </div>
        </div>

        {/* 业务目标与支撑指标的逻辑体系 */}
        <div className="business-flywheel-goal-chain flex flex-col lg:flex-row lg:items-stretch gap-4 mt-4 mb-6">
          {/* 1. 质量指标（安全底线） - 起始基石 (最浅) */}
          <div className="business-flywheel-goal-stage business-flywheel-goal-stage--quality flex-1 w-full bg-blue-50/30 border border-blue-100 rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <span className="report-sequence-badge shrink-0">1</span>
                <span className="text-base font-black text-slate-900">质量指标（安全底线）</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-bold">
                指标需达到以下阈值是必要条件，下文会详细说明。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-50 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">问题召回率</span>
                <span className="text-lg font-black text-blue-600 tabular-nums mt-1">≥ 70.6%</span>
              </div>
              
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-50 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">问题命中率</span>
                <span className="text-lg font-black text-blue-600 tabular-nums mt-1">≥ 6.75%</span>
              </div>
              
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-50 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">系统错误率</span>
                <span className="text-lg font-black text-blue-600 tabular-nums mt-1">≤ 0.7%</span>
              </div>
            </div>
          </div>

          {/* 粗箭头 1 */}
          <div className="business-flywheel-goal-arrow flex items-center justify-center shrink-0 py-1 lg:py-0 self-center">
            <ArrowRight className="hidden lg:block w-7 h-7 text-blue-400 stroke-[3.5]" />
            <ArrowDown className="lg:hidden w-7 h-7 text-blue-400 stroke-[3.5]" />
          </div>

          {/* 2. 业务目标（放行配比） - 核心过程支撑 (中等) */}
          <div className="business-flywheel-goal-stage business-flywheel-goal-stage--business flex-1 w-full bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <span className="report-sequence-badge shrink-0">2</span>
                <span className="text-base font-black text-slate-900">业务目标（放行配比）</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-bold">
                提升系统直出比例，让人工审核聚焦高风险订单。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-100 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">系统审核率</span>
                <div className="mt-1 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-slate-900 font-bold text-xs">45%</span>
                  <span className="text-xs text-slate-900">→</span>
                  <span className="text-lg font-black text-blue-700">80%</span>
                </div>
              </div>
              
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-100 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">人工审核率</span>
                <div className="mt-1 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-slate-900 font-bold text-xs">55%</span>
                  <span className="text-xs text-slate-900">→</span>
                  <span className="text-lg font-black text-blue-700">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 粗箭头 2 */}
          <div className="business-flywheel-goal-arrow flex items-center justify-center shrink-0 py-1 lg:py-0 self-center">
            <ArrowRight className="hidden lg:block w-7 h-7 text-blue-500 stroke-[3.5]" />
            <ArrowDown className="lg:hidden w-7 h-7 text-blue-500 stroke-[3.5]" />
          </div>

          {/* 3. 管理目标（降本增效） - 终极演进终点 (最深) */}
          <div className="business-flywheel-goal-stage business-flywheel-goal-stage--management flex-1 w-full bg-blue-100 border border-blue-300 rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <span className="report-sequence-badge shrink-0">3</span>
                <span className="text-base font-black text-slate-900">管理目标（降本增效）</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-bold">
                优化资源结构，降低人力成本，提升审核时效。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-200 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">人力成本</span>
                <span className="text-lg font-black text-blue-800 tabular-nums mt-1">降低 ≥ -50%</span>
              </div>
              
              <div className="business-flywheel-goal-metric flex flex-col items-center justify-center bg-white px-1 py-3 rounded border border-blue-200 text-center shadow-xs">
                <span className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">审核时效</span>
                <span className="text-lg font-black text-blue-800 tabular-nums mt-1">减少 ≥ -3min</span>
              </div>
            </div>
          </div>
        </div>

        {/* 飞轮主舞台 */}
        <div className="business-flywheel-stage">
          {/* SVG 矢量连接弧线与正向箭头 */}
          <svg className="business-flywheel-svg" viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker
                id="flywheel-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="var(--report-blue)" />
              </marker>
            </defs>

            {/* 背景正圆轨迹 */}
            <circle cx="500" cy="260" r="210" fill="none" stroke="var(--report-line)" strokeWidth="1.5" strokeDasharray="6 6" />

            {/* 顺时针正向连接弧线与箭头 */}
            {/* 1 -> 2 */}
            <path
              d="M 540 68 A 210 210 0 0 1 680 180"
              fill="none"
              stroke="var(--report-blue)"
              strokeWidth="2.5"
              markerEnd="url(#flywheel-arrow)"
            />
            {/* 2 -> 3 */}
            <path
              d="M 705 240 A 210 210 0 0 1 635 390"
              fill="none"
              stroke="var(--report-blue)"
              strokeWidth="2.5"
              markerEnd="url(#flywheel-arrow)"
            />
            {/* 3 -> 4 */}
            <path
              d="M 585 448 A 210 210 0 0 1 415 448"
              fill="none"
              stroke="var(--report-blue)"
              strokeWidth="2.5"
              markerEnd="url(#flywheel-arrow)"
            />
            {/* 4 -> 5 */}
            <path
              d="M 365 390 A 210 210 0 0 1 295 240"
              fill="none"
              stroke="var(--report-blue)"
              strokeWidth="2.5"
              markerEnd="url(#flywheel-arrow)"
            />
            {/* 5 -> 1 */}
            <path
              d="M 320 180 A 210 210 0 0 1 460 68"
              fill="none"
              stroke="var(--report-blue)"
              strokeWidth="2.5"
              markerEnd="url(#flywheel-arrow)"
            />
          </svg>

          {/* 中心核心目标 */}
          <div className="business-flywheel-center">
            <div className="business-flywheel-center-badge">核心目标</div>
            <div className="business-flywheel-center-goals">
              <strong>质量更高</strong>
              <strong>时效更快</strong>
              <strong>成本更低</strong>
            </div>
          </div>

          {/* 5个卡片 */}
          <div className="business-flywheel-grid">
            {flywheelSteps.map((step) => {
              const Icon = step.icon;
              const isHighlight = step.number === "1";

              return (
                <div
                  key={step.number}
                  className={`business-flywheel-card ${step.className} ${
                    isHighlight ? "business-flywheel-card-highlight" : ""
                  }`}
                >
                  <div className="business-flywheel-card-top">
                    <div className="flex items-center gap-2">
                      <span className={`business-flywheel-number ${isHighlight ? "business-flywheel-number--highlight" : "bg-blue-600"}`}>
                        {step.number}
                      </span>
                      <h4 className="text-base font-black text-slate-900 m-0">{step.title}</h4>
                    </div>
                    {step.tag && (
                      <span className="business-flywheel-tag">
                        {step.tag}
                      </span>
                    )}
                  </div>

                  <div className="business-flywheel-card-body">
                    <Icon className={`business-flywheel-icon ${isHighlight ? "business-flywheel-icon-red" : ""}`} />
                    <div className="business-flywheel-card-copy space-y-0.5">
                      {step.desc.map((line) => (
                        <p key={line} className="text-xs font-bold text-slate-900 m-0 leading-tight">
                          • {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

      {/* 飞轮落地拆解过渡模块（独立的段落与4个核心方向卡片，不在框内） */}
      <div className="space-y-3.5 pt-2">
        <div className="flex items-center gap-2.5 text-slate-900 font-black text-base px-1">
          <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 shrink-0"></span>
          <span>为实现“质量效率飞轮”目标，将从以下 4 个核心方向进行拆解与落地：</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-sm font-black text-blue-900 bg-blue-50 border border-blue-200/90 px-2 py-0.5 rounded">
                3.1 风险前置
              </span>
              <ShieldAlert className="w-4.5 h-4.5 text-blue-600 shrink-0" />
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed m-0">
              跨站关联与自动上标，前置拦截与提升审核效率
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-sm font-black text-blue-900 bg-blue-50 border border-blue-200/90 px-2 py-0.5 rounded">
                3.2 系统审核
              </span>
              <Cpu className="w-4.5 h-4.5 text-blue-600 shrink-0" />
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed m-0">
              规则模型直出与拦截，持续提升系统自动审核率
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-sm font-black text-blue-900 bg-blue-50 border border-blue-200/90 px-2 py-0.5 rounded">
                3.3 智能派单
              </span>
              <GitBranch className="w-4.5 h-4.5 text-blue-600 shrink-0" />
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed m-0">
              风险分级与精细派发，优化审单结构与匹配效率
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-sm font-black text-blue-900 bg-blue-50 border border-blue-200/90 px-2 py-0.5 rounded">
                3.4 人工审核
              </span>
              <UserCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
            </div>
            <p className="text-sm font-bold text-slate-700 leading-relaxed m-0">
              通过流程改造、绩效改革与工具支持，全面提升人工审核质效
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
