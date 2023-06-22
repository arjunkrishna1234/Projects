const correctAnswers=['A', 'B', 'A', 'B'];
const form=document.querySelector('.quiz-form');
const dis=document.querySelector('.result');

form.addEventListener('submit',e=>{
e.preventDefault();
let score=0;
let char1;
const userAnswers =[form.q1.value , form.q2.value , form.q3.value , form.q4.value];

userAnswers.forEach((answer,index)=>
{if(answer === correctAnswers[index])
    {
        score+=25;
    }
});
switch(score)
{
    case 0:char1="You need to improve in this ( ͡° ʖ̯ ͡°)";
            break;
    case 25:char1="Need to work hard, Keep Going ( ͡❛ ͜ʖ ͡❛)✌";
            break;
    case 50:char1="You are getting there! ( ͡⊙ ͜ʖ ͡⊙)";
            break;
    case 75:char1="Genius stuff!! (っ＾▿＾)💨";
            break;
    case 100:char1="Football God!!! ٩( ͡❛ ͜ʖ ͡❛)۶";
            break;
}
scrollTo(0,0);
dis.querySelector('span').textContent=`${score}%`;
dis.classList.remove('d-none');

let i=0;
const timer= setInterval(()=>{
    dis.querySelector('span').textContent=`${i}%`;  
  
    if(i===score)
    {
        clearInterval(timer);
    }
    else
    {
        i++;
    }
},10);

setTimeout(()=>{
    dis.querySelector('h2').textContent=`${char1}`;
},1000);
});