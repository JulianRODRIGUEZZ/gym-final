function mostrarInputs(boton) {
    const inputs1 = document.getElementById("inputs1");
    const inputs2 = document.getElementById("inputs2");
    const inputs3 = document.getElementById("inputs3");//  utilizamos el atributo onclick en el HTML para llamar a la función mostrarInputs y pasarle el número del botón correspondiente (1, 2 o 3)..
  
    switch (boton) {
        // Dentro de la función mostrarInputs, utilizamos un switch para determinar cuál botón se ha presionado y mostrar el conjunto de campos de entrada correspondiente utilizando el estilo display, 
      case 1:
        inputs1.style.display = "block";
        inputs2.style.display = "none";
        inputs3.style.display = "none";
        break;
      case 2:
        inputs1.style.display = "none";
        inputs2.style.display = "block";
        inputs3.style.display = "none";
        break;
      case 3:
        inputs1.style.display = "none";
        inputs2.style.display = "none";
        inputs3.style.display = "block";
        break;
      default:
        break;
    }
  }
//al hacer clic en cualquier botón, se mostrará el conjunto de campos de entrada correspondiente y se ocultarán los otros dos conjuntos de campos de entrada.
 