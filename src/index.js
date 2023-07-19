import { GetDataAndInsert } from "./usecase/get-data-and-insert-usecase";

async function updateDataAndInsert() {
  const url = "https://your-url.com";
  const options = {
    method: "POST",
    headers: {
      Cookie: "your-cookie",
    },
    payload: "your-payload",
    contentType: "application/x-www-form-urlencoded",
  };
  const getData = new GetDataAndInsert("your-sheet1");

  getData.handle(url, options);
}
