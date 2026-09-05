import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";

// 穿透对比模型：单一账户真实玩家 vs 多账户套利群体（One-ID合并后）
export interface SimpleCrossSiteDataPoint {
  dimension: string;        // 客群切片
  entityCount: string;      // 规模
  bonusPerEntity: string;   // 均领红利
  depositLeverage: number;  // 红利存款杠杆 (倍)
  profitLeverage: number;   // 红利盈利杠杆 (倍)
  color: string;
  note: string;
}

export const simpleComparisonData: SimpleCrossSiteDataPoint[] = [
  {
    dimension: "单一账户·真实玩家 (1人1号)",
    entityCount: "20 人 (20% 真实人头)",
    bonusPerEntity: "3,200 元/人",
    depositLeverage: 15.00,
    profitLeverage: 1.31,
    color: "#10b981",
    note: "真实娱乐沉淀，无跨站对冲洗水，盈利杠杆 1.31x 健康造血",
  },
  {
    dimension: "多账户·套利群体 (1人多号合并)",
    entityCount: "80 人 (操控 180 账号)",
    bonusPerEntity: "11,200 元/人",
    depositLeverage: 14.10,
    profitLeverage: 0.05,
    color: "#f43f5e",
    note: "跨站对等对打刷流水，单人掠夺 3.5倍 红利，盈利杠杆仅 0.05x",
  },
];

export const BonusCrossSiteChart: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* 标题 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="text-base font-black text-slate-900">
            One-ID 穿透合并后：真实玩家 vs 多账户套利客群能效直观剖析
          </h4>
          <p className="text-xs text-slate-500 font-bold mt-0.5">
            透视唯一手机号穿透后，20% 真实玩家与 80% 多账户套利者的实际吸储与盈利杠杆落差
          </p>
        </div>
      </div>

      {/* 核心差异闪报卡 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 p-3.5 bg-slate-50/80 rounded-md text-xs">
        <div>
          <span className="text-slate-500 font-bold block">人均提取红利落差</span>
          <span className="font-mono font-black text-rose-600 text-sm">3,200元 ➔ 11,200元</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">套利者单人跨站多卷走 3.5倍 赠金</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">充值存款撬动假象</span>
          <span className="font-mono font-black text-slate-800 text-sm">15.0x vs 14.1x</span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">对打刷充值流水，表面杠杆极具伪装性</span>
        </div>
        <div>
          <span className="text-slate-500 font-bold block">真实净利产出塌陷</span>
          <span className="font-mono font-black text-slate-900 text-sm">
            1.31x <span className="text-rose-600 font-black">➔ 0.05x</span>
          </span>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-bold">多账户对打洗水导致真实收益几近归零</span>
        </div>
      </div>

      {/* 左右双图 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左图：红利 撬动 存款 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 inline-block"></span>
              <span>图表 1：红利 撬动 存款 (吸储倍数)</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 存款金额 ÷ 红利
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            两类客群充值杠杆接近（套利者为满足解锁提现门槛必须完成指定比例存款）
          </p>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={simpleComparisonData} margin={{ top: 25, right: 30, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="dimension" 
                  tick={{ fill: "#334155", fontSize: 12, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[0, 18]}
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
                  formatter={(val: any, name: any, item: any) => {
                    const row = item.payload;
                    return [
                      <div>
                        <div>红利存款杠杆: {val} 倍</div>
                        <div>统计规模: {row.entityCount}</div>
                        <div>人均领红利: {row.bonusPerEntity}</div>
                        <div className="text-slate-300 text-xs mt-1">{row.note}</div>
                      </div>,
                      "存款杠杆"
                    ];
                  }}
                />
                <Bar dataKey="depositLeverage" name="红利存款杠杆" radius={[4, 4, 0, 0]} barSize={48}>
                  <Cell fill="#10b981" />
                  <Cell fill="#f43f5e" />
                  <LabelList dataKey="depositLeverage" position="top" formatter={(val: any) => `${val}x`} style={{ fontSize: "12px", fill: "#334155", fontWeight: "black" }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 右图：红利 撬动 盈利 */}
        <div className="rounded-md p-4 bg-slate-50/40 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block"></span>
              <span>图表 2：红利 撬动 盈利 (真实造血)</span>
            </h5>
            <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded">
              杠杆 = 平台净收益 ÷ 赠金总额
            </span>
          </div>
          <p className="text-xs text-slate-400 font-bold mb-3">
            穿透后暴露核心原形：真实玩家净杠杆达 1.31x，而多账户套利者实际造血能力接近归零 (0.05x)
          </p>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={simpleComparisonData} margin={{ top: 25, right: 30, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="dimension" 
                  tick={{ fill: "#334155", fontSize: 12, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis 
                  tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="倍"
                  domain={[0, 1.6]}
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
                  formatter={(val: any, name: any, item: any) => {
                    const row = item.payload;
                    return [
                      <div>
                        <div>红利盈利杠杆: {val} 倍</div>
                        <div>统计规模: {row.entityCount}</div>
                        <div>人均领红利: {row.bonusPerEntity}</div>
                        <div className="text-slate-300 text-xs mt-1">{row.note}</div>
                      </div>,
                      "盈利杠杆"
                    ];
                  }}
                />
                <ReferenceLine y={1.0} stroke="#10b981" strokeDasharray="3 3" label={{ value: "造血生命线 1.0x", fill: "#059669", fontSize: 10, position: "insideTopRight" }} />
                <Bar dataKey="profitLeverage" name="红利盈利杠杆" radius={[4, 4, 0, 0]} barSize={48}>
                  <Cell fill="#10b981" />
                  <Cell fill="#f43f5e" />
                  <LabelList dataKey="profitLeverage" position="top" formatter={(val: any) => `${val}x`} style={{ fontSize: "12px", fill: "#0f172a", fontWeight: "black" }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
