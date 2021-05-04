const XLSX = require('xlsx');


const readExcelCategoryDeseases = () => {
    const workbook = XLSX.readFile(__dirname + '/data_categorias.xlsx' );
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    for (const itemFila of dataExcel) {
        itemFila.createdAt = new Date();
        itemFila.updatedAt = new Date();
    }
    return dataExcel;
}

const readExcelDeseases = () => {
    const workbook = XLSX.readFile(__dirname + '/data_deseases.xlsx' );
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    for (const itemFila of dataExcel) {
        itemFila.createdAt = new Date();
        itemFila.updatedAt = new Date();
    }
    return dataExcel;
}

const readExcelSymptoms = () => {
    const workbook = XLSX.readFile(__dirname + '/data_sintomas.xlsx' );
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    for (const itemFila of dataExcel) {
        itemFila.createdAt = new Date();
        itemFila.updatedAt = new Date();
    }
    // console.log(dataExcel);
    return dataExcel;
}

const readExcelCategoryDeseaseSymptom = () => {
    const workbook = XLSX.readFile(__dirname + '/data_categoryDesease_symptom.xlsx' );
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    for (const itemFila of dataExcel) {
        itemFila.createdAt = new Date();
        itemFila.updatedAt = new Date();
    }
    // console.log(dataExcel);
    return dataExcel;
}

const readExcelMedicamentosRecetadospPorEnfermedad = () => {
    const workbook = XLSX.readFile(__dirname + '/data_MedicamentosRecetadospPorEnfermedad.xlsx' );
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    for (const itemFila of dataExcel) {
        itemFila.createdAt = new Date();
        itemFila.updatedAt = new Date();
    }
    // console.log(dataExcel);
    return dataExcel;
}
    
module.exports = {
    readExcelCategoryDeseases,
    readExcelDeseases,
    readExcelSymptoms,
    readExcelCategoryDeseaseSymptom,
    readExcelMedicamentosRecetadospPorEnfermedad
}