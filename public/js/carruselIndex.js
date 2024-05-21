window.addEventListener('load', function(){
    //Se definen las fotos para el carrusel en un array
    var imagenes = [
        "/images/carrusel/carrusel1.jpg",
        "/images/carrusel/carrusel2.jpg",
        "/images/carrusel/carrusel3.jpg",
        "/images/carrusel/carrusel4.jpg",
        "/images/carrusel/carrusel5.jpg",
        "/images/carrusel/carrusel6.jpg",
        "/images/carrusel/carrusel7.jpg",
        "/images/carrusel/carrusel8.jpg",
        "/images/carrusel/carrusel9.jpg",
        "/images/carrusel/carrusel10.jpg",
        "/images/carrusel/carrusel11.jpg",
        "/images/carrusel/carrusel12.jpg"
        ];
    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //variables para cambiar de foto
    let SliderIzquierdo = document.querySelector("#arrowLeftIndex");
    let SliderDerecho = document.querySelector("#arrowRigthIndex");
    let Contador = 0;

  
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Funciones para animar el carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    
    document.ImagenIndex.src = imagenes[0];
    
    function MoverDerecha()
      {
         Contador++;
         if(Contador > imagenes.length - 1)
            {
               Contador = 0;
            }
         document.Imagen.src = imagenes[Contador];
      }
    let Intervalo = setInterval(MoverDerecha, 2000);
    
    SliderDerecho.addEventListener("click", function()
      {
         clearInterval(Intervalo);
         MoverDerecha();
         Intervalo = setInterval(MoverDerecha, 2000);
      });
    
    
    function MoverIzquierda()
      {
         Contador--;
         if(Contador < 0)
           {
             Contador = imagenes.length - 1;
           }
         document.Imagen.src = imagenes[Contador];
      }
      
    SliderIzquierdo.addEventListener("click", function()
      {
         clearInterval(Intervalo);
         MoverIzquierda();
         Intervalo = setInterval(MoverDerecha, 2000);
      });

  })