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
const form = document.querySelector('#formulario-contacto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.btn-enviar');

// Agregar listener al botón de enviar
btnEnviar.addEventListener('click', enviarFormulario);

// Función para enviar el formulario
function enviarFormulario(event) {
  event.preventDefault();
  
  // Verificar que todos los campos estén llenos
  if (nombre.value === '' || correo.value === '' || asunto.value === '' || mensaje.value === '') {
    mostrarAlerta('Llenar todos los campos por favor', 'error');
    return;
  }

  // Mostrar mensaje de éxito
  mostrarAlerta('Mensaje enviado', 'exito');

  // Limpiar campos del formulario después de 3 segundos
  setTimeout(() => {
    form.reset();
  }, 3000);
}

// Función para mostrar alertas
function mostrarAlerta(mensaje, tipo) {
  const alerta = document.createElement('div');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta', `alerta-${tipo}`);

  // Insertar alerta en el DOM
  form.insertBefore(alerta, form.lastElementChild);

  // Ocultar alerta después de 3 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}




