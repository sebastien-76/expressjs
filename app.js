const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    let html = `<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
    `;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})