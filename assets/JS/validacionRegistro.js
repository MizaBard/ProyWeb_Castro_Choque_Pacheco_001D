function validateRegistry(){
    // Tomo el formulario
    const form = document.getElementById("form");

    // Agrego un único escuchador de eventos para validar el formulario
    form.addEventListener("submit", e => {
        // Evito que se envíe el formulario -- sin valores
        e.preventDefault();
        
        // Obtengo los valores de los campos del formulario dentro del escuchador de eventos
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const genero = document.getElementById("genero").value;
        const email = document.getElementById("email").value;
        const apodo = document.getElementById("apodo").value;
        const fNac = document.getElementById("fNac").value;
        
        // Expresiones regulares
        const regexName = /^[a-zA-Z]{4,16}$/; //minimo 4 carácteres - maximo 16 - no simbolos - no nums
        const regexLname = /^[a-zA-Z\s]+$/; //solo carácteres no limites
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //extraido de w3 javascript utilizado en casi todos los correos
        const regexNick = /^[a-zA-Z]{4,16}$/;


        // Validaciones
        if (!regexName.test(nombre)) {
            alert("El nombre debe contener solo letras y tener una longitud de 4 a 16 caracteres");
            return false;
        }
        
        if (!regexLname.test(apellido)) {
            alert("Los apellidos solo deben contener letras");
            return false;
        }

        if (genero === "") {
            alert("Por favor, selecciona tu género");
            return false;
        }

        
        if (!regexEmail.test(email)) {
            alert("El correo es inválido. Por favor, inténtalo nuevamente.");
            return false;
        }

        if (!regexNick.test(apodo)) {
            alert("La longitud de nick es invalida.");
            return false;
            
        }
        



        // Si todas las validaciones pasan, el formulario se enviará
        alert("Registro Completado. :) ");
        form.submit();






    });
}