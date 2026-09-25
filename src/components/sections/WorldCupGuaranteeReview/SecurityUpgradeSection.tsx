import React from "react";
import {
  Search,
  Copy,
  Smartphone,
  Coins,
  FileCheck,
  Users,
} from "lucide-react";
import {
  ReportMetricCard,
  ReportMetricGrid,
  ReportMetricHero,
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
  // 三大管控方向数据：查询类、修改类、资金类
  const securityCategories: SecurityCategoryData[] = [
    {
      key: "query_export",
      categoryName: "查询与导出类",
      categoryTag: "防数据外泄",
      direction: "方向一",
      themeColor: "blue",
      borderTopColor: "border-t-blue-700",
      tagBg: "bg-blue-50",
      tagText: "text-blue-900 border-blue-200",
      icon: Search,
      principle: "收回大批量导出权限，限制界面批量划选复制，全端加盖可溯源动态水印。",
      items: [
        {
          name: "报表数据导出",
          risk: "一键大批量导出客户名单与流水，易导致大面积脱库外泄",
          measure: "收回 98% 导出权限；单次限额 ≤ 1,000 条且须线上审批；文件强制嵌入员工数字盲水印",
          impact: "违规导出拦截率 100%，外泄精准溯源至个人",
        },
        {
          name: "批量模糊查询",
          risk: "全库通配符翻页爬取，批量提取会员信息沉淀为离线库",
          measure: "关闭无条件模糊检索，强制带精确条件（单号/账号）；API 限频 60 秒超 30 次自动阻断",
          impact: "单次拉取量下降 95%，异常爬取即时拦截",
        },
        {
          name: "界面划选复制",
          risk: "大面积划选、Ctrl+A 全选快捷键批量复制数据出境",
          measure: "代码级禁用批量划选与右键全选；仅保留单项复制按钮，60 秒连续复制超 10 次锁屏告警",
          impact: "批量提取完全阻断，单项复制全程审计",
        },
        {
          name: "手机拍照防拍",
          risk: "员工使用外部手机对准屏幕翻拍，试图规避系统软件审计",
          measure: "全业务后台页面覆盖半透明网格动态水印（工号 + 姓名 + 毫秒级时间戳 + 访问 IP）",
          impact: "全页面 100% 覆盖，翻拍照 10 分钟内准确定位责任人",
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
          "规范日常管理与系统操作安全，建立以操作风险为核心的[[三大管控方向]]：对[[查询类]]收紧导出并限制界面批量复制；对[[修改类]]实行双人背靠背审批与 24 小时提款冷却；对[[资金类]]强校验真实到账流水并按金额分级审批。用清晰规则与线上流程替代个人裁量，保障[[数据不外泄、身份不盗改、资金不流失]]。"
        )}
      </SummaryBox>

      {/* 核心指标概览 */}
      <div className="space-y-4">
        <ReportMetricHero
          title="系统安全管控矩阵"
          desc="查询限制 · 敏感修改双人审 · 资金流水强校验"
          metrics={
            <>
              <span className="text-3xl md:text-4xl text-slate-900 font-black">
                100<small className="ml-1 text-sm text-slate-700 font-bold font-sans">%</small>
              </span>
              <span className="text-2xl md:text-3xl text-blue-700 font-black">
                0 <small className="text-sm font-sans font-bold text-slate-800">违规泄密与资金私改</small>
              </span>
            </>
          }
        />

        <ReportMetricGrid columns={3}>
          <ReportMetricCard
            title="查询与导出类"
            value="98%"
            unit="导出权限收回"
            detail={highlightNumbers("限制批量划选复制，单次限额 ≤ 1,000 条并嵌入[[数字盲水印]]")}
          />
          <ReportMetricCard
            title="敏感信息修改类"
            value="100%"
            unit="双人背靠背"
            detail={highlightNumbers("手机/银行卡/密码重置[[零单人操作]]，经办复核两级审批")}
          />
          <ReportMetricCard
            title="资金与调账类"
            value="100%"
            unit="真实凭证核对"
            detail={highlightNumbers("加款补单[[必须绑定网关/链上真实流水号]]，无单不加")}
          />
        </ReportMetricGrid>
      </div>

      {/* 5.1 管控逻辑与三大方向全景 */}
      <div className="space-y-4">
        <ReportSectionHeader
          title="5.1 安全管控治理逻辑与三大方向"
          rightContent={
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 border border-slate-300">
              三大业务方向 · 逐层设防
            </span>
          }
        />

        {/* 3 个方向简明逻辑卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {securityCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                className={`bg-white border border-slate-200 p-4 border-t-4 ${cat.borderTopColor} flex flex-col justify-between space-y-3`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                    <span className={`text-xs px-2 py-0.5 font-bold border ${cat.tagBg} ${cat.tagText}`}>
                      {cat.categoryTag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-700 shrink-0" />
                    <span>{cat.categoryName}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.principle}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-xs font-mono font-bold text-slate-700 flex items-center justify-between">
                  <span>管控场景数</span>
                  <span className="text-slate-900">4 项重点机制</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5.2 三大管控方向落地细则表（4列宽屏设计，文字绝不折断挤压） */}
      <div className="space-y-6">
        <ReportSectionHeader
          title="5.2 三大方向具体管控规范全览"
          rightContent={
            <span className="text-xs font-mono text-slate-500">
              共 12 项关键操作防护细则
            </span>
          }
        />

        {/* 三个模块逐一展开，每个模块配清晰表格，4列宽敞布局 */}
        <div className="space-y-6">
          {securityCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.key} className="border border-slate-300 bg-white p-4 sm:p-5 border-t-2 border-t-slate-900 space-y-3">
                {/* 模块标题与核心原则 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-slate-900 text-white rounded flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                        <span>【{cat.direction}】{cat.categoryName}</span>
                        <span className={`text-xs px-2 py-0.5 font-bold border ${cat.tagBg} ${cat.tagText}`}>
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
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
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

      {/* 5.3 核心管控机制提炼（剪贴板受控 + 双人审批 + 真实流水） */}
      <div className="space-y-4">
        <ReportSectionHeader
          title="5.3 重点防护机制简述"
          rightContent={
            <span className="text-xs font-mono text-slate-500">
              三项关键落地支撑
            </span>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 机制 1 */}
          <div className="bg-white border border-slate-200 p-4 border-l-4 border-l-blue-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Copy className="w-4 h-4 text-blue-700 shrink-0" />
              <span>剪贴板受控与防划选</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              敏感列表页代码级禁用鼠标批量划词与 Ctrl+A 全选；仅保留单项复制按钮，60秒内复制超10次自动锁屏并向内控告警，彻底切断批量拖库。
            </p>
          </div>

          {/* 机制 2 */}
          <div className="bg-white border border-slate-200 p-4 border-l-4 border-l-indigo-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Users className="w-4 h-4 text-indigo-700 shrink-0" />
              <span>双人背靠背审批 (Maker-Checker)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              改绑手机、重置密码、修改银行卡等操作，必须经办人与复核人双人独立核身并输入动态 MFA 口令；生效后强制触发 24 小时提款冷却保护。
            </p>
          </div>

          {/* 机制 3 */}
          <div className="bg-white border border-slate-200 p-4 border-l-4 border-l-amber-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <FileCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>真实网关流水校验</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              人工上下分与掉单补录必须直连三方网关或区块链浏览器核对真实 TXID 到账记录；严禁凭静态截图补单，每日凌晨自动逐笔账实比对。
            </p>
          </div>
        </div>
      </div>

      {/* 5.4 典型拦截案例复盘 (简明3步，直截了当) */}
      <div className="space-y-4">
        <ReportSectionHeader
          title="5.4 典型违规拦截案例复盘"
          rightContent={
            <span className="text-xs font-mono text-slate-500">
              实战检验效果
            </span>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 案例 1 */}
          <div className="border border-slate-200 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                【查询类】批量划选复制被阻断
              </span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 bg-blue-50 text-blue-900 border border-blue-200">
                数据防外泄
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed font-normal">
              <p><strong>过程：</strong>某账号在非工作时间尝试通过全选快捷键大面积复制 500 名会员数据。</p>
              <p><strong>拦截：</strong>前端防划选限制直接阻断批量选择；高频单条尝试触发 60 秒频次限制，系统锁定账号。</p>
              <p className="text-blue-900 font-medium"><strong>结果：</strong>内控及时查实违规并停权，未造成任何数据外泄。</p>
            </div>
          </div>

          {/* 案例 2 */}
          <div className="border border-slate-200 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                【修改类】私改高额会员手机被阻断
              </span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 bg-indigo-50 text-indigo-900 border border-indigo-200">
                身份防篡改
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed font-normal">
              <p><strong>过程：</strong>操作员试图在后台私自修改余额为 150,000 USDT 会员的绑定手机号。</p>
              <p><strong>拦截：</strong>系统已取消单人修改入口，强制要求线上工单与双人 MFA 验证，操作员无法提供凭据。</p>
              <p className="text-indigo-900 font-medium"><strong>结果：</strong>触发高危预警并停用账号，避免了 150,000 USDT 潜在盗刷。</p>
            </div>
          </div>

          {/* 案例 3 */}
          <div className="border border-slate-200 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                【资金类】伪造截图骗补单被阻断
              </span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 bg-amber-50 text-amber-900 border border-amber-200">
                资金防流失
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed font-normal">
              <p><strong>过程：</strong>外部人员以客户掉单为由上传伪造网银转账截图，申请人工补录 20,000 USDT。</p>
              <p><strong>拦截：</strong>资金系统强制校验网关真实 TXID 到账记录，系统校验判定单号不存在，直接拦截工单。</p>
              <p className="text-amber-900 font-medium"><strong>结果：</strong>生成欺诈警报并冻结关联钱包，平台资金零损失。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityUpgradeSection;
