"use strict";

var forma = document.getElementById("forma"),
    salida = document.getElementById("salida");
    
forma.addEventListener("submit", procesa, false);
forma["limpia"].addEventListener("click", limpiar, false);

 

function procesa(){
  var boleta = forma["boleta"].value,  
      nombre = forma["nombre"].value, 
      grupo = forma["grupo"].value, 
      materia = forma["materia"].value,  
      fecha = new Date(forma["fecha"].value),
      miFecha;
      miFecha = fecha.getDate() + 1 + "/"+ (fecha.getMonth() + 1) +"/"+fecha.getFullYear();
    //salida.textContent="Boleta: "+boleta + " Nombre: "+ nombre+ " Grupo: "+ grupo+ " Teléfono: "+telefono + " Fecha: "+miFecha;
    salida.innerHTML="<dfn>Boleta: "+boleta + "</dfn><br><dfn>Nombre: "+ nombre+ "</dfn><br><dfn>Grupo: "+ grupo+
            "</dfn><br><dfn>Materia: "+materia + "</dfn><br><dfn>Fecha: "+miFecha+"</dfn>";
}

 

function limpiar(){
    forma["clave"].value="";
    forma["nombre"].value="";
    forma["telefono"].value="";
    forma["fecha"].value="";
    salida.textContent="";
}
