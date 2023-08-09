let box1=document.querySelectorAll('.box')[0];
let body=document.querySelector('body')
let box2=document.querySelectorAll('.box')[1];
let box3=document.querySelectorAll('.box')[2];
let box4=document.querySelectorAll('.box')[3];
let boxes=document.querySelectorAll('.box');
boxes.forEach((currntele,index)=>{
    currntele.addEventListener('click',()=>{
        body.style.backgroundColor=currntele.innerHTML
        localStorage.color=currntele.innerHTML;
        
    })

})
if(localStorage.color){
    body.style.backgroundColor=localStorage.color
}