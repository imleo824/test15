import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface MacroTrendLeveragePoint {
  month: string;
  // 图表 1：红利 撬动 存款 (倍) = 存款金额 ÷ 红利 (去返水)
  normalDepLeverage: number; // 正常用户
  riskDepLeverage: number;   // 风控用户
  allDepLeverage: number;    // 全盘均值
  // 图表 2：红利 撬动 盈利 (倍) = 平台净收益 ÷ 赠金总投入
  normalProfitLeverage: number; // 正常用户
  riskProfitLeverage: number;   // 风控用户
  allProfitLeverage: number;    // 全盘均值
}

export const macroTrendLeverageData: MacroTrendLeveragePoint[] = [
  { 
    month: "25-01", 
    normalDepLeverage: 30.00, 
    riskDepLeverage: 31.25, 
    allDepLeverage: 28.57,
    normalProfitLeverage: 2.02, 
    riskProfitLeverage: 0.67, 
    allProfitLeverage: 1.73 
  },
  { 
    month: "25-02", 
    normalDepLeverage: 28.00, 
    riskDepLeverage: 26.50, 
    allDepLeverage: 26.19,
    normalProfitLeverage: 1.71, 
    riskProfitLeverage: 0.47, 
    allProfitLeverage: 1.42 
  },
  { 
    month: "25-03", 
    normalDepLeverage: 25.50, 
    riskDepLeverage: 22.00, 
    allDepLeverage: 23.00,
    normalProfitLeverage: 1.41, 
    riskProfitLeverage: 0.26, 
    allProfitLeverage: 1.13 
  },
  { 
    month: "25-04", 
    normalDepLeverage: 23.20, 
    riskDepLeverage: 18.50, 
    allDepLeverage: 21.03,
    normalProfitLeverage: 1.12, 
    riskProfitLeverage: 0.17, 
    allProfitLeverage: 0.87 
  },
  { 
    month: "25-05", 
    normalDepLeverage: 20.50, 
    riskDepLeverage: 16.20, 
    allDepLeverage: 18.57,
    normalProfitLeverage: 0.85, 
    riskProfitLeverage: 0.07, 
    allProfitLeverage: 0.65 
  },
  { 
    month: "25-06", 
    normalDepLeverage: 18.20, 
    riskDepLeverage: 14.80, 
    allDepLeverage: 17.25,
    normalProfitLeverage: 0.59, 
    riskProfitLeverage: 0.06, 
    allProfitLeverage: 0.46 
  },
  { 
    month: "25-07", 
    normalDepLeverage: 17.10, 
    riskDepLeverage: 13.90, 
    allDepLeverage: 16.48,
    normalProfitLeverage: 0.50, 
    riskProfitLeverage: 0.03, 
    allProfitLeverage: 0.38 
  },
  { 
    month: "25-08", 
    normalDepLeverage: 16.50, 
    riskDepLeverage: 13.20, 
    allDepLeverage: 15.80,
    normalProfitLeverage: 0.46, 
    riskProfitLeverage: 0.02, 
    allProfitLeverage: 0.34 
  },
  { 
    month: "25-09", 
    normalDepLeverage: 16.10, 
    riskDepLeverage: 12.80, 
    allDepLeverage: 15.38,
    normalProfitLeverage: 0.42, 
    riskProfitLeverage: 0.02, 
    allProfitLeverage: 0.31 
  },
];

export const BonusMacroTrendChart: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="text-base font-black text-slate-900">
            红利效能双杠杆走势透视
          </h4>
          <p className="text-xs text-slate-500 font-bold mt-0.5">
            纯倍数时序演变走势对照：红利撬动存款（去除返水）与红利撬动盈利，并细分正常用户与风控用户对照
          </p>
        </div>
      </div>

      {/* 核心杠杆指标对照栏 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 p-3.5 bg-slate-50/80 rounded-md text-xs">
        <div>
          <span className="text-slate-500 font-bold block">正常用户·存款杠杆 (去返水)</span>
          <span className="font-mono font-black text-emerald-700 text-sm">30.00x ➔ 16.10x</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">充值意愿高，自然吸储沉淀</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">风控用户·存款杠杆 (去返水)</span>
          <span className="font-mono font-black text-rose-600 text-sm">31.25x ➔ 12.80x</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">达标流水后即刻发起提现</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">正常用户·盈利杠杆 (净利转化)</span>
          <span className="font-mono font-black text-emerald-700 text-sm">2.02x ➔ 0.42x</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">保持正向造血与利润贡献</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">风控用户·盈利杠杆 (净利转化)</span>
          <span className="font-mono font-black text-rose-600 text-sm">0.67x ➔ 0.02x</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">后期盈利杠杆几近归零</span>
        </div>
      </div>

      {/* 纯倍数走势双图并列呈现 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左图：图表 1：红利 撬动 存款 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 inline-block"></span>
              <span>图表 1：红利 撬动 存款</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 存款金额 ÷ 红利
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            纯倍数走势：展示正常用户、风控用户及全盘均值的红利吸储杠杆演变
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={macroTrendLeverageData} margin={{ top: 10, right: 15, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[10, 35]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#0f172a", 
                    borderRadius: "8px", 
                    color: "#fff", 
                    border: "none",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}
                  formatter={(value: any, name: any) => [`${value} 倍 (存款÷红利)`, name]}
                />
                <Legend wrapperStyle={{ paddingTop: "8px", fontSize: "11px", fontWeight: "bold" }} />
                <Line 
                  type="monotone" 
                  dataKey="normalDepLeverage" 
                  name="正常用户·存款杠杆" 
                  stroke="#10b981" 
                  strokeWidth={2.5} 
                  dot={{ r: 3.5, fill: "#10b981", strokeWidth: 1.5, stroke: "#fff" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="riskDepLeverage" 
                  name="风控用户·存款杠杆" 
                  stroke="#f43f5e" 
                  strokeWidth={2.5} 
                  strokeDasharray="5 2"
                  dot={{ r: 3.5, fill: "#f43f5e", strokeWidth: 1.5, stroke: "#fff" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="allDepLeverage" 
                  name="全盘均值·存款杠杆" 
                  stroke="#6366f1" 
                  strokeWidth={2} 
                  strokeDasharray="3 3"
                  dot={{ r: 2.5, fill: "#6366f1", strokeWidth: 1, stroke: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 右图：图表 2：红利 撬动 盈利 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block"></span>
              <span>图表 2：红利 撬动 盈利</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 平台净收益 ÷ (红利+返水)
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            纯倍数走势：展示正常用户、风控用户及全盘均值的红利净利润转化演变
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={macroTrendLeverageData} margin={{ top: 10, right: 15, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[0, 2.3]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#0f172a", 
                    borderRadius: "8px", 
                    color: "#fff", 
                    border: "none",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}
                  formatter={(value: any, name: any) => [`${value} 倍 (净利÷赠金)`, name]}
                />
                <Legend wrapperStyle={{ paddingTop: "8px", fontSize: "11px", fontWeight: "bold" }} />
                <Line 
                  type="monotone" 
                  dataKey="normalProfitLeverage" 
                  name="正常用户·盈利杠杆" 
                  stroke="#10b981" 
                  strokeWidth={2.5} 
                  dot={{ r: 3.5, fill: "#10b981", strokeWidth: 1.5, stroke: "#fff" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="riskProfitLeverage" 
                  name="风控用户·盈利杠杆" 
                  stroke="#f43f5e" 
                  strokeWidth={2.5} 
                  strokeDasharray="5 2"
                  dot={{ r: 3.5, fill: "#f43f5e", strokeWidth: 1.5, stroke: "#fff" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="allProfitLeverage" 
                  name="全盘均值·盈利杠杆" 
                  stroke="#0f172a" 
                  strokeWidth={2} 
                  strokeDasharray="3 3"
                  dot={{ r: 2.5, fill: "#0f172a", strokeWidth: 1, stroke: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
