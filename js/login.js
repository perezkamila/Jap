function manejadorDeSubmit(evento){ //Función que se va a ejecutar cuando se haga el submit
    evento.preventDefault();//evita que se haga la petición al servidor enviando los datos
    console.log(document.getElementById('nombre').value);
    console.log(document.getElementById('clave').value);
    sessionStorage.setItem('logueado', true);
    //window.location.href = 'index.html'; // redige al index.html
    let nombre = document.getElementById('nombre').value;
    //return true; // hace que al final la información se envíe al servidor
    if (!nombre){
        alert('llene el nombre');
        return false;
    } else {
        return true; // hace que al final la información se envíe al servidor
    }
}    


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.querySelector('button')[0].addEventListener('click', ()=>{
      location.href = 
    })
});