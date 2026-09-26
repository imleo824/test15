import React from "react";

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
    <div className={`report-chapter-title border-t-2 border-slate-900 pt-8 pb-3 mb-6 ${className}`}>
      {eyebrow && (
        <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-500 mb-1.5 uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
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
  tone?: "blue" | "slate" | "green" | "amber" | "red";
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
    <div className={`report-section-header flex items-center justify-between pb-2.5 border-b border-slate-300 mb-4 ${className}`}>
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
        {title}
      </h3>
      {rightContent ? <div className="shrink-0">{rightContent}</div> : null}
    </div>
  );
};

export const ReportSubsectionHeader: React.FC<{
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ title, rightContent, className = "" }) => {
  return (
    <div className={`report-subsection-header flex items-center justify-between pb-2 border-b border-slate-200 mb-3.5 ${className}`}>
      <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
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
    <div className={`report-table-frame border-t-2 border-b-2 border-slate-900 my-4 overflow-x-auto ${className}`}>
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
    <div className={`report-metric-grid report-metric-grid--${columns} gap-4 sm:gap-5 ${className}`}>
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
      className={`report-metric-card border p-5 flex flex-col justify-between ${
        isDark
          ? "bg-slate-900 border-slate-900 text-white"
          : "bg-white border-slate-200 text-slate-900 border-t-2 border-t-slate-900"
      } ${className}`}
    >
      <div className={`text-sm sm:text-base font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}>{title}</div>
      <div className="my-2.5 flex items-baseline gap-2">
        <span className={`text-3xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}>
          {value}
        </span>
        {unit && (
          <span className={`text-sm sm:text-base font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>{unit}</span>
        )}
      </div>
      {detail && (
        <div className={`text-sm sm:text-base leading-relaxed font-normal pt-2.5 border-t ${isDark ? "border-slate-800 text-slate-300" : "border-slate-200 text-slate-700"}`}>
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
        {desc && <p className="text-sm text-slate-600">{desc}</p>}
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
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-800 font-bold ${className}`}>
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-2">
          {item.shape === "line" ? (
            <span className="w-5 h-1 inline-block shrink-0" style={{ backgroundColor: item.color }} />
          ) : item.shape === "circle" ? (
            <span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ backgroundColor: item.color }} />
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
    <div className={`report-chart-card bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between ${className}`}>
      <div className="flex-1 flex flex-col min-h-0">
        {/* 头部：标题、副标题与关键数值/标签 */}
        <div className="report-chart-card-head pb-3 mb-3 border-b border-slate-200">
          <div className="min-w-0 pr-2">
            <span className="text-base sm:text-lg font-bold text-slate-900 block">{title}</span>
            {subtitle && <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {badge}
            {value && <strong className="font-mono text-2xl sm:text-3xl text-slate-950 font-bold">{value}</strong>}
          </div>
        </div>

        {/* 一段文字说明 (Key Takeaway / 洞察分析) */}
        {description && (
          <div className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed bg-slate-50 border-l-4 border-slate-900 px-4 py-3 mb-3.5 flex items-center">
            {description}
          </div>
        )}

        {/* 统一图例栏 */}
        {legend && (
          <div className="flex items-center justify-end pb-2.5">
            {legend}
          </div>
        )}

        {/* 图表画布主体 */}
        <div className={`report-chart-card-body flex-1 w-full ${bodyHeight ? bodyHeight : ""}`}>{children}</div>
      </div>

      {/* 底部口径与备注说明 */}
      {footnote && (
        <div className="mt-3.5 pt-2.5 border-t border-slate-200 text-xs sm:text-sm font-mono text-slate-600 flex items-center justify-between">
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
}> = ({ index, title, badge, children, className = "" }) => {
  return (
    <div className={`report-dimension-card ${className}`}>
      <div className="report-dimension-card-head">
        <div className="report-dimension-card-title">
          {index !== undefined && <span className="report-sequence-badge">{index}</span>}
          <span>{title}</span>
        </div>
        {badge && <div>{badge}</div>}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};
