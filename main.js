function calcularRiesgo() {
    // Obtiene el valor seleccionado del nivel de riesgo
    let riesgo = document.getElementById("riesgo").value;
    
    // Realiza alguna lógica en base al valor del riesgo
    if (riesgo == 1) {
      alert("Usted puede ganar o perder aproximadamente un 3% anualmente.");
    } else if (riesgo == 2) {
      alert("Usted puede ganar o perder aproximadamente un 6% anualmente. ");
    } else if (riesgo == 3) {
      alert("Usted puede ganar aproximadamente un 30% o perder un 22% anualmente. ");
    } else if (riesgo == 4) {
      alert("Usted puede ganar aproximadamente un 100% o perder el 50% anualmente. ");
    } else if (riesgo == 5) {
      alert("Usted puede ganar aproximadamente un 400% anualmente o perder un 80% anualmente. ");
    } else {
      alert("Seleccione un nivel de riesgo válido.");
    }
  }
  