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
    <div className="report-cover-page space-y-8">
      {/* 报告主标题与元数据 */}
      <div className="report-cover-title-block pt-2 space-y-5">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {FA.reportTitle}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-4 border-t border-b border-[#e2e8f0] text-sm">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-slate-500 font-medium text-xs sm:text-sm">数据周期</span>
            <strong className="font-mono font-bold text-slate-900 text-sm sm:text-base">{FA.navTitle}</strong>
          </div>

          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>

          <div className="flex items-center gap-2.5">
            <span className="font-mono text-slate-500 font-medium text-xs sm:text-sm">报告日期</span>
            <strong className="font-mono font-bold text-slate-900 text-sm sm:text-base">{FA.reportDate}</strong>
          </div>

          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>

          <div className="flex items-center gap-2.5">
            <span className="font-mono text-slate-500 font-medium text-xs sm:text-sm">治理主线</span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
              <span>安全合规防风险</span>
              <span className="text-slate-300">·</span>
              <span>系统替代提人效</span>
            </div>
          </div>
        </div>
      </div>

      {/* 目录 (高阶报告目录架构) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
          <span className="text-sm sm:text-base font-mono font-bold tracking-wider text-slate-900 uppercase">
            报告目录
          </span>
          <span className="text-xs font-mono text-slate-500">共 4 个核心章节</span>
        </div>

        {/* 目录列表 */}
        <div className="border-t-2 border-b-2 border-slate-900 divide-y divide-[#e2e8f0] bg-white">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="flex items-center justify-between px-6 py-4.5 bg-white select-none"
            >
              <div className="flex items-center gap-5 min-w-0">
                <span className="font-mono text-sm sm:text-base font-black text-white bg-slate-900 px-3.5 py-1 shrink-0 tracking-tight">
                  {section.id}
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-950">
                  {section.title}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs sm:text-sm font-mono font-bold text-slate-500 tracking-wider uppercase">
                  SECTION {section.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCover;
