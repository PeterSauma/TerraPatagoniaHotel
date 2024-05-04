window.addEventListener('load', function(){

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
           
       //1 Banner 
       let fullImgBox1Banner = document.querySelector('#fullImgBox1Banner')
       let closeImg1Banner =document.querySelector('#closeImg1Banner')

   
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento cerrar imagen<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
       //1 Banner DESCUENTOS MAYO 2024
       closeImg1Banner.addEventListener('click', function(){
           fullImgBox1Banner.style.display= 'none'; 
       })
           
   })