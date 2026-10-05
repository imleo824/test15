import React from "react";
import { ResponsiveContainer, Bar, XAxis, YAxis, ComposedChart, Line } from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartMargins,
  chartSeriesColors,
} from "./chartStyles";
import {
  ReportChartCard,
  ReportChartLegend,
  ReportSectionHeader,
  ReportTableFrame
} from "../../ReportSections";

export const AuditOverviewSportsInterception: React.FC = () => {
  const renderComboLabel =
    (data: { comboLabel: string }[]) =>
    ({ x, index }: any) => (
      <g>
        <rect x={x - 48} y={6} width="96" height="26" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
        <text x={x} y={23} fill="#0f172a" fontSize={14} fontWeight={700} textAnchor="middle">
          综合 {data[index].comboLabel}
        </text>
      </g>
    );

  // Chart 1: 各系别体育拦截率趋势
  const siteSlData = [
    {
      quarter: "26年二季度",
      b_sys: 6.61,
      y_sys: 5.97,
      bw_sys: 5.89,
      comboVal: 6.50,
      comboLabel: "6.50%",
    },
    {
      quarter: "26年三季度",
      b_sys: 6.69,
      y_sys: 6.07,
      bw_sys: 6.01,
      comboVal: 6.60,
      comboLabel: "6.60%",
    },
  ];

  // Chart 2: 各场馆体育拦截率趋势
  const venueSlData = [
    {
      quarter: "26年二季度",
      im_venue: 6.24,
      title_venue: 6.59,
      panda_venue: 5.68,
      comboVal: 6.50,
      comboLabel: "6.50%",
    },
    {
      quarter: "26年三季度",
      im_venue: 6.13,
      title_venue: 6.70,
      panda_venue: 5.81,
      comboVal: 6.60,
      comboLabel: "6.60%",
    },
  ];

  const renderRateBarLabel =
    (values: number[]) =>
    ({ x, y, width, value }: any) => {
      const numericValue = Number(value);
      return (
        <text
          x={x + width / 2}
          y={y - 8}
          textAnchor="middle"
          className={getChartLabelClassName(numericValue, values)}
          {...getChartLabelStyle(numericValue, values)}
        >
          {numericValue}%
        </text>
      );
    };

  // 7组列配置
  const categoryDetailColumns = [
    { label: "批量打水" },
    { label: "打负、租卖号" },
    { label: "其他打水" },
    { label: "野鸡、协议球" },
    { label: "其他出货" },
    { label: "夹盘、卡进球" },
    { label: "其他" },
  ];

  const categoryDetailSubtotal = {
    total: "13,870.01",
    columns: ["11,573.25", "1,325.90", "139.29", "93.78", "0.49", "2.29", "735.01"],
  };

  const categoryDetailTotalPct = {
    total: "100%",
    columns: ["83.44%", "9.56%", "1.00%", "0.68%", "0.00%", "0.02%", "5.30%"],
  };

  const categoryDetailData = [
    {
      site: "1",
      col1_amt: "604.80", col1_pct: "5.23%",
      col2_amt: "71.80", col2_pct: "5.41%",
      col3_amt: "7.30", col3_pct: "5.24%",
      col4_amt: "48.00", col4_pct: "51.18%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.50", col6_pct: "21.83%",
      col7_amt: "31.52", col7_pct: "4.29%",
    },
    {
      site: "2",
      col1_amt: "464.62", col1_pct: "4.01%",
      col2_amt: "108.69", col2_pct: "8.20%",
      col3_amt: "35.00", col3_pct: "25.13%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "17.35", col7_pct: "2.36%",
    },
    {
      site: "3",
      col1_amt: "677.08", col1_pct: "5.85%",
      col2_amt: "45.55", col2_pct: "3.44%",
      col3_amt: "1.89", col3_pct: "1.35%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "21.60", col7_pct: "2.94%",
    },
    {
      site: "4",
      col1_amt: "4,279.86", col1_pct: "36.98%",
      col2_amt: "505.45", col2_pct: "38.12%",
      col3_amt: "42.62", col3_pct: "30.60%",
      col4_amt: "2.47", col4_pct: "2.63%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "431.27", col7_pct: "58.68%",
    },
    {
      site: "5",
      col1_amt: "138.52", col1_pct: "1.20%",
      col2_amt: "13.80", col2_pct: "1.04%",
      col3_amt: "0.89", col3_pct: "0.64%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "3.15", col7_pct: "0.43%",
    },
    {
      site: "7",
      col1_amt: "662.36", col1_pct: "5.72%",
      col2_amt: "106.04", col2_pct: "8.00%",
      col3_amt: "8.16", col3_pct: "5.86%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "29.10", col7_pct: "3.96%",
    },
    {
      site: "8",
      col1_amt: "1,331.86", col1_pct: "11.51%",
      col2_amt: "69.22", col2_pct: "5.22%",
      col3_amt: "0.81", col3_pct: "0.58%",
      col4_amt: "43.32", col4_pct: "46.19%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "10.81", col7_pct: "1.47%",
    },
    {
      site: "6+9",
      col1_amt: "1,355.55", col1_pct: "11.71%",
      col2_amt: "143.92", col2_pct: "10.85%",
      col3_amt: "4.45", col3_pct: "3.19%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.49", col5_pct: "100.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "84.74", col7_pct: "11.53%",
    },
    {
      site: "BD+XK",
      col1_amt: "1,022.87", col1_pct: "8.84%",
      col2_amt: "165.03", col2_pct: "12.45%",
      col3_amt: "28.59", col3_pct: "20.53%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "1.79", col6_pct: "78.17%",
      col7_amt: "71.20", col7_pct: "9.69%",
    },
    {
      site: "综合",
      col1_amt: "1,035.73", col1_pct: "8.95%",
      col2_amt: "96.41", col2_pct: "7.27%",
      col3_amt: "9.58", col3_pct: "6.88%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "34.27", col7_pct: "4.66%",
    },
  ];

  const getCategoryDetailRowTotal = (row: (typeof categoryDetailData)[number]) => {
    const sum = categoryDetailColumns.reduce((acc, _, columnIndex) => {
      const key = `col${columnIndex + 1}_amt` as keyof typeof row;
      const numStr = String(row[key]).replace(/,/g, "");
      return acc + (parseFloat(numStr) || 0);
    }, 0);
    return sum.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div id="section-audit-sports-interception" className="flex flex-col gap-6">
      {/* 模块标题 - 统一规范 */}
      <ReportSectionHeader title="2.4 体育拦截分析" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2.5">
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "体育打水为[[主要拦截类型]]，批量打水占比达到 [[83.44%]]，其次为打负/租卖号（占比 [[9.56%]]）。站点分布主要以 [[4 站、8 站、6+9 站]] 为主，三站合计约占整体 [[69%]]。"
            )}
          </p>
          <ul className="space-y-2 text-slate-700 pt-1">
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">套利手段：</strong>
                {highlightNumbers(
                  "主要通过[[盘口水位优势]]进行打水及红利套利，同时部分职业玩家集中在[[小联赛]]进行打水。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">发现方式：</strong>
                {highlightNumbers(
                  "主要通过[[提款审核]]、[[批量团体]]、[[账户关联分析]]、[[提前预警排查]]、[[三方反馈与预警群]]等渠道识别玩家套利行为。"
                )}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-sm font-normal leading-relaxed">
              <span className="w-1.5 h-1.5 bg-slate-800 shrink-0 mt-2" />
              <span>
                <strong className="text-slate-950 font-bold">处置措施：</strong>
                {highlightNumbers(
                  "针对问题玩家，依据风险程度采取[[降水]]、[[延迟处理]]、[[单笔警告]]、[[扣除本金]]或[[终止合作]]等手段。"
                )}
              </span>
            </li>
          </ul>
        </div>
      </SummaryBox>

      {/* 图表展示区 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* 图表 1: 各系别体育拦截率趋势 */}
        <ReportChartCard
          title="各系别体育拦截率趋势"
          description={highlightNumbers("三季度全盘综合体育拦截率 [[6.60%]]（二季度为 [[6.50%]]），B系（6.69%）、Y系（6.07%）与 BW（6.01%）表现平稳。")}
          legend={
            <ReportChartLegend
              items={[
                { label: "B系", color: chartSeriesColors.secondary, shape: "rect" },
                { label: "A系", color: chartSeriesColors.tertiary, shape: "rect" },
                { label: "K系", color: chartSeriesColors.primary, shape: "rect" },
                { label: "综合", color: "#0f172a", shape: "circle" },
              ]}
            />
          }
          footnote="注：左轴为各系别体育拦截率(%)，右轴为全盘综合拦截率(%)。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={siteSlData} margin={{ ...chartMargins.compact, top: 40 }} barSize={chartBarSize.grouped} barGap={14}>
              <XAxis dataKey="quarter" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis yAxisId="left" domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} tick={chartAxisTick} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" domain={[3.0, 8.0]} ticks={[3.0, 4.0, 5.0, 6.0, 7.0, 8.0]} tick={chartAxisTick} axisLine={false} tickLine={false} />
              <Bar yAxisId="left" dataKey="b_sys" fill={chartSeriesColors.secondary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(siteSlData.map((item) => item.b_sys))} />
              <Bar yAxisId="left" dataKey="y_sys" fill={chartSeriesColors.tertiary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(siteSlData.map((item) => item.y_sys))} />
              <Bar yAxisId="left" dataKey="bw_sys" fill={chartSeriesColors.primary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(siteSlData.map((item) => item.bw_sys))} />
              <Line yAxisId="right" type="monotone" dataKey="comboVal" stroke="transparent" strokeWidth={0} legendType="none" isAnimationActive={false} dot={false} activeDot={false} label={renderComboLabel(siteSlData)} />
            </ComposedChart>
          </ResponsiveContainer>
        </ReportChartCard>

        {/* 图表 2: 各场馆体育拦截率趋势 */}
        <ReportChartCard
          title="各场馆体育拦截率趋势"
          description={highlightNumbers("各场馆体育拦截率维持在 [[5.81%~6.70%]]，冠名场馆（6.70%）与 IM 场馆（6.13%）盘口防护平稳。")}
          legend={
            <ReportChartLegend
              items={[
                { label: "IM", color: chartSeriesColors.secondary, shape: "rect" },
                { label: "冠名", color: chartSeriesColors.tertiary, shape: "rect" },
                { label: "熊猫", color: chartSeriesColors.primary, shape: "rect" },
                { label: "综合", color: "#0f172a", shape: "circle" },
              ]}
            />
          }
          footnote="注：左轴为各场馆体育拦截率(%)，右轴为全盘综合拦截率(%)。"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={venueSlData} margin={{ ...chartMargins.compact, top: 40 }} barSize={chartBarSize.grouped} barGap={14}>
              <XAxis dataKey="quarter" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
              <YAxis yAxisId="left" domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} tick={chartAxisTick} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" domain={[3.0, 8.0]} ticks={[3.0, 4.0, 5.0, 6.0, 7.0, 8.0]} tick={chartAxisTick} axisLine={false} tickLine={false} />
              <Bar yAxisId="left" dataKey="im_venue" fill={chartSeriesColors.secondary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(venueSlData.map((item) => item.im_venue))} />
              <Bar yAxisId="left" dataKey="title_venue" fill={chartSeriesColors.tertiary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(venueSlData.map((item) => item.title_venue))} />
              <Bar yAxisId="left" dataKey="panda_venue" fill={chartSeriesColors.primary} radius={chartBarRadius.standard} isAnimationActive={false} label={renderRateBarLabel(venueSlData.map((item) => item.panda_venue))} />
              <Line yAxisId="right" type="monotone" dataKey="comboVal" stroke="transparent" strokeWidth={0} legendType="none" isAnimationActive={false} dot={false} activeDot={false} label={renderComboLabel(venueSlData)} />
            </ComposedChart>
          </ResponsiveContainer>
        </ReportChartCard>
      </div>

      {/* 体育拦截分类与站点明细大表 */}
      <ReportTableFrame noScroll>
        <table className="w-full report-data-table border-collapse whitespace-nowrap text-[10px] sm:text-[10.5px] lg:text-[11.5px]">
          <thead>
            <tr className="border-b border-slate-300 font-bold text-slate-900 bg-slate-100/90">
              <th rowSpan={3} className="text-left py-2 px-2 border-r border-slate-300">站点</th>
              <th rowSpan={3} className="text-right py-2 px-2 border-r border-slate-300 bg-blue-100/60 text-blue-950">合计</th>
              <th colSpan={6} className="text-center py-1 px-1.5 border-b border-r border-slate-300">体育打水</th>
              <th colSpan={4} className="text-center py-1 px-1.5 border-b border-r border-slate-300">出货</th>
              <th colSpan={2} className="text-center py-1 px-1.5 border-b border-r border-slate-300">快咨询</th>
              <th colSpan={2} className="text-center py-1 px-1.5 border-b border-slate-300">其他</th>
            </tr>
            <tr className="border-b border-slate-300 font-bold text-slate-800 text-[9.5px] sm:text-[10px] lg:text-[11px] bg-slate-50">
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">批量打水</th>
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">打负、租卖号</th>
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">其他打水</th>
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">野鸡、协议球</th>
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">其他出货</th>
              <th colSpan={2} className="text-center py-0.5 px-1 border-r border-slate-300">夹盘、卡进球</th>
              <th colSpan={2} className="text-center py-0.5 px-1">其他</th>
            </tr>
            <tr className="border-b border-slate-300 text-slate-700 font-semibold text-[9.5px] sm:text-[10px] lg:text-[10.5px] bg-slate-50/80">
              {categoryDetailColumns.flatMap((_, index) => [
                <th key={`${index}-amount`} className="text-right py-1 px-1">金额</th>,
                <th key={`${index}-pct`} className={`text-center py-1 px-1 ${index < categoryDetailColumns.length - 1 ? "border-r border-slate-300" : ""}`}>占比</th>,
              ])}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100 tabular-nums font-mono">
            {categoryDetailData.map((row, idx) => {
              const isMain = row.col1_pct && parseFloat(row.col1_pct) > 30;
              return (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-slate-50/40 hover:bg-slate-50/90"}>
                  <td className="text-left font-bold text-slate-900 py-1.5 px-2 border-r border-slate-200">{row.site}</td>
                  <td className="text-right tabular-nums font-bold text-blue-900 py-1.5 px-2 border-r border-slate-200 bg-blue-50/20">{getCategoryDetailRowTotal(row)}</td>
                  {categoryDetailColumns.flatMap((_, columnIndex) => {
                    const key = `col${columnIndex + 1}`;
                    const isCol1 = columnIndex === 0;
                    const isLastCol = columnIndex === categoryDetailColumns.length - 1;

                    return [
                      <td key={`${row.site}-${key}-amount`} className={`text-right tabular-nums py-1.5 px-1 ${isCol1 && isMain ? "font-bold text-slate-900" : "text-slate-700"}`}>{row[`${key}_amt` as keyof typeof row]}</td>,
                      <td key={`${row.site}-${key}-pct`} className={`text-center tabular-nums py-1.5 px-1 ${!isLastCol ? "border-r border-slate-200" : ""} ${isCol1 && isMain ? "font-bold text-slate-900" : "text-slate-600"}`}>{row[`${key}_pct` as keyof typeof row]}</td>,
                    ];
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2 border-slate-300 bg-slate-50 tabular-nums font-mono text-slate-900 font-bold">
            <tr className="border-b border-slate-200">
              <td className="text-left font-bold py-2 px-2 border-r border-slate-200">小计</td>
              <td className="text-right tabular-nums text-blue-900 font-bold py-2 px-2 border-r border-slate-200 bg-blue-50/30">{categoryDetailSubtotal.total}</td>
              {categoryDetailSubtotal.columns.flatMap((amount, index) => {
                const isLastCol = index === categoryDetailSubtotal.columns.length - 1;
                return [
                  <td key={`subtotal-${index}-amount`} className="text-right tabular-nums text-slate-800 py-2 px-1">{amount}</td>,
                  <td key={`subtotal-${index}-pct`} className={`text-center tabular-nums text-slate-600 py-2 px-1 ${!isLastCol ? "border-r border-slate-200" : ""}`}>100%</td>,
                ];
              })}
            </tr>
            <tr className="bg-slate-100/90 font-bold">
              <td className="text-left font-bold py-2 px-2 border-r border-slate-200">总计</td>
              <td className="text-right tabular-nums font-bold text-blue-900 py-2 px-2 border-r border-slate-200 bg-blue-100/40">{categoryDetailTotalPct.total}</td>
              {categoryDetailTotalPct.columns.map((pct, index) => {
                const isLastCol = index === categoryDetailTotalPct.columns.length - 1;
                return (
                  <td key={`total-${index}`} colSpan={2} className={`text-center tabular-nums text-slate-800 py-2 px-1 ${!isLastCol ? "border-r border-slate-200" : ""}`}>{pct}</td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </ReportTableFrame>
    </div>
  );
};
