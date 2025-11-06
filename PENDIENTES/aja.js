const input = document.getElementById('tareain');
const boton = document.getElementById('agregarbtn');
const list = document.getElementById('lista');

console.log(input, boton, lista);

boton.addEventListener('click', function(){
    const value = input.value.trim();
    if(value){
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);
        input.value = '';
    } else {
        console.log("El campo está vacío, no se agrega nada.");
    }
});