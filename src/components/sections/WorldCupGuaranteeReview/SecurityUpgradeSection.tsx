import React from "react";
import {
  Database,
  Search,
  Smartphone,
  ShieldCheck,
  Lock,
  Clock,
  FileCheck2,
  Layers,
} from "lucide-react";
import {
  ReportSubsectionHeader,
  ReportTableFrame,
} from "../../ReportSections";
import { highlightNumbers, SummaryBox } from "./utils";

// 四大安全管控方向数据结构
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
  // 四大核心管控方向：敏感信息维护、敏感异常操作、敏感信息修改、敏感权限结构
  const securityCategories: SecurityCategoryData[] = [
    {
      key: "sensitive_maintenance",
      categoryName: "敏感信息维护",
      categoryTag: "防散落遗漏",
      direction: "场景一",
      themeColor: "emerald",
      borderTopColor: "border-t-emerald-600",
      tagBg: "bg-emerald-50",
      tagText: "text-emerald-900 border-emerald-200",
      icon: Database,
      coreIssue: "敏感信息散落在太多的模块内，导致收口和更新、维护都很麻烦，且还存在漏的问题。",
      principle: "建立敏感信息全景字典与统一管理中台，底层统一脱敏加密，前端接口单一收口，消除维护死角。",
      items: [
        {
          name: "多模块分散维护",
          risk: "手机号、姓名、银行卡、加密钱包、IP 等敏感字段散落在数十个业务子模块，各模块独立更新维护导致遗漏与口径脱节",
          measure: "建立统一的【敏感信息数据字典与中台收口中心】，所有业务模块禁止直连底库，统一调用中台脱敏接口",
          impact: "100% 收拢至统一字典，消除分散维护死角",
        },
        {
          name: "敏感信息更新脱节",
          risk: "某一模块更新了脱敏规则或字段遮蔽逻辑，其他遗留模块未能联动同步，导致敏感信息在老旧界面裸露",
          measure: "实行【一处配置、全端联动生效】机制，中台规则变更秒级推送到所有微服务与前端渲染组件",
          impact: "规则同步延迟由数天缩短至秒级，杜绝更新遗漏",
        },
        {
          name: "未纳管接口与盲区",
          risk: "新增临时报表或第三方插件未走标准合规审查，无意中暴露出明文敏感信息",
          measure: "部署【数据资产自动扫描探针】，每日定时全量巡检所有后台 API 返回体，识别未脱敏明文字段并即时阻断告警",
          impact: "未受控接口发现率 100%，建立全景资产台账",
        },
      ],
    },
    {
      key: "sensitive_ops",
      categoryName: "敏感异常操作",
      categoryTag: "按工种严控",
      direction: "场景二",
      themeColor: "blue",
      borderTopColor: "border-t-blue-700",
      tagBg: "bg-blue-50",
      tagText: "text-blue-900 border-blue-200",
      icon: Search,
      coreIssue: "复制、截屏、导出、批量查询等高危操作权限泛滥，未按实际工种需求严格隔离与管控。",
      principle: "严格按工种界定高危操作必要性，98% 基础岗位关闭批量导出与复制，全端加盖动态数字盲水印。",
      items: [
        {
          name: "报表批量导出",
          risk: "一键大批量导出客户名单与流水，易导致大面积脱库外泄；多数基础工种日常根本无需导出权限",
          measure: "收回 98% 基础工种导出权限；仅少数合规岗位限额导出（≤1,000条/次且须线上审批）；强制嵌入员工数字盲水印",
          impact: "非必要工种 100% 关闭，外泄可秒级精准溯源",
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
          measure: "敏感页面屏蔽截屏录屏；全后台页面强制覆盖半透明网格动态水印（工号 + 姓名 + 秒级时间戳 + 访问 IP）",
          impact: "截屏防范全覆盖，翻拍照 10 分钟内准确定位责任人",
        },
      ],
    },
    {
      key: "sensitive_modify",
      categoryName: "敏感信息修改",
      categoryTag: "防单人作案",
      direction: "场景三",
      themeColor: "indigo",
      borderTopColor: "border-t-indigo-700",
      tagBg: "bg-indigo-50",
      tagText: "text-indigo-900 border-indigo-200",
      icon: Smartphone,
      coreIssue: "有权限的人可以单人完成修改，缺乏背靠背交叉核验，单点内部作案与私自改号风险巨大。",
      principle: "取消所有单人后台直接修改入口，实行经办与复核双人背靠背审批与 24 小时提款冷却保护。",
      items: [
        {
          name: "手机号更换 / 解绑",
          risk: "私改会员安全手机，篡改双因子验证渠道以接管账号资金",
          measure: "严格核验原手机或人脸凭证；线上工单经办与复核双人核验，修改后冻结提款 24 小时",
          impact: "杜绝单人私下改号，保护账户资产安全",
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
      key: "sensitive_permissions",
      categoryName: "敏感权限结构",
      categoryTag: "任务驱动查控",
      direction: "场景四",
      themeColor: "slate",
      borderTopColor: "border-t-slate-900",
      tagBg: "bg-slate-100",
      tagText: "text-slate-900 border-slate-300",
      icon: ShieldCheck,
      coreIssue: "主动查会员信息场景极少，无故随意主动查询属于高危操作；原有权限结构缺乏任务约束与时效控制。",
      principle: "重构为「长期权限 + 临时权限 + 凭单查询」三级安全权限架构，无任务禁止主动查询玩家信息。",
      items: [
        {
          name: "长期权限（特权岗位）",
          risk: "传统大水漫灌式长期授权，导致离岗或越权人员仍具备常态化查询能力",
          measure: "仅限专职内控、核心高级风控等极少数特定工种配置长期权限；总监级特批并纳入 100% 每日操作审计",
          impact: "长期特权人数压缩 90% 以上，全量操作严密留痕",
        },
        {
          name: "临时权限（限时任务）",
          risk: "突发专项排查或跨部门支持借用特权账号，事后权限未及时回收",
          measure: "线上发起限时工单申请，明确指定有效时间范围（如 2小时 / 当天）；到期系统自动熔断失效并收回",
          impact: "权限过期 100% 自动失效，消除历史滞留特权",
        },
        {
          name: "凭单查询（工单驱动）",
          risk: "一线客服、常规审核无事主动检索玩家个人信息，存在隐私刺探与私下倒卖隐患",
          measure: "常规岗位彻底关闭主动无条件检索入口；仅在系统派发或承接有效工单时，动态解锁该工单涉及的玩家信息；单结权销",
          impact: "无故主动查询行为下降 98%，实现以单定权、有据可查",
        },
      ],
    },
  ];

  return (
    <div id="section-security-upgrade" className="space-y-8">
      {/* 3.3 章节核心导语 */}
      <SummaryBox variant="module">
        <div className="space-y-2.5">
          <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
            {highlightNumbers(
              "针对底层安全机制的实际运作痛点，全面聚焦[[敏感信息维护、敏感异常操作、敏感信息修改、敏感权限结构]]四大核心场景推进加固改造，以系统硬规则约束一线裁量，筑牢底层安全合规防线。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 核心四大场景摘要说明卡片（2x2 网格） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 场景 1：敏感信息维护 */}
        <div className="border border-[#e2e8f0] bg-white p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感信息维护</h4>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 ml-auto">
              统一字典收口
            </span>
          </div>
          <div className="text-xs sm:text-[14.5px] text-slate-700 leading-relaxed font-normal space-y-1.5">
            <p>
              <strong className="text-slate-950 font-medium">现状痛点：</strong>
              很多敏感信息散落在太多的模块内，导致收口和更新、维护都很麻烦，且还存在漏的问题。
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-950 font-medium">应对措施：</strong>
              建立统一敏感数据中台字典，底层统一加密脱敏，所有模块统一调用中台接口，一处配置全局生效。
            </p>
          </div>
        </div>

        {/* 场景 2：敏感异常操作 */}
        <div className="border border-[#e2e8f0] bg-white p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感异常操作</h4>
            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 border border-blue-200 ml-auto">
              工种控权收紧
            </span>
          </div>
          <div className="text-xs sm:text-[14.5px] text-slate-700 leading-relaxed font-normal space-y-1.5">
            <p>
              <strong className="text-slate-950 font-medium">现状痛点：</strong>
              复制、截屏、导出、批量查询等高危操作权限泛滥，未按实际工种必要性进行严格控制。
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-950 font-medium">应对措施：</strong>
              按工种严格控制权限，98% 基础岗位关闭批量导出与复制，全端覆盖敏感防截屏与动态盲水印。
            </p>
          </div>
        </div>

        {/* 场景 3：敏感信息修改 */}
        <div className="border border-[#e2e8f0] bg-white p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感信息修改</h4>
            <span className="text-xs font-mono font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 border border-indigo-200 ml-auto">
              双人背靠背审批
            </span>
          </div>
          <div className="text-xs sm:text-[14.5px] text-slate-700 leading-relaxed font-normal space-y-1.5">
            <p>
              <strong className="text-slate-950 font-medium">现状痛点：</strong>
              有权限的人可以单人完成修改，缺乏背靠背交叉核验，风险较大且易发生单点内部作案。
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-950 font-medium">应对措施：</strong>
              取消单人直接修改入口，全面改由经办与复核双人背靠背审批，关键修改强制绑定 24h 提款冷却。
            </p>
          </div>
        </div>

        {/* 场景 4：敏感权限结构 */}
        <div className="border border-[#e2e8f0] bg-white p-4 sm:p-5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <span className="w-5 h-5 bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
              4
            </span>
            <h4 className="text-base font-bold text-slate-950">敏感权限结构</h4>
            <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 border border-slate-300 ml-auto">
              任务驱动分层
            </span>
          </div>
          <div className="text-xs sm:text-[14.5px] text-slate-700 leading-relaxed font-normal space-y-1.5">
            <p>
              <strong className="text-slate-950 font-medium">现状痛点：</strong>
              主动查会员信息场景极少，无工单任务无故查询属于高风险操作，缺乏严格的任务约束。
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-950 font-medium">应对措施：</strong>
              构建「长期特权 + 临时限时 + 凭单查询」三级安全权限架构，以任务定权限，单结权销。
            </p>
          </div>
        </div>
      </div>

      {/* 四大核心场景落地管控规范全览 (落地细则表) */}
      <div className="space-y-6">
        <ReportSubsectionHeader
          title="3.3.1 四大安全机制落地细则"
          rightContent={
            <span className="text-xs font-mono text-slate-500">
              围绕 4 大核心场景落实 13 项防护细则
            </span>
          }
        />

        <div className="space-y-6">
          {securityCategories.map((cat) => {
            const Icon = cat.icon;
            const isScenario4 = cat.key === "sensitive_permissions";

            return (
              <div
                key={cat.key}
                className="border border-[#e2e8f0] bg-white p-4 sm:p-5 space-y-4"
              >
                {/* 模块标题、核心痛点与管控原则 */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-3 border-b border-[#e2e8f0] gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-slate-900 text-white flex items-center justify-center shrink-0">
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
                  <div className="text-xs text-slate-600 sm:max-w-xl font-normal space-y-1 sm:text-right">
                    <div>
                      <span className="font-bold text-slate-900">核心痛点：</span>
                      {cat.coreIssue}
                    </div>
                    <div className="text-slate-500">
                      <span className="font-bold text-slate-700">治理原则：</span>
                      {cat.principle}
                    </div>
                  </div>
                </div>

                {/* 场景4 内嵌：敏感权限三级架构模型卡片（长期权限 / 临时权限 / 凭单查询） */}
                {isScenario4 && (
                  <div className="bg-slate-50/70 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-slate-900" />
                        <span className="text-sm font-bold text-slate-950">
                          三级权限架构运转逻辑（长期权限 · 临时权限 · 凭单查询）
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        主动查会员 = 高风险 ➔ 凭单授权、单结权销
                      </span>
                    </div>

                    {/* 3 列权限类型架构对比 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* 1. 长期权限 */}
                      <div className="bg-white p-3.5 flex flex-col justify-between space-y-2.5 border-t-2 border-slate-800">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-slate-950 font-bold text-sm">
                              <span className="w-4.5 h-4.5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                                1
                              </span>
                              <span>长期权限</span>
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 border border-slate-200">
                              少数特权工种
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-mono">
                            适用：专职内控、核心风控主管
                          </div>
                          <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                            仅针对特定极少数核心工种配置常态化查询权限，需总监级线上特批；全量操作实施 <strong>100% 独立审计留痕与行为巡检</strong>。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 font-mono flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                          <span>管控：全量日志留痕 + 异常预警</span>
                        </div>
                      </div>

                      {/* 2. 临时权限 */}
                      <div className="bg-white p-3.5 flex flex-col justify-between space-y-2.5 border-t-2 border-indigo-700">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-indigo-950 font-bold text-sm">
                              <span className="w-4.5 h-4.5 bg-indigo-800 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                                2
                              </span>
                              <span>临时权限</span>
                            </div>
                            <span className="text-xs font-mono font-bold text-indigo-900 bg-indigo-50 px-1.5 py-0.5 border border-indigo-200">
                              限时审批生效
                            </span>
                          </div>
                          <div className="text-xs text-indigo-700 font-mono">
                            适用：专项排查、跨部门短期支持
                          </div>
                          <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                            线上发起限时工单申请，明确指定<strong>有效时间窗口</strong>（如 2小时 / 当天）；到期系统全自动回收熔断，禁止私下延期。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-indigo-100 text-xs text-indigo-900 font-mono flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                          <span>管控：到期自动失效，零历史残留</span>
                        </div>
                      </div>

                      {/* 3. 凭单查询 */}
                      <div className="bg-white p-3.5 flex flex-col justify-between space-y-2.5 border-t-2 border-blue-700">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-blue-950 font-bold text-sm">
                              <span className="w-4.5 h-4.5 bg-blue-800 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                                3
                              </span>
                              <span>凭单查询</span>
                            </div>
                            <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 border border-blue-200">
                              任务动态解锁
                            </span>
                          </div>
                          <div className="text-xs text-blue-700 font-mono">
                            适用：一线客服、常规审核、业务经办
                          </div>
                          <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                            日常<strong>无独立主动查询入口</strong>；仅当系统派单或承接有效工单时，动态解锁<strong>该工单涉及的玩家特定信息</strong>，单结权销。
                          </p>
                        </div>
                        <div className="pt-2 border-t border-blue-100 text-xs text-blue-900 font-mono flex items-center gap-1">
                          <FileCheck2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>管控：以单定权、单结权销、100% 任务绑定</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4 列规范明细表：场景 / 潜在隐患 / 升级管控规范 / 落地成效 */}
                <ReportTableFrame>
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-900 bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <th className="py-2.5 px-3 w-[18%]">防护场景</th>
                        <th className="py-2.5 px-3 w-[26%]">潜在隐患与风险</th>
                        <th className="py-2.5 px-3 w-[36%]">升级管控规范</th>
                        <th className="py-2.5 px-3 w-[20%]">管控成效指标</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                      {cat.items.map((item, idx) => (
                        <tr
                          key={idx}
                        >
                          <td className="py-3 px-3 font-bold text-slate-900 align-top text-sm sm:text-[14.5px]">
                            {item.name}
                          </td>
                          <td className="py-3 px-3 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed align-top">
                            {item.risk}
                          </td>
                          <td className="py-3 px-3 text-slate-800 text-sm sm:text-[14.5px] leading-relaxed align-top">
                            {highlightNumbers(item.measure)}
                          </td>
                          <td className="py-3 px-3 font-medium text-slate-900 text-xs sm:text-sm leading-relaxed align-top">
                            <span className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 font-medium">
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
