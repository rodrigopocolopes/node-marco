const pdf = require("pdf-lib");
const fs = require("fs");

async function novo(){

    const doc = await pdf.PDFDocument.create();
    const page = doc.addPage();
    page.drawText("Oi turma!!!");

    const arquivo = await doc.save();
    
    fs.writeFile("Teste.pdf", arquivo, function(){
        console.log("Arquivo salvo");
    });

};

novo();