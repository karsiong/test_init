import axios from "axios"
import express,{Express, Request,Response} from "express"
import bodyParser from "body-parser"

function init(){
	console.log("Hello world typescript");	
}


async function webcontent(link:string){
	let page =  await axios.get(link)
	return (page.data)	
}

const app = express()
//app.use(bodyParser.json);
app.listen(3800)
app.get("/",(req:Request,res:Response) =>{
	console.log("app start " , __dirname)
	res.sendfile(__dirname + "/index.html")
})

app.get("/test",(req:Request,res:Response)=>{
	let re = {
		c1:req.query.c1,
		c2:req.query.c2
	}
	res.end(JSON.stringify(re))
})

app.post("/test2",(req:Request,res:Response)=>{
	let re = {
		d1:req.query.d1,
		d2:req.query.d2
	}
	console.log(req.body)
	res.end(JSON.stringify(re))
})
init()


/*export default class main{
	
	public app:express.Application
	
	constructor(){
		this.app = express();
		this.init();
	}
	
	init(){
		console.log("Hello world")
		this.app.listen(3800)
	}
	
}

main()*/



























