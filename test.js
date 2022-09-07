const test = require ("./index.js")


function utest1(ans){
	res =  test.plus(1,1);
	console.log(res)
	if(res == ans){
		console.log("pass")
	}else{
		console.log("FAIL")
	}
}

utest1(2)