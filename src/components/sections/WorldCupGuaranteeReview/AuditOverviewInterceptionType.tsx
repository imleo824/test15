import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportSectionHeader, ReportTableFrame } from "../../ReportSections";

export const AuditOverviewInterceptionType: React.FC = () => {
  const tableData = [
    {
      site: "1",
      q1_2026_amt: "2,369.67",
      q1_2026_pct: "7.72%",
      q2_2026_amt: "1,782.32",
      q2_2026_pct: "6.54%",
      agent_amt: "440.56",
      agent_pct: "9.73%",
      sports_amt: "904.16",
      sports_pct: "5.93%",
      bonus_amt: "148.67",
      bonus_pct: "6.71%",
      other_amt: "288.93",
      other_pct: "5.51%",
    },
    {
      site: "2",
      q1_2026_amt: "1,808.01",
      q1_2026_pct: "5.89%",
      q2_2026_amt: "1,679.40",
      q2_2026_pct: "6.17%",
      agent_amt: "387.73",
      agent_pct: "8.56%",
      sports_amt: "870.58",
      sports_pct: "5.71%",
      bonus_amt: "199.21",
      bonus_pct: "8.99%",
      other_amt: "221.88",
      other_pct: "4.23%",
    },
    {
      site: "3",
      q1_2026_amt: "1,875.98",
      q1_2026_pct: "6.11%",
      q2_2026_amt: "1,799.35",
      q2_2026_pct: "6.61%",
      agent_amt: "378.58",
      agent_pct: "8.36%",
      sports_amt: "855.99",
      sports_pct: "5.61%",
      bonus_amt: "174.95",
      bonus_pct: "7.90%",
      other_amt: "389.83",
      other_pct: "7.44%",
    },
    {
      site: "4",
      q1_2026_amt: "10,741.79",
      q1_2026_pct: "34.98%",
      q2_2026_amt: "8,990.38",
      q2_2026_pct: "33.01%",
      agent_amt: "985.99",
      agent_pct: "21.77%",
      sports_amt: "5,242.14",
      sports_pct: "34.38%",
      bonus_amt: "762.67",
      bonus_pct: "34.43%",
      other_amt: "1,999.57",
      other_pct: "38.16%",
    },
    {
      site: "5",
      q1_2026_amt: "794.42",
      q1_2026_pct: "2.59%",
      q2_2026_amt: "152.87",
      q2_2026_pct: "0.56%",
      agent_amt: "36.47",
      agent_pct: "0.81%",
      sports_amt: "79.96",
      sports_pct: "0.52%",
      bonus_amt: "11.95",
      bonus_pct: "0.54%",
      other_amt: "24.50",
      other_pct: "0.47%",
    },
    {
      site: "7",
      q1_2026_amt: "2,387.83",
      q1_2026_pct: "7.78%",
      q2_2026_amt: "2,361.69",
      q2_2026_pct: "8.67%",
      agent_amt: "439.87",
      agent_pct: "9.71%",
      sports_amt: "1,148.30",
      sports_pct: "7.53%",
      bonus_amt: "186.83",
      bonus_pct: "8.43%",
      other_amt: "586.68",
      other_pct: "11.19%",
    },
    {
      site: "8",
      q1_2026_amt: "1,581.97",
      q1_2026_pct: "5.15%",
      q2_2026_amt: "2,910.27",
      q2_2026_pct: "10.69%",
      agent_amt: "446.17",
      agent_pct: "9.85%",
      sports_amt: "2,096.51",
      sports_pct: "13.75%",
      bonus_amt: "125.67",
      bonus_pct: "5.67%",
      other_amt: "241.91",
      other_pct: "4.62%",
    },
    {
      site: "6+9",
      q1_2026_amt: "3,050.16",
      q1_2026_pct: "9.93%",
      q2_2026_amt: "2,577.88",
      q2_2026_pct: "9.47%",
      agent_amt: "533.76",
      agent_pct: "11.79%",
      sports_amt: "1,171.10",
      sports_pct: "7.68%",
      bonus_amt: "271.30",
      bonus_pct: "12.25%",
      other_amt: "601.72",
      other_pct: "11.48%",
    },
    {
      site: "BD+XK",
      q1_2026_amt: "3,492.17",
      q1_2026_pct: "11.37%",
      q2_2026_amt: "2,654.06",
      q2_2026_pct: "9.75%",
      agent_amt: "449.58",
      agent_pct: "9.93%",
      sports_amt: "1,650.99",
      sports_pct: "10.83%",
      bonus_amt: "147.05",
      bonus_pct: "6.64%",
      other_amt: "406.43",
      other_pct: "7.76%",
    },
    {
      site: "综合",
      q1_2026_amt: "2,605.10",
      q1_2026_pct: "8.48%",
      q2_2026_amt: "2,325.26",
      q2_2026_pct: "8.54%",
      agent_amt: "430.34",
      agent_pct: "9.50%",
      sports_amt: "1,228.66",
      sports_pct: "8.06%",
      bonus_amt: "187.13",
      bonus_pct: "8.45%",
      other_amt: "479.13",
      other_pct: "9.14%",
    },
  ];

  return (
    <div id="section-audit-interception-type" className="space-y-8">
      {/* 模块小标题 - 统一规范 */}
      <ReportSectionHeader title="2.1.2 类型数据" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
          {highlightNumbers(
            "[[拦截结构]]：[[体育]]为绝对主体，占比达 [[55.99%]]；其次为[[代理]]（[[16.63%]]）与[[红利]]（[[8.13%]]，以场馆首存及投注豪礼为主）。[[站点聚集]]：4站、8站、BD+XK、6+9 等头部站点合计拦截占比达 [[62.92%]]，其中[[4站单站贡献 8,990.38（占比 33.01%）]]，各品类拦截量均居全网首位，是风控的核心防御阵地。"
          )}
        </p>
      </SummaryBox>

      {/* 表格数据展示 */}
      <ReportTableFrame>
        <table className="report-dense-table report-dense-table--site-detail">
          <thead>
            <tr>
              <th rowSpan={2} className="py-2.5 px-2 text-center">站点</th>
              <th colSpan={2} className="py-2 px-2 text-center">一季度</th>
              <th colSpan={2} className="py-2 px-2 text-center">二季度</th>
              <th colSpan={2} className="py-2 px-2 text-center">代理</th>
              <th colSpan={2} className="py-2 px-2 text-center">体育</th>
              <th colSpan={2} className="py-2 px-2 text-center">红利</th>
              <th colSpan={2} className="py-2 px-2 text-center">其他</th>
            </tr>
            <tr>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
              <th className="py-2 px-2 text-center">金额</th>
              <th className="py-2 px-2 text-center">占比</th>
            </tr>
          </thead>
          <tbody className="font-mono tabular-nums">
            {tableData.map((row, idx) => {
              const isMainSports = row.sports_pct && parseFloat(row.sports_pct) > 40;
              return (
                <tr key={idx}>
                  <td className="py-2 px-2 text-center font-bold text-slate-900">{row.site}</td>
                  <td className="py-2 px-2 text-center">{row.q1_2026_amt}</td>
                  <td className="py-2 px-2 text-center">{row.q1_2026_pct}</td>
                  <td className="py-2 px-2 text-center font-bold text-slate-900">{row.q2_2026_amt}</td>
                  <td className="py-2 px-2 text-center font-bold text-slate-900">{row.q2_2026_pct}</td>
                  <td className="py-2 px-2 text-center">{row.agent_amt}</td>
                  <td className="py-2 px-2 text-center">{row.agent_pct}</td>
                  <td className={`py-2 px-2 text-center ${isMainSports ? "font-bold text-slate-900" : ""}`}>{row.sports_amt}</td>
                  <td className={`py-2 px-2 text-center ${isMainSports ? "font-bold text-slate-900" : ""}`}>{row.sports_pct}</td>
                  <td className="py-2 px-2 text-center">{row.bonus_amt}</td>
                  <td className="py-2 px-2 text-center">{row.bonus_pct}</td>
                  <td className="py-2 px-2 text-center">{row.other_amt}</td>
                  <td className="py-2 px-2 text-center">{row.other_pct}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-2.5 px-2 text-center font-bold">小计</td>
              <td className="py-2.5 px-2 text-center">-</td>
              <td className="py-2.5 px-2 text-center">-</td>
              <td className="py-2.5 px-2 text-center">-</td>
              <td className="py-2.5 px-2 text-center">-</td>
              <td className="py-2.5 px-2 text-center">4,529.04</td>
              <td className="py-2.5 px-2 text-center">100%</td>
              <td className="py-2.5 px-2 text-center font-bold">15,248.39</td>
              <td className="py-2.5 px-2 text-center font-bold">100%</td>
              <td className="py-2.5 px-2 text-center">2,215.45</td>
              <td className="py-2.5 px-2 text-center">100%</td>
              <td className="py-2.5 px-2 text-center">5,240.59</td>
              <td className="py-2.5 px-2 text-center">100%</td>
            </tr>
            <tr>
              <td className="py-2.5 px-2 text-center font-bold">总计</td>
              <td className="py-2.5 px-2 text-center font-mono">30,707.10</td>
              <td className="py-2.5 px-2 text-center font-mono">100%</td>
              <td className="py-2.5 px-2 text-center font-mono font-bold">27,233.47</td>
              <td className="py-2.5 px-2 text-center font-mono font-bold">100%</td>
              <td colSpan={2} className="py-2.5 px-2 font-mono text-center">16.63%</td>
              <td colSpan={2} className="py-2.5 px-2 font-mono text-center font-bold">55.99%</td>
              <td colSpan={2} className="py-2.5 px-2 font-mono text-center">8.13%</td>
              <td colSpan={2} className="py-2.5 px-2 font-mono text-center">19.24%</td>
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
