const HummusRecipe = require("hummus-recipe");

const express = require("express");
const path = require("path");
const process = require("process");
const app = express();

const fields = {
    choiceRiksdagen: { x: 83, y: 256 },
    choiceLandsting: { x: 83, y: 279 },
    choiceLandstingText: { x: 235, y: 279 - 3 },
    choiceKommun: { x: 83, y: 301 },
    choiceKommunText: { x: 235, y: 301 - 3 },
    choiceEU: { x: 83, y: 324 },
    party: { x: 85, y: 208 },
    date: { x: 97, y: 368 },
    municipality: { x: 97, y: 391 }
};

const multiplierOffset = 45.6;

app.get("/hello", function(req, res) {
    res.send("Hi there!");
})

app.get("/generate", function(req, res) {
    const id = Math.random()
        .toString(36)
        .substr(2, 9);

    const outputFileName = id + ".pdf";
    const outputFilePath = path.resolve("download/", outputFileName);
    const downloadedFileName = "generated.pdf";
    const pdfDoc = new HummusRecipe("input.pdf", outputFilePath);

    const texts = {
        // will populate with eg.
        // date: ['2019-02-23'],
        // municipality: ['Göteborg']
    };

    Object.keys(req.query || {}).forEach(key => {
        if (fields[key]) {
            texts[key] = req.query[key].split(",");
        }
    });

    if (Object.keys(texts).length > 0) {
        const fontSettings = {
            color: "000000",
            fontSize: 8,
            bold: true,
            // font: 'Helvatica',
            // align: 'center center',
            opacity: 1
            // rotation: 180
        };

        pdfDoc.editPage(1);

        // go through all the words
        Object.keys(texts).forEach(fieldName => {
            texts[fieldName].forEach((rowValue, index) => {
                pdfDoc.text(
                    rowValue,
                    fields[fieldName].x,
                    fields[fieldName].y + index * multiplierOffset,
                    fontSettings
                );
            });
        });
        pdfDoc.endPage();
    }

    pdfDoc.endPDF();

    res.download(outputFilePath, outputFileName);
});

app.get("*", function(req, res) {
    res.send("Nothing to see here");
})

const decidedPort = process.env.PORT || 8080;
app.listen(decidedPort, () => console.log(`running: port ${decidedPort}!`));
