const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

const closeButton = document.querySelector('.close-modal');

for (let card of cards) {
    card.addEventListener('click', function openModal() {
        modalOverlay.classList.add('active');
        const cardId = card.getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${cardId}`;
    })
    
}

closeButton.addEventListener( 'click', closeModal );



function closeModal() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ``;
}


