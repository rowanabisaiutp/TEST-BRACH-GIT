function enviar() {
    // Capturar los valores ingresados por el usuario
    var titulo = document.getElementById("titulo").value;
    var contenido = document.getElementById("contenido").value;
  
    // Crear un objeto con los datos del post
    var post = {
      titulo: titulo,
      contenido: contenido
    };
  
    // Enviar el post al servidor utilizando la API Fetch
    fetch('/crear-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => {
      if (response.ok) {
        // El post se creó correctamente
        alert('El post se creó correctamente.');
      } else {
        // Hubo un error al crear el post
        alert('Hubo un error al crear el post.');
      }
    })
    .catch(error => {
      // Hubo un error al enviar el POST request
      alert('Hubo un error al enviar el POST request.');
    });
  }
  