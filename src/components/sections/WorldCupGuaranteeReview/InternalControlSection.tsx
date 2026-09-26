import React from "react";
import { Search, Shield, ShieldCheck } from "lucide-react";
import { ReportInfoGrid, SummaryBox, highlightNumbers } from "./utils";
import { ReportMetricCard, ReportMetricGrid, ReportMetricHero, ReportSubsectionHeader } from "../../ReportSections";

const clueSourceItems = [
  {
    title: "渠道与行业信息",
    desc: "持续覆盖[[公开及私密群组频道]]、外部渠道与相关工作室信息，掌握黑产动向、异常订单、市场一手动态及外部合作风险线索。",
  },
  {
    title: "系统预警与参数变动",
    desc: "通过后台预警发现[[返水比例]]、[[查控费率]]、[[代理方案]]等敏感配置变化，并纳入专项核查。",
  },
  {
    title: "审核异常",
    desc: "从审核与查控流程中识别[[非审核人员强行代审]]、[[多人流转异常]]、[[被同人多次审核]]等高危动作。",
  },
  {
    title: "匿名举报与行为留痕",
    desc: "结合[[匿名举报渠道]]、核心管理页面录屏、查控操作录屏、登录日志与操作日志，补充内部及外部异常操作线索。",
  },
];

const auditActionItems = [
  {
    title: "归集线索并建立排查节奏",
    desc: "对渠道信息、系统预警、举报与录屏线索统一归档，建立[[定期排查机制]]，按线索类型、风险等级和涉及岗位分层跟进。",
  },
  {
    title: "复核流程与重点场景",
    desc: "针对新入职员工、高风险岗位、审核查控链路及预警命中的核心风险场景开展[[专项抽查]]，核验是否存在违规操作、异常流转行为。",
  },
  {
    title: "追溯行为与权限链路",
    desc: "对[[虚拟机员工日常办公操作]]、核心页面访问、查控操作、账号权限、工单流转及敏感数据查看进行全流程追溯，定位异常登录、越权访问和非业务必要操作。",
  },
  {
    title: "核验外部勾结并回流规则",
    desc: "在合规授权范围内接触外部渠道及相关工作室，核验内外勾结、利益输送和违规协作风险；将确认的问题沉淀为[[预警规则]]和处置依据，持续扩大信息收集面。",
  },
];

export const InternalControlSection: React.FC = () => {
  return (
    <div id="section-internal-control" className="space-y-12">
      <SummaryBox variant="module">
        {highlightNumbers(
          "由独立专职监督角色统筹把关，重点监控[[红利发放]]、[[敏感参数变动]]与[[异常登录]]等高危行为。依托行为留痕与操作日志实现全链路可追溯，确保违规操作即时预警与责任查处。",
        )}
      </SummaryBox>

      {/* 3.1.1 专职监督工作成果 */}
      <div className="space-y-5">
        <ReportSubsectionHeader title="3.1.1 违规查处与稽查成果" />
        
        <ReportMetricHero
          title="违规处理总计"
          desc="通过渠道稽查与敏感监控精准定位"
          metrics={
            <>
              <span className="text-3xl md:text-4xl text-slate-900 font-black">225<small className="ml-1 text-sm text-slate-700 font-bold font-sans">人</small></span>
              <span className="text-2xl md:text-3xl text-blue-700 font-black">178,140 <small className="text-sm font-sans font-bold">泰达币</small></span>
            </>
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
      <div className="space-y-5">
        <ReportSubsectionHeader title="3.1.2 监督排查核心主线" />

        <SummaryBox className="mb-5">
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "内控稽查围绕[[线索发现]]与[[跟进处置]]两条主线开展：前端扩大信息触达面，后端通过日志、录屏、权限、流程和外部核验完成闭环追溯。",
            )}
          </p>
        </SummaryBox>
        
        <div className="space-y-5">
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
      <div className="space-y-5">
        <ReportSubsectionHeader title="3.1.3 高危场景防范" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. 外部通讯群信息 */}
          <div className="border-t-2 border-slate-800 pt-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <span className="report-sequence-badge report-sequence-badge--risk">1</span>
                <span>外部通讯群聊风险</span>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("群内成员通过搜索关键信息即可轻易获取[[敏感信息]]，以此进行不当获利，对信息安全造成极大威胁。")}
              </p>
            </div>
            <div className="pt-3 space-y-1.5 border-t border-slate-200">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("针对敏感和核心业务对接，全面[[关停外部通讯群聊]]，详情见 3.2 风控工单说明。")}
              </p>
            </div>
          </div>

          {/* 2. 内部勾结查控 */}
          <div className="border-t-2 border-slate-800 pt-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <span className="report-sequence-badge report-sequence-badge--risk">2</span>
                <span>内部勾结风险</span>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("涉及[[身份验证审核]]、[[佣金审核]]、[[提款审核]]等多关键环节，极易形成上下游的内部链条合作。")}
              </p>
            </div>
            <div className="pt-3 space-y-1.5 border-t border-slate-200">
              <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {highlightNumbers("核心环节启动[[随机分配且多层审批]]的流程；如身份验证、提款、佣金等，详情见 3.2 风控工单与 3.3 安全机制说明。")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.1.4 典型违规案例剖析 */}
      <div className="space-y-5">
        <ReportSubsectionHeader title="3.1.4 典型案例剖析" />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="border-t-2 border-slate-800 pt-4 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base pb-1 border-b border-slate-200">
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
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">背景</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("外包团队审核质量长期未达预期，且日常审计已查实存在[[内部数据泄露]]风险案例；以此为契机，稽查于5月全面启动[[外包专项治理]]。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">2</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">专项跟进与录屏分析</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("对全量外包账号展开深度跟进与录屏抽检。结果表明，审核环节中的[[不规范操作占比高达 33%]]，存在极大的安全隐患。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">3</div>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">深度挖掘与处理情况</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("通过对外包相关责任人的专项监控，最终锁定并查实其涉嫌严重渎职、内外勾结违规操作，甚至利用职务便利进行[[不当获利]]的恶劣违规行为。")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-slate-800 pt-4 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base pb-1 border-b border-slate-200">
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
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">违规类型</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("[[业绩造假]]：员工通过伪造业务过程材料，虚构用户参与记录，以此违规完成个人业绩指标。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">2</div>
                  <div className="w-0.5 flex-1 bg-slate-200 my-1"></div>
                </div>
                <div className="pb-2">
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">发现情况</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("用户中心多位员工利用[[图像合成工具]]伪造与用户的对话记录，伪装用户参与记录，造成业绩数据失真。")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="report-sequence-badge">3</div>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm mb-0.5">风险影响</span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highlightNumbers("该行为直接破坏[[业绩考核真实性]]与活动执行合规性，需纳入异常素材复核、聊天记录交叉验证和人员绩效审计范围。")}
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
