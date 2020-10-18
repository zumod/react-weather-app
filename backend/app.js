const { response } = require('express')
const express = require('express')
const request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/thrissur', (req, res) => {
    request('http://api.weatherstack.com/current?access_key=0eaa158545dac24ad51900f63a1fa05d&query=Thrissur', (error, response, body) => {
        if(!error && response.statusCode == 200){
            let parseBody = JSON.parse(body)
            let temp = parseBody["current"]["temperature"]
            res.send({ temp })
        } 
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
