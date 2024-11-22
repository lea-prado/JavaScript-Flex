// Ruta al archivo JSON
const url = './productos.json';

// Carrito inicial
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Elemento para mostrar la cantidad de productos en el carrito
const cartCountElement = document.getElementById('cart-count');

// Función para actualizar el contador del carrito en la página principal
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = carrito.length;
}

// Llamar a la función para actualizar el contador al cargar la página principal
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
});

// Escuchar cambios en localStorage en otras pestañas
window.addEventListener('storage', function (event) {
    if (event.key === 'carrito') {
        actualizarContadorCarrito();
    }
});
// Función para agregar producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// Fetch para cargar los productos
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar el JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const productosRow = document.querySelector('.row');

        // Iterar sobre los productos y agregarlos al DOM
        data.forEach(producto => {
            const productoCol = document.createElement('div');
            productoCol.classList.add('col-md-4');
            productoCol.innerHTML = `
                <div class="card">
                    <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Descripción de ${producto.nombre}.</p>
                        <p><strong>Precio:</strong> $${producto.precio}</p>
                        <button class="btn btn-primary agregarCarrito" data-id="${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>
            `;
            productosRow.appendChild(productoCol);

            // Agregar evento al botón de agregar al carrito
            const boton = productoCol.querySelector('.agregarCarrito');
            boton.addEventListener('click', () => agregarAlCarrito(producto));
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));

function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = carrito.length;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(productoId) {
    // Filtrar el carrito para eliminar el producto con el id dado
    const carritoActualizado = carrito.filter(producto => producto.id !== productoId);

    // Actualizar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

    // Volver a cargar los productos en el carrito
    cargarCarrito();

    // Actualizar el contador del carrito
    actualizarContadorCarrito();
}
