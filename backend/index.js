const express = require('express')
const plivo = require('plivo');
const app = express()

const client = new plivo.Client(process.env.AUTH_ID, process.env.AUTH_TOKEN);

const port = process.env.PORT || 8081

app.post('/send', async (req, res) => {
    if (req.method === 'OPTIONS') {
        // Set CORS headers for preflight requests
        // Allows GETs from any origin with the Content-Type header
        // and caches preflight response for 3600s
        // Send response to OPTIONS requests
        response.set('Access-Control-Allow-Methods', 'POST');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.set('Access-Control-Max-Age', '3600');
        response.status(204).send('');
    } else {
        console.log(req.body)
        let message = await client.messages.create(
            req.body.source,
            req.body.destination,
            req.body.message
        )
        res.set('Access-Control-Allow-Origin', '*')
        res.send(`Message Sent: ${message}`)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

