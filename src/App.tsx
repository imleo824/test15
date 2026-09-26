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
    <div className="report-shell min-h-screen bg-[#f1f4f8] text-slate-900 flex flex-col font-sans text-[17px] leading-[1.75] selection:bg-slate-200 antialiased print:bg-white">
      {/* Document Workspace Center Desk */}
      <div className="flex-1 flex justify-center w-full py-8 md:py-14 px-3 sm:px-6 lg:px-8 print:p-0">
        {/* Executive Binder Folio Page */}
        <article className="report-folio w-full max-w-[1260px] bg-white shadow-2xl shadow-slate-300/60 border border-slate-200/90 print:shadow-none print:border-none print:max-w-none print:w-full flex flex-col text-[17px] leading-[1.75]">
          {/* Main Content Area */}
          <main className="report-main flex-1 w-full px-8 sm:px-14 lg:px-20 py-10 lg:py-14 space-y-20 lg:space-y-28 print:px-0 print:py-0 print:space-y-20 text-[17px] leading-[1.75]">
            {/* Cover & Directory */}
            <div id="cover" className="scroll-mt-14">
              <ReportCover />
            </div>

            {/* Strategic Risk & Governance Review (Chapters 1.0 - 4.0) */}
            <div id="fk-world-cup-review" className="scroll-mt-14">
              <WorldCupGuaranteeReview />
            </div>

            {/* Report End Page */}
            <footer className="report-end-page print:hidden border-t-2 border-slate-900 mt-20 pt-14 pb-8">
              <div className="report-end-content space-y-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  汇报结束 · 感谢审阅
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-[17px] font-mono text-slate-600 font-medium leading-[1.75]">
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

