var data = [
  ['Order Number', 'Project Name', 'Customer Group', 'Fiscal Year', 'Sector', 'State', 'PO Amount', 'Sales Amount', 'PO Different', 'PO Quarter', 'PO Month', 'PO Rank', 'Sales Quarter', 'Sales Month', 'Sales Rank'],
  ['workorder1', 'greenFrams1', 'NESIC', 'FY 19', 'SBU', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder2', 'greenFrams2', 'Other', 'FY 20', 'SBU', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder3', 'greenFrams3', 'NESIC', 'FY 18', 'SBU', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder4', 'project001', 'NESIC', 'FY 19', 'ICT', 'Ongoing', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder5', 'project002', 'Other', 'FY 20', 'ICT', 'Forecast', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder6', 'project003', 'NESIC', 'FY 18', 'ICT', 'Completed', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder7', 'project001', 'NESIC', 'FY 19', 'Fiber', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder8', 'project002', 'Other', 'FY 20', 'Fiber', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder9', 'project003', 'NESIC', 'FY 18', 'Fiber', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder10', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder11', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder12', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder13', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder14', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder15', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['Order Number', 'Project Name', 'Customer Group', 'Fiscal Year', 'Sector', 'State', 'PO Amount', 'Sales Amount', 'PO Different', 'PO Quarter', 'PO Month', 'PO Rank', 'Sales Quarter', 'Sales Month', 'Sales Rank'],
  ['workorder1', 'greenFrams1', 'NESIC', 'FY 19', 'SBU', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder2', 'greenFrams2', 'Other', 'FY 20', 'SBU', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder3', 'greenFrams3', 'NESIC', 'FY 18', 'SBU', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder4', 'project001', 'NESIC', 'FY 19', 'ICT', 'Ongoing', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder5', 'project002', 'Other', 'FY 20', 'ICT', 'Forecast', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder6', 'project003', 'NESIC', 'FY 18', 'ICT', 'Completed', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder7', 'project001', 'NESIC', 'FY 19', 'Fiber', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder8', 'project002', 'Other', 'FY 20', 'Fiber', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder9', 'project003', 'NESIC', 'FY 18', 'Fiber', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder10', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder11', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder12', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder13', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder14', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder15', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['Order Number', 'Project Name', 'Customer Group', 'Fiscal Year', 'Sector', 'State', 'PO Amount', 'Sales Amount', 'PO Different', 'PO Quarter', 'PO Month', 'PO Rank', 'Sales Quarter', 'Sales Month', 'Sales Rank'],
  ['workorder1', 'greenFrams1', 'NESIC', 'FY 19', 'SBU', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder2', 'greenFrams2', 'Other', 'FY 20', 'SBU', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder3', 'greenFrams3', 'NESIC', 'FY 18', 'SBU', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder4', 'project001', 'NESIC', 'FY 19', 'ICT', 'Ongoing', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder5', 'project002', 'Other', 'FY 20', 'ICT', 'Forecast', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder6', 'project003', 'NESIC', 'FY 18', 'ICT', 'Completed', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder7', 'project001', 'NESIC', 'FY 19', 'Fiber', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder8', 'project002', 'Other', 'FY 20', 'Fiber', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder9', 'project003', 'NESIC', 'FY 18', 'Fiber', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder10', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder11', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder12', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder13', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder14', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder15', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['Order Number', 'Project Name', 'Customer Group', 'Fiscal Year', 'Sector', 'State', 'PO Amount', 'Sales Amount', 'PO Different', 'PO Quarter', 'PO Month', 'PO Rank', 'Sales Quarter', 'Sales Month', 'Sales Rank'],
  ['workorder1', 'greenFrams1', 'NESIC', 'FY 19', 'SBU', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder2', 'greenFrams2', 'Other', 'FY 20', 'SBU', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder3', 'greenFrams3', 'NESIC', 'FY 18', 'SBU', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder4', 'project001', 'NESIC', 'FY 19', 'ICT', 'Ongoing', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder5', 'project002', 'Other', 'FY 20', 'ICT', 'Forecast', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder6', 'project003', 'NESIC', 'FY 18', 'ICT', 'Completed', '500000', '490000', '10000', '2Q', 'August', 'B', '2Q', 'September', 'B'],
  ['workorder7', 'project001', 'NESIC', 'FY 19', 'Fiber', 'Ongoing', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder8', 'project002', 'Other', 'FY 20', 'Fiber', 'Forecast', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder9', 'project003', 'NESIC', 'FY 18', 'Fiber', 'Completed', '500000', '490000', '10000', '1Q', 'April', 'B', '1Q', 'May', 'B'],
  ['workorder10', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder11', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder12', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '3Q', 'December', 'B', '3Q', 'November', 'B'],
  ['workorder13', 'project001', 'NESIC', 'FY 19', 'Facility', 'Ongoing', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder14', 'project002', 'Other', 'FY 20', 'Facility', 'Forecast', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
  ['workorder15', 'project003', 'NESIC', 'FY 18', 'Facility', 'Completed', '500000', '490000', '10000', '4Q', 'January', 'B', '3Q', 'February', 'B'],
]

var hot = new Handsontable(document.getElementById("example"), {
  data: data,
  colHeaders: true,
  rowHeaders: true,
  minSpareRows: 1,
  // fixedColumnsLeft: 4,
  manualColumnResize: true,
  contextMenu: true,
  hiddenRows: {
    indicators: true
  },
  hiddenColumns: {
    indicators: true
  },
  dropdownMenu: true,
  filters: true,
  licenseKey: "non-commercial-and-evaluation",
});