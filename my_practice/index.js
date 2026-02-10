const express = require('express')
const app = express()
const port = 3000

app.get('/hey', (req, res) => {
  res.send('Hello kaushal!')
})

app.get('/about', (req, res) => {
  res.send('This is the kausuhal about page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
