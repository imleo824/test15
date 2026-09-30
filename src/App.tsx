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
      <div className="flex-1 flex justify-center w-full py-8 md:py-12 px-3 sm:px-6 lg:px-10 print:p-0">
        {/* Executive Binder Folio Page */}
        <article className="report-folio w-full max-w-[1240px] bg-white border border-[#e2e8f0] print:border-none print:max-w-none print:w-full flex flex-col shadow-sm">
          {/* Main Content Area */}
          <main className="report-main flex-1 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16 space-y-16 lg:space-y-24 xl:space-y-28 print:px-0 print:py-0 print:space-y-16 text-[16px] sm:text-[17px] leading-relaxed">
            {/* Cover & Directory */}
            <div id="cover" className="scroll-mt-14">
              <ReportCover />
            </div>

            {/* Strategic Risk & Governance Review (Chapters 1.0 - 4.0) */}
            <div id="fk-world-cup-review" className="scroll-mt-14">
              <WorldCupGuaranteeReview />
            </div>

            {/* Report End Page */}
            <footer className="report-end-page print:hidden border-t-2 border-slate-900 mt-24 pt-14 pb-10">
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

