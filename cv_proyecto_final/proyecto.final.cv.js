/* hago la funcion para cambiar de modo */

var btn=document.getElementById("btn"),
 box_left=document.getElementById("box_left"),
 contador=0;

 function cambio()

 { if(contador==0)
    {
        box_left.classList.add("change");
        contador=1;

        box_right.classList.add("change");
        contador=1;
    }
    else{
        box_left.classList.remove("change");
        contador=0;
    
        box_right.classList.remove("change");
        contador=0;}
    

 }
 
 btn.addEventListener("click",cambio,true)