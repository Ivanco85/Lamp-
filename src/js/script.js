const lamp = document.querySelector('.lamp')
const button = document.querySelector('.button')

button.addEventListener('click', buttonClickHandler)

function buttonClickHandler(event) {
    event.target.classList.toggle('button-off')
    event.target.classList.toggle('button-on')
    if (event.target.classList[1] === 'button-off') {
        console.log('Кнопка отжата')
    }
    else {
        console.log('Кнопка нажата')
    }

    lamp.classList.toggle('lamp-off')
    lamp.classList.toggle('lamp-on')
}

