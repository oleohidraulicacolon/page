window.addEventListener("scroll", reveal)

var revealPointFactor = 50;

function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for(let i=0;i<reveals.length;i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = revealPointFactor;

        if(revealTop < windowHeight-revealPoint)
        {
            reveals[i].classList.add("reveal-effect");
        }
        else
        {
            reveals[i].classList.remove("reveal-effect");
        }
    }
}

reveal();