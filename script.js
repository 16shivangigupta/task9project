var box1 = document.querySelector('#box1');
var boxA = document.querySelector('#boxA');
var button1 = document.querySelector('#box1 button');
var icon1 = document.querySelector('#boxA i');

var box2 = document.querySelector('#box2');
var boxB = document.querySelector('#boxB');
var button2 = document.querySelector('#box2 button');
var icon2 = document.querySelector('#boxB i');

var box3 = document.querySelector('#box3');
var boxC = document.querySelector('#boxC');
var button3 = document.querySelector('#box3 button');
var icon3 = document.querySelector('#boxC i');

button1.addEventListener('click',function(){
    box1.style.transform = 'translateX(-100%)';
    boxA.style.transform = 'translateX(-100%)';
})

icon1.addEventListener('click',function(){
    box1.style.transform = 'translateX(0%)';
    boxA.style.transform = 'translateX(0%)';
})

button2.addEventListener('click',function(){
    box2.style.transform = 'translateX(-100%)';
    boxB.style.transform = 'translateX(-100%)';
})

icon2.addEventListener('click',function(){
    box2.style.transform = 'translateX(0%)';
    boxB.style.transform = 'translateX(0%)';
})
button3.addEventListener('click',function(){
    box3.style.transform = 'translateX(-100%)';
    boxC.style.transform = 'translateX(-100%)';
})

icon3.addEventListener('click',function(){
    box3.style.transform = 'translateX(0%)';
    boxC.style.transform = 'translateX(0%)';
})