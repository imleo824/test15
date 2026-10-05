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
    <div className="report-shell min-h-screen bg-[#f1f4f8] text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white antialiased print:bg-white">
      {/* Document Workspace Center Desk */}
      <div className="flex-1 flex justify-center w-full py-6 sm:py-8 px-2 sm:px-4 lg:px-6 print:p-0">
        {/* Executive Binder Folio Page */}
        <article className="report-folio w-full max-w-[1360px] bg-white border border-slate-200 print:border-none print:max-w-none print:w-full flex flex-col shadow-sm">
          {/* Main Content Area */}
          <main className="report-main flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 lg:py-14 space-y-12 lg:space-y-18 print:px-0 print:py-0 print:space-y-16 text-[15px] sm:text-[16px] leading-relaxed">
            {/* Cover & Directory */}
            <div id="cover" className="scroll-mt-14">
              <ReportCover />
            </div>

            {/* Strategic Risk & Governance Review (Chapters 1.0 - 5.0) */}
            <div id="fk-world-cup-review" className="scroll-mt-14">
              <WorldCupGuaranteeReview />
            </div>

            {/* Report End Page */}
            <footer className="report-end-page print:hidden border-t border-slate-300 mt-20 pt-12 pb-10">
              <div className="report-end-content space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  汇报结束 · 感谢审阅
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm font-mono text-slate-600 font-medium">
                  <span>周期：<strong className="text-slate-900">{FA.navTitle}</strong></span>
                  <span>•</span>
                  <span>归档日期：<strong className="text-slate-900">{FA.reportDate}</strong></span>
                </div>
              </div>
            </footer>
          </main>
        </article>
      </div>
    </div>
  );
}

