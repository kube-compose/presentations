const express = require('express')
const plivo = require('plivo');
const app = express()

const client = new plivo.Client(process.env.AUTH_ID, process.env.AUTH_TOKEN);

const port = process.env.PORT || 8080

app.post('/send', async (req, res) => {
    let message = await client.messages.create(
        req.body.source,
        req.body.destination,
        req.body.message
    )
    res.send(`Message Sent: ${message}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

