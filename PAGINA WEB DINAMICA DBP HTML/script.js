function showCV() {
    //contenedor donde se mostrará la información.
    var cvContent = document.getElementById('cvContent');
    // Recoge los datos.
    var formData = new FormData(document.forms['cvForm']);
    
    // Asigna los datos del formulario a los elementos correspondientes
    cvContent.querySelector('h1').innerText = formData.get('nombre');
    cvContent.querySelector('#cvTelefono').innerText = '📞 Teléfono: ' + formData.get('telefono');
    cvContent.querySelector('#cvCorreo').innerText = '📧 Correo: ' + formData.get('correo');
    cvContent.querySelector('#cvDireccion').innerText = '📍 Dirección: ' + formData.get('direccion');
    cvContent.querySelector('#cvExperiencia').innerText = formData.get('experiencia');
    cvContent.querySelector('#cvFormacion').innerText = formData.get('formacion');
    cvContent.querySelector('#cvIdiomas').innerText = formData.get('idiomas');
    cvContent.querySelector('#cvAptitudes').innerText = formData.get('aptitudes');

    // Proceso para cargar y mostrar la imagen subida.
    var imageFile = formData.get('foto');
    var uploadedImage = document.getElementById('uploadedImage');
    if (imageFile && imageFile.size > 0) {
        // Utilizo FileReader para leer el archivo de la imagen subida.
        var reader = new FileReader();
        
        // se muestra la fuente y el elemento 
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };
        
        reader.readAsDataURL(imageFile);
    } 

    // Muestra el contenedor del CV
    cvContent.style.display = 'flex';
    return false; // Devuelve false para prevenir la recarga de la página
}
