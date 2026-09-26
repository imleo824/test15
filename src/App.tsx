import { useEffect } from "react";
import { FA } from "./types";
import { ReportCover } from "./components/ReportCover";
import { WorldCupGuaranteeReview } from "./components/sections/WorldCupGuaranteeReview";

export default function App() {
  // Set document title
  useEffect(() => {
    document.title = FA.pageTitle;
  }, []);

  return (
    <div className="report-shell min-h-screen bg-[#f1f4f8] text-slate-900 flex flex-col font-sans selection:bg-slate-200 antialiased print:bg-white">
      {/* Top Fixed / Print Header Metadata Bar */}
      <div className="w-full bg-slate-900 text-slate-300 py-2.5 px-6 sm:px-12 text-xs font-mono flex items-center justify-between border-b border-slate-800 print:hidden">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-widest">集团风控与治理复盘报告</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">集团风控合规委员会 · 高管与董事会特呈审阅件</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>档案号：<strong className="text-slate-200 font-bold">RC-2026-Q2-08</strong></span>
          <span className="text-slate-600">•</span>
          <span>密级：<strong className="text-amber-400 font-bold">{FA.confidentiality}</strong></span>
        </div>
      </div>

      {/* Document Workspace Center Desk */}
      <div className="flex-1 flex justify-center w-full py-8 md:py-14 px-3 sm:px-6 lg:px-8 print:p-0">
        {/* Executive Binder Folio Page */}
        <article className="report-folio w-full max-w-[1260px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/90 print:shadow-none print:border-none print:max-w-none print:w-full flex flex-col">
          {/* Folio Top Classification Header */}
          <header className="report-folio-header px-8 sm:px-14 lg:px-20 pt-10 pb-6 border-b-2 border-slate-900 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-600">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-wider">集团风控合规管理</span>
              <span className="text-slate-300">/</span>
              <span className="font-medium text-slate-700">专项保障与人效治理复盘报告</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 border border-slate-300 text-xs">
                {FA.navTitle}
              </span>
              <span className="font-semibold text-slate-800">归档：{FA.reportDate}</span>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="report-main flex-1 w-full px-8 sm:px-14 lg:px-20 py-12 lg:py-16 space-y-20 lg:space-y-28 print:px-0 print:py-0 print:space-y-20">
            {/* Cover & Directory */}
            <div id="cover" className="scroll-mt-14">
              <ReportCover />
            </div>

            {/* Strategic Risk & Governance Review (Chapters 1.0 - 6.0) */}
            <div id="fk-world-cup-review" className="scroll-mt-14">
              <WorldCupGuaranteeReview />
            </div>

            {/* Report End Page */}
            <footer className="report-end-page print:hidden border-t-2 border-slate-900 mt-20 pt-14 pb-8">
              <div className="report-end-content space-y-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  汇报结束 · 感谢审阅
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-sm font-mono text-slate-600 font-medium">
                  <span>周期：<strong className="text-slate-900">{FA.navTitle}</strong></span>
                  <span>•</span>
                  <span>归档日期：<strong className="text-slate-900">{FA.reportDate}</strong></span>
                  <span>•</span>
                  <span>密级：<strong className="text-slate-900">{FA.confidentiality}</strong></span>
                  <span>•</span>
                  <span>经办：集团风控合规运营中心</span>
                </div>
              </div>
            </footer>
          </main>
        </article>
      </div>
    </div>
  );
}

