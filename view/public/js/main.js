//Boton de Formulario de inicio de seccion
document.querySelector('.botonIngresar').onclick = function() {
    window,location.href="view/public/pages/login.html";
};
//Boton de Formulario de Registro
document.querySelector('.botonHazteCliente').onclick = function() {
    window,location.href="view/public/pages/registro.html";
};

document.querySelector('.botonHazteCliente2').onclick = function() {
    window,location.href="view/public/pages/registro.html";
};

//Boton de Formulario de Registro de Empresas
document.querySelector('.botonEmpresas').onclick = function() {
    window,location.href="view/public/pages/empresas.html";
};

//Boton de Preguntas frecuentes
document.querySelector('.botonPreguntas').onclick = function() {
    window,location.href="view/public/pages/preguntas.html";
};



//Menú hamburguesa
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

