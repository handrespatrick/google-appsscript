export class GetDataFromUrl {
  constructor() {}

  async handle(url, options) {
    try {
      const resp = await UrlFetchApp.fetch(url, options).getContentText();

      Logger.log({
        status: 200,
        message: `Dados coletados do ${url}`,
      });

      return resp;
    } catch (error) {
      Logger.log({
        error,
        message: error.message,
      });

      throw new Error(error.message);
    }
  }
}
