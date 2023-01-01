const iconMenucito = document.querySelector('picture');
const menucito = document.querySelector('.menu-mobile');
const perfilMenucito = document.querySelector('#perfilMenucito');
const experienceMenucito = document.querySelector('#experienceMenucito');
const portafolioMenucito = document.querySelector('#portafolioMenucito');
const educationMenucito = document.querySelector('#educationMenucito');
const sobreMenucito = document.querySelector('#sobreMenucito');
const contactoMenucito = document.querySelector('#contactoMenucito');


iconMenucito.addEventListener('click', toggleMenucito);

perfilMenucito.addEventListener('click', toggleMenucito)
experienceMenucito.addEventListener('click', toggleMenucito)
portafolioMenucito.addEventListener('click', toggleMenucito)
educationMenucito.addEventListener('click', toggleMenucito)
sobreMenucito.addEventListener('click', toggleMenucito)
contactoMenucito.addEventListener('click', toggleMenucito)



function toggleMenucito(){
    menucito.classList.toggle('inactive');
}





