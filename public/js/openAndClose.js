//abrir y cerrar carrusel
window.addEventListener('load', function(){

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
    //Captura de boton 'abrir'. boton 'cerrar' y carrusel
    let fullCarrusell = document.querySelector('#fullCarrusell')
    let openCarrusel =document.querySelector('#openCarrusel')
    let closeCarrusel =document.querySelector('#closeCarrusel')
  
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento abrir carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    openCarrusel.addEventListener('click', function(){
      fullCarrusell.style.display= 'flex'; 
    })
  
   
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento cerrar carrusel<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    closeCarrusel.addEventListener('click', function(){
      fullCarrusell.style.display= 'none'; 
    })
           
   })
       