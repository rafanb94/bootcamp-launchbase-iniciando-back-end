const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards__bg');
const modal = document.querySelector('.modal')

for (let cards__bg of cards) {
  cards__bg.addEventListener('click', function() {
    const videoId = cards__bg.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://youtube.com.br/embed/${videoId}`;
  });
}

for (let cards__bg of cards) {
  cards__bg.addEventListener('click', function() {
    const plano = cards__bg.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${plano}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = "";
});

document.querySelector('.fullsize-modal').addEventListener('click', function(){
  modal.classList.toggle('maximize-modal');
})