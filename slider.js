const $sliderList = document.querySelector(".aptitude-list");//lista con los elementos del slider
const $slider = document.querySelector(".aptitude-looper");//contenedor del slider
var $sliderListAux;//slider auxiliar que funciona para dar el efecto de carousel infinito

//creo la lista auxiliar clonando la lista de elementos actual
function cloneNodes()
{
    $sliderListAux = $sliderList.cloneNode(true);
    $slider.appendChild($sliderListAux);
}

//agregar o quitar la animación de la lista
function sliderAnimation()
{
    $sliderList.classList.toggle("movList");
    $sliderListAux.classList.toggle("movListAux");
}

//agregar o quitar efecto de pausa
function toggleAnimations()
{
    $sliderList.classList.toggle("pausedAnim");
    $sliderListAux.classList.toggle("pausedAnim");
}

//eventos de entrada y salida del mouse en el slider infinito

$slider.addEventListener("mouseenter",(e)=>
{
    toggleAnimations();
});

$slider.addEventListener("mouseleave",()=>
{
    toggleAnimations();
});

cloneNodes();
sliderAnimation();