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

const btn = document.getElementById('button');

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Validar campos requeridos
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  
  console.log(emailInput); // Verificar si el elemento "email" se está obteniendo correctamente
  
  if (!nombreInput.value || !emailInput.value || !mensajeInput.value) {
    // Mostrar alerta de error
    const errorAlert = document.createElement('div');
    errorAlert.classList.add('alert', 'alert--error');
    errorAlert.textContent = 'Por favor, completa todos los campos.';
    document.getElementById('formulario-contacto').appendChild(errorAlert);

    // Retrasar el envío del formulario
    setTimeout(() => {
      btn.value = 'Enviar';
    },3000);
  } else {
    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_dcq3tea';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {


        // Retrasar el reset del formulario
        setTimeout(() => {
          btn.value = 'Enviar';
          document.getElementById('formulario-contacto').reset();
        }, );
                // Mostrar alerta de éxito
                const successAlert = document.createElement('div');
                successAlert.classList.add('alert', 'alert--success');
                successAlert.textContent = 'Mensaje enviado!';
                document.getElementById('formulario-contacto').appendChild(successAlert);
      }, (err) => {
        // Mostrar alerta de error
        const errorAlert = document.createElement('div');
        errorAlert.classList.add('alert', 'alert--error');
        errorAlert.textContent = JSON.stringify(err);
        document.getElementById('formulario-contacto').appendChild(errorAlert);

        // Retrasar el envío del formulario
        setTimeout(() => {
          btn.value = 'Enviar';
        }, 3000);
      });
  }
});




