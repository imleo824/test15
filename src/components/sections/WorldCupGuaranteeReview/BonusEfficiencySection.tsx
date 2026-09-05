import React from "react";
import { 
  Calculator, 
  Gem, 
  Network,
  BarChart3,
} from "lucide-react";
import { ReportPanel, ReportTableFrame } from "../../ReportSections";
import { BonusMacroTrendChart } from "./BonusMacroTrendChart";
import { BonusVipSpectrumChart } from "./BonusVipSpectrumChart";
import { BonusCrossSiteChart } from "./BonusCrossSiteChart";

export const BonusEfficiencySection: React.FC = () => {
  // 一、核心指标口径与定义说明
  const metricFormulas = [
    {
      name: "净收益率",
      formula: "(平台游戏输赢 - 红利 - 返水) ÷ 存款金额",
      desc: "衡量充值转化为平台净收益的最终沉淀比例（扣除红利与返水后）",
      benchmark: "全周期均值 6.00%（普通客群 7.25%，风控客群 0.18%）"
    },
    {
      name: "红利存款杠杆",
      formula: "存款金额 ÷ 红利",
      desc: "衡量纯红利支出对玩家充值存款金额的撬动倍数（去除返水口径）",
      benchmark: "全周期均值 18.50倍（普通客群 19.80倍，风控客群 14.50倍）"
    },
    {
      name: "红利盈利杠杆",
      formula: "(平台游戏输赢 - 红利 - 返水) ÷ (红利 + 返水)",
      desc: "衡量赠金总支出转化为平台净利润的实际倍数",
      benchmark: "全周期均值 0.80倍（普通客群 0.94倍，风控客群 0.15倍）"
    }
  ];

  return (
    <div id="section-bonus-efficiency" className="report-business-section space-y-8">
      {/* 一、核心指标口径与行业参考基准 */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
          <Calculator className="w-5 h-5 text-slate-900" />
          <h3 className="text-lg font-black text-slate-900">一、指标口径</h3>
        </div>

        <ReportTableFrame>
          <table className="report-standard-table w-full text-base">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3.5 px-4 text-left font-black text-slate-900 w-48 text-[15px]">指标名称</th>
                <th className="py-3.5 px-4 text-left font-black text-slate-900 text-[15px]">计算公式</th>
                <th className="py-3.5 px-4 text-left font-black text-slate-900 w-72 text-[15px]">统计参考基准</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {metricFormulas.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/40">
                  <td className="py-4 px-4 font-black text-slate-900 text-[15px] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-800 shrink-0"></span>
                    <span>{m.name}</span>
                  </td>
                  <td className="py-4 px-4 font-mono text-[14px] font-bold text-slate-800">
                    <div className="bg-slate-50 px-3 py-1.5 rounded inline-block">
                      {m.formula}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-sans font-medium">{m.desc}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100/80 text-slate-800">
                      {m.benchmark}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReportTableFrame>
      </ReportPanel>

      {/* 维度一可视化：大盘投放与杠杆双轴趋势 */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
          <BarChart3 className="w-5 h-5 text-slate-900" />
          <h3 className="text-lg font-black text-slate-900">红利杠杠</h3>
        </div>
        <BonusMacroTrendChart />
      </ReportPanel>

      {/* 二、VIP 0 ~ VIP 10 全等级能效对比 */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-indigo-700" />
            <h3 className="text-lg font-black text-slate-900">二、等级对比</h3>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            VIP 梯度能效透视
          </span>
        </div>

        {/* VIP 0 ~ VIP 10 双图可视化 */}
        <BonusVipSpectrumChart />
      </ReportPanel>

      {/* 三、多站点“多面人”跨站套利数据模型透视（表格 + 可视化） */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-indigo-700" />
            <h3 className="text-lg font-black text-slate-900">三、多账户</h3>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            唯一 ID (手机号/设备指纹/USDT链上归集) 穿透
          </span>
        </div>

        {/* 维度三可视化：账户维度 vs 真实单人合并维度 双图对比 */}
        <div>
          <BonusCrossSiteChart />
        </div>
        
        <div className="mt-4 bg-slate-50/80 border-l-3 border-l-slate-800 rounded-r-md p-3.5 text-xs text-slate-700 font-medium leading-relaxed">
          <span className="text-slate-900 font-bold">💡 跨站模型穿透审计结论：</span> 
          按名义账户看，存款杠杆（14.17x）与盈利杠杆（0.50x）掩盖了套利侵蚀；一旦通过手机号/唯一ID穿透合并，真相立即显现——占人头 <strong>80%</strong> 的多账户群体单人多领了 <strong>3.5倍</strong> 的赠金，但由于跨站对冲洗水，其实际盈利杠杆从健康用户的 <strong>1.31倍</strong> 暴跌至 <strong>0.05倍</strong>，是红利预算被大量无效消耗的核心根源。
        </div>
      </ReportPanel>
    </div>
  );
};
