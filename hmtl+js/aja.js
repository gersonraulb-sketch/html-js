// Boton tema
let cambiar = document.getElementById('temabtn');
temabtn.onclick = function(){
    document.body.classList.toggle('dark');
}

const nombre = document.getElementById('nombrein');
const saludar = document.getElementById('saludarbtn');
const mensaje = document.getElementById('msg');

saludar.addEventListener('click', function(){
    const nombre = nombrein.value.trim();
    if (nombre){
        mensaje.textContent = `hola, ${nombre} Como estas`;
    } else {
        mensaje.textContent = `Escriba su nombre`;
    }
});

const mostra = document.getElementById('mostrar');
const fotos = document.getElementById('foto');

mostrar.onclick = function() {
    if (foto.style.display === 'none'){
        foto.style.display = 'block';
        mostrar.textContent = 'Ocultar';
    } else {
        foto.style.display = 'none';
        mostrar.textContent = 'Mostrar';
    }
}

const likebt = document.getElementById('likebtn');
const contador = document.getElementById('contador');
let likes = 0;

likebt.addEventListener('click', function(){
    likes++

    contador.textContent = `Likes: ${likes}`;
})