import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";

export interface VipSpectrumDataPoint {
  vip: string;
  vipLabel: string;
  netRate: number;        // 净收益率 (%)
  profitLeverage: number; // 红利盈利杠杆 (倍)
  depLeverage: number;    // 红利存款杠杆 (倍)
  bonus: number;          // 红利 (万)
  rebate: number;         // 返水 (万)
  userCount: string;      // 活跃玩家估算
  roleType: string;       // 定位
}

export const vipSpectrumData: VipSpectrumDataPoint[] = [
  { vip: "VIP0", vipLabel: "VIP0 (新客/未充)", netRate: -1.45, profitLeverage: -0.14, depLeverage: 11.2, bonus: 18.2, rebate: 9.8, userCount: "14,500人", roleType: "黑产多面人重灾区" },
  { vip: "VIP1", vipLabel: "VIP1 (新手转化)", netRate: 1.85, profitLeverage: 0.28, depLeverage: 12.1, bonus: 42.0, rebate: 23.5, userCount: "8,900人", roleType: "微薄留存转化" },
  { vip: "VIP2", vipLabel: "VIP2 (浅度娱乐)", netRate: 4.20, profitLeverage: 0.62, depLeverage: 13.5, bonus: 65.0, rebate: 36.0, userCount: "6,200人", roleType: "初具造血能力" },
  { vip: "VIP3", vipLabel: "VIP3 (日常活跃)", netRate: 6.50, profitLeverage: 0.95, depLeverage: 14.2, bonus: 78.0, rebate: 44.0, userCount: "4,500人", roleType: "健康基本盘" },
  { vip: "VIP4", vipLabel: "VIP4 (付费骨干)", netRate: 8.80, profitLeverage: 1.25, depLeverage: 15.0, bonus: 85.0, rebate: 49.0, userCount: "3,100人", roleType: "中坚贡献群体" },
  { vip: "VIP5", vipLabel: "VIP5 (高价值VIP)", netRate: 9.90, profitLeverage: 1.48, depLeverage: 15.6, bonus: 76.0, rebate: 45.0, userCount: "1,950人", roleType: "高粘性高留存" },
  { vip: "VIP6", vipLabel: "VIP6 (大客VIP)", netRate: 10.80, profitLeverage: 1.68, depLeverage: 16.2, bonus: 68.0, rebate: 41.0, userCount: "1,120人", roleType: "核心利润源" },
  { vip: "VIP7", vipLabel: "VIP7 (超级大户)", netRate: 11.60, profitLeverage: 1.85, depLeverage: 16.9, bonus: 58.0, rebate: 36.0, userCount: "620人", roleType: "高客单压舱石" },
  { vip: "VIP8", vipLabel: "VIP8 (顶级大户)", netRate: 12.50, profitLeverage: 2.08, depLeverage: 17.5, bonus: 46.0, rebate: 29.0, userCount: "310人", roleType: "战略高值资产" },
  { vip: "VIP9", vipLabel: "VIP9 (黑金SVIP)", netRate: 13.20, profitLeverage: 2.25, depLeverage: 18.2, bonus: 38.0, rebate: 25.0, userCount: "140人", roleType: "极高客单私享" },
  { vip: "VIP10", vipLabel: "VIP10 (至尊元老)", netRate: 14.50, profitLeverage: 2.52, depLeverage: 19.5, bonus: 32.0, rebate: 22.0, userCount: "60人", roleType: "终极顶梁柱" },
];

export const BonusVipSpectrumChart: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="text-base font-black text-slate-900">
            VIP 0 ~ VIP 10 双杠杆能效全景对比
          </h4>
          <p className="text-xs text-slate-500 font-bold mt-0.5">
            按 VIP 0 至 VIP 10 等级切片对比「红利 撬动 存款」与「红利 撬动 盈利」表现差异
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono font-medium">
          <span className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-100/80">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>VIP4+ 优质造血区</span>
          </span>
          <span className="flex items-center gap-1.5 text-rose-800 bg-rose-50/80 px-2.5 py-1 rounded border border-rose-100/80">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>VIP0 负杠杆倒挂点</span>
          </span>
        </div>
      </div>

      {/* 核心结论速览栏 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 p-3.5 bg-slate-50/80 rounded-md text-xs">
        <div>
          <span className="text-slate-500 font-bold block">存款撬动效能梯度</span>
          <span className="font-mono font-black text-violet-700 text-sm">11.2倍 ➔ 19.5倍</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">随VIP等级上升稳定爬升</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">盈利撬动效能分水岭</span>
          <span className="font-mono font-black text-slate-900 text-sm">
            VIP0 <span className="text-rose-600 font-black">-0.14x</span> ➔ VIP10 <span className="text-emerald-700 font-black">+2.52x</span>
          </span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">VIP4 起全面跨入高盈利造血区</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">红利预算投放倾斜建议</span>
          <span className="font-mono font-black text-indigo-700 text-sm">收缩 VIP0 ➔ 倾斜 VIP4~VIP10</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">遏制黑产套利，激励核心高净值</span>
        </div>
      </div>

      {/* 双图并列呈现 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左图：图表 1：VIP 0 ~ VIP 10 红利 撬动 存款 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 inline-block"></span>
              <span>图表 1：VIP 0 ~ VIP 10 红利 撬动 存款</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 存款金额 ÷ 红利 (去除返水)
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            各VIP等级纯红利吸储倍数：从 VIP0 的 11.2倍 逐步递增至 VIP10 的 19.5倍
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vipSpectrumData} margin={{ top: 15, right: 15, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="vip" 
                  tick={{ fill: "#334155", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[8, 22]}
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
                  formatter={(value: any) => [`${value} 倍 (存款÷红利)`, "红利存款杠杆"]}
                  labelFormatter={(label) => {
                    const row = vipSpectrumData.find(v => v.vip === label);
                    return `${label} (${row?.roleType || ""})`;
                  }}
                />
                <ReferenceLine y={15.0} stroke="#8b5cf6" strokeDasharray="3 3" label={{ value: "骨干基准线 15.0x", fill: "#8b5cf6", fontSize: 10, position: "insideTopRight" }} />
                <Bar 
                  dataKey="depLeverage" 
                  name="红利存款杠杆" 
                  radius={[4, 4, 0, 0]} 
                  barSize={18}
                >
                  {vipSpectrumData.map((entry, index) => {
                    // 随着等级提升渐变颜色深度
                    const isHighVip = index >= 4;
                    return (
                      <Cell 
                        key={`cell-dep-${index}`} 
                        fill={isHighVip ? "#7c3aed" : "#a78bfa"} 
                      />
                    );
                  })}
                  <LabelList dataKey="depLeverage" position="top" formatter={(val: any) => `${val}x`} style={{ fontSize: "10px", fill: "#6d28d9", fontWeight: "bold" }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 右图：图表 2：VIP 0 ~ VIP 10 红利 撬动 盈利 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block"></span>
              <span>图表 2：VIP 0 ~ VIP 10 红利 撬动 盈利</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 平台净收益 ÷ (红利+返水)
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            各VIP等级净利转化倍数：VIP0 倒挂（-0.14x），VIP4 跨入健康造血（1.25x），VIP10 高达 2.52x
          </p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vipSpectrumData} margin={{ top: 15, right: 15, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="vip" 
                  tick={{ fill: "#334155", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[-0.4, 3.0]}
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
                  formatter={(value: any) => [`${value} 倍 (净利÷赠金)`, "红利盈利杠杆"]}
                  labelFormatter={(label) => {
                    const row = vipSpectrumData.find(v => v.vip === label);
                    return `${label} (${row?.roleType || ""})`;
                  }}
                />
                <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1.5} />
                <ReferenceLine y={1.0} stroke="#10b981" strokeDasharray="3 3" label={{ value: "造血基准线 1.0x", fill: "#059669", fontSize: 10, position: "insideTopRight" }} />
                <Bar 
                  dataKey="profitLeverage" 
                  name="红利盈利杠杆" 
                  radius={[4, 4, 0, 0]} 
                  barSize={18}
                >
                  {vipSpectrumData.map((entry, index) => {
                    const isNegative = entry.profitLeverage < 0;
                    const isLow = entry.profitLeverage < 1.0;
                    return (
                      <Cell 
                        key={`cell-profit-${index}`} 
                        fill={isNegative ? "#f43f5e" : isLow ? "#f59e0b" : "#10b981"} 
                      />
                    );
                  })}
                  <LabelList 
                    dataKey="profitLeverage" 
                    position="top" 
                    formatter={(val: any) => `${val}x`} 
                    style={{ fontSize: "10px", fill: "#0f172a", fontWeight: "bold" }} 
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
