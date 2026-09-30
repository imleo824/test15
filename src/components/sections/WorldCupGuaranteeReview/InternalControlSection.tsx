import React from "react";
import { Search, Shield, ShieldCheck } from "lucide-react";
import { ReportInfoGrid, SummaryBox, highlightNumbers } from "./utils";
import { ReportMetricCard, ReportMetricGrid, ReportMetricHero, ReportSubsectionHeader } from "../../ReportSections";

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
    <div id="section-internal-control" className="space-y-12 lg:space-y-16">
      <SummaryBox variant="module">
        {highlightNumbers(
          "由专职监督独立把关，重点监控[[红利发放]]、[[敏感参数变动]]与[[异常登录]]；依托行为留痕与操作日志实现全链路可溯，违规操作即时预警与查处。",
        )}
      </SummaryBox>

      {/* 3.1.1 专职监督工作成果 */}
      <div className="space-y-6">
        <ReportSubsectionHeader title="3.1.1 违规查处与稽查成果" />
        
        <ReportMetricHero
          title="违规处理总计"
          desc="通过渠道稽查与敏感操作全链路监控精准定位"
          metrics={
            <div className="flex items-baseline gap-4 font-mono">
              <span className="text-3xl md:text-4xl text-slate-950 font-black tracking-tight">225<small className="ml-1 text-xs text-slate-500 font-bold font-sans">人</small></span>
              <span className="text-2xl md:text-3xl text-blue-900 font-black tracking-tight">178,140 <small className="text-xs font-sans font-bold text-blue-700">泰达币</small></span>
            </div>
          }
        />

        <ReportMetricGrid columns={3}>
          <ReportMetricCard
            title="红利类型派错"
            value="1,143"
            unit="人"
            detail={highlightNumbers("通过[[每日复核机制]]查获并退回；涉及金额 [[36.69]]")}
          />
          <ReportMetricCard
            title="红利流水派错"
            value="465"
            unit="人"
            detail={highlightNumbers("通过[[每日复核机制]]查获并修正；涉及金额 [[6.79]]")}
          />
          <ReportMetricCard
            title="平台参数修改"
            value="52"
            unit="条"
            detail={highlightNumbers("涵盖[[返水比例]]、[[财务费率]]、[[代理分红]]、[[财务存提]]等")}
          />
          <ReportMetricCard
            title="用户信息修改"
            value="17,166"
            unit="条"
            detail={highlightNumbers("修改漏记/错记[[248条]]")}
          />
          <ReportMetricCard
            title="后台登陆监测"
            value="568+"
            unit="个网络节点"
            detail={highlightNumbers("其中[[16条]]异常跳跃登录节点已全部核实")}
          />
          <ReportMetricCard
            title="数据导出监测"
            value="49,114"
            unit="次"
            detail={highlightNumbers("经[[人工及系统双向复核]]，未发现泄露行为")}
          />
        </ReportMetricGrid>
      </div>

      {/* 3.1.2 监督排查核心主线 */}
      <div className="space-y-6 sm:space-y-8">
        <ReportSubsectionHeader title="3.1.2 监督排查核心主线" />

        <SummaryBox>
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "内控稽查围绕[[线索发现]]与[[跟进处置]]两条主线开展：前端扩大信息触达面，后端通过日志、录屏、权限、流程和外部核验完成闭环追溯。",
            )}
          </p>
        </SummaryBox>
        
        <div className="space-y-6">
          <ReportInfoGrid
            title="线索来源"
            icon={<Search className="w-4 h-4 text-slate-900 shrink-0" />}
            desc={highlightNumbers("通过外部渠道、系统预警、业务流程异常、匿名举报与行为留痕发现问题。")}
            items={clueSourceItems}
            showIndex
            columns={4}
          />
          <ReportInfoGrid
            title="稽查动作"
            icon={<ShieldCheck className="w-4 h-4 text-slate-900 shrink-0" />}
            desc={highlightNumbers("线索进入后，按归集、复核、追溯、核验和规则回流推进闭环处理。")}
            items={auditActionItems}
            showIndex
            columns={4}
          />
        </div>
      </div>

      {/* 3.1.3 高危场景防范 */}
      <div className="space-y-6">
        <ReportSubsectionHeader title="3.1.3 高危场景防范" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* 1. 外部通讯群信息 */}
          <div className="flex flex-col justify-between space-y-4 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 h-full">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <span className="report-sequence-badge report-sequence-badge--risk">1</span>
                <span>外部通讯群聊风险</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("群聊信息易被全局检索，导致[[敏感数据暴露]]与非受控扩散，存在严重信息泄露隐患。")}
              </p>
            </div>
            <div className="pt-3 space-y-1.5 border-t border-slate-200">
              <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-700 shrink-0"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("全面[[关停外部通讯群聊]]，收拢至系统工单流转（详见 3.2 节）。")}
              </p>
            </div>
          </div>

          {/* 2. 内部勾结查控 */}
          <div className="flex flex-col justify-between space-y-4 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 h-full">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <span className="report-sequence-badge report-sequence-badge--risk">2</span>
                <span>内部勾结风险</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("涉及[[身份验证]]、[[佣金结算]]与[[提款审核]]等环节，若缺乏随机隔离与交叉复核，易产生协同违规。")}
              </p>
            </div>
            <div className="pt-3 space-y-1.5 border-t border-slate-200">
              <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-700 shrink-0"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("核心环节实行[[随机派单与多层审批]]，强化权限隔离（详见 3.2 与 3.3 节）。")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.1.4 典型违规案例剖析 */}
      <div className="space-y-6">
        <ReportSubsectionHeader title="3.1.4 典型案例剖析" />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          <div className="space-y-4 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg pb-2 border-b border-slate-200">
              <Shield className="w-5 h-5 text-blue-800 shrink-0" />
              <span>外包审核违规案例</span>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">1</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">背景</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("外包审核存在数据外泄风险且差错率偏高，5月启动[[外包专项治理]]。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">2</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">专项跟进与录屏分析</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("对全量外包账号录屏抽检，查出[[不规范操作占比达 33%]]，安全隐患突出。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">3</div>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">深度挖掘与处理情况</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("锁定责任人利用职务便利违规放单与[[不当获利]]，已固定证据并严肃问责处置。")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-slate-50/70 p-5 sm:p-6 border-t-2 border-slate-900 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg pb-2 border-b border-slate-200">
              <Shield className="w-5 h-5 text-blue-800 shrink-0" />
              <span>业绩造假违规案例</span>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">1</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">违规类型</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("[[业绩造假]]：伪造业务过程材料与用户参与记录，虚增个人业绩。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">2</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">发现情况</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("多名员工利用[[图像合成工具]]伪造用户对话记录，导致业绩数据失真。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">3</div>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm sm:text-base mb-0.5">风险影响</span>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("破坏[[考核真实性]]与合规性，已纳入素材复核、交叉验证与绩效审计。")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
