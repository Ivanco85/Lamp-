class Lamp {
    light
    button
    brightles = 1000
    onOff = false

    constructor(light, button) {
        this.light = light
        this.button = button
        this.button.addEventListener('click', () => {
            this.lampToggle()
        })
        this.light.addEventListener('mousewheel', (event) => {
            this.lampBrigtlesToggle(event)
        })
    }

    lampToggle() {
        console.log('contecst ', this)
        this.button.classList.toggle('button-off')
        this.button.classList.toggle('button-on')
        this.light.classList.toggle('lamp-off')
        this.light.classList.toggle('lamp-on')
        if (this.onOff === false) {
            this.onOff = true
        }
        else {
            this.onOff = false
            this.brightles = 1000
            this.light.style.opacity = 1
        }
    }

    lampBrigtlesToggle(event) {
        if (this.onOff === true) {
            this.brightles = this.brightles + event.deltaY;
            if (this.brightles > 1000) {
                this.brightles = 1000
            }
            if (this.brightles < 100) {
                this.brightles = 100
            }
            const result = this.brightles / 1000
            this.light.style.opacity = result
        }
    }

}

const lamp = new Lamp(document.querySelector('.lamp'), document.querySelector('.button'))


// const lamp = {
//     ligth: document.querySelector('.lamp'),
//     button: document.querySelector('.button'),

//     brightles: 1000,
//     onOff: false,

//     lampToggle: function () {
//         lamp.button.classList.toggle('button-off')
//         lamp.button.classList.toggle('button-on')
//         lamp.ligth.classList.toggle('lamp-off')
//         lamp.ligth.classList.toggle('lamp-on')
//         if (lamp.onOff === false) {
//             lamp.onOff = true
//         }
//         else {
//             lamp.onOff = false
//             lamp.brightles = 1000
//             lamp.ligth.style.opacity = 1

//         }

//     },
//     lampBrigtlesToggle: function (event) {
//         if (lamp.onOff === true) {
//             lamp.brightles = lamp.brightles + event.deltaY;
//             if (lamp.brightles > 1000) {
//                 lamp.brightles = 1000
//             }
//             if (lamp.brightles < 100) {
//                 lamp.brightles = 100
//             }
//             result = lamp.brightles / 1000
//             lamp.ligth.style.opacity = result
//             console.log(result);
//         }
//     }
// }


// lamp.button.addEventListener('click', lamp.lampToggle)

// lamp.ligth.addEventListener('mousewheel', lamp.lampBrigtlesToggle)


