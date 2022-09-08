const test = require ("./index.js")


function utest1(ans){
	res =  test.plus(1,1);
	console.log(res)
	if(res == ans){
		console.log("pass")
		process.exit(0);
	}else{
		console.log("FAIL")
		process.exit(1);
	}
}

utest1(2)
