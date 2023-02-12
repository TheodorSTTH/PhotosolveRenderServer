const express = require('express');
const Tesseract = require('tesseract.js');

const app = express();
const port = 3000;
app.post('/', async function (req, res) {
    // const { url } = req.body;
    let out = "NOTEXT"
    await Tesseract.recognize(
        'https://tesseract.projectnaptha.com/img/eng_bw.png',
        'eng'
        // { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        out = text;
    })
    res.send(out)
})
app.get('/', async function (req, res) {
    res.send("The server is active on Render")
})
console.log("Listening on port " + port)
app.listen(port)