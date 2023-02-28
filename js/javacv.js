document.getElementById("Idioma").onclick = function (){
    const idiomas = document.getElementById("texto-idiomas");
    if(idiomas.textContent == "IDIOMAS")
    {
        idiomas.innerText = 
        `-Ingles: idioma nativo.
        -Español: nivel alto.
        -Italiano: nivel medio.`;
    }else{
        idiomas.innerText =`IDIOMAS`;
    }
}    

document.getElementById("Aptitud").onclick = function (){
    const aptitudes = document.getElementById("texto-aptitudes");
    if(aptitudes.textContent == "APTITUDES")
    {
        aptitudes.innerText = 
        `-Manejo de camara.
        -Facilidad para dirigir grandes grupos.
        -Conocimientos en fotografia`;
    }else{
        aptitudes.innerText ="APTITUDES";
    }
}    

document.getElementById("boton-modo-oscuro").onclick = function(){
    var element = document.body;
    element.classList.toggle("modo-oscuro");
}