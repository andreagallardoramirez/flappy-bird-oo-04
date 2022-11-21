const juego = {
    timerId: 0,
    gravedad: 2,
  
    aleatorio: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  
    // 2. Agrega el método verificaColision()
    verificaColision: function () {
      if (bird.colision()) {
        juego.terminar();
      }
    },
  
    loop: function () {
      bird.efectoGravedad();
      bird.dibujar(); 
      // 3. llama a juego.verificaColision();
      juego.verificaColision();
    },
  
    iniciar: function () {
      document.addEventListener("keyup", bird.mover);
      juego.timerId = setInterval(juego.loop, 20);
    },
  
    // 6. Agrega el método terminar()
    terminar: function () {  
      clearInterval(juego.timerId);
      juego.mostrarGameOver();
      juego.pararEfectos();
    },
    
    // 4. Agrega el método mostrarGameOver()
    mostrarGameOver: function () {
      const mensaje = document.querySelector(".message");
      mensaje.setAttribute("id", "game-over");
    },

    // 5. Agrega el método pararEfectos()
    pararEfectos: function () {
      let ground = document.querySelector(".ground");
      ground.removeAttribute("id");
  
      bird.div.setAttribute("id", "fall");
    },
  };
  



const bird = {
    div: document.querySelector(".bird"),
    bottom: juego.aleatorio(10, 570),
    left: 250,
    width: 60,
    height: 45,
  
    efectoGravedad: function () {
      bird.bottom -= juego.gravedad;
    },
  
    dibujar: function () {
      bird.div.style.bottom = bird.bottom + "px";
      bird.div.style.left = bird.left + "px";
    },
  
    mover: function () {
      bird.bottom += 40;
    },

    // 1. Agrega el método colision()
  colision: function () {
    if (bird.bottom < 0) {
      return true;
    }
  }
   
}

juego.iniciar();