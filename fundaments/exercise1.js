var number = prompt("Coloca tu eleccion: Piedra (1) - Papel (2) - Tijera (3)");
var choiceMachine = 1 // Piedra

game();

function game(){
	// si esta validado procedemos
	if(validate(number)){
		// covertimos a numero
		var n = Number(number);
		alert(`
		${battle(n)}
		Tuyo : ${getChoose(n)}
		Maquina : ${getChoose(choiceMachine)}`)
	}
}

function battle(number){
	//piedra 1 papel 2 tijera 3
	var result = "";
	// Empates
	if(number === 1 && choiceMachine === 1){
		result = "Empate!"
	}else if(number === 2 && choiceMachine === 2){
		result = "Empate!"
	}else if(number === 3 && choiceMachine === 3){
		result = "Empate!"
	// Perdidas para ti
	}else if(number === 1 && choiceMachine === 2){
		result = "Perdiste!"
	}else if(number === 2 && choiceMachine === 3){
		result = "Perdiste!"
	}else if(number === 3 && choiceMachine === 1){
		result = "Perdiste!"
	//Ganadas para ti
	}else if(number === 1 && choiceMachine === 3){
		result = "Ganaste!"
	}else if(number === 2 && choiceMachine === 1){
		result = "Ganaste!"
	}else{
		result = "Ganaste!"
	}

	return result;
}

function getChoose(index){
	if(index === 1){
		return 'Piedra';
	}else if(index === 2){
		return 'Papel';
	}else{
		return 'Tijera';
	}
}

function validate(number){
	// Si pone cancelar, terminamos ahi 
	if(number === null) return false;
	// Validar que solo elija de 1 a 3 sin decimales
	var choose = Number(number.trim());
	if(choose > 3 || choose < 1 || !Number.isInteger(choose)){
		alert("Debes seleccionar un numero correcto!")
		location.reload();
		return false;
	}	

	return true;
}

