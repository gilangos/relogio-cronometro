
const hora = document.querySelector('.horas')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const button = document.getElementById("bt")
const cc = document.querySelectorAll('.crono');


var x = 0
var y = 0
var ispaused = true;


setInterval(() => {
    if(!ispaused){
        x++
        if(x > 59){
            x = 0
            y++
            y < 10 ? min.innerHTML = '0'+y : min.innerHTML = y 
        }
        x < 10 ? seg.innerHTML = '0' + x : seg.innerHTML = x                                  
    }
},1000);



function start(){    
    ispaused = false
}

function restart(){
    x = 0
    y = 0
    seg.innerHTML = '0'+ x
    min.innerHTML = '0'+ y
    seg.innerHTML === '00' ? button.innerHTML = 'stop' : null
}

function stop(){
    ispaused = !ispaused
    ispaused === true ? button.innerHTML = 'continue' : button.innerHTML = 'stop';
}

// ## passando o toggle para o array de classes cc

function handlechange(){
    cc.forEach((Element)=>{
        Element.classList.toggle('calc');
    }) 
}


const hrs = document.querySelector('.hor')
const minu = document.querySelector('.min')
const sec = document.querySelector('.seg')


setInterval(() => {
       let relogio = new Date();
       
       let hr = relogio.getHours()
       let sc = relogio.getSeconds()
       let min = relogio.getMinutes()


       min < 10 ? minu.innerHTML = '0'+ min : minu.innerHTML = min
       hr < 10 ? hrs.innerHTML  = '0' + hr : hrs.innerHTML = hr
       sc < 10 ? sec.innerHTML = '0' + sc : sec.innerHTML = sc      
})
