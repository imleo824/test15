import React from "react";
import { ReportFlow, ReportInfoGrid, ReportProcessBlock, SummaryBox, highlightNumbers, stripDisplayUnits } from "./utils";
import { BellRing, CheckCircle2, Network, Share2, ShieldAlert, Square, Tags, TrendingUp, UserCheck, Zap } from "lucide-react";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ChapterTitle, ReportBadge, ReportPanel, ReportPanelHeader, ReportStepCard, ReportStepGrid } from "../../ReportSections";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  chartAxisTick,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartBarRadius,
  chartBarSize,
  chartBarGap,
  chartLegendStyle,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

const monthlyTrendData = [
  { month: "4月", 总人工订单: 1900143, 总有标订单: 554418, 提款有标率: 29.2 },
  { month: "5月", 总人工订单: 1775260, 总有标订单: 556082, 提款有标率: 31.3 },
  { month: "6月", 总人工订单: 2545113, 总有标订单: 667227, 提款有标率: 26.2 },
];
const totalManualValues = monthlyTrendData.map((item) => item.总人工订单);
const taggedOrderValues = monthlyTrendData.map((item) => item.总有标订单);
const taggedRateValues = monthlyTrendData.map((item) => item.提款有标率);

const renderMonthlyBarLabel =
  (values: number[], formatter: (value: number) => string) =>
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
        {formatter(numericValue)}
      </text>
    );
  };

const renderMonthlyPointLabel =
  (values: number[], formatter: (value: number) => string) =>
  ({ x, y, value }: any) => {
    const numericValue = Number(value);
    return (
      <text
        x={x}
        y={y - 12}
        textAnchor="middle"
        className={getChartLabelClassName(numericValue, values)}
        {...getChartLabelStyle(numericValue, values)}
      >
        {formatter(numericValue)}
      </text>
    );
  };

export const CrossSiteTaggingGraph: React.FC = () => {
  return (
    <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 p-6 space-y-5">
      {/* 整合后的标题与机制说明模块 */}
      <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Network className="w-5 h-5 shrink-0" />
          </div>
          <div className="text-base font-black text-slate-900 tracking-tight">
            跨站点风险关联账号 · 自动同步打标图谱
          </div>
        </div>
        <div className="text-base font-bold text-slate-800 flex items-start gap-2 leading-relaxed">   
          <span>
            {highlightNumbers("中心[[账号 A（1站）]]一旦触发[[被禁用了/被扣款了/被上标了/同局下注]]等事件，系统图谱引擎自动沿[[设备号、虚拟币地址、银行卡、手机号]]等关联维度扫描，跨站点的[[账号 B、C、D、E]]将[[无须人工干预]]、[[全自动同步打上高危标签]]，[[执行效率]]提升[[几十倍]]。")}
          </span>
        </div>
      </div>

      {/* 清晰极简图谱画布 */}
      <div className="cross-site-graph-canvas">
        <svg 
          className="cross-site-graph-svg"
          viewBox="0 0 960 540" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* 清爽流线渐变 */}
            <linearGradient id="lightGlowLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            
            {/* 网格背景图案 */}
            <pattern id="lightGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>

          {/* 网格背景与轨道同心圆 */}
          <rect width="100%" height="100%" fill="url(#lightGrid)" opacity="0.5" />
          <circle cx="480" cy="270" r="230" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="480" cy="270" r="140" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />

          {/* ===== 4 条高清连接线 ===== */}
          {/* 左上: 中心(380, 220) -> 节点B(240, 110) */}
          <line x1="380" y1="220" x2="240" y2="110" stroke="url(#lightGlowLine)" strokeWidth="3" strokeDasharray="6 4" />
          
          {/* 右上: 中心(580, 220) -> 节点C(720, 110) */}
          <line x1="580" y1="220" x2="720" y2="110" stroke="url(#lightGlowLine)" strokeWidth="3" strokeDasharray="6 4" />
          
          {/* 左下: 中心(380, 320) -> 节点D(240, 430) */}
          <line x1="380" y1="320" x2="240" y2="430" stroke="url(#lightGlowLine)" strokeWidth="3" strokeDasharray="6 4" />
          
          {/* 右下: 中心(580, 320) -> 节点E(720, 430) */}
          <line x1="580" y1="320" x2="720" y2="430" stroke="url(#lightGlowLine)" strokeWidth="3" strokeDasharray="6 4" />

          {/* ===== 连线中间的关联维度标签（加宽容器、防止折行、清晰文字） ===== */}
          {/* B 连线关联 (左上) */}
          <foreignObject x="235" y="145" width="175" height="40">
            <div className="cross-site-link-chip">
              <span className="cross-site-link-icon">🔗</span>
              <span>关联：设备号</span>
            </div>
          </foreignObject>

          {/* C 连线关联 (右上) */}
          <foreignObject x="550" y="145" width="175" height="40">
            <div className="cross-site-link-chip">
              <span className="cross-site-link-icon">🔗</span>
              <span>关联：虚拟币地址</span>
            </div>
          </foreignObject>

          {/* D 连线关联 (左下) */}
          <foreignObject x="235" y="355" width="175" height="40">
            <div className="cross-site-link-chip">
              <span className="cross-site-link-icon">🔗</span>
              <span>关联：银行卡</span>
            </div>
          </foreignObject>

          {/* E 连线关联 (右下) */}
          <foreignObject x="550" y="355" width="175" height="40">
            <div className="cross-site-link-chip">
              <span className="cross-site-link-icon">🔗</span>
              <span>关联：手机号</span>
            </div>
          </foreignObject>

          {/* ===== 外围节点卡片（加宽加高，解决边框重叠与折行问题） ===== */}
          {/* 节点 B (左上: 2站) */}
          <foreignObject x="15" y="15" width="230" height="105">
            <div className="bg-blue-50/70 border border-blue-300 rounded-xl p-3 shadow-2xs space-y-2 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-blue-200/70 pb-1.5">
                <span className="text-sm font-black text-slate-900 tracking-tight shrink-0">账号 B（2站）</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded whitespace-nowrap shrink-0">
                  跨站点关联
                </span>
              </div>
              <div className="cross-site-sync-chip">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100 shrink-0" />
                  <span>自动同步打标</span>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* 节点 C (右上: 3站) */}
          <foreignObject x="715" y="15" width="230" height="105">
            <div className="bg-blue-50/70 border border-blue-300 rounded-xl p-3 shadow-2xs space-y-2 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-blue-200/70 pb-1.5">
                <span className="text-sm font-black text-slate-900 tracking-tight shrink-0">账号 C（3站）</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded whitespace-nowrap shrink-0">
                  跨站点关联
                </span>
              </div>
              <div className="cross-site-sync-chip">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100 shrink-0" />
                  <span>自动同步打标</span>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* 节点 D (左下: 4站) */}
          <foreignObject x="15" y="420" width="230" height="105">
            <div className="bg-blue-50/70 border border-blue-300 rounded-xl p-3 shadow-2xs space-y-2 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-blue-200/70 pb-1.5">
                <span className="text-sm font-black text-slate-900 tracking-tight shrink-0">账号 D（4站）</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded whitespace-nowrap shrink-0">
                  跨站点关联
                </span>
              </div>
              <div className="cross-site-sync-chip">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100 shrink-0" />
                  <span>自动同步打标</span>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* 节点 E (右下: 5站) */}
          <foreignObject x="715" y="420" width="230" height="105">
            <div className="bg-blue-50/70 border border-blue-300 rounded-xl p-3 shadow-2xs space-y-2 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-blue-200/70 pb-1.5">
                <span className="text-sm font-black text-slate-900 tracking-tight shrink-0">账号 E（5站）</span>
                <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded whitespace-nowrap shrink-0">
                  跨站点关联
                </span>
              </div>
              <div className="cross-site-sync-chip">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100 shrink-0" />
                  <span>自动同步打标</span>
                </div>
              </div>
            </div>
          </foreignObject>

          {/* ===== 中心核心节点 (账号 A) ===== */}
          <foreignObject x="380" y="190" width="200" height="160">
            <div className="bg-amber-50/95 border-2 border-amber-500 rounded-xl p-2 text-center flex flex-col justify-between h-full">
              {/* 头部：账号名称与事件计次 */}
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-1">
                <div className="text-xs font-black text-amber-950 flex items-center gap-1">
                  <UserCheck className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>账号 A（1站）</span>
                </div>
              </div>

              {/* 4 个事件独立标签样式（2x2 精致布局） */}
              <div className="grid grid-cols-2 gap-1 my-0.5">
                <div className="bg-white/95 border border-amber-300/90 text-amber-950 font-black text-xs py-0.5 px-0.5 rounded flex items-center justify-center gap-0.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                  <span>被禁用了</span>
                </div>
                <div className="bg-white/95 border border-amber-300/90 text-amber-950 font-black text-xs py-0.5 px-0.5 rounded flex items-center justify-center gap-0.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                  <span>被扣款了</span>
                </div>
                <div className="bg-white/95 border border-amber-300/90 text-amber-950 font-black text-xs py-0.5 px-0.5 rounded flex items-center justify-center gap-0.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                  <span>被上标了</span>
                </div>
                <div className="bg-white/95 border border-amber-300/90 text-amber-950 font-black text-xs py-0.5 px-0.5 rounded flex items-center justify-center gap-0.5 shadow-2xs whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                  <span>同局下注</span>
                </div>
              </div>

              {/* 底部联动提示 */}
              <div className="text-xs font-bold text-amber-900 bg-amber-100/80 rounded py-0.5 text-center border border-amber-200/90">
                跨站点扫描
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

export const FrontRiskControlSection: React.FC = () => {
  return (
    <div id="section-front-risk-control" className="report-business-section">
      {/* 4.1 FKQZ 模块主标题 */}
      <ChapterTitle>4.1 风险前置</ChapterTitle>

      {/* 3.1 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="提前发现[[异常]]，进行[[上标]]，降低[[系统风险]]，提升[[审核效率]]"
        metricLabel="提前有标率"
        currentStatus="30%"
        keyMetrics="50%+"
        progress="60%"
        estimatedTime="9月"
      />

      {/* 提款前有标率趋势图 */}
      <ReportPanel className="report-panel-stack">
        <ReportPanelHeader title="有标率监控" icon={<TrendingUp size={22} />} />

        <SummaryBox className="mb-4">
          {highlightNumbers(
            "当前[[有标率]]稳定在 [[26%]]~[[31%]]。6月赛事期间由于单量激增（[[red:+43.4%]]）叠加新客涌入，有标率出现短暂回落。"
          )}
        </SummaryBox>

        <div className="h-[380px] w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={monthlyTrendData} margin={chartMargins.standard} barSize={chartBarSize.grouped} barGap={chartBarGap.grouped}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="month" stroke={chartColors.ink} tick={chartAxisTick} />
              <YAxis 
                yAxisId="left" 
                stroke={chartColors.ink}
                tick={chartAxisTick}
                tickFormatter={(val) => `${(val / 10000).toFixed(0)}`}
                domain={[0, 4500000]}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke={chartColors.ink}
                domain={[0, 40]} 
                tick={chartAxisTick}
                tickFormatter={(val) => `${val}%`}
              />
              <Tooltip 
                contentStyle={chartTooltipStyle}
                itemStyle={chartTooltipItemStyle}
                formatter={(value: any, name: any) => {
                  if (name === "提款前有标率(%)" || name === "提款有标率(%)") {
                    return [`${value}%`, name];
                  }
                  return [stripDisplayUnits(`${Number(value).toLocaleString()} 单 (${(Number(value) / 10000).toFixed(2)})`), name];
                }}
              />
              <Legend wrapperStyle={chartLegendStyle} />
              <Bar yAxisId="left" dataKey="总人工订单" fill={chartSeriesColors.primary} name="总人工订单" radius={chartBarRadius.standard} isAnimationActive={false}>
                <LabelList 
                  dataKey="总人工订单" 
                  position="top" 
                  content={renderMonthlyBarLabel(totalManualValues, (value) => `${(value / 10000).toFixed(1)}`)}
                />
              </Bar>
              <Bar yAxisId="left" dataKey="总有标订单" fill={chartSeriesColors.secondary} name="总有标订单" radius={chartBarRadius.standard} isAnimationActive={false}>
                <LabelList 
                  dataKey="总有标订单" 
                  position="top" 
                  content={renderMonthlyBarLabel(taggedOrderValues, (value) => `${(value / 10000).toFixed(1)}`)}
                />
              </Bar>
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="提款有标率" 
                stroke={chartSeriesColors.trend}
                strokeWidth={3} 
                name="提款前有标率(%)" 
                isAnimationActive={false}
                dot={{ r: 6, fill: chartSeriesColors.trend, strokeWidth: 2, stroke: "#ffffff" }}
              >
                <LabelList 
                  dataKey="提款有标率" 
                  position="top" 
                  content={renderMonthlyPointLabel(taggedRateValues, (value) => `${value}%`)}
                />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </ReportPanel>

      {/* 风控前置核心策略 */}
      <div className="report-section-cluster">
        <div className="report-section-kicker">
          <div className="report-section-kicker-icon">
            <ShieldAlert size={18} strokeWidth={2.5} />
          </div>
          <h4>
            提升提款前有标率的 3 个核心策略：
          </h4>
        </div>
        
        <ReportStepGrid>
          <ReportStepCard index={1} title="4.1.1 系统自动预警" icon={<BellRing className="w-5 h-5" />}>
            {highlightNumbers("抽象[[多维指标]]全方位覆盖，分[[实时]]、[[时级]]、[[天级]]多时效[[前置识别]]。")}
          </ReportStepCard>
          <ReportStepCard index={2} title="4.1.2 系统自动上标" icon={<Tags className="w-5 h-5" />}>
            {highlightNumbers("监测[[核心事件]]触发，自动[[跨站扫描]]关联同局、同设备、[[高危账号]]并[[同步上标]]。")}
          </ReportStepCard>
          <ReportStepCard index={3} title="4.1.3 人工主动上标" icon={<UserCheck className="w-5 h-5" />}>
            {highlightNumbers("在[[订单低峰期]]主动排查高危前置[[打标锁定]]，释放[[高峰期审单]]瓶颈压力。")}
          </ReportStepCard>
        </ReportStepGrid>
      </div>

      {/* 核心前置流程图与三大维度架构 */}
      <div className="report-module-list">
        {/* 4.1.1 系统自动预警 */}
        <ReportProcessBlock
          id="section-4-1-1"
          title={<><BellRing className="w-5 h-5 text-slate-900 shrink-0" /><span>4.1.1 系统自动预警</span></>}
          right={<ReportBadge>轻度风险</ReportBadge>}
          flow={
            <ReportFlow
              icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
              title="上标流程"
              desc="系统预警命中后推送脱敏信息，由专人快速跟进并确认异常后完成风险上标。"
              steps={[
                { title: "预警规则", desc: "覆盖用户与游戏多维" },
                { title: "推工作群", desc: "脱敏信息通知" },
                { title: "专人跟进", desc: "15 分钟响应" },
                { title: "确认异常", desc: "→ 风险上标", strong: true },
              ]}
            />
          }
          detail={
            <ReportInfoGrid
              icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
              title={<>系统预警维度覆盖（共 <span className="text-blue-900 font-black underline decoration-2">21 项</span>）</>}
              desc="抽象为四大核心维度进行全方位覆盖，分实时、时级、天级多时效前置识别"
              items={[
                { title: "用户（盈利维度）", desc: "对用户单笔、周期等盈利 and 胜率进行异常预警监控", badge: "5项" },
                { title: "用户（账户维度）", desc: "对多账号关联设备、IP聚类及身份环境异常的预警监控", badge: "4项" },
                { title: "用户（行为维度）", desc: "对高频、算牌、偏好等异常预警监控", badge: "6项" },
                { title: "游戏（杀率维度）", desc: "对游戏、场馆的盈亏率进行异常预警监控", badge: "6项" },
              ]}
              showIndex
            />
          }
        />

        {/* 4.1.2 系统自动上标 - 优化结构，消除多层卡片嵌套 */}
        <ReportProcessBlock
          id="section-4-1-2"
          title={<><Tags className="w-5 h-5 text-slate-900 shrink-0" /><span>4.1.2 系统自动上标</span></>}
          right={<ReportBadge>重度风险</ReportBadge>}
          flow={
            <ReportFlow
              icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
              title="上标流程"
              desc="围绕关键业务事件配置上标规则，异步计算确认异常后同步风险上标。"
              steps={[
                { title: "定义触发事件", desc: "监测关键事件触发" },
                { title: "定义上标规则", desc: "基于场景定义不同规则" },
                { title: "异步执行计算", desc: "不需实时阻塞主流程" },
                { title: "确认异常", desc: "→ 风险上标", strong: true },
              ]}
            />
          }
          detail={
            <div className="space-y-4">
              <ReportInfoGrid
                icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
                title={<>自动打标事件（共 <span className="text-blue-900 font-black underline decoration-2">5 项</span>）</>}
                desc={highlightNumbers("监测[[核心业务事件]]，触发自动[[跨站扫描]]全部相关[[高危账号]]进行[[自动上标]]")}
                items={[
                  { title: "野鸡赛事", desc: "自动识别高占比的野鸡赛事的账号上标", badge: "已上线" },
                  { title: "同局关联", desc: "自动扫描并标记有同局关联的账号上标", badge: "需求时间：25年10月", status: "待开发" },
                  { title: "扣款事件", desc: "账号扣款触发跨站强关联账号同步上标", badge: "需求时间：26年03月", status: "开发中" },
                  { title: "禁用事件", desc: "账号禁用触发跨站强关联账号同步上标", badge: "需求时间：26年03月", status: "开发中" },
                  { title: "上标事件", desc: "账号上标触发跨站强关联账号同步上标", badge: "需求时间：26年03月", status: "开发中" },
                ]}
                showIndex
              />

              {/* 跨站点关联账号·自动同步上标示意图谱 */}
              <CrossSiteTaggingGraph />
            </div>
          }
        />

        {/* 4.1.3 人工主动扫描 */}
        <ReportProcessBlock
          id="section-4-1-3"
          title={<><UserCheck className="w-5 h-5 text-slate-900 shrink-0" /><span>4.1.3 人工主动上标</span></>}
          right={<ReportBadge>重度风险</ReportBadge>}
          flow={
            <ReportFlow
              icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
              title="上标流程"
              desc="人工筛选风险用户并锁定重点对象，经专人深度核查确认后完成风险上标。"
              steps={[
                { title: "风险用户筛选", desc: "批量注册、关联用户等" },
                { title: "锁定重点对象", desc: "进一步锁定高危用户" },
                { title: "专人深度核查", desc: "行为与关联交叉复核" },
                { title: "确认异常", desc: "→ 风险上标", strong: true },
              ]}
            />
          }
          detail={
            <ReportInfoGrid
              icon={<Square className="w-3.5 h-3.5 text-slate-900 fill-slate-900 shrink-0" />}
              title="常态人效提升"
              desc="在订单低峰主动完成高风险排查与前置打标，释放高峰期审单压力，大幅提升人员效率"
              items={[
                { title: "闲时主动巡检", desc: "利用用户低谷时段，常态化主动展开深度巡检" },
                { title: "前置打标锁定", desc: "提前完成标签判定与锁定，优化用户资金转移窗口期" },
                { title: "释放高峰瓶颈", desc: "大幅减轻用户高峰期的人工审核瓶颈，平滑审单量波动" },
                { title: "极速审单周转", desc: "缩短疑难及常规订单整体周转时长，提升用户体验" },
              ]}
              showIndex
            />
          }
        />
      </div>
    </div>
  );
};
