document.querySelectorAll("article.avatares img").forEach(elem => {
    elem.addEventListener("click", (e) => {
        document.querySelectorAll("article.avatares img").forEach(elem => {
            if(elem!=e.target){
                elem.classList.remove("clickeado");
            }
        })
        elem.classList.toggle("clickeado");
        reproducirAudio(elem);
    })
})
function reproducirAudio(heroe) {
    let name=heroe.getAttribute("name")
    let audio=document.querySelector(`audio[name="${name}"]`)
    audio.play();
}


function isHalfInViewport(el) {
    const rect = el.getBoundingClientRect();
    const halfHeight = rect.height / 2;
    return (
        rect.top + halfHeight >= 0 &&
        rect.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Al cargar la página, marca las imágenes que ya están en el viewport como no animadas
document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("article.avatares img");
    imgs.forEach(el => {
        if (isHalfInViewport(el)) {
            el.classList.add("no-animar"); // Clase para las imágenes que ya están visibles
        }
    });
});

    window.addEventListener("pointermove", ()=>{
        document.querySelector(`audio[name="MK"]`).play();

    })


// Al hacer scroll, verifica si las imágenes están entrando o saliendo del viewport
document.addEventListener("scroll", () => {
    const imgs = document.querySelectorAll("article.avatares img");

    imgs.forEach(el => {
        el.classList.remove("clickeado");
        if (isHalfInViewport(el)) {
            if (!el.classList.contains("animado") && !el.classList.contains("no-animar")) {
                el.classList.add("animado");
            }
        } else {
            if (el.classList.contains("animado")) {
                el.classList.remove("animado");
            }
            // Elimina la clase 'no-animar' cuando la imagen sale del viewport
            if (el.classList.contains("no-animar")) {
                el.classList.remove("no-animar");
            }
        }
    });
});

document.addEventListener("click",(e)=>{
    document.querySelectorAll("article.avatares img").forEach(elem => {
        if (!e.target.classList.contains("clickeado")) {
            elem.classList.remove("clickeado");
        }
    })
})