console.log("main.js 연결확인");

const boxEl =  document.querySelector('.box');
//boxEl.addEventListener('click',function(){})
boxEl.addEventListener('click',()=>{
    boxEl.style.backgroundColor="orange";
})