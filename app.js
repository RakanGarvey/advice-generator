const changeBtn = document.querySelector('button')
const adviceQuote = document.querySelector('h1')
const adviceNum = document.querySelector('h4')

changeBtn.addEventListener('click', (e)=>{
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var advic = data.slip;
            adviceQuote.textContent = '"' + advic.advice + '"'
            adviceNum.textContent = 'ADVICE #' + advic.id
        })
        .catch();
})
