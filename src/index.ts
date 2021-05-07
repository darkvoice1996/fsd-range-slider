import $ from 'jquery'

let inputMin: HTMLInputElement = document.querySelector('.rs-input__min')!
let inputMax: HTMLInputElement = document.querySelector('.rs-input__max')!

let thumbLeft: HTMLDivElement = document.querySelector('.rs-slider__thumb_left')!
let thumbRight: HTMLDivElement = document.querySelector('.rs-slider__thumb_right')!
let range: HTMLDivElement = document.querySelector('.rs-slider__range')!

console.dir(thumbLeft)

function setMinValue() {
    let _this: HTMLInputElement = inputMin,
        min: number = parseInt(_this.min),
        max: number = parseInt(_this.max)

    _this.value = Math.min(parseInt(_this.value), parseInt(inputMax.value)).toString()

    let percent: string = (((parseInt(_this.value) - min) / (max - min)) * 100) + '%'

    thumbLeft.style.left = percent
    range.style.left = percent
}

function setMaxValue() {
    let _this: HTMLInputElement = inputMax,
        min = parseInt(_this.min),
        max = parseInt(_this.max)
    
    _this.value = Math.max(parseInt(_this.value), parseInt(inputMin.value)).toString()

    let percent: string = 100 - (((parseInt(_this.value) - min) / (max - min)) * 100) + '%'

    thumbRight.style.right = percent
    range.style.right = percent
}


inputMin.addEventListener('input', setMinValue)
inputMax.addEventListener('input', setMaxValue)
