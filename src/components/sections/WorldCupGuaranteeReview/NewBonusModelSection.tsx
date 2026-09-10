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
  Lock
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
      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-700" />
            <span>机制模式升级与能力跃迁</span>
          </span>
          <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 border border-emerald-200">
            风控红利模型升维
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          {/* 对比项 1：红利覆盖率 */}
          <ReportDimensionCard
            title="① 红利覆盖率"
            badge={
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 font-mono border border-slate-200">
                覆盖范围
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50/90 border border-slate-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    部分过检
                  </div>
                </div>
                <div className="text-xs text-slate-700 mt-1">
                  仅对特定部分高风险或敏感红利审计
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-700 text-white font-mono font-bold text-xs shadow-xs tracking-tight">
                  <span>100% 全量覆盖</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-emerald-50/80 border border-emerald-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight">
                    100% 全渠道实时过检
                  </div>
                </div>
                <div className="text-xs text-emerald-900 font-medium mt-1">
                  不论自动接口还是人工工单，全部进模型打分
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 2：审核对接方式 */}
          <ReportDimensionCard
            title="② 审核对接方式"
            badge={
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 font-mono border border-slate-200">
                对接时效
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50/90 border border-slate-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    离线异步审核
                  </div>
                </div>
                <div className="text-xs text-slate-700 mt-1">
                  事后离线排查 · 流程长、存在时间差漏洞
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-700 text-white font-mono font-bold text-xs shadow-xs tracking-tight">
                  <span>实时秒级决策</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-emerald-50/80 border border-emerald-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight">
                    在线实时审核
                  </div>
                </div>
                <div className="text-xs text-emerald-900 font-medium mt-1">
                  发放瞬间触发套利指数模型评估，决策延迟低于1秒
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 3：审核决策机制 */}
          <ReportDimensionCard
            title="③ 审核决策机制"
            badge={
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 font-mono border border-slate-200">
                核心决策
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50/90 border border-slate-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    人工经验审批
                  </div>
                </div>
                <div className="text-xs text-slate-700 mt-1">
                  尺度不一，依赖主观经验判断，防线易击穿
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-700 text-white font-mono font-bold text-xs shadow-xs tracking-tight">
                  <span>套利指数多维算法</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-emerald-50/80 border border-emerald-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight">
                    系统智能审核+风控人工复核
                  </div>
                </div>
                <div className="text-xs text-emerald-900 font-medium mt-1">
                  精细化判定【正常、少发、不发、多发】
                </div>
              </div>
            </div>
          </ReportDimensionCard>

          {/* 对比项 4：异常发放监督 */}
          <ReportDimensionCard
            title="④ 异常发放监督"
            badge={
              <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 font-mono border border-slate-200">
                兜底闭环
              </span>
            }
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* 原来 */}
              <div className="flex-1 bg-slate-50/90 border border-slate-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    原来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    几乎无监督
                  </div>
                </div>
                <div className="text-xs text-slate-700 mt-1">
                  手工派发绕过系统审核，结果无留痕与复核机制
                </div>
              </div>

              {/* 中间跃迁枢纽 */}
              <div className="shrink-0 flex items-center justify-center py-0.5 sm:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-700 text-white font-mono font-bold text-xs shadow-xs tracking-tight">
                  <span>自动隐性打标</span>
                  <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
                  <ArrowDown className="w-3.5 h-3.5 sm:hidden" />
                </div>
              </div>

              {/* 将来 */}
              <div className="flex-1 bg-emerald-50/80 border border-emerald-300 p-3 sm:p-3.5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    将来
                  </span>
                  <div className="text-base sm:text-lg font-bold text-emerald-950 tracking-tight">
                    隐性打标异常兜底
                  </div>
                </div>
                <div className="text-xs text-emerald-900 font-medium mt-1">
                  人工发放若与模型判定不符，自动触发隐性标记与强审计
                </div>
              </div>
            </div>
          </ReportDimensionCard>
        </div>
      </div>

      {/* 核心 5 步骤：全链路处理流程 */}
      <div className="border border-slate-300 bg-slate-50/60 p-4 sm:p-5 space-y-4">
        {/* 标题栏 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-300 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                红利风控 5 步处理链路
              </h4>
              <p className="text-[11px] text-slate-700 font-medium mt-0.5">
                端到端全生命周期闭环管控：从入口统一纳管到提款终审狙击
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-900 bg-white px-3 py-1 border border-slate-300 self-start sm:self-auto shadow-2xs">
            全流程五阶闭环风控流转
          </span>
        </div>

        {/* 5 步纵深业务卡片：高区隔度与清晰边界 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 items-stretch pt-1">
          
          {/* STEP 1：红利入口 */}
          <div className="border-2 border-slate-400 bg-white flex flex-col justify-between shadow-2xs">
            {/* 卡片头部 */}
            <div className="bg-slate-100 p-3.5 border-b-2 border-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-slate-900 text-white font-mono font-bold text-xs rounded-xs">
                  01
                </span>
                <span className="text-xs font-bold text-slate-900">
                  归集接入
                </span>
              </div>
              <div className="text-sm font-bold text-slate-900 pt-0.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-800 shrink-0" />
                <span>红利全渠道接入</span>
              </div>
              <p className="text-[11px] text-slate-700 font-medium">
                统一全口径纳管，彻底杜绝脱管免审盲区
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1.5 rounded-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0"></span>
                    自动发放通道
                  </span>
                  <span className="text-[10px] font-mono text-slate-900 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    API 接口
                  </span>
                </div>
                <p className="text-slate-800 text-[11px] leading-relaxed pl-3.5">
                  返水、升级礼金、充值优惠、活动派奖等日常高频自动化福利
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1.5 rounded-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0"></span>
                    手动发放通道
                  </span>
                  <span className="text-[10px] font-mono text-slate-900 bg-white px-1.5 py-0.5 border border-slate-300 font-bold">
                    工单审批
                  </span>
                </div>
                <p className="text-slate-800 text-[11px] leading-relaxed pl-3.5">
                  客服特邀、客诉补偿、人工救济与运营特殊赠送等人工提报
                </p>
              </div>

              <div className="bg-slate-100 p-2.5 text-[11px] text-slate-900 border border-slate-300 leading-relaxed rounded-xs">
                <strong>管控底线：</strong>全类型红利一律前置调用模型，未通过风控校验一律不得直出入账。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-slate-900 text-white p-2.5 text-center text-xs font-bold font-mono tracking-wide">
              全渠道纳管 · 100% 覆盖
            </div>
          </div>

          {/* STEP 2：套利指数测算 */}
          <div className="border-2 border-blue-400 bg-white flex flex-col justify-between shadow-2xs">
            {/* 卡片头部 */}
            <div className="bg-blue-50 p-3.5 border-b-2 border-blue-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-blue-900 text-white font-mono font-bold text-xs rounded-xs">
                  02
                </span>
                <span className="text-xs font-bold text-blue-950">
                  算法测算
                </span>
              </div>
              <div className="text-sm font-bold text-blue-950 pt-0.5 flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-blue-800 shrink-0" />
                <span>套利指数实时测算</span>
              </div>
              <p className="text-[11px] text-blue-900 font-medium">
                六维算法动态融合，毫秒级输出量化得分
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-blue-900 text-white font-mono text-[11px] p-2 text-center font-bold tracking-tight rounded-xs shadow-2xs">
                套利指数 = f(等级, 输赢, 存杠, 盈杠, 行为, 关联)
              </div>

              <div className="bg-slate-50 border border-slate-200 p-2 space-y-1.5 rounded-xs text-[11px]">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">价值基线</span>
                  <span className="text-slate-800 font-mono font-semibold">会员等级 / 累计盈亏</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">杠杆偏离</span>
                  <span className="text-slate-800 font-mono font-semibold">存款杠杆 / 盈利造血</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-bold text-slate-900">异常行为</span>
                  <span className="text-slate-800 font-mono font-semibold">全包对打 / 极速洗水</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">跨站聚合</span>
                  <span className="text-slate-800 font-mono font-semibold">同机/同IP/关联穿透</span>
                </div>
              </div>

              <div className="bg-blue-50 p-2.5 text-[11px] text-blue-950 border border-blue-200 leading-relaxed rounded-xs">
                <strong>测算输出：</strong>基于全局数据湖实时评分，分值越高代表套利偏离与欺诈风险越大。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-blue-900 text-white p-2.5 text-center text-xs font-bold font-mono tracking-wide">
              量化输出：0 ~ 100 动态分值
            </div>
          </div>

          {/* STEP 3：决策输出 */}
          <div className="border-2 border-amber-400 bg-white flex flex-col justify-between shadow-2xs">
            {/* 卡片头部 */}
            <div className="bg-amber-50 p-3.5 border-b-2 border-amber-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-amber-900 text-white font-mono font-bold text-xs rounded-xs">
                  03
                </span>
                <span className="text-xs font-bold text-amber-950">
                  分级决策
                </span>
              </div>
              <div className="text-sm font-bold text-amber-950 pt-0.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>输出四阶裁定建议</span>
              </div>
              <p className="text-[11px] text-amber-900 font-medium">
                依据指数区间，精准触发阶梯处置动作
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-2 flex-1 text-xs">
              <div className="p-2 border border-emerald-300 bg-emerald-50/80 flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-700 shrink-0"></span>
                  <div>
                    <span className="font-bold text-emerald-950 text-xs">【正常】</span>
                    <span className="text-emerald-900 text-[11px] ml-1 font-medium">合规极速放行</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-950 font-bold bg-white px-2 py-0.5 border border-emerald-300">
                  0~29 分
                </span>
              </div>

              <div className="p-2 border border-amber-300 bg-amber-50/80 flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-700 shrink-0"></span>
                  <div>
                    <span className="font-bold text-amber-950 text-xs">【少发】</span>
                    <span className="text-amber-900 text-[11px] ml-1 font-medium">羊毛降额发放</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-amber-950 font-bold bg-white px-2 py-0.5 border border-amber-300">
                  30~69 分
                </span>
              </div>

              <div className="p-2 border border-rose-300 bg-rose-50/80 flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-700 shrink-0"></span>
                  <div>
                    <span className="font-bold text-rose-950 text-xs">【不发】</span>
                    <span className="text-rose-900 text-[11px] ml-1 font-medium">黑产强行阻断</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-rose-950 font-bold bg-white px-2 py-0.5 border border-rose-300">
                  70~100 分
                </span>
              </div>

              <div className="p-2 border border-blue-300 bg-blue-50/80 flex items-center justify-between rounded-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0"></span>
                  <div>
                    <span className="font-bold text-blue-950 text-xs">【多发】</span>
                    <span className="text-blue-900 text-[11px] ml-1 font-medium">高等级激励追加</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-blue-950 font-bold bg-white px-2 py-0.5 border border-blue-300">
                  优质合规
                </span>
              </div>

              <div className="bg-amber-50 p-2 text-[11px] text-amber-950 border border-amber-300 leading-relaxed rounded-xs mt-1">
                <strong>资源调配：</strong>打破“一刀切”，红利优先倾斜高净值优质真实客群。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-amber-900 text-white p-2.5 text-center text-xs font-bold font-mono tracking-wide">
              四阶裁定 · 结构性精细调配
            </div>
          </div>

          {/* STEP 4：人工审核 */}
          <div className="border-2 border-purple-400 bg-white flex flex-col justify-between shadow-2xs">
            {/* 卡片头部 */}
            <div className="bg-purple-50 p-3.5 border-b-2 border-purple-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-purple-900 text-white font-mono font-bold text-xs rounded-xs">
                  04
                </span>
                <span className="text-xs font-bold text-purple-950">
                  人工审核
                </span>
              </div>
              <div className="text-sm font-bold text-purple-950 pt-0.5 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-purple-800 shrink-0" />
                <span>风控复核与特批</span>
              </div>
              <p className="text-[11px] text-purple-900 font-medium">
                争议判定与异常红利实施人工二次把关
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1.5 rounded-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0"></span>
                  介入触发规则
                </span>
                <p className="text-slate-800 text-[11px] pl-3.5 leading-relaxed">
                  羊毛争议区间 (30~69分) 提报原额发放、高净值客诉复议或超限特邀提请。
                </p>
              </div>

              <div className="bg-purple-50/80 border border-purple-300 p-2.5 space-y-2 rounded-xs">
                <span className="font-bold text-purple-950 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-700 shrink-0"></span>
                  双向处置流向
                </span>
                <div className="text-[11px] pl-3.5 space-y-1.5 leading-relaxed">
                  <div>
                    <strong className="text-slate-900">核准/驳回：</strong>
                    <span className="text-slate-900">采纳模型意见，直接阻断不合规发放。</span>
                  </div>
                  <div>
                    <strong className="text-purple-950">强行特批：</strong>
                    <span className="text-purple-950 font-semibold">业务特批放行，强制记入工单并触发下阶兜底。</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-2 text-[11px] text-slate-900 border border-slate-300 leading-relaxed rounded-xs">
                <strong>权责留痕：</strong>严禁无痕越权直放，每一笔人工特批均强制关联工单与审核人工号。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-purple-900 text-white p-2.5 text-center text-xs font-bold font-mono tracking-wide">
              人工把关 · 权责留痕审计
            </div>
          </div>

          {/* STEP 5：违规发放隐性打标 */}
          <div className="border-2 border-rose-400 bg-white flex flex-col justify-between shadow-2xs">
            {/* 卡片头部 */}
            <div className="bg-rose-50 p-3.5 border-b-2 border-rose-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-rose-900 text-white font-mono font-bold text-xs rounded-xs">
                  05
                </span>
                <span className="text-xs font-bold text-rose-950">
                  闭环兜底
                </span>
              </div>
              <div className="text-sm font-bold text-rose-950 pt-0.5 flex items-center gap-1.5">
                <EyeOff className="w-4 h-4 text-rose-800 shrink-0" />
                <span>违规发放隐性打标</span>
              </div>
              <p className="text-[11px] text-rose-900 font-medium">
                特批放行与提款严查兜底协同闭环
              </p>
            </div>

            {/* 卡片内容 */}
            <div className="p-3.5 space-y-3 flex-1 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-2.5 space-y-1 rounded-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-900 shrink-0"></span>
                  适用场景
                </span>
                <p className="text-slate-800 text-[11px] pl-3.5 leading-relaxed">
                  模型判定建议【少发/不发】，经人工审核强行特批放行仍出账。
                </p>
              </div>

              <div className="bg-rose-50/80 border border-rose-300 p-2.5 space-y-2 rounded-xs">
                <span className="font-bold text-rose-950 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-700 shrink-0"></span>
                  前后端协同机制
                </span>
                <div className="text-[11px] pl-3.5 space-y-1.5 leading-relaxed">
                  <div>
                    <strong className="text-slate-900">前端策略：</strong>
                    <span className="text-slate-900">红利正常入账，不发生现场客诉阻断。</span>
                  </div>
                  <div>
                    <strong className="text-rose-950">后端闭环：</strong>
                    <span className="text-rose-950 font-semibold">系统静默加注高危标签，在提款环节加倍排查。</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 p-2 text-[11px] text-slate-900 border border-slate-300 leading-relaxed rounded-xs">
                <strong>兜底保障：</strong>兼顾业务前台灵活性与资金安全底线，构建全流程无死角闭环。
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="bg-rose-900 text-white p-2.5 text-center text-xs font-bold font-mono tracking-wide">
              静默标记 ➔ 提款精准狙击
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewBonusModelSection;



