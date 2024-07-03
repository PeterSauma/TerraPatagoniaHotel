//Animacion carrusel
window.addEventListener('load', function(){
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  let IconoDerecho = document.querySelector("#icono-derecho");
  let IconoIzuierdo = document.querySelector("#icono-izquierdo");
  let Imagenes = document.querySelectorAll("#img-slider").length;
  let Slider = document.querySelector("#slider");
 
  //variables para cambiar de foto
  Contador = 0;//Contador suma o resta numeros enteros para cambiar el posicionamiento de las fotos
  let Intervalo = setInterval(MoverDerecha, 5000);//Intervalo es una variable que activa moverDerecha cada 2 segundos



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Funciones para animar el carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 
  //Funcion mover slider. Hace una transición entre fotos que tarda 1 segundo y a demás controla que el contador no sobrepase la cantidad de fotos cuando se da click a la derecha y tambien que no sea negativo cuando se le da click a la izquierda
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

 
//>>>>>>>>>>Funcion mover slider a la derecha<<<<<<<<<<

  //escuchar dar click a boton derecho. Se ejecuta una funcion anonima que resetea la funcion intervalo y activa la funcion moverDerecha
  IconoDerecho.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverDerecha();
     Intervalo = setInterval(MoverDerecha, 5000);
  });
  //función mover a la derecha. Suma 1 al contador y activa la función mover slider
  function MoverDerecha()
    {
        Contador++;
        MoverSlider();
    }

   
//>>>>>>>>>>Funcion mover slider a la derecha<<<<<<<<<<
  //escuchar dar click a boton izquierdo. Se ejecuta una funcion anonima que resetea la funcion intervalo y activa la funcion moverIzquierda
  IconoIzuierdo.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverIzquierda();
     Intervalo = setInterval(MoverDerecha, 5000);
  });
  //función mover a la Izquierda. Resta 1 al contador y activa la función mover slider
  function MoverIzquierda()
    {
      Contador--;
      MoverSlider();
    }
   


 })
           