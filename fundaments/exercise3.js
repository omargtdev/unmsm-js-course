// Constructor
function Auto(license, brand, price){
	this.license = license;
	this.brand = brand;
	this.price = price;
}


var data = [
	{ license : '2AB3A', brand : 'Toyota', price : 10000 },
	{ license : '5L23F', brand : 'Volvo', price : 30000 },
	{ license : 'H5KSD', brand : 'Suzuki', price : 25500 },
	{ license : 'P3412', brand : 'Toyota', price : 25000 },
	{ license : 'KMASD', brand : 'Nissan', price : 70000 },
	{ license : 'VB21N', brand : 'Audi', price : 40000 },
	{ license : 'ZX23A', brand : 'Chevrolet', price : 50000 },
	{ license : 'IUASD', brand : 'Volvo', price : 81000 },
	{ license : '0PLAD', brand : 'Toyota', price : 20000 },
	{ license : 'MNAS2', brand : 'Suzuki', price : 60000 },
	{ license : '912D2', brand : 'Nissan', price : 76000 },
	{ license : '6LMSA', brand : 'Tesla', price : 135000 },
	{ license : '9PAOS', brand : 'Tata', price : 25000 },
	{ license : 'JMN2A', brand : 'Jaguar', price : 10000 },
	{ license : '1123D', brand : 'Suzuki', price : 20000 },
	{ license : 'KM08U', brand : 'Nissan', price : 70000 },
	{ license : 'LASD2', brand : 'Volvo', price : 40000 },
	{ license : 'NBV87', brand : 'Infiniti', price : 12500 },
	{ license : 'HNM2A', brand : 'Smart', price : 30000 },
	{ license : '3PLAS', brand : 'Toyota', price : 25000 }
]

// array de carros
var cars = []

for(var i = 0; i < 20; i++){
	// destructuracion del objeto
	var { license, brand, price } = data[i];
	// agregando objetos de tipo Auto al arreglo
	cars.push(new Auto(license, brand, price))
}

// imprimiendo el resultado
console.log(cars)
