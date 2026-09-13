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
    <div className="report-shell min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 antialiased">
      {/* Workspace Container */}
      <div className="flex-1 flex w-full py-6 md:py-8">
        {/* Main Content Area */}
        <main className="report-main flex-1 w-full space-y-14 print:space-y-20">
          {/* Cover & Directory */}
          <div id="cover" className="scroll-mt-14">
            <ReportCover />
          </div>

          {/* 世界杯 Guarantee Review (Chapters 1.0 - 7.0) */}
          <div id="fk-world-cup-review" className="scroll-mt-14">
            <WorldCupGuaranteeReview />
          </div>

          {/* Report End Page */}
          <footer className="report-end-page print:hidden border-t-2 border-slate-900 mt-16 pt-12">
            <div className="report-end-content space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                汇报结束 · 感谢审阅
              </h2>
              <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-500">
                <span>周期：{FA.navTitle}</span>
                <span>•</span>
                <span>归档日期：{FA.reportDate}</span>
                <span>•</span>
                <span>密级：{FA.confidentiality}</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
