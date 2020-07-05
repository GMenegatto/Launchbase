const modalCursosOverlay = document.querySelector('.modalCursos-overlay');

const closeCursosOverlay = document.querySelector('.close-modalCursos');

const cursos = document.querySelectorAll('.curso');

for(let curso of cursos){
    curso.addEventListener("click", function(){
        modalCursosOverlay.classList.add('active');
        const cursoId = curso.getAttribute("id");
        modalCursosOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`;
    });
}

closeCursosOverlay.onclick = function(){
    modalCursosOverlay.classList.remove('active');
    modalCursosOverlay.querySelector('iframe').src = ``;
}