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
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`report-chapter-title ${className}`}>
      <ReportHeading level="chapter">{children}</ReportHeading>
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

export const ReportPanelHeader: React.FC<{
  title: React.ReactNode;
  icon?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ title, icon, rightContent, className = "" }) => {
  return (
    <ReportHeading level="panel" icon={icon} rightContent={rightContent} className={`report-panel-header ${className}`}>
      {title}
    </ReportHeading>
  );
};

export const ReportSectionHeader: React.FC<{
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}> = ({ title, rightContent, className = "" }) => {
  return (
    <ReportHeading level="section" rightContent={rightContent} className={`report-section-header ${className}`}>
      {title}
    </ReportHeading>
  );
};

export const ReportTableFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`report-table-frame report-surface report-surface--default report-surface--padding-none ${className}`}>
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
    <div className={`report-metric-grid report-metric-grid--${columns} ${className}`}>
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
  return (
    <div className={`report-metric-card report-metric-card--${tone} ${className}`}>
      <div className="report-metric-card-title">{title}</div>
      <div className="report-metric-card-value">
        <span>{value}</span>
        {unit && <small>{unit}</small>}
      </div>
      {detail && <div className="report-metric-card-detail">{detail}</div>}
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
        {desc && <p>{desc}</p>}
      </div>
      <div className="report-metric-hero-values">{metrics}</div>
    </div>
  );
};

export const ReportChartCard: React.FC<{
  title: React.ReactNode;
  value?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ title, value, children, className = "" }) => {
  return (
    <div className={`report-chart-card ${className}`}>
      <div className="report-chart-card-head">
        <span>{title}</span>
        {value && <strong>{value}</strong>}
      </div>
      <div className="report-chart-card-body">{children}</div>
    </div>
  );
};

export const ReportStepGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`report-step-grid ${className}`}>
      {children}
    </div>
  );
};

export const ReportStepCard: React.FC<{
  index: number;
  title: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ index, title, children, icon }) => {
  return (
    <div className="report-step-card">
      <div className="report-step-card-head">
        {icon ? <span className="report-step-card-icon">{icon}</span> : <span className="report-sequence-badge">{index}</span>}
        <strong>{title}</strong>
      </div>
      <div className="report-step-card-body">{children}</div>
    </div>
  );
};
