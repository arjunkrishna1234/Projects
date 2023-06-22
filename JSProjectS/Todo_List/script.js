const type=document.querySelector(".btn");
const add1=document.querySelector(".todos");
const add2=document.querySelector(".inp");
const del=document.querySelector(".delete");
const search=document.querySelector(".search input");

type.addEventListener('click',(e)=>
{e.preventDefault();
    let newli= document.createElement('li');
    newli.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
    newli.innerHTML=`<span>${add2.value}</span>
    <i class="far fa-trash-alt delete"></i></li>
    <div class="checks"><i class="fa-solid fa-square-check fa-xl"></i></div>`
    add1.appendChild(newli);
 
    let val=0;
    const tick=document.querySelector(".checks");
    // .forEach((todo)=
    tick.addEventListener('click',(e)=>
    {   if(val===0){
        e.target.style.color="green";
        val=1;
    }
        else
        {
        e.target.style.color="white";
        val=0;
        }
})
  
})

add1.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
        
    }

})
const checkit=(item)=>
{
Array.from(add1.children)
.filter((todo)=>!todo.textContent.includes(item))
.forEach((todo)=>todo.classList.add("filtered"));


Array.from(add1.children)
.filter((todo)=>todo.textContent.includes(item))
.forEach((todo)=>todo.classList.remove("filtered"));
}

search.addEventListener('keyup',()=>{
    const vale=search.value.trim();
    checkit(vale);

})
