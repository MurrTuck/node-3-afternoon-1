require('dotenv').config()
const express = ('express'),
    massive = ('massive'),
    app = express(),
    { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => {
    console.log(`Hitting Dingers on port ${SERVER_PORT}.`)
})
