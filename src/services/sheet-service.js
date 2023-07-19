export class Sheet {
  constructor(sheetName) {
    this.sheetInstance =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  }

  getSpreadSheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getName();
  }

  clearSheet() {
    return this.sheetInstance.getDataRange().clearContent();
  }

  setValuesSheet(row, data) {
    return this.sheetInstance
      .getRange(row, 1, data.length, data[0].length)
      .setValues(data);
  }

  getSheetValues() {
    return this.sheetInstance.getDataRange().getValues();
  }

  hideRow(range) {
    return this.sheetInstance.hideRow(range);
  }

  appendRow(data) {
    return this.sheetInstance.appendRow(data);
  }

  getYesterday() {
    const today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday.toLocaleDateString("pt-BR");
  }
}
