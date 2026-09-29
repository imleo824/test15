export interface ReportConfig {
  brandMark: string;
  navTitle: string;
  reportTitle: string;
  pageTitle: string;
  printHeaderLeft: string;
  confidentiality: string;
  reportDateLabel: string;
  reportDate: string;
  pdfFileName: string;
  pdfBackgroundColor: string;
}

export const FA: ReportConfig = {
  brandMark: "",
  navTitle: "2026年第三季度",
  reportTitle: "2026年第三季度风控运营报告",
  pageTitle: "2026年第三季度风控运营报告",
  printHeaderLeft: "2026年第三季度风控运营报告",
  confidentiality: "内部机密",
  reportDateLabel: "汇报日期",
  reportDate: "2026.10",
  pdfFileName: "风控报告_2026年第三季度.pdf",
  pdfBackgroundColor: "#FFFFFF",
};
