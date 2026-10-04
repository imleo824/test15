import React from "react";
import {
  Database,
  Search,
  Smartphone,
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
  categoryTag: string;
  direction: string;
  themeColor: "blue" | "slate";
  icon: React.ElementType;
  coreIssue: string;
  principle: string;
  items: {
    name: string;
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
      categoryTag: "防散落遗漏",
      direction: "场景一",
      themeColor: "slate",
      icon: Database,
      coreIssue: "敏感信息散落在多个模块中，统一维护与收口难度大，极易产生数据外露与更新遗漏。",
      principle: "建立敏感信息全景字典与统一管理中台，底层统一脱敏加密，前端接口单一收口，消除维护死角。",
      items: [
        {
          name: "多模块分散维护",
          risk: "手机、银行、邮箱、姓名、微信、支付宝、开户名、标签、输赢、等级、代理等敏感字段散落在各后台系统及历史旧页面中，缺乏明确的监管定义与收口机制，具有极高外泄风险。",
          measure: "明确敏感字段定义与收口范围，清理散落在各后台旧页面的展示入口，非必要展示一律关闭；必须展示的实施[[全掩码脱敏]]，敏感字眼统一进行脱敏与[[内部代号替换]]。",
          impact: "展示入口全面收拢，默认脱敏率 100%",
        },
        {
          name: "敏感信息更新脱节",
          risk: "后台涉及多个子系统（如财务中台等），若系统间更新脱节，将导致数据脱敏与访问控制改造未能联动生效，遗留安全盲区。",
          measure: "凡涉及敏感数据脱敏、访问控制等安全功能改造，必须覆盖全平台所有业务系统与独立子后台，严格执行[[全平台统一上线]]，彻底消除版本差。",
          impact: "100% 覆盖全平台独立系统，消除版本差",
        },
      ],
    },
    {
      key: "sensitive_ops",
      categoryName: "敏感异常操作",
      categoryTag: "按工种严控",
      direction: "场景二",
      themeColor: "slate",
      icon: Search,
      coreIssue: "复制、截屏、导出、批量查询等高危操作权限泛滥，未按实际工种需求严格隔离与管控。",
      principle: "严格按工种界定高危操作必要性，基础岗位关闭批量导出与复制，全端加盖动态数字盲水印。",
      items: [
        {
          name: "报表批量导出",
          risk: "一键大批量导出客户名单与流水，易导致大面积脱库外泄；多数基础工种日常无需导出权限。",
          measure: "对全量导出权限执行严格重审，有权限人员须[[重新单独申请]]并严格核验实际使用场景，非必要岗位一律关闭。",
          impact: "非必要工种关闭，外泄可秒级精准溯源",
        },
        {
          name: "高频与批量查询",
          risk: "通过短时间内高频调阅、连续大批量翻页或异常时段调阅等行为批量提取敏感数据，安全预警缺失。",
          measure: "设定异常调阅预警规则，对短时间高频调阅、连续批量翻页或异常时段调阅触发系统告警，并执行[[强制会话中断]]。",
          impact: "高危异常查询秒级熔断阻断",
        },
        {
          name: "界面划选与复制",
          risk: "大面积划选、Ctrl+A 全选快捷键批量复制数据，规避导出审计。",
          measure: "代码级[[禁用批量划选与右键全选]]，对高频连续复制行为实施即时预警与全程审计。",
          impact: "批量提取完全阻断，单项复制全程审计",
        },
      ],
    },
    {
      key: "sensitive_modify",
      categoryName: "敏感信息修改",
      categoryTag: "防单人作案",
      direction: "场景三",
      themeColor: "slate",
      icon: Smartphone,
      coreIssue: "有权限的人可以单人完成修改，缺乏背靠背交叉核验，单点内部作案与私自改号风险巨大。",
      principle: "取消所有单人后台直接修改入口，实行经办与复核双人背靠背审批与 24 小时提款冷却保护。",
      items: [
        {
          name: "手机号",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私改会员安全手机以接管账号资金。",
          measure: "取消单人直接修改，必须提交线上工单走[[双人背靠背审批]]，核验通过后生效并强制执行[[24小时提款冷却]]。",
          impact: "杜绝单人私下改号，保护账户资产安全",
        },
        {
          name: "邮箱",
          risk: "有权限的单人即可修改成功，缺乏背靠背交叉核验，易私改会员密保邮箱以盗取验证码并篡改账户资金资料。",
          measure: "严禁单人直接变更，必须提交线上工单走[[双人背靠背审批]]，核验通过后强制执行[[24小时提款冷却]]。",
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
          measure: "必须提交线上工单走[[双人背靠背审批]]，经严格交叉核验后生效，并强制执行[[24小时提款冷却]]。",
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
    <div id="section-security-upgrade" className="flex flex-col gap-[var(--report-panel-gap)]">
      {/* 3.2 敏感操作限制 章节核心导语 */}
      <SummaryBox variant="module">
        <div className="space-y-2.5">
          <p className="text-sm text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "针对底层安全机制运作痛点，全面落实[[敏感操作限制]]，严格聚焦 **敏感信息维护**、**敏感异常操作**、**敏感信息修改** 三大核心场景推进加固改造，以系统硬规则约束一线裁量，筑牢底层安全合规防线。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 核心三大场景摘要说明卡片（3 列网格） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {/* 场景 1：敏感信息维护 */}
        <div className="bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-3.5 h-full">
          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
            <span className="w-5 h-5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感信息维护</h4>
            <ReportBadge tone="slate" className="text-xs font-mono ml-auto">
              统一展示收口
            </ReportBadge>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-2.5 flex-1">
            <p>
              <strong className="text-slate-950 font-bold">现状痛点：</strong>
              {highlightNumbers("敏感信息分散暴露在过多模块中，导致集中维护与收口困难，存在信息外露与遗漏风险。")}
            </p>
            <p>
              <strong className="text-slate-950 font-bold">应对措施：</strong>
              {highlightNumbers("全面排查展示敏感信息的模块，彻底去除无必要的展示页面，实现[[集中统一收口]]。")}
            </p>
          </div>
        </div>

        {/* 场景 2：敏感异常操作 */}
        <div className="bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-3.5 h-full">
          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
            <span className="w-5 h-5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感异常操作</h4>
            <ReportBadge tone="slate" className="text-xs font-mono ml-auto">
              操作控权收紧
            </ReportBadge>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-2.5 flex-1">
            <p>
              <strong className="text-slate-950 font-bold">现状痛点：</strong>
              {highlightNumbers("复制、截屏、导出、批量查询等高危操作权限泛滥，未按实际工种必要性进行严格控制。")}
            </p>
            <p>
              <strong className="text-slate-950 font-bold">应对措施：</strong>
              {highlightNumbers("对敏感信息[[禁止复制]]；对批量查询、数据导出按工种[[严格控制权限]]。")}
            </p>
          </div>
        </div>

        {/* 场景 3：敏感信息修改 */}
        <div className="bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-3.5 h-full">
          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
            <span className="w-5 h-5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感信息修改</h4>
            <ReportBadge tone="slate" className="text-xs font-mono ml-auto">
              双人背靠背审批
            </ReportBadge>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed font-normal space-y-2.5 flex-1">
            <p>
              <strong className="text-slate-950 font-bold">现状痛点：</strong>
              {highlightNumbers("有权限的人可以单人完成修改，缺乏背靠背交叉核验，风险较大且易发生单点内部作案。")}
            </p>
            <p>
              <strong className="text-slate-950 font-bold">应对措施：</strong>
              {highlightNumbers("取消单人直接修改入口，全面改由经办与复核[[双人背靠背审批]]，关键修改强制绑定 24小时[[提款冷却保护]]。")}
            </p>
          </div>
        </div>
      </div>

      {/* 三大核心场景落地管控规范全览 (落地细则表) */}
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-8">
          {securityCategories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.key}
                className="bg-white space-y-4"
              >
                {/* 对应模块的标题栏 */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-200">
                  <div className="w-7 h-7 bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
                    <span>
                      【{cat.direction}】{cat.categoryName}
                    </span>
                    <ReportBadge
                      tone={cat.themeColor}
                      className="text-xs font-mono"
                    >
                      {cat.categoryTag}
                    </ReportBadge>
                  </h4>
                </div>

                {/* 3 列规范明细表：场景 / 潜在隐患 / 升级管控规范 */}
                <ReportTableFrame>
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <th className="py-2.5 px-3 w-[22%]">防护场景</th>
                        <th className="py-2.5 px-3 w-[38%]">潜在隐患与风险</th>
                        <th className="py-2.5 px-3 w-[40%]">升级管控规范</th>
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
    </div>
  );
};

export default SecurityUpgradeSection;
