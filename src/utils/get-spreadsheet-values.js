function getSpreadSheetValues(spreadSheet) {
  let spreadsheetValues = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(spreadSheet).getDataRange().getValues()
  return spreadsheetValues
}

module.exports = getSpreadSheetValues