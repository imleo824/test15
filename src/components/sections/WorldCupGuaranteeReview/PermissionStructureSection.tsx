import React from "react";
import { ShieldCheck, Lock, Clock, FileCheck2 } from "lucide-react";
import { highlightNumbers, SummaryBox } from "./utils";

export const PermissionStructureSection: React.FC = () => {
  return (
    <div id="section-permission-structure" className="space-y-12 lg:space-y-16">
      {/* 3.4 章节导语 */}
      <SummaryBox variant="module">
        <div className="space-y-2.5">
          <p className="text-sm sm:text-[15.5px] text-slate-700 font-normal leading-relaxed">
            {highlightNumbers(
              "除少数特定工种外，一线业务[[无独立主动查会员场景]]，无任务关联的自主查询属于[[高风险操作]]。构建[[长期特权]] + [[临时限时]] + [[凭单查询]]三级安全权限架构，[[以任务定权限，单结权销]]。"
            )}
          </p>
        </div>
      </SummaryBox>

      {/* 权限结构体系架构 */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-slate-900 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-950">
              权限结构体系
            </h4>
          </div>
          <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 self-start sm:self-auto">
            三级权限架构运转逻辑（长期权限 · 临时权限 · 凭单查询）
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* 1. 长期权限 */}
          <div className="bg-white p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-slate-200 h-full">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-950 font-bold text-base">
                  <span className="w-5 h-5 bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>长期权限</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-700">
                  少数特权工种
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                适用：日常核心工作需要（如风控）
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal pt-1">
                仅针对特定极少数核心工种配置常态化查询权限；全量操作实施 <strong>100% 独立审计留痕与行为巡检</strong>。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-600 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-700 shrink-0" />
              <span>管控：全量日志留痕 + 异常预警</span>
            </div>
          </div>

          {/* 2. 临时权限 */}
          <div className="bg-white p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-slate-200 h-full">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-950 font-bold text-base">
                  <span className="w-5 h-5 bg-indigo-800 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>临时权限</span>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-700">
                  限时审批生效
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                适用：专项排查、跨部门短期支持
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal pt-1">
                线上发起限时临时权限申请，明确指定<strong>有效时间窗口</strong>（如 2小时或当日）；到期系统全自动回收熔断。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-600 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
              <span>管控：到期自动失效、零历史残留</span>
            </div>
          </div>

          {/* 3. 凭单查询 */}
          <div className="bg-white p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-slate-200 h-full">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-950 font-bold text-base">
                  <span className="w-5 h-5 bg-blue-800 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>凭单查询</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-700">
                  任务动态解锁
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                适用：一线客服、常规审核、业务经办
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal pt-1">
                日常<strong>无独立主动查询入口</strong>；仅当系统派单或承接有效工单时，动态解锁<strong>该工单涉及的玩家特定信息</strong>，单结权销。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-600 flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>管控：以单定权、单结权销</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionStructureSection;
