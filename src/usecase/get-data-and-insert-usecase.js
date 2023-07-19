import { GetDataFromUrl } from "../services/get-data-from-url-service";
import { Sheet } from "../services/sheet-service";

export class GetDataAndInsert {
  constructor(sheetName) {
    this._getDataFromUrl = new GetDataFromUrl();
    this._sheet = new Sheet(sheetName);
    this._sheetName = sheetName;
  }

  async handle(url, options) {
    try {
      const data = await this._getDataFromUrl.handle(url, options);

      const table = new Table(data);
      const arrHeader = table.getHead();
      const arrPeople = table.getBody();
      const allData = table.buildHeadAndBody(arrHeader, arrPeople);

      this._sheet.clearSheet();
      this._sheet.setValuesSheet(1, allData);

      Logger.log({
        status: 200,
        message: `Dados inseridos com sucesso na planilha ${this._sheet.getSpreadSheetName()} na aba ${
          this._sheetName
        }`,
      });
    } catch (error) {
      Logger.log({
        error,
        message: error.message,
      });

      throw new Error(error.message);
    }
  }
}
