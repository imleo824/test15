import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader, SummaryBox, highlightNumbers } from "./utils";
import { ReportPanel } from "../../ReportSections";
import { Trophy } from "lucide-react";

export const PerformanceReformSection: React.FC = () => {
  return (
    <ReportPanel tone="soft" padding="sm" className="report-module-stack h-full">
      <div className="report-module-main">
        {/* 顶部标题与标签 */}
        <div className="report-module-intro">
          <ModuleBlockHeader title={<><Trophy className="w-5 h-5 text-slate-900 shrink-0" /><span>3.4.2 升级考核机制</span></>} />
          <SummaryBox>
            {highlightNumbers("打破传统单一关注[[粗暴划档绩效]]与[[个人孤立竞争]]的误区，重构[[绩效档次]]与[[老带动新机制]]，形成正向团队生态。")}
          </SummaryBox>
        </div>

        {/* 2个核心维度对比 */}
        <div className="report-module-body">
          {/* 维度一：绩效档次机制 */}
          <div className="p-5 bg-slate-50/40 border border-slate-200/90 rounded-xl space-y-4">
            <div className="flex items-center gap-2 pb-0.5">
              <span className="report-sequence-badge">
                1
              </span>
              <span className="font-black text-slate-900 text-sm">
                {highlightNumbers("绩效档次机制：按[[实际得分]]")}
              </span>
            </div>

            <BeforeAfter
              beforeTitle="传统老机制"
              beforeSubtitle="按[[固定区间划档]]"
              before="如 [[40分]] 和 [[70分]] 都归为同一个[[绩效档次]]，挫伤[[多劳者积极性]]。"
              coreSpan="[[算法升级]]"
              coreStrong="[[精细计提]]"
              coreI="[[多劳多得]]"
              afterTitle="升级新机制"
              afterSubtitle="按[[实际得分精细计提]]"
              after="基于[[实际得分]]计提，[[70分]] 一定比 [[40分]] 回报更高。"
            />
          </div>

          {/* 维度二：老带动新机制 */}
          <div className="p-5 bg-slate-50/40 border border-slate-200/90 rounded-xl space-y-4">
            <div className="flex items-center gap-2 pb-0.5">
              <span className="report-sequence-badge">
                2
              </span>
              <span className="font-black text-slate-900 text-sm">
                {highlightNumbers("老带动新机制：按[[组间竞争]]")}
              </span>
            </div>

            <BeforeAfter
              beforeTitle="传统老机制"
              beforeSubtitle="纯[[个人独立考核]]"
              before="员工[[各自为战]]，新老竞争不愿传授经验，致[[经验断层]]。"
              coreSpan="[[模式升级]]"
              coreStrong="[[组间PK]]"
              coreI="[[责任制]]"
              afterTitle="升级新机制"
              afterSubtitle="按[[组分配]]与[[组间竞争]]"
              after="[[组间竞争]]、合作，[[按组考核]]倒逼组内[[主动辅导新人]]提升绩效。"
            />
          </div>
        </div>
      </div>

      <div className="report-module-footer">
        <ExpectedRhythm
          items={[
            { month: "7月", title: "方案宣导与规则细化", desc: "细化按分计提与组间竞争规则，组织宣导" },
            { month: "8月", title: "试点实验落地", desc: "核心审核组上线新考核机制，观察正向激励" },
            { month: "9月 - 10月", title: "全量推行与机制优化", desc: "替换老旧区间划档，形成驱逐劣币的底层机制" },
          ]}
        />
      </div>
    </ReportPanel>
  );
};
