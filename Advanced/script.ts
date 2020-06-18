let arr=[]

class Vehicles {
	brand="";

constructor(brand, model1, model2) {
	this.brand = brand;
	arr.push(this)
	}

	cars(){
		return `${this.brand}`;
	}

}

class addInfo extends Vehicles {

	constructor(brand, model, hp, fuel_type) {
		super(brand);
		this.model = model;
		this.hp = hp;
		this.fuel_type = fuel_type;
	}

	add(){
		return `${super.cars()} <br> ${this.model} has ${this.hp} horsepower and runs with ${this.fuel_type}. <hr>`
	}
}

let brandName: Array <string> = ["Crysler", "Dodge", "Tesla", "VW"];
let brandModel: Array <string> = ["Crysler1", "Dodge1", "Tesla1", "VW1"];
let brandHP: Array <number> = [100, 120, 500, 210];
let brandFuel: Array <string> = ["Super", "Diesel", "Strom", "Benzin"];


for(let i= 0; i < 4; i++){
	let car = new addInfo(brandName[i], brandModel[i], brandHP[i], brandFuel[i])
	document.getElementById("output").innerHTML+= car.add()

}

console.table(arr)

