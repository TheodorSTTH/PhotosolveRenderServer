const express = require('express');
const Tesseract = require('tesseract.js');

const app = express();
const port = 3000;
// app.post('/', async function (req, res) {
//     // const { url } = req.body;
//     let out = "NOTEXT"
//     await Tesseract.recognize(
//         'https://tesseract.projectnaptha.com/img/eng_bw.png',
//         'eng'
//         // { logger: m => console.log(m) }
//     ).then(({ data: { text } }) => {
//         out = text;
//     })
//     res.send(out)
// })
app.get('/urlToText', async (req, res) => {  // url: /path?name='test'
    const url = req.query['url'];  // result: test
    let out = "NOTEXT"
    await Tesseract.recognize(
        url,
        'eng'
        // { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        out = text;
    })
    res.send(out)
});
console.log("Listening on port " + port)
app.listen(port)