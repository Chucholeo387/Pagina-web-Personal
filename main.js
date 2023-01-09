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






/* <div class="freelancer">
               <p>Freelancer</p>
                <p>Autonomo</p>
                <p>(Diciembre 2022 - Presente)</p>
                <p>Desarrollo, manutencíon y actualizacíon de aplicaciones web</p>
            </div> */

            const containerExperience = document.querySelector('.container-experience')

            const experiencias = [];

            experiencias.push({
                titulo: 'Técnico de Laboratório',
                empresa: 'Universidad Anhembi Morumbi',
                tiempo: '(Julio 2022 - Octubre 2022)',
                contenido: 'Preparación de clases y asistencia para los profesores.', 
            })
            
            experiencias.push({
                titulo: 'Redactor Online',
                empresa: 'Money Never Sleeps, S.L.',
                tiempo: '(Diciembre 2020 - Julio 2021)',
                contenido: 'Más de 500 artículos sobre diversos temas.', 
            })
            
            experiencias.push({
                titulo: 'Copywriter Digital',
                empresa: 'SmartFlowMarketing',
                tiempo: '(Enero 2021 - Febrero 2021)',
                contenido: 'Elaboración de Landing Page. Descripción de imágenes.', 
            })
            
            experiencias.push({
                titulo: 'Bioanalista | Biomédico',
                empresa: 'Matenernidad Candelaria García',
                tiempo: '(Enero 2020 - Noviembre 2022)',
                contenido: 'Procesamiento de muestras de embarazadas y neonatos.', 
            })
            
            experiencias.push({
                titulo: 'Bioanalista | Biomédico',
                empresa: 'Laboratório Clínico Privado Santos Aníbal Dominicci',
                tiempo: '(Enero 2020 - Enero 2021)',
                contenido: 'Procesamiento de muestras de emergencia, perros y gatos. ', 
            })
            
            for (experiencia of experiencias){
                const container = document.createElement('div')
                const titulo =  document.createElement('p')
                titulo.innerText = experiencia.titulo
                const empresa =  document.createElement('p')
                empresa.innerText = experiencia.empresa
                const tiempo =  document.createElement('p')
                tiempo.innerText = experiencia.tiempo
                const contenido =  document.createElement('p')
                contenido.innerText = experiencia.contenido
                
                container.append(titulo, empresa, tiempo, contenido)
                
                containerExperience.appendChild(container)
            
            }
            



const navPerfil = document.querySelector('.navPerfil')
const navExperience = document.querySelector('.navExperience')
const navPortafolio = document.querySelector('.navPortafolio')
const navEducation = document.querySelector('.navEducation')
const navSobre = document.querySelector('.navSobre')
const navContacto = document.querySelector('.navContacto')

const sectionPerfil = document.querySelector('#sectionPerfil')
const sectionExperience = document.querySelector('#sectionExperience')
const sectionPortafolio = document.querySelector('#sectionPortafolio')
const sectionEducation = document.querySelector('#sectionEducation')
const sectionSobre = document.querySelector('#sectionSobre')
const sectionContacto = document.querySelector('#sectionContacto')

navPerfil.addEventListener('click', scrollToPerfil)
navExperience.addEventListener('click', scrollToExperience)
navPortafolio.addEventListener('click', scrollToPortafolio)
navEducation.addEventListener('click', scrollToEducation)
navSobre.addEventListener('click', scrollToSobre)
navContacto.addEventListener('click', scrollToContacto)

perfilMenucito.addEventListener('click', scrollToPerfil)
experienceMenucito.addEventListener('click', scrollToExperience)
portafolioMenucito.addEventListener('click', scrollToPortafolio)
educationMenucito.addEventListener('click', scrollToEducation)
sobreMenucito.addEventListener('click', scrollToSobre)
contactoMenucito.addEventListener('click', scrollToContacto)


function scrollToPerfil(){
sectionPerfil.scrollIntoView();
}

function scrollToExperience(){
    sectionExperience.scrollIntoView();
    }
function scrollToPortafolio(){
    sectionPortafolio.scrollIntoView();
    }

function scrollToEducation(){
    sectionEducation.scrollIntoView();
     }

function scrollToSobre(){
    sectionSobre.scrollIntoView();
    }

function scrollToContacto(){
    sectionContacto.scrollIntoView();
    }