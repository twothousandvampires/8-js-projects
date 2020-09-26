var cnv = document.getElementsByTagName('canvas')[0]
var ctx = cnv.getContext('2d');
var colorChoise = document.getElementById('color')

var incB = document.getElementById('increased')
var decB = document.getElementById('decreased')
var delB = document.getElementById('delete')
var sizeP = document.getElementById('size')

var pressed = false
var size = 10;
var color = 'black'

sizeP.innerText = size;


delB.addEventListener('click',()=>{
    ctx.clearRect(0,0, cnv.width, cnv.height)
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

function draw(x , y){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}