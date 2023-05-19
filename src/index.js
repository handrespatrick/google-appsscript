function onOpen() {
  const ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('App Script')
      .addItem('Preencher CPFs faltantes Operacional', 'preencherPessoasDaNossaResponsabilidade')
      .addItem('Preencher CPFs faltantes Operacional_Exceção', 'preencherPessoasDeOutrosMinisterios')
      .addToUi();
}

function onEdit(e){
  const spreadSheet = e.source;
  const sheetName = spreadSheet.getActiveSheet().getName();

  if(sheetName === 'Base_Geral'){
    preencherPessoasDaNossaResponsabilidade()
    preencherPessoasDeOutrosMinisterios()
  }
}