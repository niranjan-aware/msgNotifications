const express = require('express')
const app = express()
const PORT=3000
const sendMail=require('./sendEmail')
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sendEmail',sendMail)

const start=async()=>{
	try{
		app.listen(PORT,()=>{
			console.log(`listening on ${PORT}`)
		})
	}catch(e){}
}
start()