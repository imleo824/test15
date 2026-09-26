import React from "react";
import {
  Search,
  Smartphone,
  Coins,
} from "lucide-react";
import {
  ReportMetricCard,
  ReportMetricGrid,
  ReportSectionHeader,
  ReportTableFrame,
} from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";

// 规范简洁的分类条目数据结构
interface SecurityCategoryData {
  key: string;
  categoryName: string;
  categoryTag: string;
  direction: string;
  themeColor: string;
  borderTopColor: string;
  tagBg: string;
  tagText: string;
  icon: React.ElementType;
  principle: string;
  items: {
    name: string;
    risk: string;
    measure: string;
    impact: string;
  }[];
}

export const SecurityUpgradeSection: React.FC = () => {
  // 三大管控方向数据：敏感操作类（复制/截图/导出/高频查询）、敏感信息修改类、资金与调账类
  const securityCategories: SecurityCategoryData[] = [
    {
      key: "sensitive_ops",
      categoryName: "敏感操作类",
      categoryTag: "防数据外泄",
      direction: "方向一",
      themeColor: "blue",
      borderTopColor: "border-t-blue-700",
      tagBg: "bg-blue-50",
      tagText: "text-blue-900 border-blue-200",
      icon: Search,
      principle: "严控复制、截图、导出与高频查询等高危操作权限，全端加盖可溯源动态水印。",
      items: [
        {
          name: "报表批量导出",
          risk: "一键大批量导出客户名单与流水，易导致大面积脱库外泄",
          measure: "收回 98% 导出权限；单次限额 ≤ 1,000 条且须线上审批；文件强制嵌入员工数字盲水印",
          impact: "违规导出拦截率 100%，外泄精准溯源至个人",
        },
        {
          name: "高频与批量查询",
          risk: "全库通配符翻页爬取或高频刷单，批量提取会员信息沉淀为离线库",
          measure: "关闭无条件模糊检索，强制带精确条件（单号/账号）；API 限频 60 秒超 30 次自动阻断",
          impact: "单次拉取量下降 95%，异常爬取即时拦截",
        },
        {
          name: "界面划选与复制",
          risk: "大面积划选、Ctrl+A 全选快捷键批量复制数据，规避导出审计",
          measure: "代码级禁用批量划选与右键全选；仅保留单项复制按钮，60 秒连续复制超 10 次锁屏告警",
          impact: "批量提取完全阻断，单项复制全程审计",
        },
        {
          name: "系统截图与防拍",
          risk: "截屏工具抓取或外部手机翻拍屏幕，试图获取敏感信息规避系统审计",
          measure: "敏感页面屏蔽截屏录屏；全业务后台页面覆盖半透明网格动态水印（工号 + 姓名 + 毫秒级时间戳 + 访问 IP）",
          impact: "截屏防范全覆盖，翻拍照 10 分钟内准确定位责任人",
        },
      ],
    },
    {
      key: "sensitive_modify",
      categoryName: "敏感信息修改类",
      categoryTag: "防身份盗改",
      direction: "方向二",
      themeColor: "indigo",
      borderTopColor: "border-t-indigo-700",
      tagBg: "bg-indigo-50",
      tagText: "text-indigo-900 border-indigo-200",
      icon: Smartphone,
      principle: "取消所有单人后台直接修改入口，实行双人背靠背审批与 24 小时提款冷却保护。",
      items: [
        {
          name: "手机号更换 / 解绑",
          risk: "私改会员安全手机，篡改双因子验证渠道以接管账号资金",
          measure: "严格核验原手机或人脸凭证；线上工单经办与复核双人核验，修改后冻结提款 24 小时",
          impact: "杜绝私下改号，保护账户资产安全",
        },
        {
          name: "真实姓名更正",
          risk: "通过改名套取多重活动新人首存与多重身份红利",
          measure: "严禁常规姓名变更；同音错字更正须直连权威实名接口核验一致，经风控主管特批",
          impact: "彻底阻断借改名套利的黑产行为",
        },
        {
          name: "支付/登录密码重置",
          risk: "人工客服私自生成重置密码，越权接管高价值会员账号",
          measure: "严禁人工生成或知悉明文密码；系统全自动鉴权，仅下发一次性高熵链接至注册邮箱",
          impact: "密码重置人工零接触，规避内部作案",
        },
        {
          name: "提款卡 / 钱包换绑",
          risk: "非法篡改收款卡号或加密地址，将提现资金转移至外部钱包",
          measure: "双人背靠背复核 + 历史流水比对 + 换绑后强制 24 小时提款冷却期 + 电话回访确认",
          impact: "篡改收款渠道拦截率 100%",
        },
      ],
    },
    {
      key: "fund_operation",
      categoryName: "资金与调账类",
      categoryTag: "防资金流失",
      direction: "方向三",
      themeColor: "amber",
      borderTopColor: "border-t-amber-600",
      tagBg: "bg-amber-50",
      tagText: "text-amber-900 border-amber-200",
      icon: Coins,
      principle: "关闭一线无凭证调账权限，强校验网关真实到账流水，按金额分级梯次会签。",
      items: [
        {
          name: "人工加款 / 资金上分",
          risk: "利用特权账号私自手工调增余额，直接套现造成资金亏空",
          measure: "关闭一线直接加款入口；必须绑定三方网关真实入账单号；按金额阶梯审批（万元以上财务总监终审）",
          impact: "无真实网关凭证一律不可加款",
        },
        {
          name: "充值掉单手工补录",
          risk: "仅凭伪造转账截图骗取客服补单，产生虚假充值",
          measure: "严禁凭静态截图补单；系统直连三方通道 API 校验订单状态与链上哈希，确认到账后方可放行",
          impact: "虚假截图欺诈补单 100% 拦截",
        },
        {
          name: "活动红利手工补发",
          risk: "私下以客诉或补偿名义滥发红利，洗水提现",
          measure: "严格关联标准活动规则与工单单号；手工补发红利自动绑定有效流水要求与提款风险复核标签",
          impact: "避免红利无序派发，防套利即时提现",
        },
        {
          name: "资金异常扣减 / 下分",
          risk: "擅自调减正常会员资金引发群体客诉或账目混乱",
          measure: "仅限套利违规成立或充值撤回；必须附带风控判定书与注单凭据，风控与财务双岗联核",
          impact: "扣减金额全额留痕，有据可依",
        },
      ],
    },
  ];

  return (
    <div id="section-security-upgrade" className="space-y-8">
      {/* 5.0 章节核心导语 */}
      <SummaryBox variant="chapter">
        {highlightNumbers(
          "规范日常管理与系统操作安全，建立以操作风险为核心的[[三大管控方向]]：对[[敏感操作类]]（涵盖复制、截图、导出、高频查询等敏感高危操作）收紧导出、限制复制截屏并全端加盖水印；对[[修改类]]实行双人背靠背审批与 24 小时提款冷却；对[[资金类]]强校验真实到账流水并按金额分级审批。用清晰规则与线上流程替代个人裁量，保障[[数据不外泄、身份不盗改、资金不流失]]。"
        )}
      </SummaryBox>

      {/* 核心三大指标看板 */}
      <ReportMetricGrid columns={3}>
        <ReportMetricCard
          title="敏感操作类"
          value="98%"
          unit="导出/高频限制"
          detail={highlightNumbers(
            "收紧[[复制、截图、导出、高频查询]]等高危操作，单次限额 ≤ 1,000 条并全端加盖[[动态数字盲水印]]"
          )}
        />
        <ReportMetricCard
          title="敏感信息修改类"
          value="100%"
          unit="双人背靠背"
          detail={highlightNumbers(
            "手机/银行卡/密码重置[[零单人操作]]，经办复核两级审批"
          )}
        />
        <ReportMetricCard
          title="资金与调账类"
          value="100%"
          unit="真实凭证核对"
          detail={highlightNumbers(
            "加款补单[[必须绑定网关/链上真实流水号]]，无单不加"
          )}
        />
      </ReportMetricGrid>

      {/* 具体管控规范全览 (三大方向落地细则表) */}
      <div className="space-y-6">
        <ReportSectionHeader
          title="5.1 具体管控规范明细"
          rightContent={
            <span className="text-xs font-mono text-slate-500">
              共 12 项关键操作防护细则
            </span>
          }
        />

        <div className="space-y-6">
          {securityCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                className="border border-slate-300 bg-white p-4 sm:p-5 border-t-2 border-t-slate-900 space-y-3"
              >
                {/* 模块标题与核心原则 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-slate-900 text-white rounded flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                        <span>
                          【{cat.direction}】{cat.categoryName}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 font-bold border ${cat.tagBg} ${cat.tagText}`}
                        >
                          {cat.categoryTag}
                        </span>
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 sm:max-w-md sm:text-right font-normal">
                    {cat.principle}
                  </p>
                </div>

                {/* 4 列规范明细表：场景 / 潜在隐患 / 升级管控规范 / 落地成效 */}
                <ReportTableFrame>
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-900 bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider">
                        <th className="py-2.5 px-3 w-[18%]">业务场景</th>
                        <th className="py-2.5 px-3 w-[25%]">潜在隐患与风险</th>
                        <th className="py-2.5 px-3 w-[37%]">升级管控规范</th>
                        <th className="py-2.5 px-3 w-[20%]">管控成效指标</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {cat.items.map((item, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="py-2.5 px-3 font-bold text-slate-900 align-top">
                            {item.name}
                          </td>
                          <td className="py-2.5 px-3 text-slate-600 text-xs leading-relaxed align-top">
                            {item.risk}
                          </td>
                          <td className="py-2.5 px-3 text-slate-800 text-xs leading-relaxed align-top">
                            {highlightNumbers(item.measure)}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-slate-900 text-xs leading-relaxed align-top">
                            <span className="inline-block px-1.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-800">
                              {item.impact}
                            </span>
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
