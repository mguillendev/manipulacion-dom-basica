
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// IMP: cuando se usa querySelector hay que indicar .nombreclass si es una clase o #nombreid si es un id. 
// IMP: cuando se usa getElements (by id, o byclassname..) no se pone . ni # porque ya estás indicando que es un class o Id.
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo'; 
//hi.innerHTML convierte a código HTML (lo modifica)
h1.innerText = 'Patito <br> Feo';
// h1.innerText modifica el título pero solo como texto, por lo que imprime el <br> tal cual. Protege el código frente a hackers
// console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'amarillo');
// h1.setAttribute cambia la clase a lo que le digas
h1.classList.add('rojo');
// h1.classList.add añade la clase que le pongas
h1.classList.remove('verde');
// h1.classList.remove elimina la clase que le pongas

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";
// con input.value puedes asignar un valor por defecto a input. Permite que el usuario cambie el valor, pero te muestra ese por defecto.

const img = document.createElement('img');
img.setAttribute('src', 'https://images.freeimages.com/fic/images/icons/1391/world_of_aqua_folders/128/graphite_urls.png')
// document.createElement crea un elemento html, por ejemplo un html de imagen.
pid.innerHTML = "";

pid.append(img);
//.append añade el contenido en el html indicado
//
console.log(img);