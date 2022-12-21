class Lamp {
    button
    brightles = 1000
    onOff = false

    constructor(button) {
        this.button = button
        // this.light.addEventListener('mousewheel', (event) => {
        //     this.lampBrigtlesToggle(event)
        // })
    }



    // lampToggle() {
    //     console.log('contecst ', this)
    //     this.button.classList.toggle('button-off')
    //     this.button.classList.toggle('button-on')
    //     this.light.classList.toggle('lamp-off')
    //     this.light.classList.toggle('lamp-on')
    //     if (this.onOff === false) {
    //         this.onOff = true
    //     }
    //     else {
    //         this.onOff = false
    //         this.brightles = 1000
    //         this.light.style.opacity = 1
    //     }
    // }

    // lampBrigtlesToggle(event) {
    //     if (this.onOff === true) {
    //         this.brightles = this.brightles + event.deltaY;
    //         if (this.brightles > 1000) {
    //             this.brightles = 1000
    //         }
    //         if (this.brightles < 100) {
    //             this.brightles = 100
    //         }
    //         const result = this.brightles / 1000
    //         this.light.style.opacity = result
    //     }
    // }
}

class Button {
    onOff = false
    button
    lampLight
    
    constructor(btn, lgh) {       
        this.button = btn
        this.lampLight = lgh
        
        this.button.addEventListener('click', () => {
            this.buttonToggle()
            this.lampLight.lampLightToggle()
        })
    }

    buttonToggle() {
        this.button.classList.toggle('button-off')
        this.button.classList.toggle('button-on')
        this.onOff = !this.onOff
    }
}

class LampLight {
    onOff = false
    lampLight

    constructor(lgh) {
        this.lampLight = lgh
    }

    lampLightToggle() {
        this.lampLight.classList.toggle('lamp-off')
        this.lampLight.classList.toggle('lamp-on')
        this.onOff = !this.onOff
    }
}

const lampLight = new LampLight(document.querySelector('.lamp'))
const button = new Button(document.querySelector('.button'), lampLight)

const lamp = new Lamp(button)



