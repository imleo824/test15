import React from "react";
import { ArrowDown, ArrowRight, Tag, Check, Clock } from "lucide-react";
import { ReportBadge, ReportHeading, ReportTableFrame } from "../../ReportSections";

export const stripDisplayUnits = (value: string | number) => String(value);

const summaryNumberClass =
  "report-number text-blue-900 font-black font-mono tabular-nums";
const summaryRiskNumberClass =
  "report-number report-number-risk text-rose-700 font-black font-mono tabular-nums";
const summarySafeNumberClass =
  "report-number report-number-safe text-emerald-700 font-black font-mono tabular-nums";
const summaryCoreClass =
  "report-core-underline";

const numericPattern =
  String.raw`[<>≤≥~～]?\s*[+\-]?\d+(?:[.,:：]\d+)*(?:\+)?(?:\s*(?:%|人/小时|单/月|/月|w/月|W/月|人|场|项|倍|E|W|w|万|亿|万元|亿元|元|h|ms|min|k|个|单|条|站|分|分钟|秒|天|月|年))?(?:\s*[-~～]\s*\d+(?:[.,:：]\d+)*(?:\+)?(?:\s*(?:%|人/小时|单/月|/月|w/月|W/月|人|场|项|倍|E|W|w|万|亿|万元|亿元|元|h|ms|min|k|个|单|条|站|分|分钟|秒|天|月|年))?)?`;

const semanticTonePrefixPattern = /^(?:red|green|blue):/;
const numericOnlyPattern = new RegExp(`^\\s*${numericPattern}\\s*$`);
const highlightPattern = new RegExp(`(\\[\\[(.*?)\\]\\])|(${numericPattern})`, "g");
const versionLikeNumberPattern = /^\d+(?:\.\d+)+(?:-\d+(?:\.\d+)*)?$/;
const dateLikeNumberPattern = /^\d{1,2}月(?:\d{1,2}日)?$|^\d{4}年$/;
const classificationPhrasePattern =
  /明细|站点|分类|类型|核心分布|体育类|代理类|红利类|游戏分类|站点分布|世界杯期间|赛事期间/;
const stationPhrasePattern = /^\d+(?:\+\d+)?站/;
const vipPhrasePattern = /^V\d+(?:及V\d+)?/;
const monthPhrasePattern = /^\d{1,2}月/;
const quantifiedOutcomePhrasePattern =
  /^(?:(?:几十|几百|几千|数十|数百|数千|近|约|大约|超过|不低于|高于|低于)?\s*[+\-]?\d+(?:[.,:：]\d+)*(?:\+)?(?:%|人\/小时|单\/月|\/月|w\/月|W\/月|人|场|项|倍|E|W|w|万|亿|万元|亿元|元|h|ms|min|k|个|单|条|站|分|分钟|秒|天|月|年)|(?:几|几十|几百|几千|数十|数百|数千)(?:倍|分钟|秒|小时|天|月|年))$/;

const structuralNumberPattern =
  /^(?:\d+(?:\+\d+)?站|\d{1,2}月(?:\d{1,2}日)?|\d{4}年|第?\d+季度|V\d+(?:及V\d+)?)$/;
const neutralQuantityContextPattern =
  /明细|站点|分类|类型|分布|目录|章节|版本|赛事期间|世界杯期间|时间|提交时间|站点编号|场馆|VIP|高V|共\d+项|覆盖.*项/;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getNumberToneClass = (
  value: string,
  context: string,
  fallbackClass: string = summaryNumberClass,
) => {
  const text = context.replace(/\s+/g, "");
  const valueText = value.replace(/\s+/g, "");
  const normalizedValue = valueText.replace(/[<>≤≥~～]/g, "");
  const escapedValue = escapeRegExp(valueText);

  if (versionLikeNumberPattern.test(normalizedValue)) {
    return fallbackClass;
  }

  if (dateLikeNumberPattern.test(normalizedValue)) {
    return fallbackClass;
  }

  if (
    structuralNumberPattern.test(normalizedValue) ||
    (/(?:站|月|年|项)$/.test(normalizedValue) && neutralQuantityContextPattern.test(text))
  ) {
    return fallbackClass;
  }

  if (
    /^(?:不低于|不少于|至少|至多|不高于)/.test(valueText) &&
    /(?:最低要求|要求|底线|目标|口径|标准)/.test(text)
  ) {
    return fallbackClass;
  }

  const isActualBelowRequirement = new RegExp(`${escapedValue}.*低于.*(?:最低要求|要求|底线)`).test(text);
  const isRequirementThreshold = new RegExp(`低于.*${escapedValue}.*(?:最低要求|要求|底线)|不低于.*${escapedValue}|[≥>].*${escapedValue}`).test(text);
  const isActualAboveRequirement = new RegExp(`${escapedValue}.*高于.*(?:最低要求|要求|底线)`).test(text);
  const isExplicitDrop = /降低|下降|减少|压降|下调|裁撤|取消|杜绝|减少资金损|月均减少|剥离/.test(text);
  const isExplicitGain = /提升|提高|增长|增加|收益|挽回|拦截|自动拦截|系统拦截|效率|提效|时效|完成度|稳定|安全|优化空间|直接出单|系统直出|系统放行率|几秒钟|几十倍/.test(text);
  const isExplicitRisk = /风险|损耗|资金损|错误率|差错率|漏看|漏判|异常|违规|超负荷|挑战|未达|低于.*要求|低于.*底线/.test(text);
  const isBadIncrease = /激增|上升|偏高|高达|超过|大幅增加/.test(text) && (isExplicitRisk || /回落|压力|挤占|低于|挑战/.test(text));
  const isManualReviewInefficiency = /违规实锤.*(?:低风险订单|挤占人工资源|亟需提升)/.test(text);
  const isErrorOrLossDrop = isExplicitDrop && /错误率|差错率|损耗|资金损|成本|时长|时效|外包占比|人工审核率/.test(text);
  const isRiskPreventionGain = isExplicitGain && /拦截|收益|挽回|杜绝|安全|低风险|稳定|系统审核率|系统直出|直接出单|放行率|优化空间|效率|提效|几秒钟|几十倍/.test(text);
  const isNegativeValue = valueText.startsWith("-") || /-\d/.test(valueText);
  const isLowThreshold = /^[<≤]/.test(valueText);

  if (isRequirementThreshold && !isActualBelowRequirement && !isActualAboveRequirement) return fallbackClass;
  if (isManualReviewInefficiency) return summaryRiskNumberClass;
  if (isActualBelowRequirement || isBadIncrease) return summaryRiskNumberClass;
  if (isActualAboveRequirement) return summarySafeNumberClass;
  if (isErrorOrLossDrop || isRiskPreventionGain) return summarySafeNumberClass;
  if (isNegativeValue && isExplicitDrop) return summarySafeNumberClass;
  if (isLowThreshold && /错误率|差错率|违规实锤|损耗|风险/.test(text) && !isActualBelowRequirement) {
    return summarySafeNumberClass;
  }
  if (isExplicitRisk && !isExplicitDrop && !isRiskPreventionGain) return summaryRiskNumberClass;
  if (isExplicitGain || isExplicitDrop) return summarySafeNumberClass;

  return fallbackClass;
};

const getCorePhraseToneClass = (phrase: string, context: string) => {
  const text = `${context}${phrase}`.replace(/\s+/g, "");
  const normalizedPhrase = phrase.replace(/\s+/g, "");
  const isClassificationPhrase =
    classificationPhrasePattern.test(normalizedPhrase) ||
    stationPhrasePattern.test(normalizedPhrase) ||
    vipPhrasePattern.test(normalizedPhrase) ||
    monthPhrasePattern.test(normalizedPhrase);
  const isQuantifiedOutcomePhrase = quantifiedOutcomePhrasePattern.test(normalizedPhrase);

  if (isClassificationPhrase) return summaryCoreClass;
  if (isQuantifiedOutcomePhrase) return getNumberToneClass(normalizedPhrase, text, summaryNumberClass);

  return summaryCoreClass;
};

const stripTonePrefix = (phrase: string) =>
  phrase.replace(semanticTonePrefixPattern, "");

const shouldHighlightBareNumber = (value: string, context: string) => {
  const text = context.replace(/\s+/g, "");
  const valueText = value.replace(/\s+/g, "");
  const normalizedValue = valueText.replace(/[<>≤≥~～]/g, "");

  if (versionLikeNumberPattern.test(normalizedValue)) return false;
  if (dateLikeNumberPattern.test(normalizedValue)) return false;
  if (text.includes(`第${normalizedValue}季度`)) return false;
  if (text.includes(`${normalizedValue}季度`)) return false;

  return true;
};

// 辅助函数：统一高亮核心内容与数字样式（纯静态，不带任何动效，投屏无浮夸色彩）
export const highlightNumbers = (
  text: string | any,
  colorClass: string = summaryNumberClass,
) => {
  if (typeof text !== "string" || !text) return text;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  highlightPattern.lastIndex = 0;

  while ((match = highlightPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // It's a [[core phrase]]
      let phrase = stripTonePrefix(stripDisplayUnits(match[2]));

      // 提取纯数字部分进行判断
      const numericValue = phrase.replace(/[^\d.-]/g, "");
      const isNumber = numericOnlyPattern.test(phrase);
      const context = text.slice(Math.max(0, match.index - 18), Math.min(text.length, highlightPattern.lastIndex + 18));

      if (
        isNumber &&
        (phrase.startsWith("-") || parseFloat(numericValue) < 0) &&
        getNumberToneClass(phrase, context, colorClass) === summaryRiskNumberClass
      ) {
        result.push(
          <span key={match.index} className={summaryRiskNumberClass}>
            {phrase}
          </span>,
        );
      } else if (isNumber) {
        result.push(
          <span
            key={match.index}
            className={getNumberToneClass(phrase, context, colorClass)}
          >
            {phrase}
          </span>,
        );
      } else {
        result.push(
          <span
            key={match.index}
            className={getCorePhraseToneClass(phrase, context)}
          >
            {phrase}
          </span>,
        );
      }
    } else if (match[3]) {
      const phrase = match[3];
      const context = text.slice(Math.max(0, match.index - 18), Math.min(text.length, highlightPattern.lastIndex + 18));
      if (!shouldHighlightBareNumber(phrase, context)) {
        result.push(phrase);
        lastIndex = highlightPattern.lastIndex;
        continue;
      }
      result.push(
        <span key={match.index} className={getNumberToneClass(phrase, context, colorClass)}>
          {phrase}
        </span>,
      );
    }

    lastIndex = highlightPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
};

export const SummaryBox = ({
  children,
  title,
  icon,
  className = "",
  hideIcon = false,
  variant = "module",
}: {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  hideIcon?: boolean;
  variant?: "chapter" | "module" | "note";
}) => {
  const hasMargin = className.match(/\b(m|m[tby])-\d+/);
  const marginClass = hasMargin ? "" : "mb-6";

  return (
    <div
      className={`report-note report-note--${variant} ${marginClass} relative ${className}`}
    >
      {title && (
        <div className="report-note-title">
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className="report-note-content report-summary-copy">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ExpectedRhythm = ({
  items,
}: {
  items: { month: string; title?: string; desc?: string; status?: string; submitTime?: string; tagColor?: "blue" | "amber" | "emerald" | "slate" }[];
}) => {
  const hasDetails = items.some((i) => i.submitTime || i.status);

  if (hasDetails) {
    return (
      <div className="report-rhythm p-4 space-y-5 mt-auto">
        <div className="report-rhythm-head">
          <span className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-900 shrink-0" />
            <span>预期节奏</span>
          </span>
        </div>
        <ReportTableFrame>
          <table className="report-standard-table">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200 text-xs">
                <th className="py-2 px-3 font-black">功能模块</th>
                <th className="py-2 px-3 font-black w-36">需求时间</th>
                <th className="py-2 px-3 font-black w-52">当前状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {items.map((step, idx) => {
                let badgeTone: "green" | "amber" | "blue" | "slate" = "green";
                if (step.tagColor === "amber" || step.month.includes("待") || (step.status && step.status.includes("待"))) badgeTone = "amber";
                if (step.tagColor === "blue") badgeTone = "blue";
                if (step.tagColor === "slate") badgeTone = "slate";

                return (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-black text-slate-900">{step.title || step.desc}</td>
                    <td className="py-2.5 px-3 font-mono text-blue-900">{step.submitTime || "-"}</td>
                    <td className="py-2.5 px-3">
                      <ReportBadge tone={badgeTone} className="report-status-badge">
                        {step.status || "-"}
                      </ReportBadge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ReportTableFrame>
      </div>
    );
  }

  const gridClass =
    items.length === 1
      ? "grid-cols-1"
      : items.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : items.length === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-2 md:grid-cols-5";

  return (
    <div className="report-rhythm p-4 space-y-5 mt-auto">
      <div className="report-rhythm-head">
        <span className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-900 shrink-0" />
          <span>预期节奏</span>
        </span>
      </div>
      <div className={`grid ${gridClass} gap-3 text-sm`}>
        {items.map((step, idx) => {
          const badgeTone = step.tagColor === "slate" ? "slate" : "blue";

          return (
            <div key={idx} className="report-rhythm-item rounded-lg p-3 flex flex-col justify-between h-full space-y-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <ReportBadge tone={badgeTone} className={`report-status-badge ${items.length > 3 && !step.title ? "w-full text-center" : "w-auto text-left"}`}>
                    {step.month}
                  </ReportBadge>
                  {step.title && <span className="font-black text-slate-900 text-sm">{step.title}</span>}
                </div>
              </div>
              {step.desc && (
                <div className={`text-xs text-slate-900 font-bold leading-relaxed ${items.length > 3 && !step.title ? "text-center mt-auto mb-auto" : ""}`}>
                  {highlightNumbers(step.desc)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ModuleBlockHeader = ({
  title,
  right,
}: {
  title: React.ReactNode;
  right?: React.ReactNode;
}) => (
  <ReportHeading level="module" rightContent={right} className="report-module-head">
    {title}
  </ReportHeading>
);

export const ModuleSubsectionTitle = ({
  title,
  right,
}: {
  title: React.ReactNode;
  right?: React.ReactNode;
}) => (
  <ReportHeading level="subsection" rightContent={right} className="report-subsection-head">
    {title}
  </ReportHeading>
);

export const ReportFlow = ({
  title,
  icon,
  desc,
  steps,
  className = "",
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  desc?: React.ReactNode;
  steps: { title: string; desc: string; strong?: boolean }[];
  className?: string;
}) => (
  <div className={`report-flow-box ${className}`}>
    <div className="report-info-head">
      <ModuleSubsectionTitle
        title={
          <>
            {icon || <Tag className="w-4 h-4 text-slate-900 shrink-0" />}
            <span>{title}</span>
          </>
        }
      />
      {desc && <p>{desc}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
      {steps.map((step, index) => (
        <React.Fragment key={`${step.title}-${index}`}>
          <div className={step.strong ? "report-flow-step report-flow-step-strong" : "report-flow-step"}>
            <div className="report-flow-step-title">
              <span className="report-sequence-badge">{index + 1}</span>
              <span>{step.title}</span>
            </div>
            <div className="text-xs font-bold leading-normal">{highlightNumbers(step.desc)}</div>
          </div>
          {index < steps.length - 1 && (
            <>
              <div className="hidden md:flex items-center justify-center text-blue-900">
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </div>
              <div className="md:hidden flex items-center justify-center text-blue-900">
                <ArrowDown className="w-5 h-5" strokeWidth={3} />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const ReportInfoGrid = ({
  title,
  icon,
  desc,
  items,
  showIndex = false,
  hideHeader = false,
  className = "",
  columns,
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  desc?: React.ReactNode;
  items: { title: string; desc?: string; badge?: string; status?: string; statusTone?: "default" | "pending" | "running" }[];
  showIndex?: boolean;
  hideHeader?: boolean;
  className?: string;
  columns?: number;
}) => {
  const getStatusTone = (tone: "default" | "pending" | "running" = "pending"): "slate" | "amber" | "green" => {
    if (tone === "running") return "green";
    if (tone === "default") return "slate";
    return "amber";
  };

  const resolvedColumns = columns || 2;

  return (
    <div className={`report-info-box ${className}`}>
      {!hideHeader && (
        <div className="report-info-head">
          <ModuleSubsectionTitle
            title={
              <>
                {icon}
                <span>{title}</span>
              </>
            }
          />
          {desc && <p>{desc}</p>}
        </div>
      )}
      <div className={`report-info-grid report-info-grid--${resolvedColumns}`}>
        {items.map((item, index) => (
          <div key={item.title} className="report-info-item">
            {showIndex && <span className="report-sequence-badge report-info-index">{index + 1}</span>}
            <div className="min-w-0 flex-1 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-black text-slate-900 leading-tight">{item.title}</div>
                {(item.badge || item.status) && (
                  <div className="flex items-center gap-1 shrink-0">
                    {item.badge && (
                      <ReportBadge tone={item.badge === "待排期" || item.badge.includes("待") ? "amber" : "blue"} className="report-status-badge">
                        {item.badge === "待排期" || item.badge.includes("待") ? (
                          <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 stroke-[2.5]" />
                        ) : (
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 stroke-[2.5]" />
                        )}
                        <span>{item.badge}</span>
                      </ReportBadge>
                    )}
                    {item.status && (
                      <ReportBadge tone={getStatusTone(item.statusTone)} className="report-status-badge">
                        {item.status}
                      </ReportBadge>
                    )}
                  </div>
                )}
              </div>
              {item.desc && <p className="text-sm font-bold text-slate-900 leading-normal mt-1">{highlightNumbers(item.desc)}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ReportProcessBlock = ({
  id,
  title,
  right,
  flow,
  detail,
}: {
  id?: string;
  title: React.ReactNode;
  right?: React.ReactNode;
  flow: React.ReactNode;
  detail: React.ReactNode;
}) => (
  <section id={id} className="report-process-block">
    <ModuleBlockHeader title={title} right={right} />
    <div className="report-process-body">
      <div className="report-process-flow">{flow}</div>
      <div className="report-process-detail">{detail}</div>
    </div>
  </section>
);

export const BeforeAfter = ({
  beforeTitle = "原来模式",
  beforeSubtitle,
  before,
  beforeRelation,
  coreSpan = "模式升级",
  coreStrong = "精准匹配",
  coreI = "高效迭代",
  afterTitle = "升级模式",
  afterSubtitle,
  after,
  afterRelation,
}: {
  beforeTitle?: React.ReactNode;
  beforeSubtitle?: React.ReactNode;
  before: React.ReactNode;
  beforeRelation?: React.ReactNode;
  coreSpan?: React.ReactNode;
  coreStrong?: React.ReactNode;
  coreI?: React.ReactNode;
  afterTitle?: React.ReactNode;
  afterSubtitle?: React.ReactNode;
  after: React.ReactNode;
  afterRelation?: React.ReactNode;
}) => (
  <div className="agent-dispatch-model">
    {/* 左侧：原模式 / 传统老机制 */}
    <div className="agent-dispatch-panel">
      <div className="agent-dispatch-panel-head">
        <span className="agent-dispatch-panel-badge">
          {typeof beforeTitle === "string" ? highlightNumbers(beforeTitle) : beforeTitle}
        </span>
        {beforeSubtitle && (
          <strong>
            {typeof beforeSubtitle === "string" ? highlightNumbers(beforeSubtitle) : beforeSubtitle}
          </strong>
        )}
      </div>
      <div className="agent-dispatch-list">
        {typeof before === "string" ? <div className="agent-dispatch-list-item">{highlightNumbers(before)}</div> : before}
      </div>
      {beforeRelation && (
        <div className="agent-dispatch-relation text-slate-900 font-bold">
          {typeof beforeRelation === "string" ? highlightNumbers(beforeRelation) : beforeRelation}
        </div>
      )}
    </div>

    {/* 中间：核心对比/升级动作球体 */}
    <div className="agent-dispatch-core font-bold">
      <span>{typeof coreSpan === "string" ? highlightNumbers(coreSpan) : coreSpan}</span>
      <strong>{typeof coreStrong === "string" ? highlightNumbers(coreStrong) : coreStrong}</strong>
      <i>{typeof coreI === "string" ? highlightNumbers(coreI) : coreI}</i>
    </div>

    {/* 右侧：新模式 / 升级新机制 */}
    <div className="agent-dispatch-panel agent-dispatch-panel-strong">
      <div className="agent-dispatch-panel-head">
        <span className="agent-dispatch-panel-badge">
          {typeof afterTitle === "string" ? highlightNumbers(afterTitle) : afterTitle}
        </span>
        {afterSubtitle && (
          <strong>
            {typeof afterSubtitle === "string" ? highlightNumbers(afterSubtitle) : afterSubtitle}
          </strong>
        )}
      </div>
      <div className="agent-dispatch-list">
        {typeof after === "string" ? <div className="agent-dispatch-list-item">{highlightNumbers(after)}</div> : after}
      </div>
      {afterRelation && (
        <div className="agent-dispatch-relation text-blue-900 font-bold">
          {typeof afterRelation === "string" ? highlightNumbers(afterRelation) : afterRelation}
        </div>
      )}
    </div>
  </div>
);
