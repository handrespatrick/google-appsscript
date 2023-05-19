function getSpreadSheet(spreadSheet){
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(spreadSheet)
  return spreadsheet
}

module.exports = getSpreadSheet