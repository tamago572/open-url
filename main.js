"use strict";

function main() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    // 実行対象のシート名
    const sheet = ss.getSheetByName("シート1");

    // 何行目から送信するか
    const startRow = sheet.getRange("B2").getValue();
    // 何行目まで送信するか
    const endRow = sheet.getRange("C2").getValue();

    console.log(startRow);
    console.log(endRow);

    for(let i = 0; i < endRow - startRow + 1; i++) {
        const url = sheet.getRange(startRow + i, 1).getValue();

        console.log("Waiting 1 second...");
        Utilities.sleep(1000);

        openurl(url);
        console.log(url);
    }
}

function openurl(url) {
    var html = '<html><script>window.open("'+url+'", "_blank").focus();google.script.host.close();</script></script></html>';
    var ui = HtmlService.createHtmlOutput(html);
    SpreadsheetApp.getUi().showModalDialog(ui,"open url");
}