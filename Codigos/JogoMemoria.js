const cards = document.querySelectorAll('.memory-card');
const timer = document.querySelector('.timer');

cards.forEach(card => card.addEventListener('click', virarcard));

let card1, card2;
let cartavirou = false;
let TravaCarta = false;

function virarcard() {
    
    if (TravaCarta) return;
    if (this === card1) return;
  
    this.classList.add('flip');
  
    if (!cartavirou) {
      
        cartavirou = true;
      card1 = this;
      return;
    }
  
    card2 = this;
    verificarcards();
  }

function verificarcards(){

    let deumatch = card1.dataset.framework === card2.dataset.framework;

   deumatch ? iguais(): retornarcartas();
    
}

function retornarcartas() {
    
    TravaCarta = true;
    
    setTimeout(function () {

        card1.classList.remove('flip');
        card2.classList.remove('flip');

        retornarcampo();
    }, 1000);
}

function iguais(){

    card1.removeEventListener('click', virarcard);
    card2.removeEventListener('click', virarcard);
   
    checkendgame();
    retornarcampo();
}

function retornarcampo(){
    [cartavirou, TravaCarta] = [false, false];
    [card1, card2] = [null, null];
}

(function shuffle() {
    
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });

  })();

const startTimer = () => {

   this.loop = setInterval(() => {

        const currenttime = +timer.innerHTML;
        timer.innerHTML = currenttime + 1;

    }, 1000);
}

window.onload = () => {
    startTimer();
}

const checkendgame = () => {


}

