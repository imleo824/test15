import React from "react";
import { Check, Clock, Filter, Server, Workflow, Zap, CheckSquare, Square, ShieldAlert, AlertTriangle, Lock } from "lucide-react";
import { ModuleBlockHeader, ReportInfoGrid, SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportPanel, ReportTableFrame } from "../../ReportSections";

interface GovernanceItem {
  id: string;
  name: string;
  businessDesc: string;
  sensitivity: "一般" | "非常";
  sensitiveDesc: string;
  status: "已处理" | "待排期" | "持续中";
  method: "已经取消" | "彻底取消" | "脱敏简化" | "系统替代";
  actionDetails: string;
}

export const TgGovernanceSection: React.FC = () => {
  const governanceItems: GovernanceItem[] = [
    {
      id: "G01",
      name: "财务核实流程",
      businessDesc: "财务及交易流水核实对账",
      sensitivity: "一般",
      sensitiveDesc: "敏感财务及交易流水",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "在财务环节完成即可，在审核环节无需存在",
    },
    {
      id: "G02",
      name: "代存核实流程",
      businessDesc: "大额代存真实性",
      sensitivity: "一般",
      sensitiveDesc: "银行卡与敏感资金账户",
      status: "已处理",
      method: "彻底取消",
      actionDetails: "在代存大额等核实，本就不应在审核环节存在",
    },
    {
      id: "G04",
      name: "质检对接流程",
      businessDesc: "专员对专员案例对接",
      sensitivity: "非常",
      sensitiveDesc: "商户秘钥与接口参数",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "缩小参与范围，共识后修正歧义规则",
    },
    {
      id: "G05",
      name: "流水咨询流程",
      businessDesc: "日常流水差多少",
      sensitivity: "一般",
      sensitiveDesc: "临时涉诉及合规法律研判",
      status: "已处理",
      method: "脱敏简化",
      actionDetails: "提供工具支持与培训，由咨询侧自行查询",
    },
    {
      id: "G06",
      name: "审核扣款流程",
      businessDesc: "风控和扣款是独立流程，都在飞机群对接",
      sensitivity: "非常",
      sensitiveDesc: "扣款动作与风控判定策略",
      status: "已处理",
      method: "系统替代",
      actionDetails: "风控和扣款变为自动联动流程，且不需要人工在飞机群进行敏感信息对接",
    },
    {
      id: "G07",
      name: "红利审核流程",
      businessDesc: "运营将活动红利发在飞机群给到风控审核",
      sensitivity: "非常",
      sensitiveDesc: "高额优惠/红利发放名单及总额",
      status: "已处理",
      method: "系统替代",
      actionDetails: "取消线下活动红利流程，都必须在后台走线上化流程，风控后台完成审核",
    },
    {
      id: "G08",
      name: "审核复审流程",
      businessDesc: "核心风控判定敏感信息通过飞机群进行对接",
      sensitivity: "非常",
      sensitiveDesc: "出款账户与大额出款决策",
      status: "已处理",
      method: "系统替代",
      actionDetails: "全部在后台完成复审，不需要人工在飞机群进行敏感信息对接",
    },
    {
      id: "G09",
      name: "上标下标流程",
      businessDesc: "核心风控判定敏感信息通过飞机群进行对接",
      sensitivity: "非常",
      sensitiveDesc: "账号限制状态与黑名单标记",
      status: "已处理",
      method: "系统替代",
      actionDetails: "全部在后台完成复审，不需要人工在飞机群进行敏感信息对接",
    },
    {
      id: "G10",
      name: "标签备注流程",
      businessDesc: "审核流程过程中关键备注风险标签[[被漏看]]。",
      sensitivity: "非常",
      sensitiveDesc: "会员风险跟进轨迹与敏感判语",
      status: "已处理",
      method: "系统替代",
      actionDetails: "系统自动识别订单关键标签和备注进行强制高亮提醒和必须查看",
    },
    {
      id: "G11",
      name: "资料审核流程",
      businessDesc: "单人决定证件审核结果",
      sensitivity: "非常",
      sensitiveDesc: "实名证件及手持原件等极敏感隐私",
      status: "待排期",
      method: "系统替代",
      actionDetails: "增加多节点审核，一个身份验证经过 [[3-4人]] 审批方可通过。",
    },
  ];

  const getMethodTone = (method: GovernanceItem["method"]): "red" | "amber" | "green" | "slate" => {
    if (method === "彻底取消" || method === "已经取消") return "red";
    if (method === "脱敏简化") return "amber";
    if (method === "系统替代") return "green";
    return "slate";
  };

  return (
    <ReportPanel tone="soft" padding="sm" className="report-module-stack h-full">
      <div className="report-module-main">
        {/* 顶部标题与标签 */}
        <div className="report-module-intro">
          <ModuleBlockHeader title={<><Workflow className="w-5 h-5 text-slate-900 shrink-0" /><span>3.4.1 流程升级重构</span></>} />
          <SummaryBox>
            {highlightNumbers("当前存在大量[[非必要且繁琐的流程]]，导致效率降低；群内[[敏感数据]]可被留存检索，存在安全隐患。需全面推动线下群组业务向[[工单流程]]迁移，剥离群聊操作属性，以实现[[过程可追溯、数据不外泄]]，并降低违规操作风险。")}
            <div className="report-inline-note">
              {highlightNumbers("备注：世界杯期间保持稳定，暂缓切换；8月开始进行切换全新流程。")}
            </div>
          </SummaryBox>

          {/* 1/2类治理清单 Checklist 表格 */}
          <div className="governance-table-block">
            <div className="report-small-title">
              <span className="report-rhythm-mark"></span>
              <span>流程治理清单</span>
            </div>

            <ReportTableFrame>
              <table className="report-standard-table">
                <thead>
                  <tr>
                    <th className="governance-check-cell">Check</th>
                    <th>核心流程</th>
                    <th>业务简述</th>
                    <th>敏感程度</th>
                    <th>当前状态</th>
                    <th>处理方式</th>
                    <th>落地举措</th>
                  </tr>
                </thead>
                <tbody>
                  {governanceItems.map((item, index) => (
                    <tr 
                      key={item.id} 
                      className={item.status === "待排期" ? "report-table-row--pending" : ""}
                    >
                      <td className="governance-check-cell">
                        {item.status === "已处理" ? (
                          <CheckSquare className="w-4.5 h-4.5 text-emerald-600 inline-block stroke-[2.5]" />
                        ) : (
                          <Square className="w-4.5 h-4.5 text-slate-300 inline-block" />
                        )}
                      </td>
                      <td className="governance-name-cell">
                        <span className="governance-flow-index">{index + 1}</span>
                        <span>{item.name}</span>
                      </td>
                      <td className="governance-description-cell">
                        {highlightNumbers(item.businessDesc)}
                      </td>
                      <td>
                        <ReportBadge tone={item.sensitivity === "非常" ? "red" : "slate"}>
                          {item.sensitivity === "非常" ? <ShieldAlert className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                          {item.sensitivity}
                        </ReportBadge>
                      </td>
                      <td>
                        <ReportBadge tone={item.status === "已处理" ? "green" : item.status === "待排期" ? "amber" : "slate"}>
                          {item.status === "已处理" ? (
                            <Check className="w-3 h-3 stroke-[3.5]" />
                          ) : (
                            <Clock className="w-3 h-3 stroke-[3]" />
                          )}
                          {item.status}
                        </ReportBadge>
                      </td>
                      <td>
                        <ReportBadge tone={getMethodTone(item.method)}>
                          {item.method}
                        </ReportBadge>
                      </td>
                      <td className="governance-action-cell">
                        {highlightNumbers(item.actionDetails)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ReportTableFrame>
          </div>
        </div>

        {/* 案例详情 */}
        <div className="report-module-subsection mt-6">
          {/* 流程五实战收益案例：标签备注线上化 */}
          <div className="mt-4">
            <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 space-y-3 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="report-case-badge">
                    <Zap className="w-3.5 h-3.5 shrink-0" />
                    显性收益案例
                  </span>
                  <span className="text-base font-black text-slate-900 tracking-tight">
                    【标签备注线上化】
                  </span>
                </div>              
              </div>

              <div className="text-base font-bold text-slate-800 leading-relaxed bg-white border border-slate-200/80 rounded-lg p-4 space-y-3">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">实现机制：</span>
                  {highlightNumbers("通过系统[[自动识别]]用户[[重要风险特征标记]]，对其[[重要标签与备注]]的[[强制查看]]与[[醒目提醒]]，优化审核流程过程中关键备注风险标签[[被漏看]]。")}
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-900 block mb-1">效果说明：</span>
                  {highlightNumbers("上线前后因漏看标签/备注导致的漏统计或风险出款损耗，从上线前的[[~110w/月]]降至约[[50w/月]]，月均减少资金损[[近 60w/月]]。")}
                </div>
              </div>

              {/* 强管控拦截与强制查看 界面 仿真示例 */}
              <div className="mt-3 pt-2 border-t border-slate-200/80">
                <div className="text-sm font-black text-slate-800 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    系统示例
                  </span>
                </div>

                <div className="border border-slate-300 rounded-lg bg-white shadow-2xs overflow-hidden text-sm">
                  {/* 重要标签备注 */}
                  <div className="p-2.5">
                    <div className="overflow-hidden">
                      <table className="report-standard-table label-remark-example-table">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                            <th className="py-1.5 px-2 w-12 text-center whitespace-nowrap label-remark-example-masked-head">星号</th>
                            <th className="py-1.5 px-2 w-20 whitespace-nowrap label-remark-example-masked-head">列表</th>
                            <th className="py-1.5 px-2">标签备注内容</th>
                            <th className="py-1.5 px-2 w-16 text-center whitespace-nowrap label-remark-example-masked-head">筛选</th>
                            <th className="py-1.5 px-2 w-32 text-center whitespace-nowrap label-remark-example-masked-head">操作时间</th>
                            <th className="py-1.5 px-2 w-24 text-center whitespace-nowrap">操作</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="label-remark-example-row">
                            <td className="py-1.5 px-2 text-center">
                              <span className="report-example-masked">1</span>
                            </td>
                            <td className="py-1.5 px-2 whitespace-nowrap">
                              <span className="report-example-masked">重要备注</span>
                            </td>
                            <td className="py-1.5 px-2"><span className="report-example-key">备注：</span> 提款必须严查</td>
                            <td className="py-1.5 px-2 text-center whitespace-nowrap">
                              <span className="report-example-masked">敏感</span>
                            </td>
                            <td className="py-1.5 px-2 text-center font-mono whitespace-nowrap">
                              <span className="report-example-masked">2023-12-28 18:26</span>
                            </td>
                            <td className="py-1.5 px-2 text-center whitespace-nowrap">
                              <label className="label-remark-action label-remark-action--done">
                                <CheckSquare className="w-3.5 h-3.5 shrink-0" />
                                我已查看
                              </label>
                            </td>
                          </tr>
                          <tr className="label-remark-example-row">
                            <td className="py-1.5 px-2 text-center">
                              <span className="report-example-masked">2</span>
                            </td>
                            <td className="py-1.5 px-2 whitespace-nowrap">
                              <span className="report-example-masked">重要备注</span>
                            </td>
                            <td className="py-1.5 px-2"><span className="report-example-key">标签：</span> 可疑套利会员 </td>
                            <td className="py-1.5 px-2 text-center whitespace-nowrap">
                              <span className="report-example-masked">敏感</span>
                            </td>
                            <td className="py-1.5 px-2 text-center font-mono whitespace-nowrap">
                              <span className="report-example-masked">2023-12-28 18:26</span>
                            </td>
                            <td className="py-1.5 px-2 text-center whitespace-nowrap">
                              <label className="label-remark-action">
                                <Square className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                我已查看
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReportPanel>
  );
};
