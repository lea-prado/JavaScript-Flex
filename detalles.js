       // Función para cargar los productos del carrito
       function cargarDetallesCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const carritoDetalles = document.getElementById('carrito-detalles');

        if (carrito.length === 0) {
            carritoDetalles.innerHTML = '<p>No has comprado ningún producto.</p>';
        } else {
            carritoDetalles.innerHTML = ''; // Limpiar el contenedor antes de añadir los productos

            carrito.forEach(producto => {
                const productoCol = document.createElement('div');
                productoCol.classList.add('col-md-4');
                productoCol.innerHTML = `
                    <div class="card mb-3">
                        <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p><strong>Precio:</strong> $${producto.precio}</p>
                        </div>
                    </div>
                `;
                carritoDetalles.appendChild(productoCol);
            });
        }
    }

    // Llamar a la función para cargar los detalles cuando se cargue la página
    document.addEventListener('DOMContentLoaded', () => {
        cargarDetallesCarrito();

        // Vaciar el carrito después de que se muestren los detalles
        setTimeout(() => {
            localStorage.removeItem('carrito'); // Elimina el carrito
            console.log('Carrito vaciado');
        }, 5000); // Puedes hacer que el carrito se vacíe después de 5 segundos o después de otro evento
    });

    // Esperar 15 segundos y luego redirigir al index
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirige a index.html
    }, 15000); // Redirige después de 15 segundos