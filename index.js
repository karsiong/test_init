const express = require("express")
const app = express()

module.exports =
   {
     plus
   }


app.get("/index.html",(req,res)=>{
	res.sendfile(__dirname+"/index.html")
})

app.get("/name",(req,res)=>{
	
	let response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	}
	console.log(response)
	res.end(JSON.stringify(response))
	
})

function plus(a,b){
	return re = a + b
}


app.use(express.static('public'));
app.listen(3500)