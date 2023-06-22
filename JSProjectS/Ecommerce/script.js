const triggerOpen=document.querySelectorAll('[trigger-button]');
const triggerClose=document.querySelectorAll('[close-button]');
const overlay=document.querySelector('[data-overlay]');
const prods=document.querySelector('.prods');
for(let i=0;i<triggerOpen.length;i++)
    {
        let currentId=triggerOpen[i].dataset.target,
        targetEl=document.querySelector(`#${currentId}`)

        const openData= function(){
            targetEl.classList.remove('active');
            overlay.classList.remove('active');
        };
        triggerOpen[i].addEventListener('click',e=>{
            e.preventDefault();
            targetEl.classList.add('active');
            overlay.classList.add('active');
        });

        targetEl.querySelector('[close-button]').addEventListener('click',openData);
        overlay.addEventListener('click',openData);
    }
const submenu=document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click',e=>{
e.preventDefault();
if(e.target.closest('.has-child').classList != 'active'){
    e.target.closest('.has-child').classList.toggle('active');
}
else
{
    submenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('active') : null);
}
}));


const swiper = new Swiper('.sliderbox', {

    loop: true,
    effect:'fade',
    autoHeight:true,
    autoplay: {
        delay: 1500,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
  });


//   const carousel = new Swiper('.carouselbox', {


//     spaceBetween:30,
//     slidesPreview:'auto',
//     centeredSlides:true,
//     // If we need pagination
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
      
//     },
//     breakpoints:{
//         481:
//         {
//             slidesPreview: 2,
//             slidesPerGroup:1,
//             centeredSlides:false,
//         },
//         640:
//         {
//             slidesPreview: 3,
//             slidesPerGroup:3,
//             centeredSlides:false,
//         },
        
//         992:
//         {
//             slidesPreview: 4,
//             slidesPerGroup:4,
//             centeredSlides:false,
//         }
        


//     }
  
//   });

// const cart=document.querySelector('.cart');
// const addbtn=document.querySelector('.shopbag');

// addbtn.addEventListener('click',e=>
// {
//     e.preventDefault();
//     cart.classList.add('active1');
// })
let products = [
    {
        id: 1,
        name: 'The Sweater in Tosca',
        image: 'product_01.jpg',
        image2:'product_01b.jpg',
        price:  799
    },
    {
        id: 2,
        name: 'The Sweater in Tosca',
        image: 'product_02.jpg',
        image2:'product_02b.jpg',
        price: 799
    },
    {
        id: 3,
        name: 'The Sweater in Tosca',
        image: 'product_03.jpg',
        image2:'product_03b.jpg',
        price:  599
    },
    {
        id: 4,
        name: 'The Sweater in Tosca',
        image: 'product_04.jpg',
        image2:'product_04b.jpg',
        price: 799
    },
    {
        id: 5,
        name: 'The Sweater in Tosca',
        image: 'product_05.jpg',
        image2:'product_05b.jpg',
        price: 1699
    },
    {
        id: 6,
        name: 'The Sweater in Tosca',
        image: 'product_06.jpg',
        image2:'product_06b.jpg',
        price: 799
    },
    {
        id: 7,
        name: 'The Sweater in Tosca',
        image: 'product_07.jpg',
        image2:'product_07b.jpg',
        price: 799
    },
    {
        id: 8,
        name: 'The Sweater in Tosca',
        image: 'product_08.jpg',
        image2:'product_08b.jpg',
        price: 799
    }
];



const list=document.querySelector('.adcwrap');
let listCards  = [];

function initApp(){
    let obj = [];
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="dot-image">
            <a href="" class="product-permalink"></a>
            <div class="thumbnail">
              <img src="assets/${value.image}"  alt="">
            </div>
            <div class="thumbnail hover">
                <img src="assets/${value.image2}"  alt="">
              </div>
            <div class="actions">
                <ul>
                    <li><a href=""><i class="ri-star-line"></i></a></li>
                    <li><a href=""><i class="ri-arrow-left-right-line"></i></a></li>
                    <li><a href=""><i class="ri-eye-line"></i></a></li>
                </ul>
            </div>
            <div class="label"><span>-25%</span></div>
        </div>
        <div class="dot-info"></div>
        <h2 class="dot-title"><a href="">The Sweater in Tosca</a></h2>
        <div class="product-price">
            <span class="before">₹999</span>
            <span class="current">₹${value.price}</span>
        </div>
        <div class="button btncls">
            <a href="" class="secondary-btn btnclss" onclick="addToCart(${key})">Add to Cart</a>
        </div>`;
        list.appendChild(newDiv);
        obj.push({id:value.id,qty:0});
    })
    sessionStorage.setItem('dress',JSON.stringify(obj));

}
initApp();

const btn=document.querySelectorAll('.btnclss');
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", e=>{
        e.preventDefault();});
  }
// btn.addEventListener('click',e=>{
//     e.preventDefault();
// })

let x = sessionStorage.getItem('dress');

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCart();

}
const listCard=document.querySelector('.cartul')
function reloadCart(){
  
    let count = 0;
    let c=0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div class="grouping">
              <div class="quantity">
                <div class="control">
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
              </div>
              <div class="thumbnail">
                <a href="">
                    <img src="assets/${value.image}" alt="">
                </a>
              </div>
            </div>
            <div class="variats">
                <h4 class="dot-title"><a href="">${value.name}</a></h4>
                <div class="color grey-color">
                    <span>Color:</span>
                    <span>Tosca</span>
                </div>
                <div class="size grey-color">
                    <span>Size:</span>
                    <span>L</span>
                </div>
                <div class="price">${value.price.toLocaleString()}</div>
                <a href="" class="item-remove">
                    <i class="ri-close-line"></i>
                </a>
            </div>`;
                listCard.appendChild(newDiv);
                c++;
                window.scrollTo(0,0);
                const obj=document.querySelector('.item-floating');
                obj.innerText=`${c}`;

        }
        // else{

        // }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}
