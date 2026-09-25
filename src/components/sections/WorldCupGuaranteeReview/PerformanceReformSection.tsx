import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader, SummaryBox, highlightNumbers } from "./utils";
import { ReportDimensionCard, ReportPanel } from "../../ReportSections";
import { Trophy } from "lucide-react";

export const PerformanceReformSection: React.FC = () => {
  return (
    <ReportPanel tone="soft" padding="sm" className="report-module-stack h-full">
      <div className="report-module-main">
        {/* 顶部标题与标签 */}
        <div className="report-module-intro">
          <ModuleBlockHeader title={<><Trophy className="w-5 h-5 text-slate-900 shrink-0" /><span>7.2.1 升级考核机制</span></>} />
          <SummaryBox>
            {highlightNumbers("转变传统[[固定区间粗放划档]]与[[个人孤立竞争]]考核模式，推行[[基于实际得分精细计提]]与[[组间竞争协同责任制]]，激发团队整体效能。")}
          </SummaryBox>
        </div>

        {/* 2个核心维度对比 */}
        <div className="report-module-body space-y-4">
          {/* 维度一：绩效档次机制 */}
          <ReportDimensionCard
            index={1}
            title={highlightNumbers("绩效档次机制：按[[实际得分精细计提]]")}
          >
            <BeforeAfter
              beforeTitle="传统老机制"
              beforeSubtitle="按[[固定区间划档]]"
              before="如 [[40分]] 与 [[70分]] 归入同一[[绩效档次]]，难以体现多劳多得。"
              coreSpan="[[算法升级]]"
              coreStrong="[[精细计提]]"
              coreI="[[多劳多得]]"
              afterTitle="升级新机制"
              afterSubtitle="按[[实际得分精细计提]]"
              after="基于[[实际得分]]直接计提，[[70分]] 获得更显著激励回报。"
            />
          </ReportDimensionCard>

          {/* 维度二：老带动新机制 */}
          <ReportDimensionCard
            index={2}
            title={highlightNumbers("团队协同机制：按[[组间竞逐责任制]]")}
          >
            <BeforeAfter
              beforeTitle="传统老机制"
              beforeSubtitle="纯[[个人独立考核]]"
              before="员工[[各自为战]]，缺乏经验传授意愿，易造成新人成长滞后。"
              coreSpan="[[模式升级]]"
              coreStrong="[[组间竞逐]]"
              coreI="[[责任制]]"
              afterTitle="升级新机制"
              afterSubtitle="按[[组考核]]与[[组间竞争]]"
              after="以[[组为考核单元]]激发组间竞逐，倒逼老员工[[主动辅导新人]]。"
            />
          </ReportDimensionCard>
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

