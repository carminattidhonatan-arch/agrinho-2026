let numero = 0;

    const contador = document.getElementById("contador");

    function animarContador(){

      const intervalo = setInterval(() => {

        numero += 10;

        contador.textContent = numero;

        if(numero >= 5000){

          clearInterval(intervalo);

        }

      }, 15);

    }

    window.addEventListener("load", animarContador);