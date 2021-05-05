const express = require('express')
const app = express()
app.get('/', (req,res) => {
	return res.send("hello world !");
})
app.get('/test', (req,res) =>{
 return res.sendFile(__dirname + '/index.html')
})
app.listen(8081, () => {
	console.log("server running on localhost:8081")
}) /*it can be for example any other door */ 
/* to run the server put in cmd or terminal in linux "node (and here the name of the file, in this case, index.js" then it is "node index.js"*/
