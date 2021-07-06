const colors = ["green","red","rgba(133,122,200)","#f15025"];
const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){  
    let hexColor = '#';
    for(let i = 0; i<6; i++) {
        hexColor += hex[0];

    }
    document.body.style.backgroundColor= hexColor;
    color.textContent= hexColor;
   
    // const random = Math.floor(Math.random()*colors.length)
    // document.body.style.backgroundColor= colors[random];
    // color.textContent= colors[random];
   
})
