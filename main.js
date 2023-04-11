function calcularRiesgo() {
    // Obtiene el valor seleccionado del nivel de riesgo
    let riesgo = document.getElementById("riesgo").value;
    
    // Realiza una advertencia en base al valor del riesgo
    if (riesgo == 1) {
      alert("Advertencia !!: Usted debe estar dispuesto a perder hasta un 3% de su inversion anualmente.");
    } else if (riesgo == 2) {
      alert("Advertencia !!: Usted debe estar dispuesto a perder hasta un 6% de su inversion anualmente. ");
    } else if (riesgo == 3) {
      alert("Advertencia !!: Usted debe estar dispuesto a perder hasta un 20% de su inversion anualmente. ");
    } else if (riesgo == 4) {
      alert("Advertencia !!: Usted debe estar dispuesto a perder hasta un 50% de su inversion anualmente. ");
    } else if (riesgo == 5) {
      alert("Advertencia !!: Usted debe estar dispuesto a perder hasta un 80% de su inversion anualmente. ");
    } else {
      alert("Seleccione un nivel de riesgo válido.");
    }
  }
  
  function calcularGanancia() {
	const montoInvertir = document.getElementById("monto-invertir").value;
	const nivelRiesgo = document.getElementById("nivel-riesgo").value;
	let ganancia = 0;

	switch(nivelRiesgo) {
		case "1":
			ganancia = montoInvertir * 0.03;
			break;
		case "2":
			ganancia = montoInvertir * 0.06;
			break;
		case "3":
			ganancia = montoInvertir * 0.3;
			break;
		case "4":
			ganancia = montoInvertir * 1;
			break;
		case "5":
			ganancia = montoInvertir * 4;
			break;
		default:
			alert("Por favor seleccione un nivel de riesgo válido");
			return;
	}

	const resultado = document.getElementById("resultado");
	resultado.innerHTML = `La expectativa de ganancia anual es de $${ganancia.toFixed(2)}.`;
}
// Obtener el botón por su ID
var botonEdad = document.getElementById("boton-edad");

// Asignar el evento onclick al botón
botonEdad.onclick = function() {
  // Pedir al usuario que ingrese su edad
  var edad = parseInt(prompt("Ingrese su edad:"));

  // Verificar si la edad está en el rango de 0 a 17
  while (edad >= 0 && edad <= 17) {
    alert("Usted no tiene edad para invertir aún");
    edad = parseInt(prompt("Ingrese su edad:"));
  }

  // Si la edad es mayor o igual a 18, mostrar mensaje de responsabilidad
  if (edad >= 18) {
    alert("Bienvenido, sea responsable a la hora de invertir");
  }
};
