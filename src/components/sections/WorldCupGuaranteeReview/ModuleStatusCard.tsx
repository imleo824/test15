import React from "react";
import { highlightNumbers } from "./utils";

export interface MetricItem {
  label: string;
  current?: string;
  target?: string;
}

export interface ModuleStatusCardProps {
  coreValue: string;
  keyMetrics?: string;
  currentStatus?: string;
  metricLabel?: string;
  metricsList?: MetricItem[];
  progress: string;
  estimatedTime: string;
}

export const ModuleStatusCard: React.FC<ModuleStatusCardProps> = ({
  coreValue,
  keyMetrics,
  currentStatus,
  metricLabel,
  metricsList,
  progress,
}) => {
  const numericProgress = parseFloat(progress.replace(/[^0-9.]/g, "")) || 0;
  const normalizedMetrics =
    metricsList && metricsList.length > 0
      ? metricsList
      : [
          {
            label: metricLabel || "攻坚指标",
            current: currentStatus,
            target: keyMetrics,
          },
        ];

  return (
    <div className="report-status-card text-slate-900">
      <div className="report-status-grid">
        <div className="report-status-segment report-surface report-surface--default">
          <div className="report-status-heading">
            <span className="report-sequence-badge">1</span>
            <span>核心价值</span>
          </div>
          <div className="report-status-content report-status-content--value">
            <div className="report-status-value-row">
              <span>{highlightNumbers(coreValue)}</span>
            </div>
          </div>
        </div>

        <div className="report-status-segment report-surface report-surface--default">
          <div className="report-status-heading">
            <span className="report-sequence-badge">2</span>
            <span>核心指标</span>
          </div>
          
          <div className="report-status-content report-status-content--center report-status-metric-list">
            {normalizedMetrics.map((m, idx) => (
              <div key={idx} className="report-status-metric-row">
                <span>{m.label}</span>
                {(m.current || m.target) && (
                  <div className="report-status-range">
                    {m.current && (
                      <>
                        <span className="report-status-range-label">当前</span>
                        <strong>{m.current}</strong>
                      </>
                    )}
                    {m.current && m.target && (
                      <span className="report-status-arrow">→</span>
                    )}
                    {m.target && (
                      <>
                        <span className="report-status-range-label">目标</span>
                        <strong className="report-status-target">{m.target}</strong>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="report-status-segment report-surface report-surface--default">
          <div className="report-status-heading">
            <span className="report-sequence-badge">3</span>
            <span>整体进度</span>
          </div>
          
          <div className="report-status-content report-status-content--center">
            <div className="report-status-progress-panel">
              <strong>
                {progress}
              </strong>
              <div className="report-status-progress-track">
                <div
                  className="report-status-progress-fill"
                  style={{ width: `${Math.min(Math.max(numericProgress, 0), 100)}%` }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
