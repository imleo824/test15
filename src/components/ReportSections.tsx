import React from "react";
import { Check, ChevronRight } from "lucide-react";

export type ReportHeadingLevel =
  | "chapter"
  | "section"
  | "panel"
  | "module"
  | "subsection";

export const ReportHeading: React.FC<{
  level: ReportHeadingLevel;
  children: React.ReactNode;
  icon?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ level, children, icon, rightContent, className = "" }) => {
  const Tag = level === "chapter" ? "h2" : level === "section" || level === "panel" ? "h3" : "h4";

  return (
    <div className={`report-heading report-heading--${level} ${className}`}>
      <div className="report-heading-main">
        {icon ? <span className="report-heading-icon">{icon}</span> : null}
        <Tag>{children}</Tag>
      </div>
      {rightContent ? <div className="report-heading-aside">{rightContent}</div> : null}
    </div>
  );
};

export const ChapterTitle: React.FC<{
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
}> = ({ children, eyebrow, className = "" }) => {
  return (
    <div className={`report-chapter-title border-t border-slate-200 pt-8 sm:pt-10 pb-3 mb-0 ${className}`}>
      {eyebrow && (
        <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-500 mb-2 uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-tight">
        {children}
      </h2>
    </div>
  );
};

export const ReportPanel: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft";
  padding?: "none" | "sm" | "md" | "lg";
}> = ({ children, className = "", id, tone = "default", padding = "md" }) => {
  const toneClass = tone === "soft" ? "report-surface--soft" : "report-surface--default";

  return (
    <div id={id} className={`report-surface ${toneClass} report-surface--padding-${padding} ${className}`}>
      {children}
    </div>
  );
};

export const ReportBadge: React.FC<{
  children: React.ReactNode;
  tone?: "blue" | "slate" | "green" | "amber" | "red" | "indigo";
  className?: string;
}> = ({ children, tone = "blue", className = "" }) => {
  return (
    <span
      className={`report-badge report-badge--${tone} ${className}`}
    >
      {children}
    </span>
  );
};

export const ReportSectionHeader: React.FC<{
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ title, rightContent, className = "" }) => {
  return (
    <div
      className={`report-section-header flex flex-col lg:flex-row lg:items-center justify-between pb-3 border-b border-slate-200 mb-0 gap-3 ${className}`}
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2.5">
        {title}
      </h3>
      {rightContent ? (
        <div className="shrink-0 max-w-full overflow-x-auto no-scrollbar">
          {rightContent}
        </div>
      ) : null}
    </div>
  );
};

export const ReportSubsectionHeader: React.FC<{
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ title, rightContent, className = "" }) => {
  return (
    <div className={`report-subsection-header flex items-center justify-between pb-2 border-b border-slate-200 mb-0 ${className}`}>
      <h4 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
        {title}
      </h4>
      {rightContent ? <div className="shrink-0">{rightContent}</div> : null}
    </div>
  );
};

export const ReportTableFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`report-table-frame border-t border-b border-slate-200 my-6 sm:my-7 overflow-x-auto ${className}`}>
      {children}
    </div>
  );
};

export const ReportMetricGrid: React.FC<{
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}> = ({ children, columns = 3, className = "" }) => {
  return (
    <div className={`report-metric-grid report-metric-grid--${columns} gap-[var(--report-panel-gap)] ${className}`}>
      {children}
    </div>
  );
};

export const ReportMetricCard: React.FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  unit?: React.ReactNode;
  detail?: React.ReactNode;
  tone?: "default" | "dark";
  className?: string;
}> = ({ title, value, unit, detail, tone = "default", className = "" }) => {
  const isDark = tone === "dark";
  return (
    <div
      className={`report-metric-card border p-5 sm:p-6 flex flex-col h-full ${
        isDark
          ? "bg-slate-900 border-slate-900 text-white"
          : "bg-white border-slate-200 text-slate-900"
      } ${className}`}
    >
      {/* 顶部固定结构区：标题 + 数字 + 横线 (全行绝对对齐) */}
      <div className="flex flex-col">
        <div className={`text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center min-h-[22px] ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          {title}
        </div>
        <div className="flex items-baseline gap-1.5 min-h-[38px] mt-2 mb-3">
          <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold tabular-nums tracking-tight font-mono ${isDark ? "text-white" : "text-slate-950"}`}>
            {value}
          </span>
          {unit && (
            <span className={`text-xs sm:text-sm font-bold ${isDark ? "text-slate-300" : "text-slate-600"}`}>{unit}</span>
          )}
        </div>
        {/* 横线处于固定高度 */}
        <div className={`border-b ${isDark ? "border-slate-800" : "border-slate-200"}`} />
      </div>

      {/* 下方内容区：顶对齐 (紧随横线向下排布) */}
      {detail && (
        <div className={`text-xs sm:text-sm leading-relaxed font-normal pt-3 flex-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          {detail}
        </div>
      )}
    </div>
  );
};

export const ReportMetricHero: React.FC<{
  title: React.ReactNode;
  desc?: React.ReactNode;
  metrics: React.ReactNode;
  className?: string;
}> = ({ title, desc, metrics, className = "" }) => {
  return (
    <div className={`report-metric-hero ${className}`}>
      <div className="space-y-1">
        <div className="report-metric-hero-title">{title}</div>
        {desc && <p className="text-sm sm:text-base text-slate-600">{desc}</p>}
      </div>
      <div className="report-metric-hero-values">{metrics}</div>
    </div>
  );
};

export interface ChartLegendItem {
  label: string;
  color: string;
  shape?: "rect" | "line" | "circle";
}

export const ReportChartLegend: React.FC<{
  items: ChartLegendItem[];
  className?: string;
}> = ({ items, className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-900 font-bold ${className}`}>
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-2">
          {item.shape === "line" ? (
            <span className="w-5 h-1.5 inline-block shrink-0" style={{ backgroundColor: item.color }} />
          ) : item.shape === "circle" ? (
            <span className="w-3 h-3 border border-slate-900 inline-block shrink-0" style={{ backgroundColor: item.color }} />
          ) : (
            <span className="w-3.5 h-3.5 inline-block shrink-0" style={{ backgroundColor: item.color }} />
          )}
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
};

export const ReportChartCard: React.FC<{
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  value?: React.ReactNode;
  badge?: React.ReactNode;
  description?: React.ReactNode;
  legend?: React.ReactNode;
  children: React.ReactNode;
  footnote?: React.ReactNode;
  className?: string;
  bodyHeight?: string;
}> = ({
  title,
  subtitle,
  value,
  badge,
  description,
  legend,
  children,
  footnote,
  className = "",
  bodyHeight,
}) => {
  return (
    <div className={`report-chart-card bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between h-full ${className}`}>
      <div className="flex-1 flex flex-col min-h-0">
        {/* 头部：标题、副标题与关键数值/标签 */}
        <div className="report-chart-card-head pb-3.5 mb-4 border-b border-slate-200 min-h-[52px]">
          <div className="min-w-0 pr-2">
            <span className="text-lg sm:text-xl font-bold text-slate-900 block">{title}</span>
            {subtitle && <p className="text-sm text-slate-600 font-normal mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            {badge}
            {value && <strong className="text-2xl sm:text-3xl text-slate-950 font-bold tabular-nums">{value}</strong>}
          </div>
        </div>

        {/* 一段文字说明 (Key Takeaway / 洞察分析) */}
        {description && (
          <div className="text-sm text-slate-700 font-normal leading-relaxed bg-slate-50/80 px-4 py-3 mb-5 block">
            {description}
          </div>
        )}

        {/* 统一图例栏 */}
        {legend && (
          <div className="flex items-center justify-end pb-3.5 mb-2">
            {legend}
          </div>
        )}

        {/* 图表画布主体 */}
        <div className={`report-chart-card-body flex-1 w-full ${bodyHeight ? bodyHeight : ""}`}>{children}</div>
      </div>

      {/* 底部口径与备注说明 */}
      {footnote && (
        <div className="mt-5 pt-3.5 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-normal flex items-center justify-between">
          <span>{footnote}</span>
        </div>
      )}
    </div>
  );
};

export const ReportDimensionCard: React.FC<{
  index?: number;
  title: React.ReactNode;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}> = ({ index, title, badge, children, className = "", contentClassName = "" }) => {
  return (
    <div className={`report-dimension-card bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between h-full ${className}`}>
      <div className="report-dimension-card-head min-h-[44px] pb-3 border-b border-slate-100 mb-4 flex items-center justify-between gap-3">
        <div className="report-dimension-card-title flex-1 min-w-0 font-bold text-slate-950">
          {index !== undefined && <span className="report-sequence-badge">{index}</span>}
          <span>{title}</span>
        </div>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>
      <div className={`space-y-4 flex-1 flex flex-col justify-between ${contentClassName}`}>{children}</div>
    </div>
  );
};

export interface CaseStep {
  step: number | string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export const ReportCaseCard: React.FC<{
  title: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  steps: CaseStep[];
  className?: string;
  footer?: React.ReactNode;
}> = ({ title, badge, icon, steps, className = "", footer }) => {
  return (
    <div className={`report-case-card bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between h-full ${className}`}>
      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-slate-950 text-base sm:text-lg">
            {icon}
            <span>{title}</span>
          </div>
          {badge && <div className="shrink-0">{badge}</div>}
        </div>
        <div className="space-y-3.5">
          {steps.map((s, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex flex-col items-center shrink-0">
                <span className="w-5 h-5 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {s.step}
                </span>
                {idx < steps.length - 1 && (
                  <span className="w-px flex-1 bg-slate-200 my-1 min-h-[14px]" />
                )}
              </div>
              <div className="flex-1 pb-1">
                <div className="font-bold text-slate-900 text-sm mb-0.5">
                  {s.title}
                </div>
                <div className="text-sm text-slate-700 leading-relaxed font-normal">
                  {s.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {footer && (
        <div className="pt-3 mt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
          {footer}
        </div>
      )}
    </div>
  );
};

export const ReportCompareBlock: React.FC<{
  beforeTag?: string;
  beforeTitle: React.ReactNode;
  beforeContent: React.ReactNode;
  afterTag?: string;
  afterTitle: React.ReactNode;
  afterContent: React.ReactNode;
  className?: string;
}> = ({
  beforeTag = "治理前",
  beforeTitle,
  beforeContent,
  afterTag = "治理后",
  afterTitle,
  afterContent,
  className = "",
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--report-panel-gap)] ${className}`}>
      <div className="bg-slate-50/70 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-3.5 h-full">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <span className="font-bold text-slate-900 text-sm sm:text-base">
            {beforeTitle}
          </span>
          <ReportBadge tone="red" className="text-xs font-mono">
            {beforeTag}
          </ReportBadge>
        </div>
        <div className="text-sm text-slate-700 leading-relaxed font-normal flex-1 space-y-2.5">
          {beforeContent}
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-3.5 h-full shadow-2xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <span className="font-bold text-slate-950 text-sm sm:text-base">
            {afterTitle}
          </span>
          <ReportBadge tone="green" className="text-xs font-mono">
            {afterTag}
          </ReportBadge>
        </div>
        <div className="text-sm text-slate-800 leading-relaxed font-normal flex-1 space-y-2.5">
          {afterContent}
        </div>
      </div>
    </div>
  );
};

export interface PipelineStep {
  index: number | string;
  title: string;
  subtitle?: string;
  status?: string;
  statusType?: "success" | "pending" | "neutral";
}

export const ReportStepPipeline: React.FC<{
  steps: PipelineStep[];
  className?: string;
  columns?: 3 | 4 | 5 | 6;
}> = ({ steps, className = "", columns = 6 }) => {
  const colClass =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : columns === 4
      ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  return (
    <div className={`bg-white border border-slate-200 p-5 sm:p-6 ${className}`}>
      <div className={`grid ${colClass} gap-3.5 sm:gap-4 items-stretch text-center`}>
        {steps.map((st, idx) => {
          const isSuccess =
            st.statusType === "success" || st.status === "改造完成";
          const isNeutral =
            st.statusType === "neutral" || st.status === "触发源";

          return (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-4 bg-slate-50 border space-y-3 h-full text-center transition-colors ${
                isSuccess
                  ? "border-emerald-200 bg-emerald-50/20"
                  : "border-slate-200"
              }`}
            >
              {/* 序号与标题 */}
              <div className="flex items-center justify-center gap-1.5">
                <span
                  className={`w-5 h-5 font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                    isSuccess
                      ? "bg-emerald-700 text-white"
                      : "bg-slate-900 text-white"
                  }`}
                >
                  {st.index}
                </span>
                <span className="font-bold text-slate-950 text-xs sm:text-sm">
                  {st.title}
                </span>
              </div>

              {/* 描述/副标题 */}
              {st.subtitle && (
                <span className="text-xs text-slate-500 font-normal">
                  {st.subtitle}
                </span>
              )}

              {/* 改造状态 Badge (改造完成增加 icon ✅) */}
              <div className="pt-0.5">
                {st.status && (
                  <ReportBadge
                    tone={isSuccess ? "green" : isNeutral ? "slate" : "amber"}
                    className="gap-1 text-xs font-mono"
                  >
                    {isSuccess ? (
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : isNeutral ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    ) : null}
                    <span>{st.status}</span>
                  </ReportBadge>
                )}
              </div>

              {/* 步骤流向箭头指示器 (桌面端每步指向下一步) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-white border border-slate-300 text-slate-500 items-center justify-center text-xs shadow-xs pointer-events-none rounded-none"
                  aria-hidden="true"
                >
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
