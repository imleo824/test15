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
  navTitle: "2026年Q2",
  reportTitle: "风控报告",
  pageTitle: "风控报告",
  printHeaderLeft: "风控报告",
  confidentiality: "内部机密",
  reportDateLabel: "汇报日期",
  reportDate: "2026.08",
  pdfFileName: "风控报告_202608.pdf",
  pdfBackgroundColor: "#FFFFFF",
};
