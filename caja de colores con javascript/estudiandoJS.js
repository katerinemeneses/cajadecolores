
const caja_div = document.querySelectorAll( '.contenedor__div--hijo');

for(let i=0; i < caja_div.length; i++){


    caja_div[i].addEventListener('click', () => {

        caja_div[i].classList.toggle("color");

    });

}
























