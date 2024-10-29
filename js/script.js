//obtener carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//actualizar carrito
function actualizarCarrito(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
// Función para actualizar el contador en el icono del carrito
function actualizarContadorCarrito() {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById('cart-count').innerText = totalCantidad;

}

//Agregar producto al carrito
function agregarAlCarrito(id, nombre, descripcion){
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente){
        productoExistente.cantidad++;
    } else {
        carrito.push({id, nombre, descripcion, cantidad: 1});
    }
    actualizarCarrito();
    alert(`${nombre} agregado al carrito`);
    location.reload();
}

// evento para los botones de agregar al carrito
document.querySelectorAll('.agregarCarrito').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const card = e.target.closest('.card');
        const nombre = card.querySelector('.card-title').innerText.trim();
        const descripcion = card.querySelector('.card-text').innerText.trim();
        agregarAlCarrito(id, nombre, descripcion);
    });
});

//Actualizar al cargar la pagina
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);