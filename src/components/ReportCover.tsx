import React from "react";
import { FA } from "../types";

export const ReportCover: React.FC = () => {
  const sections = [
    { id: "1.0", title: "组织管理", subtitle: "编制分布、外包治理与组织优化" },
    { id: "2.0", title: "数据概览", subtitle: "拦截金额时效、类型结构与重点明细" },
    { id: "3.0", title: "内控概览", subtitle: "违规事件处置、线索稽查与高危场景" },
    { id: "4.0", title: "变革与工单", subtitle: "核心业务变革、线下群关停与工单化" },
    { id: "5.0", title: "系统审核", subtitle: "审单模式翻转演变、人效与时效双突破" },
    { id: "6.0", title: "业务概览", subtitle: "质量效率飞轮、支撑指标与专项攻坚" },
    { id: "7.0", title: "套利指数", subtitle: "红利杠杆走势、跨站多账户与全新模型" },
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
    <div className="report-cover-page">
      {/* 报告主标题与元数据 */}
      <div className="report-cover-title-block pt-2">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
            季度风险审计与运营效能管理全景报告
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {FA.reportTitle}
          </h1>
        </div>

        <div className="report-cover-meta">
          <div>
            <span>数据周期</span>
            <strong>{FA.navTitle}</strong>
          </div>
          <div>
            <span>报告日期</span>
            <strong>{FA.reportDate}</strong>
          </div>
          <div>
            <span>汇报范围</span>
            <strong>全盘风控业务（1.0 至 7.0 章节）</strong>
          </div>
        </div>
      </div>

      {/* 目录 */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
            报告章节目录索引
          </span>
          <span className="text-xs text-slate-500">
            点击章节可直接定位
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
              className="group flex items-baseline justify-between py-2 border-b border-slate-100 hover:border-slate-900 cursor-pointer transition-colors"
            >
              <div className="flex items-baseline gap-3 min-w-0 pr-2">
                <span className="font-mono text-sm font-bold text-slate-900 group-hover:text-blue-700 shrink-0">
                  {section.id}
                </span>
                <div className="min-w-0 truncate">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-900 mr-2">
                    {section.title}
                  </span>
                  <span className="text-xs text-slate-500 hidden sm:inline truncate">
                    {section.subtitle}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900 shrink-0">
                ➔
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

