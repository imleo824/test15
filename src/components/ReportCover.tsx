import React from "react";
import { FA } from "../types";
import { ShieldCheck, TrendingUp, ChevronRight } from "lucide-react";

interface SectionItem {
  id: string;
  title: string;
}

export const ReportCover: React.FC = () => {
  const sections: SectionItem[] = [
    { id: "1.0", title: "组织管理" },
    { id: "2.0", title: "数据概览" },
    { id: "3.0", title: "安全合规" },
    { id: "4.0", title: "系统审核" },
    { id: "5.0", title: "业务概览" },
    { id: "6.0", title: "套利指数" },
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
                onClick={() => handleScrollToSection("3.0")}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-bold text-xs transition-colors cursor-pointer"
                title="直达 3.0 安全合规体系"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                <span>安全合规</span>
              </button>
              <button
                type="button"
                onClick={() => handleScrollToSection("4.0")}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs transition-colors cursor-pointer"
                title="直达 4.0 系统审核"
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>降本增效</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 目录 (竖向单列展示，仅保留 序号 和 主标题) */}
      <div className="space-y-3 pt-3">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-900 uppercase">
            报告章节目录索引
          </span>
          <span className="text-xs font-mono text-slate-500 font-medium">
            全篇共 6 个核心治理章节
          </span>
        </div>

        {/* 竖向排列列表 */}
        <div className="flex flex-col space-y-2">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="group flex items-center justify-between px-4 py-3 border border-slate-200 bg-white hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="font-mono text-xs sm:text-sm font-black text-white bg-slate-900 px-3 py-1 shrink-0">
                  {section.id}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {section.title}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCover;
