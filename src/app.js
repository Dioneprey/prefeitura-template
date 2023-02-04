const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())
app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})