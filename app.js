document.getElementById('form_registro').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.querySelector('select[name="genero"]').value;
    const imagen = document.getElementById('file').files[0];  // 
    if (!name || !email || !phone || !direccion || !edad || !genero || !imagen) {
        alert('Por favor, complete todos los campos.');
        return; 
    }

    const imgPermitidas = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!imgPermitidas.includes(imagen.type)) {
        alert('Solo se permite subir imágenes en formato JPG JPEG o PNG.');
        return;
    }
    alert('Formulario enviado correctamente...');
    let salida = '';
    salida += 'Nombre: ' + name + '<br>';
    salida += 'Email: ' + email + '<br>';
    salida += 'Teléfono: ' + phone + '<br>';
    salida += 'Dirección: ' + direccion + '<br>';
    salida += 'Edad: ' + edad + '<br>';
    salida += 'Género: ' + genero + '<br>';
    salida += 'Imagen seleccionada: ' + imagen.name + '<br>';  // Mostrar nombre del archivo de la imagen

    // Mostrar la salida concatenada en el div con id "salida"
    document.getElementById("salida").innerHTML = salida;

    document.getElementById('form_registro').reset();

});

