windows.unload=function(){
    var encabezado=document.createElement("h1");
    var texto_encabezado=document.createElement("Prueba de DOM");
    encabezado.appendChild(texto_encabezado);
    document.body.appendChild(encabezado);
}