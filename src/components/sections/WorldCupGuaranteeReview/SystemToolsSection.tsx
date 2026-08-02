import React from "react";
import { Wrench } from "lucide-react";
import { SystemToolsEffectiveness } from "./SystemToolsEffectiveness";
import { ModuleBlockHeader, ReportInfoGrid, SummaryBox, highlightNumbers } from "./utils";
import { ReportPanel } from "../../ReportSections";

export const SystemToolsSection: React.FC = () => {
  const tools = [
    {
      id: "工具一",
      name: "同局关联",
      desc: "自动调取同局/同房间/同赛事关联账号，捕捉对打与团伙。",
    },
    {
      id: "工具二",
      name: "优势赔率",
      desc: "计算高赔率或水位占比，量化优势水位依赖度。",
    },
    {
      id: "工具三",
      name: "卡危险球",
      desc: "统计进球/红牌/点球前数秒比例，甄别卡信号时差行为。",
    },
    {
      id: "工具四",
      name: "关联查询",
      desc: "一键穿透跨站点账号关联网络，排查跨站养号与同台对打。",
    },
  ];

  return (
    <ReportPanel tone="soft" padding="sm" className="report-module-stack h-full">
      <div className="report-module-main">
        {/* 顶部标题 */}
        <div className="report-module-intro">
          <ModuleBlockHeader title={<><Wrench className="w-5 h-5 text-slate-900 shrink-0" /><span>3.4.3 系统工具支持</span></>} />
          <SummaryBox>
            <div className="space-y-2">
              <div className="font-bold text-slate-900">
                {highlightNumbers("系统工具对[[重点风险特征]]识别效果显著，问题召回率非常高，且大幅提升效率，原来需要人工[[小时级别]]完成的工作，现在只需要[[几秒钟]]即可完成：")}
              </div>
              <div className="space-y-1.5 pt-0.5">
                {[
                  "[[体育对压]] 达～[[90%]]（100个有问题可以查出来90个）；",
                  "[[卡进球点]] 达～[[75%]]（100个有问题可以查出来75个）；",
                  "[[体育打水]] 达～[[68%]]（100个有问题可以查出来68个）；",
                  "[[优势赔率]] 达～[[58%]]（100个有问题可以查出来58个）。",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="report-sequence-badge mt-0.5">{index + 1}</span>
                    <p className="flex-1 leading-relaxed m-0">{highlightNumbers(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          </SummaryBox>
        </div>

        {/* 4大工具 */}
        <ReportInfoGrid
          title="工具清单"
          icon={<Wrench className="w-4 h-4 text-slate-900 shrink-0" />}
          items={tools.map((tool) => ({ title: tool.name, desc: tool.desc, status: "运行中", statusTone: "running" }))}
          showIndex
          hideHeader
        />
      </div>

      {/* 柱状图与效果表现 */}
      <div className="report-module-footer">
        <SystemToolsEffectiveness />
      </div>
    </ReportPanel>
  );
};
