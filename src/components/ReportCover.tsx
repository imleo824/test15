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
      title: "风控工单",
      paths: [
        {
          title: "3.1 工单系统建设",
        },
        {
          title: "3.2 工单流转全景",
        },
      ],
    },
    {
      id: "4.0",
      title: "系统审核",
      paths: [
        {
          title: "4.1 审单比例结构演变 (系统 82.4% vs 人工 17.6%)",
        },
        {
          title: "4.2 业务收益剖析 (2大直接收益 + 1大间接受益)",
        },
        {
          title: "4.3 云盾体系 (从0到1打造智能化风控闭环体系)",
        },
      ],
    },
    {
      id: "5.0",
      title: "业务概览",
      paths: [
        {
          title: "5.1 整体态势与人效",
        },
        {
          title: "5.2 风险前置",
        },
        {
          title: "5.3 智能派单",
        },
        {
          title: "5.4 人工审核",
        },
        {
          title: "5.5 特殊风控",
        },
      ],
    },
    {
      id: "6.0",
      title: "红利效率",
      paths: [
        {
          title: "6.1 投放与杠杆崩塌走势",
        },
        {
          title: "6.2 VIP能效与跨站对冲穿透",
        },
        {
          title: "6.3 顶级精算专家深度评审",
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
