import React from "react";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Layers,
  ArrowRight,
  ArrowDown,
  Calculator,
  Sliders,
  ShieldCheck,
  UserCheck,
  EyeOff,
  Lock,
  Workflow,
  Sparkles,
  ShieldAlert
} from "lucide-react";
import { ReportSectionHeader, ReportDimensionCard } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

export const NewBonusModelSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <ReportSectionHeader title="7.4 套利指数模型与机制升级" />

      {/* 核心机制导语：覆盖范围与智能量化 */}
      <SummaryBox
        variant="chapter"
        title="模型机制目标：全量智能量化过检，阶梯化精细处置"
      >
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {highlightNumbers(
              "全面推行[[套利指数自动化与人工过检模型]]，覆盖全渠道红利发放场景。通过游戏输赢比、存提杠杆等多维特征[[动态计算综合风险分值]]，实现[[阶梯式精细处置与隐性打标兜底]]，彻底杜绝发奖套利漏洞。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 升级前后机制变化对比 (关键事项与能力跃迁样式) */}
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-sm sm:text-base font-bold text-slate-900">
            <span>机制模式升级与能力跃迁</span>
          </span>
          <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 border border-slate-300">
            风控红利模型升维
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          {/* 对比项 1：红利覆盖率 */}
          <ReportDimensionCard
            title="① 红利覆盖率"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                覆盖范围
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50 border border-slate-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    部分过检
                  </div>
                </div>
                <div className="text-xs text-slate-700 font-medium mt-1">
                  仅对特定部分高风险或敏感红利审计 · 存在离线漏洞
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded font-mono font-bold text-xs tracking-tight">
                  <span>100% 全量覆盖</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline text-white" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden text-white" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-blue-50/40 border border-blue-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                    100% 全渠道实时过检
                  </div>
                </div>
                <div className="text-xs text-slate-800 font-medium mt-1">
                  不论自动接口还是人工工单，全部前置进入模型打分
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 2：审核对接方式 */}
          <ReportDimensionCard
            title="② 审核对接方式"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                对接时效
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50 border border-slate-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    离线异步审核
                  </div>
                </div>
                <div className="text-xs text-slate-700 font-medium mt-1">
                  事后离线排查 · 流程长、存在资金出逃时间差
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded font-mono font-bold text-xs tracking-tight">
                  <span>实时秒级决策</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline text-white" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden text-white" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-blue-50/40 border border-blue-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                    在线实时审核
                  </div>
                </div>
                <div className="text-xs text-slate-800 font-medium mt-1">
                  发放瞬间触发套利指数模型评估，决策延迟低于1秒
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 3：审核决策机制 */}
          <ReportDimensionCard
            title="③ 审核决策机制"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                核心决策
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50 border border-slate-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    人工经验审批
                  </div>
                </div>
                <div className="text-xs text-slate-700 font-medium mt-1">
                  尺度不一，依赖主观经验判断，防线易击穿
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded font-mono font-bold text-xs tracking-tight">
                  <span>套利指数多维算法</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline text-white" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden text-white" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-blue-50/40 border border-blue-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                    系统智能审核+风控人工复核
                  </div>
                </div>
                <div className="text-xs text-slate-800 font-medium mt-1">
                  精细化判定【正常、少发、不发、多发】四阶调配
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 4：异常发放监督 */}
          <ReportDimensionCard
            title="④ 异常发放监督"
            badge={
              <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 font-mono border border-slate-300">
                兜底闭环
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50 border border-slate-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    几乎无监督
                  </div>
                </div>
                <div className="text-xs text-slate-700 font-medium mt-1">
                  手工派发绕过系统审核，结果无留痕与复核机制
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded font-mono font-bold text-xs tracking-tight">
                  <span>自动隐性打标</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline text-white" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden text-white" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-blue-50/40 border border-blue-200 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-blue-950 tracking-tight">
                    隐性打标异常兜底
                  </div>
                </div>
                <div className="text-xs text-slate-800 font-medium mt-1">
                  人工特批若与模型判定不符，自动触发隐性标记与提款严审
                </div>
              </div>
            </div>
          </ReportDimensionCard>
        </div>
      </div>

      {/* 核心 5 步骤：全链路处理流程 */}
      <div className="bg-white border border-slate-200 border-t-2 border-t-slate-900 p-4 sm:p-5 space-y-5">
        {/* 标题栏 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Workflow className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                红利风控 5 步全链路流转机制
              </h4>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                端到端全生命周期闭环管控：从入口统一纳管到提款终审狙击
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 border border-slate-200 self-start sm:self-auto">
            五阶闭环风控体系
          </span>
        </div>

        {/* 流程导航阶段指示条 (横向流转体系，强化流转因果顺序) */}
        <div className="hidden lg:grid grid-cols-5 gap-2 p-2 bg-slate-50 border border-slate-200 text-xs">
          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-slate-200">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-1.5 py-0.2 border border-slate-300">01</span>
              <span>归集接入</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-slate-200">
            <span className="font-bold text-blue-900 flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-blue-800 bg-blue-50 px-1.5 py-0.2 border border-blue-200">02</span>
              <span>算法测算</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-slate-200">
            <span className="font-bold text-amber-900 flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-1.5 py-0.2 border border-amber-200">03</span>
              <span>分级决策</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-slate-200">
            <span className="font-bold text-purple-900 flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-purple-800 bg-purple-50 px-1.5 py-0.2 border border-purple-200">04</span>
              <span>人工复核</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 bg-white border border-slate-200">
            <span className="font-bold text-rose-900 flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold text-rose-800 bg-rose-50 px-1.5 py-0.2 border border-rose-200">05</span>
              <span>闭环兜底</span>
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
          </div>
        </div>

        {/* 5 步纵深业务卡片：清晰分块、高对比度、告别灰色背景白字 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          
          {/* 阶段一：红利入口 */}
          <div className="border border-slate-200 bg-white flex flex-col justify-between">
            {/* 卡片头部 */}
            <div className="bg-slate-50 p-3.5 border-b border-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-800 bg-white px-2 py-0.5 border border-slate-300">
                  阶段一
                </span>
                <span className="text-[11px] font-bold text-slate-500">
                  前置纳管
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 pt-1 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-700 shrink-0" />
                <span>红利全渠道接入</span>
              </div>
              <p className="text-xs text-slate-500">
                统一全口径纳管，彻底杜绝脱管盲区
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                    自动发放通道
                  </span>
                  <span className="text-[10px] font-mono text-slate-700 bg-white px-1.5 py-0.5 border border-slate-200 font-bold">
                    接口直连
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed pl-3">
                  返水、升级礼金、充值优惠、活动派奖等日常高频福利
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                    手动发放通道
                  </span>
                  <span className="text-[10px] font-mono text-slate-700 bg-white px-1.5 py-0.5 border border-slate-200 font-bold">
                    工单流转
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed pl-3">
                  客服特邀、客诉补偿、人工救济与运营赠送等工单申请
                </p>
              </div>

              <div className="bg-white p-2.5 text-[11px] text-slate-700 border border-slate-200 leading-relaxed">
                <strong className="text-slate-900">管控底线：</strong>全量红利一律前置调用模型，未过模型校验一律不得直出入账。
              </div>
            </div>

            {/* 卡片底部 (高对比度清晰标签) */}
            <div className="bg-slate-50 border-t border-slate-200 p-2 text-center text-xs font-mono font-bold text-slate-800">
              全渠道纳管 · 100% 覆盖
            </div>
          </div>

          {/* 阶段二：套利指数测算 */}
          <div className="border border-blue-200 bg-white flex flex-col justify-between">
            {/* 卡片头部 */}
            <div className="bg-blue-50/70 p-3.5 border-b border-blue-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-900 bg-white px-2 py-0.5 border border-blue-300">
                  阶段二
                </span>
                <span className="text-[11px] font-bold text-blue-700">
                  算法测算
                </span>
              </div>
              <div className="text-sm font-bold text-blue-950 pt-1 flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-blue-700 shrink-0" />
                <span>套利指数实时测算</span>
              </div>
              <p className="text-xs text-blue-900/80">
                六维算法动态融合，毫秒级输出量化分
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-blue-50 border border-blue-200 text-blue-950 font-mono text-[11px] p-2 text-center font-bold tracking-tight">
                套利指数 = f(等级, 输赢, 存杠, 盈杠, 行为, 关联)
              </div>

              <div className="bg-slate-50 border border-slate-200 p-2 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">价值基线</span>
                  <span className="text-slate-600 font-mono">会员等级 / 累计盈亏</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">杠杆偏离</span>
                  <span className="text-slate-600 font-mono">存款杠杆 / 盈利造血</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">异常行为</span>
                  <span className="text-slate-600 font-mono">全包对打 / 极速洗水</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">跨站聚合</span>
                  <span className="text-slate-600 font-mono">同设备 / 同网络 / 关联穿透</span>
                </div>
              </div>

              <div className="bg-white p-2.5 text-[11px] text-slate-700 border border-slate-200 leading-relaxed">
                <strong className="text-blue-900">量化标尺：</strong>基于全局数据湖实时评分，分值越高代表套利偏离与欺诈风险越大。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-blue-50 border-t border-blue-200 p-2 text-center text-xs font-mono font-bold text-blue-900">
              量化输出：0 ~ 100 连续分值
            </div>
          </div>

          {/* 阶段三：决策输出 */}
          <div className="border border-amber-200 bg-white flex flex-col justify-between">
            {/* 卡片头部 */}
            <div className="bg-amber-50/70 p-3.5 border-b border-amber-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-900 bg-white px-2 py-0.5 border border-amber-300">
                  阶段三
                </span>
                <span className="text-[11px] font-bold text-amber-700">
                  分级裁定
                </span>
              </div>
              <div className="text-sm font-bold text-amber-950 pt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                <span>四阶动态决策机制</span>
              </div>
              <p className="text-xs text-amber-900/80">
                依据指数区间，精准触发阶梯处置动作
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-2 flex-1 text-xs">
              <div className="p-2 border border-slate-300 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                  <span className="font-bold text-slate-950 text-xs">【正常】</span>
                  <span className="text-slate-700 text-[11px]">极速放行</span>
                </div>
                <span className="font-mono text-[10px] text-slate-900 font-bold bg-white px-1.5 py-0.2 border border-slate-300">
                  0~29 分
                </span>
              </div>

              <div className="p-2 border border-amber-200 bg-amber-50/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0"></span>
                  <span className="font-bold text-amber-950 text-xs">【少发】</span>
                  <span className="text-amber-800 text-[11px]">降额压缩</span>
                </div>
                <span className="font-mono text-[10px] text-amber-900 font-bold bg-white px-1.5 py-0.2 border border-amber-200">
                  30~69 分
                </span>
              </div>

              <div className="p-2 border border-rose-200 bg-rose-50/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                  <span className="font-bold text-rose-950 text-xs">【不发】</span>
                  <span className="text-rose-800 text-[11px]">阻断拦截</span>
                </div>
                <span className="font-mono text-[10px] text-rose-900 font-bold bg-white px-1.5 py-0.2 border border-rose-200">
                  70~100 分
                </span>
              </div>

              <div className="p-2 border border-blue-200 bg-blue-50/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0"></span>
                  <span className="font-bold text-blue-950 text-xs">【多发】</span>
                  <span className="text-blue-800 text-[11px]">激励倾斜</span>
                </div>
                <span className="font-mono text-[10px] text-blue-900 font-bold bg-white px-1.5 py-0.2 border border-blue-200">
                  优质合规
                </span>
              </div>

              <div className="bg-white p-2 text-[11px] text-slate-700 border border-slate-200 leading-relaxed mt-1">
                <strong className="text-amber-900">结构优化：</strong>红利资源精准倾斜高净值真实客群，压减黑产无效成本。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-amber-50 border-t border-amber-200 p-2 text-center text-xs font-mono font-bold text-amber-900">
              四阶调配 · 精准控本提效
            </div>
          </div>

          {/* 阶段四：人工审核 */}
          <div className="border border-purple-200 bg-white flex flex-col justify-between">
            {/* 卡片头部 */}
            <div className="bg-purple-50/70 p-3.5 border-b border-purple-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-900 bg-white px-2 py-0.5 border border-purple-300">
                  阶段四
                </span>
                <span className="text-[11px] font-bold text-purple-700">
                  复核把关
                </span>
              </div>
              <div className="text-sm font-bold text-purple-950 pt-1 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-purple-700 shrink-0" />
                <span>风控复核与留痕</span>
              </div>
              <p className="text-xs text-purple-900/80">
                争议判定与特批提报实施人工二次复核
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                  介入触发条件
                </span>
                <p className="text-slate-600 text-[11px] pl-3 leading-relaxed">
                  羊毛争议区间 (30~69分) 申请原额、高等级客诉复议或超限特邀提请。
                </p>
              </div>

              <div className="bg-purple-50/50 border border-purple-200 p-2.5 space-y-1.5">
                <span className="font-bold text-purple-950 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-700 shrink-0"></span>
                  处置路径
                </span>
                <div className="text-[11px] pl-3 space-y-1 leading-relaxed">
                  <div>
                    <strong className="text-slate-900">核准/驳回：</strong>
                    <span className="text-slate-600">采纳模型意见，直接阻断不合规发放。</span>
                  </div>
                  <div>
                    <strong className="text-purple-950">强行特批：</strong>
                    <span className="text-purple-900">业务强制放行，工单留痕并触发下阶兜底。</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 text-[11px] text-slate-700 border border-slate-200 leading-relaxed">
                <strong className="text-purple-900">责任留痕：</strong>严禁无痕放行，每一笔特批均强制记录工单流水与审核人工号。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-purple-50 border-t border-purple-200 p-2 text-center text-xs font-mono font-bold text-purple-900">
              人工复核 · 权责留痕审计
            </div>
          </div>

          {/* 阶段五：违规发放隐性打标 */}
          <div className="border border-rose-200 bg-white flex flex-col justify-between">
            {/* 卡片头部 */}
            <div className="bg-rose-50/70 p-3.5 border-b border-rose-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-900 bg-white px-2 py-0.5 border border-rose-300">
                  阶段五
                </span>
                <span className="text-[11px] font-bold text-rose-700">
                  闭环兜底
                </span>
              </div>
              <div className="text-sm font-bold text-rose-950 pt-1 flex items-center gap-1.5">
                <EyeOff className="w-4 h-4 text-rose-700 shrink-0" />
                <span>违规发放隐性打标</span>
              </div>
              <p className="text-xs text-rose-900/80">
                特批放行与提款严查兜底协同闭环
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0"></span>
                  触发场景
                </span>
                <p className="text-slate-600 text-[11px] pl-3 leading-relaxed">
                  模型判定建议【少发/不发】，经人工审核强行特批放行仍出账。
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-200 p-2.5 space-y-1.5">
                <span className="font-bold text-rose-950 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-700 shrink-0"></span>
                  前/后端协同
                </span>
                <div className="text-[11px] pl-3 space-y-1 leading-relaxed">
                  <div>
                    <strong className="text-slate-900">前端策略：</strong>
                    <span className="text-slate-600">红利正常到账，不发生现场客诉碰撞。</span>
                  </div>
                  <div>
                    <strong className="text-rose-950">后端闭环：</strong>
                    <span className="text-rose-900 font-semibold">自动加注高危标签，提款加倍排查。</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 text-[11px] text-slate-700 border border-slate-200 leading-relaxed">
                <strong className="text-rose-900">兜底保障：</strong>兼顾业务前台体验与资金风控底线，杜绝任何套利出逃漏洞。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-rose-50 border-t border-rose-200 p-2 text-center text-xs font-mono font-bold text-rose-900">
              静默标记 ➔ 提款精准狙击
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewBonusModelSection;



