const getSpreadSheet = require('./../utils/get-spreadsheet')
const getSpreadSheetValues = require('./../utils/get-spreadsheet-values')

function preencherPessoasDaNossaResponsabilidade() {  
    const arrOperacionalValues = getSpreadSheetValues('Operacional')
    const arrBaseNossosMinValues = getSpreadSheetValues('Base_Nossos_Min')

    const arrPeopleNotFound = arrBaseNossosMinValues.filter(person => person[0] === 'Não encontrado' && person[1] != '')
    
    let emptyLine = arrOperacionalValues.length + 1
    arrPeopleNotFound.forEach(person => getSpreadSheet('Operacional').getRange(emptyLine++, 1).setValue(person[1]))
}
