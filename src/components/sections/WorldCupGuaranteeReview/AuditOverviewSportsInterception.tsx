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
  ReportPanel,
  ReportSectionHeader,
  ReportTableFrame
} from "../../ReportSections";

export const AuditOverviewSportsInterception: React.FC = () => {
  const renderComboLabel =
    (data: { comboLabel: string }[]) =>
    ({ x, index }: any) => (
      <g>
        <rect x={x - 42} y={8} width="84" height="24" rx="3" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
        <text x={x} y={24} fill="#0f172a" fontSize={12.5} fontWeight={700} textAnchor="middle">
          综合 {data[index].comboLabel}
        </text>
      </g>
    );

  // Chart 1
  const siteSlData = [
    {
      quarter: "26年一季度",
      b_sys: 6.63,
      y_sys: 5.78,
      bw_sys: 5.39,
      comboVal: 6.45,
      comboLabel: "6.45%",
    },
    {
      quarter: "26年二季度",
      b_sys: 6.61,
      y_sys: 5.97,
      bw_sys: 5.89,
      comboVal: 6.50,
      comboLabel: "6.50%",
    },
  ];

  // Chart 2
  const venueSlData = [
    {
      quarter: "26年一季度",
      im_venue: 6.11,
      title_venue: 6.57,
      panda_venue: 5.42,
      comboVal: 6.45,
      comboLabel: "6.45%",
    },
    {
      quarter: "26年二季度",
      im_venue: 6.24,
      title_venue: 6.59,
      panda_venue: 5.68,
      comboVal: 6.50,
      comboLabel: "6.50%",
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

  // 4组明细表格数据
  const venueTables = [
    {
      name: "重点场馆",
      rows: [
        { quarter: "26年一季度", b: "6.22%", y: "5.69%", bw: "5.49%", total: "6.11%" },
        { quarter: "26年二季度", b: "6.22%", y: "6.34%", bw: "6.32%", total: "6.24%" },
        { quarter: "上个季度对比", b: "0.00%", y: "0.65%", bw: "0.84%", total: "0.13%", isDiff: true },
      ],
    },
    {
      name: "冠名 场馆",
      rows: [
        { quarter: "26年一季度", b: "6.74%", y: "5.91%", bw: "5.33%", total: "6.57%" },
        { quarter: "26年二季度", b: "6.70%", y: "6.00%", bw: "5.92%", total: "6.59%" },
        { quarter: "上个季度对比", b: "-0.04%", y: "0.08%", bw: "0.59%", total: "0.02%", isDiff: true },
      ],
    },
    {
      name: "熊猫 场馆",
      rows: [
        { quarter: "26年一季度", b: "5.63%", y: "4.00%", bw: "5.78%", total: "5.42%" },
        { quarter: "26年二季度", b: "5.84%", y: "4.67%", bw: "5.14%", total: "5.68%" },
        { quarter: "上个季度对比", b: "0.21%", y: "0.66%", bw: "-0.65%", total: "0.26%", isDiff: true },
      ],
    },
    {
      name: "整体季度",
      rows: [
        { quarter: "26年一季度", b: "6.63%", y: "5.78%", bw: "5.39%", total: "6.45%" },
        { quarter: "26年二季度", b: "6.61%", y: "5.97%", bw: "5.89%", total: "6.50%" },
        { quarter: "上个季度对比", b: "-0.02%", y: "0.19%", bw: "0.50%", total: "0.05%", isDiff: true },
      ],
    },
  ];

  // 体育拦截细分类别数据
  const categoryDetailColumns = [
    { label: "体育打水" },
    { label: "批量打水" },
    { label: <>打负、租卖号<br />其他打水</> },
    { label: "出货" },
    { label: <>野鸡、协议球<br />其他出货</> },
    { label: "夹盘、卡进球" },
    { label: "其他" },
  ];

  const categoryDetailSubtotal = {
    total: "15248.39",
    columns: ["10827.21", "1730.97", "272.41", "1379.37", "13.14", "54.91", "970.38"],
  };

  const categoryDetailTotalPct = {
    total: "100%",
    columns: ["71.01%", "11.35%", "1.79%", "9.05%", "0.09%", "0.36%", "6.36%"],
  };

  const categoryDetailData = [
    {
      site: "1",
      col1_amt: "688.81", col1_pct: "6.36%",
      col2_amt: "158.59", col2_pct: "9.16%",
      col3_amt: "13.47", col3_pct: "4.95%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "21.85", col6_pct: "39.80%",
      col7_amt: "21.43", col7_pct: "2.21%",
    },
    {
      site: "2",
      col1_amt: "553.49", col1_pct: "5.11%",
      col2_amt: "227.17", col2_pct: "13.12%",
      col3_amt: "54.82", col3_pct: "20.12%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "35.09", col7_pct: "3.62%",
    },
    {
      site: "3",
      col1_amt: "720.82", col1_pct: "6.66%",
      col2_amt: "93.62", col2_pct: "5.41%",
      col3_amt: "9.82", col3_pct: "3.61%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "4.04", col6_pct: "7.35%",
      col7_amt: "27.69", col7_pct: "2.85%",
    },
    {
      site: "4",
      col1_amt: "4065.38", col1_pct: "37.55%",
      col2_amt: "408.81", col2_pct: "23.62%",
      col3_amt: "90.49", col3_pct: "33.22%",
      col4_amt: "19.48", col4_pct: "1.41%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "27.70", col6_pct: "50.44%",
      col7_amt: "630.30", col7_pct: "64.95%",
    },
    {
      site: "5",
      col1_amt: "59.23", col1_pct: "0.55%",
      col2_amt: "17.80", col2_pct: "1.03%",
      col3_amt: "0.00", col3_pct: "0.00%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "2.93", col7_pct: "0.30%",
    },
    {
      site: "7",
      col1_amt: "881.27", col1_pct: "8.14%",
      col2_amt: "208.96", col2_pct: "12.07%",
      col3_amt: "17.57", col3_pct: "6.45%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "1.32", col6_pct: "2.41%",
      col7_amt: "39.18", col7_pct: "4.04%",
    },
    {
      site: "8",
      col1_amt: "597.45", col1_pct: "5.52%",
      col2_amt: "120.85", col2_pct: "6.98%",
      col3_amt: "0.27", col3_pct: "0.10%",
      col4_amt: "1359.90", col4_pct: "98.59%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "18.05", col7_pct: "1.86%",
    },
    {
      site: "6+9",
      col1_amt: "860.47", col1_pct: "7.95%",
      col2_amt: "189.38", col2_pct: "10.94%",
      col3_amt: "14.29", col3_pct: "5.25%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "6.61", col5_pct: "50.31%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "100.34", col7_pct: "10.34%",
    },
    {
      site: "BD+XK",
      col1_amt: "1379.24", col1_pct: "12.74%",
      col2_amt: "158.94", col2_pct: "9.18%",
      col3_amt: "55.03", col3_pct: "20.20%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "6.53", col5_pct: "49.69%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "51.26", col7_pct: "5.28%",
    },
    {
      site: "综合",
      col1_amt: "1021.05", col1_pct: "9.43%",
      col2_amt: "146.85", col2_pct: "8.48%",
      col3_amt: "16.65", col3_pct: "6.11%",
      col4_amt: "0.00", col4_pct: "0.00%",
      col5_amt: "0.00", col5_pct: "0.00%",
      col6_amt: "0.00", col6_pct: "0.00%",
      col7_amt: "44.11", col7_pct: "4.55%",
    },
  ];

  const getCategoryDetailRowTotal = (row: (typeof categoryDetailData)[number]) =>
    categoryDetailColumns
      .reduce((sum, _, columnIndex) => {
        const key = `col${columnIndex + 1}_amt` as keyof typeof row;
        return sum + Number(row[key]);
      }, 0)
      .toFixed(2);

  return (
    <div id="section-audit-sports-interception" className="space-y-6">
      {/* 模块小标题 - 统一规范 */}
      <ReportSectionHeader title="2.1.4 体育数据" />

      {/* 统一总结模块 */}
      <SummaryBox>
        <p className="text-base text-slate-900 font-bold leading-relaxed mb-3">
          {highlightNumbers(
            "[[体育总计]] [[15248.39]]，其中[[体育打水]]为主体，金额 [[10827.21]]、占比 [[71.01%]]；其次为[[批量打水]] [[1730.97]]、占比 [[11.35%]]，[[出货]] [[1379.37]]、占比 [[9.05%]]。站点分布中[[4站]]合计金额最集中，合计 [[5242.16]]；其中[[体育打水]] [[4065.38]]、该类占比 [[37.55%]]，[[其他类]] [[630.30]]、该类占比 [[64.95%]]。",
          )}
        </p>
        <ul className="mt-4 space-y-2.5 text-slate-700">
          <li className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[推动盘口协同]]：深化[[商户操盘协同机制]]，推动[[赔率联动]]覆盖 [[90%]] 以上进球类玩法，在保障用户体验的同时锁定合理[[盈利率]]。",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[会员端风控闭环]]：落地标准化流程，包含[[系统预警]]（专人 [[15分钟]] 内跟进异常）、[[系统初审]]（自动标记分流）、[[智能分单]]（[[专项派发至 34人体育组]]）及[[工具复审]]（利用跨站排查、关联分析复核）。实现高危订单的[[精准拦截]]与[[分级处置]]（警告、降水、扣除及终止）。",
              )}
            </span>
          </li>
        </ul>
      </SummaryBox>

      {/* 图表展示区 - 统一结构规范：标题 + 说明 + 图例 + 图表 + 口径 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 图表 1: 各系别体育拦截率趋势 */}
        <ReportChartCard
          title="各系别体育拦截率趋势"
          subtitle="一季度与二季度走势对比"
          description="各系别体育拦截率呈现结构性分化，其中B系与BW系在二季度明显加大风控拦截力度，推动全盘综合拦截率稳步攀升。"
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
          subtitle="两季度场馆盘口监控对比"
          description="熊猫场馆在二季度拦截率达 6.95% 居于首位；冠名与重点场馆维持在 4.5%~5.5% 常态化监控水平，盘口风控协同成效显著。"
          legend={
            <ReportChartLegend
              items={[
                { label: "重点场馆", color: chartSeriesColors.secondary, shape: "rect" },
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
      <ReportPanel padding="none" className="overflow-hidden space-y-3">
        <ReportTableFrame>
          <table className="report-dense-table report-dense-table--sports-detail">
            <thead className="bg-slate-50 text-slate-800">
              <tr className="border-b border-slate-200 font-bold text-slate-900">
                <th rowSpan={2} className="w-[74px] text-center border-r border-slate-200 py-2">站点</th>
                <th rowSpan={2} className="w-[82px] text-center border-r border-slate-200 py-2">合计</th>
                {categoryDetailColumns.map((column, index) => (
                  <th
                    key={index}
                    colSpan={2}
                    className={`text-center py-2 ${index < categoryDetailColumns.length - 1 ? "border-r border-slate-200" : ""}`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
              <tr className="border-b-2 border-slate-900 text-slate-700 font-bold text-xs">
                {categoryDetailColumns.flatMap((_, index) => [
                  <th key={`${index}-amount`} className="text-center py-1.5">金额</th>,
                  <th key={`${index}-pct`} className={`text-center py-1.5 ${index < categoryDetailColumns.length - 1 ? "border-r border-slate-200" : ""}`}>占比</th>,
                ])}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 font-mono tabular-nums text-xs">
              {categoryDetailData.map((row, idx) => {
                return (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="text-center font-bold text-slate-900 border-r border-slate-200 py-2">{row.site}</td>
                    <td className="text-center tabular-nums font-bold text-blue-900 border-r border-slate-200 py-2">{getCategoryDetailRowTotal(row)}</td>
                    {categoryDetailColumns.flatMap((_, columnIndex) => {
                      const key = `col${columnIndex + 1}`;
                      const isLast = columnIndex === categoryDetailColumns.length - 1;

                      return [
                        <td key={`${row.site}-${key}-amount`} className="text-center tabular-nums text-slate-700 py-2">{row[`${key}_amt` as keyof typeof row]}</td>,
                        <td key={`${row.site}-${key}-pct`} className={`text-center tabular-nums text-slate-700 py-2 ${!isLast ? "border-r border-slate-200" : ""}`}>{row[`${key}_pct` as keyof typeof row]}</td>,
                      ];
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t-2 border-b-2 border-slate-900 bg-slate-50 font-mono tabular-nums text-xs text-slate-900 font-bold">
              <tr className="border-b border-slate-200">
                <td className="text-center font-bold border-r border-slate-200 py-2.5">小计</td>
                <td className="text-center tabular-nums text-blue-900 font-bold border-r border-slate-200 py-2.5">{categoryDetailSubtotal.total}</td>
                {categoryDetailSubtotal.columns.flatMap((amount, index) => {
                  const isLast = index === categoryDetailSubtotal.columns.length - 1;
                  return [
                    <td key={`subtotal-${index}-amount`} className="text-center tabular-nums text-slate-800 py-2.5">{amount}</td>,
                    <td key={`subtotal-${index}-pct`} className={`text-center tabular-nums text-slate-700 py-2.5 ${!isLast ? "border-r border-slate-200" : ""}`}>100%</td>,
                  ];
                })}
              </tr>
              <tr className="bg-slate-100 font-bold">
                <td className="text-center font-bold border-r border-slate-200 py-2.5">总计</td>
                <td className="text-center tabular-nums font-bold text-blue-900 border-r border-slate-200 py-2.5">{categoryDetailTotalPct.total}</td>
                {categoryDetailTotalPct.columns.map((pct, index) => {
                  const isLast = index === categoryDetailTotalPct.columns.length - 1;
                  return (
                    <td key={`total-${index}`} colSpan={2} className={`text-center tabular-nums text-slate-800 py-2.5 ${!isLast ? "border-r border-slate-200" : ""}`}>{pct}</td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </ReportTableFrame>
      </ReportPanel>
    </div>
  );
};
