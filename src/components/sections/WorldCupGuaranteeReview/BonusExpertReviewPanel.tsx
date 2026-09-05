import React from "react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  TrendingDown, 
  Scale, 
  Binary, 
  Flame, 
  BadgePercent, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { ReportPanel, ReportTableFrame } from "../../ReportSections";

export const BonusExpertReviewPanel: React.FC = () => {
  // 1. 数学期望与洗水套现率精算模型
  const extractionExpectationData = [
    { wager: "1倍流水 (当前VIP0)", baccaratExtraction: "98.5%", sportsExtraction: "97.5%", slotsExtraction: "96.0%", riskLevel: "极高危·平台纯赠现金", verdict: "黑产对冲洗现首选" },
    { wager: "3倍流水 (常规体验金)", baccaratExtraction: "95.5%", sportsExtraction: "92.5%", slotsExtraction: "88.0%", riskLevel: "高危·阻断率极低", verdict: "对冲套利仍有巨大净利润" },
    { wager: "8倍流水 (轻度门槛)", baccaratExtraction: "88.0%", sportsExtraction: "80.0%", slotsExtraction: "68.0%", riskLevel: "中危·压制个人散户", verdict: "专业黑产仍有微利空间" },
    { wager: "15倍流水 (中高门槛)", baccaratExtraction: "77.5%", sportsExtraction: "62.5%", slotsExtraction: "40.0%", riskLevel: "强阻断·对冲磨损加大", verdict: "真实玩家正常沉淀，黑产对冲亏损" },
    { wager: "25倍流水 (高门槛防刷)", baccaratExtraction: "62.5%", sportsExtraction: "37.5%", slotsExtraction: "0.0%", riskLevel: "极高阻断·理论负期望", verdict: "黑产彻底无利可图，自然离场" },
  ];

  // 2. 跨站点对冲打水穿透合并报表沙盘模拟 (基于标准 10,000 元对冲模型)
  const consolidatedArbitrageSimulation = {
    depositA: "10,000",
    bonusA: "2,000",
    wagerReqA: "12,000 (1倍)",
    betA: "12,000 (押庄 1.95赔率)",
    resultA: "赢盘 +11,400 (本金+奖金共 23,400)",
    pnlA: "+1,400 (单站账面繁荣)",
    
    depositB: "10,000",
    bonusB: "2,000",
    wagerReqB: "12,000 (1倍)",
    betB: "12,000 (押闲 2.00赔率)",
    resultB: "输盘 0 (全损爆仓)",
    pnlB: "-10,000 (单站账面大胜)",

    consolidatedDeposit: "20,000",
    consolidatedBonus: "4,000",
    consolidatedWithdraw: "23,400",
    consolidatedLoss: "-3,400",
    commissionCost: "600 (游戏商抽水)",
    netDrainRate: "85.0% (赠金转化为黑产净现金)"
  };

  // 3. VIP 梯队 LTV/CAC 与预算再平衡精算矩阵
  const budgetRebalancingData = [
    { tier: "VIP0 (新客倒挂)", cac: "220元", m1Retention: "3.8%", ltvCac: "0.28x (严重失血)", currShare: "24.1%", targetShare: "5.5%", action: "取消无门槛直赠，推行递延解锁池" },
    { tier: "VIP1~2 (初级转化)", cac: "380元", m1Retention: "18.5%", ltvCac: "0.82x (微亏边缘)", currShare: "28.5%", targetShare: "16.0%", action: "提高次存任务联动，考核首周留存" },
    { tier: "VIP3~5 (健康骨干)", cac: "650元", m1Retention: "62.0%", ltvCac: "2.45x (高成长性)", currShare: "29.4%", targetShare: "46.5%", action: "倾斜核心预算，强化负盈利关怀礼金" },
    { tier: "VIP6~10 (高净值私享)", cac: "1,200元", m1Retention: "81.2%", ltvCac: "5.10x (极高造血)", currShare: "18.0%", targetShare: "32.0%", action: "1v1 定制返水与专享权益，锁定巨鲸" },
  ];

  return (
    <div className="space-y-8">
      {/* 专家评审题头与核心定性 */}
      <ReportPanel padding="sm" className="report-panel-stack border-l-4 border-l-indigo-600 bg-slate-50/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                七、顶级红利精算专家深度评审与资产负债诊断
              </h3>
              <p className="text-xs text-slate-500 font-bold mt-0.5">
                基于博弈论数学期望、跨站合并 P&L、LTV/CAC 单位经济学模型的权威复盘
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>精算专家独立执笔</span>
          </span>
        </div>

        {/* 专家核心定性论断 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1">
              <span>本质定性 01</span>
              <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
            </div>
            <div className="text-base font-black text-slate-900 mb-1">虚假繁荣下的净失血</div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              红利投放推升的是“通道充值与清洗流水”，而非真实博彩毛利；9个月总赠金激增 178%，红利盈利杠杆却从 1.73x 跌崩至 0.31x。
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1">
              <span>本质定性 02</span>
              <Flame className="w-3.5 h-3.5 text-rose-500" />
            </div>
            <div className="text-base font-black text-slate-900 mb-1">数学期望严重被击穿</div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              VIP0 与活动体验金仅设 1~3 倍低流水，在百家乐 1.5% 与体育 2.5% 抽水率下，黑产对冲期望套现率高达 92%~98%，等同于白送现金。
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1">
              <span>本质定性 03</span>
              <Scale className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <div className="text-base font-black text-slate-900 mb-1">各站数据孤岛被黑产利用</div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              4个独立站点单看报表皆为“大额盈利或大额流水”，但黑产利用 A站对冲 B站，集团合并报表产生 156.8 万元的直接现金净流失。
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1">
              <span>本质定性 04</span>
              <BadgePercent className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-base font-black text-slate-900 mb-1">预算资源倒挂错配</div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              将 52.6% 的高额预算倾泻在次存留存仅 3.8% 的 VIP0~VIP2 羊毛客群，却冷落了贡献 1.3x~2.2x 净利杠杆的高净值 VIP4~VIP10 骨干造血盘。
            </p>
          </div>
        </div>
      </ReportPanel>

      {/* 专家诊断一：博弈论期望模型（流水倍数 vs 抽水率穿透） */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Binary className="w-5 h-5 text-indigo-700" />
            <h4 className="text-base font-black text-slate-900">
              诊断一：数学期望模型——为什么 1~3 倍流水等于直接给黑产送钱？
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            核心公式：E(套现率) = 100% - (流水倍数 × 庄家抽水率)
          </span>
        </div>

        {/* 诊断一 一句话大白话直击 */}
        <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-lg text-xs font-bold text-rose-950 mb-4 leading-relaxed">
          ⚡ 百家乐抽水仅 1.5%、体育仅 2.5%。在当前 1~3 倍低流水下，黑产双边对冲磨损仅 2%~5%，<strong>高达 95%+ 的礼金能被无风险兑现</strong>！唯有提高到 15倍 流水或将对冲类游戏折算率降到 15%，才能让对冲磨损超过礼金，在数学上把黑产逼入负收益！
        </div>

        <ReportTableFrame>
          <table className="report-standard-table w-full text-base">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-center">
                <th className="py-3 px-4 text-left font-black text-slate-900 w-44 text-[14.5px]">考核流水倍数</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">视讯/百家乐套现率 (抽水1.5%)</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">体育对冲套现率 (抽水2.5%)</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">老虎机电子套现率 (抽水4.0%)</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">风险等级评定</th>
                <th className="py-3 px-4 text-left font-black text-slate-900 text-[14.5px]">精算审计结论</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-center font-bold text-[14.5px]">
              {extractionExpectationData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-50/50 ${
                    idx === 0 ? "bg-rose-50/50 text-rose-950 font-black" : 
                    idx === 1 ? "bg-amber-50/40 text-amber-950" : 
                    idx === 3 ? "bg-emerald-50/30" : ""
                  }`}
                >
                  <td className="py-3 px-4 text-left font-mono font-black">{row.wager}</td>
                  <td className="py-3 px-4 font-mono text-rose-600">{row.baccaratExtraction}</td>
                  <td className="py-3 px-4 font-mono text-rose-600">{row.sportsExtraction}</td>
                  <td className="py-3 px-4 font-mono text-amber-600">{row.slotsExtraction}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                      idx <= 1 ? "bg-rose-100 text-rose-700" :
                      idx === 2 ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}>
                      {row.riskLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-left text-xs text-slate-700 font-bold">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReportTableFrame>
        
        <div className="mt-3 p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-indigo-950 font-bold leading-relaxed">
          📌 <strong>精算专家刚性建议：</strong>对于极易对冲的真人视讯（百家乐/龙虎）与体育低赔赛事，禁止以 1:1 折算流水，必须引入<strong>「对冲博弈折扣因子」</strong>（如百家乐有效流水折算系数仅计 15%~20%，或直接要求 15倍 流水），使套利磨损摩擦成本（15 × 1.5% = 22.5% + 汇率提现磨损）彻底超过红利赠送幅度，黑产即刻在数学上陷入负期望！
        </div>
      </ReportPanel>

      {/* 专家诊断二：集团合并 P&L 沙盘对倒还原 */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-700" />
            <h4 className="text-base font-black text-slate-900">
              诊断二：跨站对冲打水 P&L 穿透沙盘还原（单站假繁荣 vs 集团真失血）
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
            单笔 10,000 元黑产对冲实战沙盘
          </span>
        </div>

        {/* 诊断二 一句话大白话直击 */}
        <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-lg text-xs font-bold text-rose-950 mb-4 leading-relaxed">
          ⚡ <strong>一句话大白话：</strong>A站以为自己做大了流水，B站以为自己吃光了赌客，但一穿透集团合并账目：黑产无风险净赚走 <strong>3,400 元现金</strong>，集团还要倒贴 <strong>1,000 元</strong> 的通道与服务费，<strong>净失血 4,400 元</strong>！各站数据孤岛直接成了黑产的提款机。
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* A 站单站视角 */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="font-black text-slate-900 text-sm">A 站财务报表视角</span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">赢盘站点</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between"><span className="text-slate-500 font-sans">充值存款：</span><span className="font-bold text-slate-800">10,000 元</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">赠送礼金：</span><span className="font-bold text-rose-600">+2,000 元</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">下注完成流水：</span><span className="font-bold text-slate-800">12,000 元 (达成1x)</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">投注结果：</span><span className="font-bold text-emerald-700">赢盘 +11,400 元</span></div>
              <div className="flex justify-between border-t border-slate-100 pt-1.5"><span className="text-slate-500 font-sans font-bold">最终提款：</span><span className="font-bold text-rose-600 text-sm">23,400 元</span></div>
              <div className="text-[11px] text-slate-400 font-sans mt-1">A站运营误以为“吸引了高净值大玩家，流水达标”</div>
            </div>
          </div>

          {/* B 站单站视角 */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="font-black text-slate-900 text-sm">B 站财务报表视角</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">输盘爆仓站点</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between"><span className="text-slate-500 font-sans">充值存款：</span><span className="font-bold text-slate-800">10,000 元</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">赠送礼金：</span><span className="font-bold text-rose-600">+2,000 元</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">下注完成流水：</span><span className="font-bold text-slate-800">12,000 元 (达成1x)</span></div>
              <div className="flex justify-between"><span className="text-slate-500 font-sans">投注结果：</span><span className="font-bold text-slate-500">输盘 0 元 (清空)</span></div>
              <div className="flex justify-between border-t border-slate-100 pt-1.5"><span className="text-slate-500 font-sans font-bold">单站毛利 (Win)：</span><span className="font-bold text-emerald-700 text-sm">+10,000 元</span></div>
              <div className="text-[11px] text-slate-400 font-sans mt-1">B站运营甚至误以为“活动大获成功，用户全部吃进输光”</div>
            </div>
          </div>

          {/* 集团合并财务穿透 */}
          <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-rose-200 pb-2 mb-3">
              <span className="font-black text-rose-900 text-sm">集团合并 P&L 真实现金流</span>
              <span className="text-xs font-bold text-white bg-rose-600 px-2 py-0.5 rounded">穿透核算</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between"><span className="text-slate-700 font-sans">总入金 (A+B)：</span><span className="font-bold text-slate-900">+20,000 元</span></div>
              <div className="flex justify-between"><span className="text-slate-700 font-sans">总出款 (A提走)：</span><span className="font-bold text-rose-700">-23,400 元</span></div>
              <div className="flex justify-between"><span className="text-slate-700 font-sans">通道费成本 (2%)：</span><span className="font-bold text-slate-800">-400 元</span></div>
              <div className="flex justify-between"><span className="text-slate-700 font-sans">游戏商服务费抽成：</span><span className="font-bold text-slate-800">-600 元</span></div>
              <div className="flex justify-between border-t border-rose-200 pt-1.5"><span className="text-rose-950 font-sans font-black">集团净资损现金流：</span><span className="font-black text-rose-600 text-sm">-4,400 元</span></div>
              <div className="text-[11px] text-rose-800 font-sans font-bold mt-1">🚨 结论：黑产净赚 3,400 元现金，集团为两边的礼金和通道费纯买单！</div>
            </div>
          </div>
        </div>
      </ReportPanel>

      {/* 专家诊断三：LTV/CAC 资产负债诊断与橄榄型预算重构 */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <BadgePercent className="w-5 h-5 text-indigo-700" />
            <h4 className="text-base font-black text-slate-900">
              诊断三：单位经济学（LTV/CAC）资产负债与“橄榄型”预算再平衡矩阵
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            从“漏斗哑铃型”向“橄榄型”重构
          </span>
        </div>

        {/* 诊断三 一句话大白话直击 */}
        <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-950 mb-4 leading-relaxed">
          ⚡ <strong>一句话大白话：</strong>把 52.6% 的巨额预算砸在留存率仅 3.8% 的 VIP0 羊毛客身上纯属烧钱（LTV/CAC 倒挂仅 0.28x）。<strong>立刻把 VIP0 预算从 24.1% 削至 5.5%</strong>，全部转移给次月留存达 62%~81%、贡献 2.45x~5.10x 造血产出的 VIP3~VIP10 骨干与巨鲸！
        </div>

        <ReportTableFrame>
          <table className="report-standard-table w-full text-base">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-center">
                <th className="py-3 px-4 text-left font-black text-slate-900 w-36 text-[14.5px]">VIP 梯队分类</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">单客获客成本 (CAC)</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">次月留存率 (M1 Retention)</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">LTV / CAC 比率</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">当前红利预算占比</th>
                <th className="py-3 px-4 font-black text-slate-900 text-[14.5px]">专家建议预算占比</th>
                <th className="py-3 px-4 text-left font-black text-slate-900 text-[14.5px]">刚性运营重构指令</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-center font-bold text-[14.5px]">
              {budgetRebalancingData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-50/50 ${
                    idx === 0 ? "bg-rose-50/40 text-rose-950 font-black" : 
                    idx >= 2 ? "bg-emerald-50/30" : ""
                  }`}
                >
                  <td className="py-3 px-4 text-left font-black">{row.tier}</td>
                  <td className="py-3 px-4 font-mono text-slate-700">{row.cac}</td>
                  <td className={`py-3 px-4 font-mono ${idx === 0 ? "text-rose-600 font-black" : "text-slate-800"}`}>{row.m1Retention}</td>
                  <td className={`py-3 px-4 font-mono font-black ${idx === 0 ? "text-rose-600" : "text-emerald-600"}`}>{row.ltvCac}</td>
                  <td className="py-3 px-4 font-mono text-slate-500">{row.currShare}</td>
                  <td className="py-3 px-4 font-mono text-indigo-700 font-black">
                    <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      {row.targetShare}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-left text-xs text-slate-700 font-bold">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ReportTableFrame>
      </ReportPanel>

      {/* 专家诊断四：四大刚性执纪法案 (Playbook) */}
      <ReportPanel padding="sm" className="report-panel-stack">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h4 className="text-base font-black text-slate-900">
            诊断四：红利精算专家 4 项不可逆落地执纪法案（Airtight Execution Playbook）
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 bg-white rounded-xl border border-slate-200 flex gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0 text-sm">
              I
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-sm font-black text-slate-900">非对称游戏贡献率机制（Asymmetric Weighting）</h5>
                <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">从根源破除套利期望</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">
                百家乐、龙虎等 1:1 双面盘流水有效折算率直接降为 <strong>15%</strong>；体育单注赔率低于 <strong>1.65</strong>（欧洲盘）或 <strong>0.65</strong>（香港盘）完全不计入流水。从数学底层迫使对冲黑产承担巨大摩擦成本，使其期望收益为负。
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 flex gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0 text-sm">
              II
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-sm font-black text-slate-900">废止直接赠金，推行“递延解锁池”（Vesting Pool）</h5>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">VIP0 绝不可提现金</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">
                新客首存礼金绝不能直接作为余额下注。所有赠金进入「锁定解锁池」，每产生 100 元有效流水，释放 3 元现金至主钱包，分 7 天线性释放。黑产快进快出对冲套现逻辑被物理切断，唯有真实留存玩家可自然获得。
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 flex gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0 text-sm">
              III
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-sm font-black text-slate-900">集团级 One-ID 与毫秒级跨站风控总线</h5>
                <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">打碎各站点信息孤岛</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">
                打通集团 4 大站点的设备指纹、USDT链上热钱包哈希、提款姓名拼音与 IP C段。任何账号在 A 站领取首存，其他 3 站自动拉黑“新客礼金权益”，只允许平转为常规用户，彻底封死“一人多站反复首存”的漏洞。
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 flex gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0 text-sm">
              IV
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-sm font-black text-slate-900">考核指标强力切换：True NGR 与净利杠杆一票否决制</h5>
                <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">严惩唯流水虚假繁荣</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">
                各站点运营与代理团队的绩效与提成，彻底废除“存款总额/毛流水”，100% 绑定 <strong>True NGR = GGR - 红利 - 返水 - 存提通道费 - 跨站资损</strong>。设立红利盈利杠杆 &lt; 0.80x 的一票否决权，严厉杜绝运营为冲 KPI 联合黑产放水。
              </p>
            </div>
          </div>
        </div>
      </ReportPanel>
    </div>
  );
};
