function activarTimer() {
  timer = setInterval(() => {
    let time = document.getElementById("seconds");
    let seconds = Number(time.innerHTML);
    seconds++;
    if (time.innerHTML < 9) {
      time.innerHTML = "0" + seconds;
    } else {
      time.innerHTML = seconds;
    }
    if (seconds === 60) {
      let minutes = document.getElementById("minutes");
      let minutesNumber = Number(minutes.innerHTML);
      minutesNumber++;
      if (minutes.innerHTML < 9) {
        minutes.innerHTML = "0" + minutesNumber;
      } else {
        minutes.innerHTML = minutesNumber;
      }
      time.innerHTML = "00";
    }
  }, 1000);
}

function pararTimer() {
  clearInterval(timer);
}

let contador = 0;
let primeraCarta = "";
let segundaCarta = "";
let numeroVidas = 10;
let numeroPuntos = 0;
let timerPulsado = false;

let cartas = document.querySelectorAll(".imagenes .carta");
let vidas = document.getElementById("vidas");

vidas.innerHTML = `You have ${numeroVidas} tries left`;

cartas.forEach((carta) => {
  carta.addEventListener("click", () => {
    if (timerPulsado === false) {
      activarTimer();
      timerPulsado = true;
    }
    if (numeroVidas > 0) {
      carta.classList.add("clicked");

      // Si el contador es 0, la carta es la primera carta

      if (contador == 0) {
        primeraCarta = carta.getAttribute("personaje");
        contador++;
      } else {
        segundaCarta = carta.getAttribute("personaje");
        contador = 0;

        if (primeraCarta == segundaCarta) {
          let cartasIguales = document.querySelectorAll(
            `.carta[personaje="${primeraCarta}"]`
          );

          // Agregamos la clase "matched" a las cartas iguales

          cartasIguales[0].classList.add("matched");
          cartasIguales[0].classList.remove("clicked");
          cartasIguales[1].classList.add("matched");
          cartasIguales[1].classList.remove("clicked");

          numeroPuntos++;
        } else {
          let cartasDiferentes = document.querySelectorAll(".carta.clicked");

          // Agregamos la clase "wrong" a las cartas diferentes

          cartasDiferentes[0].classList.add("wrong");
          cartasDiferentes[1].classList.add("wrong");

          numeroVidas--;

          vidas.innerHTML = `You have ${numeroVidas} tries left`;

          setTimeout(() => {
            cartasDiferentes[0].classList.remove("wrong", "clicked");
            cartasDiferentes[1].classList.remove("wrong", "clicked");
          }, 1000);
        }
      }
    } else {
      vidas.innerHTML = `You lost!`;
      vidas.style.color = "red";
    }

    if (numeroPuntos == 5) {
      vidas.innerHTML = `You won!`;
      vidas.style.color = "green";
      pararTimer();
    }
  });
});
