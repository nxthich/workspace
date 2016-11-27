function tinhtong(a,b){
	return a+b;
}

var x = tinhtong(3,5);

console.log(x);


function hello(){
	console.log("Welcome to Thich Nguyen");
}

function goiham(fn){
	fn();
}


goiham(hello);

var tong = function(){
	console.log("Lap tringNodeJS");
}

tong();