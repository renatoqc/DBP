document.addEventListener('DOMContentLoaded', function() {

    // Función para mostrar los datos del formulario y permitir su descarga
    function mostrarData(event) {
      event.preventDefault(); // Previene el comportamiento predeterminado del formulario (envío)
    
      // Recupera los valores de los campos del formulario utilizando su ID
      const nombre = document.getElementById('nombre').value;
      const fecha = document.getElementById('fecha').value;
      const ocupacion = document.getElementById('ocupacion').value;
      const contacto = document.getElementById('contacto').value;
      const correo = document.getElementById('correo').value;
      const nacionalidad = document.getElementById('nacionalidad').value;
    
      // Obtiene el valor del botón de radio seleccionado para el nivel de inglés
      const nivelIngles = document.querySelector('input[name="Nivel de Ingles"]:checked') ? document.querySelector('input[name="Nivel de Ingles"]:checked').value : '';
    
      // Obtiene una lista de los lenguajes de programación seleccionados, los convierte a array y une sus valores con coma
      const lenguajesProgramacion = Array.from(document.getElementById('leng').selectedOptions).map(option => option.value).join(', ');
    
      // Recupera el valor ingresado en el campo de aptitudes 
      const aptitudes = document.querySelector('input[list="ap"]').value;
    
      // Recopila todas las habilidades seleccionadas mediante checkboxes y las une en una cadena con comas
      let habilidades = Array.from(document.querySelectorAll('input[name="Habilidades"]:checked')).map(checkbox => checkbox.value).join(', ');
    
      // Recoge el texto introducido en el área de texto del perfil
      const perfil = document.getElementById('perfil').value;
    
      // Construye el contenido del archivo de texto
      const textoArchivo = `Nombre: ${nombre}\nFecha de Nacimiento: ${fecha}\nOcupación: ${ocupacion}\nTeléfono: ${contacto}\nCorreo: ${correo}\nNacionalidad: ${nacionalidad}\nNivel de Inglés: ${nivelIngles}\nLenguajes de Programación: ${lenguajesProgramacion}\nAptitudes: ${aptitudes}\nHabilidades: ${habilidades}\nPerfil: ${perfil}`;
    
      // Crear un blob con los datos en formato de texto
      const blob = new Blob([textoArchivo], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
    
      // Crear un enlace para la descarga del archivo
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'datos.txt';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    
      // Construye el HTML para mostrar los datos, incluyendo estilos internos para presentación
      const htmlDatos = `
          <!DOCTYPE html>
          <html>
              <head>
                  <title>Información del Formulario</title>
                  <style>
                  body {
                    background-color: #f4f4f4; /* Color de fondo  */
                    font-family: Arial, sans-serif; /* Fuente texto */
                    margin: 0; /*  márgenes  */
                    display: flex; /* Establece el modelo de caja flexible  */
                    justify-content: center; /* Alinea horizontalmente al centro */
                    align-items: center; /* Alinea verticalmente al centro */
                    height: 100vh; /* Altura del cuerpo al 100% del viewport */
                }
                .resultado {
                    background-color: #AF5D5D; /* Color para el contenedor de resultados */
                    color: #ffffff; /* Texto */
                    padding: 20px; /* Espaciado interno*/
                    border-radius: 8px; /* Bordes redondeados */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil alrededor del contenedor */
                    width: 90%; /* Ancho relativo  */
                    max-width: 600px; /* Ancho máximo */
                }
                p, h1 {
                    background-color: transparent; /* Fondo transparente  */
                    color: #fff; /* Color de texto blanco */
                }
            </style>
        </head>
        <body>
            <!-- Contenedor para mostrar los datos del formulario -->
            <div class="resultado">
                <h1>Información proporcionada:</h1>
                <!-- Se muestran los valores de los campos del formulario utilizando variables JavaScript -->
                <p><strong>Nombre y Apellidos:</strong> ${nombre}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${fecha}</p>
                <p><strong>Ocupación:</strong> ${ocupacion}</p>
                <p><strong>Telefono:</strong> ${contacto}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
                <p><strong>Nivel de Ingles:</strong> ${nivelIngles}</p>
                <p><strong>Lenguajes de Programación:</strong> ${lenguajesProgramacion}</p>
                <p><strong>Aptitudes:</strong> ${aptitudes}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
                <p><strong>Perfil:</strong> ${perfil}</p>
                </div>
        </body>
    </html>
      `;
    
      // Abre una nueva ventana y escribe el HTML construido para mostrar los datos
      const ventana = window.open('', '_blank');
      ventana.document.write(htmlDatos);
      ventana.document.close();
    }
    
    // Agrega un escuchador de eventos al formulario para manejar el envío con la función mostrarData
    document.getElementById('formulario').addEventListener('submit', mostrarData);
    });