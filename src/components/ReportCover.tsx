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
    { id: "4.0", title: "云盾审核" },
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
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm font-mono">
                <ShieldCheck className="w-4 h-4 text-slate-700" />
                <span>安全合规</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm font-mono">
                <TrendingUp className="w-4 h-4 text-slate-700" />
                <span>降本增效</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 目录 (竖向单列展示，仅保留 序号 和 主标题) */}
      <div className="space-y-3.5 pt-4">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5">
          <span className="text-sm sm:text-base font-mono font-bold tracking-wider text-slate-900 uppercase">
            报告目录
          </span>
          <span className="text-xs sm:text-sm font-mono text-slate-600 font-medium">
            全篇共 4 个核心章节
          </span>
        </div>

        {/* 竖向排列列表 */}
        <div className="flex flex-col border border-slate-200 divide-y divide-slate-200 bg-white">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-sm sm:text-base font-bold text-white bg-slate-900 px-3.5 py-1.5 shrink-0">
                  {section.id}
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-950">
                  {section.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-mono font-medium text-slate-600">
                  SECTION {section.id}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCover;
