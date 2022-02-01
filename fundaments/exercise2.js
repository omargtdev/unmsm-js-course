var number = prompt("Coloca tu eleccion: Piedra (1) - Papel (2) - Tijera (3)");
var choiceMachine = 1; // Piedra

game();

function game() {
  // si esta validado procedemos
  if (validate(number)) {
    // covertimos a numero
    var n = Number(number);
    alert(`
		${battle(n)}
		Tuyo : ${getChoose(n)}
		Maquina : ${getChoose(choiceMachine)}`);
  }
}

function battle(number) {
  //piedra 1 papel 2 tijera 3
  var result = "";
  switch (number) {
    case 1:
      if (choiceMachine === 1) {
        result = "Empate!";
      } else if (choiceMachine === 2) {
        result = "Perdiste!";
      } else {
        result = "Ganaste!";
      }
	  break;
    case 2:
      if (choiceMachine === 1) {
        result = "Ganaste!";
      } else if (choiceMachine === 2) {
        result = "Empate!";
      } else {
        result = "Perdiste!";
      }
	  break;
    default:
      if (choiceMachine === 1) {
        result = "Perdiste!";
      } else if (choiceMachine === 2) {
        result = "Ganaste!";
      } else {
        result = "Empate!";
      }
  }

  return result;
}

function getChoose(index) {
  switch (index) {
    case 1:
      return "Piedra";
    case 2:
      return "Papel";
    default:
      return "Tijera";
  }
}

function validate(number) {
  // Si pone cancelar, terminamos ahi
  if (number === null) return false;
  // Validar que solo elija de 1 a 3 sin decimales
  var choose = Number(number.trim());
  if (choose > 3 || choose < 1 || !Number.isInteger(choose)) {
    alert("Debes seleccionar un numero correcto!");
    location.reload();
    return false;
  }

  return true;
}
