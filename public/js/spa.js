window.addEventListener('load', function(){

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>queySelectors<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
       //1
       let fullSliderSpaBox = document.querySelector('#fullSliderSpaBox')
       let fullSliderSpa = document.querySelector('#fullSliderSpa')
       let closeSpaSlider =document.querySelector('#closeSpaSlider')
       
   
   
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento abrir imagen<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
       //1
       fullSliderSpa.addEventListener('click', function(){
           fullSliderSpaBox.style.display= 'flex'; 
       })
       
   
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Evento cerrar imagen<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
       //1
       closeSpaSlider.addEventListener('click', function(){
           fullSliderSpaBox.style.display= 'none'; 
       })
           
       
   })