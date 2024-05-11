//abrir y cerrar carrusel
window.addEventListener('load', function(){

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
    //Captura de boton 'abrir'. boton 'cerrar' y carrusel
    let fullCarrusel = document.querySelector('#fullCarrusel')
    let openCarrusel =document.querySelector('#openCarrusel')
    let closeCarrusel =document.querySelector('#closeCarrusel')
  
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento abrir carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    openCarrusel.addEventListener('click', function(){
      fullCarrusel.style.display= 'flex'; 
    })
  
   
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento cerrar carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    closeCarrusel.addEventListener('click', function(){
      fullCarrusel.style.display= 'none'; 
    })
           
   })
       