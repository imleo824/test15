import React from "react";
import { FA } from "../types";

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
    { id: "5.0", title: "系统审核", subtitle: "审单演变与智能直出" },
    { id: "6.0", title: "业务概览", subtitle: "人效分析与专案防控" },
    { id: "7.0", title: "套利指数", subtitle: "活动与跨站套利治理" },
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
        </div>
      </div>

      {/* 目录 */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <span className="text-sm font-mono font-bold tracking-wider text-slate-900 uppercase">
            报告章节目录索引
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="group flex items-center justify-between py-2.5 px-3.5 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-900 hover:shadow-xs cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <span className="font-mono text-sm sm:text-base font-extrabold text-white bg-slate-900 px-2.5 py-1 shrink-0 text-center tracking-tight">
                  {section.id}
                </span>
                <div className="min-w-0 truncate">
                  <span className="text-base font-bold text-slate-900 group-hover:text-blue-900 mr-3">
                    {section.title}
                  </span>
                  <span className="text-sm text-slate-600 hidden sm:inline truncate">
                    {section.subtitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

