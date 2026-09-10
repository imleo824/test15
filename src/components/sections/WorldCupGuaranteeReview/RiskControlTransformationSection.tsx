import React from "react";
import { ReportPanel, ReportPanelHeader } from "../../ReportSections";
import { 
  Users, 
  UserCheck, 
  CheckCircle2, 
  Clock, 
  Workflow
} from "lucide-react";

interface TransformationItem {
  id: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  subItems: {
    title: string;
    whatIsIt: string;
    priority: "P0" | "P1" | "P2";
    priorityLabel: string;
    progress: number;
    status: string;
    statusColor: string;
  }[];
}

export const RiskControlTransformationSection: React.FC = () => {
  const transformationData: TransformationItem[] = [
    {
      id: "member-audit",
      category: "1. 会员审核变革",
      icon: <Users className="w-5 h-5 text-blue-800" />,
      description: "围绕全量会员提款与行为风控，构建毫秒级全链路防线与数据安全机制",
      subItems: [
        {
          title: "信息安全",
          whatIsIt: "会员实名凭证认证、设备指纹防伪、敏感数据脱敏传输与合规审计",
          priority: "P0",
          priorityLabel: "特级优先级",
          progress: 90,
          status: "即将收尾",
          statusColor: "bg-blue-50 text-blue-800 border-blue-200",
        },
        {
          title: "风控审核",
          whatIsIt: "会员提款自动化规则校验、对冲/套利画像识别与差异化风险阈值分流",
          priority: "P0",
          priorityLabel: "特级优先级",
          progress: 90,
          status: "即将收尾",
          statusColor: "bg-blue-50 text-blue-800 border-blue-200",
        },
      ],
    },
    {
      id: "agent-audit",
      category: "2. 代理审核变革",
      icon: <UserCheck className="w-5 h-5 text-amber-800" />,
      description: "重构代理合作审查与佣金结算算法，从源头杜绝作弊与越权分错风险",
      subItems: [
        {
          title: "信息安全",
          whatIsIt: "代理身份合规审计、多级关联设备与网络链路监控及高危隔离",
          priority: "P0",
          priorityLabel: "特级优先级",
          progress: 90,
          status: "即将收尾",
          statusColor: "bg-blue-50 text-blue-800 border-blue-200",
        },
        {
          title: "佣金审核",
          whatIsIt: "代理佣金结算模型重塑、反套利全包对冲自动排查与实时扣减",
          priority: "P1",
          priorityLabel: "重点推进",
          progress: 30,
          status: "攻坚推进中",
          statusColor: "bg-amber-50 text-amber-800 border-amber-200",
        },
      ],
    },
  ];

  return (
    <ReportPanel id="section-risk-control-transformation" className="space-y-6">
      <ReportPanelHeader
        icon={<Workflow className="h-5 w-5 text-blue-800" />}
        title="4.1 核心业务变革推进进度"
        rightContent={
          <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 border border-slate-200">
            总体推进 75%
          </span>
        }
      />

      <div className="space-y-5">
        {/* 顶部概览导语 */}
        <div className="border border-slate-200 bg-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              风控核心业务变革概览
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              聚焦<strong>会员审核</strong>与<strong>代理审核</strong>两大核心阵地，系统化落地信息安全与自动化审核机制，全面提升风控预警与拦截效能。
            </p>
          </div>

          {/* 总体数据摘要看板 */}
          <div className="grid grid-cols-2 gap-3 shrink-0 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-5">
            <div className="bg-slate-50 p-2.5 border border-slate-200 text-center min-w-[100px]">
              <div className="text-xs text-slate-600 font-medium">总体完成项</div>
              <div className="text-xl font-bold font-mono text-emerald-700 tabular-nums">3 / 4</div>
              <div className="text-xs text-slate-500">高完成度 90%</div>
            </div>
            <div className="bg-slate-50 p-2.5 border border-slate-200 text-center min-w-[100px]">
              <div className="text-xs text-slate-600 font-medium">攻坚推进中</div>
              <div className="text-xl font-bold font-mono text-amber-700 tabular-nums">1 / 4</div>
              <div className="text-xs text-slate-500">佣金审核 30%</div>
            </div>
          </div>
        </div>

        {/* 变革事项详细卡片列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {transformationData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-4"
            >
              {/* 事项分类标题与描述 */}
              <div className="space-y-1.5 pb-3 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-slate-100 border border-slate-200 text-slate-700">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 tracking-tight">
                      {item.category}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 border border-slate-200">
                    2 项核心内容
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                  {item.description}
                </p>
              </div>

              {/* 事项子项（具体内容、是什么、优先级、进度） */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                {item.subItems.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 border border-slate-200 p-3.5 space-y-2.5"
                  >
                    {/* 子项 Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="report-sequence-badge text-xs">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-sm text-slate-900">
                          {sub.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* 优先级 Badge */}
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 border ${
                            sub.priority === "P0"
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {sub.priorityLabel}
                        </span>

                        {/* 状态 Badge */}
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 border ${sub.statusColor}`}
                        >
                          {sub.status}
                        </span>
                      </div>
                    </div>

                    {/* 是什么（定义与范围） */}
                    <div className="text-xs text-slate-700 bg-white p-2.5 border border-slate-200 leading-relaxed font-normal">
                      <span className="font-bold text-slate-900">【变革说明】：</span>
                      {sub.whatIsIt}
                    </div>

                    {/* 完成度 / 进度条 */}
                    <div className="space-y-1 pt-0.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-700 flex items-center gap-1">
                          {sub.progress === 100 ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          ) : (
                            <Clock className="w-3.5 h-3.5 text-blue-700" />
                          )}
                          完成进度
                        </span>
                        <span
                          className={`font-bold font-mono text-xs tabular-nums ${
                            sub.progress >= 90
                              ? "text-blue-800"
                              : "text-amber-800"
                          }`}
                        >
                          {sub.progress}%
                        </span>
                      </div>

                      {/* 报告型进度条外壳（实体单色，无渐变） */}
                      <div className="w-full h-2 bg-slate-200 overflow-hidden border border-slate-300">
                        <div
                          className={`h-full ${
                            sub.progress >= 90
                              ? "bg-blue-800"
                              : "bg-amber-700"
                          }`}
                          style={{ width: `${sub.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReportPanel>
  );
};

export default RiskControlTransformationSection;
