// const passwordInput = document.querySelector("#password");
// const eye = document.querySelector("#eye");

// eye.addEventListener("click", function(){
//     this.classList.toggle("fa-eye-slash")
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
//     passwordInput.setAttribute("type", type)
//   })
let itemss=document.querySelectorAll('ul');

const itemsss= document.querySelectorAll('li');

const button1=document.querySelector('button');

let i1= document.querySelector('ul');

button1.addEventListener('click', e=>
{
    const lin=document.createElement('li');
    lin.textContent="neww";
    i1.prepend(lin);
    e.preventDefault();

});

itemsss.forEach((i)=>
{
i.classList.add('items');
});

itemss.forEach((i)=>{
i.addEventListener('click',e =>
{
    console.log(e);
if(e.target.tagName === "LI")
{
    e.target.remove();
}

});
});

const divv=document.querySelector('.div1');
const text=document.createElement('p');
divv.append(text);
divv.addEventListener('mousemove',e=>
{
text.textContent=`The value of x=${e.offsetX}, y is ${e.offsetY}`;
});

divv.addEventListener('wheel',e=>
{
    text.textContent=`The value of scroll=${e.pageX}, y is ${e.pageY}`;
}
);