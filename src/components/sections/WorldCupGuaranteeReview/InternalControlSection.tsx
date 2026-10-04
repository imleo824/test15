import React from "react";
import { Search, Shield, ShieldCheck } from "lucide-react";
import { SummaryBox, highlightNumbers } from "./utils";
import {
  ReportBadge,
  ReportCaseCard,
  ReportMetricCard,
  ReportMetricGrid,
  ReportMetricHero,
  ReportSubsectionHeader,
} from "../../ReportSections";

const clueSourceItems = [
  {
    title: "渠道与行业信息",
    desc: "监测[[公开及私密群组]]、外部渠道与工作室动态，掌握黑产动向与风险线索。",
  },
  {
    title: "系统预警与参数变动",
    desc: "实时预警[[返水比例]]、[[查控费率]]、[[代理方案]]等敏感配置变更，纳入专项核查。",
  },
  {
    title: "审核异常",
    desc: "识别[[非审核人员代审]]、[[多人流转异常]]、[[同人多次审核]]等高危动作。",
  },
  {
    title: "匿名举报与行为留痕",
    desc: "结合[[匿名举报]]、管理页面与查控录屏、登录与操作日志，补充异常操作线索。",
  },
];

const auditActionItems = [
  {
    title: "归集线索并建立排查节奏",
    desc: "对渠道信息、系统预警、举报与录屏线索统一归档，建立[[定期排查机制]]，分层分级跟进。",
  },
  {
    title: "复核流程与重点场景",
    desc: "针对新员工、高风险岗位及核心预警场景开展[[专项抽查]]，核验违规与异常流转。",
  },
  {
    title: "追溯行为与权限链路",
    desc: "追溯[[虚拟机办公操作]]、核心页面访问、权限变更与敏感数据查看，定位异常登录与越权操作。",
  },
  {
    title: "核验外部勾结并回流规则",
    desc: "排查内外勾结与利益输送风险，确认的问题沉淀为[[预警规则]]与处置依据。",
  },
];

export const InternalControlSection: React.FC = () => {
  return (
    <div id="section-internal-control" className="flex flex-col gap-10 sm:gap-12">
      <SummaryBox variant="module">
        {highlightNumbers(
          "由专职监督独立把关，重点监控[[红利发放]]、[[敏感参数变动]]与[[异常登录]]；依托行为留痕与操作日志实现全链路可溯，违规操作即时预警与查处。",
        )}
      </SummaryBox>

      {/* 3.4.1 专职监督工作成果 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="3.4.1 违规查处与稽查成果" />
        
        <ReportMetricHero
          title="违规处理总计"
          desc="通过渠道稽查与敏感操作全链路监控精准定位"
          metrics={
            <div className="flex items-baseline gap-4">
              <span className="text-3xl md:text-4xl text-slate-950 font-bold tracking-tight tabular-nums">225<small className="ml-1 text-xs text-slate-500 font-bold">人</small></span>
              <span className="text-2xl md:text-3xl text-slate-950 font-bold tracking-tight tabular-nums">178,140<small className="ml-1 text-xs text-slate-500 font-bold">条</small></span>
            </div>
          }
        />

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
            detail={highlightNumbers("管控背景与处置闭环：9月新增明文回显全量监控，累计捕获回显记录 9,020次。因上半月查看姓名数据较多，内控监督即时介入反馈，果断对相关账号的高敏查看[[权限全面回收]]。至 9月16日 查看明文监测群技术调试全面就绪，日常查看条数迅速压降收敛至 0~4条/日 极低安全水位，且全部经逐笔复核反馈无违规异常。")}
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
            detail={highlightNumbers("核查修改漏记/错记 192条，环比第二季度 248条 下降 22.58%。")}
          />
          <ReportMetricCard
            title="后台登录监测"
            value="742+"
            unit="常用IP"
            detail={highlightNumbers("其中 179条 异常跳跃登录；主要为 8月29日 频繁切换 IP 随机尝试登录后台的异常 IP（共 110条），其余主要为 VPN 节点跳跃登出或登录失败；异常 IP 均已即时反馈技术团队拉黑阻断。")}
          />
          <ReportMetricCard
            title="数据导出监测"
            value="43,087"
            unit="次"
            detail={highlightNumbers("经[[人工及系统双向复核]]，未发现泄露行为；环比第二季度 55,017次 下降 21.68%。")}
          />
        </ReportMetricGrid>
      </div>

      {/* 3.4.2 监督排查核心主线 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="3.4.2 监督排查核心主线" />

        <SummaryBox variant="module">
          {highlightNumbers(
            "内控稽查围绕[[线索发现]]与[[跟进处置]]两条主线开展：前端扩大信息触达面，后端通过日志、录屏、权限、流程和外部核验完成闭环追溯。",
          )}
        </SummaryBox>
        
        <div className="flex flex-col gap-6">
          {/* 1. 线索来源 */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200">
              <span className="w-1.5 h-3.5 bg-slate-900"></span>
              <span className="font-bold text-slate-950 text-base flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-900 shrink-0" />
                <span>线索来源</span>
              </span>
            </div>
            <SummaryBox variant="note">
              {highlightNumbers("通过[[外部渠道]]、[[系统预警]]、[[业务流程异常]]、[[匿名举报]]与[[行为留痕]]发现问题。")}
            </SummaryBox>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {clueSourceItems.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-2.5 h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <span className="w-5 h-5 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-bold text-slate-950 text-sm sm:text-[15px]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {highlightNumbers(item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 稽查动作 */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200">
              <span className="w-1.5 h-3.5 bg-slate-900"></span>
              <span className="font-bold text-slate-950 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-900 shrink-0" />
                <span>稽查动作</span>
              </span>
            </div>
            <SummaryBox variant="note">
              {highlightNumbers("线索进入后，按[[归集]]、[[复核]]、[[追溯]]、[[核验]]和[[规则回流]]推进闭环处理。")}
            </SummaryBox>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {auditActionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-2.5 h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <span className="w-5 h-5 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-bold text-slate-950 text-sm sm:text-[15px]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {highlightNumbers(item.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3.4.3 高危场景防范 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="3.4.3 高危场景防范" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* 1. 外部通讯群信息 */}
          <div className="bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-4 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-950 font-bold text-base sm:text-lg">
                  <span className="w-5 h-5 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>外部通讯群聊风险</span>
                </div>
                <ReportBadge tone="red" className="text-xs font-mono">
                  高危暴露
                </ReportBadge>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("群聊信息易被全局检索，导致[[敏感数据暴露]]与非受控扩散，存在严重信息泄露隐患。")}
              </p>
            </div>
            <div className="pt-3 space-y-1 border-t border-slate-100">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                应对举措
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("全面[[关停外部通讯群聊]]，收拢至系统工单流转（详见 3.3 节）。")}
              </p>
            </div>
          </div>

          {/* 2. 内部勾结查控 */}
          <div className="bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-4 h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-950 font-bold text-base sm:text-lg">
                  <span className="w-5 h-5 bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>内部勾结风险</span>
                </div>
                <ReportBadge tone="amber" className="text-xs font-mono">
                  协同隐患
                </ReportBadge>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("涉及[[身份验证]]、[[佣金结算]]与[[提款审核]]等环节，若缺乏随机隔离与交叉复核，易产生协同违规。")}
              </p>
            </div>
            <div className="pt-3 space-y-1 border-t border-slate-100">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                应对举措
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {highlightNumbers("核心环节实行[[随机派单与多层审批]]，强化权限隔离（详见 3.1 与 3.2 节）。")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.4.4 典型违规案例剖析 */}
      <div className="flex flex-col gap-6">
        <ReportSubsectionHeader title="3.4.4 典型案例剖析" />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          <ReportCaseCard
            title="外包审核违规案例"
            icon={<Shield className="w-5 h-5 text-blue-800 shrink-0" />}
            badge={<ReportBadge tone="red" className="text-xs font-mono">违规查处</ReportBadge>}
            steps={[
              {
                step: 1,
                title: "背景起因",
                content: highlightNumbers("外包审核存在数据外泄风险且质检率偏高，5月启动[[外包专项治理]]。"),
              },
              {
                step: 2,
                title: "专项跟进与录屏分析",
                content: highlightNumbers("对全量外包账号录屏抽检，查出[[不规范操作]]占比达 33%，安全隐患突出。"),
              },
              {
                step: 3,
                title: "深度挖掘与处理情况",
                content: highlightNumbers("锁定责任人利用职务便利违规放单与[[不当获利]]，已固定证据并严肃问责处置。"),
              },
            ]}
          />

          <ReportCaseCard
            title="业绩造假违规案例"
            icon={<Shield className="w-5 h-5 text-blue-800 shrink-0" />}
            badge={<ReportBadge tone="amber" className="text-xs font-mono">稽查纠偏</ReportBadge>}
            steps={[
              {
                step: 1,
                title: "违规类型",
                content: highlightNumbers("[[业绩造假]]：伪造业务过程材料与用户参与记录，虚增个人业绩。"),
              },
              {
                step: 2,
                title: "发现情况",
                content: highlightNumbers("多名员工利用[[图像合成工具]]伪造用户对话记录，导致业绩数据失真。"),
              },
              {
                step: 3,
                title: "风险影响",
                content: highlightNumbers("破坏[[考核真实性]]与合规性，已纳入素材复核、交叉验证与绩效审计。"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
