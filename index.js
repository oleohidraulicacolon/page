const $navMenuBtn = document.querySelector(".nav-menu-icon");//icono para acceder al menu de mobile
const $navMenu = document.querySelector(".nav-menu");//menu de mobile

var iconClose = "ci:close-big";
var iconOpen = "bx:menu-alt-right"

$navMenuBtn.addEventListener("pointerdown",(e)=>
{
    toggleMenuPanel();
});

$navMenu.addEventListener("pointerdown",(e)=>
{
    if(e.target.classList.contains("nav-menu-item")) toggleMenuPanel();
});

//switchea de icono entre icono de abrir menu y cerrarlo
function toggleMenuPanel()
{
    $navMenu.classList.toggle("show");
    
    if($navMenu.classList.contains("show")) $navMenuBtn.children[0].dataset.icon = iconClose;
    else $navMenuBtn.children[0].dataset.icon = iconOpen;
}

//control de scroll para actualizar la seccion actual donde el usuario esta parado
var scrollTop = 0;

const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('.section');//todas las secciones
const navMenuItems = document.querySelectorAll('.nav-menu-item-content');//todas las opciones del menu mobile

//controla cuanto scrolleo el usuario y averigua la actual seccion para actualizar 
function onSelectionController()
{
    scrollTop = window.scrollY;

    sections.forEach((section,i)=>{
        if(section.offsetTop<(scrollTop+windowHeight/2) && scrollTop<(section.offsetTop+windowHeight/2)) 
        {
            resetSelection();//resetea todas las secciones a no seleccionadas
            navMenuItems[i].classList.add('selection-menu');//selecciona la actual
        }
    });
}

function resetSelection() 
{
    for (let i=0;i<navMenuItems.length;i++) 
    {
        navMenuItems[i].classList.remove('selection-menu');
    }
}

onSelectionController();

//evento que se invoca cada vez que el usuario scrollea y actualiza los menu mobile e indicadores
window.onscroll = ()=>
{
    onSelectionController();
}