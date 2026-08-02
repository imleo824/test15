import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";

export const PersonnelDistribution: React.FC = () => {
  return (
    <div className="personnel-distribution">
      {/* 顶栏说明条 */}
      <SummaryBox variant="chapter">
        <div className="personnel-summary-list">
          {[
            "[[远程取消]]：已完成[[取消远程工作制]]；",
            "[[外包裁撤]]：由于[[质量低且风险高]]，将在8月进一步降低，直至[[完全取消]]；",
            "[[场地分配]]：[[办公场地]]动态优化，[[D、S、F均匀调整]]；",
            "[[优胜劣汰]]：深化[[考核机制]]，实现[[优胜劣汰]]，增加[[专业类人员]]；",
            "[[流程优化]]：裁撤[[冗余的内外协作流程]]，全面[[提升执行效率]]与安全性。",
          ].map((item, index) => (
            <p key={item} className="personnel-summary-item">
              <span className="report-sequence-badge">{index + 1}</span>
              <span>{highlightNumbers(item)}</span>
            </p>
          ))}
        </div>
      </SummaryBox>

      {/* 结构树及数字卡片区 */}
      <div className="personnel-structure">
        {/* 第一层：占比 & WB */}
        <div className="personnel-primary-grid">
          {/* Card 1: 占比 */}
          <div className="personnel-primary-card">
            <div className="personnel-card-label">
              <span>CD</span>
            </div>
            <div className="personnel-primary-value">
              <span className="personnel-count">
                365
              </span>
            </div>
          </div>

          {/* Card 2: WB */}
          <div className="personnel-primary-card">
            <div className="personnel-card-label">
              <span>
                WB
              </span>
            </div>
            <div className="personnel-primary-value">
              <span className="personnel-count">
                119
              </span>
              <span className="personnel-change personnel-change--negative">
                -17
              </span>
            </div>
          </div>
        </div>

        {/* 树状连接线 (仅在中大屏幕显示) */}
        <div className="personnel-tree-lines">
          {/* 垂直主干线 */}
          <div className="w-0.5 h-6 bg-slate-200 mx-auto" />

          {/* 水平分支线 */}
          <div className="w-[83.33%] mx-auto h-0.5 bg-slate-200 relative">
            {/* 6个下降触点 */}
            <div className="absolute top-0 left-[0%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
            <div className="absolute top-0 left-[20%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
            <div className="absolute top-0 left-[40%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
            <div className="absolute top-0 left-[60%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
            <div className="absolute top-0 left-[80%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
            <div className="absolute top-0 left-[100%] -translate-x-1/2 w-0.5 h-6 bg-slate-200" />
          </div>
        </div>

        {/* 第二层：6个细分岗位卡片 */}
        <div className="personnel-role-grid">
          {[
            { label: "T", count: "3", change: "↓ -18", isNegative: true },
            { label: "D", count: "71", change: "↓ -5", isNegative: true },
            { label: "S", count: "239", change: "↑ +21", isPositive: true },
            { label: "F", count: "52", change: "↑ +2", isPositive: true },
            { label: "YC", count: "0", change: "↓ -5", isNegative: true },
            { label: "WB", count: "119", change: "↓ -12", isNegative: true },
          ].map((item) => (
            <div
              key={item.label}
              className="personnel-role-card"
            >
              <div className="personnel-role-label">
                {item.label}
              </div>
              <div className="personnel-role-count">
                {item.count}
              </div>
              <div
                className={`personnel-change ${
                  item.isPositive
                    ? "personnel-change--positive"
                    : item.isNegative
                    ? "personnel-change--negative"
                    : "personnel-change--neutral"
                }`}
              >
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
