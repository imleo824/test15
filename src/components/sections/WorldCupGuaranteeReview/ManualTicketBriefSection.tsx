import React from "react";
import { CheckSquare, ShieldAlert, Zap, ClipboardCheck, ArrowLeftRight } from "lucide-react";
import { ModuleBlockHeader, SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportPanel } from "../../ReportSections";

export const ManualTicketBriefSection: React.FC = () => {
  return (
    <ReportPanel tone="soft" padding="sm" className="report-module-stack h-full">
      <div className="report-module-main">
        {/* 顶部标题 */}
        <div className="report-module-intro">
          <ModuleBlockHeader 
            title={<><ClipboardCheck className="w-5 h-5 text-slate-900 shrink-0" /><span>4.4.1 工单系统联动</span></>} 
            right={<ReportBadge tone="green">安全联动</ReportBadge>}
          />
          <SummaryBox>
            {highlightNumbers("人工审核全面对接[[3.0风控工单系统]]。彻底剥离原有 Telegram 小飞机群的非公开及碎片化对接，将财务核实、代存核实、扣款、复审等[[11项核心场景]]100%全线上化闭环流转。")}
          </SummaryBox>
          
          <div className="mt-4 space-y-3">
            <div className="text-sm font-black text-slate-800 flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <ArrowLeftRight className="w-4 h-4 text-blue-900" />
              <span>人工与工单无缝配合机制</span>
            </div>
            <ul className="text-sm font-bold text-slate-700 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 shrink-0"></span>
                <span>{highlightNumbers("单单隔离与一客一审，审计留痕率达[[100%]]")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 shrink-0"></span>
                <span>{highlightNumbers("自动拦截机制与强制标签高亮，漏看损耗降幅[[~55%]]")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 shrink-0"></span>
                <span>{highlightNumbers("SLA超时升级提示，急单平均响应降至[[1.5分钟]]")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ReportPanel>
  );
};
