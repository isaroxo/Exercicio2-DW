var divtitulo = document.getElementById("divtitulo");
var tituloisa = document.getElementById("tituloisa");
var tituloroxo = document.getElementById("tituloroxo");
var email = document.getElementById("email");
var behance = document.getElementById("linkbehance");
var textoisa = document.getElementById("textoisa");
var imagemisa = document.getElementById("imagemisa");
var textocopiar = document.getElementById("textocopiar");
var inputemail = document.getElementById("inputemail");

//FUNÇÃO QUE VÊ SE A WIDTH DA JANELA MUDOU
window.addEventListener("resize", function () {
    //WIDTH SUPERIOR A 769
    if (window.matchMedia("(min-width: 769px)").matches) {
        //REMOVE EVENTLISTENERS PARA O TELEMOVEL
        tituloisa.removeEventListener("click", mudarFundoOverTelemovel);
        tituloroxo.removeEventListener("click", mudarFundoOverTelemovel);
        tituloisa.removeEventListener("click", mudarFundoUpTelemovel);
        tituloroxo.removeEventListener("click", mudarFundoUpTelemovel);
        window.removeEventListener("scroll", scrollImagem, false);
        /*console.log ("Não deve fazer o if para telemovel");*/
        email.removeEventListener("click", textoCopiado, false);
        /*console.log ("Deve aparecer o texto copiar email");*/

        // MUDANÇA DAS CORES AO PRESSIONAR O RATO
        tituloisa.addEventListener("mousedown", mudarFundoOver, false);
        tituloroxo.addEventListener("mousedown", mudarFundoOver, false);

        tituloisa.addEventListener("mouseup", mudarFundoUp, false);
        tituloroxo.addEventListener("mouseup", mudarFundoUp, false);
        /*console.log("não muda de cor");*/

        //FOTO APARECE QUANDO SE FAZ HOVER NO TEXTO
        textoisa.addEventListener("mouseover", function () {
            imagemisa.style.opacity = "1";
        }, false);

        textoisa.addEventListener("mouseout", function () {
            imagemisa.style.opacity = "0";
        }, false);
        /*console.log("if para pc");*/

        //INSTRUÇÕES QUE APARECEM AO CLICAR NO EMAIL
        email.addEventListener("click", function () {
            inputemail.select();
            navigator.clipboard.writeText(inputemail.value);
            textocopiar.innerHTML = "Copiado!";
        });
        //INSTRUÇÕES QUE APARECEM AO FAZER HOVER NO EMAIL
        email.addEventListener("mouseover", function () {
            textocopiar.innerHTML = "Copiar email";
        });

        /*console.log("Screen width is at least 500px");*/
    } else {

        // MUDANÇA DAS CORES AO CLICAR COM O RATO
        tituloisa.addEventListener("click", mudarFundoUpTelemovel, false);
        tituloroxo.addEventListener("click", mudarFundoUpTelemovel, false);
        tituloisa.addEventListener("click", mudarFundoOverTelemovel, false);
        tituloroxo.addEventListener("click", mudarFundoOverTelemovel, false);

        /*console.log("muda a cor");*/

        //FOTO APARECE QUANDO SE FAZ SCROLL
        window.addEventListener("scroll", scrollImagem, false);

        //INSTRUÇÕES QUE APARECEM AO CLICAR NO EMAIL
        email.addEventListener("click", textoCopiado, false);

        /*console.log("Screen less than 500px");*/
    }
});

if (window.matchMedia("(max-width: 768px)").matches) {

// MUDANÇA DAS CORES AO CLICAR COM O RATO
    tituloisa.addEventListener("click", mudarFundoUpTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoUpTelemovel, false);
    tituloisa.addEventListener("click", mudarFundoOverTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoOverTelemovel, false);

    /*console.log("muda a cor");*/

//FOTO APARECE QUANDO SE FAZ SCROLL
    window.addEventListener("scroll", scrollImagem, false);

//INSTRUÇÕES QUE APARECEM AO CLICAR NO EMAIL
    email.addEventListener("click", textoCopiado, false);

    /*console.log("Screen less than 500px");*/
}

//FUNÇÃO APARECE FOTO NO TELEMOVEL
function scrollImagem() {
    if (isInViewport(textoisa)) {
        imagemisa.style.opacity = "1";
    }
    /*console.log("if para telemovel");*/
}

//FUNÇÃO APARECE INSTRUÇÃO COPIAR NO TELEMOVEL
function textoCopiado() {
    inputemail.select();
    navigator.clipboard.writeText(inputemail.value);
    textocopiar.innerHTML = "Copiado!";
}

// MUDANÇA DAS CORES AO PRESSIONAR O RATO
tituloisa.addEventListener("mousedown", mudarFundoOver, false);
tituloroxo.addEventListener("mousedown", mudarFundoOver, false);

tituloisa.addEventListener("mouseup", mudarFundoUp, false);
tituloroxo.addEventListener("mouseup", mudarFundoUp, false);
/*console.log("não muda de cor");*/

//FOTO APARECE QUANDO SE FAZ HOVER NO TEXTO
textoisa.addEventListener("mouseover", function () {
    imagemisa.style.opacity = "1";
}, false);

textoisa.addEventListener("mouseout", function () {
    imagemisa.style.opacity = "0";
}, false);
/*console.log("if para pc");*/

//INSTRUÇÕES QUE APARECEM AO CLICAR NO EMAIL
email.addEventListener("click", function () {
    inputemail.select();
    navigator.clipboard.writeText(inputemail.value);
    textocopiar.innerHTML = "Copiado!";
});
//INSTRUÇÕES QUE APARECEM AO FAZER HOVER NO EMAIL
email.addEventListener("mouseover", function () {
    textocopiar.innerHTML = "Copiar email";
});


//FUNÇÃO MUDA AS CORES AO PRESSIONAR O RATO NO COMPUTADOR
function mudarFundoOver() {
    document.body.style.backgroundColor = "#EDD7FF";
    tituloisa.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloisa.style.color = "#EDD7FF";
    tituloroxo.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloroxo.style.color = "#B678E7";
    email.style.color = "#B678E7";
    behance.style.color = "#B678E7";
    textoisa.style.color = "#B678E7";
}

//FUNÇÃO MUDA AS CORES AO DEIXAR DE PRESSIONAR O RATO NO COMPUTADOR
function mudarFundoUp() {
    document.body.style.backgroundColor = "#B678E7";
    tituloroxo.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloroxo.style.color = "#B678E7";
    tituloisa.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloisa.style.color = "white";
    email.style.color = "white";
    behance.style.color = "white";
    textoisa.style.color = "white";
}

//FUNÇÃO MUDA AS CORES AO CLICAR COM O RATO NO TELEMOVEL
function mudarFundoOverTelemovel() {
    document.body.style.backgroundColor = "#EDD7FF";
    tituloisa.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloisa.style.color = "#EDD7FF";
    tituloroxo.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloroxo.style.color = "#B678E7";
    email.style.color = "#B678E7";
    behance.style.color = "#B678E7";
    textoisa.style.color = "#B678E7";
    this.removeEventListener("click", mudarFundoOverTelemovel);
    tituloisa.addEventListener("click", mudarFundoUpTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoUpTelemovel, false);
}

//FUNÇÃO MUDA AS CORES AO CLICAR OUTRA VEZ COM O RATO NO TELEMOVEL
function mudarFundoUpTelemovel() {
    document.body.style.backgroundColor = "#B678E7";
    tituloroxo.style.textShadow = "-1.2px -1.2px 0 #a758e9, 1.2px -1.2px 0 #a758e9, -1.2px 1.2px 0 #a758e9, 1.2px 1.2px 0 #a758e9";
    tituloroxo.style.color = "#B678E7";
    tituloisa.style.textShadow = "0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7, 0 0 0 #B678E7";
    tituloisa.style.color = "white";
    email.style.color = "white";
    behance.style.color = "white";
    textoisa.style.color = "white";
    this.removeEventListener("click", mudarFundoUpTelemovel);
    tituloisa.addEventListener("click", mudarFundoOverTelemovel, false);
    tituloroxo.addEventListener("click", mudarFundoOverTelemovel, false);
}

//MUDA A COR DO EMAIL AO FAZER HOVER POR CIMA DELE
email.addEventListener("mouseover", function () {
    email.style.color = "#B678E7";
    email.style.textShadow = "-1px -1px 0 #a758e9, 1px -1px 0 #a758e9, -1px 1px 0 #a758e9, 1px 1px 0 #a758e9";
    textocopiar.style.visibility = "visible";
    textocopiar.style.opacity = "1";
}, false);
email.addEventListener("mouseout", function () {
    email.style.color = "white";
    email.style.textShadow = "0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9";
    textocopiar.style.visibility = "hidden";
    textocopiar.style.opacity = "0";
}, false);

//MUDA A COR DO BEHANCE AO FAZER HOVER POR CIMA DELE
behance.addEventListener("mouseover", function () {
    behance.style.color = "#B678E7";
    behance.style.textShadow = "-1px -1px 0 #a758e9, 1px -1px 0 #a758e9, -1px 1px 0 #a758e9, 1px 1px 0 #a758e9";
}, false);
behance.addEventListener("mouseout", function () {
    behance.style.color = "white";
    behance.style.textShadow = "0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9, 0 0 0 #a758e9";
}, false);

//FUNÇÃO QUE FAZ O TEXTO MOVER
function movertexto() {
    divtitulo.style.position = "relative";
    divtitulo.style.bottom = "0px";
    email.style.position = "relative";
    email.style.left = "0px";
    behance.style.position = "relative";
    behance.style.right = "0px";
}

window.onload = movertexto();

//CURSOR
var cursor = document.getElementById('cursor');
var scroll = document.getElementById('scroll');

window.addEventListener("mousemove", moverCursor);

function moverCursor(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    scroll.style.top = (e.pageY + 35) + "px";
    scroll.style.left = e.pageX + "px";
}

tituloisa.addEventListener("mouseover", moverCursorOverDiv);
tituloroxo.addEventListener("mouseover", moverCursorOverDiv);

function moverCursorOverDiv() {
    scroll.innerHTML = "Press";
}

tituloisa.addEventListener("mouseout", moverCursorOutDiv);
tituloroxo.addEventListener("mouseout", moverCursorOutDiv);

function moverCursorOutDiv() {
    scroll.innerHTML = "Scroll";
}

//PARTICULAS
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 160, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {"enable": true, "speed": 1, "opacity_min": 0, "sync": false}
        },
        "size": {"value": 4, "random": true, "anim": {"enable": false, "speed": 4, "size_min": 0.3, "sync": false}},
        "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": false, "mode": "bubble"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 150, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
            "repulse": {"distance": 400, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});

//FUNÇÃO QUE VÊ SE UM ELEMENTO ESTÁ VISÍVEL NA JANELA
var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//PARTICULAS QUE DESAPARECEM AO FAZER SCROLL
var particulas = document.getElementById("particles-js");
window.addEventListener('scroll', function () {
    if (isInViewport(tituloisa) || isInViewport(tituloroxo)) {
        particulas.style.visibility = "visible";
        particulas.style.opacity = "1";
        console.log('Está na janela');
    } else {
        particulas.style.visibility = "hidden";
        particulas.style.opacity = "0";
        console.log('Não');
    }
}, false);
