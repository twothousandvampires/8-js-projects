var upperCheck = document.getElementById('upperCase')
var lowerCheck = document.getElementById('lowerCase')
var numsCheck = document.getElementById('numbers')
var symsCheck = document.getElementById('symbols')
var length = document.getElementById('length')
var getBut = document.getElementById('got')
var area = document.getElementById('area')

var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lower = upper.toLowerCase();
var nums = '1234567890';
var symbols = '`~-_+=|\}]{[:;'

getBut.addEventListener('click',()=>{
    generate()
})

function generate(){
    var pass = '';
    var cases =[];
    if(upperCheck.checked) cases.push(upper)
    if(lowerCheck.checked) cases.push(lower)
    if(numsCheck.checked) cases.push(nums)
    if(symsCheck.checked) cases.push(symbols)

    var passLength = length.value < 4 ? 4 : length.value;

    if(cases.length != 0){
        for(let i = 0; i < passLength; i++){
            var elem = cases[Math.floor(Math.random()* cases.length)]
            pass += elem[Math.floor(Math.random() * elem.length)]
        }
        area.value = pass;
    }
    else{
        area.value = "options is empty"
    }   
}
