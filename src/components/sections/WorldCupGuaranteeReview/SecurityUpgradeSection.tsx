import React from "react";
import {
  Database,
  Search,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import {
  ReportBadge,
  ReportTableFrame,
} from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";

// 四大安全管控方向数据结构
interface SecurityCategoryData {
  key: string;
  categoryName: string;
  status: string;
  statusTone: "blue" | "slate" | "green" | "amber" | "red" | "indigo";
  categoryTag: string;
  themeColor: "blue" | "slate";
  icon: React.ElementType;
  painPoint: string;
  solution: string;
  items: {
    name: string;
    status?: string;
    statusTone?: "blue" | "slate" | "green" | "amber" | "red" | "indigo";
    risk: string;
    measure: string;
    impact: string;
  }[];
}

export const SecurityUpgradeSection: React.FC = () => {
  // 三大核心管控方向：敏感信息维护、敏感异常操作、敏感信息修改
  const securityCategories: SecurityCategoryData[] = [
    {
      key: "sensitive_maintenance",
      categoryName: "敏感信息维护",
      status: "可优化",
      statusTone: "blue",
      categoryTag: "防散落遗漏",
      themeColor: "slate",
      icon: Database,
      painPoint: "敏感信息分散暴露在过多模块中，导致集中维护、更新、授权等困难，存在信息外露与遗漏风险。",
      solution: "全面排查展示敏感信息的模块，彻底去除无必要的展示页面，实现[[集中统一收口]]。",
      items: [
        {
          name: "多模块分散维护",
          risk: "手机、银行、邮箱、姓名、微信、支付宝、开户名、标签、输赢、等级、代理等敏感字段散落在各后台系统及历史旧页面中，缺乏明确的监管定义与收口机制，具有极高外泄风险。",
          measure: "明确敏感字段定义与收口范围，[[清理散落在各后台旧页面的展示入口]]，非必要展示一律关闭；必须展示的实施[[全掩码脱敏]]；平台商户等敏感字眼统一进行脱敏与[[内部代号替换]]。",
          impact: "敏感信息展示入口全面清理和收拢",
        },
        {
          name: "敏感信息更新脱节",
          risk: "后台涉及多个子系统（如财务中台等），若系统间更新脱节，将导致数据脱敏与访问控制改造未能联动生效，遗留安全盲区。",
          measure: "凡涉及敏感数据脱敏、访问控制等安全功能改造，必须覆盖全平台所有业务系统与独立子后台，严格执行[[全平台统一上线]]，彻底消除版本差。",
          impact: "覆盖全平台独立系统，消除版本差",
        },
      ],
    },
    {
      key: "sensitive_ops",
      categoryName: "敏感异常操作",
      status: "待支持",
      statusTone: "amber",
      categoryTag: "按工种严控",
      themeColor: "slate",
      icon: Search,
      painPoint: "复制、截屏、导出、批量查询等高危操作权限泛滥，未按实际工种必要性进行严格控制。",
      solution: "对敏感信息[[禁止复制]]；对批量查询、数据导出按工种[[严格控制权限]]。",
      items: [
        {
          name: "报表批量导出",
          status: "可优化",
          statusTone: "blue",
          risk: "一键大批量导出客户名单与流水，易导致大面积脱库外泄；多数基础工种日常无需导出权限。",
          measure: "所有权限梳理，有权限的需要[[重新单独申请]]，说明实际使用场景。",
          impact: "非必要工种关闭，外泄可秒级精准溯源",
        },
        {
          name: "高频与批量查询",
          status: "可优化",
          statusTone: "blue",
          risk: "通过短时间内高频调阅、连续大批量翻页或异常时段调阅等行为批量提取敏感数据，安全预警缺失。",
          measure: "设定异常调阅预警规则，对短时间高频调阅、连续批量翻页或异常时段调阅触发系统告警，并执行[[强制会话中断]]。",
          impact: "高危异常查询秒级熔断阻断",
        },
        {
          name: "界面划选与复制",
          status: "待支持",
          statusTone: "amber",
          risk: "大面积划选、Ctrl+A 全选快捷键批量复制数据，规避导出审计。",
          measure: "代码级[[禁用批量划选与右键全选]]，对高频连续复制行为实施即时预警与全程审计。",
          impact: "批量提取完全阻断，单项复制全程审计",
        },
      ],
    },
    {
      key: "sensitive_modify",
      categoryName: "敏感信息修改",
      status: "待支持",
      statusTone: "amber",
      categoryTag: "防单人作案",
      themeColor: "slate",
      icon: Smartphone,
      painPoint: "有权限的人可以单人完成修改，缺乏背靠背交叉核验，风险较大且易发生单点内部作案。",
      solution: "取消单人直接修改入口，全面改由经办与复核[[双人背靠背审批]]，关键修改强制绑定 xx 小时[[提款冷却保护]]。",
      items: [
        {
          name: "手机号",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私改会员安全手机以接管账号资金。",
          measure: "取消单人直接修改，必须提交线上工单走[[双人背靠背审批]]，核验通过后生效并强制执行[[xx 小时提款冷却]]。",
          impact: "杜绝单人私下改号，保护账户资产安全",
        },
        {
          name: "邮箱",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私改会员密保邮箱以盗取验证码并篡改账户资金资料。",
          measure: "严禁单人直接变更，必须提交线上工单走[[双人背靠背审批]]，核验通过后强制执行[[xx 小时提款冷却]]。",
          impact: "杜绝私改邮箱接管账号，筑牢密保防线",
        },
        {
          name: "姓名",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易通过改名套取多重活动新人首存与多重身份红利。",
          measure: "严禁常规单人变更，必须提交线上审批流，经实名接口核验及主管特批走[[双人背靠背审批]]生效。",
          impact: "彻底阻断借改名套利的黑产行为",
        },
        {
          name: "密码",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易由人工客服私自生成重置密码以越权接管高价值会员账号。",
          measure: "严禁人工单人重置，必须走系统自动鉴权或线上严格审批流，全面落实[[人工零接触]]。",
          impact: "密码重置人工零接触，规避内部作案",
        },
        {
          name: "提款账户",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私改会员绑定提款卡或虚拟币地址以盗刷转移账户资产。",
          measure: "必须提交线上工单走[[双人背靠背审批]]，经严格交叉核验后生效，并强制执行[[xx 小时提款冷却]]。",
          impact: "杜绝单人私改提款渠道，保障出款资产安全",
        },
        {
          name: "黑白名单",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私自将高危违规账号拉白放行或将正常用户拉黑，存在人情放行与资金损耗隐患。",
          measure: "必须提交线上工单走[[双人背靠背审批]]，严禁单人直接调整，实行[[全流程留痕审计]]。",
          impact: "杜绝单人私自调整名单，防止违规拉白套利",
        },
      ],
    },
  ];

  return (
    <div id="section-security-upgrade" className="flex flex-col gap-6">
      {/* 3.2 敏感操作限制 章节核心导语 */}
      <SummaryBox variant="module">
        <div className="space-y-2.5">
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "全面落实[[敏感操作限制]]，重点围绕 **敏感信息维护**、**敏感异常操作**、**敏感信息修改** 三大场景推进管控加固，阻断信息外泄与内部越权。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 案例说明 */}
      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 flex-wrap">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-bold text-slate-950 text-sm sm:text-base">稽查案例说明</span>
          <ReportBadge tone="amber" className="text-xs font-mono font-bold">
            溯源
          </ReportBadge>
        </div>

        <div className="bg-white p-4 sm:p-5 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {/* Step 1 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-950">提取关联数据</strong>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pt-1.5">
                  {highlightNumbers(
                    "投注管理-筛选足球-投注金额 5000元 以上的会员，将这一批账号在后台使用关联关系查询功能，将该功能明文显示的数据[[手动复制并粘贴至 Excel 表格中]]进行筛选。"
                  )}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">2</span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-950">核对敏感信息</strong>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pt-1.5">
                  {highlightNumbers(
                    "对照筛选后的 Excel 数据，手动逐个复制账号跨模块至会员管理等页面，批量调阅并补全[[用户姓名、手机号、出生日期、所在地、银行卡号等核心隐私信息]]至表格。"
                  )}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-950">传输与清理</strong>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pt-1.5">
                  {highlightNumbers(
                    "将最终的表格数据[[截图发送至冒充公司人员私人飞机号]]，发送完毕后及时在本地删除原始数据与记录，企图规避稽查留痕。"
                  )}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 bg-rose-50/40 border border-rose-200/80 space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 pb-1 border-b border-rose-200">
                  <span className="w-5 h-5 bg-rose-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">4</span>
                  <strong className="text-xs sm:text-sm font-bold text-rose-950">开盒与黑产拉拢</strong>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal pt-1.5">
                  {highlightNumbers(
                    "外部黑灰产团伙拿到基础资料后，[[进一步通过「开盒网站、非法社工库」补全用户身份信息]]，实现对用户的精准定位，[[定向拉拢至其他外部娱乐平台]]，严重损害平台经营安全。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 三大核心场景落地管控规范全览 (落地细则与痛点应对) */}
      <div className="space-y-6 sm:space-y-8">
        {securityCategories.map((cat) => {
          const Icon = cat.icon;

          return (
            <div
              key={cat.key}
              className="bg-white space-y-4"
            >
              {/* 对应模块的标题栏 */}
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-200 flex-wrap">
                <div className="w-7 h-7 bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2 flex-wrap">
                  <span>{cat.categoryName}</span>
                  <ReportBadge
                    tone={cat.themeColor}
                    className="text-xs font-mono font-normal"
                  >
                    {cat.categoryTag}
                  </ReportBadge>
                </h4>
              </div>

              {/* 现状痛点 & 应对措施 说明栏 */}
              <div className="bg-slate-50 border border-slate-200 p-3.5 sm:p-4 text-sm text-slate-700 leading-relaxed space-y-1.5">
                <p>
                  <strong className="text-slate-950 font-bold">现状痛点：</strong>
                  {highlightNumbers(cat.painPoint)}
                </p>
                <p>
                  <strong className="text-slate-950 font-bold">应对措施：</strong>
                  {highlightNumbers(cat.solution)}
                </p>
              </div>

              {/* 4 列规范明细表：场景 / 支持状态 / 潜在隐患 / 升级管控规范 */}
              <ReportTableFrame>
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      <th className="py-2.5 px-3 w-[18%]">防护场景</th>
                      <th className="py-2.5 px-3 w-[12%]">支持状态</th>
                      <th className="py-2.5 px-3 w-[34%]">潜在隐患与风险</th>
                      <th className="py-2.5 px-3 w-[36%]">升级管控规范</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {cat.items.map((item, idx) => (
                      <tr
                        key={idx}
                      >
                        <td className="py-3 px-3 font-bold text-slate-900 align-top text-sm">
                          {item.name}
                        </td>
                        <td className="py-3 px-3 align-top">
                          <ReportBadge
                            tone={item.statusTone || cat.statusTone}
                            className="text-xs font-mono font-bold"
                          >
                            {item.status || cat.status}
                          </ReportBadge>
                        </td>
                        <td className="py-3 px-3 text-slate-600 text-sm leading-relaxed align-top">
                          {highlightNumbers(item.risk)}
                        </td>
                        <td className="py-3 px-3 text-slate-800 text-sm leading-relaxed align-top">
                          {highlightNumbers(item.measure)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ReportTableFrame>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecurityUpgradeSection;
