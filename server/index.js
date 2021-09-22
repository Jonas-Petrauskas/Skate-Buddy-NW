const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(cors())

const router = require('./router/router')

const PORT = process.env.PORT_ID

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`listening on ${process.env.BACKEND_URL}${PORT}`)
})
