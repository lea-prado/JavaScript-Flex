// Obtener carrito desde localStorage
const carritoContainer = document.getElementById('carrito-container');

// Función para eliminar un producto del carrito
function eliminarDelCarrito(productoId) {
    // Filtrar el producto que se eliminará
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carrito.filter(producto => producto.id !== productoId);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

    // Actualizar la vista del carrito y el contador
    cargarCarrito();
    actualizarContadorCarrito();
}

// Función para cargar los productos en la vista del carrito
function cargarCarrito() {
    // Limpiar el contenedor de productos
    carritoContainer.innerHTML = '';

    // Obtener el carrito actualizado desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Si el carrito está vacío
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        // Mostrar los productos en el carrito
        carrito.forEach(producto => {
            const productoCol = document.createElement('div');
            productoCol.classList.add('col-md-4');
            productoCol.innerHTML = `
                <div class="card">
                    <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p><strong>Precio:</strong> $${producto.precio}</p>
                        <button class="btn btn-danger eliminarProducto" data-id="${producto.id}">Eliminar</button>
                    </div>
                </div>
            `;
            carritoContainer.appendChild(productoCol);

            // Agregar evento para eliminar producto
            const botonEliminar = productoCol.querySelector('.eliminarProducto');
            botonEliminar.addEventListener('click', () => eliminarDelCarrito(producto.id));
        });
    }
}

// Función para actualizar el contador en la página principal
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = carrito.length;
}

// Llamar a cargarCarrito para mostrar los productos en el carrito
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    actualizarContadorCarrito();
});

// Escuchar cambios en el carrito en otras pestañas
window.addEventListener('storage', function (event) {
    if (event.key === 'carrito') {
        cargarCarrito();
        actualizarContadorCarrito();
    }
});

// Obtener el formulario y los elementos
const formFinalizarCompra = document.getElementById('form-finalizar-compra');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');

// Función para precargar los datos del usuario (si están en localStorage)
function cargarDatosUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

    nombreInput.value = usuario.nombre || '';
    apellidoInput.value = usuario.apellido || '';
    emailInput.value = usuario.email || '';
}

// Llamar a la función para cargar los datos cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    cargarDatosUsuario();
});

/// Función para finalizar la compra
formFinalizarCompra.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;

    // Simular el proceso de envío (puedes reemplazar esto por una llamada a una API real si lo necesitas)
    console.log(`Enviando correo a ${email} con los detalles de la compra.`);

    // Mostrar el mensaje de confirmación
    mensajeConfirmacion.style.display = 'block';

    // Restablecer el contador de carrito en la página principal
    actualizarContadorCarrito();

    // Opcionalmente, redirigir a otra página de "Gracias por tu compra"
    setTimeout(() => {
        window.location.href = 'gracias.html'; // Asegúrate de crear esta página de gracias
    }, 3000); // Redirige después de 3 segundos para mostrar el mensaje
});

