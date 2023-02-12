const express = require('express');
const Tesseract = require('tesseract.js');

const app = express();
const port = 3000;
app.post('/', async function (req, res) {
    console.log(JSON.stringify(req.body))
    return res.send("YO")
    const { url } = req.body;
    await Tesseract.recognize(
        url,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
    })
    res.send('Hello World')
})
console.log("Listening on port " + port)
app.listen(port)