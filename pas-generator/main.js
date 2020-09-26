const upperCheck = document.getElementById('upperCase')
const lowerCheck = document.getElementById('lowerCase')
const numsCheck = document.getElementById('numbers')
const symsCheck = document.getElementById('symbols')
const length = document.getElementById('length')
const getBut = document.getElementById('got')
const area = document.getElementById('area')

const upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lower = upper.toLowerCase();
const nums = '1234567890';
const symbols = '`~-_+=|\}]{[:;'

getBut.addEventListener('click',()=>{
    generate()
})

function generate(){
    let pass = '';
    let cases =[];
    if(upperCheck.checked) cases.push(upper)
    if(lowerCheck.checked) cases.push(lower)
    if(numsCheck.checked) cases.push(nums)
    if(symsCheck.checked) cases.push(symbols)

    let passLength = length.value < 4 ? 4 : length.value;

    if(cases.length != 0){
        for(let i = 0; i < passLength; i++){
            var elem = cases[Math.floor(Math.random()* cases.length)]
            pass += elem[Math.floor(Math.random() * elem.length)]
        }
        area.value = pass;
    }
    else{
        area.value = "options not choised"
    }   
}
