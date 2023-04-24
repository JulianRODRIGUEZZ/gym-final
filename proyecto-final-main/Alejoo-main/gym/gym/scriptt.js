function mostrarInputs(boton) {
    const inputs1 = document.getElementById("inputs1");
    const inputs2 = document.getElementById("inputs2");
    const inputs3 = document.getElementById("inputs3");
  
    switch (boton) {
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
  
 