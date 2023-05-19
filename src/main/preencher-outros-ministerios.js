const getSpreadSheet = require('./../utils/get-spreadsheet')
const getSpreadSheetValues = require('./../utils/get-spreadsheet-values')

function preencherPessoasDeOutrosMinisterios() {
    getSpreadSheet('Operacional_Exceção').getRange('A2:A').clearContent()

    const dataSheetOthersMin = getSpreadSheetValues('Base_Outros_Min')
    const dataOperacional = getSpreadSheetValues('Operacional')

    const arrPeopleNotFoundInSheetOthersMin = dataSheetOthersMin.filter(pessoa => pessoa[0] === 'Não encontrado' && pessoa[1] != '')
    
    const arrCpfPeopleNotFound = arrPeopleNotFoundInSheetOthersMin.map(pessoa => pessoa[1])    
    const arrCpfPeopleOperacional = dataOperacional.map(pessoa => pessoa[0])
    
    const arrCpfNoDuplicate = arrCpfPeopleNotFound.filter( cpf => !arrCpfPeopleOperacional.includes( cpf ) )
    
    let emptyLine = getSpreadSheetValues('Operacional_Exceção').length + 1
    arrCpfNoDuplicate.forEach(cpfInserido => getSpreadSheet('Operacional_Exceção').getRange(emptyLine++, 1).setValue(cpfInserido))
}