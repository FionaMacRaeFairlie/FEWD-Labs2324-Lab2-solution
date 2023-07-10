function registerHandlers()
{
    let source=document.getElementById("westerntitle");
    source.addEventListener('mouseover',handleWestern, false);
    source=document.getElementById("borneotitle");
    source.addEventListener('mouseover',handleBorneo, false);
    alert("Handlers registered");
}

function removeHandlers()
{
    let source=document.getElementById("westerntitle");
    source.removeEventListener('mouseover',handleWestern, false);
    source=document.getElementById("borneotitle");
    source.removeEventListener('mouseover',handleBorneo, false);
    alert("Handlers removed");
}

function handleWestern()
{
    expand("western");
    collapse("borneo");
}
    
function handleBorneo()
{
    expand("borneo");
    collapse("western");
}

function expand(divname)
{
    let mydiv=document.getElementById(divname);
    mydiv.style.display = "block";    
}

function collapse(divname)
{
    let mydiv=document.getElementById(divname);
    mydiv.style.display = "none";        
}

window.onload = function(){
    this.document.getElementById("register").addEventListener('click',registerHandlers, false);
    this.document.getElementById("remove").addEventListener('click',removeHandlers, false);
}