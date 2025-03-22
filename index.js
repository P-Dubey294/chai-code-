const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Pratham Dubey!')
})

app.get('/twitter',(req,res) => {
    res.send('www.google.com')
})

app.get('/login',(req,res) => {
    res.send('<h1> Please login at chai & code </h1>')
})

app.get('/youtube', (req,resp) => {
    resp.send('<h2> Eat sleep code repeate <h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})