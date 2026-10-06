import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import {
  ReportBadge,
  ReportMetricCard,
  ReportMetricGrid,
  ReportMetricHero,
  ReportSubsectionHeader,
} from "../../ReportSections";

const dailyAuditPreviousQuarter = [
  {
    title: "日常监控",
    tag: "办公合规",
    content: "针对虚拟机员工日常办公操作实施[[全流程监控]]，严厉杜绝各类违法违规行为及违反公司规章制度的情况，筑牢内部合规防线。",
  },
  {
    title: "审核预警群",
    tag: "流程抽查",
    content: "针对“预警功能”专项抽查，对内部审核业务流程中的核心风险场景实施[[精准抽查监控]]，排查潜在违规操作与异常问题。",
  },
  {
    title: "外部钓鱼",
    tag: "黑产对抗",
    content: "通过各类外部群组，以合作方式接触相关工作室，精准钓取与工作室勾结的[[内部卧底]]，掌握一手动态，前置防控外部勾结风险。",
  },
];

const dailyAuditCurrentQuarter = [
  {
    title: "员工忠诚度测试",
    tag: "本季新增",
    content: "为排查内部潜在违规风险，稽查部将[[伪装外部工作室]]对员工开展忠诚度测试，通过沟通挖掘人员是否存在此意图，识别岗位底线意识，提前预防人员[[数据泄露、被外部引诱]]等隐患。",
  },
  {
    title: "IM端监控预警",
    tag: "本季新增",
    content: "实时抓取使用虚拟机员工聊天中的[[敏感字段、文件外发]]等高危操作，触发后实时警报，稽查部联动抽查，实现[[风险精准预警、操作全程记录、快速跟进]]的管控。",
  },
];

export const InternalControlSection: React.FC = () => {
  return (
    <div id="section-internal-control" className="space-y-10 sm:space-y-12">
      <SummaryBox variant="module">
        {highlightNumbers(
          "专职监督独立把关，聚焦[[敏感信息监控]]与[[稽查违规监控]]两大重点：依托全量操作日志与行为留痕，对违规操作实施即时预警、严肃追责与资产止损。",
        )}
      </SummaryBox>

      {/* L3.1 敏感信息监控 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L3.1 敏感信息监控" />

        <SummaryBox variant="module">
          {highlightNumbers(
            "常态化全链路监控[[明文回显]]、[[红利发放]]、[[敏感参数变动]]与[[数据导出]]等高风险操作，依托行为留痕精准定位并即时阻断异常行为。",
          )}
        </SummaryBox>

        <ReportMetricGrid columns={3}>
          <ReportMetricCard
            title={
              <div className="flex items-center gap-2">
                <span>全站点明文回显</span>
                <ReportBadge tone="blue" className="text-xs font-mono font-normal">
                  9月新增监测
                </ReportBadge>
              </div>
            }
            value="9,020"
            unit="次"
            className="sm:col-span-2 lg:col-span-3"
            detail={highlightNumbers("管控背景与处置闭环：9 月新增明文回显全量监控，累计捕获回显记录 9,020 次。因上半月查看姓名数据较多，内控监督即时介入反馈，果断对相关账号的高敏查看[[权限全面回收]]。至 9 月 16 日查看明文监测群技术调试全面就绪，日常查看条数迅速压降收敛至 0~4 条/日极低安全水位，且全部经逐笔复核反馈无违规异常。")}
          />
          <ReportMetricCard
            title="红利类型派错"
            value="161"
            unit="人"
            detail={highlightNumbers("通过[[每日复核机制]]查获并退回；涉及金额 3.73w，环比第二季度 36.69w 下降 89.83%。")}
          />
          <ReportMetricCard
            title="红利流水派错"
            value="1,142"
            unit="人"
            detail={highlightNumbers("通过[[每日复核机制]]查获并修正；涉及金额 17.13w，环比第二季度 6.79w 上升 152%。")}
          />
          <ReportMetricCard
            title="平台参数修改"
            value="52"
            unit="条"
            detail={highlightNumbers("涵盖返水比例、财务费率、代理分红、财务存提等敏感配置变更。")}
          />
          <ReportMetricCard
            title="用户信息修改"
            value="15,135"
            unit="条"
            detail={highlightNumbers("核查修改漏记/错记 192 条，环比第二季度 248 条下降 22.58%。")}
          />
          <ReportMetricCard
            title="后台登录监测"
            value="742+"
            unit="常用IP"
            detail={highlightNumbers("其中 179 条异常跳跃登录；主要为 8 月 29 日频繁切换 IP 随机尝试登录后台的异常 IP（共 110 条），其余主要为 VPN 节点跳跃登出或登录失败；异常 IP 均已即时反馈技术团队拉黑阻断。")}
          />
          <ReportMetricCard
            title="数据导出监测"
            value="43,087"
            unit="次"
            detail={highlightNumbers("经[[人工及系统双向复核]]，未发现泄露行为；环比第二季度 55,017 次下降 21.68%。")}
          />
        </ReportMetricGrid>
      </div>

      {/* L3.2 稽查违规监控 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="L3.2 稽查违规监控" />

        {/* 1. 数据总览 */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 bg-slate-950 shrink-0" />
              <span className="font-bold text-slate-950 text-sm sm:text-base">
                数据总览
              </span>
            </div>
          </div>

            <ReportMetricHero
              title="稽查处理与挽回总计"
              desc="专项查处违规责任人、追回资产损失与执行纪律惩戒"
              metrics={
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl md:text-4xl text-slate-950 font-bold tracking-tight tabular-nums">192<small className="ml-1 text-xs text-slate-500 font-bold">人</small></span>
                  <span className="text-2xl md:text-3xl text-slate-950 font-bold tracking-tight tabular-nums">63,423<small className="ml-1 text-xs text-slate-500 font-bold">U</small></span>
                </div>
              }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {/* Card 1: 违规人数 */}
              <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                    违规人数
                  </span>
                  <ReportBadge tone="red" className="text-xs font-mono">
                    严重违规
                  </ReportBadge>
                </div>
                <div className="flex items-baseline gap-1 py-0.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    16
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">人</span>
                </div>
              </div>

              {/* Card 2: 预估挽回金额 */}
              <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                    预估挽回金额
                  </span>
                  <ReportBadge tone="green" className="text-xs font-mono">
                    资产止损
                  </ReportBadge>
                </div>
                <div className="flex items-baseline gap-1 py-0.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    32,799
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">U</span>
                </div>
              </div>

              {/* Card 3: 罚款人数 */}
              <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                    罚款人数
                  </span>
                  <ReportBadge tone="amber" className="text-xs font-mono">
                    纪律惩戒
                  </ReportBadge>
                </div>
                <div className="flex items-baseline gap-1 py-0.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    176
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">人</span>
                </div>
              </div>

              {/* Card 4: 罚款金额 */}
              <div className="bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                    罚款金额
                  </span>
                  <ReportBadge tone="slate" className="text-xs font-mono">
                    依规罚没
                  </ReportBadge>
                </div>
                <div className="flex items-baseline gap-1 py-0.5">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-mono tabular-nums">
                    30,624
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">U</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 日常稽查项演进矩阵：上季度基线 vs 本季度新增 */}
          <div className="flex flex-col gap-3.5 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-slate-950 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-slate-950">
                  日常稽查项机制演进（上季度基线 ➔ 本季度新增）
                </span>
              </div>         
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* 左列：上季度（常态基线 · 3项） */}
              <div className="lg:col-span-6 bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                    <span className="w-2 h-2 bg-slate-600 shrink-0"></span>
                    <span>上季度（常态基线 · 3 项）</span>
                  </div>
                  <ReportBadge tone="slate" className="text-xs font-mono">
                    基础防线
                  </ReportBadge>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {dailyAuditPreviousQuarter.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 border border-slate-100 space-y-1.5 flex-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-slate-950">
                          {item.title}
                        </strong>
                        <ReportBadge tone="slate" className="text-[11px] font-mono">
                          {item.tag}
                        </ReportBadge>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                        {highlightNumbers(item.content)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右列：本季度（新增拓展 · 2项） */}
              <div className="lg:col-span-6 bg-white border border-slate-200 p-5 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-950 font-bold text-sm sm:text-base">
                    <span className="w-2 h-2 bg-blue-700 shrink-0"></span>
                    <span>本季度（新增拓展 · 2 项）</span>
                  </div>
                  <ReportBadge tone="blue" className="text-xs font-mono">
                    方式升级
                  </ReportBadge>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {dailyAuditCurrentQuarter.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-blue-50/40 border border-blue-100 space-y-1.5 flex-1 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-xs sm:text-sm font-bold text-slate-950">
                          {item.title}
                        </strong>
                        <ReportBadge tone="blue" className="text-[11px] font-mono">
                          {item.tag}
                        </ReportBadge>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                        {highlightNumbers(item.content)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
