const Data = [
    {
        question : "what year was java script created?",
        a : "1995",
        b : "1989",
        c : "2002",
        d : "1930",
        rigth : "a"
    },
    {
        question : "how many primitive type of data in java script?",
        a : "4",
        b : "5",
        c : "6",
        d : "7",
        rigth : "b"
    },
    {
        question : "the most deep point of the earth called?",
        a : "Mariana Trench",
        b : "Madagascar",
        c : "Russia",
        d : "Baikal",
        rigth : "a"
    },
    {
        question : "the popular biblioteca for js called?",
        a : "jQuery",
        b : "mDuely",
        c : "fZilely",
        d : "gPoint",
        rigth : "a"
    },
    {
        question : "what is the extension of javascript?",
        a : "java",
        b : "jscrt",
        c : "js",
        d : ".js",
        rigth : "c"
    },
]
let points = 0;
let currentQ = 0;

const submit = document.getElementById('sub')

submit.addEventListener('click',function(){   
    const answers = document.getElementsByTagName('input');    
    for(let i = 0; i < answers.length; i++){
        if(answers[i].checked && answers[i].value == Data[currentQ].rigth){
             points ++;
        }
        answers[i].checked = false;
    }
    currentQ++;
    if(currentQ < Data.length){           
        getAnswer();
    }
    else{
        var cont = document.getElementById('container');
        cont.style.fontSize = '2rem'
        cont.innerHTML =`
        your points is
        <p>${points}<p>
        `
    }
})

let a1 = document.getElementById('a');
let a2 = document.getElementById('b');
let a3 = document.getElementById('c');
let a4 = document.getElementById('d');

let q = document.getElementById('question');


function getAnswer() {
    elem = Data[currentQ]
    q.innerText = elem.question;
    a1.innerText = elem.a;
    a2.innerText = elem.b;
    a3.innerText = elem.c;
    a4.innerText = elem.d;
  
}

getAnswer()