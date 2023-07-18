const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// cuando se incluyen buttons dentro de un form, el form le asigna automáticamente al último button el id="submit" así que se recarga la página cuando se presiona ese botón.
// si no se quiere que se recarge la página, solamente hay que ponerle manualmente la id="button" al botón. 

form.addEventListener('submit', sumarInputValues);
// addEventListener tiene la particularidad de que manda a ejecutar la función que le indiques.
// por lo que NO SE DEBEN PONER PARÉNTESIS después del nombre de la función -no poner: btnOnClick()-

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    // event.preventDefault() evita que por defecto se recarge la página al darle al botón
    const sumaInputs = Number(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + sumaInputs;
}

//Number() y parseInt() convierte a número un string

