window.addEventListener('load', function(){

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  //variables para cambiar de foto
  let Slider = document.querySelector(".slider");
  let IconoDerecho = document.querySelector(".icono-derecho");
  let IconoIzuierdo = document.querySelector(".icono-izquierdo");
  let Imagenes = document.querySelectorAll(".img-slider").length;
  Contador = 0;

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Funciones para animar el carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  //Funcion volver slider a posicion original
  function MoverSlider()
    {
      if(Contador > Imagenes - 1)
          {
            Contador = 0;
          } else if(Contador < 0)
                      {
                      Contador =  Imagenes - 1;
                      }
      Slider.style.transition = "all 1s ease"
      Slider.style.marginLeft = `-${100 * Contador}%`;
    }

  //Funcion mover slider a la derecha
  function MoverDerecha()
    {
        Contador++;
        MoverSlider();
    }
  IconoDerecho.addEventListener("click", MoverDerecha);
  
  //Funcion mover slider a la derecha
  function MoverIzquierda()
    {
      Contador--;
      MoverSlider();
    }
  IconoIzuierdo.addEventListener("click", MoverIzquierda)
})
               