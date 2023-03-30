//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // desaparecer el menu una vez elegido
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling habilidades
window.onscroll = function() { efectoHabilidades() };

// aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("ps").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("gh").classList.add("barra-progreso4");
    }

}

// selecciona el formulario y agrega un evento de escucha submit
document.getElementById("formulario-contacto").addEventListener("submit", function(event){
  event.preventDefault(); // previene que el formulario se envíe de forma predeterminada

  // obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;

  // validar los campos del formulario (ejemplo: el campo del correo electrónico debe tener un formato válido)
  // ...

  // crear un objeto con los datos del formulario
  var datos = {
    nombre: nombre,
    correo: correo,
    asunto: asunto,
    mensaje: mensaje
  };

  // enviar los datos del formulario a un servidor o guardarlos en una base de datos
  // (en este ejemplo, simplemente mostramos los datos en la consola)
  console.log(datos);

  // mostrar el mensaje emergente
  document.querySelector(".mensaje-enviado").classList.add("mostrado");

  // reiniciar el formulario después de 3 segundos
  setTimeout(function() {
    document.getElementById("formulario-contacto").reset();
    document.querySelector(".mensaje-enviado").classList.remove("mostrado");
  }, 3000);
});
