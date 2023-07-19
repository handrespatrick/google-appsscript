export class Table {
  constructor(table) {
    this.table = table;
  }

  getHead() {
    const $ = Cheerio.load(this.table);
    const tableHead = $("#relatorio thead tr th").toArray();
    return tableHead.map((el) => el.children[0].data);
  }

  getBody() {
    const $ = Cheerio.load(this.table);
    const tableBody = $("#relatorio tbody tr").toArray();
    let arrPeople = [];

    for (const rows of tableBody) {
      let arrPerson = [];
      for (const cels of rows.children) {
        if (cels.children.length > 0) {
          arrPerson.push(cels.children[0].data);
        } else {
          arrPerson.push("");
        }
      }
      arrPeople.push(arrPerson);
    }

    return arrPeople;
  }

  buildHeadAndBody(arrHeader, arrPeople) {
    let arr = [];
    arr.push(arrHeader);
    arr = arr.concat(arrPeople);

    return arr;
  }
}
