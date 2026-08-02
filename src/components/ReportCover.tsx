import React from "react";
import { FA } from "../types";

export const ReportCover: React.FC = () => {
  const sections: {
    id: string;
    title: string;
    paths: {
      title: string;
    }[];
  }[] = [
    {
      id: "1.0",
      title: "组织管理",
      paths: [],
    },
    {
      id: "2.0",
      title: "数据概览",
      paths: [
        {
          title: "2.1 风控数据",
        },
        {
          title: "2.2 内控数据",
        },
      ],
    },
    {
      id: "3.0",
      title: "业务概览",
      paths: [
        {
          title: "3.1 风险前置",
        },
        {
          title: "3.2 系统审核",
        },
        {
          title: "3.3 智能派单",
        },
        {
          title: "3.4 人工审核",
        },
        {
          title: "3.5 代理审核",
        },
      ],
    },
  ];

  return (
    <div className="report-cover-page">
      <div className="report-cover-title-block">
        <h1>{FA.reportTitle}</h1>
        <div className="report-cover-meta">
          <div>
            <span>数据周期</span>
            <strong>{FA.navTitle}</strong>
          </div>
          <div>
            <span>报告日期</span>
            <strong>{FA.reportDate}</strong>
          </div>
        </div>
      </div>

      {/* 目录 */}
      <div className="report-cover-directory">
        {sections.map((section) => (
          <div key={section.id} className="report-cover-section">
            <div className="report-cover-section-title">
              <span>{section.id}</span>
              <strong>{section.title}</strong>
            </div>

            <div className="report-cover-paths">
              {section.paths.map((path) => (
                <div key={path.title} className="report-cover-path">
                  <div className="report-cover-path-title">{path.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
