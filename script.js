const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 10
let isPressed = false
colorEl.value='black'
let color = colorEl.value
let x
let y
canvas.addEventListener('mousedown', (e) => {

    isPressed = true
    x = e.offsetX //x positioning
    y = e.offsetY //y positioning

})

canvas.addEventListener('mouseup', (e) => {

    isPressed = false
    x = undefined //x positioning
    y = undefined //y positioning

})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX //x positioning
        const y2 = e.offsetY //y positioning
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
//update values of increase and drease button
function updateSizeOnScreen(){
    sizeEL.innerText = size
}


increaseBtn.addEventListener('click', () => {
    size+=5
    if(size>50){
        size=50
    }
    updateSizeOnScreen()

})

decreaseBtn.addEventListener('click', () => {
    size-=5
    if(size<5){
        size=5
    }
    updateSizeOnScreen()

})
//changes the color
colorEl.addEventListener('change', (e) => color = e.target.value)
//clear the screen
clearEl.addEventListener('click',  () => ctx.clearRect (0,0, canvas.width, canvas.height ))