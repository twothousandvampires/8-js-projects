const cnv = document.getElementsByTagName('canvas')[0]
const ctx = cnv.getContext('2d');
const colorChoise = document.getElementById('color')

const incB = document.getElementById('increased')
const decB = document.getElementById('decreased')
const delB = document.getElementById('delete')
const sizeP = document.getElementById('size')

let pressed = false
let size = 10;
let color = 'black'

sizeP.innerText = size;

delB.addEventListener('click',()=>{
    ctx.clearRect(0, 0, cnv.width, cnv.height)
})

incB.addEventListener('click',()=>{
    size ++;
    sizeP.innerText  =  size;
})

decB.addEventListener('click',()=>{
    size --;
    sizeP.innerText  =  size;
})

colorChoise.addEventListener('change',(e)=>{
    color = e.target.value
})

cnv.addEventListener('mousedown',()=>{
    pressed = true
})
cnv.addEventListener('mouseup',()=>{
    pressed = false
})

cnv.addEventListener('mousemove', (e)=>{
    if(pressed){
        draw(e.offsetX, e.offsetY);
    }  
})

function draw(x, y){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}