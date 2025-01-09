const cards = document.querySelectorAll('.card')
const startButton = document.getElementById('startbtn')
const timer = document.getElementById('timer')
const result = document.getElementById('result')

let timerInterval;
let seconds = 0
let flippedCards = []
let quessedCards = 0

startButton.addEventListener('click', (e) => {
    startTimer()
})
function startTimer(){
    timerInterval = setInterval(() => {
        seconds++
        timer.textContent = "Уақыт: " + seconds + " секунд"
    }, 1000)
}
function stopTimer(){
    clearInterval(timerInterval)
    result.textContent = "Сен " + seconds + " осынша секундта ұттың!"
    
}



cards.forEach(card => {
    card.addEventListener('click', (e) => {
        if(flippedCards.length >= 2){
            return;
        }else{
            card.classList.add('flipped')
            flippedCards.push(card)
        }

        if(flippedCards.length==2){
            checkforMatch()
        }
    })
})
    
function checkforMatch(){
    const [card1, card2] = flippedCards

    const img1 = card1.querySelector('.back-view img').src
    const img2 = card2.querySelector('.back-view img').src

    if(img1 === img2){
        flippedCards = []
        quessedCards++
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')
            flippedCards = []
        }, 500)
    }
    if(quessedCards==8){
        stopTimer()
    }
}