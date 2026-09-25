import React from "react";
import { FA } from "../types";
import { ShieldCheck, TrendingUp } from "lucide-react";

interface SectionItem {
  id: string;
  title: string;
  subtitle?: string;
}

export const ReportCover: React.FC = () => {
  const sections: SectionItem[] = [
    { id: "1.0", title: "组织管理", subtitle: "人员编制与架构分布" },
    { id: "2.0", title: "数据概览", subtitle: "审核时效与拦截分析" },
    { id: "3.0", title: "内控概览", subtitle: "质检合规与运营监控" },
    { id: "4.0", title: "风控工单", subtitle: "工单处理与流转时效" },
    { id: "5.0", title: "安全升级", subtitle: "敏感数据与高危操作管控" },
    { id: "6.0", title: "系统审核", subtitle: "审单演变与智能直出" },
    { id: "7.0", title: "业务概览", subtitle: "人效分析与审核机制" },
    { id: "8.0", title: "套利指数", subtitle: "活动与跨站套利治理" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="report-cover-page">
      {/* 报告主标题与元数据 */}
      <div className="report-cover-title-block pt-2">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {FA.reportTitle}
          </h1>
        </div>

        <div className="report-cover-meta">
          <div>
            <span>数据周期</span>
            <strong>{FA.navTitle}</strong>
          </div>
          <div>
            <span>报告日期</span>
            <strong>{FA.reportDate}</strong>
          </div>
          <div>
            <span>核心关键词</span>
            <div className="flex items-center gap-2 mt-0.5">
              <button
                type="button"
                onClick={() => handleScrollToSection("5.0")}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-bold text-xs transition-colors cursor-pointer"
                title="直达 5.0 安全升级"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                <span>安全升级</span>
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("6.0")}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs transition-colors cursor-pointer"
                title="直达 6.0 系统审核"
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>降本增效</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 目录 */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-900 uppercase">
            报告章节目录索引
          </span>
          <span className="text-xs font-mono text-slate-500 font-medium">
            全篇共 8 个核心章节
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="group flex items-center justify-between py-3 px-4 border border-slate-200 bg-white hover:border-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2 flex-1">
                <span className="font-mono text-xs sm:text-sm font-bold text-white bg-slate-900 px-2.5 py-1 shrink-0 text-center tracking-tight">
                  {section.id}
                </span>
                <div className="min-w-0 flex items-baseline gap-2.5 flex-1 truncate">
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 shrink-0">
                    {section.title}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 truncate font-normal">
                    {section.subtitle}
                  </span>
                </div>
              </div>
              <span className="text-slate-400 group-hover:text-slate-900 font-mono text-xs font-medium shrink-0 ml-2">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCover;
