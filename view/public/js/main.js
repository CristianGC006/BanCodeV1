const hamburguerMenu = ({ target }) => {

    const activeHamburguerMenu = target.classList.toggle('menu');
    const classNav = document.getElementsByClassName('contenedorNavBotonesHeader');
    const header = document.querySelector('header');

    if (activeHamburguerMenu) {
        classNav[0].classList.add('contenedorNavBotonesHeaderOculta');
        header.classList.add('header__MenuAbierto');
    } else {
        classNav[0].classList.remove('contenedorNavBotonesHeaderOculta');
        header.classList.remove('headerMenuAbierto');
    }
}

const containerNavResize = () => {
    const classNav = document.getElementsByClassName('contenedorNavBotonesHeader');
    if (window.innerWidth >= 768) {
        classNav[0].classList.remove('contenedorNavBotonesHeaderOculta');
    }
}

window.addEventListener('resize', containerNavResize);

window.addEventListener('load', containerNavResize);