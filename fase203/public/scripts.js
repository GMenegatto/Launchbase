const modalOverlay = document.querySelector('.modal-overlay');

const cards = document.querySelectorAll('.card');

const closeButton = document.querySelector('.close-modal');

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = card.getAttribute("id");
        window.location.href = `/video?id=${cardId}`
    })
    
}


