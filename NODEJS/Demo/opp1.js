var person = {
	ho:"Nguyen",
	ten:"Thich",
	chao:function(){
		console.log("Chao " + this.ho + " " + this.ten);
	}
}

person.chao();

console.log(person["ten"]);