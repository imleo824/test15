import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

// 2025年1月~9月 系统审核 vs 人工审核 演进数据
export const auditEvolutionData = [
  {
    month: "1月",
    totalOrders: 160.0,
    systemOrders: 23.7,
    manualOrders: 136.3,
    systemRatio: 14.8,
    manualRatio: 85.2,
    fteCount: 68,
    laborCost: 102.0, // 万元
    avgTatMinutes: 18.5, // 平均审核耗时(分钟)
    leakageLoss: 38.5 // 漏判资损(万元)
  },
  {
    month: "2月",
    totalOrders: 165.0,
    systemOrders: 41.9,
    manualOrders: 123.1,
    systemRatio: 25.4,
    manualRatio: 74.6,
    fteCount: 64,
    laborCost: 96.0,
    avgTatMinutes: 15.8,
    leakageLoss: 34.0
  },
  {
    month: "3月",
    totalOrders: 178.0,
    systemOrders: 65.9,
    manualOrders: 112.1,
    systemRatio: 37.0,
    manualRatio: 63.0,
    fteCount: 58,
    laborCost: 87.0,
    avgTatMinutes: 12.6,
    leakageLoss: 28.5
  },
  {
    month: "4月",
    totalOrders: 185.0,
    systemOrders: 88.8,
    manualOrders: 96.2,
    systemRatio: 48.0,
    manualRatio: 52.0,
    fteCount: 52,
    laborCost: 78.0,
    avgTatMinutes: 9.8,
    leakageLoss: 23.0
  },
  {
    month: "5月",
    totalOrders: 192.0,
    systemOrders: 112.5,
    manualOrders: 79.5,
    systemRatio: 58.6,
    manualRatio: 41.4,
    fteCount: 44,
    laborCost: 66.0,
    avgTatMinutes: 7.2,
    leakageLoss: 18.2
  },
  {
    month: "6月",
    totalOrders: 205.0,
    systemOrders: 141.5,
    manualOrders: 63.5,
    systemRatio: 69.0,
    manualRatio: 31.0,
    fteCount: 36,
    laborCost: 54.0,
    avgTatMinutes: 5.0,
    leakageLoss: 13.5
  },
  {
    month: "7月",
    totalOrders: 212.0,
    systemOrders: 160.7,
    manualOrders: 51.3,
    systemRatio: 75.8,
    manualRatio: 24.2,
    fteCount: 30,
    laborCost: 45.0,
    avgTatMinutes: 3.8,
    leakageLoss: 9.8
  },
  {
    month: "8月",
    totalOrders: 218.0,
    systemOrders: 174.4,
    manualOrders: 43.6,
    systemRatio: 80.0,
    manualRatio: 20.0,
    fteCount: 25,
    laborCost: 37.5,
    avgTatMinutes: 2.9,
    leakageLoss: 7.5
  },
  {
    month: "9月",
    totalOrders: 220.0,
    systemOrders: 181.3,
    manualOrders: 38.7,
    systemRatio: 82.4,
    manualRatio: 17.6,
    fteCount: 22,
    laborCost: 33.0,
    avgTatMinutes: 2.4,
    leakageLoss: 6.2
  }
];

export const SystemVsManualAuditChart: React.FC = () => {
  return (
    <div id="system-vs-manual-audit-chart-container" className="space-y-4">
      {/* 单一全景图表：2025年 审单模式结构演进（系统 vs 人工） */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
        <div className="border-b border-slate-200/80 pb-2.5 mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h5 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span>2025年 审单模式结构演进图（系统审核 vs 人工审核 比例翻转）</span>
            </h5>
          </div>
          <span className="text-[11px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded border border-blue-200 shrink-0">
            系统替代率 +67.6pct · 达成 80%+ 标杆
          </span>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={auditEvolutionData} margin={{ top: 15, right: 35, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#475569", fontWeight: 600 }} axisLine={{ stroke: "#cbd5e1" }} />
              <YAxis
                yAxisId="left"
                label={{ value: "万单", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 11, fontWeight: 700 }}
                tick={{ fontSize: 11, fill: "#64748b" }}
                axisLine={{ stroke: "#cbd5e1" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, 100]}
                label={{ value: "占比 %", angle: 90, position: "insideRight", fill: "#64748b", fontSize: 11, fontWeight: 700 }}
                tick={{ fontSize: 11, fill: "#64748b" }}
                axisLine={{ stroke: "#cbd5e1" }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl text-xs space-y-1.5 min-w-[200px]">
                        <div className="font-black text-slate-100 border-b border-slate-800 pb-1 flex justify-between">
                          <span>2025年 {label}</span>
                          <span className="font-mono text-slate-300">月出款 {data.totalOrders}万单</span>
                        </div>
                        <div className="flex justify-between items-center text-blue-400 font-bold">
                          <span>⚡ 系统审核:</span>
                          <span className="font-mono">{data.systemOrders}万单 ({data.systemRatio}%)</span>
                        </div>
                        <div className="flex justify-between items-center text-amber-400 font-bold">
                          <span>👤 人工审核:</span>
                          <span className="font-mono">{data.manualOrders}万单 ({data.manualRatio}%)</span>
                        </div>
                        <div className="border-t border-slate-800 pt-1 text-slate-400 text-[11px] flex justify-between">
                          <span>专职审单人力:</span>
                          <span className="text-white font-mono">{data.fteCount}人</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                verticalAlign="top"
                height={34}
                formatter={(val) => <span className="text-xs font-black text-slate-700">{val}</span>}
              />
              <ReferenceLine yAxisId="right" y={80} stroke="#10b981" strokeDasharray="3 3" label={{ value: "80%自动化目标线", fill: "#059669", fontSize: 10, fontWeight: 700 }} />
              
              {/* 柱状堆叠 */}
              <Bar yAxisId="left" dataKey="systemOrders" name="系统审核单量(万单)" stackId="a" fill="#3b82f6" radius={[0, 0, 3, 3]} />
              <Bar yAxisId="left" dataKey="manualOrders" name="人工审核单量(万单)" stackId="a" fill="#f59e0b" radius={[3, 3, 0, 0]} />

              {/* 比例折线 */}
              <Line yAxisId="right" type="monotone" dataKey="systemRatio" name="系统审核占比(%)" stroke="#1d4ed8" strokeWidth={2.5} dot={{ r: 3.5, fill: "#1d4ed8" }} />
              <Line yAxisId="right" type="monotone" dataKey="manualRatio" name="人工审核占比(%)" stroke="#d97706" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 3, fill: "#d97706" }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
